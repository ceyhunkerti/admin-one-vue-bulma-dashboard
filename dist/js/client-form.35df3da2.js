(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client-form"],{2769:function(t,e,a){var i=a("5ca0"),s=a("51f5"),r=i(s);t.exports=r},"2b03":function(t,e){function a(t,e,a,i){var s=t.length,r=a+(i?1:-1);while(i?r--:++r<s)if(e(t[r],r,t))return r;return-1}t.exports=a},"2b9d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},s=[],r={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},n=r,o=a("2877"),l=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=l.exports},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"51f5":function(t,e,a){var i=a("2b03"),s=a("badf"),r=a("4b17"),n=Math.max;function o(t,e,a){var o=null==t?0:t.length;if(!o)return-1;var l=null==a?0:r(a);return l<0&&(l=n(o+l,0)),i(t,s(e,3),l)}t.exports=o},"5ca0":function(t,e,a){var i=a("badf"),s=a("30c9"),r=a("ec69");function n(t){return function(e,a,n){var o=Object(e);if(!s(e)){var l=i(a,3);e=r(e),a=function(t){return l(o[t],t,o)}}var c=t(e,a,n);return c>-1?o[l?e[c]:c]:void 0}}t.exports=n},"6b54":function(t,e,a){"use strict";a("3846");var i=a("cb7c"),s=a("0bfb"),r=a("9e1e"),n="toString",o=/./[n],l=function(t){a("2aba")(RegExp.prototype,n,t,!0)};a("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?l(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?s.call(t):void 0)}):o.name!=n&&l(function(){return o.call(this)})},e96b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v("\n    "+t._s(t.heroTitle)+"\n    "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:t.heroRouterLinkTo},slot:"right"},[t._v("\n      "+t._s(t.heroRouterLinkLabel)+"\n    ")])],1),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[a("div",[a("span",[a("b",[t._v("Demo only.")]),t._v(" No data will be saved/updated")])])]),a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"account-edit"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{label:"ID",horizontal:""}},[a("b-input",{attrs:{"custom-class":"is-static",readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),a("hr"),a("b-field",{attrs:{label:"Avatar",horizontal:""}},[a("file-picker")],1),a("hr"),a("b-field",{attrs:{label:"Name",message:"Client name",horizontal:""}},[a("b-input",{attrs:{placeholder:"e.g. John Doe",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-field",{attrs:{label:"Company",message:"Client's company name",horizontal:""}},[a("b-input",{attrs:{placeholder:"e.g. Berton & Steinway",required:""},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),a("b-field",{attrs:{label:"City",message:"Client's city",horizontal:""}},[a("b-input",{attrs:{placeholder:"e.g. Geoffreyton",required:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),a("b-field",{attrs:{label:"Created",horizontal:""}},[a("b-datepicker",{attrs:{placeholder:"Click to select...",icon:"calendar-today"},on:{input:t.input},model:{value:t.form.created_date,callback:function(e){t.$set(t.form,"created_date",e)},expression:"form.created_date"}})],1),a("hr"),a("b-field",{attrs:{label:"Progress",horizontal:""}},[a("b-slider",{model:{value:t.form.progress,callback:function(e){t.$set(t.form,"progress",e)},expression:"form.progress"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("Submit")])],1)],1)]),t.isProfileExists?a("card-component",{staticClass:"tile is-child",attrs:{title:"Client Profile",icon:"account"}},[a("user-avatar",{staticClass:"image has-max-width is-aligned-center",attrs:{avatar:t.form.file}}),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:t.form.name,"custom-class":"is-static",readonly:""}})],1),a("b-field",{attrs:{label:"Company"}},[a("b-input",{attrs:{value:t.form.company,"custom-class":"is-static",readonly:""}})],1),a("b-field",{attrs:{label:"City"}},[a("b-input",{attrs:{value:t.form.city,"custom-class":"is-static",readonly:""}})],1),a("b-field",{attrs:{label:"Created"}},[a("b-input",{attrs:{value:t.createdReadable,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"Progress"}},[a("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.form.progress}},[t._v(t._s(t.form.progress))])])],1):t._e()],1)],1)],1)},s=[],r=(a("6b54"),a("7f7f"),a("bc3a")),n=a.n(r),o=a("c1df"),l=a.n(o),c=a("2769"),u=a.n(c),f=a("1e1d"),d=a("503b"),m=a("9e7c"),b=a("6df7"),p=a("3b73"),h=a("808f"),v=a("2b9d"),g={name:"ClientForm",components:{UserAvatar:h["a"],FilePicker:p["a"],CardComponent:b["a"],Tiles:m["a"],HeroBar:d["a"],TitleBar:f["a"],Notification:v["a"]},props:{id:{default:null}},data:function(){return{isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isProfileExists:!1}},computed:{titleStack:function(){var t;return t=this.isProfileExists?this.form.name:"New client",["Admin","Clients",t]},heroTitle:function(){return this.isProfileExists?this.form.name:"Create Client"},heroRouterLinkTo:function(){return this.isProfileExists?{name:"client.new"}:"/"},heroRouterLinkLabel:function(){return this.isProfileExists?"New client":"Dashboard"},formCardTitle:function(){return this.isProfileExists?"Edit Client":"New Client"}},created:function(){this.getData()},methods:{getClearFormObject:function(){return{id:null,name:null,company:null,city:null,created_date:new Date,created_mm_dd_yyyy:null,progress:0}},getData:function(){var t=this;this.id&&n.a.get("/data-sources/clients.json").then(function(e){var a=u()(e.data.data,function(e){return e.id===parseInt(t.id)});a?(t.isProfileExists=!0,t.form=a,t.form.created_date=new Date(a.created_mm_dd_yyyy),t.createdReadable=l()(new Date(a.created_mm_dd_yyyy)).format("MMM D, Y").toString()):t.$router.push({name:"client.new"})}).catch(function(e){t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger",queue:!1})})},input:function(t){this.createdReadable=l()(t).format("MMM D, Y").toString()},submit:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Demo only",queue:!1})},500)}},watch:{id:function(t){this.isProfileExists=!1,t?this.getData():this.form=this.getClearFormObject()}}},y=g,C=a("2877"),_=Object(C["a"])(y,i,s,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=client-form.35df3da2.js.map