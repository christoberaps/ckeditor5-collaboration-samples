(function(t){function e(e){for(var r,i,s=e[0],l=e[1],d=e[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(h.length)h.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"3a99":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.configuration?n("sample",{attrs:{configuration:t.configuration}}):n("configuration-dialog",{attrs:{onSubmit:t.handleUpdate}})],1)},o=[],i=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{class:{warning:e.isWarning},attrs:{id:"overlay"}},[r("form",{staticClass:"body",on:{submit:function(t){return e.handleSubmit(t)}}},[r("h2",[e._v("Connect CKEditor Cloud Services")]),e._m(0),r("div",[r("label",{attrs:{for:"upload-url"}},[e._v("Upload URL")]),r("input",{attrs:{name:"upload-url",id:"upload-url"},domProps:{value:e.config.uploadUrl},on:{change:function(t){return e.handleConfigChange(t.target.value,"uploadUrl")}}})]),r("div",[r("label",{attrs:{for:"web-socket-url"}},[e._v("WebSocket URL")]),r("input",{attrs:{name:"web-socket-url",id:"web-socket-url"},domProps:{value:e.config.webSocketUrl},on:{change:function(t){return e.handleConfigChange(t.target.value,"webSocketUrl")}}})]),r("div",[r("label",{attrs:{for:"token-url"}},[e._v("Token URL")]),r("input",{attrs:{required:"",name:"token-url",id:"token-url"},domProps:{value:e.config.tokenUrl},on:{input:function(t){return e.handleTokenUrlChange(t.target.value)}}})]),r("div",{class:{visible:e.isCloudServicesTokenEndpoint(e.config.tokenUrl)},attrs:{id:"additional"}},[r("p",[e._v("Use one of the following users to define the user data.")]),r("div",{attrs:{id:"user-container"}},e._l(e.users,(function(t){return r("div",{key:t.id,class:{active:e.selectedUser==t.id},on:{click:function(){return e.selectUser(t)}}},[t.avatar?r("img",{attrs:{alt:"",src:t.avatar}}):e._e(),!t.avatar&&t.name?r("span",{staticClass:"pseudo-avatar"},[e._v(e._s(e.getUserInitials(t.name)))]):e._e(),t.avatar||t.name?e._e():r("span",{staticClass:"pseudo-avatar anonymous"}),e._v("\n\t\t\t\t\t"+e._s(t.name||"(anonymous)")+"\n\t\t\t\t\t"),r("span",{staticClass:"role"},[e._v(e._s(t.role))])])})),0)]),r("div",[r("label",{attrs:{for:"document-id"}},[e._v("Document ID")]),r("input",{attrs:{name:"document-id",id:"document-id",required:""},domProps:{value:e.documentId},on:{change:function(e){return t.documentId=e.target.value}}})]),r("button",{attrs:{id:"start"}},[e._v("Start")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n\t\t\tIf you do not have Cloud Services URLs yet, \n\t\t\t"),n("a",{attrs:{href:"https://ckeditor.com/docs/cs/latest/guides/collaboration/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("see the documentation")]),t._v(".\n\t\t")])}],l={name:"configuration-dialog",props:["onSubmit"],data(){return{LOCAL_STORAGE_KEY:"CKEDITOR_CS_CONFIG",users:[{id:"e1",name:"Tom Rowling",avatar:"https://randomuser.me/api/portraits/men/30.jpg",role:"writer"},{id:"e2",name:"Wei Hong",avatar:"https://randomuser.me/api/portraits/women/51.jpg",role:"writer"},{id:"e3",name:"Rani Patel",role:"writer"},{id:"e4",name:"Henrik Jensen",role:"commentator"},{id:this.randomString(),role:"writer"},{id:this.randomString(),role:"reader"}],config:null,documentId:this.handleDocIdInUrl(),selectedUser:null,isWarning:!1}},created(){this.config=this.getStoredConfig()},methods:{handleConfigChange(t,e){const n=this.config;n[e]=t,this.config=n},handleTokenUrlChange(t){this.handleConfigChange(t,"tokenUrl"),this.selectedUser=null,this.isWarning=!1},selectUser(t){this.selectedUser=t.id,this.isWarning=!1;const e=this.config;e.tokenUrl=`${this.getRawTokenUrl(e.tokenUrl)}?`+Object.keys(t).filter(e=>t[e]).map(e=>{return"role"===e?`${e}=${t[e]}`:`user.${e}=${t[e]}`}).join("&"),this.config=e},handleSubmit(t){t.preventDefault();const{config:e,documentId:n}=this;!this.isCloudServicesTokenEndpoint(e.tokenUrl)||e.tokenUrl.includes("?")?(this.storeConfig(Object.assign({},e,{tokenUrl:this.getRawTokenUrl(e.tokenUrl)})),this.updateDocIdInUrl(n),this.onSubmit(Object.assign({},e,{documentId:n}))):this.isWarning=!0},getUserInitials(t){return t.split(" ",2).map(t=>t.charAt(0)).join("").toUpperCase()},handleDocIdInUrl(){let t=this.getDocIdFromUrl();return t||(t=this.randomString(),this.updateDocIdInUrl(t)),t},updateDocIdInUrl(t){window.history.replaceState({},document.title,this.generateUrlWithDocId(t))},generateUrlWithDocId(t){return`${window.location.href.split("?")[0]}?docId=${t}`},getDocIdFromUrl(){const t=location.search.match(/docId=(.+)$/);return t?decodeURIComponent(t[1]):null},isCloudServicesTokenEndpoint(t){return/cke-cs[\w-]*\.com\/token\/dev/.test(t)},getRawTokenUrl(t){return this.isCloudServicesTokenEndpoint(t)?t.split("?")[0]:t},randomString(){return Math.floor(Math.random()*Math.pow(2,52)).toString(32)},storeConfig(t){localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(t))},getStoredConfig(){const t=JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)||"{}");return{tokenUrl:t.tokenUrl||"",uploadUrl:t.uploadUrl||"",webSocketUrl:t.webSocketUrl||""}}}},d=l,c=(n("daa3"),n("2877")),u=Object(c["a"])(d,i,s,!1,null,"11a5aaf4",null),h=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App"},[n("sample-header"),n("main",[t._m(0),n("div",{staticClass:"centered"},[n("div",{staticClass:"row row-presence"},[n("div",{ref:"presenceListElement",staticClass:"presence"})]),n("div",{staticClass:"row row-editor"},[t.isLayoutReady?n("ckeditor",{attrs:{editor:t.classicEditor,config:t.config},on:{change:function(e,n){return t.console.log({event:e,editor:n})},ready:t.onEditorReady},model:{value:t.initialData,callback:function(e){t.initialData=e},expression:"initialData"}}):t._e(),n("div",{ref:"sidebarElement",staticClass:"sidebar"})],1)])]),n("sample-footer")],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("div",{staticClass:"centered"},[n("h2",[t._v("CKEditor 5 Vue integration of classic editor with real-time collaboration")]),n("p",[t._v("\n\t\t\t\t\tOpen this sample in another browser tab to start collaborative editing.\n\t\t\t\t")])])])}],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"centered"},[n("p",[t._v("\n\t\t\tCKEditor 5 – The text editor for the Internet – "),n("a",{attrs:{href:"https://ckeditor.com/ckeditor-5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ckeditor.com/ckeditor-5")])]),n("p",[t._v("\n\t\t\tCopyright © 2019, "),n("a",{attrs:{href:"https://cksource.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CKSource")]),t._v(" – Frederico Knabben. All rights reserved.\n\t\t")])])])}],b={name:"sample-footer"},v=b,k=Object(c["a"])(v,g,m,!1,null,null,null),w=k.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"centered"},[n("h1",[n("a",{attrs:{href:"https://ckeditor.com/ckeditor-5/",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://c.cksource.com/a/1/logos/ckeditor5.svg",alt:"CKEditor 5 logo"}}),t._v(" CKEditor 5\n\t\t\t")])]),n("nav",[n("ul",[n("li",[n("a",{attrs:{href:"https://ckeditor.com/collaboration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Website")])]),n("li",[n("a",{attrs:{href:"https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation")])])])])])])}],U={name:"sample-header"},C=U,S=Object(c["a"])(C,_,y,!1,null,null,null),E=S.exports,I=n("0469"),O=n("c4b1"),T=n("8a91"),L=n("85a9"),D=n("2d79"),R=n("41ae"),A=n("fb67"),j=n("290f"),x=n("191f"),$=n("2566"),P=n("8b25"),M=n("7695"),W=n("39a0"),K=n("233a"),F=n("64f1"),J=n("0bf6"),G=n("56b3"),H=n("7212"),z=n("d4c1"),q=n("8068"),N=n("4801"),Y=n("0e17"),B=n("f61b"),V=n("2b10"),Q=n("634d"),X=n("0c85"),Z=n("f044"),tt=n("5e96"),et=n("613a"),nt=n("643c"),rt=n("f4e9"),at=n("7041"),ot=n("e25f"),it={name:"sample",components:{SampleHeader:E,SampleFooter:w},props:["configuration"],data(){return{isLayoutReady:!1,classicEditor:I["a"],initialData:'\n\t\t\t\t\t<h2>Bilingual Personality Disorder</h2>\n\n\t\t\t\t\t<figure class="image image-style-side">\n\t\t\t\t\t\t<img alt="" src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg">\n\t\t\t\t\t\t<figcaption>\n\t\t\t\t\t\t\tOne language, one person.\n\t\t\t\t\t\t</figcaption>\n\t\t\t\t\t</figure>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth. Even the studies\n\t\t\t\t\t\tthat were conducted almost half a century show that <strong>the language you speak has more effects on you than you realise</strong>.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tOne of the very first experiments conducted on this topic dates back to 1964.\n\t\t\t\t\t\t<a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a>\n\t\t\t\t\t\tdesigned by linguist Ervin-Tripp who is an expert in psycholinguistic and sociolinguistic studies, adults who are bilingual\n\t\t\t\t\t\tin English in French were showed series of pictures and were asked to create 3-minute stories. In the end participants emphasized\n\t\t\t\t\tdrastically different dynamics for stories in English and French.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAnother ground-breaking experiment which included bilingual Japanese women married to American men in San Francisco were asked\n\t\t\t\t\t\tto complete sentences. The goal of the experiment was to investigate whether or not human feelings and thoughts are expressed\n\t\t\t\t\t\tdifferently in <strong>different language mindsets</strong>.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>Here is a sample from the the experiment:</p>\n\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t<th>English</th>\n\t\t\t\t\t\t\t\t<th>Japanese</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>Real friends should</td>\n\t\t\t\t\t\t\t\t<td>Be very frank</td>\n\t\t\t\t\t\t\t\t<td>Help each other</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>I will probably become</td>\n\t\t\t\t\t\t\t\t<td>A teacher</td>\n\t\t\t\t\t\t\t\t<td>A housewife</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>When there is a conflict with family</td>\n\t\t\t\t\t\t\t\t<td>I do what I want</td>\n\t\t\t\t\t\t\t\t<td>It\'s a time of great unhappiness</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMore recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the language a person speaks affects\n\t\t\t\t\t\ttheir cognition, behaviour, emotions and hence <strong>their personality</strong>. This shouldn’t come as a surprise\n\t\t\t\t\t\t<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since wealready know</a> that different regions\n\t\t\t\t\t\tof the brain become more active depending on the person’s activity at hand. Since structure, information and especially\n\t\t\t\t\t\t<strong>the culture</strong> of languages varies substantially and the language a person speaks is an essential element of daily life.\n\t\t\t\t\t</p>\n\t\t\t\t',config:{plugins:[O["a"],T["a"],L["a"],D["a"],R["a"],A["a"],j["a"],x["a"],$["a"],P["a"],M["a"],W["a"],K["a"],F["a"],J["a"],G["a"],H["a"],z["a"],q["a"],N["a"],Y["a"],B["a"],V["a"],Q["a"],X["a"],Z["a"],tt["a"],et["a"],nt["a"],rt["a"],at["a"],ot["a"]],toolbar:["heading","|","fontsize","fontfamily","|","bold","italic","underline","strikethrough","removeFormat","highlight","|","alignment","|","numberedList","bulletedList","|","link","blockquote","imageUpload","insertTable","mediaEmbed","|","undo","redo","|","comment","|","trackChanges"],cloudServices:{tokenUrl:this.configuration.tokenUrl,uploadUrl:this.configuration.uploadUrl,webSocketUrl:this.configuration.webSocketUrl,documentId:this.configuration.documentId},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative","|","comment"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"],tableToolbar:["comment"]},mediaEmbed:{toolbar:["comment"]},sidebar:{container:null},presenceList:{container:null}}}},mounted(){this.config.presenceList.container=this.$refs.presenceListElement,this.config.sidebar.container=this.$refs.sidebarElement,this.isLayoutReady=!0},beforeDestroy(){window.removeEventListener("resize",this.boundRefreshDisplayMode),window.removeEventListener("beforeunload",this.boundCheckPendingActions)},methods:{onEditorReady(t){this.boundRefreshDisplayMode=this.refreshDisplayMode.bind(this,t),this.boundCheckPendingActions=this.checkPendingActions.bind(this,t),window.addEventListener("resize",this.boundRefreshDisplayMode),window.addEventListener("beforeunload",this.boundCheckPendingActions),this.refreshDisplayMode(t)},refreshDisplayMode(t){const e=t.plugins.get("Annotations"),n=this.$refs.sidebarElement;window.innerWidth<1070?(n.classList.remove("narrow"),n.classList.add("hidden"),e.switchTo("inline")):window.innerWidth<1300?(n.classList.remove("hidden"),n.classList.add("narrow"),e.switchTo("narrowSidebar")):(n.classList.remove("hidden","narrow"),e.switchTo("wideSidebar"))},checkPendingActions(t,e){t.plugins.get("PendingActions").hasAny&&(e.preventDefault(),e.returnValue=!0)}}},st=it,lt=Object(c["a"])(st,p,f,!1,null,null,null),dt=lt.exports,ct={name:"app",components:{ConfigurationDialog:h,Sample:dt},data(){return{configuration:null}},methods:{handleUpdate(t){this.configuration=t}}},ut=ct,ht=Object(c["a"])(ut,a,o,!1,null,null,null),pt=ht.exports,ft=n("3730"),gt=n.n(ft);
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * This file is licensed under the terms of the MIT License (see LICENSE.md).
 */
r["a"].use(gt.a),new r["a"]({render:t=>t(pt)}).$mount("#app")},daa3:function(t,e,n){"use strict";var r=n("3a99"),a=n.n(r);a.a}});