(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{kiS8:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});var n,r=a("mXGw"),l=a("mBK0"),c=a("qgEq"),i=a("H15f"),o=a("H4M2"),s=a("fRgM"),u=a("fkL1"),m=a("GCqQ"),d=a("2//r"),f=a("Oi5Q"),v=a("J+xt"),p=a("p4b1");function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=c.a.Item,g=Object(l.b)("errorLogStore")(n=Object(l.c)(n=function(e){function t(){var e,a;!function(e,a){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=h(t)).call.apply(e,[this].concat(l)))).state={modalTitle:"参数详情",visible:!1,modalTxt:"",visibleLog:!1,detailInfo:{}},a.columns=[{title:"ID",dataIndex:"id",sorter:!0,width:"120px"},{title:"Url",dataIndex:"url",width:"120px",render:function(e,t,n){return r.createElement("div",{onClick:function(){return a.showParamsDetail(t,"url")},className:"textflow-4"}," ",e," ")}},{title:"请求方式",dataIndex:"method",width:"60px"},{title:"参数",dataIndex:"params",render:function(e,t,n){return r.createElement("div",{onClick:function(){return a.showParamsDetail(t,"params")},className:"textflow-4"}," ",Object(p.a)(e)," ")}},{title:"错误信息",dataIndex:"msg",render:function(e,t,n){return r.createElement("div",{onClick:function(){return a.showParamsDetail(t,"msg")},className:"textflow-4"}," ",e," ")}},{title:"状态",dataIndex:"status",width:"60px",render:function(e,t,n){return r.createElement(i.a,{status:a.getStatus(e),text:e})}},{title:"创建时间",width:"120px",dataIndex:"createdAt"},{title:"耗时(ms)",dataIndex:"time",width:"60px"},{title:"操作",dataIndex:"",width:"60px",render:function(e,t,n){return r.createElement(o.a,{size:"small",type:"primary",onClick:function(){return a.viewDetail(t)}},"详情")}}],a.showParamsDetail=function(e,t){if(e){var n=e.url,r="Url";"params"===t&&(r="Params",n=e.params),"msg"===t&&(r="错误",n=a.errorStack(e.errors)),a.setState({modalTitle:r+"详情",visible:!a.state.visible,modalTxt:Object(p.a)(n)})}else a.setState({visible:!1})},a.viewDetail=function(e){e?a.setState({visibleLog:!0,detailInfo:e}):a.setState({visibleLog:!1})},a.errorStack=function(e){return r.createElement(r.Fragment,null,"string"==typeof e[0]?e.map(function(e,t){var a=e.match(/^\s*[^\w]/),n=a?8*a[0].length:0;return r.createElement("div",{style:{paddingLeft:n,color:"red"},key:t},e)}):e.map(function(e,t){var a=Object.keys(e).map(function(t,a){return r.createElement("div",{key:a},t,"：","object"==typeof e[t]?JSON.stringify(e[t]):e[t])});return r.createElement("div",{style:{color:"red"},key:t},a)}))},a.formatHeader=function(e){var t=typeof e;if("string"!==t)return"object"===t?Object.keys(e).map(function(t){return r.createElement("div",{key:t},t," : ",e[t])}):"";var a=JSON.parse(e);return Object.keys(a).map(function(e){return r.createElement("div",{key:e},e," : ",a[e])})},a.wrapHtml=function(e){return null!==e&&0<Object.keys(e).length?r.createElement(r.Fragment,null,r.createElement("div",{className:"row"},r.createElement("div",null,"ID："),r.createElement("div",null,e.id)),r.createElement("div",{className:"row"},r.createElement("div",null,"IP："),r.createElement("div",null,e.ip)),r.createElement("div",{className:"row"},r.createElement("div",null,"错误信息："),r.createElement("div",null,e.msg)),r.createElement("div",{className:"row"},r.createElement("div",null,"堆栈信息："),r.createElement("div",null,a.errorStack(e.errors))),r.createElement("div",{className:"row"},r.createElement("div",null,"Url："),r.createElement("div",null,e.url)),r.createElement("div",{className:"row"},r.createElement("div",null,"Path："),r.createElement("div",null,e.path)),r.createElement("div",{className:"row"},r.createElement("div",null,"参数："),r.createElement("div",null,Object(p.a)(e.params))),r.createElement("div",{className:"row"},r.createElement("div",null,"请求头："),r.createElement("div",null,a.formatHeader(e.headers))),r.createElement("div",{className:"row"},r.createElement("div",null,"响应头："),r.createElement("div",null,a.formatHeader(e.responseHeaders))),r.createElement("div",{className:"row"},r.createElement("div",null,"创建时间："),r.createElement("div",null,e.createdAt)),r.createElement("div",{className:"row"},r.createElement("div",null,"状态："),r.createElement("div",null,e.status)),r.createElement("div",{className:"row"},r.createElement("div",null,"耗时："),r.createElement("div",null,e.time,"ms"))):""},a.getStatus=function(e){var t="default";switch(e){case 200:case 201:t="success";break;case 400:case 401:case 403:case 404:case 405:case 406:t="warning";break;case 500:case 501:case 502:case 503:case 504:case 505:t="error";break;default:t="default"}return t},a}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r.Component),a=t,(n=[{key:"componentDidMount",value:function(){this.props.errorLogStore.search()}},{key:"render",value:function(){var e=this,t=this.state,a=t.modalTitle,n=t.visible,l=t.modalTxt,i=t.visibleLog,p=t.detailInfo,E=this.props.errorLogStore,h=E.value,w=E.loading,g=E.list,y=E.meta,k=E.inputChange,x=E.search,O=E.clear;return r.createElement(r.Fragment,null,r.createElement(s.a,{title:a,keyboard:!0,visible:n,onOk:function(){return e.showParamsDetail("")},onCancel:function(){return e.showParamsDetail("")}}," ",l," "),r.createElement(s.a,{className:"large-modal",title:"日志详情",style:{top:40},keyboard:!0,visible:i,onOk:function(){return e.viewDetail("")},onCancel:function(){return e.viewDetail("")}}," ",this.wrapHtml(p)," "),r.createElement(c.a,{className:"search-form"},r.createElement("h3",null,"错误日志"),r.createElement(u.a,{gutter:24},r.createElement(m.a,{span:6},r.createElement(b,null,r.createElement(d.a,{placeholder:"path",onChange:function(e){return k(e.target.value,"path")},value:h.path}))),r.createElement(m.a,{span:6},r.createElement(b,null,r.createElement(d.a,{placeholder:"url",onChange:function(e){return k(e.target.value,"url")},value:h.url}))),r.createElement(m.a,{span:6},r.createElement(b,null,r.createElement(d.a,{placeholder:"错误信息",onChange:function(e){return k(e.target.value,"msg")},value:h.msg}))),r.createElement(m.a,{span:6},r.createElement(b,null,r.createElement(f.a.RangePicker,{onChange:function(e){return k(e,"createdAt")}})))),r.createElement(u.a,{className:"search-btn-w"},r.createElement(m.a,{span:24},r.createElement(o.a,{onClick:O},"清空"),r.createElement(o.a,{type:"primary",onClick:x},"搜索")))),r.createElement(v.a,{bordered:!0,className:"table-list",columns:this.columns,rowKey:function(e){return e.id},dataSource:g,pagination:y,loading:w,onChange:x}))}}])&&E(a.prototype,n),t}())||n)||n}}]);