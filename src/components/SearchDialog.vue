<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="smAndDown"
    max-width="1100px"
    scrollable
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar class="flex-grow-0" color="primary">
        <v-text-field
          v-model="searchQuery"
          autofocus
          class="mx-3"
          clearable
          color="white"
          :placeholder="$t('searchPlaceholder')"
          prepend-inner-icon="mdi-magnify"
          single-line
        />

        <v-toolbar-items>
          <v-btn icon="mdi-close" @click="dialog = false" />
        </v-toolbar-items>
      </v-toolbar>

      <v-card-text :class="['py-3', xs ? 'px-0' : 'px-3']">
        <v-container>
          <v-row v-if="searchResult">
            <v-col :class="['d-flex', 'justify-center', 'flex-column']" lg="8" sm="6">
              <span>
                {{ searchMessage }}
              </span>

              <div v-if="searchResult.messages[1]" v-html="searchResult.messages[1].message" />
            </v-col>

            <v-col v-if="searchResult.sorts.length > 0" lg="4" sm="6">
              <v-select
                v-model="sort"
                item-title="label"
                item-value="key"
                :items="sorts"
                :label="$t('sort')"
                prepend-icon="mdi-sort"
                single-line
              />
            </v-col>
          </v-row>

          <v-row v-else>
            <v-col :class="['d-flex', 'justify-center', 'flex-column']" lg="4" sm="3">
              <v-skeleton-loader :boilerplate="!loading" type="text" />
            </v-col>

            <v-col :class="['d-flex', 'justify-center', 'flex-column']" lg="4" sm="3" />

            <v-col lg="4" sm="6">
              <v-skeleton-loader :boilerplate="!loading" type="avatar,heading" />
            </v-col>
          </v-row>

          <v-row v-if="searchResult">
            <v-col
              v-for="result in searchResult.results"
              :key="result.lank"
              cols="12"
              lg="4"
              sm="6"
            >
              <VideoCard
                :images="{ [result.image.type]: { lg: result.image.url } }"
                :title="result.title"
              />
            </v-col>
          </v-row>

          <v-row v-else>
            <v-col v-for="i in columnCount" :key="i" cols="12" lg="4" sm="6">
              <v-skeleton-loader :boilerplate="!loading" max-height="189" type="image" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';
import VideoCard from '@/components/VideoCard.vue';
import { fetchMediaItem } from '@/utils/media';

const store = useAppStore();
const dialog = defineModel<boolean>();

const { xs, smAndDown, lgAndUp, smAndUp } = useDisplay();

const columnCount = computed(() => {
  if (lgAndUp.value) return 9;
  if (smAndUp.value) return 6;
  return 3;
});

const jwt = ref('');

async function fetchToken() {
  try {
    const response = await fetch(__TOKEN_URL__);
    jwt.value = await response.text();
  } catch (error) {
    console.debug('Error fetching token:', error);
  }
}

onMounted(() => {
  fetchToken();
});

const loading = ref(false);
const searchResult = ref<SearchResponse | null>(null);
const searchMessage = computed(
  () => searchResult.value?.pagination?.label || searchResult.value?.messages[0]?.message,
);

async function fetchResponse(query: string) {
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
      results: data.results.filter((r) => r.subtype !== 'videoCategory'),
    };
  } catch (error) {
    console.debug('Error fetching search response:', error);
  }
  loading.value = false;
}

async function fetchVideo(langCode?: JwLangCode, lank?: string) {
  if (!langCode || !lank) return;

  const video = await fetchMediaItem(langCode, lank);
  if (video) store.openVideo(video);
}

async function search(val: string) {
  console.log('search', val);
  if (!val) {
    searchResult.value = null;
    return;
  }

  const finderRegex = /jw\.org\/finder\?.+&.+/;
  const wtLocaleRegex = /wtlocale=(?<code>[A-Za-z]+)/;
  const localeRegex = /locale=(?<locale>[A-Za-z]+)/;
  const lankRegex = /lank=(?<lank>[\w-]+)/;
  const mediaItemsRegex =
    /jw\.org\/[\w-]+\/.+#(?<locale>[\w-]+)\/mediaitems\/[\w-]+\/(?<lank>[\w-]+)/;

  if (finderRegex.test(val)) {
    const lang = wtLocaleRegex.exec(val)?.groups?.code
      ? store.findLanguageByLocale(localeRegex.exec(val)?.groups?.locale as Locale)?.code
      : store.siteLanguage?.code;
    const lank = lankRegex.exec(val)?.groups?.lank;
    await fetchVideo(lang, lank);
    searchQuery.value = '';
    return;
  }

  if (mediaItemsRegex.test(val)) {
    const match = mediaItemsRegex.exec(val);
    const lang = match?.groups?.locale
      ? store.findLanguageByLocale(match.groups.locale as Locale)?.code
      : store.siteLanguage?.code;
    const lank = match?.groups?.lank;
    await fetchVideo(lang, lank);
    searchQuery.value = '';
    return;
  }

  fetchResponse(val);
}

const searchQuery = ref('');
watchDebounced(
  searchQuery,
  (val) => {
    search(val);
  },
  { debounce: 400 },
);

const sort = ref<(typeof sortKeys)[number]>('rel');
const sortKeys = ['rel', 'newest', 'oldest'] as const;
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
