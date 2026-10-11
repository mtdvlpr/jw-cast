import type { ImageType } from "@/types/media.types";

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type RequiredFields<T, K extends keyof T> = Required<Pick<T, K>> & T;

export type Translations = {
  StreamThisChannel: string;
  btnBack: string;
  btnChromecast: string;
  btnClose: string;
  btnDisableFullScreen: string;
  btnDisableSubtitles: string;
  btnDownload: string;
  btnEnableFullScreen: string;
  btnEnableSubtitles: string;
  btnGenericOff: string;
  btnGenericOn: string;
  btnMute: string;
  btnNext: string;
  btnOkay: string;
  btnPause: string;
  btnPlay: string;
  btnPlayAllInCategory: string;
  btnPlayFromBeginning: string;
  btnPlayVideo: string;
  btnPlayWithSubtitles: string;
  btnPlayWithoutSubtitles: string;
  btnPrevious: string;
  btnQualitySelector: string;
  btnReplay: string;
  btnResume: string;
  btnSearchFilterAll: string;
  btnSearchFilterAudio: string;
  btnSearchFilterVideo: string;
  btnSeeMore: string;
  btnSelectLanguage: string;
  btnSelectedQualityItem: string;
  btnShuffleDialogAction: string;
  btnSkipBack: string;
  btnSkipForward: string;
  btnStartStreaming: string;
  btnStillListening: string;
  btnStillWatching: string;
  btnStillWatchingGoBack: string;
  btnStillWatchingGoHome: string;
  btnStop: string;
  btnStreamThisChannel: string;
  btnUnmute: string;
  btnWatchFromBeginning: string;
  btnWatchNow: string;
  btnWatchWithSubtitles: string;
  btnWatchWithoutSubtitles: string;
  btnYes: string;
  hdgChannelGuide: string;
  hdgDefaultChannel: string;
  hdgLanguage: string;
  hdgSearch: string;
  hdgSettings: string;
  hdgSubtitles: string;
  hdgVideoResolution: string;
  hdgVideos: string;
  hdgWatchNow: string;
  hdrComingUpNext: string;
  homepageAudioBlockLink: string;
  homepageAudioBlockText: string;
  homepageAudioBlockTitle: string;
  homepagePlatformsBlockText: string;
  homepagePlatformsTitle: string;
  homepageStreamingBlockLink: string;
  homepageStreamingBlockText: string;
  homepageStreamingBlockTitle: string;
  homepageVODBlockLink: string;
  homepageVODBlockText: string;
  homepageVODBlockTitle: string;
  itemPlayAllDesc: string;
  itemPlayAllTitle: string;
  itemShuffleDesc: string;
  itemShuffleTitle: string;
  lblAirPlay: string;
  lblAudioPlayer: string;
  lblAutomatic: string;
  lblCast: string;
  lblChannelGuide: string;
  lblChooseLanguage: string;
  lblCurrentTime: string;
  lblDisconnectCast: string;
  lblDispSubttlMixedCase: string;
  lblDisplaySubtitles: string;
  lblDownload: string;
  lblDuration: string;
  lblDurationTime: string;
  lblFavoriteChannel: string;
  lblFeatured: string;
  lblLangSearchInput: string;
  lblLanguageFilter: string;
  lblLastChannel: string;
  lblLength: string;
  lblLoaded: string;
  lblLoading: string;
  lblLoadingImage: string;
  lblMediaIsLoading: string;
  lblMoreFromCollection: string;
  lblNowPlaying: string;
  lblOff: string;
  lblOn: string;
  lblPlaybackRateNormal: string;
  lblProgress: string;
  lblProgressBar: string;
  lblProgressBarTiming: string;
  lblQuality: string;
  lblResultsShown: string;
  lblSave: string;
  lblSaved: string;
  lblSearchInput: string;
  lblSettings: string;
  lblShare: string;
  lblShuffleCategory: string;
  lblSignLangFilter: string;
  lblSpeed: string;
  lblStreamingLoadingText: string;
  lblSubtitles: string;
  lblTimestampPlayingRange: string;
  lblTimestampStartingAt: string;
  lblVideoDwnldOptions: string;
  lblVideoPlayer: string;
  lblVolumeLevel: string;
  lnkAboutUs: string;
  lnkBackToVideos: string;
  lnkDownload: string;
  lnkHelp: string;
  lnkHelpView: string;
  lnkHome: string;
  lnkHomeView: string;
  lnkLanguage: string;
  lnkPrivacy: string;
  lnkRssSubscribe: string;
  lnkSearch: string;
  lnkSearchVideos: string;
  lnkSeeAllMixedCase: string;
  lnkSettings: string;
  lnkShare: string;
  lnkShareUppCase: string;
  lnkTerms: string;
  msgAPIFailureErrorBody: string;
  msgAPIFailureErrorTitle: string;
  msgAreYouStillListeningQuestion: string;
  msgAreYouStillWatchingBody: string;
  msgAreYouStillWatchingQuestion: string;
  msgAreYouStillWatchingTitle: string;
  msgGeneralErrorDialogBody: string;
  msgGeneralErrorDialogTitle: string;
  msgMediaNotSupported: string;
  noSearchResultsText: string;
  refineSearchResultsText: string;
  rokuChannelName: string;
  rokuStoreDescription: string;
  rokuWebDescription: string;
  searchResultsCountText: string;
  titleLangListAppletv: string;
  titleLangListRoku: string;
  titleLangListWeb: string;
  ttlAudio: string;
  ttlHome: string;
  ttlStreaming: string;
  ttlVOD: string;
  MsgNoContent: string;
};

// Search

export interface SearchResponse {
  layout: string[];
  results: Result[];
  messages: Message[];
  insight: QueryInsight;
  pagination: Pagination;
  filters: Filter[];
  sorts: Sort[];
}

/**
{
  "type": "item",
  "subtype": "videoCategory",
  "links": {
    "jw.org": "https://www.jw.org/finder?docid=1011214&category=2017Convention&wtlocale=O&appLanguage=O&prefer=content"
  },
  "lank": "mc-2017Convention",
  "context": "Speciale programma’s en bijeenkomsten",
  "title": "Geef het niet op!-congres 2017",
  "image": {
    "type": "lss",
    "url": "https://b.jw-cdn.org/images/jwb-categories/cat-programs-events/programs-events_univ_lss_lg.png"
  },
  "insight": {
    "rank": 2,
    "lank": "mc-2017Convention"
  }
}
 */
export interface Result {
  type: string;
  subtype: string;
  links: Links;
  lank: string;
  context: string;
  title: string;
  image: Image;
  duration: string;
  insight: Insight;
  snippet: string;
}

export interface Links {
  "jw.org": string;
}

export interface Image {
  type: ImageType;
  url: string;
}

export interface Insight {
  rank: number;
  lank: string;
}

export interface Message {
  type: string;
  message: string;
}

export interface QueryInsight {
  query: string;
  filter: string;
  sort: string;
  offset: number;
  page: number;
  total: Total;
}

export interface Total {
  value: number;
  relation: string;
}

export interface Pagination {
  label: string;
  links: Link[];
}

export interface Link {
  type: string;
  label: string;
  link: string;
  selected: boolean;
}

export interface Filter {
  label: string;
  link: string;
  selected?: boolean;
}

export interface Sort {
  label: string;
  link: string;
  selected: boolean;
}
