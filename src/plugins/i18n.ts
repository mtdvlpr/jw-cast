import { createI18n } from "petite-vue-i18n";

const messages = {
  en: {
    guide: "Guide",
    searchPlaceholder: "Search or paste jw.org link...",
    sort: "Sort",
    transcript: "Transcript",
    videoNotSupported: "Your browser does not support the video tag.",
  },
  nl: {
    guide: "Handleiding",
    searchPlaceholder: "Zoek of plak jw.org link...",
    transcript: "Transcript",
    sort: "Sorteren",
    videoNotSupported: "Jouw browser ondersteunt de video-tag niet.",
  },
};

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
