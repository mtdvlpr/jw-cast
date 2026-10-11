<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props: menuProps }">
      <v-tooltip
        location="right"
        :text="
          store.translations?.[
            `btnPlayWith${subtitleUrl ? '' : 'out'}Subtitles`
          ]
        "
      >
        <template v-slot:activator="{ props: tooltipProps }">
          <v-btn
            color="primary"
            v-bind="{ ...menuProps, ...tooltipProps }"
            variant="elevated"
            prepend-icon="mdi-cast"
            :disabled="!media"
            :text="store.translations?.btnPlay"
          />
        </template>
      </v-tooltip>
    </template>

    <v-list density="compact">
      <v-list-item
        v-for="file in media?.files.filter((f) => f.label !== '144p')"
        :key="file.checksum"
        :title="file.label"
        :href="getChromecastUrl(file)"
        target="_blank"
      />
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import type { MediaItemVideo } from "@/types/mediator";

const props = defineProps<{
  media: MediaItemVideo | null;
  subtitleMedia: MediaItemVideo | null;
  subtitleUrl: string | null;
}>();

const store = useAppStore();

const getChromecastUrl = (file: MediaItemFileVideo) => {
  const videoUrl = btoa(file.progressiveDownloadURL);
  // sfgc: subtitle foreground color = #ffffff
  // ss: subtitle size = 1.1
  let url = `https://chromecast.smplayer.info/index.php?sfgc=I2ZmZmZmZg==&ss=MS4x&url=${videoUrl}`;

  try {
    url += `&title=${btoa(props.media!.title.replaceAll("—", "-"))}`;
  } catch (error) {
    // No title then, I guess
  }

  // const poster = findBestImage(props.media?.images ?? {});
  // if (poster) url += `&poster=${btoa(poster)}`;

  if (props.subtitleUrl) {
    const subtitles = btoa(props.subtitleUrl);
    url += `&subtitles=${subtitles}`;
  }

  return url;
};
</script>
