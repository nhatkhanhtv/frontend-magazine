(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[25],{1737:function(e,t,a){"use strict";var n=a(171),c=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(0)),r=(0,n(a(173)).default)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"}),"AccountCircleOutlined");t.default=r},1739:function(e,t,a){"use strict";var n=a(8),c=a(60),i=a(18),r=a(0),o=a.n(r),s=a(65),l=a(73),d=a(69),u=a(33),b=a(74),m=a(505),j=a.n(m),O=a(41),f=a.n(O),E=a(1722),h=a(147),p=a(1740),g=a(1737),S=a.n(g),y=a(1649),N=a(273),M=(a(507),a(1)),x=function(e){var t=e.entity,a=e.onComments,n=o.a.useRef({value:""}),c=o.a.useState((null===t||void 0===t?void 0:t.comments)||[]),r=Object(i.a)(c,2),s=r[0],l=r[1];o.a.useEffect((function(){t&&l(t.comments)}),[t]);return Object(M.jsx)(b.a,{children:Object(M.jsx)(b.b,{children:Object(M.jsxs)("div",{className:"pl-xl-15 pl-md-10 pl-5 mb-5",children:[Object(M.jsx)("span",{className:"modify-subtitle text-primary mt-8",children:"COMMENTS"}),Object(M.jsxs)("div",{className:"mt-8 border border-light rounded pt-5 pb-5",children:[null===s||void 0===s?void 0:s.map((function(e,t){return Object(M.jsxs)("div",{className:"row mb-3",children:[Object(M.jsx)("div",{className:"col-1 text-center",children:Object(M.jsx)(S.a,{style:{fontSize:30}})}),Object(M.jsxs)("div",{className:"col-10 bg-light rounded p-3",children:[Object(M.jsx)("p",{className:"font-bold",children:f.a.isString(e.createdBy)?e.createdBy:e.createdBy.fullName?e.createdBy.fullName:"Anonymous"}),Object(M.jsx)("p",{children:e.content})]})]},t)})),Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-1"}),Object(M.jsx)("div",{className:"col-10",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-11",children:Object(M.jsx)(y.a,{className:"form-control",rowsMin:1,"aria-label":"empty textarea",ref:n,placeholder:"Write comment..."})}),Object(M.jsx)("div",{className:"col-1",children:Object(M.jsx)("button",{className:"btn btn-primary pl-11 pr-11",onClick:function(){var e;""!==n.current.value?function(e,t){a&&e&&a(e,t).then((function(e){l(e.data),n.current.value=""})).catch((function(e){throw e}))}(t,{content:n.current.value}):(e="Comment is empty!",N.b.error(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))},children:"Sent"})})]})})]})]})]})})})};t.a=function(e){var t=e.entity,a=e.onModify,o=e.moduleName,m=void 0===o?"COMMON_COMPONENT.CREATE_UPDATE.MODULE_NAME":o,O=e.code,g=e.get,y=e.formModel,N=e.actions,A=e.validation,R=e.loading,v=e.mode,T=e.setEditEntity,D=e.homePageUrl,L=e.allFormButton,_=e.onComments,U=e.showComment,I=void 0===U||U,C=Object(s.a)(),F=Object(d.g)(),P=Object(r.useMemo)((function(){return Object(h.j)(y)}),[y]),w=Object(r.useState)(t),k=Object(i.a)(w,2),Y=k[0],B=k[1];Object(r.useEffect)((function(){t&&B(t)}),[t]),Object(r.useEffect)((function(){O||t||B(P)}),[P,O]);var H=y._header,G=Object(c.a)(y,["_header"]);return Object(r.useEffect)((function(){O&&g&&g(O).then((function(e){B(Object(n.a)({},e.data)),T&&T(e.data)}))}),[O]),console.log(Y),Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(l.d,{enableReinitialize:!0,initialValues:Y,validationSchema:A,onSubmit:function(e,t){t.setSubmitting,t.validateForm;console.log(e),a(e).then((function(){F.push(null!==D&&void 0!==D?D:Object(h.h)(window.location.pathname))})).catch((function(e){}))},children:function(e){e.handleSubmit,e.setFieldValue;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(l.c,{className:"form form-label-right",children:Object.keys(G).map((function(e,t,a){var n=G[e];if(f.a.isString(n))throw new Error("S\u1eed d\u1ee5ng sai c\xe1ch "+e+"\n"+JSON.stringify(G));var i=n._title,r=Object(c.a)(n,["_title"]);return Object(M.jsxs)(b.a,{className:"modify-page",children:[Object(M.jsx)(b.c,{className:"border-bottom-0",title:0==t?Object(M.jsxs)("a",{onClick:function(){return F.goBack()},className:"cursor-pointer text-primary font-weight-boldest",children:[Object(M.jsx)(j.a,{}),f.a.isString(H)?C.formatMessage({id:H},{moduleName:C.formatMessage({id:null!==m&&void 0!==m?m:"EMPTY"})}).toUpperCase():H(Y)]}):Object(M.jsx)(M.Fragment,{children:C.formatMessage({id:i},{moduleName:C.formatMessage({id:null!==m&&void 0!==m?m:"EMPTY"})}).toUpperCase()})}),Object(M.jsxs)(b.b,{children:[Object(M.jsx)(E.a,{mode:v,inputGroups:r}),L&&"outside"===L.type&&Object(M.jsx)("div",{className:"text-right mt-10",children:Object.keys(L.data).map((function(e){switch(L.data[e].role){case"submit":return Object(M.jsxs)("button",{type:L.data[e].type,onClick:function(){L.data[e].onClick()},className:L.data[e].className,children:[L.data[e].icon," ",L.data[e].label]},e);case"special":return Object(M.jsxs)("button",{type:L.data[e].type,onClick:function(){L.data[e].onClick(Y)},className:L.data[e].className,children:[L.data[e].icon," ",L.data[e].label]},e);case"button":return Object(M.jsxs)("button",{type:L.data[e].type,className:L.data[e].className,onClick:function(){L.data[e].onClick(Y)},children:[L.data[e].icon," ",L.data[e].label]},e);case"link-button":return Object(M.jsx)(u.b,{to:L.data[e].linkto,children:Object(M.jsxs)("button",{type:L.data[e].type,className:L.data[e].className,children:[L.data[e].icon," ",L.data[e].label]})},e)}}))}),N&&t===Object.keys(G).length-1&&Object(M.jsx)("div",{className:"text-right mt-10",children:Object.keys(N.data).map((function(e){var t;switch(N.data[e].role){case"submit":return Object(M.jsxs)("button",{className:N.data[e].className,type:"submit",children:[!0===R?null!==(t=N.data[e].loading)&&void 0!==t?t:Object(M.jsx)(p.a,{animation:"border",variant:"light",size:"sm"}):N.data[e].icon," ",C.formatMessage({id:N.data[e].label})]},e);case"button":return Object(M.jsxs)("button",{type:N.data[e].type,className:N.data[e].className,children:[N.data[e].icon," ",C.formatMessage({id:N.data[e].label})]},e);case"link-button":return Object(M.jsx)(u.b,{to:N.data[e].linkto,children:Object(M.jsxs)("button",{type:N.data[e].type,className:N.data[e].className,children:[N.data[e].icon," ",C.formatMessage({id:N.data[e].label})]})},e)}}))},e)]})]},"entity-crud-card"+e)}))}),!0===I&&_?"3"===(null===Y||void 0===Y?void 0:Y.confirmationStatus)||!0===(null===Y||void 0===Y?void 0:Y.isMaster)&&"2"===(null===Y||void 0===Y?void 0:Y.confirmationStatus)?Object(M.jsx)(b.a,{children:Object(M.jsx)(b.b,{className:"p-0",children:Object(M.jsxs)("div",{className:"mb-5 mt-5",children:[Object(M.jsx)("span",{className:"text-primary detail-dialog-subtitle mt-8",children:"B\xccNH LU\u1eacN"}),Object(M.jsx)("div",{className:"mt-8 border border-light rounded pt-5 pb-5",children:Y&&Y.comments.length>0?Y.comments.map((function(e,t){return Object(M.jsxs)("div",{className:"row mb-3",children:[Object(M.jsx)("div",{className:"col-1 text-center",children:Object(M.jsx)(S.a,{style:{fontSize:30}})}),Object(M.jsxs)("div",{className:"col-10 bg-light rounded p-3",children:[Object(M.jsx)("p",{className:"font-bold",children:e.createdBy.fullName}),Object(M.jsx)("p",{children:e.content})]})]},t)})):Object(M.jsx)("span",{children:"Ch\u01b0a c\xf3 b\xecnh lu\u1eadn"})})]})})}):Object(M.jsx)(x,{entity:Y,onComments:_}):Object(M.jsx)(M.Fragment,{})]})}})})}},1741:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"e",(function(){return b})),a.d(t,"g",(function(){return m})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return O}));var n=a(8),c=a(51),i=a.n(c),r=a(78),o=r.a+"/role",s=o+"/bulk",l=(r.a,function(e){return i.a.post(o,e)}),d=function(e){var t=e.queryProps,a=e.sortList,c=e.paginationProps;return i.a.get("".concat(o),{params:Object(n.a)(Object(n.a)(Object(n.a)({},t),c),{},{sortList:a})})},u=function(e){var t=e.queryProps,a=e.sortList,c=e.paginationProps;return i.a.get("".concat(o,"/count"),{params:Object(n.a)(Object(n.a)(Object(n.a)({},t),c),{},{sortList:a})})},b=function(e){return i.a.get("".concat(o,"/").concat(e._id))},m=function(e){return i.a.put("".concat(o,"/").concat(e._id),e)},j=function(e){return i.a.delete("".concat(o,"/").concat(e._id))},O=function(e){return i.a.delete(s,{data:{data:e}})}},1742:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return b})),a.d(t,"h",(function(){return m})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return O}));var n=a(8),c=a(51),i=a.n(c),r=a(78).a+"/user",o=r+"/bulk",s=function(e){return i.a.post(r,e)},l=function(e){var t=e.queryProps,a=e.sortList,c=e.paginationProps;return i.a.get("".concat(r),{params:Object(n.a)(Object(n.a)(Object(n.a)({},t),c),{},{sortList:a})})},d=function(e){return i.a.get("".concat(r,"/get/count"),{params:Object(n.a)({},e)})},u=function(e){return i.a.get("".concat(r,"/").concat(e))},b=function(e){return i.a.get("".concat(r,"/").concat(e._id))},m=function(e){return i.a.put("".concat(r,"/").concat(e._id),e)},j=function(e){return i.a.delete("".concat(r,"/").concat(e._id))},O=function(e){return i.a.delete(o,{data:{data:e}})}},1767:function(e,t,a){},1905:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a(18),i=a(0),r=a(65),o=a(270),s=a(1721),l=a(1728),d=a(1732),u=a(147),b=a(69),m=a(1739),j=a(1720),O=a.n(j),f=a(1719),E=a.n(f),h=a(1725),p=a(85),g=a(1742),S=a(21),y=a(413),N=a(1740),M=(a(1767),a(1759)),x=a(1741),A=a(1735),R=a(1726),v=a(1),T="USER.MODULE_NAME";t.default=function(){var e=Object(r.a)(),t=Object(b.g)(),a=Object(u.i)({getServer:g.e,countServer:g.a,createServer:g.b,deleteServer:g.c,deleteManyServer:g.d,getAllServer:g.f,updateServer:g.h}),j=a.entities,f=(a.setEntities,a.deleteEntity),D=a.setDeleteEntity,L=a.createEntity,_=a.setCreateEntity,U=a.selectedEntities,I=a.setSelectedEntities,C=a.detailEntity,F=a.showDelete,P=a.setShowDelete,w=a.showDeleteMany,k=a.setShowDeleteMany,Y=a.showDetail,B=a.setShowDetail,H=a.paginationProps,G=a.setPaginationProps,z=a.filterProps,q=a.setFilterProps,V=a.total,K=a.loading,J=a.error,W=a.add,Q=a.update,X=a.get,Z=a.deleteMany,$=a.deleteFn,ee=a.getAll,te=Object(i.useState)("0"),ae=Object(c.a)(te,2),ne=ae[0],ce=(ae[1],Object(i.useState)(!1)),ie=Object(c.a)(ce,2),re=ie[0];ie[1],Object(i.useEffect)((function(){ee(z)}),[H,z,re,ne]);var oe=Object(i.useMemo)((function(){return[Object(n.a)(Object(n.a)({dataField:"fullName",text:"".concat(e.formatMessage({id:"USER.MASTER.TABLE.DISPLAY_NAME"}))},o.e),{},{align:"center"}),Object(n.a)(Object(n.a)({dataField:"code",text:"".concat(e.formatMessage({id:"USER.MASTER.TABLE.CODE"}))},o.e),{},{align:"center"}),Object(n.a)({dataField:"birthDay",text:"".concat(e.formatMessage({id:"USER.MASTER.HEADER.BIRTHDAY"})),formatter:function(e){return Object(v.jsx)(S.g,{input:e,_format:"dd/MM/yyyy"})}},o.e),Object(n.a)(Object(n.a)({dataField:"phone",text:"".concat(e.formatMessage({id:"USER.MASTER.TABLE.PHONE"}))},o.e),{},{align:"center"}),Object(n.a)(Object(n.a)({dataField:"email",text:"".concat(e.formatMessage({id:"USER.MASTER.TABLE.EMAIL"}))},o.e),{},{align:"center"}),Object(n.a)(Object(n.a)({dataField:"role.role",text:"".concat(e.formatMessage({id:"USER.MASTER.TABLE.ROLE"}))},o.e),{},{align:"center"}),Object(n.a)(Object(n.a)({dataField:"action",text:"".concat(e.formatMessage({id:"USER.MASTER.TABLE.ACTION_COLUMN"})),formatter:l.a,formatExtraData:{intl:e,onShowDetail:function(e){X(e).then((function(){B(!0)}))},onEdit:function(e){t.push("".concat(window.location.pathname,"/").concat(e._id))},onLock:function(e){D(e),P(!0)}}},o.c),{},{style:{minWidth:"130px"}})]}),[]),se=Object(i.useMemo)((function(){return[{className:"col-md-6 col-12",dataClassName:"col-md-12 col-12 text-lg-center",data:{image:{formatter:function(e){return Object(v.jsx)(y.a,{images:e,width:200,height:200})}}}},{className:"col-md-6 col-12",dataClassName:"col-md-8 col-12",data:{fullName:{title:"USER.DETAIL_DIALOG.FULL_NAME"},phone:{title:"USER.DETAIL_DIALOG.PHONE"},birthDay:{title:"USER.DETAIL_DIALOG.BIRTHDAY",formatter:function(e){return Object(S.f)({input:e})}},"faculty.faculty":{title:"FACULTY"}}}]}),[]),le=Object(i.useMemo)((function(){return{code:{type:"string",label:"USER.MASTER.SEARCH.CODE",disabled:"1"===ne},fullName:{type:"string",label:"USER.MASTER.SEARCH.FULL_NAME"},faculty:{type:"search-select",label:"USER.MASTER.HEADER.FACULTY",onSearch:M.f,keyField:"faculty",disabled:"1"===ne},email:{type:"string",label:"USER.MASTER.SEARCH.EMAIL",disabled:"1"===ne},phone:{type:"string-number",label:"USER.MASTER.SEARCH.PHONE"}}}),[ne]),de=Object(i.useMemo)((function(){return{_subTitle:"USER.MODIFY.DETAIL_INFO",_className:"col-6 pr-xl-15 pr-md-10 pr-5",image:{_type:"image",maxNumber:1,label:"USER.MODIFY.IMAGE",isArray:!1},fullName:{_type:"string",maxNumber:1,label:"USER.MODIFY.FULLNAME"},code:{_type:"string",label:"USER.MODIFY.CODE",disabled:!0},birthDay:{_type:"date-time",required:!0,label:"USER.MODIFY.BIRTHDAY"},gender:{_type:"radio",required:!0,options:[{label:"USER.MODIFY.GENDER_OPTION.MALE",value:"1"},{label:"USER.MODIFY.GENDER_OPTION.FEMALE",value:"0"}],label:"USER.MODIFY.GENDER"},status:{_type:"boolean",label:"USER.MODIFY.STATUS",trueFalse:{true:"1",false:"0"}},faculty:{_type:"search-select",label:"USER.MASTER.HEADER.FACULTY",onSearch:M.f,keyField:"faculty",required:!1}}}),[]),ue=Object(i.useMemo)((function(){return{_subTitle:"EMPTY",_className:"col-6 pl-xl-15 pl-md-10 pl-5",identifier:{_type:"string-number",required:!0,label:"USER.MODIFY.IDENTIFIER"},email:{_type:"string",required:!0,label:"USER.MODIFY.EMAIL"},phone:{_type:"string-number",required:!0,label:"USER.MODIFY.PHONE"},role:{_type:"search-select",onSearch:x.f,keyField:"role",required:!0,label:"USER.MODIFY.ROLE"}}}),[]),be=Object(i.useMemo)((function(){return{_header:"USER.CREATE.HEADER",panel1:{_title:"",group1:de,group2:ue}}}),[de,ue]),me=Object(i.useMemo)((function(){return Object(n.a)(Object(n.a)({},be),{},{_header:"USER.UPDATE.HEADER"})}),[be]),je=Object(i.useMemo)((function(){return p.d().shape({phone:p.f().max(11,"VALIDATE.ERROR.INVALID_INPUT").min(8,"VALIDATE.ERROR.INVALID_INPUT"),birthDay:p.a().max(new Date,"VALIDATE.ERROR.MUST_LESS_THAN_TODAY")})}),[]),Oe=Object(i.useMemo)((function(){return{type:"inside",data:{save:{role:"submit",type:"submit",linkto:void 0,className:"btn btn-primary mr-8 fixed-btn-width",label:"SAVE_BTN_LABEL",icon:K?Object(v.jsx)(N.a,{style:o.h,animation:"border",variant:"light",size:"sm"}):Object(v.jsx)(O.a,{style:o.h})},cancel:{role:"link-button",type:"button",linkto:"/account/user",className:"btn btn-outline-primary fixed-btn-width",label:"CANCEL_BTN_LABEL",icon:Object(v.jsx)(E.a,{})}}}}),[K]),fe=Object(i.useMemo)((function(){return Object(n.a)(Object(n.a)({},Object(u.j)(be)),{},{status:"0"})}),[be]);return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)(b.d,{children:[Object(v.jsx)(b.b,{path:"".concat(o.b.user,"/0000000"),children:Object(v.jsx)(m.a,{moduleName:T,onModify:W,formModel:be,entity:L,actions:Oe,validation:je,homePageUrl:o.b.user})}),Object(v.jsx)(b.b,{path:"/account/user/:code",children:function(e){var t=e.match;return Object(v.jsx)(m.a,{onModify:Q,moduleName:T,code:null===t||void 0===t?void 0:t.params.code,get:g.g,formModel:me,actions:Oe,validation:je,homePageUrl:o.b.user})}}),Object(v.jsxs)(b.b,{path:"".concat(o.b.user),exact:!0,children:[Object(v.jsx)(s.a,{title:"PRODUCT_TYPE.MASTER.HEADER.TITLE",onSearch:function(e){G(o.a),q(e)},searchModel:le}),Object(v.jsx)("div",{className:"user-body",children:Object(v.jsx)(R.a,{title:"USER.MASTER.TABLE.TITLE",onCreate:function(){_(fe),t.push("".concat(window.location.pathname,"/0000000"))},onDeleteMany:function(){return k(!0)},selectedEntities:U,onSelectMany:I,entities:j,total:V,columns:oe,loading:K,paginationParams:H,setPaginationParams:G,isShowId:!1})})]})]}),Object(v.jsx)(h.a,{title:"USER.DETAIL_DIALOG.TITLE",moduleName:T,entity:C,onHide:function(){B(!1)},show:Y,size:"lg",renderInfo:se}),Object(v.jsx)(d.a,{entity:f,onDelete:$,isShow:F,loading:K,error:J,onHide:function(){P(!1)},title:"USER.LOCK_DIALOG.TITLE",confirmMessage:"USER.LOCK_DIALOG.CONFIRM_MESSAGE",bodyTitle:"USER.LOCK_DIALOG.BODY_TITLE",deletingMessage:"USER.LOCK_DIALOG.LOCKING_MESSAGE"}),Object(v.jsx)(A.a,{moduleName:T,selectedEntities:U,loading:K,error:J,isShow:w,onDelete:Z,onHide:function(){k(!1),q(Object(n.a)({},z))}})]})}}}]);
//# sourceMappingURL=25.014fc93a.chunk.js.map