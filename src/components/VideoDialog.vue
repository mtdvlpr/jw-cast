<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="smAndDown"
    max-width="900px"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar density="compact">
        <v-toolbar-title
          style="user-select: none"
          :text="`${videoTitle} (${videoMedia?.durationFormattedHHMM ?? store.selectedVideo?.durationFormattedHHMM})`"
        />

        <v-toolbar-items>
          <v-tooltip location="bottom" :text="store.translations?.lnkHome || 'JW.ORG'">
            <template #activator="{ props: tooltipProps }">
              <v-btn
                :href="jwOrgUrl"
                icon="mdi-open-in-new"
                target="_blank"
                v-bind="tooltipProps"
              />
            </template>
          </v-tooltip>

          <v-btn icon="mdi-close" @click="dialog = false" />
        </v-toolbar-items>
      </v-toolbar>

      <v-responsive v-if="loading" key="loading" :aspect-ratio="16 / 9">
        <v-container class="fill-height d-flex align-center justify-center" fluid>
          <v-progress-circular color="primary" indeterminate size="48" />
        </v-container>
      </v-responsive>

      <v-responsive v-else key="video" :aspect-ratio="16 / 9">
        <video
          id="player"
          crossorigin="anonymous"
          :data-poster="videoPoster"
          playsinline
          style="width: 100%; height: 100%; object-fit: cover"
        >
          <source
            v-for="file in (videoMedia ?? store.selectedVideo)?.files.slice().reverse()"
            :key="file.label"
            :label="file.label"
            :size="file.label.slice(0, -1)"
            :src="file.progressiveDownloadURL"
            :type="file.mimetype"
          />

          <track
            v-if="captionUrl"
            kind="captions"
            :label="store.videoLanguage ? languageLabel(store.videoLanguage) : store.videoLocale"
            :src="captionUrl"
            :srclang="store.videoLocale"
          />

          <track
            v-if="subtitleUrl"
            :default="true"
            kind="subtitles"
            :label="
              store.subtitleLanguage ? languageLabel(store.subtitleLanguage) : store.subtitleLocale
            "
            :src="subtitleUrl"
            :srclang="store.subtitleLocale"
          />
          {{ $t('videoNotSupported') }}
        </video>
      </v-responsive>

      <v-card-text class="px-3 pb-3">
        <v-container fluid>
          <v-row :no-gutters="xs">
            <v-col cols="12" sm="6">
              <v-autocomplete
                ref="vidLangSelect"
                v-model="store.videoLocale"
                :item-title="languageLabel"
                item-value="locale"
                :items="availableLanguages"
                prepend-icon="mdi-volume-high"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-autocomplete
                ref="subLangSelect"
                v-model="store.subtitleLocale"
                :item-title="languageLabel"
                item-value="locale"
                :items="availableLanguages"
                prepend-icon="mdi-subtitles"
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
import Plyr from 'plyr';
import { useDisplay } from 'vuetify';
import CastButton from '@/components/CastButton.vue';
import DownloadButton from '@/components/DownloadButton.vue';
import SubtitleButton from '@/components/SubtitleButton.vue';
import { fetchMediaItem, languageLabel } from '@/utils/media';
import 'plyr/dist/plyr.css';

const store = useAppStore();
const dialog = defineModel<boolean>();

const { xs, smAndDown } = useDisplay();

const loading = ref(false);
const videoMedia = ref<MediaItemVideo | null>(null);
const subtitleMedia = ref<MediaItemVideo | null>(null);

const videoTitle = computed(() => store.selectedVideo?.title);
const videoPoster = computed(() => findBestImage(store.selectedVideo?.images ?? {}) ?? undefined);

const jwOrgUrl = computed(() => {
  const { primaryCategory, languageAgnosticNaturalKey } = store.selectedVideo ?? {};

  return `https://www.jw.org/finder?locale=${store.siteLocale}&category=${primaryCategory}&lank=${languageAgnosticNaturalKey}`;
});

const captionUrl = computed(() => {
  const captionFile = (videoMedia.value ?? store.selectedVideo)?.files.find(
    (file) => !!file.subtitles?.url,
  );
  return captionFile?.subtitles?.url || null;
});

const subtitleUrl = computed(() => {
  const subFile = subtitleMedia.value?.files.find((file) => !!file.subtitles?.url);
  return subFile?.subtitles?.url || null;
});

const availableLanguages = computed(() => {
  if (!store.selectedVideo) return [];
  return store.languages.filter((lang) =>
    store.selectedVideo?.availableLanguages.includes(lang.code),
  );
});

async function fetchMediaItems() {
  if (!store.selectedVideo) return;

  loading.value = true;

  const [video, subtitle] = await Promise.all([
    store.videoLanguage && store.videoLocale !== store.siteLocale
      ? fetchMediaItem(store.videoLanguage.code, store.selectedVideo.languageAgnosticNaturalKey)
      : null,
    store.subtitleLanguage && store.subtitleLocale !== store.siteLocale
      ? fetchMediaItem(store.subtitleLanguage.code, store.selectedVideo.languageAgnosticNaturalKey)
      : null,
  ]);

  videoMedia.value = video ?? store.selectedVideo;
  subtitleMedia.value = subtitle ?? store.selectedVideo;

  loading.value = false;
}

watchImmediate(
  () => [store.selectedVideo, store.videoLocale, store.subtitleLocale],
  () => {
    fetchMediaItems();
  },
);

const player = ref<Plyr | null>(null);

function loadPlayer() {
  if (player.value) {
    player.value.destroy();
  }

  const options =
    videoMedia.value?.files.map((file) => +file.label.slice(0, -1)).toSorted((a, b) => b - a) ?? [];

  player.value = new Plyr('#player', {
    captions: { active: true, language: store.subtitleLocale, update: true },
    quality: { default: options[0], options },
    speed: { selected: 1, options: [0.75, 1, 1.25, 1.5] },
  });

  const tracks: Plyr.Track[] = [];
  if (captionUrl.value) {
    tracks.push({
      kind: 'captions',
      label: languageLabel(store.videoLanguage!),
      srcLang: store.videoLocale,
      src: captionUrl.value,
    });
  }
  if (subtitleUrl.value) {
    tracks.push({
      kind: 'subtitles',
      label: languageLabel(store.subtitleLanguage!),
      srcLang: store.subtitleLocale,
      src: subtitleUrl.value,
    });
  }
  player.value.source = {
    type: 'video',
    poster: videoPoster.value,
    title: store.selectedVideo?.title,
    sources:
      videoMedia.value?.files.map((file) => ({
        src: file.progressiveDownloadURL,
        type: file.mimetype,
        size: +file.label.slice(0, -1),
      })) ?? [],
    tracks,
  };
}

watch(loading, (val) => {
  if (!val) {
    nextTick(() => {
      loadPlayer();
    });
  }
});

watch(dialog, (val) => {
  if (val) return;

  if (player.value) {
    player.value.pause();
  } else {
    document.querySelector('video')?.pause();
  }
});
</script>
<style lang="scss">
.img-loading {
  .v-image__image {
    filter: blur(5px);
  }
}

.plyr {
  height: 100%;
  --plyr-font-size-xlarge: 36px;
  --plyr-font-size-large: 22px;
}

.plyr__poster {
  background-size: cover !important;
}
</style>
