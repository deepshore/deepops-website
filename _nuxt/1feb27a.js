(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{336:function(t,e,n){"use strict";n.r(e);var l=n(6);n(49),n(11),n(61),n(35);var r={name:"IndexPage",data:function(){return{data:{},baseUrl:"https://deepshore.de",pageUrlName:"deepops-homepage",mediaBaseURL:"user/pages"}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$i18n.localeProperties.code,l="","de"!==n&&(l="".concat(n,"/")),r="".concat(t.baseUrl,"/").concat(l).concat(t.pageUrlName,".json"),e.next=6,fetch(r).then((function(t){return t.json()}));case 6:t.data=e.sent;case 7:case"end":return e.stop()}}),e)})))()})),methods:{getPageByLink:function(link){return link},getImagePath:function(t){return"".concat(this.baseUrl,"/").concat(this.mediaBaseURL,"/").concat(this.pageUrlName,"/").concat(t)},getImageBGClass:function(t){return"bg-[url('".concat(this.getImagePath(t),"')]")}}},o=r,c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full flex flex-col space-y-4 md:space-y-0 max-w-screen-2xl mx-auto"},[n("section",{staticClass:"xl:py-4 w-full"},[n("div",{staticClass:"w-full text-left md:text-center 2xl:rounded-3xl md:drop-shadow-xl py-4 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-64 bg-cover bg-center",style:{"background-image":"url("+t.getImagePath(t.data.frontmatter.image)+")"}},[n("div",{staticClass:"md:w-3/5 md:mx-auto px-4 sm:px-16"},[n("h1",{staticClass:"font-headline my-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-tight slide-in-bottom-h1 text-white"},[t._v("\n          "+t._s(t.data.frontmatter.headline)+"\n        ")]),t._v(" "),n("p",{staticClass:"font-sans sm:text-md md:text-lg mb-4 slide-in-bottom-subtitle text-white"},[t._v("\n          "+t._s(t.data.frontmatter.subheadline)+"\n        ")]),t._v(" "),n("button",{staticClass:"font-butto text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-500 dark:focus:ring-blue-800 uppercase font-bold tracking-widest",attrs:{type:"button"}},[t._v("\n          Kontakt aufnehmen\n        ")])])])]),t._v(" "),n("section",{staticClass:"w-full"},[n("div",{staticClass:"grid sm:grid-cols-2 md:grid-cols-4 my-4 sm:my-8 md:my-16 xl:my-24 gap-y-8 text-center"},t._l(t.data.frontmatter.sections,(function(section,e){return n("a",{key:e,staticClass:"group flex flex-row gap-8 sm:gap-0 sm:flex-col mx-8 sm:mx-0 items-center items-center sm:items-stretch",attrs:{href:"#"+e}},[n("div",{staticClass:"flex-none rounded-xl xl:rounded-3xl w-16 h-16 xl:w-32 xl:h-32 px-4 py-4 xl:px-8 xl:py-8 shadow-xl group-hover:shadow-xl group-hover:shadow-cyan-700/20 bg-white sm:mx-auto"},[n("img",{staticClass:"object-contain w-8 h-8 xl:h-16 xl:w-16 ",attrs:{src:t.getImagePath(section.icon),alt:section.title+"-logo"}})]),t._v(" "),n("span",{staticClass:"font-headline text-lg sm:mt-3 group-hover:underline underline-offset-4 decoration-4 px-2"},[t._v("\n          "+t._s(section.title)+"\n        ")])])})),0)]),t._v(" "),t._l(t.data.frontmatter.sections,(function(section,e){return n("section",{key:e,staticClass:"w-full",attrs:{id:e}},[n("div",{staticClass:"flex flex-col md:flex-row flex-col-reverse mb-16 md:items-center",class:{"md:flex-row-reverse":"left"===section.content_side}},[n("div",{staticClass:"md:w-2/3 xl:w-1/2 p-4 sm:p-8 md:p-12 xl:p-16"},[n("h2",{staticClass:"font-headline text-2xl md:text-4xl xl:text-6xl text-black-800 font-black leading-tight text-center md:text-left slide-in-bottom-h1",class:{"md:text-right":"left"===section.content_side}},[t._v("\n          "+t._s(section.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"text-base lg:text-xl my-4 text-center md:text-left slide-in-bottom-subtitle",class:{"md:text-right":"left"===section.content_side}},[t._v("\n          "+t._s(section.text)+"\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-row w-full gap-x-8 justify-center md:justify-start",class:{"md:justify-end":"left"===section.content_side}},t._l(section.links,(function(e,i){return n("div",{key:i},[n("div",{staticClass:"w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"},[n("img",{staticClass:"object-contain grayscale hover:grayscale-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",attrs:{src:t.getImagePath(e.icon),alt:e.label}})])])})),0)]),t._v(" "),n("div",{staticClass:"mx-auto sm:w-2/3 md:w-1/2 p-4 sm:p-8 md:p-12 xl:p-16"},[n("div",{},[n("img",{staticClass:"object-center",attrs:{src:t.getImagePath(section.image),alt:section.image_alt_text+"-logo"}})])])])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);