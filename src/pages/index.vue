<template>
  <v-container>
    <v-row justify="center">
      <v-col class="mt-3" sm="12" xl="8">
        <h1>
          {{ store.translations?.hdgVideos }}
        </h1>

        <v-row>
          <v-col cols="12" lg="4" sm="6" xs="12">
            <v-autocomplete
              v-model="routeLocale"
              class="mt-4"
              :item-title="languageLabel"
              item-value="locale"
              :items="store.languages"
              prepend-icon="mdi-translate"
            />
          </v-col>
        </v-row>

        <v-divider class="mt-8" />
      </v-col>
    </v-row>

    <template v-if="store.siteLanguage">
      <VideoCategory category-name="LatestVideos" divider grid>
        <template #title-actions>
          <v-btn
            color="primary"
            :icon="xs ? 'mdi-bell' : undefined"
            :prepend-icon="xs ? undefined : 'mdi-bell'"
            :text="xs ? undefined : channel.ctaLabel"
            variant="outlined"
            @click="store.getNotifiedDialog = true"
          />
        </template>
      </VideoCategory>

      <VideoCategory category-name="StudioMonthlyPrograms" divider :limit="12" />

      <VideoCategory category-name="StudioTalks" divider :limit="9" />

      <VideoCategory category-name="StudioNewsReports" class="mb-3" :limit="9" />
    </template>
  </v-container>
</template>

<script lang="ts" setup>
import { useRouteParams } from '@vueuse/router';
import { useDisplay } from 'vuetify';
import VideoCategory from '@/components/VideoCategory.vue';
import { languageLabel } from '@/utils/media';

const { xs } = useDisplay();
const store = useAppStore();
const routeLocale = useRouteParams<Locale>('language', 'nl');
const channel = computed(() => channels[store.siteLocale] ?? channels.en);
</script>
