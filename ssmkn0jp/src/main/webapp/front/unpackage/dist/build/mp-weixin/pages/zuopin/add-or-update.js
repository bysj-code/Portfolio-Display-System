(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zuopin/add-or-update"],{3177:function(n,e,t){"use strict";var r=t("7a38"),i=t.n(r);i.a},5771:function(n,e,t){"use strict";t.r(e);var r=t("f7c7"),i=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=i.a},6898:function(n,e,t){"use strict";(function(n){t("2de9");r(t("66fd"));var e=r(t("c682"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"7a38":function(n,e,t){},c2b3:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"85cb"))}},i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},c682:function(n,e,t){"use strict";t.r(e);var r=t("c2b3"),i=t("5771");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("3177");var o,a=t("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"3b61977b",null,!1,r["a"],o);e["default"]=c.exports},f7c7:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,r,i,u,o){try{var a=n[u](o),c=a.value}catch(s){return void t(s)}a.done?e(c):Promise.resolve(c).then(r,i)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){u(o,r,i,a,c,"next",n)}function c(n){u(o,r,i,a,c,"throw",n)}a(void 0)}))}}var a=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("85cb"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{zuopinmingcheng:"",zuopinfenlei:"",zuopinfengmian:"",zuopinneirong:"",faburiqi:"",zuopinjianjie:"",thumbsupnum:"",crazilynum:""},zuopinfenleiOptions:[],zuopinfenleiIndex:0,user:{},ro:{zuopinmingcheng:!1,zuopinfenlei:!1,zuopinfengmian:!1,zuopinneirong:!1,faburiqi:!1,zuopinjianjie:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:a},computed:{},onLoad:function(e){var t=this;return o(r.default.mark((function i(){var u,o,a,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u=n.getStorageSync("nowTable"),i.next=3,t.$api.session(u);case 3:return o=i.sent,t.user=o.data,i.next=7,t.$api.option("biaoqian","biaoqian",{});case 7:if(o=i.sent,t.zuopinfenleiOptions=o.data,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=17;break}return t.ruleForm.id=e.id,i.next=15,t.$api.info("zuopin",t.ruleForm.id);case 15:o=i.sent,t.ruleForm=o.data;case 17:if(!e.cross){i.next=56;break}a=n.getStorageSync("crossObj"),i.t0=r.default.keys(a);case 20:if((i.t1=i.t0()).done){i.next=56;break}if(c=i.t1.value,"zuopinmingcheng"!=c){i.next=26;break}return t.ruleForm.zuopinmingcheng=a[c],t.ro.zuopinmingcheng=!0,i.abrupt("continue",20);case 26:if("zuopinfenlei"!=c){i.next=30;break}return t.ruleForm.zuopinfenlei=a[c],t.ro.zuopinfenlei=!0,i.abrupt("continue",20);case 30:if("zuopinfengmian"!=c){i.next=34;break}return t.ruleForm.zuopinfengmian=a[c],t.ro.zuopinfengmian=!0,i.abrupt("continue",20);case 34:if("zuopinneirong"!=c){i.next=38;break}return t.ruleForm.zuopinneirong=a[c],t.ro.zuopinneirong=!0,i.abrupt("continue",20);case 38:if("faburiqi"!=c){i.next=42;break}return t.ruleForm.faburiqi=a[c],t.ro.faburiqi=!0,i.abrupt("continue",20);case 42:if("zuopinjianjie"!=c){i.next=46;break}return t.ruleForm.zuopinjianjie=a[c],t.ro.zuopinjianjie=!0,i.abrupt("continue",20);case 46:if("thumbsupnum"!=c){i.next=50;break}return t.ruleForm.thumbsupnum=a[c],t.ro.thumbsupnum=!0,i.abrupt("continue",20);case 50:if("crazilynum"!=c){i.next=54;break}return t.ruleForm.crazilynum=a[c],t.ro.crazilynum=!0,i.abrupt("continue",20);case 54:i.next=20;break;case 56:t.styleChange();case 57:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiConfirm:function(n){console.log(n),this.ruleForm.faburiqi=n.result,this.$forceUpdate()},zuopinfenleiChange:function(n){this.zuopinfenleiIndex=n.target.value,this.ruleForm.zuopinfenlei=this.zuopinfenleiOptions[this.zuopinfenleiIndex]},zuopinfengmianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zuopinfengmian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},zuopinneirongTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zuopinneirong=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.zuopinmingcheng){e.next=3;break}return n.$utils.msg("作品名称不能为空"),e.abrupt("return");case 3:if(n.ruleForm.zuopinfenlei){e.next=6;break}return n.$utils.msg("作品分类不能为空"),e.abrupt("return");case 6:if(!n.ruleForm.thumbsupnum||n.$validate.isIntNumer(n.ruleForm.thumbsupnum)){e.next=9;break}return n.$utils.msg("赞应输入整数"),e.abrupt("return");case 9:if(!n.ruleForm.crazilynum||n.$validate.isIntNumer(n.ruleForm.crazilynum)){e.next=12;break}return n.$utils.msg("踩应输入整数"),e.abrupt("return");case 12:if(!n.ruleForm.id){e.next=17;break}return e.next=15,n.$api.update("zuopin",n.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,n.$api.add("zuopin",n.ruleForm);case 19:n.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])}},[["6898","common/runtime","common/vendor"]]]);