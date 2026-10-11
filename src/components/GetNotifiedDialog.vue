<template>
  <v-dialog v-model="dialog" :fullscreen="xs" max-width="480px">
    <v-card>
      <v-toolbar color="primary" density="compact" :title="channel.ctaLabel">
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
          color="#25D366"
          :href="channel.link"
          prepend-icon="mdi-whatsapp"
          rel="noopener"
          rounded
          target="_blank"
          :text="channel.buttonLabel"
          variant="elevated"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify';

const store = useAppStore();
const dialog = defineModel<boolean>();

const { xs } = useDisplay();

const channel = computed(() => channels[store.siteLocale] ?? channels.en);
</script>
