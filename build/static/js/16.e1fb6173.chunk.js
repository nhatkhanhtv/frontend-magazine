(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[16],{1721:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var c=a(8),n=a(0),s=a(65),r=a(73),i=a(1724),o=a.n(i),l=a(74),d=a(61),m=a(23),b=a(270),u=a(505),j=a.n(u),O=(a(1727),a(1731)),f=a(1);function p(e){var t=e.title,a=e.onSearch,i=e.searchModel,u=e.initValue,p=void 0===u?{}:u,h=(e.value,e.onClickBack),y=Object(s.a)(),v="col-xxl-2 col-md-3 master-header-search-input-margin";return Object(f.jsxs)(l.a,{className:"master-header-card",children:[Object(f.jsx)(l.c,{title:h?Object(f.jsxs)("span",{onClick:h,className:"cursor-pointer text-primary font-weight-boldest",children:[Object(f.jsx)(j.a,{}),y.formatMessage({id:t}).toUpperCase()]}):y.formatMessage({id:t}).toUpperCase()}),Object(f.jsx)(l.b,{children:Object(f.jsx)(r.d,{initialValues:p,onSubmit:function(e){a&&a(Object(c.a)({},e))},onReset:function(e){a&&a({})},children:function(e){var t=e.values,s=e.handleSubmit,r=(e.handleBlur,e.handleChange,e.setFieldValue,e.resetForm);return Object(f.jsxs)("form",{onSubmit:s,className:"form form-label-right",children:[Object(f.jsx)("div",{className:"form-group row master-header-search-margin",children:i?Object.keys(i).map((function(e){switch(i[e].type){case"string":return Object(n.createElement)(O.j,Object(c.a)(Object(c.a)({className:v,name:e},i[e]),{},{key:"master_header".concat(e)}));case"string-number":return Object(n.createElement)(O.k,Object(c.a)(Object(c.a)({className:v,name:e},i[e]),{},{key:"master_header".concat(e)}));case"number":return Object(n.createElement)(O.f,Object(c.a)(Object(c.a)({className:v,name:e},i[e]),{},{key:"master_header".concat(e)}));case"date-time":return Object(n.createElement)(O.c,Object(c.a)(Object(c.a)({className:v,name:e},i[e]),{},{key:"master_header".concat(e)}));case"search-select":var a;if(void 0===i[e].onSearch||null===i[e].onSearch)return;return Object(n.createElement)(O.h,Object(c.a)(Object(c.a)({className:v,name:e,value:t[e]},i[e]),{},{onSearch:null!==(a=i[e].onSearch)&&void 0!==a?a:function(e){return null},key:"master_header".concat(e)}));case"tree-select":var s;if(void 0===i[e].onSearch||null===i[e].onSearch)return;return Object(n.createElement)(O.m,Object(c.a)(Object(c.a)({className:v,name:e},i[e]),{},{onSearch:null!==(s=i[e].onSearch)&&void 0!==s?s:function(e){return null},key:"master_header".concat(e)}))}return Object(f.jsx)(f.Fragment,{})})):Object(f.jsx)(f.Fragment,{})}),a&&Object(f.jsxs)("div",{className:"row no-gutters",children:[Object(f.jsxs)("button",{className:"btn btn-primary mr-8 fixed-btn-width",type:"submit",children:[Object(f.jsx)(o.a,{style:b.h}),y.formatMessage({id:"COMMON_COMPONENT.MASTER_HEADER.SEARCH_BTN"})]}),Object(f.jsxs)("button",{className:"btn btn-outline-primary fixed-btn-width",type:"reset",onClick:function(){return function(e){e()}(r)},children:[Object(f.jsx)(d.a,{src:Object(m.a)("/media/svg/vncheck/reset-filter.svg"),style:b.h}),y.formatMessage({id:"COMMON_COMPONENT.MASTER_HEADER.RESET_FILTER_BTN"})]})]})]})}})})]})}},1722:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var c=a(8),n=a(60),s=a(0),r=a(65),i=a(1731),o=a(41),l=a.n(o),d=a(73),m=a(1);function b(e){var t=e.className,a=e.component,s=Object(n.a)(e,["className","component"]),r=a,i=Object(d.g)();return Object(m.jsx)("div",{className:t,children:Object(m.jsx)(r,Object(c.a)(Object(c.a)({},i),s))})}function u(e){var t=e.inputGroups,a=e.mode,c=void 0===a?"horizontal":a,s=Object(r.a)(),i=(t._subTitle,Object(n.a)(t,["_subTitle"]));return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"row",children:i&&Object.values(i).map((function(e,t){if(l.a.isString(e))throw new Error("S\u1eed d\u1ee5ng sai c\xe1ch "+e+"\n"+JSON.stringify(i));var a=e._subTitle,r=e._className,o=e._inputClassName,d=Object(n.a)(e,["_subTitle","_className","_inputClassName"]);return Object(m.jsxs)("div",{className:null!==r&&void 0!==r?r:"col-12",children:[a&&""!==a&&Object(m.jsx)("div",{className:"modify-subtitle text-primary",children:s.formatMessage({id:a}).toUpperCase()}),Object(m.jsx)(j,{inputs:d,prevKey:"",inputClassName:o,mode:c})]},"modify-entity-page".concat(t))}))})})}var j=function e(t){var a=t.inputs,o=t.prevKey,d=t.mode,u=t.inputClassName,j=Object(r.a)(),O=null!==u&&void 0!==u?u:"mb-5";return Object(m.jsx)(m.Fragment,{children:Object.keys(a).map((function(t){var r=a[t],f=t.trim();if(l.a.isString(r))throw new Error("S\u1eed d\u1ee5ng sai c\xe1ch "+t+"\n"+JSON.stringify(a));var p=o?""===f||""===o?o:"".concat(o,".").concat(f):f;switch(r._type){case"string":case"email":return Object(s.createElement)(i.j,Object(c.a)(Object(c.a)({className:O,name:p,type:r._type},r),{},{mode:d,key:"modify-page-form-".concat(p)}));case"string-number":return Object(s.createElement)(i.k,Object(c.a)(Object(c.a)({className:O,name:p,type:r._type},r),{},{mode:d,key:"modify-page-form-".concat(p)}));case"number":return Object(s.createElement)(i.f,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"date-time":return Object(s.createElement)(i.c,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"radio":return Object(s.createElement)(i.g,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"boolean":return Object(s.createElement)(i.a,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"image":return Object(s.createElement)(i.e,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"file":return Object(s.createElement)(i.d,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"search-select":return Object(s.createElement)(i.h,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"tree-select":return Object(s.createElement)(i.m,Object(c.a)(Object(c.a)({className:O,name:t,mode:d,type:r._type},r),{},{key:"master_header".concat(t)}));case"tag":return Object(s.createElement)(i.l,Object(c.a)(Object(c.a)({className:O,name:p,mode:d,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"checkbox":return Object(s.createElement)(i.b,Object(c.a)(Object(c.a)({className:O,name:p,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"select":return Object(s.createElement)(i.i,Object(c.a)(Object(c.a)({className:O,name:p,type:r._type},r),{},{key:"modify-page-form-".concat(p)}));case"custom":r._type;var h=Object(n.a)(r,["_type"]);return Object(s.createElement)(b,Object(c.a)(Object(c.a)({},h),{},{key:"modify-page-form-".concat(p)}));default:var y=r,v=(y._type,y._subTitle),E=y._className,N=y._inputClassName,g=Object(n.a)(y,["_type","_subTitle","_className","_inputClassName"]);return E?Object(m.jsxs)("span",{className:E,children:[v&&""!==v&&Object(m.jsx)("div",{className:"modify-subtitle text-primary",children:j.formatMessage({id:v}).toUpperCase()}),Object(m.jsx)(e,{inputs:g,inputClassName:null!==N&&void 0!==N?N:u,prevKey:p,mode:d})]},"render_form_span".concat(p)):Object(m.jsxs)(s.Fragment,{children:[v&&""!==v&&Object(m.jsx)("div",{className:"modify-subtitle text-primary",children:j.formatMessage({id:v}).toUpperCase()}),Object(m.jsx)(e,{inputs:g,inputClassName:null!==N&&void 0!==N?N:u,prevKey:p,mode:d})]},"render_form".concat(p))}}))})}},1723:function(e,t,a){"use strict";var c=a(171),n=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(173)).default)(s.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=r},1724:function(e,t,a){"use strict";var c=a(171),n=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(173)).default)(s.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=r},1726:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var c=a(8),n=a(66),s=a(0),r=a(74),i=a(1730),o=a.n(i),l=a(1738),d=a.n(l),m=a(65),b=a(270),u=a(506),j=a(41),O=a.n(j),f=a(1);function p(e){var t=e.entities,a=e.total,i=e.loading,l=e.paginationParams,j=e.setPaginationParams,p=e.onSelectMany,h=e.onCreate,y=e.selectedEntities,v=void 0===y?[]:y,E=e.columns,N=e.onDeleteMany,g=e.isShowId,x=e.title,M=e.hideHeaderButton,_=e.additionalActionComponent,A=Object(m.a)(),C=_,S=Object(s.useMemo)((function(){return{dataField:"_id",text:"STT",formatter:function(e,t,a){var c,n;return Object(f.jsx)(s.Fragment,{children:a+1+((null!==(c=l.page)&&void 0!==c?c:0)-1)*(null!==(n=l.limit)&&void 0!==n?n:0)})},headerClasses:"text-center",align:"center"}}),[l]),T=g?O.a.isArray(E)?[S].concat(Object(n.a)(E)):Object(c.a)({_id:S},E):E;return Object(f.jsxs)(r.a,{className:"master-body-card",children:[x&&Object(f.jsx)(r.c,{title:A.formatMessage({id:x}).toUpperCase()}),Object(f.jsxs)(r.b,{children:[!0!==M&&Object(f.jsxs)("div",{className:"row no-gutters mb-10",children:[h&&Object(f.jsxs)("button",{type:"button",className:"btn btn-primary fixed-btn-width mr-8",onClick:h,children:[Object(f.jsx)(d.a,{style:b.h}),A.formatMessage({id:"COMMON_COMPONENT.MASTER_BODY.HEADER.ADD_BTN"})]}),N&&Object(f.jsxs)("button",{type:"button",className:"btn btn-outline-primary fixed-btn-width",onClick:function(){p&&p(v),N()},children:[Object(f.jsx)(o.a,{style:b.h}),A.formatMessage({id:"COMMON_COMPONENT.MASTER_BODY.HEADER.DELETE_BTN"})]}),C&&Object(f.jsx)(C,{})]}),Object(f.jsx)(u.a,{entities:t,columns:T,total:a,loading:i,paginationParams:l,setPaginationParams:j,onSelectMany:p,selectedEntities:v})]})]})}},1727:function(e,t,a){},1728:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return p}));a(0);var c=a(61),n=a(222),s=a.n(n),r=(a(763),a(23)),i=a(1723),o=a.n(i),l=a(1729),d=a.n(l),m=a(1734),b=a.n(m),u=a(1733),j=a.n(u),O=a(1);function f(e,t,a,n){var i=n.onShowDetail,l=n.onDelete,d=n.onEdit,m=n.onLock,u=(n.onChangeRole,n.onClone),f=n.onGoHistory,p=n.intl;return Object(O.jsxs)("div",{children:[m&&Object(O.jsx)("a",{className:"btn btn-icon btn-light btn-hover-primary btn-sm mx-1",onClick:function(e){m(t),e.preventDefault()},children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)(c.a,{src:Object(r.a)("/media/svg/vncheck/lock.svg"),title:p.formatMessage({id:"COMMON_COMPONENT.MASTER_BODY.TABLE.LOCK_BTN"})})})}),u&&Object(O.jsx)("a",{title:p.formatMessage({id:"COMMON_COMPONENT.MASTER_BODY.TABLE.CLONE_BTN"}),className:"btn btn-icon btn-light btn-hover-primary btn-sm visibility mx-1",onClick:function(e){u(t),e.preventDefault()},children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)(b.a,{className:"text-primary eye"})})})}),i&&Object(O.jsx)("a",{title:p.formatMessage({id:"COMMON_COMPONENT.MASTER_BODY.TABLE.SHOW_DETAIL_BTN"}),className:"btn btn-icon btn-light btn-hover-primary btn-sm visibility",onClick:function(e){i(t),e.preventDefault()},children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)(s.a,{className:"text-primary eye"})})}),d&&Object(O.jsx)("a",{className:"btn btn-icon btn-light btn-hover-primary btn-sm mx-1",onClick:function(e){d(t),e.preventDefault()},children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)(c.a,{src:Object(r.a)("/media/svg/icons/Communication/Write.svg"),title:p.formatMessage({id:"COMMON_COMPONENT.MASTER_BODY.TABLE.EDIT_BTN"})})})}),l&&Object(O.jsx)("a",{className:"btn btn-icon btn-light btn-hover-primary btn-sm visibility",onClick:function(e){l(t),e.preventDefault()},children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)(o.a,{className:"text-primary eye"})})})}),f&&Object(O.jsx)("a",{className:"btn btn-icon btn-light btn-hover-primary btn-sm visibility mx-1",onClick:function(e){f(t),e.preventDefault()},children:Object(O.jsx)("span",{className:"svg-icon svg-icon-md svg-icon-primary",children:Object(O.jsx)(j.a,{className:"text-primary eye"})})})]})}function p(e,t){return"1"===e||"true"===e||!0===e?Object(O.jsx)(d.a,{style:{color:"#1DBE2D"}}):Object(O.jsx)(d.a,{style:{color:"#C4C4C4"}})}},1729:function(e,t,a){"use strict";var c=a(171),n=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(173)).default)(s.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=r},1730:function(e,t,a){"use strict";var c=a(171),n=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(173)).default)(s.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");t.default=r},1733:function(e,t,a){"use strict";var c=a(171),n=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(173)).default)(s.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History");t.default=r},1734:function(e,t,a){"use strict";var c=a(171),n=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(173)).default)(s.createElement("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z"}),"QueueOutlined");t.default=r},1737:function(e,t,a){"use strict";var c=a(171),n=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(173)).default)(s.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"}),"AccountCircleOutlined");t.default=r},1739:function(e,t,a){"use strict";var c=a(8),n=a(60),s=a(18),r=a(0),i=a.n(r),o=a(65),l=a(73),d=a(69),m=a(33),b=a(74),u=a(505),j=a.n(u),O=a(41),f=a.n(O),p=a(1722),h=a(147),y=a(1740),v=a(1737),E=a.n(v),N=a(1649),g=a(273),x=(a(507),a(1)),M=function(e){var t=e.entity,a=e.onComments,c=i.a.useRef({value:""}),n=i.a.useState((null===t||void 0===t?void 0:t.comments)||[]),r=Object(s.a)(n,2),o=r[0],l=r[1];i.a.useEffect((function(){t&&l(t.comments)}),[t]);return Object(x.jsx)(b.a,{children:Object(x.jsx)(b.b,{children:Object(x.jsxs)("div",{className:"pl-xl-15 pl-md-10 pl-5 mb-5",children:[Object(x.jsx)("span",{className:"modify-subtitle text-primary mt-8",children:"COMMENTS"}),Object(x.jsxs)("div",{className:"mt-8 border border-light rounded pt-5 pb-5",children:[null===o||void 0===o?void 0:o.map((function(e,t){return Object(x.jsxs)("div",{className:"row mb-3",children:[Object(x.jsx)("div",{className:"col-1 text-center",children:Object(x.jsx)(E.a,{style:{fontSize:30}})}),Object(x.jsxs)("div",{className:"col-10 bg-light rounded p-3",children:[Object(x.jsx)("p",{className:"font-bold",children:f.a.isString(e.createdBy)?e.createdBy:e.createdBy.fullName?e.createdBy.fullName:"Anonymous"}),Object(x.jsx)("p",{children:e.content})]})]},t)})),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-1"}),Object(x.jsx)("div",{className:"col-10",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-11",children:Object(x.jsx)(N.a,{className:"form-control",rowsMin:1,"aria-label":"empty textarea",ref:c,placeholder:"Write comment..."})}),Object(x.jsx)("div",{className:"col-1",children:Object(x.jsx)("button",{className:"btn btn-primary pl-11 pr-11",onClick:function(){var e;""!==c.current.value?function(e,t){a&&e&&a(e,t).then((function(e){l(e.data),c.current.value=""})).catch((function(e){throw e}))}(t,{content:c.current.value}):(e="Comment is empty!",g.b.error(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))},children:"Sent"})})]})})]})]})]})})})};t.a=function(e){var t=e.entity,a=e.onModify,i=e.moduleName,u=void 0===i?"COMMON_COMPONENT.CREATE_UPDATE.MODULE_NAME":i,O=e.code,v=e.get,N=e.formModel,g=e.actions,_=e.validation,A=e.loading,C=e.mode,S=e.setEditEntity,T=e.homePageUrl,D=e.allFormButton,R=e.onComments,k=e.showComment,P=void 0===k||k,w=Object(o.a)(),Y=Object(d.g)(),L=Object(r.useMemo)((function(){return Object(h.j)(N)}),[N]),H=Object(r.useState)(t),F=Object(s.a)(H,2),B=F[0],I=F[1];Object(r.useEffect)((function(){t&&I(t)}),[t]),Object(r.useEffect)((function(){O||t||I(L)}),[L,O]);var z=N._header,U=Object(n.a)(N,["_header"]);return Object(r.useEffect)((function(){O&&v&&v(O).then((function(e){I(Object(c.a)({},e.data)),S&&S(e.data)}))}),[O]),console.log(B),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(l.d,{enableReinitialize:!0,initialValues:B,validationSchema:_,onSubmit:function(e,t){t.setSubmitting,t.validateForm;console.log(e),a(e).then((function(){Y.push(null!==T&&void 0!==T?T:Object(h.h)(window.location.pathname))})).catch((function(e){}))},children:function(e){e.handleSubmit,e.setFieldValue;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.c,{className:"form form-label-right",children:Object.keys(U).map((function(e,t,a){var c=U[e];if(f.a.isString(c))throw new Error("S\u1eed d\u1ee5ng sai c\xe1ch "+e+"\n"+JSON.stringify(U));var s=c._title,r=Object(n.a)(c,["_title"]);return Object(x.jsxs)(b.a,{className:"modify-page",children:[Object(x.jsx)(b.c,{className:"border-bottom-0",title:0==t?Object(x.jsxs)("a",{onClick:function(){return Y.goBack()},className:"cursor-pointer text-primary font-weight-boldest",children:[Object(x.jsx)(j.a,{}),f.a.isString(z)?w.formatMessage({id:z},{moduleName:w.formatMessage({id:null!==u&&void 0!==u?u:"EMPTY"})}).toUpperCase():z(B)]}):Object(x.jsx)(x.Fragment,{children:w.formatMessage({id:s},{moduleName:w.formatMessage({id:null!==u&&void 0!==u?u:"EMPTY"})}).toUpperCase()})}),Object(x.jsxs)(b.b,{children:[Object(x.jsx)(p.a,{mode:C,inputGroups:r}),D&&"outside"===D.type&&Object(x.jsx)("div",{className:"text-right mt-10",children:Object.keys(D.data).map((function(e){switch(D.data[e].role){case"submit":return Object(x.jsxs)("button",{type:D.data[e].type,onClick:function(){D.data[e].onClick()},className:D.data[e].className,children:[D.data[e].icon," ",D.data[e].label]},e);case"special":return Object(x.jsxs)("button",{type:D.data[e].type,onClick:function(){D.data[e].onClick(B)},className:D.data[e].className,children:[D.data[e].icon," ",D.data[e].label]},e);case"button":return Object(x.jsxs)("button",{type:D.data[e].type,className:D.data[e].className,onClick:function(){D.data[e].onClick(B)},children:[D.data[e].icon," ",D.data[e].label]},e);case"link-button":return Object(x.jsx)(m.b,{to:D.data[e].linkto,children:Object(x.jsxs)("button",{type:D.data[e].type,className:D.data[e].className,children:[D.data[e].icon," ",D.data[e].label]})},e)}}))}),g&&t===Object.keys(U).length-1&&Object(x.jsx)("div",{className:"text-right mt-10",children:Object.keys(g.data).map((function(e){var t;switch(g.data[e].role){case"submit":return Object(x.jsxs)("button",{className:g.data[e].className,type:"submit",children:[!0===A?null!==(t=g.data[e].loading)&&void 0!==t?t:Object(x.jsx)(y.a,{animation:"border",variant:"light",size:"sm"}):g.data[e].icon," ",w.formatMessage({id:g.data[e].label})]},e);case"button":return Object(x.jsxs)("button",{type:g.data[e].type,className:g.data[e].className,children:[g.data[e].icon," ",w.formatMessage({id:g.data[e].label})]},e);case"link-button":return Object(x.jsx)(m.b,{to:g.data[e].linkto,children:Object(x.jsxs)("button",{type:g.data[e].type,className:g.data[e].className,children:[g.data[e].icon," ",w.formatMessage({id:g.data[e].label})]})},e)}}))},e)]})]},"entity-crud-card"+e)}))}),!0===P&&R?"3"===(null===B||void 0===B?void 0:B.confirmationStatus)||!0===(null===B||void 0===B?void 0:B.isMaster)&&"2"===(null===B||void 0===B?void 0:B.confirmationStatus)?Object(x.jsx)(b.a,{children:Object(x.jsx)(b.b,{className:"p-0",children:Object(x.jsxs)("div",{className:"mb-5 mt-5",children:[Object(x.jsx)("span",{className:"text-primary detail-dialog-subtitle mt-8",children:"B\xccNH LU\u1eacN"}),Object(x.jsx)("div",{className:"mt-8 border border-light rounded pt-5 pb-5",children:B&&B.comments.length>0?B.comments.map((function(e,t){return Object(x.jsxs)("div",{className:"row mb-3",children:[Object(x.jsx)("div",{className:"col-1 text-center",children:Object(x.jsx)(E.a,{style:{fontSize:30}})}),Object(x.jsxs)("div",{className:"col-10 bg-light rounded p-3",children:[Object(x.jsx)("p",{className:"font-bold",children:e.createdBy.fullName}),Object(x.jsx)("p",{children:e.content})]})]},t)})):Object(x.jsx)("span",{children:"Ch\u01b0a c\xf3 b\xecnh lu\u1eadn"})})]})})}):Object(x.jsx)(M,{entity:B,onComments:R}):Object(x.jsx)(x.Fragment,{})]})}})})}},1740:function(e,t,a){"use strict";var c=a(2),n=a(15),s=a(4),r=a.n(s),i=a(0),o=a.n(i),l=a(25),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.variant,i=e.animation,d=e.size,m=e.children,b=e.as,u=void 0===b?"div":b,j=e.className,O=Object(n.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),f=(a=Object(l.a)(a,"spinner"))+"-"+i;return o.a.createElement(u,Object(c.a)({ref:t},O,{className:r()(j,f,d&&f+"-"+d,s&&"text-"+s)}),m)}));d.displayName="Spinner",t.a=d},1930:function(e,t,a){"use strict";a.r(t);var c=a(8),n=a(18),s=a(0),r=a(51),i=a.n(r),o=a(78),l=o.a+"/analysis",d=l+"/bulk",m=(o.a,function(e){return i.a.post(l,e)}),b=function(e){var t=e.queryProps,a=e.sortList,n=e.paginationProps;return i.a.get("".concat(l),{params:Object(c.a)(Object(c.a)(Object(c.a)({},t),n),{},{sortList:a})}).then((function(e){var t=e.data.data[0],a=e.data.data[1][0].totalPost,n=t.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{percent:e.totalPost/a})}));return Object(c.a)(Object(c.a)({},e),{},{data:n})}))},u=function(e){var t=e.queryProps,a=e.sortList,n=e.paginationProps;return i.a.get("".concat(l,"/count"),{params:Object(c.a)(Object(c.a)(Object(c.a)({},t),n),{},{sortList:a})})},j=function(e){return i.a.get("".concat(l,"/").concat(e._id)).then((function(e){var t=e.data.data[0],a=e.data.data[1];console.log(a);var n=a[0]._id.academicYear,s=t.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{academicYear:n})}));return console.log(Object(c.a)(Object(c.a)({},e),{},{data:s[0]})),Object(c.a)(Object(c.a)({},e),{},{data:s[0]})}))},O=function(e){return i.a.get("".concat(l,"/").concat(e)).then((function(e){var t=e.data.data[0],a=e.data.data[1],n=a[0],s=a[0].totalPost,r=t.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{percent:e.totalPost/s})}));return Object(c.a)(Object(c.a)({},e),{},{data:{academicYear:n,dataArray:r}})}))},f=function(e){return i.a.put("".concat(l,"/").concat(e._id),e)},p=function(e){return i.a.delete("".concat(l,"/").concat(e._id))},h=function(e){return i.a.delete(d,{data:{data:e}})},y=a(270),v=a(1728),E=a(147),N=a(69),g=a(1721),x=a(1726),M=a(21),_=a(515),A=a(1739),C=a(73),S=a(1),T=function(e){var t,a=Object(C.e)(e.name),c=Object(n.a)(a,3),s=c[0];c[1],c[2];return console.log(s.value),Object(S.jsx)(M.p,{entities:null!==(t=s.value)&&void 0!==t?t:[],columns:e.columns})};t.default=function(){var e=Object(E.i)({getServer:j,countServer:u,createServer:m,deleteServer:p,deleteManyServer:h,getAllServer:b,updateServer:f}),t=e.entities,a=e.intl,r=(e.deleteEntity,e.setDeleteEntity,e.editEntity,e.setEditEntity,e.createEntity,e.selectedEntities),i=e.setSelectedEntities,o=(e.detailEntity,e.showDelete,e.setShowDelete,e.showEdit,e.setShowEdit,e.showCreate,e.setShowCreate,e.showDetail,e.setShowDetail,e.showDeleteMany,e.setShowDeleteMany,e.paginationProps),l=e.setPaginationProps,d=e.filterProps,C=e.setFilterProps,D=e.total,R=e.loading,k=(e.error,e.setError,e.add,e.update),P=(e.get,e.deleteMany,e.deleteFn,e.getAll),w="ANALYST.MASTER.HEADER.TITLE",Y=Object(s.useState)("ANALYST.CREATE.STATISTICS"),L=Object(n.a)(Y,2),H=(L[0],L[1],Object(N.g)());Object(s.useEffect)((function(){P(d)}),[o,d]);var F=Object(s.useMemo)((function(){return{name:Object(c.a)({dataField:"_id.name",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.NAME"}))},y.e),startDate:Object(c.a)({dataField:"_id.startDate",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.START_DATE"})),formatter:function(e){return Object(S.jsx)(M.g,{input:e,_format:"dd/MM/yyyy"})}},y.e),closureDate:Object(c.a)({dataField:"_id.closureDate",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.CLOSURE_DATE"})),formatter:function(e){return Object(S.jsx)(M.g,{input:e,_format:"dd/MM/yyyy"})}},y.e),finalClosureDate:Object(c.a)({dataField:"_id.finalClosureDate",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.FINAL_CLOSURE_DATE"})),formatter:function(e){return Object(S.jsx)(M.g,{input:e,_format:"dd/MM/yyyy"})}},y.e),totalStudent:Object(c.a)({dataField:"totalStudent",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.TOTAL_STUDENT"}))},y.e),totalPost:Object(c.a)({dataField:"totalPost",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.TOTAL_POST"}))},y.e),percent:Object(c.a)({dataField:"percent",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.PERCENT"})),formatter:M.m},y.e),action:Object(c.a)(Object(c.a)({dataField:"action",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.TABLE.ACTION_COLUMN"})),formatter:v.a,formatExtraData:{intl:a,onShowDetail:function(e){H.push("".concat(window.location.pathname,"/").concat(e._id._id))}}},y.c),{},{style:{minWidth:"130px"}})}}),[]),B={_title:w,commonInfo:{_subTitle:"EMPTY",_className:"col-12 row text-primary",_inputClassName:"col-4","academicYear._id.academicYear.name":{_type:"string",label:"ACADEMIC_YEAR.MASTER.HEADER.NAME",disabled:!0},"academicYear._id.academicYear.startDate":{_type:"date-time",label:"ACADEMIC_YEAR.MASTER.HEADER.START_DATE",disabled:!0},"academicYear._id.academicYear.finalClosureDate":{_type:"date-time",label:"ACADEMIC_YEAR.MASTER.HEADER.FINAL_CLOSURE_DATE",disabled:!0},"academicYear.totalStudent":{_type:"string",label:"ACADEMIC_YEAR.MASTER.HEADER.TOTAL_STUDENT",disabled:!0},"academicYear.totalPost":{_type:"string",label:"ACADEMIC_YEAR.MASTER.HEADER.TOTAL_POST",disabled:!0}}},I=Object(s.useMemo)((function(){return{faculty:Object(c.a)({dataField:"_id.faculty",text:"".concat(a.formatMessage({id:"ANALYST.MASTER.HEADER.FACULTY"}))},y.e),totalStudent:Object(c.a)({dataField:"totalStudent",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.TOTAL_STUDENT"}))},y.e),totalPost:Object(c.a)({dataField:"totalPost",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.TOTAL_POST"}))},y.e),percent:Object(c.a)({dataField:"percent",text:"".concat(a.formatMessage({id:"ACADEMIC_YEAR.MASTER.HEADER.PERCENT"})),formatter:M.m},y.e)}}),[]),z={_title:w,table:{_subTitle:"EMPTY",_className:"col-12 text-primary","":{_type:"custom",component:function(){return Object(S.jsx)(T,{name:"dataArray",columns:I})}}}},U=Object(s.useMemo)((function(){return{panel1:B,panel2:z,_header:function(e){return null===e||void 0===e?void 0:e.academicYear._id.academicYear.name}}}),[]),V=(Object(s.useMemo)((function(){return[{className:"col-12 mb-5",dataClassName:"col-12 mb-3",data:{ss:{formatter:function(e,t){return console.log(e,t),Object(S.jsx)(A.a,{onModify:null,formModel:U,entity:t})}}}}]}),[]),Object(s.useMemo)((function(){return[{header:"ACADEMIC_YEAR.HEADER.DETAIL_INFO",className:"col-12 mb-5",titleClassName:"col-3 mb-3",dataClassName:"col-9 mb-3 pl-5",data:{scanAt:{title:"Ng\xe0y g\xe1n QR",formatter:function(e){return Object(S.jsx)(M.g,{input:e})}},"scanBy.fullName":{title:"Ng\u01b0\u1eddi g\xe1n QR"}}}]}),[]),Object(s.useMemo)((function(){return{name:{type:"search-select",label:"Academic Year",onSearch:_.f,keyField:"name"},startDate:{type:"date-time",label:"Start time"}}}),[])),J=Object(s.useState)(V),K=Object(n.a)(J,2),W=K[0];return K[1],Object(S.jsx)(s.Fragment,{children:Object(S.jsxs)(N.d,{children:[Object(S.jsx)(N.b,{exact:!0,path:"/analyst/:code",children:function(e){var t=e.match;return Object(S.jsx)(A.a,{onModify:k,moduleName:"ANALYST.MODULE_NAME",mode:"vertical",code:null===t||void 0===t?void 0:t.params.code,get:O,formModel:U})}}),Object(S.jsxs)(N.b,{path:"/analyst",children:["`",Object(S.jsx)(g.a,{title:w,onSearch:function(e){l(y.a),void 0!==e.name?C(Object(c.a)(Object(c.a)({},e),{},{name:e.name.name})):C(e)},searchModel:W}),Object(S.jsx)(x.a,{title:"ANALYST.MASTER.BODY.TITLE",selectedEntities:r,onSelectMany:i,entities:t,total:D,columns:F,loading:R,paginationParams:o,setPaginationParams:l,isShowId:!0})]})]})})}}}]);
//# sourceMappingURL=16.e1fb6173.chunk.js.map