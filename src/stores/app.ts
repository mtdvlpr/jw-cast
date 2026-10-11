import { useLocalStorage } from "@vueuse/core";

export const useAppStore = defineStore("app", () => {
  const allLanguages = useLocalStorage<
    Partial<Record<Locale | "-", Language[]>>
  >("languages", {});
  const languages = computed<Language[]>(
    () =>
      allLanguages.value[siteLocale.value] ??
      allLanguages.value["-"] ??
      allLanguages.value["en"] ??
      allLanguages.value["nl"] ?? [
        {
          code: "O",
          locale: "nl",
          vernacular: "Nederlands",
          name: "Nederlands",
        },
        {
          code: "E",
          locale: "en",
          vernacular: "English",
          name: "Engels",
        },
      ],
  );

  const allTranslations = useLocalStorage<
    Partial<Record<Locale, Translations>>
  >("translations", {});

  const translations = computed<Translations | null>(
    () =>
      allTranslations.value[siteLocale.value] ??
      allTranslations.value["en"] ??
      allTranslations.value["nl"] ??
      null,
  );

  const siteLocale = ref<Locale>("nl");
  const siteLanguage = computed(() =>
    languages.value.find((l) => l.locale === siteLocale.value),
  );

  const videoLocale = useLocalStorage<Locale>("videoLocale", "en");
  const videoLanguage = computed(() =>
    languages.value.find((l) => l.locale === videoLocale.value),
  );

  const subtitleLocale = useLocalStorage<Locale>("subtitleLocale", "nl");
  const subtitleLanguage = computed(() =>
    languages.value.find((l) => l.locale === subtitleLocale.value),
  );

  const searchDialog = ref(false);
  const videoDialog = ref(false);
  const transcriptDialog = ref(false);
  const getNotifiedDialog = ref(false);

  const selectedVideo = ref<MediaItemVideo | null>(null);
  const subtitleMedia = ref<MediaItemVideo | null>(null);

  const findLanguageByCode = (code: JwLangCode) =>
    languages.value.find((language) => language.code === code);

  const findLanguageByLocale = (locale: Locale) =>
    languages.value.find((language) => language.locale === locale);

  const fetchLanguages = async () => {
    const localeLanguages = allLanguages.value[siteLocale.value];
    if (localeLanguages?.length && localeLanguages.length > 2) return;

    try {
      const res = await fetch(
        `${__MEDIATOR_URL__}/languages/${siteLanguage.value?.code ?? "-"}/all?clientType=www`,
      );
      const data = (await res.json()) as { languages: Language[] };
      allLanguages.value[siteLanguage.value?.locale ?? "-"] = [
        ...data.languages
          .filter((l) => ["nl", "en"].includes(l.locale))
          .sort((a, b) => b.locale.localeCompare(a.locale)),
        ...data.languages.filter((l) => !["nl", "en"].includes(l.locale)),
      ];
    } catch (e) {
      console.debug("Failed to fetch languages", e);
    }
  };

  const fetchTranslations = async () => {
    if (!siteLanguage.value) return;
    if (allTranslations.value[siteLocale.value]) return;

    try {
      const res = await fetch(
        `${__MEDIATOR_URL__}/translations/${siteLanguage.value.code}`,
      );
      const data = (await res.json()) as {
        translations: Record<JwLangCode, Translations>;
      };
      allTranslations.value[siteLocale.value] =
        data.translations[siteLanguage.value.code];
    } catch (e) {
      console.debug("Failed to fetch translations", e);
    }
  };

  const fetchI18n = async () => {
    if (!siteLanguage.value) {
      await fetchLanguages();
      await fetchTranslations();
      return;
    }
    await Promise.allSettled([fetchLanguages(), fetchTranslations()]);
  };

  const openVideo = (video: MediaItemVideo) => {
    selectedVideo.value = video;
    videoDialog.value = true;
  };

  const openTranscript = (video: MediaItemVideo) => {
    subtitleMedia.value = video;
    transcriptDialog.value = true;
  };

  return {
    languages,
    fetchI18n,
    findLanguageByCode,
    findLanguageByLocale,
    openVideo,
    openTranscript,
    translations,
    siteLocale,
    videoLocale,
    subtitleLocale,
    siteLanguage,
    videoLanguage,
    subtitleLanguage,
    searchDialog,
    videoDialog,
    transcriptDialog,
    getNotifiedDialog,
    selectedVideo,
    subtitleMedia,
  };
});
