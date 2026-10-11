<template>
  <Swiper
    :breakpoints="{
      0: { slidesPerView: 1, spaceBetween: 24 },
      600: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
      1264: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
    }"
    :free-mode="{ enabled: true, sticky: true }"
    :modules="[Navigation, FreeMode]"
    navigation
    slides-per-view="auto"
  >
    <SwiperSlide v-for="video in videos" :key="video.guid">
      <VideoCard :images="video.images" :title="video.title" @click="store.openVideo(video)" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">
import type { MediaItemVideo } from '@/types/mediator';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import VideoCard from '@/components/VideoCard.vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

defineProps<{
  videos: MediaItemVideo[];
}>();

const store = useAppStore();
</script>
