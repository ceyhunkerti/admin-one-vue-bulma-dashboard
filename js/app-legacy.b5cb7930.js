(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function o(t){return r.p+"js/"+({"client-form~forms":"client-form~forms","client-form":"client-form",forms:"forms",profile:"profile",tables:"tables"}[t]||t)+"-legacy."+{"client-form~forms":"6703ecad","client-form":"fc210921",forms:"88e9665b",profile:"9f0f3128",tables:"0c0e5730"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/admin-one-vue-bulma-dashboard/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e1d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",t._l(t.titleStack,(function(e,i){return a("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-primary",attrs:{href:"https://admin-one.justboil.me/",target:"_blank"}},[a("b-icon",{attrs:{icon:"credit-card","custom-size":"default"}}),a("span",[t._v("Premium Demo")])],1)])])])])])},n=[],s={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=l.exports},"226e":function(t,e,a){t.exports=a.p+"img/justboil-logo.7298fabb.svg"},"503b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[t._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[t._t("right")],2)])])])])},n=[],s={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=l.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("99af"),a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b107");var i=a("2b0e"),n=a("289d"),s=(a("d3b7"),a("8c4f")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",{attrs:{"has-right-visible":!1}},[t._v(" Dashboard ")]),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"account-multiple",number:512,label:"Clients"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-info",icon:"cart-outline",number:7770,prefix:"$",label:"Sales"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"chart-timeline-variant",number:256,suffix:"%",label:"Performance"}})],1),a("card-component",{attrs:{title:"Performance",icon:"finance","header-icon":"reload"},on:{"header-icon-click":t.fillChartData}},[t.defaultChart.chartData?a("div",{staticClass:"chart-area"},[a("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-id":"big-line-chart","chart-data":t.defaultChart.chartData,"extra-options":t.defaultChart.extraOptions}})],1):t._e()]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients"}},[a("clients-table-sample",{attrs:{"data-url":t.$router.options.base+"data-sources/clients.json"}})],1)],1)],1)},r=[],l=a("5530"),c={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},u={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},d=Object(l["a"])(Object(l["a"])({},u),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),m=a("1e1d"),f=a("503b"),p=a("9e7c"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",[a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[t._v(" "+t._s(t.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:t.number,prefix:t.prefix,suffix:t.suffix}})],1)])]),t.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:t.icon,size:"is-large",type:t.type}})],1)]):t._e()])])},h=[],v=(a("a9e3"),a("6df7")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(t._s(t.prefix)+t._s(t.newValueFormatted)+t._s(t.suffix))])},C=[],w=a("6612"),_=a.n(w),y={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data:function(){return{newValue:0,step:0}},computed:{newValueFormatted:function(){return this.newValue<1e3?this.newValue:_()(this.newValue).format("0,0")}},watch:{value:function(){this.growInit()}},mounted:function(){this.growInit()},methods:{growInit:function(){var t=this.value/(this.duration/25);this.grow(t)},grow:function(t){var e=this,a=Math.ceil(this.newValue+t);if(a>this.value)return this.newValue=this.value,!1;this.newValue=a,setTimeout((function(){e.grow(t)}),25)}}},k=y,x=a("2877"),A=Object(x["a"])(k,g,C,!1,null,null,null),O=A.exports,j={name:"CardWidget",components:{GrowingNumber:O,CardComponent:v["a"]},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null}}},B=j,D=Object(x["a"])(B,b,h,!1,null,null,null),M=D.exports,N=a("1fca"),S={name:"line-chart",extends:N["a"],mixins:[N["b"].reactiveProp],props:{extraOptions:Object},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,a){a||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},E=a("7080"),$={name:"Home",components:{ClientsTableSample:E["a"],LineChart:S,CardComponent:v["a"],CardWidget:M,Tiles:p["a"],HeroBar:f["a"],TitleBar:m["a"]},data:function(){return{defaultChart:{chartData:null,extraOptions:d}}},computed:{titleStack:function(){return["Admin","Dashboard"]}},mounted:function(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{randomChartData:function(t){for(var e=[],a=0;a<t;a++)e.push(Math.round(200*Math.random()));return e},fillChartData:function(){this.defaultChart.chartData={datasets:[{fill:!1,borderColor:c.default.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:c.default.info,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:c.default.danger,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.danger,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.danger,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)}],labels:["01","02","03","04","05","06","07","08","09"]}}}},P=$,T=Object(x["a"])(P,o,r,!1,null,null,null),L=T.exports;i["a"].use(s["a"]);var z=[{meta:{title:"Dashboard"},path:"/",name:"home",component:L},{meta:{title:"Tables"},path:"/tables",name:"tables",component:function(){return a.e("tables").then(a.bind(null,"8840"))}},{meta:{title:"Forms"},path:"/forms",name:"forms",component:function(){return Promise.all([a.e("client-form~forms"),a.e("forms")]).then(a.bind(null,"0894"))}},{meta:{title:"Profile"},path:"/profile",name:"profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))}},{meta:{title:"New Client"},path:"/client/new",name:"client.new",component:function(){return Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))}},{meta:{title:"Edit Client"},path:"/client/:id",name:"client.edit",component:function(){return Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))},props:!0}],V=new s["a"]({base:"/admin-one-vue-bulma-dashboard/",routes:z,scrollBehavior:function(t,e,a){return a||{x:0,y:0}}}),I=V,F=(a("b0c0"),a("2f62"));i["a"].use(F["a"]);var H=new F["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideMobileExpanded:!1},mutations:{basic:function(t,e){t[e.key]=e.value},user:function(t,e){e.name&&(t.userName=e.name),e.email&&(t.userEmail=e.email),e.avatar&&(t.userAvatar=e.avatar)},asideMobileStateToggle:function(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i="has-aside-mobile-expanded";e=null!==a?a:!t.isAsideMobileExpanded,e?document.documentElement.classList.add(i):document.documentElement.classList.remove(i),t.isAsideMobileExpanded=e}},actions:{}}),R=a("9483");Object(R["a"])("".concat("/admin-one-vue-bulma-dashboard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:t.menu}}),a("router-view"),a("footer-bar")],1)},U=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{directives:[{name:"show",rawName:"v-show",value:t.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(e){return e.preventDefault(),t.menuToggleMobile(e)}}},[a("b-icon",{attrs:{icon:t.menuToggleMobileIcon}})],1),t._m(0)]),a("div",{staticClass:"navbar-brand is-right"},[a("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(e){return e.preventDefault(),t.menuNavBarToggle(e)}}},[a("b-icon",{attrs:{icon:t.menuNavBarToggleIcon,"custom-size":"default"}})],1)]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":t.isMenuNavBarActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"menu","custom-size":"default"}}),a("span",[t._v("Sample Menu")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[t._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[t._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[t._v("Log Out")])],1)],1)],1),a("nav-bar-menu",{staticClass:"has-divider has-user-avatar"},[a("user-avatar"),a("div",{staticClass:"is-user-name"},[a("span",[t._v(t._s(t.userName))])]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[t._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[t._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[t._v("Log Out")])],1)],1)],1),a("a",{staticClass:"navbar-item has-divider is-desktop-icon-only",attrs:{href:"https://justboil.me/bulma-admin-template/one",title:"About"}},[a("b-icon",{attrs:{icon:"help-circle-outline","custom-size":"default"}}),a("span",[t._v("About")])],1),a("a",{staticClass:"navbar-item is-desktop-icon-only",attrs:{title:"Log out"},on:{click:t.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[t._v("Log out")])],1)],1)])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-item has-control no-left-space-touch"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{placeholder:"Search everywhere..."}})])])}],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":t.isHoverable,"is-active":t.isDropdownActive},on:{click:t.toggle}},[a("a",{staticClass:"navbar-link is-arrowless"},[t._t("default"),a("b-icon",{attrs:{icon:t.toggleDropdownIcon,"custom-size":"default"}})],2),t._t("dropdown")],2)},K=[],Q={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon:function(){return this.isDropdownActive?"chevron-up":"chevron-down"}},mounted:function(){window.addEventListener("click",this.forceClose)},beforeDestroy:function(){window.removeEventListener("click",this.forceClose)},methods:{toggle:function(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose:function(t){this.$el.contains(t.target)||(this.isDropdownActive=!1)}}},X=Q,Y=Object(x["a"])(X,G,K,!1,null,null,null),Z=Y.exports,tt=a("808f"),et={name:"NavBar",components:{UserAvatar:tt["a"],NavBarMenu:Z},data:function(){return{isMenuNavBarActive:!1}},computed:Object(l["a"])({menuNavBarToggleIcon:function(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon:function(){return this.isAsideMobileExpanded?"backburger":"forwardburger"}},Object(F["b"])(["isNavBarVisible","isAsideMobileExpanded","userName"])),methods:{menuToggleMobile:function(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle:function(){this.isMenuNavBarActive=!this.isMenuNavBarActive},logout:function(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},at=et,it=Object(x["a"])(at,q,J,!1,null,null,null),nt=it.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{directives:[{name:"show",rawName:"v-show",value:t.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left is-expanded"},[a("aside-tools",{attrs:{"is-main-menu":!0}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("b",[t._v("Admin")]),t._v(" One ")])]),a("div",{staticClass:"menu is-menu-main"},[t._l(t.menu,(function(e,i){return["string"===typeof e?a("p",{key:i,staticClass:"menu-label"},[t._v(" "+t._s(e)+" ")]):a("aside-menu-list",{key:i,attrs:{menu:e},on:{"menu-click":t.menuClick}})]}))],2)],1)},ot=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside-tools"},[a("div",{staticClass:"aside-tools-label"},[t.icon?a("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._t("label")],2)])},lt=[],ct={name:"AsideTools",props:{icon:{type:String,default:null},label:{type:String,default:null}}},ut=ct,dt=Object(x["a"])(ut,rt,lt,!1,null,null,null),mt=dt.exports,ft=a("9a7b"),pt={name:"AsideMenu",components:{AsideTools:mt,AsideMenuList:ft["default"]},props:{menu:{type:Array,default:function(){return[]}}},computed:Object(l["a"])({},Object(F["b"])(["isAsideVisible"])),methods:{menuClick:function(t){}}},bt=pt,ht=Object(x["a"])(bt,st,ot,!1,null,null,null),vt=ht.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{directives:[{name:"show",rawName:"v-show",value:t.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"footer-copyright"},[a("b",[t._v("© "+t._s(t.year)+", JustBoil.me")]),t._v(" — Admin One Demo "),a("span",{staticClass:"tag"},[t._v("v1.4.2")])])])]),t._m(0)])])])},Ct=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-right"},[i("div",{staticClass:"level-item"},[i("div",{staticClass:"logo"},[i("a",{attrs:{href:"https://justboil.me"}},[i("img",{attrs:{src:a("226e"),alt:"JustBoil.me"}})])])])])}],wt=a("5a0c"),_t=a.n(wt),yt={name:"FooterBar",computed:Object(l["a"])({year:function(){return _t()().year()}},Object(F["b"])(["isFooterBarVisible"]))},kt=yt,xt=Object(x["a"])(kt,gt,Ct,!1,null,null,null),At=xt.exports,Ot={name:"Home",components:{FooterBar:At,AsideMenu:vt,NavBar:nt},computed:{menu:function(){return["General",[{to:"/",icon:"desktop-mac",label:"Dashboard"}],"Examples",[{to:"/tables",label:"Tables",icon:"table",updateMark:!0},{to:"/forms",label:"Forms",icon:"square-edit-outline"},{to:"/profile",label:"Profile",icon:"account-circle"},{label:"Submenus",subLabel:"Submenus Example",icon:"view-list",menu:[{href:"#void",label:"Sub-item One"},{href:"#void",label:"Sub-item Two"}]}],"About",[{href:"https://admin-one.justboil.me",label:"Premium Demo",icon:"credit-card"},{href:"https://justboil.me/bulma-admin-template/one",label:"About",icon:"help-circle"}]]}},created:function(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"https://avatars.dicebear.com/v2/gridy/John-Doe.svg"})}},jt=Ot,Bt=Object(x["a"])(jt,W,U,!1,null,null,null),Dt=Bt.exports,Mt="Admin One Bulma";I.afterEach((function(t){H.commit("asideMobileStateToggle",!1),t.meta&&t.meta.title?document.title="".concat(t.meta.title," — ").concat(Mt):document.title=Mt})),i["a"].config.productionTip=!1,i["a"].use(n["a"]),new i["a"]({router:I,store:H,render:function(t){return t(Dt)}}).$mount("#app")},"6df7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t.title?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t.icon?a("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v(" "+t._s(t.title)+" ")],1),t.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[a("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),a("div",{staticClass:"card-content"},[t._t("default")],2)])},n=[],s={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=l.exports},7080:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,paginated:t.paginated,"per-page":t.perPage,striped:!0,hoverable:!0,"default-sort":"name",data:t.clients},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-table-column",{staticClass:"has-no-head-mobile is-image-cell"},[a("div",{staticClass:"image"},[a("img",{staticClass:"is-rounded",attrs:{src:e.row.avatar,alt:e.row.name}})])]),a("b-table-column",{attrs:{label:"Name",field:"name",sortable:""}},[t._v(" "+t._s(e.row.name)+" ")]),a("b-table-column",{attrs:{label:"Company",field:"company",sortable:""}},[t._v(" "+t._s(e.row.company)+" ")]),a("b-table-column",{attrs:{label:"City",field:"city",sortable:""}},[t._v(" "+t._s(e.row.city)+" ")]),a("b-table-column",{staticClass:"is-progress-col",attrs:{label:"Progress",field:"progress",sortable:""}},[a("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:e.row.progress}},[t._v(t._s(e.row.progress))])]),a("b-table-column",{attrs:{label:"Created"}},[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created}},[t._v(t._s(e.row.created))])]),a("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"}},[a("div",{staticClass:"buttons is-right"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:e.row.id}}}},[a("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])},[a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[t._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[t._v("Nothing's here…")])]],2)])])],1)},n=[],s=(a("b0c0"),a("bc3a")),o=a.n(s),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v(" This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},l=[],c={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,l,!1,null,null,null),f=m.exports,p={name:"ClientsTableSample",components:{ModalBox:f},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){var t=this;this.dataUrl&&(this.isLoading=!0,o.a.get(this.dataUrl).then((function(e){t.isLoading=!1,e.data&&e.data.data&&(e.data.data.length>t.perPage&&(t.paginated=!0),t.clients=e.data.data)})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger"})})))},methods:{trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},b=p,h=Object(d["a"])(b,i,n,!1,null,null,null);e["a"]=h.exports},"808f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:t.newUserAvatar,alt:t.userName}})])},n=[],s=(a("ac1f"),a("5319"),a("5530")),o=a("2f62"),r={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:Object(s["a"])({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var t="somename";return this.userName&&(t=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(t,".svg?options[mood][]=happy")}},Object(o["b"])(["userAvatar","userName"]))},l=r,c=a("2877"),u=Object(c["a"])(l,i,n,!1,null,null,null);e["a"]=u.exports},"9a7b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{class:{"menu-list":!t.isSubmenuList}},t._l(t.menu,(function(e,i){return a("aside-menu-item",{key:i,attrs:{item:e},on:{"menu-click":t.menuClick}})})),1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{"is-active":t.isDropdownActive}},[a(t.componentIs,{tag:"component",class:{"has-icon":!!t.item.icon,"has-dropdown-icon":t.hasDropdown},attrs:{to:t.itemTo,href:t.itemHref,"exact-active-class":"is-active"},on:{click:t.menuClick}},[t.item.icon?a("b-icon",{class:{"has-update-mark":t.item.updateMark},attrs:{icon:t.item.icon,"custom-size":"default"}}):t._e(),t.item.label?a("span",{class:{"menu-item-label":!!t.item.icon}},[t._v(t._s(t.item.label))]):t._e(),t.hasDropdown?a("div",{staticClass:"dropdown-icon"},[a("b-icon",{attrs:{icon:t.dropdownIcon,"custom-size":"default"}})],1):t._e()],1),t.hasDropdown?a("aside-menu-list",{attrs:{menu:t.item.menu,"is-submenu-list":!0}}):t._e()],1)},o=[],r=(a("d3b7"),{name:"AsideMenuItem",components:{AsideMenuList:function(){return Promise.resolve().then(a.bind(null,"9a7b"))}},props:{item:{type:Object,default:null}},data:function(){return{isDropdownActive:!1}},computed:{componentIs:function(){return this.item.to?"router-link":"a"},hasDropdown:function(){return!!this.item.menu},dropdownIcon:function(){return this.isDropdownActive?"minus":"plus"},itemTo:function(){return this.item.to?this.item.to:null},itemHref:function(){return this.item.href?this.item.href:null}},methods:{menuClick:function(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive)}}}),l=r,c=a("2877"),u=Object(c["a"])(l,s,o,!1,null,null,null),d=u.exports,m={name:"AsideMenuList",components:{AsideMenuItem:d},props:{isSubmenuList:{type:Boolean,default:!1},menu:{type:Array,default:function(){return[]}}},methods:{menuClick:function(t){this.$emit("menu-click",t)}}},f=m,p=Object(c["a"])(f,i,n,!1,null,null,null);e["default"]=p.exports},"9e7c":function(t,e,a){"use strict";a("d81d"),a("a9e3");var i,n,s=a("91c8"),o=a.n(s),r={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(e){return t("div",{attrs:{class:"tile is-parent"}},[e])})))}},render:function(t){var e=this;return this.$slots.default.length<=this.maxPerRow?this.renderAncestor(t,this.$slots.default):t("div",{attrs:{class:"is-tiles-wrapper"}},o()(this.$slots.default,this.maxPerRow).map((function(a){return e.renderAncestor(t,a)})))}},l=r,c=a("2877"),u=Object(c["a"])(l,i,n,!1,null,null,null);e["a"]=u.exports},b107:function(t,e,a){},c32d:function(t,e){if("undefined"===typeof moment){var a=new Error("Cannot find module 'moment'");throw a.code="MODULE_NOT_FOUND",a}t.exports=moment}});
//# sourceMappingURL=app-legacy.b5cb7930.js.map