(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{269:function(t,e,r){var content=r(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("17ec4d76",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r(269)},271:function(t,e,r){var n=r(33)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.altfive[data-v-efecb3ac]{\n  height:1.35rem\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},272:function(t,e,r){"use strict";r.r(e);r(270);var n=r(9),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-auto md:block altfive",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,"efecb3ac",null);e.default=component.exports},277:function(t,e,r){var map={"./bobby.jpg":278,"./hongkyung.jpg":279,"./kate.JPG":280,"./lauren.jpg":281,"./peniel.jpeg":282,"./taylor.png":283,"./wendy.jpg":284};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=277},278:function(t,e,r){t.exports=r.p+"img/bobby.1a88203.jpg"},279:function(t,e,r){t.exports=r.p+"img/hongkyung.b434b23.jpg"},280:function(t,e,r){t.exports=r.p+"img/kate.1e217f3.JPG"},281:function(t,e,r){t.exports=r.p+"img/lauren.c768a2e.jpg"},282:function(t,e,r){t.exports=r.p+"img/peniel.f63cb38.jpeg"},283:function(t,e,r){t.exports=r.p+"img/taylor.0ea95b8.png"},284:function(t,e,r){t.exports=r.p+"img/wendy.a89b3bc.jpg"},306:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("00ea5ca2",content,!0,{sourceMap:!1})},341:function(t,e,r){"use strict";r(306)},342:function(t,e,r){var n=r(33)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.custom-text{\n  word-break:keep-all\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},381:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(49),r(23),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("members",n.id).fetch();case 3:return o=e.sent,l=o.name,e.next=7,r("blog",n.slug).where({author:l}).only(["title","description","img","datetime","category","author","slug"]).sortBy("createdAt","desc").fetch();case 7:return c=e.sent,e.abrupt("return",{member:o,memberArticles:c,authorName:l});case 9:case"end":return e.stop()}}),e)})))()}}),l=(r(341),r(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full bg-gray-50"},[n("div",{staticClass:"max-w-6xl mx-auto px-5 flex justify-center py-20 pb-6 pt-40"},[n("div",[n("div",{staticClass:"box mb-6 mx-auto"},[n("img",{staticClass:"profile",attrs:{src:r(277)("./"+t.member.img),alt:""}})]),t._v(" "),n("div",{staticClass:"text-gray-800 text-2xl font-medium flex justify-center poppins pb-1"},[t._v(t._s(t.member.name))]),t._v(" "),n("div",{staticClass:"text flex justify-center poppins text-lg text-gray-800 pb-3"},[t._v(t._s(t.member.role))]),t._v(" "),n("div",{staticClass:"text-gray-500 pb-4 flex justify-center"},[t._v(t._s(t.member.description))])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"max-w-6xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-16 max-w-6xl mx-auto px-5"},t._l(t.memberArticles,(function(e){return n("div",{key:e,staticClass:"group"},[n("nuxt-link",{attrs:{to:{name:"slug",params:{slug:e.slug}}}},[n("div",{staticClass:"article-inner flex justify-between items-center border-t py-8 border-gray-600"},[n("div",{staticClass:"pr-4"},[n("p",{staticClass:"mb-1 md:mb-1.5 text-sm md:text-sm text-gray-400"},[t._v(t._s(e.category)+" · "+t._s(e.author))]),t._v(" "),n("h2",{staticClass:"mb-1 md:mb-1.5 text-lg md:text-xl font-medium poppins text-gray-800"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:" text-sm md:text-base text-gray-600 custom-text"},[t._v(t._s(e.description))])]),t._v(" "),n("div",{staticClass:"pl-4 pr-6"},[n("ExternalLinkLogo")],1)])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-10 flex justify-between items-center max-w-6xl mx-auto px-5"},[r("div",{staticClass:"text-4xl text-gray-800 font-medium poppins"},[t._v("Articles")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ExternalLinkLogo:r(272).default})}}]);