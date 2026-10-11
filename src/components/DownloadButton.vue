<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props: menuProps }">
      <v-btn
        color="primary"
        v-bind="menuProps"
        variant="elevated"
        prepend-icon="mdi-download"
        :disabled="!media"
        :text="store.translations?.btnSearchFilterVideo"
      />
    </template>

    <v-list density="compact">
      <v-list-item
        v-for="file in media?.files.filter((f) => f.label !== '144p')"
        :key="file.checksum"
        :title="`${file.label} (${Math.floor(file.filesize / 1048576)} MB)`"
        :href="file.progressiveDownloadURL"
      />
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import type { MediaItemVideo } from "@/types/mediator";

defineProps<{
  media: MediaItemVideo | null;
}>();

const store = useAppStore();
</script>
