(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5],{269:function(t,e,r){var content=r(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("17ec4d76",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r(269)},271:function(t,e,r){var n=r(33)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.altfive[data-v-efecb3ac]{\n  height:1.35rem\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},272:function(t,e,r){"use strict";r.r(e);r(270);var n=r(9),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-auto md:block altfive",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,"efecb3ac",null);e.default=component.exports},302:function(t,e,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("6953fd31",content,!0,{sourceMap:!1})},325:function(t,e,r){"use strict";r(302)},326:function(t,e,r){var n=r(33)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.keepall[data-v-cde603e8]{\n  word-break:keep-all\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},378:function(t,e,r){"use strict";r.r(e);var n=r(8),l=(r(49),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("blog",n.slug).where({category:"General"}).only(["title","description","img","datetime","category","author","slug"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()}}),o=(r(325),r(9)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"max-w-6xl grid grid-cols-1 colspan mt-5 md:mt-8 max-w-6xl mx-auto px-5 pb-16"},t._l(t.articles,(function(article){return r("div",{key:article,staticClass:"group"},[r("nuxt-link",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[r("div",{staticClass:"article-inner flex justify-between items-center border-t py-8 border-gray-600"},[r("div",{staticClass:"pr-4"},[r("p",{staticClass:"mb-1 md:mb-1.5 text-sm md:text-sm text-gray-400"},[t._v(t._s(article.category)+" · "+t._s(article.author))]),t._v(" "),r("h2",{staticClass:"mb-1 md:mb-1.5 text-lg md:text-xl font-semibold poppins text-gray-800"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:" text-sm md:text-base text-gray-600 custom-text"},[t._v(t._s(article.description))])]),t._v(" "),r("div",{staticClass:"pl-4 pr-6"},[r("ExternalLinkLogo")],1)])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-52 pb-10 max-w-6xl mx-auto px-5"},[r("div",{staticClass:"pb-6 poppins text-7xl font-medium text-gray-800"},[t._v("\n            General\n        ")]),t._v(" "),r("div",{staticClass:"font-normal text-xl text-gray-600"},[t._v("\n            카테고리화하기 애매한 개발 관련 글들이에요.\n        ")])])}],!1,null,"cde603e8",null);e.default=component.exports;installComponents(component,{ExternalLinkLogo:r(272).default})}}]);