<template>
  <v-dialog
    v-model="dialog"
    max-width="900px"
    transition="dialog-bottom-transition"
    :fullscreen="smAndDown"
  >
    <v-card>
      <v-toolbar density="compact">
        <v-toolbar-title
          :text="`${videoTitle} (${videoMedia?.durationFormattedHHMM ?? store.selectedVideo?.durationFormattedHHMM})`"
          style="user-select: none"
        />
        <v-toolbar-items>
          <v-tooltip
            :text="store.translations?.lnkHome || 'JW.ORG'"
            location="bottom"
          >
            <template v-slot:activator="{ props: tooltipProps }">
              <v-btn
                icon="mdi-open-in-new"
                :href="jwOrgUrl"
                target="_blank"
                v-bind="tooltipProps"
              />
            </template>
          </v-tooltip>
          <v-btn icon="mdi-close" @click="dialog = false" />
        </v-toolbar-items>
      </v-toolbar>
      <v-responsive v-if="loading" :aspect-ratio="16 / 9" key="loading">
        <v-container
          class="fill-height d-flex align-center justify-center"
          fluid
        >
          <v-progress-circular indeterminate color="primary" size="48" />
        </v-container>
      </v-responsive>
      <v-responsive v-else :aspect-ratio="16 / 9" key="video">
        <media-i18n>
          <video-player :poster="videoPoster">
            <video-neutral-skin
              style="aspect-ratio: 16 / 9; --media-border-radius: 0"
            >
              <video
                id="player"
                crossorigin="anonymous"
                playsinline
                style="width: 100%; height: 100%; object-fit: cover"
              >
                <source
                  v-for="file in (videoMedia ?? store.selectedVideo)?.files
                    .slice()
                    .reverse()"
                  :key="file.label"
                  :src="file.progressiveDownloadURL"
                  :type="file.mimetype"
                  :label="file.label"
                  :size="file.label.slice(0, -1)"
                />
                <track
                  v-if="captionUrl"
                  :src="captionUrl"
                  kind="captions"
                  :srclang="store.videoLocale"
                  :label="
                    store.videoLanguage
                      ? languageLabel(store.videoLanguage)
                      : store.videoLocale
                  "
                />
                <track
                  v-if="subtitleUrl"
                  :src="subtitleUrl"
                  kind="subtitles"
                  :default="true"
                  :srclang="store.subtitleLocale"
                  :label="
                    store.subtitleLanguage
                      ? languageLabel(store.subtitleLanguage)
                      : store.subtitleLocale
                  "
                />
                {{ $t("videoNotSupported") }}
              </video>
            </video-neutral-skin>
          </video-player>
        </media-i18n>
      </v-responsive>
      <v-card-text class="px-3 pb-3">
        <v-container fluid>
          <v-row :no-gutters="xs">
            <v-col cols="12" sm="6">
              <v-autocomplete
                ref="vidLangSelect"
                v-model="store.videoLocale"
                :items="availableLanguages"
                prepend-icon="mdi-volume-high"
                :item-title="languageLabel"
                item-value="locale"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                ref="subLangSelect"
                v-model="store.subtitleLocale"
                :items="availableLanguages"
                prepend-icon="mdi-subtitles"
                :item-title="languageLabel"
                item-value="locale"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions v-if="xs">
          <CastButton
            :media="videoMedia"
            :subtitle-media="subtitleMedia"
            :subtitle-url="subtitleUrl"
          />
        </v-card-actions>
        <v-card-actions>
          <template v-if="!xs">
            <CastButton
              :media="videoMedia"
              :subtitle-media="subtitleMedia"
              :subtitle-url="subtitleUrl"
            />
            <v-spacer />
          </template>
          <DownloadButton :media="videoMedia" />
          <SubtitleButton :media="subtitleMedia" :url="subtitleUrl" />
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { fetchMediaItem, languageLabel } from "@/utils/media";
import { useDisplay } from "vuetify";
import DownloadButton from "@/components/DownloadButton.vue";
import SubtitleButton from "@/components/SubtitleButton.vue";
import CastButton from "@/components/CastButton.vue";

import "@videojs/html/i18n";
import "@videojs/html/video/player";
import "@videojs/html/video/neutral-skin";
import "@videojs/html/i18n/locales/nl/register";

const store = useAppStore();
const dialog = defineModel<boolean>();

const { xs, smAndDown } = useDisplay();

const loading = ref(false);
const videoMedia = ref<MediaItemVideo | null>(null);
const subtitleMedia = ref<MediaItemVideo | null>(null);

const videoTitle = computed(() => store.selectedVideo?.title);
const videoPoster = computed(
  () => findBestImage(store.selectedVideo?.images ?? {}) ?? undefined,
);

const jwOrgUrl = computed(() => {
  const { primaryCategory, languageAgnosticNaturalKey } =
    store.selectedVideo ?? {};

  return `https://www.jw.org/finder?locale=${store.siteLocale}&category=${primaryCategory}&lank=${languageAgnosticNaturalKey}`;
});

const captionUrl = computed(() => {
  const captionFile = (videoMedia.value ?? store.selectedVideo)?.files.find(
    (file) => !!file.subtitles?.url,
  );
  return captionFile?.subtitles?.url || null;
});

const subtitleUrl = computed(() => {
  const subFile = subtitleMedia.value?.files.find(
    (file) => !!file.subtitles?.url,
  );
  return subFile?.subtitles?.url || null;
});

const availableLanguages = computed(() => {
  if (!store.selectedVideo) return [];
  return store.languages.filter((lang) =>
    store.selectedVideo?.availableLanguages.includes(lang.code),
  );
});

const fetchMediaItems = async () => {
  if (!store.selectedVideo) return;

  loading.value = true;

  const [video, subtitle] = await Promise.all([
    store.videoLanguage && store.videoLocale !== store.siteLocale
      ? fetchMediaItem(
          store.videoLanguage.code,
          store.selectedVideo.languageAgnosticNaturalKey,
        )
      : null,
    store.subtitleLanguage && store.subtitleLocale !== store.siteLocale
      ? fetchMediaItem(
          store.subtitleLanguage.code,
          store.selectedVideo.languageAgnosticNaturalKey,
        )
      : null,
  ]);

  videoMedia.value = video ?? store.selectedVideo;
  subtitleMedia.value = subtitle ?? store.selectedVideo;

  loading.value = false;
};

watchImmediate(
  () => [store.selectedVideo, store.videoLocale, store.subtitleLocale],
  () => {
    fetchMediaItems();
  },
);
</script>
