<template>
  <v-row justify="center">
    <v-col sm="12" xl="8" cols="12">
      <div
        v-if="!hideTitle"
        class="d-flex align-center justify-space-between mb-6"
      >
        <h2>
          {{ category?.name || categoryName }}
        </h2>
        <slot name="title-actions"></slot>
      </div>
      <v-row v-if="grid">
        <v-col v-for="video in media" :key="video.guid" sm="6" lg="4" cols="12">
          <VideoCard
            :title="video.title"
            :images="video.images"
            @click="store.openVideo(video)"
          />
        </v-col>
      </v-row>
      <VideoSwiper v-else :videos="media" />
      <v-divider v-if="divider" :class="grid ? 'mt-8' : 'mt-5'" />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import type { CategoryOnDemandKey } from "@/types/media.types";

import VideoSwiper from "@/components/VideoSwiper.vue";
import VideoCard from "@/components/VideoCard.vue";

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
    return category.value.media.filter(
      (v): v is MediaItemVideo => v.type === "video",
    );
  return category.value.media.filter(
    (video): video is MediaItemVideo =>
      video.type === "video" &&
      props.filter!.test(video.languageAgnosticNaturalKey),
  );
});

const fetchCategory = async () => {
  if (!store.siteLanguage) return;

  try {
    const res = await fetch(
      `${__MEDIATOR_URL__}/categories/${store.siteLanguage.code}/${props.categoryName}?detailed=1&clientType=www${props.limit ? `&limit=${props.limit}` : ""}`,
    );

    const data = (await res.json()) as CategoryResultDetailed;
    category.value = data.category;
  } catch (e) {
    category.value = null;
    console.debug("Error fetching category:", e);
  }
};

watchImmediate(
  () => store.siteLocale,
  () => {
    fetchCategory();
  },
);
</script>
