(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-582ef354"],{"0076":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"song_list"},[a("div",{staticClass:"title"},[a("div",{staticClass:"left"},[a("i",{staticClass:"iconfont play_mode",class:t.playMode.class}),a("span",[t._v(t._s(t.playMode.title)+"（"+t._s(t.playSongs.playList&&t.playSongs.playList.length)+"）")])]),a("div",{staticClass:"right"})]),a("div",{staticClass:"content"},t._l(t.playSongs.playList,function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"name",class:{active:s.id===t.playInfo.id},on:{click:function(s){return t.checkoutSong(i)}}},[a("span",{staticClass:"song_name"},[t._v(t._s(s.name))]),a("span",{staticClass:"icon"},[t._v("-")]),t._l(s.artists,function(i,n){return a("span",{key:n,staticClass:"singer"},[t._v(t._s(i)+t._s(n===s.artists.length-1?"":"/"))])})],2),a("div",{staticClass:"close iconfont icon-cha",on:{click:function(s){return t.delSong(i)}}})])}),0)])},n=[],c=a("cebc"),e=a("591a"),o={data:function(){return{}},computed:Object(c["a"])({},Object(e["c"])(["playSongs"]),Object(e["b"])(["playInfo"]),{playMode:function(){switch(this.playSongs.playMode){case 1:return{title:"随机播放",class:"icon-icon-2"};case 2:return{title:"单曲循环",class:"icon-icon-"};default:return{title:"列表循环",class:"icon-icon-1"}}}}),methods:{delSong:function(t){this.$store.commit("deleteSong",t)},checkoutSong:function(t){var s=this;this.$store.commit("setPlayIndex",t),this.$nextTick(function(){return s.$store.commit("changePlaying",!0)})}}},l=o,r=(a("abaa"),a("2877")),p=Object(r["a"])(l,i,n,!1,null,"793f049c",null);s["a"]=p.exports},"0c1c":function(t,s,a){"use strict";var i=a("9d92"),n=a.n(i);n.a},"3d2e":function(t,s,a){t.exports=a.p+"img/640.d96c0921.gif"},"3d52":function(t,s,a){},"52cb":function(t,s,a){"use strict";var i=a("9060"),n=a.n(i);n.a},"560f":function(t,s,a){"use strict";var i=a("3d52"),n=a.n(i);n.a},"6e78":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index"},[a("van-popup",{staticClass:"user_info",attrs:{position:"left"},model:{value:t.popupVisible,callback:function(s){t.popupVisible=s},expression:"popupVisible"}},[a("side-popup")],1),a("div",{staticClass:"main_body"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("van-icon",{staticClass:"icon_nav",attrs:{name:"wap-nav"},on:{click:function(s){t.popupVisible=!0}}})],1),a("div",{staticClass:"tab_bar"},[a("van-tabbar",{attrs:{"active-color":"#333","nactive-color":"#999",fixed:!1},on:{change:t.tabChange},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[a("van-tabbar-item",[t._v("我的")]),a("van-tabbar-item",[t._v("发现")]),a("van-tabbar-item",[t._v("朋友")]),a("van-tabbar-item",[t._v("视频")])],1)],1),a("div",{staticClass:"search"},[a("van-icon",{staticClass:"icon_search",attrs:{name:"search"},on:{click:function(s){return t.routerTo("/search")}}})],1)]),a("div",{staticClass:"swiper_main"},[a("van-swipe",{ref:"swiper",attrs:{autoplay:0,"indicator-color":"white",loop:!1},on:{change:t.changeSwiper}},[a("van-swipe-item",[a("div",{staticClass:"desc"},[t._v("\n                        1、可以通过搜索后点击歌曲进行播放，每点击一首会往歌单添加一首歌\n                        "),a("br"),t._v("2、歌单中有歌的时候，底部播放栏才会出现\n                        "),a("br"),t._v("3、点击歌单的歌曲可以切换歌曲，点击叉叉可以删除歌单的歌曲\n                        "),a("br"),t._v("4、目前只支持单曲循环和列表循环模式，不保证兼容iPhone\n                        "),a("br"),t._v("5、要是有问题请刷新后重试。。\n                    ")])]),a("van-swipe-item",[a("div",[t._v("2")])]),a("van-swipe-item",[a("div",[t._v("3")])]),a("van-swipe-item",[a("div",[t._v("4")])])],1)],1),a("div",{staticClass:"footer"},[a("bottom-player")],1)])],1)},n=[],c=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"side_popup"},[i("main",{staticClass:"main"},[i("div",{staticClass:"basic_info"},[i("div",{staticClass:"avator"},[i("img",{attrs:{src:a("3d2e"),alt:""}})]),i("div",{staticClass:"info"},[i("div",{staticClass:"name_info"},[i("span",{staticClass:"name"},[t._v("我是你支哥")]),i("span",{staticClass:"iconfont icon-VIP"}),i("span",{staticClass:"level"},[t._v("Lv.8")])]),i("div",{staticClass:"sign"},[i("span",{staticClass:"iconfont icon-dataBase"}),t._v("签到\n                ")])])]),i("span",{staticClass:"iconfont icon-xinfeng"})]),i("footer",{staticClass:"footer"})])}],o={},l=o,r=(a("0c1c"),a("2877")),p=Object(r["a"])(l,c,e,!1,null,"86b14d3c",null),u=p.exports,v=a("8f1e"),f={components:{sidePopup:u,bottomPlayer:v["a"]},data:function(){return{popupVisible:!1,active:0}},created:function(){},methods:{routerTo:function(t){this.$router.push(t)},tabChange:function(t){this.$refs.swiper.swipeTo(t)},changeSwiper:function(t){this.active=t}}},d=f,b=(a("ed14"),a("560f"),Object(r["a"])(d,i,n,!1,null,"c17caece",null));s["default"]=b.exports},"8f1e":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return 0!==t.playSongs.playList.length?a("div",{staticClass:"bottom_player"},[a("div",{staticClass:"left",on:{click:function(s){return t.$router.push("/playPage")}}},[a("div",{staticClass:"img_box"},[a("img",{attrs:{src:t.playInfo.album&&t.playInfo.album.picUrl,alt:""}})]),a("div",{staticClass:"song_info"},[a("div",{staticClass:"name"},[t._v(t._s(t.playInfo.name))]),a("div",{staticClass:"desc"},[t._v("横滑可以切换上下曲哦")])])]),a("div",{staticClass:"right"},[a("van-circle",{attrs:{color:"#f00",fill:"#fff",size:"0.24rem","layer-color":"#ccc","stroke-width":20},model:{value:t.rate,callback:function(s){t.rate=s},expression:"rate"}}),a("i",{staticClass:"play_btn iconfont",class:{"icon-z":!t.playSongs.playing,"icon-iconfront-":t.playSongs.playing},on:{click:function(s){return s.preventDefault(),t.changePlaying(s)}}}),a("i",{staticClass:"play_list iconfont icon-bofangliebiao",on:{click:t.showList}})],1),a("van-popup",{staticClass:"popup_songs",attrs:{position:"bottom"},model:{value:t.showSongList,callback:function(s){t.showSongList=s},expression:"showSongList"}},[a("song-list")],1)],1):t._e()},n=[],c=a("cebc"),e=a("591a"),o=a("0076"),l={data:function(){return{showSongList:!1}},computed:Object(c["a"])({},Object(e["c"])(["playSongs"]),Object(e["b"])(["playInfo"]),{rate:{set:function(){},get:function(){return parseInt(this.playSongs.progressWidth)}}}),methods:{changePlaying:function(){this.$store.commit("changePlaying"),this.playSongs.playing&&this.$store.dispatch("setTimer")},showList:function(){this.showSongList=!0}},components:{songList:o["a"]}},r=l,p=(a("52cb"),a("2877")),u=Object(p["a"])(r,i,n,!1,null,"b884165e",null);s["a"]=u.exports},9060:function(t,s,a){},"9c1b":function(t,s,a){},"9d92":function(t,s,a){},ab29:function(t,s,a){},abaa:function(t,s,a){"use strict";var i=a("ab29"),n=a.n(i);n.a},ed14:function(t,s,a){"use strict";var i=a("9c1b"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-582ef354.3680cef3.js.map