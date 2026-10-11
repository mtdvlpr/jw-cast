<template>
  <v-menu transition="slide-y-transition">
    <template #activator="{ props: menuProps }">
      <v-btn
        color="primary"
        v-bind="menuProps"
        :disabled="!media"
        prepend-icon="mdi-download"
        :text="store.translations?.btnSearchFilterVideo"
        variant="elevated"
      />
    </template>

    <v-list density="compact">
      <v-list-item
        v-for="file in media?.files.filter((f) => f.label !== '144p')"
        :key="file.checksum"
        :href="file.progressiveDownloadURL"
        :title="`${file.label} (${Math.floor(file.filesize / 1048576)} MB)`"
      />
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import type { MediaItemVideo } from '@/types/mediator';

defineProps<{
  media: MediaItemVideo | null;
}>();

const store = useAppStore();
</script>
