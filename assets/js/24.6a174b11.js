(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{273:function(t,e,s){},282:function(t,e,s){"use strict";s(273)},292:function(t,e,s){"use strict";s.r(e);var a={name:"TopNav",data:()=>({displayText:""}),mounted(){this.changeText(),this.$router.afterEach(()=>{this.isSidebarOpen=!1,this.changeText()})},methods:{changeText(){let t=this.$route.path.split("/")[1];["2.2"].includes(t)?this.displayText="This is the documentation for the current version (v2.2) of Bagisto. Stay informed and make the most of Bagisto's capabilities.":this.displayText="master"===t?"WARNING: You're browsing the documentation for an upcoming version. Features of this release are subject to change.":'Heads up: You are viewing outdated documentation for Bagisto. Please consider upgrading to <a class="nav-text latest-version-link" href="/2.2/prologue">v2.2</a> for the latest information.'}}},i=(s(282),s(10)),n=Object(i.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"top-nav"},[t("div",{staticClass:"nav-text",domProps:{innerHTML:this._s(this.displayText)}})])}),[],!1,null,null,null);e.default=n.exports}}]);