(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/youxiuzuozhe/add-or-update"],{"740a":function(e,t,n){},b150:function(e,t,n){"use strict";(function(e){n("2094"),n("921b");i(n("66fd"));var t=i(n("f388"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},c01c:function(e,t,n){"use strict";var i=n("740a"),u=n.n(i);u.a},cea7:function(e,t,n){"use strict";n.r(t);var i=n("e739"),u=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=u.a},ddcc:function(e,t,n){"use strict";var i={"w-picker":function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"8d49"))}},u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},e739:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,u,r,o){try{var a=e[r](o),c=a.value}catch(s){return void n(s)}a.done?t(c):Promise.resolve(c).then(i,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(i,u){var o=e.apply(t,n);function a(e){r(o,i,u,a,c,"next",e)}function c(e){r(o,i,u,a,c,"throw",e)}a(void 0)}))}}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("8d49"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{ruleForm:{zuozhexingming:"",zuoyouming:"",zuozhezhaopian:"",wangqizuopin:"",zuozhejianjie:"",thumbsupnum:"",crazilynum:"",clicktime:""},user:{},ro:{zuozhexingming:!1,zuoyouming:!1,zuozhezhaopian:!1,wangqizuopin:!1,zuozhejianjie:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1}}},components:{wPicker:a},computed:{},onLoad:function(){var t=o(i.default.mark((function t(n){var u,r,o,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=e.getStorageSync("nowTable"),t.next=3,this.$api.session(u);case 3:if(r=t.sent,this.user=r.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=13;break}return this.ruleForm.id=n.id,t.next=11,this.$api.info("youxiuzuozhe",this.ruleForm.id);case 11:r=t.sent,this.ruleForm=r.data;case 13:if(!n.cross){t.next=52;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 16:if((t.t1=t.t0()).done){t.next=52;break}if(a=t.t1.value,"zuozhexingming"!=a){t.next=22;break}return this.ruleForm.zuozhexingming=o[a],this.ro.zuozhexingming=!0,t.abrupt("continue",16);case 22:if("zuoyouming"!=a){t.next=26;break}return this.ruleForm.zuoyouming=o[a],this.ro.zuoyouming=!0,t.abrupt("continue",16);case 26:if("zuozhezhaopian"!=a){t.next=30;break}return this.ruleForm.zuozhezhaopian=o[a],this.ro.zuozhezhaopian=!0,t.abrupt("continue",16);case 30:if("wangqizuopin"!=a){t.next=34;break}return this.ruleForm.wangqizuopin=o[a],this.ro.wangqizuopin=!0,t.abrupt("continue",16);case 34:if("zuozhejianjie"!=a){t.next=38;break}return this.ruleForm.zuozhejianjie=o[a],this.ro.zuozhejianjie=!0,t.abrupt("continue",16);case 38:if("thumbsupnum"!=a){t.next=42;break}return this.ruleForm.thumbsupnum=o[a],this.ro.thumbsupnum=!0,t.abrupt("continue",16);case 42:if("crazilynum"!=a){t.next=46;break}return this.ruleForm.crazilynum=o[a],this.ro.crazilynum=!0,t.abrupt("continue",16);case 46:if("clicktime"!=a){t.next=50;break}return this.ruleForm.clicktime=o[a],this.ro.clicktime=!0,t.abrupt("continue",16);case 50:t.next=16;break;case 52:this.styleChange();case 53:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},zuozhezhaopianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.zuozhezhaopian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=o(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=3;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=6;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("youxiuzuozhe",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("youxiuzuozhe",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,u=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,u=u>9?u:"0"+u,"".concat(n,"-").concat(i,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},f388:function(e,t,n){"use strict";n.r(t);var i=n("ddcc"),u=n("cea7");for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);n("c01c");var o,a=n("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"6df7b6ee",null,!1,i["a"],o);t["default"]=c.exports}},[["b150","common/runtime","common/vendor"]]]);