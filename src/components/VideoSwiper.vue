<template>
  <Swiper
    :modules="[Navigation, FreeMode]"
    :free-mode="{ enabled: true, sticky: true }"
    slides-per-view="auto"
    navigation
    :breakpoints="{
      0: { slidesPerView: 1, spaceBetween: 24 },
      600: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
      1264: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
    }"
  >
    <SwiperSlide v-for="video in videos" :key="video.guid">
      <VideoCard
        :title="video.title"
        :images="video.images"
        @click="store.openVideo(video)"
      />
    </SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">
import type { MediaItemVideo } from "@/types/mediator";
import VideoCard from "@/components/VideoCard.vue";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

defineProps<{
  videos: MediaItemVideo[];
}>();

const store = useAppStore();
</script>
