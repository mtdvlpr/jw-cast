<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props: menuProps }">
      <v-btn
        color="primary"
        v-bind="menuProps"
        variant="elevated"
        prepend-icon="mdi-download"
        :disabled="!media && !url"
        :text="store.translations?.hdgSubtitles"
      />
    </template>

    <v-list density="compact">
      <v-list-item
        v-if="url"
        :title="store.translations?.btnDownload"
        prepend-icon="mdi-download"
        :href="url"
      />
      <v-list-item
        v-if="media"
        :title="$t('transcript')"
        prepend-icon="mdi-text"
        @click="store.openTranscript(media)"
      />
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import type { MediaItemVideo } from "@/types/mediator";

defineProps<{
  media: MediaItemVideo | null;
  url: string | null;
}>();

const store = useAppStore();
</script>
