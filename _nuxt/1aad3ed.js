(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{330:function(t,e,n){"use strict";n.r(e);var l={props:{data:{type:Object,required:!0,default:function(){return{}}}}},r=n(27),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full sm:w-2/3 md:w-1/2 px-4 sm:px-16 sm:text-white text-left md:text-center"},[n("h1",{staticClass:"font-headline my-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-1 leading-tight slide-in-bottom-h1"},[t._v("\n    "+t._s(t.data.frontmatter.headline)+"\n  ")]),t._v(" "),n("p",{staticClass:"font-sans sm:text-md md:text-lg 2xl:text-2xl mb-4 slide-in-bottom-subtitle "},[t._v("\n    "+t._s(t.data.frontmatter.subheadline)+"\n  ")]),t._v(" "),n("a",{attrs:{href:t.data.frontmatter.cta.url}},[n("button",{staticClass:"font-butto text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 rounded-full text-sm 2xl:text-md px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-500 dark:focus:ring-blue-800 uppercase font-bold tracking-widest",attrs:{type:"button"}},[t._v("\n      "+t._s(t.data.frontmatter.cta.text)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,n){"use strict";n.r(e);var l=n(6);n(49),n(11),n(61),n(35);var r={name:"IndexPage",data:function(){return{data:{},baseUrl:"https://deepshore.de",pageUrlName:"deepops-homepage",mediaBaseURL:"user/pages"}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$i18n.localeProperties.code,l="","de"!==n&&(l="".concat(n,"/")),r="".concat(t.baseUrl,"/").concat(l).concat(t.pageUrlName,".json"),e.next=6,fetch(r).then((function(t){return t.json()}));case 6:t.data=e.sent;case 7:case"end":return e.stop()}}),e)})))()})),methods:{getPageByLink:function(link){return link},getImagePath:function(t){return"".concat(this.baseUrl,"/").concat(this.mediaBaseURL,"/").concat(this.pageUrlName,"/").concat(t)}}},o=r,c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full flex flex-col space-y-4 md:space-y-0 max-w-screen-2xl mx-auto text-slate-800"},[n("section",{staticClass:"xl:py-4 w-full shrink"},[n("div",{staticClass:"block sm:hidden"},[n("div",{staticClass:"bg-cover bg-right h-80",style:{"background-image":"url("+t.getImagePath(t.data.frontmatter.image.mobile)+")"}}),t._v(" "),n("HeaderText",{attrs:{data:t.data}})],1),t._v(" "),n("div",{staticClass:"hidden sm:block w-full 2xl:rounded-3xl md:drop-shadow-xl py-4 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-64 bg-cover bg-center",style:{"background-image":"url("+t.getImagePath(t.data.frontmatter.image.desktop)+")"}},[n("HeaderText",{attrs:{data:t.data}})],1)]),t._v(" "),n("section",{staticClass:"w-full"},[n("div",{staticClass:"grid sm:grid-cols-2 md:grid-cols-4 my-4 sm:my-8 md:my-16 xl:my-24 gap-y-2 sm:gap-y-8 text-center"},t._l(t.data.frontmatter.sections,(function(section,e){return n("a",{key:e,staticClass:"group flex flex-row gap-1 sm:gap-0 sm:flex-col mx-8 sm:mx-0 items-center items-center sm:items-stretch",attrs:{href:"#"+e}},[section.image?n("div",{staticClass:"flex-none w-16 h-16 md:w-16 md:h-16 xl:w-48 xl:h-48 sm:mx-auto"},[n("img",{staticClass:"object-contain w-full h-full",attrs:{src:t.getImagePath(section.icon),alt:section.title+"-logo"}})]):t._e(),t._v(" "),n("span",{staticClass:"font-headline text-lg sm:mt-3 group-hover:underline underline-offset-4 decoration-4 px-2"},[t._v("\n          "+t._s(section.title)+"\n        ")])])})),0)]),t._v(" "),t._l(t.data.frontmatter.sections,(function(section,e){return n("section",{key:e,staticClass:"w-full mb-16 p-4 sm:p-8 md:p-12 xl:p-16",attrs:{id:e}},[n("div",{staticClass:"flex flex-col md:flex-row flex-col-reverse md:items-center",class:{"md:flex-row-reverse":"left"===section.content_side}},[n("div",{},[n("h2",{staticClass:"font-headline text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl leading-tight text-center md:text-left slide-in-bottom-h1"},[t._v("\n          "+t._s(section.title)+"\n        ")]),t._v(" "),section.subtitle?n("h3",{staticClass:"font-headline uppercase text-1xl md:text-2xl xl:text-4xl leading-tight text-center md:text-left slide-in-bottom-h1",class:{"md:text-center":"center"===section.content_side}},[t._v("\n          "+t._s(section.subtitle)+"\n        ")]):t._e(),t._v(" "),n("p",{staticClass:"text-base lg:text-xl xl:text-2xl mb-4 text-center md:text-left slide-in-bottom-subtitle",class:{"md:text-center":"center"===section.content_side}},[t._v("\n          "+t._s(section.text)+"\n        ")])]),t._v(" "),section.image?n("div",{staticClass:"mx-auto w-1/2 sm:w-2/3 md:w-1/2 px-2 sm:px-8 md:px-12 xl:px-16 2xl:px-32 flex-none"},[n("div",{},[n("img",{staticClass:"object-center",attrs:{src:t.getImagePath(section.image),alt:section.image_alt_text+"-logo"}})])]):t._e()]),t._v(" "),n("div",{staticClass:"hidden sm:flex w-full my-5 relative"},["left"===section.content_side?n("div",{staticClass:"absolute right-0 h-0.5 w-1/2 sm:w-1/3 md:w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-gray-200"}):t._e(),t._v(" "),"right"===section.content_side?n("div",{staticClass:"h-0.5 w-1/2 sm:w-1/3 md:w-1/2 bg-gradient-to-r from-gray-200 via-gray-200"}):t._e(),t._v(" "),"center"===section.content_side?n("div",{staticClass:"h-0.5 w-full bg-gradient-to-r from-transparent via-gray-200"}):t._e()]),t._v(" "),n("div",{staticClass:"flex flex-row w-full gap-x-2 sm:gap-x-8 justify-center md:justify-start",class:{"md:justify-end":"left"===section.content_side,"md:justify-center":"center"===section.content_side}},t._l(section.links,(function(e,i){return n("div",{key:i},[n("a",{staticClass:"w-auto",attrs:{href:e.url}},[n("img",{staticClass:"object-contain h-12 sm:h-16 xl:h-24",attrs:{src:t.getImagePath(e.icon),alt:e.label}})])])})),0)])}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderText:n(330).default})}}]);