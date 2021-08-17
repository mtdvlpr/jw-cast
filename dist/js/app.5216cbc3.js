(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],d=0,g=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&g.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(g.length)g.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/jw-cast/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"85ec":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("31bd"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("JW Cast")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{text:"",href:"https://github.com/semkeijsper/jw-cast#handleiding",target:"_blank"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-book-open-blank-variant")]),t._v(" "+t._s(t.guideButtonText)+" ")],1)],1)],1),a("v-main",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-3",attrs:{sm:"12",xl:"8"}},[a("strong",{staticClass:"text-h3 font-weight-bold",domProps:{textContent:t._s(t.translations.hdgVideos)}}),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6",lg:"4",cols:"12"}},[a("v-autocomplete",{staticClass:"mt-4",attrs:{items:t.languages,"hide-details":"","prepend-icon":"mdi-translate","item-text":t.languageLabel,"item-value":"locale",outlined:"",dense:""},model:{value:t.siteLanguage,callback:function(e){t.siteLanguage=e},expression:"siteLanguage"}})],1)],1),a("v-divider",{staticClass:"mt-8"})],1)],1),a("VideoCategory",{attrs:{categoryName:"JWB2021Convention",grid:"",divider:""}}),a("VideoCategory",{attrs:{categoryName:"LatestVideos",divider:""}}),a("VideoCategory",{staticClass:"mb-3",attrs:{categoryName:"StudioMonthlyPrograms"}})],1)],1),a("VideoDialog")],1)},r=[],s=a("1da1"),l=a("d4ec"),c=a("bee2"),u=a("262e"),d=a("2caf"),g=(a("b0c0"),a("99af"),a("4de4"),a("96cf"),a("9ab4")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.category?a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{sm:"12",xl:"8",cols:"12"}},[a("p",{staticClass:"text-h4 font-weight-medium mb-6",domProps:{textContent:t._s(t.category.name)}}),t.grid?a("VideoGrid",{attrs:{videos:t.category.media}}):a("VideoSwiper",{attrs:{videos:t.category.media}}),t.divider?a("v-divider",{class:t.grid?"mt-8":"mt-5"}):t._e()],1)],1):t._e()},p=[],b=a("1b40"),f=a("4bb5"),h=a("bc3a"),m=a.n(h),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",t._l(t.videos,(function(e){return a("v-col",{key:e.guid,attrs:{sm:"6",lg:"4",cols:"12"}},[a("v-card",{attrs:{hover:"",ripple:"",rounded:""},on:{click:function(a){return t.onClickVideo(e)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.images.lss.lg,"aspect-ratio":2,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[a("v-card-title",{staticStyle:{"word-break":"normal","user-select":"none"},domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)},O=[],j=function(t){Object(u["a"])(a,t);var e=Object(d["a"])(a);function a(){return Object(l["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"onClickVideo",value:function(t){this.setSelectedVideo(t),this.setVideoDialog(!0)}}]),a}(b["c"]);Object(g["a"])([Object(b["b"])({required:!0})],j.prototype,"videos",void 0),Object(g["a"])([f["b"]],j.prototype,"setVideoDialog",void 0),Object(g["a"])([f["b"]],j.prototype,"setSelectedVideo",void 0),j=Object(g["a"])([b["a"]],j);var V=j,L=V,w=a("2877"),k=a("6544"),_=a.n(k),C=a("b0af"),x=a("99d9"),S=a("62ad"),M=a("adda"),U=a("0fd9"),P=Object(w["a"])(L,y,O,!1,null,null,null),T=P.exports;_()(P,{VCard:C["a"],VCardTitle:x["c"],VCol:S["a"],VImg:M["a"],VRow:U["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Swiper",{attrs:{options:t.swiperOptions}},[t._l(t.videos,(function(e){return a("SwiperSlide",{key:e.guid},[a("v-card",{staticClass:"mb-4",attrs:{hover:"",ripple:"",rounded:""},on:{click:function(a){return t.onClickVideo(e)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.images.lss.lg,"aspect-ratio":2,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[a("v-card-title",{staticStyle:{"word-break":"normal","user-select":"none"},domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),t.mdAndUp?a("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}):t._e(),t.mdAndUp?a("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}):t._e(),a("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2)},D=[],I=function(t){Object(u["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(l["a"])(this,a),t=e.apply(this,arguments),t.swiperOptions={slidesPerView:"auto",freeMode:!0,freeModeSticky:!0,paginationClickable:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,slidesPerGroup:1,spaceBetween:24,scrollbar:{el:".swiper-scrollbar",hide:!1}},600:{slidesPerView:2,slidesPerGroup:2,spaceBetween:24,scrollbar:{el:".swiper-scrollbar",hide:!1}},1264:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24,scrollbar:{el:".swiper-scrollbar",hide:!0}}}},t}return Object(c["a"])(a,[{key:"mdAndUp",get:function(){return this.$vuetify.breakpoint.mdAndUp}},{key:"onClickVideo",value:function(t){this.setSelectedVideo(t),this.setVideoDialog(!0)}}]),a}(b["c"]);Object(g["a"])([Object(b["b"])({required:!0})],I.prototype,"videos",void 0),Object(g["a"])([f["b"]],I.prototype,"setVideoDialog",void 0),Object(g["a"])([f["b"]],I.prototype,"setSelectedVideo",void 0),I=Object(g["a"])([b["a"]],I);var A=I,B=A,E=Object(w["a"])(B,R,D,!1,null,null,null),$=E.exports;_()(E,{VCard:C["a"],VCardTitle:x["c"],VImg:M["a"]});var N=function(t){Object(u["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(l["a"])(this,a),t=e.apply(this,arguments),t.category=null,t}return Object(c["a"])(a,[{key:"mounted",value:function(){this.loadCategory()}},{key:"loadCategory",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get(this.categoryUrl);case 3:this.category=t.sent.data.category,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.category=null;case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"categoryUrl",get:function(){return"".concat(this.baseUrl,"/categories/").concat(this.siteLanguage.code,"/").concat(this.categoryName,"?detailed=1&clientType=www")}},{key:"onVideoLanguageChange",value:function(t,e){t.locale!==e.locale&&this.loadCategory()}}]),a}(b["c"]);Object(g["a"])([Object(b["b"])({type:Boolean})],N.prototype,"grid",void 0),Object(g["a"])([Object(b["b"])({type:Boolean})],N.prototype,"divider",void 0),Object(g["a"])([Object(b["b"])({required:!0})],N.prototype,"categoryName",void 0),Object(g["a"])([f["c"]],N.prototype,"baseUrl",void 0),Object(g["a"])([Object(f["a"])("getSiteLanguage")],N.prototype,"siteLanguage",void 0),Object(g["a"])([Object(b["d"])("siteLanguage")],N.prototype,"onVideoLanguageChange",null),N=Object(g["a"])([Object(b["a"])({components:{VideoGrid:T,VideoSwiper:$}})],N);var H=N,G=H,W=a("ce7e"),J=Object(w["a"])(G,v,p,!1,null,null,null),Z=J.exports;_()(J,{VCol:S["a"],VDivider:W["a"],VRow:U["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"900px",transition:"dialog-bottom-transition",fullscreen:t.$vuetify.breakpoint.smAndDown},on:{"click:outside":function(e){t.dialog=!1}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedVideo?a("v-card",[a("v-toolbar",{attrs:{dense:""}},[a("v-spacer"),a("v-toolbar-items",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",href:t.jwOrgUrl,target:"_blank"}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!1,1469989819)},[a("span",{domProps:{textContent:t._s(t.translations.lnkHome)}})]),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-img",{staticClass:"white--text align-end",attrs:{src:t.xsOnly?t.selectedVideo.images.lss.lg:t.selectedVideo.images.pnr.lg,"aspect-ratio":t.xsOnly?2:3,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[a("v-card-title",{staticStyle:{"word-break":"normal","user-select":"none"},domProps:{textContent:t._s(t.selectedVideo.title+" ("+t.selectedVideo.durationFormattedHHMM+")")}})],1),a("v-card-text",{staticClass:"px-3 pb-3"},[a("v-container",[a("v-row",{attrs:{"no-gutters":t.xsOnly}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-autocomplete",{staticClass:"mt-4",attrs:{items:t.availableLanguages,"hide-details":"","prepend-icon":"mdi-volume-high","item-text":t.languageLabel,"item-value":"locale",outlined:"",dense:""},model:{value:t.videoLanguage,callback:function(e){t.videoLanguage=e},expression:"videoLanguage"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-autocomplete",{staticClass:"mt-4",attrs:{items:t.availableLanguages,"hide-details":"","prepend-icon":"mdi-subtitles","item-text":t.languageLabel,"item-value":"locale",outlined:"",dense:""},model:{value:t.subtitleLanguage,callback:function(e){t.subtitleLanguage=e},expression:"subtitleLanguage"}})],1)],1)],1),t.xsOnly?a("v-card-actions",[a("v-menu",{attrs:{"offset-y":"",rounded:"0",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",loading:!t.videoMedia||!t.subtitleMedia}},"v-btn",i,!1),Object.assign({},o,n)),[a("v-icon",{attrs:{left:""}},[t._v(" mdi-cast ")]),t._v(" "+t._s(t.translations.btnPlay)+" ")],1)]}}],null,!0)},[a("span",{domProps:{textContent:t._s(t.subtitleUrl?t.translations.btnPlayWithSubtitles:t.translations.btnPlayWithoutSubtitles)}})])]}}],null,!1,4053824520)},[t.videoMedia?a("v-list",{attrs:{dense:""}},t._l(t.videoMedia.files.filter((function(t){return"144p"!==t.label})),(function(e){return a("v-list-item",{key:e.checksum,attrs:{link:"",href:t.getChromecastUrl(e),target:"_blank"}},[a("v-list-item-title",{domProps:{textContent:t._s(e.label)}})],1)})),1):t._e()],1)],1):t._e(),a("v-card-actions",[t.xsOnly?t._e():[a("v-menu",{attrs:{"offset-y":"",rounded:"0",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",loading:!t.videoMedia||!t.subtitleMedia}},"v-btn",i,!1),Object.assign({},o,n)),[a("v-icon",{attrs:{left:""}},[t._v(" mdi-cast ")]),t._v(" "+t._s(t.translations.btnPlay)+" ")],1)]}}],null,!0)},[a("span",{domProps:{textContent:t._s(t.subtitleUrl?t.translations.btnPlayWithSubtitles:t.translations.btnPlayWithoutSubtitles)}})])]}}],null,!1,2295719176)},[t.videoMedia?a("v-list",{attrs:{dense:""}},t._l(t.videoMedia.files.filter((function(t){return"144p"!==t.label})),(function(e){return a("v-list-item",{key:e.checksum,attrs:{link:"",href:t.getChromecastUrl(e),target:"_blank"}},[a("v-list-item-title",{domProps:{textContent:t._s(e.label)}})],1)})),1):t._e()],1),a("v-spacer")],a("v-menu",{attrs:{"offset-y":"",rounded:"0",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,i=e.on;return[a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",loading:!t.videoMedia}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[t._v(" mdi-download ")]),t._v(" "+t._s(t.translations.btnSearchFilterVideo)+" ")],1)]}}],null,!1,1832261696)},[t.videoMedia?a("v-list",{attrs:{dense:""}},t._l(t.videoMedia.files.filter((function(t){return"144p"!==t.label})),(function(e){return a("v-list-item",{key:e.checksum,attrs:{link:"",href:e.progressiveDownloadURL}},[a("v-list-item-title",{domProps:{textContent:t._s(e.label+" ("+Math.floor(e.filesize/1048576)+" MB)")}})],1)})),1):t._e()],1),a("v-btn",{attrs:{color:"primary",loading:!t.subtitleMedia,disabled:null===t.subtitleUrl,href:t.subtitleUrl}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-download ")]),t._v(" "+t._s(t.translations.hdgSubtitles)+" ")],1)],2)],1)],1):t._e()],1)},F=[],K=a("3835"),z=(a("7db0"),a("caad"),a("2532"),function(t){Object(u["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(l["a"])(this,a),t=e.apply(this,arguments),t.videoMedia=null,t.subtitleMedia=null,t}return Object(c["a"])(a,[{key:"languageLabel",value:function(t){return t.name===t.vernacular?t.name:"".concat(t.name," (").concat(t.vernacular,")")}},{key:"getChromecastUrl",value:function(t){var e=btoa(t.progressiveDownloadURL),a="https://chromecast.smplayer.info/index.php?sfgc=I2ZmZmZmZg==&url=".concat(e);try{a+="&title=".concat(btoa(this.selectedVideo.title.replaceAll("—","-")))}catch(i){}if(null!==this.subtitleUrl){var n=btoa(this.subtitleUrl);a+="&subtitles=".concat(n)}return a}},{key:"xsOnly",get:function(){return this.$vuetify.breakpoint.xsOnly}},{key:"jwOrgUrl",get:function(){var t=this.getSiteLanguage.locale,e=this.selectedVideo,a=e.primaryCategory,n=e.languageAgnosticNaturalKey;return"https://www.jw.org/finder?locale=".concat(t,"&category=").concat(a,"&lank=").concat(n)}},{key:"subtitleUrl",get:function(){var t,e=null===(t=this.subtitleMedia)||void 0===t?void 0:t.files.find((function(t){var e;return void 0!==(null===t||void 0===t||null===(e=t.subtitles)||void 0===e?void 0:e.url)}));return void 0===e?null:e.subtitles.url}},{key:"availableLanguages",get:function(){var t=this;return this.selectedVideo?this.languages.filter((function(e){return t.selectedVideo.availableLanguages.includes(e.code)})):[]}},{key:"dialog",get:function(){return this.videoDialog},set:function(t){this.setVideoDialog(t)}},{key:"videoLanguage",get:function(){return this.getVideoLanguage.locale},set:function(t){this.setVideoLanguage(t)}},{key:"subtitleLanguage",get:function(){return this.getSubtitleLanguage.locale},set:function(t){this.setSubtitleLanguage(t)}},{key:"getMediaUrl",value:function(t){return"".concat(this.baseUrl,"/media-items/").concat(t.code,"/").concat(this.selectedVideo.languageAgnosticNaturalKey,"?clientType=www")}},{key:"loadMediaItems",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==this.videoMedia){t.next=7;break}return t.t0=K["a"],t.next=4,m.a.get(this.getMediaUrl(this.getVideoLanguage));case 4:t.t1=t.sent.data.media,e=(0,t.t0)(t.t1,1),this.videoMedia=e[0];case 7:if(null!==this.subtitleMedia){t.next=14;break}return t.t2=K["a"],t.next=11,m.a.get(this.getMediaUrl(this.getSubtitleLanguage));case 11:t.t3=t.sent.data.media,a=(0,t.t2)(t.t3,1),this.subtitleMedia=a[0];case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onSelectedVideoChange",value:function(t){null!==t&&(this.videoMedia=null,this.subtitleMedia=null,this.getSiteLanguage.locale===this.videoLanguage&&(this.videoMedia=t),this.getSiteLanguage.locale===this.subtitleLanguage&&(this.subtitleMedia=t),this.loadMediaItems())}},{key:"onVideoLanguageChange",value:function(){this.videoMedia=null,this.loadMediaItems()}},{key:"onSubtitleLanguageChange",value:function(){this.subtitleMedia=null,this.loadMediaItems()}}]),a}(b["c"]));Object(g["a"])([f["c"]],z.prototype,"baseUrl",void 0),Object(g["a"])([f["c"]],z.prototype,"languages",void 0),Object(g["a"])([f["c"]],z.prototype,"translations",void 0),Object(g["a"])([f["c"]],z.prototype,"videoDialog",void 0),Object(g["a"])([f["c"]],z.prototype,"selectedVideo",void 0),Object(g["a"])([f["b"]],z.prototype,"setVideoDialog",void 0),Object(g["a"])([f["b"]],z.prototype,"setSelectedVideo",void 0),Object(g["a"])([f["a"]],z.prototype,"getSiteLanguage",void 0),Object(g["a"])([f["a"]],z.prototype,"getVideoLanguage",void 0),Object(g["a"])([f["a"]],z.prototype,"getSubtitleLanguage",void 0),Object(g["a"])([f["b"]],z.prototype,"setVideoLanguage",void 0),Object(g["a"])([f["b"]],z.prototype,"setSubtitleLanguage",void 0),Object(g["a"])([Object(b["d"])("selectedVideo")],z.prototype,"onSelectedVideoChange",null),Object(g["a"])([Object(b["d"])("videoLanguage")],z.prototype,"onVideoLanguageChange",null),Object(g["a"])([Object(b["d"])("subtitleLanguage")],z.prototype,"onSubtitleLanguageChange",null),z=Object(g["a"])([b["a"]],z);var Q=z,X=Q,Y=a("c6a6"),tt=a("8336"),et=a("a523"),at=a("169a"),nt=a("132d"),it=a("8860"),ot=a("da13"),rt=a("5d23"),st=a("e449"),lt=a("2fa4"),ct=a("71d9"),ut=a("2a7f"),dt=a("3a2f"),gt=Object(w["a"])(X,q,F,!1,null,null,null),vt=gt.exports;_()(gt,{VAutocomplete:Y["a"],VBtn:tt["a"],VCard:C["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:S["a"],VContainer:et["a"],VDialog:at["a"],VIcon:nt["a"],VImg:M["a"],VList:it["a"],VListItem:ot["a"],VListItemTitle:rt["b"],VMenu:st["a"],VRow:U["a"],VSpacer:lt["a"],VToolbar:ct["a"],VToolbarItems:ut["a"],VTooltip:dt["a"]});var pt=function(t){Object(u["a"])(a,t);var e=Object(d["a"])(a);function a(){return Object(l["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"mounted",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.fetchTranslations().then((function(){e.setSiteLanguage(e.routeLanguage)}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateRoute",value:function(){this.$router.push({name:"Home",params:{language:this.siteLanguage}})}},{key:"languageLabel",value:function(t){return t.name===t.vernacular?t.name:"".concat(t.name," (").concat(t.vernacular,")")}},{key:"languagesUrl",get:function(){return"".concat(this.baseUrl,"/languages/").concat(this.getSiteLanguage.code,"/all?clientType=www")}},{key:"translationsUrl",get:function(){return"".concat(this.baseUrl,"/translations/").concat(this.getSiteLanguage.code)}},{key:"siteLanguage",get:function(){var t,e;return null!==(t=null===(e=this.getSiteLanguage)||void 0===e?void 0:e.locale)&&void 0!==t?t:"en"},set:function(t){this.setSiteLanguage(t)}},{key:"guideButtonText",get:function(){switch(this.siteLanguage){case"nl":return"Handleiding";case"en":return"Guide";default:return this.translations.lnkHelpView}}},{key:"onRouteLanguageChange",value:function(t){if(!this.languages.some((function(e){return e.locale===t})))return this.setSiteLanguage("en"),this.fetchTranslations(),void this.updateRoute();this.setSiteLanguage(t)}},{key:"onSiteLanguageChange",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.fetchTranslations(),this.routeLanguage!==this.siteLanguage&&this.updateRoute();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"fetchTranslations",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n,i,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get(this.languagesUrl);case 3:return e=t.sent.data.languages,a=e.filter((function(t){return"nl"===t.locale}))[0],n=e.filter((function(t){return"en"===t.locale}))[0],i=e.filter((function(t){return"nl"!==t.locale&&"en"!==t.locale})),i.unshift(a,n),this.setLanguages(i),t.next=11,m.a.get(this.translationsUrl);case 11:o=t.sent,r=o.data.translations[this.getSiteLanguage.code],this.setTranslations(r),t.next=18;break;case 16:t.prev=16,t.t0=t["catch"](0);case 18:case"end":return t.stop()}}),t,this,[[0,16]])})));function e(){return t.apply(this,arguments)}return e}()}]),a}(b["c"]);Object(g["a"])([Object(f["c"])((function(t){return t.route.params.language}))],pt.prototype,"routeLanguage",void 0),Object(g["a"])([f["c"]],pt.prototype,"baseUrl",void 0),Object(g["a"])([f["c"]],pt.prototype,"languages",void 0),Object(g["a"])([f["c"]],pt.prototype,"translations",void 0),Object(g["a"])([f["a"]],pt.prototype,"getSiteLanguage",void 0),Object(g["a"])([f["b"]],pt.prototype,"setSiteLanguage",void 0),Object(g["a"])([f["b"]],pt.prototype,"setLanguages",void 0),Object(g["a"])([f["b"]],pt.prototype,"setTranslations",void 0),Object(g["a"])([Object(b["d"])("routeLanguage")],pt.prototype,"onRouteLanguageChange",null),Object(g["a"])([Object(b["d"])("siteLanguage")],pt.prototype,"onSiteLanguageChange",null),pt=Object(g["a"])([Object(b["a"])({components:{VideoCategory:Z,VideoDialog:vt}})],pt);var bt=pt,ft=bt,ht=(a("034f"),a("7496")),mt=a("40dc"),yt=a("f6c4"),Ot=Object(w["a"])(ft,o,r,!1,null,null,null),jt=Ot.exports;_()(Ot,{VApp:ht["a"],VAppBar:mt["a"],VAutocomplete:Y["a"],VBtn:tt["a"],VCol:S["a"],VContainer:et["a"],VDivider:W["a"],VIcon:nt["a"],VMain:yt["a"],VRow:U["a"],VSpacer:lt["a"],VToolbarItems:ut["a"],VToolbarTitle:ut["b"]});a("ac1f"),a("1276");var Vt=a("8c4f");n["default"].use(Vt["a"]);var Lt=[{path:"/:language",name:"Home"},{path:"/",redirect:function(){var t;return null!==(t="/".concat(navigator.language.split("-")[0]))&&void 0!==t?t:"nl"}}],wt=new Vt["a"]({routes:Lt}),kt=wt,_t=a("2f62");n["default"].use(_t["a"]);var Ct={baseUrl:"https://b.jw-cdn.org/apis/mediator/v1",languages:[{code:"O",locale:"nl",vernacular:"Nederlands",name:"Nederlands",isLangPair:!1,isSignLanguage:!1,isRTL:!1},{code:"E",locale:"en",vernacular:"English",name:"Engels",isLangPair:!1,isSignLanguage:!1,isRTL:!1}],translations:{},siteLanguage:"nl",videoLanguage:"en",subtitleLanguage:"nl",videoDialog:!1,selectedVideo:null},xt={getSiteLanguage:function(t){var e=t.siteLanguage;return t.languages.find((function(t){return t.locale===e}))},getVideoLanguage:function(t){var e=t.videoLanguage;return t.languages.find((function(t){return t.locale===e}))},getSubtitleLanguage:function(t){var e=t.subtitleLanguage;return t.languages.find((function(t){return t.locale===e}))}},St={setLanguages:function(t,e){t.languages=e},setTranslations:function(t,e){t.translations=e},setSiteLanguage:function(t,e){t.siteLanguage=e},setVideoLanguage:function(t,e){t.videoLanguage=e},setSubtitleLanguage:function(t,e){t.subtitleLanguage=e},setVideoDialog:function(t,e){t.videoDialog=e},setSelectedVideo:function(t,e){t.selectedVideo=e}},Mt={},Ut=new _t["a"].Store({state:Ct,getters:xt,mutations:St,actions:Mt}),Pt=a("f309");n["default"].use(Pt["a"]);var Tt=new Pt["a"]({theme:{themes:{light:{primary:"#4a6da7"}}}}),Rt=a("7212"),Dt=a.n(Rt);a("a7a3");n["default"].use(Dt.a),Object(i["sync"])(Ut,kt),n["default"].config.productionTip=!1,new n["default"]({router:kt,store:Ut,vuetify:Tt,render:function(t){return t(jt)}}).$mount("#app")}});
//# sourceMappingURL=app.5216cbc3.js.map