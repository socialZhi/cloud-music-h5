(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0223fc60":"cd36aa5f","chunk-2d21e788":"d6c48ac5","chunk-582ef354":"3680cef3","chunk-cab61e28":"fa5d16ed"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0223fc60":1,"chunk-582ef354":1,"chunk-cab61e28":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0223fc60":"e4fa4f1a","chunk-2d21e788":"31d6cfe0","chunk-582ef354":"f6a5a72c","chunk-cab61e28":"2d7a7c52"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("keep-alive",[n("router-view")],1),n("audio",{ref:"audio",attrs:{src:e.playInfo.url,loop:2===e.playSongs.playMode}})],1)},o=[],i=n("cebc"),u=n("591a"),c={data:function(){return{el:""}},computed:Object(i["a"])({},Object(u["c"])(["playSongs"]),Object(u["b"])(["playInfo"])),mounted:function(){this.el=this.$refs.audio,this.$store.commit("getAudioDom",this.el);var e=localStorage.getItem("playList")&&JSON.parse(localStorage.getItem("playList"))||[];this.$store.commit("setAttr",{playList:e})},methods:{}},s=c,l=n("2877"),p=Object(l["a"])(s,a,o,!1,null,"0dd72f44",null),d=p.exports,f=n("8c4f");r["a"].use(f["a"]);var m=function(){return n.e("chunk-2d21e788").then(n.bind(null,"d666"))},h=function(){return n.e("chunk-582ef354").then(n.bind(null,"6e78"))},y=function(){return n.e("chunk-cab61e28").then(n.bind(null,"067f"))},g=function(){return n.e("chunk-0223fc60").then(n.bind(null,"f562"))},v=new f["a"]({routes:[{path:"/",redirect:"/index"},{path:"/index",component:h},{path:"/search",component:y},{path:"/playPage",component:g},{path:"/demo",component:m}]}),b=v,k=n("d515"),x=function(e){var t=e.time,n=e.duration,r=Math.floor(t/60),a=Math.floor(n/60),o=t%60,i=n%60;r<10&&(r="0"+r),a<10&&(a="0"+a),o<10&&(o="0"+o),i<10&&(i="0"+i);var u=r+":"+o;return n=a+":"+i,{currentTime:u,duration:n}},I={state:{playing:!1,playMode:0,playList:[],playIndex:0,dom:"",duration:"00:00",currentTime:"00:00",timer:"",progressLeft:"0",progressWidth:"0%"},getters:{playInfo:function(e){return 0===e.playList.length?{}:e.playList[e.playIndex]},domUrl:function(e){return e.dom.src}},mutations:{changePlaying:function(e,t){0!==e.playList.length?(e.playing=!!t||!e.playing,e.playing?e.dom.play():e.dom.pause()):Object(k["a"])({message:"播放列表为空，请添加歌曲!"})},checkoutMode:function(e){var t;switch(2!==e.playMode?e.playMode+=1:e.playMode=0,e.playMode){case 0:t="列表循环";break;case 1:t="随机播放";break;default:t="单曲循环";break}Object(k["a"])({message:t,position:"bottom",duration:1e3})},getAudioDom:function(e,t){e.dom=t},addPlayList:function(e,t){e.playList.unshift(t),localStorage.setItem("playList",JSON.stringify(e.playList))},setPlayIndex:function(e,t){e.playIndex=t},setAttr:function(e,t){for(var n in t)e[n]=t[n]},resetTimer:function(e){clearInterval(e.timer)},setTime:function(e,t){var n=x(t);e.playing?(e.currentTime=n.currentTime,e.duration=n.duration,e.progressLeft=t.time/t.duration*270+"px",e.progressWidth=t.time/t.duration*100+"%"):e.timer&&clearInterval(e.timer)},nextSong:function(e){e.playIndex===e.playList.length-1?e.playIndex=0:e.playIndex+=1},preSong:function(e){0===e.playIndex?e.playIndex=e.playList.length-1:e.playIndex-=1},deleteSong:function(e,t){e.playList.splice(t,1),localStorage.setItem("playList",JSON.stringify(e.playList))}},actions:{setTimer:function(e){var t=e.commit,n=e.state;n.timer&&clearInterval(n.timer),n.timer=setInterval(function(){var e=Math.floor(n.dom.currentTime),r=Math.floor(n.dom.duration);if(t("setTime",{time:e,duration:r}),e==r){if(2===n.playMode)return;n.playIndex===n.playList.length-1?n.playIndex=0:n.playIndex+=1,setTimeout(function(){t("changePlaying",!0)},0)}},1e3)}}},L=I;r["a"].use(u["a"]);var S=new u["a"].Store({modules:{playSongs:L}}),O=S,j=n("a1dd"),w=n("a3ff"),T=(n("9b6c"),n("14ec"),n("be35"),n("adf6"),n("bc3a")),M=n.n(T);M.a.defaults.baseURL="https://autumnfish.cn/",M.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),M.a.interceptors.response.use(function(e){return 200!==e.status?(Object(k["a"])({message:"请求错误！错误代码："+e.status+","+e.statusText,position:"top"}),""):200!==e.data.code?(Object(k["a"])({message:"请求错误！错误代码："+e.data.code,position:"top"}),""):(Object(k["a"])({message:"请求成功！",position:"top"}),e.data)},function(e){return Promise.reject(e)});var P={install:function(e){e.prototype.$axios=M.a}};r["a"].use(j["a"]),r["a"].use(w["a"]),r["a"].use(P),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(d)},router:b,store:O}).$mount("#app")},adf6:function(e,t,n){},be35:function(e,t,n){}});
//# sourceMappingURL=app.8787c49a.js.map