(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1063:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteTabFromList=t.updateTabChecked=t.updateTabList=t.requestTabList=void 0;var n=a(149);t.requestTabList=(0,n.createAction)("requestTabList"),t.updateTabList=(0,n.createAction)("updateTabList"),t.updateTabChecked=(0,n.createAction)("updateTabChecked"),t.deleteTabFromList=(0,n.createAction)("deleteTabFromList")},1134:function(e,t,a){"use strict";var n=r(a(1)),l=r(a(11)),s=r(a(1143));function r(e){return e&&e.__esModule?e:{default:e}}a(1379),l.default.render(n.default.createElement(s.default,null),document.getElementById("root"))},1143:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(1582));a(1585);var l=f(a(1)),s=a(148);a(1213);var r=f(a(1215)),o=a(102),u=f(a(1251)),d=a(150),i=f(a(1252)),c=f(a(1257));function f(e){return e&&e.__esModule?e:{default:e}}var p=[u.default],m=(0,d.createStore)(i.default,d.applyMiddleware.apply(void 0,p));console.log(m.getState(),99999888888);var h=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"Home3456788 ",l.default.createElement(n.default,null)))},v=function(e){var t=e.match;return l.default.createElement("div",null,l.default.createElement("h3",null,t.params.topicId))},j=function(e){var t=e.match;return l.default.createElement("div",null,l.default.createElement("h2",null,"Topics"),l.default.createElement("ul",{className:"container"},l.default.createElement("li",null,l.default.createElement(s.Link,{to:t.url+"/rendering"},"Rendering with React")),l.default.createElement("li",null,l.default.createElement(s.Link,{to:t.url+"/components"},"Components")),l.default.createElement("li",null,l.default.createElement(s.Link,{to:t.url+"/props-v-state"},"Props v. State"))),l.default.createElement(s.Route,{path:t.path+"/:topicId",component:v}),l.default.createElement(s.Route,{exact:!0,path:t.path,render:function(){return l.default.createElement("h3",null,"Please select a topic.")}}))};t.default=function(){return l.default.createElement(o.Provider,{store:m},l.default.createElement(s.HashRouter,null,l.default.createElement(r.default,null,l.default.createElement(s.Route,{exact:!0,path:"/",component:h}),l.default.createElement(s.Route,{path:"/addressBook",component:c.default}),l.default.createElement(s.Route,{path:"/topics",component:j}))))}},1180:function(e,t,a){var n={"./af":221,"./af.js":221,"./ar":222,"./ar-dz":223,"./ar-dz.js":223,"./ar-kw":224,"./ar-kw.js":224,"./ar-ly":225,"./ar-ly.js":225,"./ar-ma":226,"./ar-ma.js":226,"./ar-sa":227,"./ar-sa.js":227,"./ar-tn":228,"./ar-tn.js":228,"./ar.js":222,"./az":229,"./az.js":229,"./be":230,"./be.js":230,"./bg":231,"./bg.js":231,"./bm":232,"./bm.js":232,"./bn":233,"./bn.js":233,"./bo":234,"./bo.js":234,"./br":235,"./br.js":235,"./bs":236,"./bs.js":236,"./ca":237,"./ca.js":237,"./cs":238,"./cs.js":238,"./cv":239,"./cv.js":239,"./cy":240,"./cy.js":240,"./da":241,"./da.js":241,"./de":242,"./de-at":243,"./de-at.js":243,"./de-ch":244,"./de-ch.js":244,"./de.js":242,"./dv":245,"./dv.js":245,"./el":246,"./el.js":246,"./en-au":247,"./en-au.js":247,"./en-ca":248,"./en-ca.js":248,"./en-gb":249,"./en-gb.js":249,"./en-ie":250,"./en-ie.js":250,"./en-il":251,"./en-il.js":251,"./en-nz":252,"./en-nz.js":252,"./eo":253,"./eo.js":253,"./es":254,"./es-do":255,"./es-do.js":255,"./es-us":256,"./es-us.js":256,"./es.js":254,"./et":257,"./et.js":257,"./eu":258,"./eu.js":258,"./fa":259,"./fa.js":259,"./fi":260,"./fi.js":260,"./fo":261,"./fo.js":261,"./fr":262,"./fr-ca":263,"./fr-ca.js":263,"./fr-ch":264,"./fr-ch.js":264,"./fr.js":262,"./fy":265,"./fy.js":265,"./gd":266,"./gd.js":266,"./gl":267,"./gl.js":267,"./gom-latn":268,"./gom-latn.js":268,"./gu":269,"./gu.js":269,"./he":270,"./he.js":270,"./hi":271,"./hi.js":271,"./hr":272,"./hr.js":272,"./hu":273,"./hu.js":273,"./hy-am":274,"./hy-am.js":274,"./id":275,"./id.js":275,"./is":276,"./is.js":276,"./it":277,"./it.js":277,"./ja":278,"./ja.js":278,"./jv":279,"./jv.js":279,"./ka":280,"./ka.js":280,"./kk":281,"./kk.js":281,"./km":282,"./km.js":282,"./kn":283,"./kn.js":283,"./ko":284,"./ko.js":284,"./ky":285,"./ky.js":285,"./lb":286,"./lb.js":286,"./lo":287,"./lo.js":287,"./lt":288,"./lt.js":288,"./lv":289,"./lv.js":289,"./me":290,"./me.js":290,"./mi":291,"./mi.js":291,"./mk":292,"./mk.js":292,"./ml":293,"./ml.js":293,"./mn":294,"./mn.js":294,"./mr":295,"./mr.js":295,"./ms":296,"./ms-my":297,"./ms-my.js":297,"./ms.js":296,"./mt":298,"./mt.js":298,"./my":299,"./my.js":299,"./nb":300,"./nb.js":300,"./ne":301,"./ne.js":301,"./nl":302,"./nl-be":303,"./nl-be.js":303,"./nl.js":302,"./nn":304,"./nn.js":304,"./pa-in":305,"./pa-in.js":305,"./pl":306,"./pl.js":306,"./pt":307,"./pt-br":308,"./pt-br.js":308,"./pt.js":307,"./ro":309,"./ro.js":309,"./ru":310,"./ru.js":310,"./sd":311,"./sd.js":311,"./se":312,"./se.js":312,"./si":313,"./si.js":313,"./sk":314,"./sk.js":314,"./sl":315,"./sl.js":315,"./sq":316,"./sq.js":316,"./sr":317,"./sr-cyrl":318,"./sr-cyrl.js":318,"./sr.js":317,"./ss":319,"./ss.js":319,"./sv":320,"./sv.js":320,"./sw":321,"./sw.js":321,"./ta":322,"./ta.js":322,"./te":323,"./te.js":323,"./tet":324,"./tet.js":324,"./tg":325,"./tg.js":325,"./th":326,"./th.js":326,"./tl-ph":327,"./tl-ph.js":327,"./tlh":328,"./tlh.js":328,"./tr":329,"./tr.js":329,"./tzl":330,"./tzl.js":330,"./tzm":331,"./tzm-latn":332,"./tzm-latn.js":332,"./tzm.js":331,"./ug-cn":333,"./ug-cn.js":333,"./uk":334,"./uk.js":334,"./ur":335,"./ur.js":335,"./uz":336,"./uz-latn":337,"./uz-latn.js":337,"./uz.js":336,"./vi":338,"./vi.js":338,"./x-pseudo":339,"./x-pseudo.js":339,"./yo":340,"./yo.js":340,"./zh-cn":341,"./zh-cn.js":341,"./zh-hk":342,"./zh-hk.js":342,"./zh-tw":343,"./zh-tw.js":343};function l(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=s,e.exports=l,l.id=1180},1213:function(e,t,a){var n=a(1214);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(28)(n,l);n.locals&&(e.exports=n.locals)},1214:function(e,t,a){(e.exports=a(27)(!1)).push([e.i,".container {\n  list-style: none;\n  background: red;\n}\n#headerbar {\n  box-shadow: 0 2px 0px -1px rgba(0, 0, 0, 0.05);\n  background-color: #373D41;\n  min-height: 60px;\n  color: #fff;\n}\n.headerbar-logo {\n  display: block;\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 5px;\n  text-align: left;\n  padding-left: 15px;\n}\n.headerbar-title {\n  line-height: 60px;\n  width: 200px;\n}\n.leftnav {\n  position: absolute;\n  width: 140px;\n  left: 0;\n  margin-top: 60px;\n  top: 0;\n  bottom: 0;\n  z-index: 4;\n  min-height: 100%;\n  background-color: #42485B;\n}\n.content-wrap {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  padding-left: 140px;\n  background-color: #e7ebee;\n  margin-top: 60px;\n  bottom: 0;\n  height: 100%;\n}\n.page-content {\n  position: relative;\n  height: 100%;\n}\n.page-container {\n  padding: 10px 10px 0 10px;\n}\n.pages-content {\n  border-left: 1px solid #e8e8e8;\n  border-right: 1px solid #e8e8e8;\n  border-bottom: 1px solid #e8e8e8;\n  padding: 0 10px 0 10px;\n  background: #fff;\n}\n.ant-tabs-bar {\n  margin: 0!important;\n}\n",""])},1215:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=m(a(112)),s=m(a(4)),r=m(a(9)),o=m(a(3)),u=m(a(5)),d=a(1),i=m(d),c=m(a(1218)),f=m(a(1224)),p=m(a(1239));a(102);function m(e){return e&&e.__esModule?e:{default:e}}var h=(0,a(148).withRouter)(n=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={loading:!1},a}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){console.log(this.props,4444);var e=this.props,t=e.children,a=e.location;return i.default.createElement("div",{id:"container"},i.default.createElement(c.default,null),i.default.createElement("div",{className:"boxed"},i.default.createElement("div",{className:"leftnav"},i.default.createElement(f.default,{location:a})),i.default.createElement("div",{className:"content-wrap"},i.default.createElement("div",{className:"page-container"},i.default.createElement(p.default,null),t))))}}]),t}(d.Component))||n;t.default=h},1218:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=c(a(112)),s=c(a(4)),r=c(a(9)),o=c(a(3)),u=c(a(5)),d=a(1),i=c(d);function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,a(102).connect)(function(e,t){return{color:e.changeColorStyle}})(n=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={loading:!1},a}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.color;return console.log(e,88),i.default.createElement("div",{id:"headerbar",style:{background:e.color}},i.default.createElement("div",{className:"headerbar-logo"},i.default.createElement("div",{className:"headerbar-title"},"reactdemo")))}}]),t}(d.Component))||n;t.default=f},1224:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=j(a(119)),s=j(a(13)),r=j(a(112)),o=j(a(4)),u=j(a(9)),d=j(a(3)),i=j(a(5)),c=j(a(154));a(172),a(1232),a(1586);var f=a(1),p=j(f),m=a(148),h=a(102),v=a(1063);function j(e){return e&&e.__esModule?e:{default:e}}var y=c.default.SubMenu,g=(0,h.connect)(function(e,t){return{config:e.config}})(n=(0,m.withRouter)(n=function(e){function t(e){(0,o.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));a.toggleCollapsed=function(){a.setState({collapsed:!a.state.collapsed})},a.handleClick=function(e){console.log("click ",e,a.props),a.setState({currentKey:e.key},function(){a.props.dispatch((0,v.updateTabList)({title:e.item.props.name,content:"",key:e.key})),a.props.history.push(e.key)})};var n=e.location.pathname;return a.state={collapsed:!1,currentKey:n},a}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=[this.props.location.pathname.replace("/","")];return p.default.createElement("div",{className:"navbar-menu"},p.default.createElement(l.default,{type:"primary",onClick:this.toggleCollapsed,style:{marginBottom:16}},p.default.createElement(s.default,{type:this.state.collapsed?"menu-unfold":"menu-fold"})),p.default.createElement(c.default,{defaultSelectedKeys:["addressBook"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",onClick:this.handleClick,inlineCollapsed:this.state.collapsed,selectedKeys:e},p.default.createElement(c.default.Item,{key:"addressBook",name:"通讯录"},p.default.createElement(s.default,{type:"pie-chart"}),p.default.createElement("span",null,"通讯录")),p.default.createElement(c.default.Item,{key:"topics",name:"信息管理"},p.default.createElement(s.default,{type:"desktop"}),p.default.createElement("span",null,"信息管理")),p.default.createElement(c.default.Item,{key:"3"},p.default.createElement(s.default,{type:"inbox"}),p.default.createElement("span",null,"Option 3")),p.default.createElement(y,{key:"sub1",title:p.default.createElement("span",null,p.default.createElement(s.default,{type:"mail"}),p.default.createElement("span",null,"Navigation One"))},p.default.createElement(c.default.Item,{key:"5"},"Option 5"),p.default.createElement(c.default.Item,{key:"6"},"Option 6"),p.default.createElement(c.default.Item,{key:"7"},"Option 7"),p.default.createElement(c.default.Item,{key:"8"},"Option 8")),p.default.createElement(y,{key:"sub2",title:p.default.createElement("span",null,p.default.createElement(s.default,{type:"appstore"}),p.default.createElement("span",null,"Navigation Two"))},p.default.createElement(c.default.Item,{key:"9"},"Option 9"),p.default.createElement(c.default.Item,{key:"10"},"Option 10"),p.default.createElement(y,{key:"sub3",title:"Submenu"},p.default.createElement(c.default.Item,{key:"11"},"Option 11"),p.default.createElement(c.default.Item,{key:"12"},"Option 12")))))}}]),t}(f.Component))||n)||n;t.default=g},1239:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=j(a(1240)),s=j(a(112)),r=j(a(4)),o=j(a(9)),u=j(a(3)),d=j(a(5)),i=j(a(1583));a(1247);var c=a(1),f=j(c),p=a(102),m=a(1250),h=a(148),v=a(1063);function j(e){return e&&e.__esModule?e:{default:e}}var y=i.default.TabPane,g=(0,p.connect)(function(e,t){return{tabList:e.tabListResult,color:e.changeColorStyle}})(n=(0,h.withRouter)(n=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.onChange=function(e){a.props.actions;a.props.dispatch((0,v.updateTabChecked)({activeKey:e})),a.props.history.push(e)},a.onEdit=function(e,t){a[t](e)},a.remove=function(e){var t=a.props,n=t.actions,l=t.tabList,s=void 0,r=void 0;console.log(n,e,l.activeKey),e===l.activeKey&&(l.list.map(function(t,a){t.key===e&&(s=a)}),r=l.list[s+1]?l.list[s+1].key:l.list[s-1]?l.list[s-1].key:"",console.log(n,888,r),""==r?a.props.history.push("/"):a.props.history.push(r)),a.props.dispatch((0,v.deleteTabFromList)({targetKey:e}))},a.state={loading:!1},a}return(0,d.default)(t,e),(0,o.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.props||{};if((0,l.default)(a).length!==(0,l.default)(e).length)return!0;for(var n in e)if(a[n]!==e[n]||!(0,m.is)(a[n],e[n]))return!0;return!1}},{key:"render",value:function(){var e=this.props.tabList;return console.log(this.props,99),f.default.createElement("div",{id:"tabMenuHeader"},f.default.createElement("div",{className:"boxcon"},f.default.createElement(i.default,{hideAdd:!0,onChange:this.onChange,activeKey:e.activeKey,type:"editable-card",onEdit:this.onEdit},e.list.map(function(e){return f.default.createElement(y,{tab:e.title,key:e.key},e.content)}))))}}]),t}(c.Component))||n)||n;t.default=g},1252:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(150),l=r(a(1253)),s=r(a(1256));function r(e){return e&&e.__esModule?e:{default:e}}var o=(0,n.combineReducers)({tabListResult:l.default,changeColorStyle:s.default});t.default=o},1253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(1254)),l=o(a(39)),s=o(a(2)),r=a(149);function o(e){return e&&e.__esModule?e:{default:e}}var u=JSON.parse(sessionStorage.getItem("tabList")),d={list:u?u.list:[],activeKey:u?u.activeKey:""},i=(0,r.handleActions)({requestTabList:function(e,t){return(0,s.default)({},e,{loading:!1})},updateTabList:function(e,t){var a=t.payload,s=void 0===e.list.find(function(e){return e.key===a.key})?[].concat((0,l.default)(e.list),[a]):e.list;return sessionStorage.setItem("tabList",(0,n.default)({list:s,activeKey:a.key,loading:!1})),{list:s,activeKey:a.key,loading:!1}},updateTabChecked:function(e,t){var a=t.payload.activeKey;return sessionStorage.setItem("tabList",(0,n.default)((0,s.default)({},e,{activeKey:a,loading:!1}))),(0,s.default)({},e,{activeKey:a,loading:!1})},deleteTabFromList:function(e,t){var a=t.payload.targetKey,l=[],s=0,r=e.activeKey;return e.list.map(function(e,t){e.key===a?s=t:l.push(e)}),e.activeKey===a&&(r=l[s]?l[s].key:l[s-1]?l[s-1].key:""),sessionStorage.setItem("tabList",(0,n.default)({list:l,activeKey:r,loading:!1})),{list:l,activeKey:r,loading:!1}}},d);t.default=i},1256:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(2));var l=["red","blue","black"],s=(0,a(149).handleActions)({changeColor:function(e,t){var a=t.payload;return console.log(a,e,333),{color:l[Math.floor(3*Math.random())],loading:!1}},updateTableList:function(e,t){var a=t.payload;return console.log(a,e,6633),(0,n.default)({},e,{loading:!1,tableList:a})},searchList:function(e,t){var a=t.payload;return console.log(a,e,6633),(0,n.default)({},e,{loading:!1,tableList:a})}},{color:"#373D41"});t.default=s},1257:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=j(a(1581)),s=j(a(1337)),r=j(a(206)),o=j(a(112)),u=j(a(4)),d=j(a(9)),i=j(a(3)),c=j(a(5));a(1584),a(1352),a(1060);var f=a(1),p=j(f),m=a(1355),h=a(102),v=j(a(1356));function j(e){return e&&e.__esModule?e:{default:e}}a(1375),a(1377);var y=(0,h.connect)(function(e,t){return{addressBook:e.changeColorStyle}})(n=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.changeColor=function(){a.props.dispatch((0,m.changeColor)({color:"red"}))},a.search=function(){console.log(a.inputref.value),v.default.get("/seachData").then(function(e){a.props.dispatch((0,m.searchList)(e.data.content.data))})},a.state={loading:!1},a}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("33"),v.default.get("/data").then(function(t){console.log(t,99),e.props.dispatch((0,m.updateTableList)(t.data.content.data))})}},{key:"render",value:function(){var e=this,t=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return p.default.createElement("a",{href:"javascript:;"},e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return p.default.createElement("span",null,e.map(function(e){return p.default.createElement(r.default,{color:"blue",key:e},e)}))}},{title:"Action",key:"action",render:function(e,t){return p.default.createElement("span",null,p.default.createElement("a",{href:"javascript:;"},"Invite ",t.name),p.default.createElement(s.default,{type:"vertical"}),p.default.createElement("a",{href:"javascript:;"},"Delete"))}}],a=[];return this.props.addressBook.tableList&&(this.props.addressBook.tableList.list.forEach(function(e){e.key=e.id}),a=this.props.addressBook.tableList.list),console.log(this.props,55),p.default.createElement("div",{className:"pages-content"},p.default.createElement("div",{className:"boxcon"},p.default.createElement("button",{onClick:this.changeColor},"更换皮肤颜色"),p.default.createElement("div",{className:"search"},p.default.createElement("input",{type:"text",ref:function(t){e.inputref=t}})," ",p.default.createElement("button",{onClick:this.search},"搜索"))),p.default.createElement(l.default,{columns:t,dataSource:a}))}}]),t}(f.Component))||n;t.default=y},1355:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.searchList=t.updateTableList=t.changeColor=void 0;var n=a(149);t.changeColor=(0,n.createAction)("changeColor"),t.updateTableList=(0,n.createAction)("updateTableList"),t.searchList=(0,n.createAction)("searchList")},1375:function(e,t,a){var n=a(1376);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(28)(n,l);n.locals&&(e.exports=n.locals)},1376:function(e,t,a){(e.exports=a(27)(!1)).push([e.i,".boxcon {\n  padding: 10px 0 10px 0;\n}\n",""])},1377:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(a(1378));n.default.setup({timeout:"200 - 400"}),n.default.mock("/data",{content:{data:{total:100,currentPage:1,pageSize:10,"list|10":[{"id|+1":1,name:"阿拉蕾",age:32,address:"东胜区纺织街道23号1幢",tags:["nice","dev"],division:"纺织街",institutions:"幸福街派出所","policeName|1":["特朗普","奥巴马","老布什"],"houseStatus|1":["未建房未访查","已建房未访查","已建房已访查"],"addressType|1":["标准地址","非标准地址"]}]}}}),n.default.mock("/seachData",{content:{data:{total:100,currentPage:1,pageSize:10,list:[{id:1,name:"阿拉蕾",age:32,address:"东胜区纺织街道23号1幢",tags:["nice","dev"],division:"纺织街",institutions:"幸福街派出所","policeName|1":["特朗普","奥巴马","老布什"],"houseStatus|1":["未建房未访查","已建房未访查","已建房已访查"],"addressType|1":["标准地址","非标准地址"]}]}}}),n.default.mock("/adddata",{content:{data:{success:1}}})}},[[1134,2,1]]]);