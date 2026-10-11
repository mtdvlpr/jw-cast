<template>
  <v-dialog
    v-model="dialog"
    max-width="800px"
    scrollable
    transition="dialog-bottom-transition"
    :fullscreen="smAndDown"
  >
    <v-card>
      <v-toolbar
        :title="$t('transcript')"
        color="primary"
        density="compact"
        class="flex-grow-0"
      >
        <v-spacer />
        <v-toolbar-items>
          <v-btn icon="mdi-content-copy" @click="copyToClipboard" />
          <v-btn icon="mdi-close" @click="dialog = false" />
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text class="pa-4">
        <v-textarea
          :model-value="subtitles"
          variant="outlined"
          auto-grow
          autofocus
          readonly
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";

const store = useAppStore();
const dialog = defineModel<boolean>();

const { smAndDown } = useDisplay();

const subtitleUrl = computed(() => {
  const subFile = store.subtitleMedia?.files.find(
    (file) => !!file.subtitles?.url,
  );
  return subFile?.subtitles?.url || null;
});

const vtt = ref<string | null>(null);

const subtitles = computed(() => {
  if (!vtt.value || vtt.value.length === 0) {
    return "";
  }
  vtt.value = vtt.value.replace(/.+ --> .+/g, "");
  vtt.value = vtt.value.replace(/<\/c>/g, "");
  vtt.value = vtt.value.replace(/<.+?>/g, "");
  vtt.value = vtt.value.replace(/^\s*$/g, "");
  vtt.value = vtt.value.replace(/&nbsp;/g, " ");

  let lines = vtt.value.split("\n");
  lines.splice(0, 2);
  lines = lines.map((line) => line.trim());
  lines = lines.filter((line) => line.length > 0);
  lines = lines.filter((line, index, total) => line !== total[index + 1]);

  // TODO: solve text being cut off
  return lines.join("\n").replace(/(\.\.\.\n|\. \. \.\n|([^.])\n)/g, "$2 ");
});

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(subtitles.value ?? "");
  } catch (e) {
    console.debug("Failed to copy transcript to clipboard:", e);
  }
};

const fetchTranscript = async () => {
  if (!subtitleUrl.value) return;

  try {
    const res = await fetch(subtitleUrl.value);
    vtt.value = await res.text();
  } catch (e) {
    console.debug("Error fetching transcript:", e);
  }
};

watchImmediate(subtitleUrl, async () => {
  fetchTranscript();
});

watch(dialog, (val) => {
  if (!val) store.subtitleMedia = null;
});
</script>
