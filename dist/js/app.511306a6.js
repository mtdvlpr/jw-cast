(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],d=0,g=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&g.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(g.length)g.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/jw-cast/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";a("85ec")},"85ec":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("31bd"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[a("v-toolbar-title",[e._v("JW Cast")]),a("v-spacer")],1),a("v-main",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-3",attrs:{sm:"12",xl:"8"}},[a("strong",{staticClass:"text-h3 font-weight-bold",domProps:{textContent:e._s(e.translations.hdgVideos)}}),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6",lg:"4",cols:"12"}},[a("v-autocomplete",{staticClass:"mt-4",attrs:{items:e.languages,"hide-details":"","prepend-icon":"mdi-translate","item-text":e.languageLabel,"item-value":"locale",outlined:"",dense:""},model:{value:e.siteLanguage,callback:function(t){e.siteLanguage=t},expression:"siteLanguage"}})],1)],1),a("v-divider",{staticClass:"mt-8"})],1)],1),a("VideoCategory",{attrs:{categoryName:"JWB2021Convention",divider:""}}),a("VideoCategory",{attrs:{categoryName:"LatestVideos"}})],1)],1),a("VideoDialog")],1)},r=[],s=a("1da1"),l=a("d4ec"),c=a("bee2"),u=a("262e"),d=a("2caf"),g=(a("b0c0"),a("99af"),a("4de4"),a("96cf"),a("9ab4")),v=a("1b40"),b=a("4bb5"),p=a("bc3a"),f=a.n(p),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.category?a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{sm:"12",xl:"8",cols:"12"}},[a("p",{staticClass:"text-h4 font-weight-medium mb-6",domProps:{textContent:e._s(e.category.name)}}),a("VideoGrid",{attrs:{videos:e.category.media}}),e.divider?a("v-divider",{staticClass:"mt-8"}):e._e()],1)],1):e._e()],1)},m=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",e._l(e.videos,(function(t){return a("v-col",{key:t.guid,attrs:{sm:"6",lg:"4",cols:"12"}},[a("v-card",{attrs:{hover:"",ripple:"",rounded:""},on:{click:function(a){return e.setSelectedVideo(t)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:t.images.lss.lg,"aspect-ratio":2,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[a("v-card-title",{staticStyle:{"word-break":"normal","user-select":"none"},domProps:{textContent:e._s(t.title)}})],1)],1)],1)})),1)},L=[],O=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){return Object(l["a"])(this,a),t.apply(this,arguments)}return a}(v["c"]);Object(g["a"])([Object(v["b"])({required:!0})],O.prototype,"videos",void 0),Object(g["a"])([b["b"]],O.prototype,"setSelectedVideo",void 0),O=Object(g["a"])([v["a"]],O);var j=O,V=j,k=a("2877"),w=a("6544"),C=a.n(w),_=a("b0af"),S=a("99d9"),x=a("62ad"),M=a("adda"),U=a("0fd9"),T=Object(k["a"])(V,y,L,!1,null,null,null),R=T.exports;C()(T,{VCard:_["a"],VCardTitle:S["c"],VCol:x["a"],VImg:M["a"],VRow:U["a"]});var P=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.category=null,e}return Object(c["a"])(a,[{key:"mounted",value:function(){this.loadCategory()}},{key:"loadCategory",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(this.categoryUrl);case 3:this.category=e.sent.data.category,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.category=null;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"categoryUrl",get:function(){return"".concat(this.baseUrl,"/categories/").concat(this.siteLanguage.code,"/").concat(this.categoryName,"?detailed=1&clientType=www")}},{key:"onVideoLanguageChange",value:function(e,t){e.locale!==t.locale&&this.loadCategory()}}]),a}(v["c"]);Object(g["a"])([Object(v["b"])({type:Boolean})],P.prototype,"divider",void 0),Object(g["a"])([Object(v["b"])({required:!0})],P.prototype,"categoryName",void 0),Object(g["a"])([b["c"]],P.prototype,"baseUrl",void 0),Object(g["a"])([Object(b["a"])("getSiteLanguage")],P.prototype,"siteLanguage",void 0),Object(g["a"])([Object(v["d"])("siteLanguage")],P.prototype,"onVideoLanguageChange",null),P=Object(g["a"])([Object(v["a"])({components:{VideoGrid:R}})],P);var D=P,I=D,$=a("ce7e"),A=Object(k["a"])(I,h,m,!1,null,null,null),E=A.exports;C()(A,{VCol:x["a"],VDivider:$["a"],VRow:U["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"900px",transition:"dialog-bottom-transition",fullscreen:e.$vuetify.breakpoint.smAndDown},on:{"click:outside":e.closeDialog},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.selectedVideo?a("v-card",[a("v-toolbar",{attrs:{dense:""}},[a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:""},on:{click:e.closeDialog}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1),a("v-img",{staticClass:"white--text align-end",attrs:{src:e.selectedVideo.images.pnr.lg,"aspect-ratio":3,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[a("v-card-title",{staticStyle:{"word-break":"normal","user-select":"none"},domProps:{textContent:e._s(e.selectedVideo.title+" ("+e.selectedVideo.durationFormattedHHMM+")")}})],1),a("v-card-text",{staticClass:"px-3 pb-3"},[a("v-container",[a("v-row",{attrs:{"no-gutters":e.$vuetify.breakpoint.xsOnly}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-autocomplete",{staticClass:"mt-4",attrs:{items:e.availableLanguages,"hide-details":"","prepend-icon":"mdi-volume-high","item-text":e.languageLabel,"item-value":"locale",outlined:"",dense:""},model:{value:e.videoLanguage,callback:function(t){e.videoLanguage=t},expression:"videoLanguage"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-autocomplete",{staticClass:"mt-4",attrs:{items:e.availableLanguages,"hide-details":"","prepend-icon":"mdi-subtitles","item-text":e.languageLabel,"item-value":"locale",outlined:"",dense:""},model:{value:e.subtitleLanguage,callback:function(t){e.subtitleLanguage=t},expression:"subtitleLanguage"}})],1)],1)],1),e.$vuetify.breakpoint.xsOnly?a("v-card-actions",[a("v-menu",{attrs:{"offset-y":"",rounded:"0"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.attrs,i=t.on;return[a("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",loading:!e.videoMedia||!e.subtitleMedia}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[e._v(" mdi-cast ")]),e._v(" "+e._s(e.translations.btnPlay)+" ")],1)]}}],null,!1,2324213995)},[e.videoMedia?a("v-list",{attrs:{dense:""}},e._l(e.videoMedia.files,(function(t){return a("v-list-item",{key:t.checksum,attrs:{link:""},on:{click:function(a){return e.playOnChromecast(t)}}},[a("v-list-item-title",{domProps:{textContent:e._s(t.label)}})],1)})),1):e._e()],1)],1):e._e(),a("v-card-actions",[e.$vuetify.breakpoint.xsOnly?e._e():[a("v-menu",{attrs:{"offset-y":"",rounded:"0"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.attrs,i=t.on;return[a("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",loading:!e.videoMedia||!e.subtitleMedia}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[e._v(" mdi-cast ")]),e._v(" "+e._s(e.translations.btnPlay)+" ")],1)]}}],null,!1,2324213995)},[e.videoMedia?a("v-list",{attrs:{dense:""}},e._l(e.videoMedia.files,(function(t){return a("v-list-item",{key:t.checksum,attrs:{link:""},on:{click:function(a){return e.playOnChromecast(t)}}},[a("v-list-item-title",{domProps:{textContent:e._s(t.label)}})],1)})),1):e._e()],1),a("v-spacer")],a("v-menu",{attrs:{"offset-y":"",rounded:"0"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.attrs,i=t.on;return[a("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{color:"primary",loading:!e.videoMedia}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[e._v(" mdi-download ")]),e._v(" "+e._s(e.translations.btnSearchFilterVideo)+" ")],1)]}}],null,!1,1832261696)},[e.videoMedia?a("v-list",{attrs:{dense:""}},e._l(e.videoMedia.files,(function(t){return a("v-list-item",{key:t.checksum,attrs:{link:""},on:{click:function(a){return e.downloadVideo(t)}}},[a("v-list-item-title",{domProps:{textContent:e._s(t.label)}})],1)})),1):e._e()],1),a("v-btn",{attrs:{color:"primary",loading:!e.subtitleMedia,disabled:!e.hasSubtitles},on:{click:e.downloadSubtitles}},[a("v-icon",{attrs:{left:""}},[e._v(" mdi-download ")]),e._v(" "+e._s(e.translations.hdgSubtitles)+" ")],1)],2)],1)],1):e._e()],1)},B=[],H=a("3835"),J=(a("7db0"),a("caad"),a("2532"),function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.dialog=!1,e.videoMedia=null,e.subtitleMedia=null,e}return Object(c["a"])(a,[{key:"closeDialog",value:function(){this.setSelectedVideo(null)}},{key:"languageLabel",value:function(e){return e.name===e.vernacular?e.name:"".concat(e.name," (").concat(e.vernacular,")")}},{key:"playOnChromecast",value:function(e){var t=btoa(e.progressiveDownloadURL),a="https://chromecast.smplayer.info/index.php?sfgc=I2ZmZmZmZg==&url=".concat(t);try{a+="&title=".concat(btoa(this.selectedVideo.title.replaceAll("—","-")))}catch(i){}if(this.hasSubtitles){var n=btoa(this.subtitleUrl);a+="&subtitles=".concat(n)}window.location.href=a}},{key:"downloadVideo",value:function(e){window.location.href=e.progressiveDownloadURL}},{key:"downloadSubtitles",value:function(){null!==this.subtitleUrl&&(window.location.href=this.subtitleUrl)}},{key:"hasSubtitles",get:function(){var e,t;return null!==(e=null===(t=this.subtitleMedia)||void 0===t?void 0:t.files.some((function(e){var t;return void 0!==(null===e||void 0===e||null===(t=e.subtitles)||void 0===t?void 0:t.url)})))&&void 0!==e&&e}},{key:"subtitleUrl",get:function(){var e=this.subtitleMedia.files.find((function(e){var t;return void 0!==(null===e||void 0===e||null===(t=e.subtitles)||void 0===t?void 0:t.url)}));return void 0===e?null:e.subtitles.url}},{key:"availableLanguages",get:function(){var e=this;return this.selectedVideo?this.languages.filter((function(t){return e.selectedVideo.availableLanguages.includes(t.code)})):[]}},{key:"videoLanguage",get:function(){return this.getVideoLanguage.locale},set:function(e){this.setVideoLanguage(e)}},{key:"subtitleLanguage",get:function(){return this.getSubtitleLanguage.locale},set:function(e){this.setSubtitleLanguage(e)}},{key:"getMediaUrl",value:function(e){return"".concat(this.baseUrl,"/media-items/").concat(e.code,"/").concat(this.selectedVideo.languageAgnosticNaturalKey,"?clientType=www")}},{key:"loadMediaItems",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==this.videoMedia){e.next=7;break}return e.t0=H["a"],e.next=4,f.a.get(this.getMediaUrl(this.getVideoLanguage));case 4:e.t1=e.sent.data.media,t=(0,e.t0)(e.t1,1),this.videoMedia=t[0];case 7:if(null!==this.subtitleMedia){e.next=14;break}return e.t2=H["a"],e.next=11,f.a.get(this.getMediaUrl(this.getSubtitleLanguage));case 11:e.t3=e.sent.data.media,a=(0,e.t2)(e.t3,1),this.subtitleMedia=a[0];case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onSelectedVideoChange",value:function(e){this.dialog=null!==e,null!==e&&(this.videoMedia=null,this.subtitleMedia=null,this.getSiteLanguage.locale===this.videoLanguage&&(this.videoMedia=e),this.getSiteLanguage.locale===this.subtitleLanguage&&(this.subtitleMedia=e),this.loadMediaItems())}},{key:"onVideoLanguageChange",value:function(){this.videoMedia=null,this.loadMediaItems()}},{key:"onSubtitleLanguageChange",value:function(){this.subtitleMedia=null,this.loadMediaItems()}}]),a}(v["c"]));Object(g["a"])([b["c"]],J.prototype,"baseUrl",void 0),Object(g["a"])([b["c"]],J.prototype,"languages",void 0),Object(g["a"])([b["c"]],J.prototype,"translations",void 0),Object(g["a"])([b["c"]],J.prototype,"selectedVideo",void 0),Object(g["a"])([b["b"]],J.prototype,"setSelectedVideo",void 0),Object(g["a"])([b["a"]],J.prototype,"getSiteLanguage",void 0),Object(g["a"])([b["a"]],J.prototype,"getVideoLanguage",void 0),Object(g["a"])([b["a"]],J.prototype,"getSubtitleLanguage",void 0),Object(g["a"])([b["b"]],J.prototype,"setVideoLanguage",void 0),Object(g["a"])([b["b"]],J.prototype,"setSubtitleLanguage",void 0),Object(g["a"])([Object(v["d"])("selectedVideo")],J.prototype,"onSelectedVideoChange",null),Object(g["a"])([Object(v["d"])("videoLanguage")],J.prototype,"onVideoLanguageChange",null),Object(g["a"])([Object(v["d"])("subtitleLanguage")],J.prototype,"onSubtitleLanguageChange",null),J=Object(g["a"])([v["a"]],J);var Z=J,q=Z,F=a("c6a6"),G=a("8336"),W=a("a523"),K=a("169a"),z=a("132d"),Q=a("8860"),X=a("da13"),Y=a("5d23"),ee=a("e449"),te=a("2fa4"),ae=a("71d9"),ne=a("2a7f"),ie=Object(k["a"])(q,N,B,!1,null,null,null),oe=ie.exports;C()(ie,{VAutocomplete:F["a"],VBtn:G["a"],VCard:_["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:x["a"],VContainer:W["a"],VDialog:K["a"],VIcon:z["a"],VImg:M["a"],VList:Q["a"],VListItem:X["a"],VListItemTitle:Y["b"],VMenu:ee["a"],VRow:U["a"],VSpacer:te["a"],VToolbar:ae["a"],VToolbarItems:ne["a"]});var re=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){return Object(l["a"])(this,a),t.apply(this,arguments)}return Object(c["a"])(a,[{key:"mounted",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchTranslations().then((function(){t.setSiteLanguage(t.routeLanguage)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"languageLabel",value:function(e){return e.name===e.vernacular?e.name:"".concat(e.name," (").concat(e.vernacular,")")}},{key:"languagesUrl",get:function(){return"".concat(this.baseUrl,"/languages/").concat(this.getSiteLanguage.code,"/all?clientType=www")}},{key:"translationsUrl",get:function(){return"".concat(this.baseUrl,"/translations/").concat(this.getSiteLanguage.code)}},{key:"siteLanguage",get:function(){return this.getSiteLanguage.locale},set:function(e){this.setSiteLanguage(e)}},{key:"videoLanguage",get:function(){return this.getVideoLanguage.locale},set:function(e){this.setVideoLanguage(e)}},{key:"onRouteLanguageChange",value:function(){this.setSiteLanguage(this.routeLanguage)}},{key:"onSiteLanguageChange",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchTranslations(),this.$router.push({name:"Home",params:{language:this.siteLanguage}});case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"fetchTranslations",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(this.languagesUrl);case 3:t=e.sent.data.languages,a=t.filter((function(e){return"nl"===e.locale}))[0],n=t.filter((function(e){return"en"===e.locale}))[0],i=t.filter((function(e){return"nl"!==e.locale&&"en"!==e.locale})),i.unshift(a,n),this.setLanguages(i),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](0);case 13:return e.t1=this,e.next=16,f.a.get(this.translationsUrl);case 16:e.t2=this.getSiteLanguage.code,e.t3=e.sent.data.translations[e.t2],e.t1.setTranslations.call(e.t1,e.t3);case 19:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}]),a}(v["c"]);Object(g["a"])([Object(b["c"])((function(e){return e.route.params.language}))],re.prototype,"routeLanguage",void 0),Object(g["a"])([b["c"]],re.prototype,"baseUrl",void 0),Object(g["a"])([b["c"]],re.prototype,"languages",void 0),Object(g["a"])([b["c"]],re.prototype,"translations",void 0),Object(g["a"])([b["a"]],re.prototype,"getSiteLanguage",void 0),Object(g["a"])([b["a"]],re.prototype,"getVideoLanguage",void 0),Object(g["a"])([b["b"]],re.prototype,"setSiteLanguage",void 0),Object(g["a"])([b["b"]],re.prototype,"setVideoLanguage",void 0),Object(g["a"])([b["b"]],re.prototype,"setLanguages",void 0),Object(g["a"])([b["b"]],re.prototype,"setTranslations",void 0),Object(g["a"])([Object(v["d"])("routeLanguage")],re.prototype,"onRouteLanguageChange",null),Object(g["a"])([Object(v["d"])("siteLanguage")],re.prototype,"onSiteLanguageChange",null),re=Object(g["a"])([Object(v["a"])({components:{VideoCategory:E,VideoDialog:oe}})],re);var se=re,le=se,ce=(a("034f"),a("7496")),ue=a("40dc"),de=a("f6c4"),ge=Object(k["a"])(le,o,r,!1,null,null,null),ve=ge.exports;C()(ge,{VApp:ce["a"],VAppBar:ue["a"],VAutocomplete:F["a"],VCol:x["a"],VContainer:W["a"],VDivider:$["a"],VMain:de["a"],VRow:U["a"],VSpacer:te["a"],VToolbarTitle:ne["b"]});var be=a("8c4f");n["a"].use(be["a"]);var pe=[{path:"/:language",name:"Home"},{path:"/",redirect:"/nl"}],fe=new be["a"]({routes:pe}),he=fe,me=a("2f62");n["a"].use(me["a"]);var ye={baseUrl:"https://b.jw-cdn.org/apis/mediator/v1",languages:[{code:"O",locale:"nl",vernacular:"Nederlands",name:"Nederlands",isLangPair:!1,isSignLanguage:!1,isRTL:!1},{code:"E",locale:"en",vernacular:"English",name:"Engels",isLangPair:!1,isSignLanguage:!1,isRTL:!1}],translations:{},siteLanguage:"nl",videoLanguage:"en",subtitleLanguage:"nl",categories:[],selectedVideo:null},Le={getSiteLanguage:function(e){var t=e.siteLanguage;return e.languages.find((function(e){return e.locale===t}))},getVideoLanguage:function(e){var t=e.videoLanguage;return e.languages.find((function(e){return e.locale===t}))},getSubtitleLanguage:function(e){var t=e.subtitleLanguage;return e.languages.find((function(e){return e.locale===t}))}},Oe={setLanguages:function(e,t){e.languages=t},setTranslations:function(e,t){e.translations=t},setSiteLanguage:function(e,t){e.siteLanguage=t},setVideoLanguage:function(e,t){e.videoLanguage=t},setSubtitleLanguage:function(e,t){e.subtitleLanguage=t},setSelectedVideo:function(e,t){e.selectedVideo=t}},je={},Ve=new me["a"].Store({state:ye,getters:Le,mutations:Oe,actions:je}),ke=a("f309");n["a"].use(ke["a"]);var we=new ke["a"]({theme:{themes:{light:{primary:"#4a6da7"}}}});Object(i["sync"])(Ve,he),n["a"].config.productionTip=!1,new n["a"]({router:he,store:Ve,vuetify:we,render:function(e){return e(ve)}}).$mount("#app")}});
//# sourceMappingURL=app.511306a6.js.map