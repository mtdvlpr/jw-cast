<template>
  <v-container>
    <v-row justify="center">
      <v-col class="mt-3" sm="12" xl="8">
        <h1>
          {{ store.translations?.hdgVideos }}
        </h1>
        <v-row>
          <v-col xs="12" sm="6" lg="4" cols="12">
            <v-autocomplete
              v-model="routeLocale"
              :items="store.languages"
              prepend-icon="mdi-translate"
              :item-title="languageLabel"
              class="mt-4"
              item-value="locale"
            />
          </v-col>
        </v-row>
        <v-divider class="mt-8" />
      </v-col>
    </v-row>
    <template v-if="store.siteLanguage">
      <VideoCategory category-name="LatestVideos" grid divider>
        <template #title-actions>
          <v-btn
            :icon="xs ? 'mdi-bell' : undefined"
            :prepend-icon="xs ? undefined : 'mdi-bell'"
            :text="xs ? undefined : channel.ctaLabel"
            variant="outlined"
            color="primary"
            @click="store.getNotifiedDialog = true"
          />
        </template>
      </VideoCategory>
      <VideoCategory
        category-name="StudioMonthlyPrograms"
        :limit="12"
        divider
      />
      <VideoCategory category-name="StudioTalks" :limit="9" divider />
      <VideoCategory
        category-name="StudioNewsReports"
        :limit="9"
        class="mb-3"
      />
    </template>
  </v-container>
</template>

<script lang="ts" setup>
import { languageLabel } from "@/utils/media";
import VideoCategory from "@/components/VideoCategory.vue";
import { useRouteParams } from "@vueuse/router";
import { useDisplay } from "vuetify";

const { xs } = useDisplay();
const store = useAppStore();
const routeLocale = useRouteParams<Locale>("language", "nl");
const channel = computed(() => channels[store.siteLocale] ?? channels.en);
</script>
