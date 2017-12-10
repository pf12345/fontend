webpackJsonp([1],{123:function(t,e){},124:function(t,e){},125:function(t,e){},127:function(t,e){},60:function(t,e,n){"use strict";function i(t){n(64)}function r(){return new A.a.Store({state:{activeType:null,itemsPerPage:20,items:{},users:{},lists:{top:[],new:[],show:[],ask:[],job:[]}},actions:y,mutations:C,getters:M})}function s(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),n=e.split(".").slice(-3);return"www"===n[0]&&n.shift(),n.join(".")}function o(t){var e=Date.now()/1e3-Number(t);return e<3600?c(~~(e/60)," minute"):e<86400?c(~~(e/3600)," hour"):c(~~(e/86400)," day")}function c(t,e){return 1===t?t+e:t+e+"s"}function a(t){n(124)}function u(t){n(123)}function l(t){n(125)}function d(){return new R.a({mode:"history",fallback:!1,scrollBehavior:function(){return{y:0}},routes:[{path:"/top/:page(\\d+)?",component:x},{path:"/add",component:it},{path:"/",redirect:"/top"}]})}function h(t){var e=t.$options.title;if(e)return"function"==typeof e?e.call(t):e}function m(t){n(127)}Object.defineProperty(e,"__esModule",{value:!0});var f={};n.d(f,"host",function(){return s}),n.d(f,"timeAgo",function(){return o});var p=n(9),v=(n(62),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"header"},[i("nav",{staticClass:"inner"},[i("router-link",{attrs:{to:"/",exact:""}},[i("img",{staticClass:"logo",attrs:{src:n(66),alt:"logo"}})]),i("router-link",{attrs:{to:"/top"}},[t._v("Top")]),i("router-link",{attrs:{to:"/new"}},[t._v("New")]),i("router-link",{attrs:{to:"/show"}},[t._v("Show")]),i("router-link",{attrs:{to:"/ask"}},[t._v("Ask")]),i("router-link",{attrs:{to:"/job"}},[t._v("Jobs")])],1)]),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view",{staticClass:"view"})],1)],1)}),E=[],b={render:v,staticRenderFns:E},T=b,I=n(10),_=i,g=I(null,T,!1,_,null,null),w=g.exports,A=n(67),S=n(68),y={FETCH_LIST_DATA:function(t,e){var n=t.commit,i=t.dispatch,r=(t.state,e.type);return n("SET_ACTIVE_TYPE",{type:r}),Object(S.a)(r).then(function(t){return n("SET_LIST",{type:r,ids:t})}).then(function(){return i("ENSURE_ACTIVE_ITEMS")})},ENSURE_ACTIVE_ITEMS:function(t){return(0,t.dispatch)("FETCH_ITEMS",{ids:t.getters.activeIds})},FETCH_ITEMS:function(t,e){var n=t.commit,i=t.state,r=e.ids,s=Date.now();return r=r.filter(function(t){var e=i.items[t];return!e||s-e.__lastUpdated>18e4}),r.length?Object(S.b)(r).then(function(t){return n("SET_ITEMS",{items:t})}):Promise.resolve()},FETCH_USER:function(t,e){var n=t.commit,i=t.state,r=e.id;return i.users[r]?Promise.resolve(i.users[r]):Object(S.c)(r).then(function(t){return n("SET_USER",{id:r,user:t})})}},C={SET_ACTIVE_TYPE:function(t,e){var n=e.type;t.activeType=n},SET_LIST:function(t,e){var n=e.type,i=e.ids;t.lists[n]=i},SET_ITEMS:function(t,e){e.items.forEach(function(e){e&&p.a.set(t.items,e.id,e)})},SET_USER:function(t,e){var n=e.id,i=e.user;p.a.set(t.users,n,i||!1)}},M={activeIds:function(t){var e=t.activeType,n=t.itemsPerPage,i=t.lists;if(!e)return[];var r=Number(t.route.params.page)||1,s=(r-1)*n,o=r*n;return i[e].slice(s,o)},activeItems:function(t,e){return e.activeIds.map(function(e){return t.items[e]}).filter(function(t){return t})}};p.a.use(A.a);var R=n(122),k={name:"news-item",props:["item"],serverCacheKey:function(t){var e=t.item;return e.id+"::"+e.__lastUpdated+"::"+o(e.time)}},U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"news-item"},[n("span",{staticClass:"score"},[t._v(t._s(t.item.score))]),n("span",{staticClass:"title"},[t.item.url?[n("a",{attrs:{href:t.item.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.item.title))]),n("span",{staticClass:"host"},[t._v(" ("+t._s(t._f("host")(t.item.url))+")")])]:[n("router-link",{attrs:{to:"/item/"+t.item.id}},[t._v(t._s(t.item.title))])]],2),n("br"),n("span",{staticClass:"meta"},["job"!==t.item.type?n("span",{staticClass:"by"},[t._v("\n      by "),n("router-link",{attrs:{to:"/user/"+t.item.by}},[t._v(t._s(t.item.by))])],1):t._e(),n("span",{staticClass:"time"},[t._v("\n      "+t._s(t._f("timeAgo")(t.item.time))+" ago\n    ")]),"job"!==t.item.type?n("span",{staticClass:"comments-link"},[t._v("\n      | "),n("router-link",{attrs:{to:"/item/"+t.item.id}},[t._v(t._s(t.item.descendants)+" comments")])],1):t._e()]),"story"!==t.item.type?n("span",{staticClass:"label"},[t._v(t._s(t.item.type))]):t._e()])},j=[],G={render:U,staticRenderFns:j},N=G,D=n(10),W=a,F=D(k,N,!1,W,null,null),Y=F.exports,Z={data:function(){return{items:[{score:"367",title:"I'm on the FCC. Please stop us from killing net neutrality",url:"",by:"",time:"",descendants:"",type:""}]}},components:{item:Y},created:function(){},mounted:function(){console.log(window)},methods:{itemClick:function(t){console.log(t)}}},J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-view view"},[n("div",{staticClass:"news-list"},[n("ul",{on:{click:t.itemClick}},[t._l(t.items,function(t){return[n("item",{attrs:{item:t}})]})],2)])])},P=[],Q={render:J,staticRenderFns:P},O=Q,L=n(10),V=u,H=L(Z,O,!1,V,null,null),x=H.exports,z={data:function(){return{editor:null}},mounted:function(){var t=this;$(function(){var e=$(window).height()-80,n=editormd("editor",{width:"100%",saveHTMLToTextarea:!0,height:e,syncScrolling:"single",path:"../public/editormd/lib/"});t.editor=n})},methods:{getHtml:function(){console.log(this.editor.getHTML())}},componets:{}},B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addArticle"}},[n("div",{attrs:{id:"editor"}}),n("div",[n("button",{on:{click:t.getHtml}},[t._v("GET HTML")])])])},X=[],K={render:B,staticRenderFns:X},q=K,tt=n(10),et=l,nt=tt(z,q,!1,et,"data-v-3ffbb6a4",null),it=nt.exports;p.a.use(R.a);var rt=n(126),st={mounted:function(){var t=h(this);t&&(document.title="Vue HN 2.0 | "+t)}},ot=st;p.a.mixin(ot),Object.keys(f).forEach(function(t){p.a.filter(t,f[t])});var ct={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},at=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},ut=[],lt={render:at,staticRenderFns:ut},dt=lt,ht=n(10),mt=m,ft=ht(ct,dt,!1,mt,"data-v-5865e346",null),pt=ft.exports,vt=p.a.prototype.$bar=new p.a(pt).$mount();document.body.appendChild(vt.$el),p.a.mixin({beforeRouteUpdate:function(t,e,n){var i=this.$options.asyncData;i?i({store:this.$store,route:t}).then(n).catch(n):n()}});var Et=function(){var t=r(),e=d();return Object(rt.sync)(t,e),{app:new p.a({router:e,store:t,render:function(t){return t(w)}}),router:e,store:t}}(),bt=Et.app,Tt=Et.router,It=Et.store;window.__INITIAL_STATE__&&It.replaceState(window.__INITIAL_STATE__),Tt.onReady(function(){Tt.beforeResolve(function(t,e,n){var i=Tt.getMatchedComponents(t),r=Tt.getMatchedComponents(e),s=!1,o=i.filter(function(t,e){return s||(s=r[e]!==t)}),c=o.map(function(t){return t.asyncData}).filter(function(t){return t});if(!c.length)return n();vt.start(),Promise.all(c.map(function(e){return e({store:It,route:t})})).then(function(){vt.finish(),n()}).catch(n)}),bt.$mount("#app")}),"https:"===location.protocol&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},64:function(t,e){},66:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3RDBBRDcwNDU4NEMxMUU2ODdFNjg5OTYwMjlGNjQ0QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NTU3NUVGQUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTU3NUVGOUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NTUwMDE5LTVjNjQtNGRiNy1iNjhjLTQ1ZWIxYzkxM2FiYiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlZDc4OTczLWViM2ItMTE3OS04YzQyLWNlMTYwYmQ0NTQ1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv38lU4AAAMkSURBVHja7FnbSxRRGP+N666upqUECWK+mUqbmxbRQ4QmFEFQmtZDEPQcvfQ/9BL1WO920SyCjJCIyC5iXsmVMjVB8pbVqnhBc2dm+84azHzjbszsupPBfA8L8ztnzvzmu/zON2elcDiMrWQp2GK25QilsqvQKmB/BCW408SvkZC8iptVCE7CJdlHhjI4LQNXXyE7bwMhGguOYWba4LXkmgp43VCVGCFzeQRgM6FUj1NlDiGH0L9T6r/YWqRE9aapa7RiXuOIC/CY2gVMEyqrRnqWdqmE8PE55FAUTsQmKxdFRxk4N47RHkFrcwjRFnf4Ig5dYOCNSgy0CT8Z7Bdw4hJqrzOw6TIGe+DdrBwiN7y5bQQP1BmDiEhQKDTlZxm4PIvuJng2MalprZFOTAYYuO8UsjOMnGSgoBSFFQwMtOBH0Ey8rHhoRUHnPQbmFKDoCEJ8Jl2WnUYKz4T3Dear2fREclJvc6Rh0llFPfMQxStdQnktm/NtCEPvTMbLCiF656kxfH7JQN9J5GRpnMg9hT4U+Nmc7kYshyAlQxjViPP1Rl3VnkpNciiB/DWQdGsqa+hphDtJSk1uH2jFwjSvtXotXhku7K9hoyNvMT6cNEI0d34RfY8ZWHocuTlQ1uPlR/5eNtrRINyWxL2MSrfzLkO27URJtWBDnEQ665Jl6ScCT82nc1yEyPmjXRj/wKN2LhKvVPjPMLz/CYJzJuUnXkL0/quq0Uklx7A9E7vLkFfM5edOHM2E9TvISX0PEVrREO8OFFcJCdDb9CeMtFuNV1yEhCB9xeALBlZdQXkdQ7ruY1mGZAOh9Qrv4IJEeZ3v0+1oJD8PLFV7YoQoENQMzU/FnDDchokvNhISgrSEvkcxJ5CgKzb31H8EKVpPuvgdgWdxpHNihIQg9WIiEGWovwWz81blx3pPvVGQZBWt13DwvHHo9a1ETgcSuJW66Y5mtDdHWdIT/zFTYicd7ti64Hy5OoQcQlGrTFVEJ6/a+HzxODkWIUkcJ3gz7T70TM+EpLUpku6/jjAWZqDI+uGkGz2dPpuydyHFtZGQk9T/BaHfAgwAytLfbeiDo+IAAAAASUVORK5CYII="},68:function(t,e,n){"use strict";(function(t){function i(){c((d.cachedIds.top||[]).slice(0,30)),setTimeout(i,9e5)}function r(t){l&&console.log("fetching "+t+"...");var e=d.cachedItems;return e&&e.has(t)?(l&&console.log("cache hit for "+t+"."),Promise.resolve(e.get(t))):new Promise(function(n,i){d.child(t).once("value",function(i){var r=i.val();r&&(r.__lastUpdated=Date.now()),e&&e.set(t,r),l&&console.log("fetched "+t+"."),n(r)},i)})}function s(t){return d.cachedIds&&d.cachedIds[t]?Promise.resolve(d.cachedIds[t]):r(t+"stories")}function o(t){return r("item/"+t)}function c(t){return Promise.all(t.map(function(t){return o(t)}))}function a(t){return r("user/"+t)}e.a=s,e.b=c,e.c=a;var u=n(69),l=!!t.env.DEBUG_API,d=Object(u.a)({version:"/v0",config:{databaseURL:"https://hacker-news.firebaseio.com"}});d.onServer&&i()}).call(e,n(22))},69:function(t,e,n){"use strict";function i(t){var e=t.config,n=t.version;return s.a.initializeApp(e),s.a.database().ref(n)}e.a=i;var r=n(70),s=n.n(r),o=n(87);n.n(o)}},[60]);