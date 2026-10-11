<template>
  <v-app-bar title="JW Cast">
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        variant="text"
        :icon="smAndUp ? undefined : 'mdi-magnify'"
        :text="smAndUp ? store.translations?.lnkSearch : undefined"
        :prepend-icon="smAndUp ? 'mdi-magnify' : undefined"
        @click="store.searchDialog = true"
      />
      <v-btn
        variant="text"
        :text="guideButtonText"
        prepend-icon="mdi-book-open-blank-variant"
        :href="guideUrl"
        target="_blank"
      />
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" />
    </v-toolbar-items>
  </v-app-bar>
</template>
<script setup lang="ts">
import { useI18n } from "petite-vue-i18n";
import { useDisplay, useTheme } from "vuetify";

const theme = useTheme();

const toggleTheme = (e: Event) => {
  theme.setTransitionOrigin(e.target as Element);
  theme.toggle();
};
const store = useAppStore();
const { smAndUp } = useDisplay();

const { t } = useI18n();
const guideUrl = __GUIDE_URL__;
const guideButtonText = computed(() => {
  switch (store.siteLocale) {
    case "en":
    case "nl":
      return t("guide");
    default:
      return store.translations?.lnkHelpView || t("guide");
  }
});
</script>
