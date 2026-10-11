<template>
  <v-dialog
    v-model="dialog"
    max-width="1100px"
    scrollable
    transition="dialog-bottom-transition"
    :fullscreen="smAndDown"
  >
    <v-card>
      <v-toolbar color="primary" class="flex-grow-0">
        <v-text-field
          v-model="searchQuery"
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('searchPlaceholder')"
          single-line
          color="white"
          clearable
          autofocus
          class="mx-3"
        />
        <v-toolbar-items>
          <v-btn icon="mdi-close" @click="dialog = false" />
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text :class="['py-3', xs ? 'px-0' : 'px-3']">
        <v-container>
          <v-row v-if="searchResult">
            <v-col
              sm="6"
              lg="8"
              :class="['d-flex', 'justify-center', 'flex-column']"
            >
              <span>
                {{ searchMessage }}
              </span>
              <div
                v-if="searchResult.messages[1]"
                v-html="searchResult.messages[1].message"
              ></div>
            </v-col>
            <v-col v-if="searchResult.sorts.length > 0" sm="6" lg="4">
              <v-select
                v-model="sort"
                :items="sorts"
                item-value="key"
                item-title="label"
                prepend-icon="mdi-sort"
                :label="$t('sort')"
                single-line
              />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col
              sm="3"
              lg="4"
              :class="['d-flex', 'justify-center', 'flex-column']"
            >
              <v-skeleton-loader type="text" :boilerplate="!loading" />
            </v-col>
            <v-col
              sm="3"
              lg="4"
              :class="['d-flex', 'justify-center', 'flex-column']"
            >
            </v-col>
            <v-col sm="6" lg="4">
              <v-skeleton-loader
                type="avatar,heading"
                :boilerplate="!loading"
              />
            </v-col>
          </v-row>
          <v-row v-if="searchResult">
            <v-col
              v-for="result in searchResult.results"
              :key="result.lank"
              sm="6"
              lg="4"
              cols="12"
            >
              <VideoCard
                :title="result.title"
                :images="{ [result.image.type]: { lg: result.image.url } }"
              />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col v-for="i in columnCount" :key="i" sm="6" lg="4" cols="12">
              <v-skeleton-loader
                type="image"
                max-height="189"
                :boilerplate="!loading"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";
import { fetchMediaItem } from "@/utils/media";
import VideoCard from "@/components/VideoCard.vue";

const store = useAppStore();
const dialog = defineModel<boolean>();

const { xs, smAndDown, lgAndUp, smAndUp } = useDisplay();

const columnCount = computed(() => {
  if (lgAndUp.value) return 9;
  if (smAndUp.value) return 6;
  return 3;
});

const jwt = ref("");

const fetchToken = async () => {
  try {
    const response = await fetch(__TOKEN_URL__);
    jwt.value = await response.text();
  } catch (e) {
    console.debug("Error fetching token:", e);
  }
};

onMounted(() => {
  fetchToken();
});

const loading = ref(false);
const searchResult = ref<SearchResponse | null>(null);
const searchMessage = computed(
  () =>
    searchResult.value?.pagination?.label ||
    searchResult.value?.messages[0]?.message,
);

const fetchResponse = async (query: string) => {
  loading.value = true;

  try {
    const url = `${__SEARCH_URL__}/${store.siteLanguage?.code}/videos?sort=${sort.value}&q=${query}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${jwt.value}`,
      },
    });

    if (res.status === 401) {
      fetchToken();
      fetchResponse(query);
      return;
    }

    const data = (await res.json()) as SearchResponse;
    searchResult.value = {
      ...data,
      results: data.results.filter((r) => r.subtype !== "videoCategory"),
    };
  } catch (e) {
    console.debug("Error fetching search response:", e);
  }
  loading.value = false;
};

const fetchVideo = async (langCode?: JwLangCode, lank?: string) => {
  if (!langCode || !lank) return;

  const video = await fetchMediaItem(langCode, lank);
  if (video) store.openVideo(video);
};

const search = async (val: string) => {
  console.log("search", val);
  if (!val) {
    searchResult.value = null;
    return;
  }

  const finderRegex = /jw\.org\/finder\?.+&.+/;
  const wtLocaleRegex = /wtlocale=(?<code>[A-Za-z]+)/;
  const localeRegex = /locale=(?<locale>[A-Za-z]+)/;
  const lankRegex = /lank=(?<lank>[\w-]+)/;
  const mediaItemsRegex =
    /jw\.org\/[\w-]+\/.+#(?<locale>[\w-]+)\/mediaitems\/(?<category>[\w-]+)\/(?<lank>[\w-]+)/;

  if (finderRegex.test(val)) {
    const lang = wtLocaleRegex.exec(val)?.groups?.code
      ? store.findLanguageByLocale(
          localeRegex.exec(val)?.groups?.locale as Locale,
        )?.code
      : store.siteLanguage?.code;
    const lank = lankRegex.exec(val)?.groups?.lank;
    await fetchVideo(lang, lank);
    searchQuery.value = "";
    return;
  }

  if (mediaItemsRegex.test(val)) {
    const match = mediaItemsRegex.exec(val);
    const lang = match?.groups?.locale
      ? store.findLanguageByLocale(match.groups.locale as Locale)?.code
      : store.siteLanguage?.code;
    const lank = match?.groups?.lank;
    await fetchVideo(lang, lank);
    searchQuery.value = "";
    return;
  }

  fetchResponse(val);
};

const searchQuery = ref("");
watchDebounced(
  searchQuery,
  (val) => {
    search(val);
  },
  { debounce: 400 },
);

const sort = ref<(typeof sortKeys)[number]>("rel");
const sortKeys = ["rel", "newest", "oldest"] as const;
const sorts = computed(() => {
  if (!searchResult.value?.sorts.length) return [];
  return sortKeys.map((key) => ({
    key,
    label: searchResult.value?.sorts.find((s) => s.link.includes(key))?.label,
  }));
});

watch(sort, () => {
  fetchResponse(searchQuery.value);
});
</script>
