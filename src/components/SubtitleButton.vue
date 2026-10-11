<template>
  <v-menu transition="slide-y-transition">
    <template #activator="{ props: menuProps }">
      <v-btn
        color="primary"
        v-bind="menuProps"
        :disabled="!media && !url"
        prepend-icon="mdi-download"
        :text="store.translations?.hdgSubtitles"
        variant="elevated"
      />
    </template>

    <v-list density="compact">
      <v-list-item
        v-if="url"
        :href="url"
        prepend-icon="mdi-download"
        :title="store.translations?.btnDownload"
      />

      <v-list-item
        v-if="media"
        prepend-icon="mdi-text"
        :title="$t('transcript')"
        @click="store.openTranscript(media)"
      />
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import type { MediaItemVideo } from '@/types/mediator';

defineProps<{
  media: MediaItemVideo | null;
  url: string | null;
}>();

const store = useAppStore();
</script>
