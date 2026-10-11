<template>
  <v-dialog v-model="dialog" max-width="480px" :fullscreen="xs">
    <v-card>
      <v-toolbar :title="channel.ctaLabel" color="primary" density="compact">
        <v-spacer />
        <v-toolbar-items>
          <v-btn icon="mdi-close" @click="dialog = false" />
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text class="pt-6 pb-4" style="font-size: 16px">
        {{ channel.description }}
      </v-card-text>
      <v-card-actions class="pb-4 px-4">
        <v-btn
          :href="channel.link"
          target="_blank"
          rel="noopener"
          color="#25D366"
          prepend-icon="mdi-whatsapp"
          rounded
          variant="elevated"
          :text="channel.buttonLabel"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";

const store = useAppStore();
const dialog = defineModel<boolean>();

const { xs } = useDisplay();

const channel = computed(() => channels[store.siteLocale] ?? channels.en);
</script>
