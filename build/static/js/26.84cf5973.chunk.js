(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[26],{1737:function(e,t,a){"use strict";var n=a(171),c=a(172);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(0)),i=(0,n(a(173)).default)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"}),"AccountCircleOutlined");t.default=i},1739:function(e,t,a){"use strict";var n=a(8),c=a(60),o=a(18),i=a(0),s=a.n(i),r=a(65),l=a(73),d=a(69),u=a(33),b=a(74),m=a(505),j=a.n(m),O=a(41),f=a.n(O),p=a(1722),E=a(147),h=a(1740),y=a(1737),S=a.n(y),T=a(1649),g=a(273),x=(a(507),a(1)),A=function(e){var t=e.entity,a=e.onComments,n=s.a.useRef({value:""}),c=s.a.useState((null===t||void 0===t?void 0:t.comments)||[]),i=Object(o.a)(c,2),r=i[0],l=i[1];s.a.useEffect((function(){t&&l(t.comments)}),[t]);return Object(x.jsx)(b.a,{children:Object(x.jsx)(b.b,{children:Object(x.jsxs)("div",{className:"pl-xl-15 pl-md-10 pl-5 mb-5",children:[Object(x.jsx)("span",{className:"modify-subtitle text-primary mt-8",children:"COMMENTS"}),Object(x.jsxs)("div",{className:"mt-8 border border-light rounded pt-5 pb-5",children:[null===r||void 0===r?void 0:r.map((function(e,t){return Object(x.jsxs)("div",{className:"row mb-3",children:[Object(x.jsx)("div",{className:"col-1 text-center",children:Object(x.jsx)(S.a,{style:{fontSize:30}})}),Object(x.jsxs)("div",{className:"col-10 bg-light rounded p-3",children:[Object(x.jsx)("p",{className:"font-bold",children:f.a.isString(e.createdBy)?e.createdBy:e.createdBy.fullName?e.createdBy.fullName:"Anonymous"}),Object(x.jsx)("p",{children:e.content})]})]},t)})),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-1"}),Object(x.jsx)("div",{className:"col-10",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-11",children:Object(x.jsx)(T.a,{className:"form-control",rowsMin:1,"aria-label":"empty textarea",ref:n,placeholder:"Write comment..."})}),Object(x.jsx)("div",{className:"col-1",children:Object(x.jsx)("button",{className:"btn btn-primary pl-11 pr-11",onClick:function(){var e;""!==n.current.value?function(e,t){a&&e&&a(e,t).then((function(e){l(e.data),n.current.value=""})).catch((function(e){throw e}))}(t,{content:n.current.value}):(e="Comment is empty!",g.b.error(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))},children:"Sent"})})]})})]})]})]})})})};t.a=function(e){var t=e.entity,a=e.onModify,s=e.moduleName,m=void 0===s?"COMMON_COMPONENT.CREATE_UPDATE.MODULE_NAME":s,O=e.code,y=e.get,T=e.formModel,g=e.actions,N=e.validation,M=e.loading,v=e.mode,P=e.setEditEntity,R=e.homePageUrl,_=e.allFormButton,C=e.onComments,D=e.showComment,w=void 0===D||D,L=Object(r.a)(),k=Object(d.g)(),I=Object(i.useMemo)((function(){return Object(E.j)(T)}),[T]),F=Object(i.useState)(t),B=Object(o.a)(F,2),U=B[0],H=B[1];Object(i.useEffect)((function(){t&&H(t)}),[t]),Object(i.useEffect)((function(){O||t||H(I)}),[I,O]);var Y=T._header,z=Object(c.a)(T,["_header"]);return Object(i.useEffect)((function(){O&&y&&y(O).then((function(e){H(Object(n.a)({},e.data)),P&&P(e.data)}))}),[O]),console.log(U),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(l.d,{enableReinitialize:!0,initialValues:U,validationSchema:N,onSubmit:function(e,t){t.setSubmitting,t.validateForm;console.log(e),a(e).then((function(){k.push(null!==R&&void 0!==R?R:Object(E.h)(window.location.pathname))})).catch((function(e){}))},children:function(e){e.handleSubmit,e.setFieldValue;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.c,{className:"form form-label-right",children:Object.keys(z).map((function(e,t,a){var n=z[e];if(f.a.isString(n))throw new Error("S\u1eed d\u1ee5ng sai c\xe1ch "+e+"\n"+JSON.stringify(z));var o=n._title,i=Object(c.a)(n,["_title"]);return Object(x.jsxs)(b.a,{className:"modify-page",children:[Object(x.jsx)(b.c,{className:"border-bottom-0",title:0==t?Object(x.jsxs)("a",{onClick:function(){return k.goBack()},className:"cursor-pointer text-primary font-weight-boldest",children:[Object(x.jsx)(j.a,{}),f.a.isString(Y)?L.formatMessage({id:Y},{moduleName:L.formatMessage({id:null!==m&&void 0!==m?m:"EMPTY"})}).toUpperCase():Y(U)]}):Object(x.jsx)(x.Fragment,{children:L.formatMessage({id:o},{moduleName:L.formatMessage({id:null!==m&&void 0!==m?m:"EMPTY"})}).toUpperCase()})}),Object(x.jsxs)(b.b,{children:[Object(x.jsx)(p.a,{mode:v,inputGroups:i}),_&&"outside"===_.type&&Object(x.jsx)("div",{className:"text-right mt-10",children:Object.keys(_.data).map((function(e){switch(_.data[e].role){case"submit":return Object(x.jsxs)("button",{type:_.data[e].type,onClick:function(){_.data[e].onClick()},className:_.data[e].className,children:[_.data[e].icon," ",_.data[e].label]},e);case"special":return Object(x.jsxs)("button",{type:_.data[e].type,onClick:function(){_.data[e].onClick(U)},className:_.data[e].className,children:[_.data[e].icon," ",_.data[e].label]},e);case"button":return Object(x.jsxs)("button",{type:_.data[e].type,className:_.data[e].className,onClick:function(){_.data[e].onClick(U)},children:[_.data[e].icon," ",_.data[e].label]},e);case"link-button":return Object(x.jsx)(u.b,{to:_.data[e].linkto,children:Object(x.jsxs)("button",{type:_.data[e].type,className:_.data[e].className,children:[_.data[e].icon," ",_.data[e].label]})},e)}}))}),g&&t===Object.keys(z).length-1&&Object(x.jsx)("div",{className:"text-right mt-10",children:Object.keys(g.data).map((function(e){var t;switch(g.data[e].role){case"submit":return Object(x.jsxs)("button",{className:g.data[e].className,type:"submit",children:[!0===M?null!==(t=g.data[e].loading)&&void 0!==t?t:Object(x.jsx)(h.a,{animation:"border",variant:"light",size:"sm"}):g.data[e].icon," ",L.formatMessage({id:g.data[e].label})]},e);case"button":return Object(x.jsxs)("button",{type:g.data[e].type,className:g.data[e].className,children:[g.data[e].icon," ",L.formatMessage({id:g.data[e].label})]},e);case"link-button":return Object(x.jsx)(u.b,{to:g.data[e].linkto,children:Object(x.jsxs)("button",{type:g.data[e].type,className:g.data[e].className,children:[g.data[e].icon," ",L.formatMessage({id:g.data[e].label})]})},e)}}))},e)]})]},"entity-crud-card"+e)}))}),!0===w&&C?"3"===(null===U||void 0===U?void 0:U.confirmationStatus)||!0===(null===U||void 0===U?void 0:U.isMaster)&&"2"===(null===U||void 0===U?void 0:U.confirmationStatus)?Object(x.jsx)(b.a,{children:Object(x.jsx)(b.b,{className:"p-0",children:Object(x.jsxs)("div",{className:"mb-5 mt-5",children:[Object(x.jsx)("span",{className:"text-primary detail-dialog-subtitle mt-8",children:"B\xccNH LU\u1eacN"}),Object(x.jsx)("div",{className:"mt-8 border border-light rounded pt-5 pb-5",children:U&&U.comments.length>0?U.comments.map((function(e,t){return Object(x.jsxs)("div",{className:"row mb-3",children:[Object(x.jsx)("div",{className:"col-1 text-center",children:Object(x.jsx)(S.a,{style:{fontSize:30}})}),Object(x.jsxs)("div",{className:"col-10 bg-light rounded p-3",children:[Object(x.jsx)("p",{className:"font-bold",children:e.createdBy.fullName}),Object(x.jsx)("p",{children:e.content})]})]},t)})):Object(x.jsx)("span",{children:"Ch\u01b0a c\xf3 b\xecnh lu\u1eadn"})})]})})}):Object(x.jsx)(A,{entity:U,onComments:C}):Object(x.jsx)(x.Fragment,{})]})}})})}},1742:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return b})),a.d(t,"h",(function(){return m})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return O}));var n=a(8),c=a(51),o=a.n(c),i=a(78).a+"/user",s=i+"/bulk",r=function(e){return o.a.post(i,e)},l=function(e){var t=e.queryProps,a=e.sortList,c=e.paginationProps;return o.a.get("".concat(i),{params:Object(n.a)(Object(n.a)(Object(n.a)({},t),c),{},{sortList:a})})},d=function(e){return o.a.get("".concat(i,"/get/count"),{params:Object(n.a)({},e)})},u=function(e){return o.a.get("".concat(i,"/").concat(e))},b=function(e){return o.a.get("".concat(i,"/").concat(e._id))},m=function(e){return o.a.put("".concat(i,"/").concat(e._id),e)},j=function(e){return o.a.delete("".concat(i,"/").concat(e._id))},O=function(e){return o.a.delete(s,{data:{data:e}})}},1933:function(e,t,a){"use strict";a.r(t);var n=a(18),c=a(1766),o=a(8),i=a(0),s=a(51),r=a.n(s),l=a(78),d=a(147),u=l.a+"/post",b=u+"/bulk",m=(l.a,function(e,t){return r.a.put("".concat(u,"/").concat(e._id),t)}),j=function(e){return r.a.post(u,e)},O=function(e){var t=e.queryProps,a=e.sortList,n=e.paginationProps;return r.a.get("".concat(u),{params:Object(o.a)(Object(o.a)(Object(o.a)({},t),n),{},{sortList:a})})},f=function(e){var t=e.queryProps,a=e.sortList,n=e.paginationProps;return r.a.get("".concat(u,"/count"),{params:Object(o.a)(Object(o.a)(Object(o.a)({},t),n),{},{sortList:a})})},p=function(e){return r.a.get("".concat(u,"/").concat(e._id))},E=function(e){return r.a.get("".concat(u,"/").concat(e))},h=function(e){return r.a.put("".concat(u,"/").concat(e._id),e)},y=function(e){return r.a.delete("".concat(u,"/").concat(e._id))},S=function(e){return r.a.delete(b,{data:{data:e}})},T=function(e,t){return r.a.put("".concat(u,"/").concat(e._id,"/comments"),t)},g=[{code:"1",name:"pending"},{code:"2",name:"accept"},{code:"3",name:"reject"}],x=function(e){var t=e.queryProps,a=e.paginationProps;return console.log(t),new Promise((function(e,n){var c=g.filter((function(e,a,n){return Object.values(t).some((function(t){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))}));e({code:200,data:{data:c.sort(Object(d.f)({key:a.sortBy,orderType:"asc"===a.sortType?1:-1})).slice((a.page-1)*a.limit,a.page*a.limit),paging:{page:a.page,limit:a.limit,total:c.length}},success:!0})}))},A=a(270),N=a(1728),M=a(69),v=a(1725),P=a(1721),R=a(1726),_=a(1732),C=a(1735),D=a(21),w=a(413),L=a(1739),k=a(1740),I=a(1720),F=a.n(I),B=a(1719),U=a.n(B),H=a(85),Y=a(1775),z=a(1742),G=a(36),q=a(41),J=a.n(q),V=a(1);t.default=function(){var e=Object(d.i)({getServer:p,countServer:f,createServer:j,deleteServer:y,deleteManyServer:S,getAllServer:O,updateServer:h}),t=e.entities,a=e.intl,s=e.deleteEntity,r=e.setDeleteEntity,l=(e.editEntity,e.setEditEntity),u=e.createEntity,b=e.selectedEntities,g=e.setSelectedEntities,I=e.detailEntity,B=e.showDelete,q=e.setShowDelete,W=(e.showEdit,e.setShowEdit,e.showCreate,e.setShowCreate,e.setDetailEntity,e.showDetail),K=e.setShowDetail,Q=e.showDeleteMany,X=e.setShowDeleteMany,Z=e.paginationProps,$=e.setPaginationProps,ee=e.filterProps,te=e.setFilterProps,ae=e.total,ne=e.loading,ce=e.error,oe=(e.setError,e.add),ie=e.update,se=e.get,re=e.deleteMany,le=e.deleteFn,de=e.getAll,ue=e.notifySuccess,be="POST.MODULE_NAME",me=Object(G.e)((function(e){return e.auth})),je=Object(i.useMemo)((function(){return H.d().shape({})}),[]),Oe=Object(M.g)(),fe=["student","admin"].includes(me.role.role),pe={type:"outside",data:{approve:{role:"special",type:"button",linkto:void 0,className:"btn btn-primary mr-8 fixed-btn-width",label:"Accept",onClick:function(e){e?function(e){var t=Object(o.a)(Object(o.a)({},e),{},{status:"accept"});return m(e,t)}(e).then((function(){ue("Accept successfully"),Oe.push(A.b.post),$(A.a),te({})})).catch((function(){})):ue("Can't access to the server. Please try again")}},refuse:{role:"button",type:"button",linkto:void 0,className:"btn btn-outline-primary fixed-btn-width btn-danger",label:"Reject",onClick:function(e){e?function(e){var t=Object(o.a)(Object(o.a)({},e),{},{status:"reject"});return m(e,t)}(e).then((function(){ue("Post is rejected"),Oe.push(A.b.post),$(A.a),te({})})).catch((function(e){console.log(e)})):ue("Can't access to the server. Please try again")}}}},Ee=Object(i.useMemo)((function(){return{type:"inside",data:{save:{role:"submit",type:"submit",linkto:void 0,className:"btn btn-primary mr-8 fixed-btn-width",label:"SAVE_BTN_LABEL",icon:ne?Object(V.jsx)(k.a,{style:A.h,animation:"border",variant:"light",size:"sm"}):Object(V.jsx)(F.a,{style:A.h})},cancel:{role:"link-button",type:"button",linkto:"/post",className:"btn btn-outline-primary fixed-btn-width",label:"CANCEL_BTN_LABEL",icon:Object(V.jsx)(U.a,{})}}}}),[ne]);Object(i.useEffect)((function(){de(ee)}),[Z,ee]);var he=Object(i.useMemo)((function(){return{faculty:Object(o.a)({dataField:"user.faculty.faculty",text:"".concat(a.formatMessage({id:"POST.MASTER.HEADER.FACULTY"}))},A.e),title:Object(o.a)({dataField:"title",text:"".concat(a.formatMessage({id:"POST.MASTER.TABLE.TITLE"}))},A.e),name:Object(o.a)({dataField:"user.fullName",text:"".concat(a.formatMessage({id:"POST.MASTER.HEADER.STUDENT_NAME"}))},A.e),code:Object(o.a)({dataField:"user.code",text:"".concat(a.formatMessage({id:"POST.MASTER.HEADER.STUDENT_CODE"}))},A.e),category:Object(o.a)({dataField:"category.category",text:"".concat(a.formatMessage({id:"POST.MASTER.HEADER.CATEGORY"}))},A.e),date_upload:Object(o.a)({dataField:"date_upload",text:"".concat(a.formatMessage({id:"POST.MASTER.HEADER.DATE_UPLOAD"})),formatter:function(e){return Object(V.jsx)(D.g,{input:e,_format:"dd/MM/yyyy"})}},A.e),status:Object(o.a)({dataField:"status",text:"".concat(a.formatMessage({id:"POST.MASTER.HEADER.STATUS"}))},A.e),action:Object(o.a)(Object(o.a)({dataField:"action",text:"".concat(a.formatMessage({id:"POST.MASTER.TABLE.ACTION_COLUMN"})),formatter:N.a,formatExtraData:{intl:a,onShowDetail:function(e){se(e),K(!0)},onDelete:function(e){r(e),q(!0)},onEdit:function(e){Oe.push("".concat(window.location.pathname,"/").concat(e._id))}}},A.c),{},{style:{minWidth:"130px"}})}}),[]),ye=Object(i.useMemo)((function(){return[{className:"col-md-12 col-12",dataClassName:"col-md-6 col-12",data:{title:{title:"POST.MASTER.TABLE.TITLE"},file:{title:"POST",formatter:function(e){if(!e)return Object(V.jsx)(V.Fragment,{});var t=e.path.split("-"),a=Object(c.a)(t),n=(a[0],a.slice(1).join(""));return Object(D.j)("/"+e.path,void 0,n)}},"user.faculty.faculty":{title:"POST.MASTER.HEADER.FACULTY"},"user.fullName":{title:"POST.MASTER.HEADER.STUDENT_NAME"},"user.code":{title:"POST.MASTER.HEADER.STUDENT_CODE"},"category.category":{title:"POST.MASTER.HEADER.CATEGORIES"},"academicYear.name":{title:"POST.MASTER.HEADER.ACADEMIC_YEAR"},date_upload:{title:"POST.MASTER.HEADER.DATE_UPLOAD",formatter:function(e){return Object(V.jsx)(D.g,{input:e,_format:"dd/MM/yyyy"})}},status:{title:"POST.MASTER.HEADER.STATUS"},description:{title:"POST.MASTER.HEADER.DESCRIPTION"},image:{formatter:function(e){return Object(V.jsx)(w.a,{images:e,width:200,height:200})}}}}]}),[]),Se=Object(i.useMemo)((function(){return{title:{type:"string",label:"Title"},user:{type:"search-select",label:"User",onSearch:z.f,keyField:"code"},date_upload:{type:"date-time",label:"Date"},category:{type:"search-select",label:"Category",onSearch:Y.f,keyField:"category"},status:{type:"search-select",label:"Status",onSearch:x,keyField:"name",selectField:"code"}}}),[]),Te=Object(i.useState)(Se),ge=Object(n.a)(Te,2),xe=ge[0],Ae=(ge[1],Object(i.useState)({_subTitle:"",user:{_type:"string",label:"POST.MASTER.HEADER.USER",disabled:!0},code:{_type:"string",label:"POST.MASTER.TABLE.CODE",disabled:!0},title:{_type:"string",label:"POST.MASTER.TABLE.TITLE"},category:{_type:"search-select",label:"POST.MASTER.HEADER.CATEGORY",onSearch:Y.f,required:!0,keyField:"category"},file:{_type:"file",label:"POST",maxNumber:1,isArray:!1},description:{_type:"string",label:"POST.MASTER.TABLE.DESCRIPTION"},image:{_type:"image",maxNumber:3,label:"USER.MODIFY.IMAGE",isArray:!0},condition:{_type:"checkbox",label:"POST.MASTER.TABLE.CONDITION"}})),Ne=Object(n.a)(Ae,2),Me=Ne[0],ve=(Ne[1],{_title:"",commonInfo:{_subTitle:"INFORMATION",_className:"col-6 pl-xl-15 pl-md-10 pl-5 text-primary",user:{_type:"object",_inputClassName:"col-6",_className:"row mb-5",fullName:{_type:"string",label:"POST.MASTER.HEADER.USER",disabled:!0},code:{_type:"string",label:"POST.MASTER.HEADER.USER_CODE",disabled:!0}},title:{_type:"string",label:"POST.MASTER.TABLE.TITLE"},category:{_type:"search-select",label:"POST.MASTER.HEADER.CATEGORY",onSearch:Y.f,required:!0,keyField:"category"},file:{_type:"file",label:"FILE",maxNumber:1,isArray:!1},description:{_type:"string",label:"POST.MASTER.TABLE.DESCRIPTION"},image:{_type:"image",maxNumber:3,label:"USER.MODIFY.IMAGE",isArray:!0},condition:{_type:"boolean",label:"POST.MASTER.TABLE.CONDITION",trueFalse:{true:"1",false:"0"}}}}),Pe=Object(i.useMemo)((function(){return{_header:"POST.CREATE.TITLE",panel1:ve}}),[Me]),Re=Object(i.useMemo)((function(){return Object(o.a)(Object(o.a)({},Pe),{},{_header:"POST.EDIT.TITLE"})}),[Pe]),_e=fe?function(){Oe.push("".concat(window.location.pathname,"/0000000"))}:void 0,Ce=fe?function(){return X(!0)}:void 0;return Object(V.jsxs)(i.Fragment,{children:[Object(V.jsxs)(M.d,{children:[Object(V.jsx)(M.a,{from:"".concat(A.b.post,"/edit"),to:"".concat(A.b.post)}),Object(V.jsx)(M.b,{path:"".concat(A.b.post,"/0000000"),children:Object(V.jsx)(L.a,{mode:"vertical",moduleName:be,onModify:oe,formModel:Pe,entity:u,actions:Ee,validation:je,homePageUrl:A.b.post})}),Object(V.jsx)(M.b,{path:"".concat(A.b.post,"/:code"),children:function(e){var t=e.match;return Object(V.jsx)(L.a,{mode:"vertical",onModify:ie,setEditEntity:l,moduleName:be,code:null===t||void 0===t?void 0:t.params.code,get:E,formModel:Re,actions:fe&&Ee,validation:je,onComments:T,homePageUrl:A.b.post,allFormButton:"coordinator"===me.role.role&&pe})}}),Object(V.jsxs)(M.b,{path:"".concat(A.b.post),children:["`",Object(V.jsx)(P.a,{title:"POST.MASTER.HEADER.TITLE",onSearch:function(e){$(A.a);var t=JSON.parse(JSON.stringify(e));e&&e.status&&!J.a.isString(e.status)&&(t.status=e.status.name),te(t)},searchModel:xe}),Object(V.jsx)(R.a,{title:"POST.MASTER.BODY.TITLE",onCreate:_e,onDeleteMany:Ce,selectedEntities:b,onSelectMany:g,entities:t,total:ae,columns:he,loading:ne,paginationParams:Z,setPaginationParams:$,isShowId:!0})]})]}),Object(V.jsx)(v.a,{title:"POST.VIEW.TITLE",moduleName:be,show:W,entity:I,renderInfo:ye,onHide:function(){K(!1)}}),Object(V.jsx)(_.a,{moduleName:be,entity:s,onDelete:le,isShow:B,onHide:function(){q(!1),te(Object(o.a)({},ee))},loading:ne,error:ce}),Object(V.jsx)(C.a,{moduleName:be,selectedEntities:b,loading:ne,error:ce,isShow:Q,onDelete:re,onHide:function(){X(!1),te(Object(o.a)({},ee))}})]})}}}]);
//# sourceMappingURL=26.84cf5973.chunk.js.map