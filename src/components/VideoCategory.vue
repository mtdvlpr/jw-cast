<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" xl="8">
      <div v-if="!hideTitle" class="d-flex align-center justify-space-between mb-6">
        <h2>
          {{ category?.name || categoryName }}
        </h2>

        <slot name="title-actions" />
      </div>

      <v-row v-if="grid">
        <v-col v-for="video in media" :key="video.guid" cols="12" lg="4" sm="6">
          <VideoCard :images="video.images" :title="video.title" @click="store.openVideo(video)" />
        </v-col>
      </v-row>

      <VideoSwiper v-else :videos="media" />
      <v-divider v-if="divider" :class="grid ? 'mt-8' : 'mt-5'" />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import type { CategoryOnDemandKey } from '@/types/media.types';

import VideoCard from '@/components/VideoCard.vue';
import VideoSwiper from '@/components/VideoSwiper.vue';

const props = defineProps<{
  grid?: boolean;
  hideTitle?: boolean;
  divider?: boolean;
  categoryName: CategoryOnDemandKey;
  limit?: number;
  filter?: RegExp;
}>();

const store = useAppStore();
const category = ref<Category | null>(null);

const media = computed((): MediaItemVideo[] => {
  if (!category.value?.media?.length) return [];
  if (!props.filter)
    return category.value.media.filter((v): v is MediaItemVideo => v.type === 'video');
  return category.value.media.filter(
    (video): video is MediaItemVideo =>
      video.type === 'video' && props.filter!.test(video.languageAgnosticNaturalKey),
  );
});

async function fetchCategory() {
  if (!store.siteLanguage) return;

  try {
    const res = await fetch(
      `${__MEDIATOR_URL__}/categories/${store.siteLanguage.code}/${props.categoryName}?detailed=1&clientType=www${props.limit ? `&limit=${props.limit}` : ''}`,
    );

    const data = (await res.json()) as CategoryResultDetailed;
    category.value = data.category;
  } catch (error) {
    category.value = null;
    console.debug('Error fetching category:', error);
  }
}

watchImmediate(
  () => store.siteLocale,
  () => {
    fetchCategory();
  },
);
</script>
