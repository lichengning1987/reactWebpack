(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1031:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteTabFromList=t.updateTabChecked=t.updateTabList=t.requestTabList=void 0;var n=a(125);t.requestTabList=(0,n.createAction)("request tab list"),t.updateTabList=(0,n.createAction)("update tab list"),t.updateTabChecked=(0,n.createAction)("update tab checked"),t.deleteTabFromList=(0,n.createAction)("delete tab from list")},1083:function(e,t,a){"use strict";var n=o(a(1)),l=o(a(11)),r=o(a(1092));function o(e){return e&&e.__esModule?e:{default:e}}a(1213),l.default.render(n.default.createElement(r.default,null),document.getElementById("root"))},1092:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(1415));a(1418);var l=f(a(1)),r=a(124);a(1163);var o=f(a(1165)),s=a(92),u=f(a(1205)),i=a(102),d=f(a(1206)),c=f(a(1211));function f(e){return e&&e.__esModule?e:{default:e}}var p=[u.default],m=(0,i.createStore)(d.default,i.applyMiddleware.apply(void 0,p));console.log(m.getState(),99999888888);var h=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"Home3456788 ",l.default.createElement(n.default,null)))},j=function(e){var t=e.match;return l.default.createElement("div",null,l.default.createElement("h3",null,t.params.topicId))},v=function(e){var t=e.match;return l.default.createElement("div",null,l.default.createElement("h2",null,"Topics"),l.default.createElement("ul",{className:"container"},l.default.createElement("li",null,l.default.createElement(r.Link,{to:t.url+"/rendering"},"Rendering with React")),l.default.createElement("li",null,l.default.createElement(r.Link,{to:t.url+"/components"},"Components")),l.default.createElement("li",null,l.default.createElement(r.Link,{to:t.url+"/props-v-state"},"Props v. State"))),l.default.createElement(r.Route,{path:t.path+"/:topicId",component:j}),l.default.createElement(r.Route,{exact:!0,path:t.path,render:function(){return l.default.createElement("h3",null,"Please select a topic.")}}))};t.default=function(){return l.default.createElement(s.Provider,{store:m},l.default.createElement(r.HashRouter,null,l.default.createElement(o.default,null,l.default.createElement(r.Route,{exact:!0,path:"/",component:h}),l.default.createElement(r.Route,{path:"/about",component:c.default}),l.default.createElement(r.Route,{path:"/topics",component:v}))))}},1130:function(e,t,a){var n={"./af":188,"./af.js":188,"./ar":189,"./ar-dz":190,"./ar-dz.js":190,"./ar-kw":191,"./ar-kw.js":191,"./ar-ly":192,"./ar-ly.js":192,"./ar-ma":193,"./ar-ma.js":193,"./ar-sa":194,"./ar-sa.js":194,"./ar-tn":195,"./ar-tn.js":195,"./ar.js":189,"./az":196,"./az.js":196,"./be":197,"./be.js":197,"./bg":198,"./bg.js":198,"./bm":199,"./bm.js":199,"./bn":200,"./bn.js":200,"./bo":201,"./bo.js":201,"./br":202,"./br.js":202,"./bs":203,"./bs.js":203,"./ca":204,"./ca.js":204,"./cs":205,"./cs.js":205,"./cv":206,"./cv.js":206,"./cy":207,"./cy.js":207,"./da":208,"./da.js":208,"./de":209,"./de-at":210,"./de-at.js":210,"./de-ch":211,"./de-ch.js":211,"./de.js":209,"./dv":212,"./dv.js":212,"./el":213,"./el.js":213,"./en-au":214,"./en-au.js":214,"./en-ca":215,"./en-ca.js":215,"./en-gb":216,"./en-gb.js":216,"./en-ie":217,"./en-ie.js":217,"./en-il":218,"./en-il.js":218,"./en-nz":219,"./en-nz.js":219,"./eo":220,"./eo.js":220,"./es":221,"./es-do":222,"./es-do.js":222,"./es-us":223,"./es-us.js":223,"./es.js":221,"./et":224,"./et.js":224,"./eu":225,"./eu.js":225,"./fa":226,"./fa.js":226,"./fi":227,"./fi.js":227,"./fo":228,"./fo.js":228,"./fr":229,"./fr-ca":230,"./fr-ca.js":230,"./fr-ch":231,"./fr-ch.js":231,"./fr.js":229,"./fy":232,"./fy.js":232,"./gd":233,"./gd.js":233,"./gl":234,"./gl.js":234,"./gom-latn":235,"./gom-latn.js":235,"./gu":236,"./gu.js":236,"./he":237,"./he.js":237,"./hi":238,"./hi.js":238,"./hr":239,"./hr.js":239,"./hu":240,"./hu.js":240,"./hy-am":241,"./hy-am.js":241,"./id":242,"./id.js":242,"./is":243,"./is.js":243,"./it":244,"./it.js":244,"./ja":245,"./ja.js":245,"./jv":246,"./jv.js":246,"./ka":247,"./ka.js":247,"./kk":248,"./kk.js":248,"./km":249,"./km.js":249,"./kn":250,"./kn.js":250,"./ko":251,"./ko.js":251,"./ky":252,"./ky.js":252,"./lb":253,"./lb.js":253,"./lo":254,"./lo.js":254,"./lt":255,"./lt.js":255,"./lv":256,"./lv.js":256,"./me":257,"./me.js":257,"./mi":258,"./mi.js":258,"./mk":259,"./mk.js":259,"./ml":260,"./ml.js":260,"./mn":261,"./mn.js":261,"./mr":262,"./mr.js":262,"./ms":263,"./ms-my":264,"./ms-my.js":264,"./ms.js":263,"./mt":265,"./mt.js":265,"./my":266,"./my.js":266,"./nb":267,"./nb.js":267,"./ne":268,"./ne.js":268,"./nl":269,"./nl-be":270,"./nl-be.js":270,"./nl.js":269,"./nn":271,"./nn.js":271,"./pa-in":272,"./pa-in.js":272,"./pl":273,"./pl.js":273,"./pt":274,"./pt-br":275,"./pt-br.js":275,"./pt.js":274,"./ro":276,"./ro.js":276,"./ru":277,"./ru.js":277,"./sd":278,"./sd.js":278,"./se":279,"./se.js":279,"./si":280,"./si.js":280,"./sk":281,"./sk.js":281,"./sl":282,"./sl.js":282,"./sq":283,"./sq.js":283,"./sr":284,"./sr-cyrl":285,"./sr-cyrl.js":285,"./sr.js":284,"./ss":286,"./ss.js":286,"./sv":287,"./sv.js":287,"./sw":288,"./sw.js":288,"./ta":289,"./ta.js":289,"./te":290,"./te.js":290,"./tet":291,"./tet.js":291,"./tg":292,"./tg.js":292,"./th":293,"./th.js":293,"./tl-ph":294,"./tl-ph.js":294,"./tlh":295,"./tlh.js":295,"./tr":296,"./tr.js":296,"./tzl":297,"./tzl.js":297,"./tzm":298,"./tzm-latn":299,"./tzm-latn.js":299,"./tzm.js":298,"./ug-cn":300,"./ug-cn.js":300,"./uk":301,"./uk.js":301,"./ur":302,"./ur.js":302,"./uz":303,"./uz-latn":304,"./uz-latn.js":304,"./uz.js":303,"./vi":305,"./vi.js":305,"./x-pseudo":306,"./x-pseudo.js":306,"./yo":307,"./yo.js":307,"./zh-cn":308,"./zh-cn.js":308,"./zh-hk":309,"./zh-hk.js":309,"./zh-tw":310,"./zh-tw.js":310};function l(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=1130},1163:function(e,t,a){var n=a(1164);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(43)(n,l);n.locals&&(e.exports=n.locals)},1164:function(e,t,a){(e.exports=a(42)(!1)).push([e.i,".container {\n  list-style: none;\n  background: red;\n}\n#headerbar {\n  box-shadow: 0 2px 0px -1px rgba(0, 0, 0, 0.05);\n  background-color: #373D41;\n  min-height: 60px;\n  color: #fff;\n}\n.headerbar-logo {\n  display: block;\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 5px;\n  text-align: left;\n  padding-left: 15px;\n}\n.headerbar-title {\n  line-height: 60px;\n  width: 200px;\n}\n.leftnav {\n  position: absolute;\n  width: 140px;\n  left: 0;\n  margin-top: 60px;\n  top: 0;\n  bottom: 0;\n  z-index: 4;\n  min-height: 100%;\n  background-color: #42485B;\n}\n.content-wrap {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  padding-left: 140px;\n  background-color: #e7ebee;\n  margin-top: 60px;\n  bottom: 0;\n  height: 100%;\n}\n.page-content {\n  position: relative;\n  height: 100%;\n}\n",""])},1165:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=m(a(98)),r=m(a(6)),o=m(a(9)),s=m(a(5)),u=m(a(7)),i=a(1),d=m(i),c=m(a(1168)),f=m(a(1174)),p=m(a(1189));a(92);function m(e){return e&&e.__esModule?e:{default:e}}var h=(0,a(124).withRouter)(n=function(e){function t(e){(0,r.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={loading:!1},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){console.log(this.props,4444);var e=this.props.children;return d.default.createElement("div",{id:"container"},d.default.createElement(c.default,null),d.default.createElement("div",{className:"boxed"},d.default.createElement("div",{className:"leftnav"},d.default.createElement(f.default,null)),d.default.createElement("div",{className:"content-wrap"},d.default.createElement("div",{className:"page-container"},d.default.createElement(p.default,null),e))))}}]),t}(i.Component))||n;t.default=h},1168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=c(a(98)),r=c(a(6)),o=c(a(9)),s=c(a(5)),u=c(a(7)),i=a(1),d=c(i);function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,a(92).connect)(function(e,t){return{color:e.changeColorStyle}})(n=function(e){function t(e){(0,r.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={loading:!1},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.color;return console.log(e,88),d.default.createElement("div",{id:"headerbar",style:{background:e.color}},d.default.createElement("div",{className:"headerbar-logo"},d.default.createElement("div",{className:"headerbar-title"},"react66")))}}]),t}(i.Component))||n;t.default=f},1174:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=v(a(1419)),r=v(a(19)),o=v(a(98)),s=v(a(6)),u=v(a(9)),i=v(a(5)),d=v(a(7)),c=v(a(1416));a(1028),a(1182),a(1420);var f=a(1),p=v(f),m=a(124),h=a(92),j=a(1031);function v(e){return e&&e.__esModule?e:{default:e}}var y=c.default.SubMenu,b=(0,h.connect)(function(e,t){return{config:e.config}})(n=(0,m.withRouter)(n=function(e){function t(e){(0,s.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));a.toggleCollapsed=function(){a.setState({collapsed:!a.state.collapsed})},a.handleClick=function(e){console.log("click ",e,a.props),a.setState({currentKey:e.key},function(){a.props.dispatch((0,j.updateTabList)({title:e.item.props.name,content:"",key:e.key})),a.props.history.push(e.key)})};var n=e.location.pathname;return a.state={collapsed:!1,currentKey:n},a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=[this.state.currentKey.replace("/","")];return console.log(e,this.state.currentKey,4433),p.default.createElement("div",{className:"navbar-menu"},p.default.createElement(l.default,{type:"primary",onClick:this.toggleCollapsed,style:{marginBottom:16}},p.default.createElement(r.default,{type:this.state.collapsed?"menu-unfold":"menu-fold"})),p.default.createElement(c.default,{defaultSelectedKeys:["addressBook"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",onClick:this.handleClick,inlineCollapsed:this.state.collapsed,selectedKeys:e},p.default.createElement(c.default.Item,{key:"about",name:"通讯录"},p.default.createElement(r.default,{type:"pie-chart"}),p.default.createElement("span",null,"通讯录")),p.default.createElement(c.default.Item,{key:"topics",name:"信息管理"},p.default.createElement(r.default,{type:"desktop"}),p.default.createElement("span",null,"信息管理")),p.default.createElement(c.default.Item,{key:"3"},p.default.createElement(r.default,{type:"inbox"}),p.default.createElement("span",null,"Option 3")),p.default.createElement(y,{key:"sub1",title:p.default.createElement("span",null,p.default.createElement(r.default,{type:"mail"}),p.default.createElement("span",null,"Navigation One"))},p.default.createElement(c.default.Item,{key:"5"},"Option 5"),p.default.createElement(c.default.Item,{key:"6"},"Option 6"),p.default.createElement(c.default.Item,{key:"7"},"Option 7"),p.default.createElement(c.default.Item,{key:"8"},"Option 8")),p.default.createElement(y,{key:"sub2",title:p.default.createElement("span",null,p.default.createElement(r.default,{type:"appstore"}),p.default.createElement("span",null,"Navigation Two"))},p.default.createElement(c.default.Item,{key:"9"},"Option 9"),p.default.createElement(c.default.Item,{key:"10"},"Option 10"),p.default.createElement(y,{key:"sub3",title:"Submenu"},p.default.createElement(c.default.Item,{key:"11"},"Option 11"),p.default.createElement(c.default.Item,{key:"12"},"Option 12")))))}}]),t}(f.Component))||n)||n;t.default=b},1189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=v(a(1190)),r=v(a(98)),o=v(a(6)),s=v(a(9)),u=v(a(5)),i=v(a(7)),d=v(a(1417));a(1201);var c=a(1),f=v(c),p=(a(102),a(92)),m=a(1204),h=a(124),j=a(1031);function v(e){return e&&e.__esModule?e:{default:e}}var y=d.default.TabPane,b=(0,p.connect)(function(e,t){return{tabList:e.tabListResult,color:e.changeColorStyle}})(n=(0,h.withRouter)(n=function(e){function t(e){(0,o.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.onChange=function(e){a.props.actions;a.props.dispatch((0,j.updateTabChecked)({activeKey:e})),a.props.history.push(e)},a.onEdit=function(e,t){a[t](e)},a.remove=function(e){var t=a.props,n=t.actions,l=t.tabList,r=void 0,o=void 0;console.log(e,l.activeKey),e===l.activeKey&&(l.list.map(function(t,a){t.key===e&&(r=a)}),o=l.list[r+1]?l.list[r+1].key:l.list[r-1]?l.list[r-1].key:"",console.log(n,888,o),""==o?a.props.history.push("/"):a.props.history.push(o)),a.props.dispatch((0,j.deleteTabFromList)({targetKey:e}))},a.state={loading:!1},a}return(0,i.default)(t,e),(0,s.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.props||{};if((0,l.default)(a).length!==(0,l.default)(e).length)return!0;for(var n in e)if(a[n]!==e[n]||!(0,m.is)(a[n],e[n]))return!0;return!1}},{key:"render",value:function(){var e=this.props.tabList;return console.log(this.props,99),f.default.createElement("div",{id:"contentBox"},f.default.createElement("div",{className:"boxcon"},f.default.createElement(d.default,{hideAdd:!0,onChange:this.onChange,activeKey:e.activeKey,type:"editable-card",onEdit:this.onEdit},e.list.map(function(e){return f.default.createElement(y,{tab:e.title,key:e.key},e.content)}))))}}]),t}(c.Component))||n)||n;t.default=b},1206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(102),l=o(a(1207)),r=o(a(1210));function o(e){return e&&e.__esModule?e:{default:e}}var s=(0,n.combineReducers)({tabListResult:l.default,changeColorStyle:r.default});t.default=s},1207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(1208)),l=s(a(172)),r=s(a(2)),o=a(125);function s(e){return e&&e.__esModule?e:{default:e}}var u=JSON.parse(sessionStorage.getItem("tabList")),i={list:u?u.list:[],activeKey:u?u.activeKey:""},d=(0,o.handleActions)({"request tab list":function(e,t){return(0,r.default)({},e,{loading:!1})},"update tab list":function(e,t){var a=t.payload,r=void 0===e.list.find(function(e){return e.key===a.key})?[].concat((0,l.default)(e.list),[a]):e.list;return sessionStorage.setItem("tabList",(0,n.default)({list:r,activeKey:a.key,loading:!1})),{list:r,activeKey:a.key,loading:!1}},"update tab checked":function(e,t){var a=t.payload.activeKey;return sessionStorage.setItem("tabList",(0,n.default)((0,r.default)({},e,{activeKey:a,loading:!1}))),(0,r.default)({},e,{activeKey:a,loading:!1})},"delete tab from list":function(e,t){var a=t.payload.targetKey,l=[],r=0,o=e.activeKey;return e.list.map(function(e,t){e.key===a?r=t:l.push(e)}),e.activeKey===a&&(o=l[r]?l[r].key:l[r-1]?l[r-1].key:""),sessionStorage.setItem("tabList",(0,n.default)({list:l,activeKey:o,loading:!1})),{list:l,activeKey:o,loading:!1}}},i);t.default=d},1210:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=["red","blue","black"],l=(0,a(125).handleActions)({changeColor:function(e,t){var a=t.payload;return console.log(a,e,333),{color:n[Math.floor(3*Math.random())],loading:!1}}},{color:"#373D41"});t.default=l},1211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=f(a(98)),r=f(a(6)),o=f(a(9)),s=f(a(5)),u=f(a(7)),i=a(1),d=f(i),c=a(1212);function f(e){return e&&e.__esModule?e:{default:e}}var p=(0,a(92).connect)(function(e,t){return{color:e.changeColorStyle}})(n=function(e){function t(e){(0,r.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.changeColor=function(){a.props.dispatch((0,c.changeColor)({color:"red"}))},a.state={loading:!1},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return console.log(this.props,55),d.default.createElement("div",{id:"contentBox"},d.default.createElement("div",{className:"boxcon"},d.default.createElement("h3",null,"换肤"),d.default.createElement("button",{onClick:this.changeColor},"更换皮肤颜色")))}}]),t}(i.Component))||n;t.default=p},1212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeColor=void 0;var n=a(125);t.changeColor=(0,n.createAction)("changeColor")}},[[1083,2,1]]]);