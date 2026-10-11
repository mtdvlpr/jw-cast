/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from "vuetify";
import { en, nl } from "vuetify/locale";

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VAppBar: { color: "primary" },
    VAutocomplete: {
      variant: "outlined",
      hideDetails: "auto",
      density: "compact",
    },
    VSelect: {
      variant: "outlined",
      hideDetails: "auto",
      density: "compact",
    },
    VTextField: {
      variant: "outlined",
      hideDetails: "auto",
      density: "compact",
    },
  },
  locale: {
    locale: "nl",
    fallback: "en",
    messages: { en, nl },
  },
  theme: {
    defaultTheme: "system",
    transition: true,
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#4a6da7",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#4a6da7",
        },
      },
    },
  },
});
