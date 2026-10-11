<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view />
    </v-main>

    <VideoDialog v-model="store.videoDialog" />
    <SearchDialog v-model="store.searchDialog" />
    <TranscriptDialog v-model="store.transcriptDialog" />
    <GetNotifiedDialog v-model="store.getNotifiedDialog" />
  </v-app>
</template>

<script lang="ts" setup>
import { useRouteParams } from '@vueuse/router';
import { useI18n } from 'petite-vue-i18n';
import { useLocale } from 'vuetify';

import AppBar from '@/components/AppBar.vue';
import GetNotifiedDialog from '@/components/GetNotifiedDialog.vue';
import SearchDialog from '@/components/SearchDialog.vue';
import TranscriptDialog from '@/components/TranscriptDialog.vue';
import VideoDialog from '@/components/VideoDialog.vue';

const store = useAppStore();
const { locale } = useI18n();
const { current } = useLocale();
const routeLocale = useRouteParams<Locale>('language', 'nl');

watchImmediate(routeLocale, () => {
  store.selectedVideo = null;
  locale.value = routeLocale.value;
  current.value = routeLocale.value;
  store.siteLocale = routeLocale.value;
  document.documentElement.lang = routeLocale.value;
  store.fetchI18n();
});
</script>
