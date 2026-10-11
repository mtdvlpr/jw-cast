export type Locale = 'nl' | 'en';
export type JwLangCode = 'O' | 'E';

export interface Language {
  /** Watchtower code such as `O` and `E` */
  code: JwLangCode;
  /** ISO code such as `nl` and `en` */
  locale: Locale;
  /** Name of the language written in the language itself */
  vernacular: string;
  /** Name of the language written in the language used during the request */
  name: string;
  isLangPair?: boolean;
  isSignLanguage?: boolean;
  isRTL?: boolean;
}
