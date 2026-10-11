<template>
  <v-card hover ripple rounded @click="emit('click')">
    <v-img
      :src="findBestImage(images, '2x1')!"
      :aspect-ratio="2 / 1"
      class="text-white align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title style="white-space: normal; user-select: none">
        {{ title }}
      </v-card-title>
    </v-img>
  </v-card>
</template>
<script setup lang="ts">
import type { ImagesObject } from "@/types/mediator";
import { findBestImage } from "@/utils/media";

defineProps<{
  title: string;
  images: ImagesObject;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>
