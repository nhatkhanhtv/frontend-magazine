(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[30],{1736:function(e,t,a){"use strict";var n=a(60),i=a(0),o=a.n(i),c=a(1918),r=a(8),s=a(18),l=a(1740),d=a(73),O=a(65),b=a(1720),u=a.n(b),j=a(1719),E=a.n(j),m=a(270),f=a(1722),h=a(147),y=a(1);var M=function(e){var t=e.entity,a=e.onModify,b=(e.moduleName,e.onHide),j=e.modifyPanel,M=e.validation,g=e.loading,T=Object(O.a)(),A=(j._title,Object(n.a)(j,["_title"])),S=Object(i.useMemo)((function(){return Object(h.j)({_header:"",panel1:j})}),[j]),C=Object(i.useState)(S),p=Object(s.a)(C,2),x=p[0],R=p[1];return Object(i.useEffect)((function(){R(null!==t&&void 0!==t?t:S)}),[t,S]),Object(y.jsx)(d.d,{enableReinitialize:!0,initialValues:x,validationSchema:M,onSubmit:function(e,n){var i=n.setSubmitting;a(Object(r.a)(Object(r.a)(Object(r.a)({},t),e),{},{__v:void 0})).then((function(){b()})).catch((function(e){i(!1)}))},children:function(e){var t=e.handleSubmit;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a.Body,{className:"overlay overlay-block cursor-default",children:Object(y.jsx)(d.c,{className:"form form-label-right",children:Object.keys(A).map((function(e){return Object(y.jsx)(o.a.Fragment,{children:Object(y.jsx)(f.a,{inputGroups:A})},e)}))})}),Object(y.jsxs)(c.a.Footer,{className:"border-top-0 pt-10",children:[Object(y.jsxs)("button",{type:"submit",onClick:function(){return t()},className:"btn btn-primary fixed-btn-width",children:[!0===g?Object(y.jsx)(l.a,{animation:"border",variant:"light",size:"sm"}):Object(y.jsx)(u.a,{style:m.h}),"\xa0",T.formatMessage({id:"COMMON_COMPONENT.MODIFY_DIALOG.SAVE_BTN"})]}),Object(y.jsxs)("button",{type:"button",onClick:b,className:"btn btn-outline-primary fixed-btn-width",children:[Object(y.jsx)(E.a,{style:m.h}),T.formatMessage({id:"COMMON_COMPONENT.MODIFY_DIALOG.CLOSE_BTN"})]})]})]})}})},g=a(41),T=a.n(g);t.a=function(e){var t=e.show,a=e.onHide,i=e.entity,o=e.onModify,r=e.size,s=void 0===r?"sm":r,l=e.moduleName,d=void 0===l?"COMMON_COMPONENT.DETAIL_DIALOG.MODULE_NAME":l,b=e.formModel,u=e.validation,j=e.loading,E=Object(O.a)(),m=b._header,f=Object(n.a)(b,["_header"]);return Object(y.jsxs)(c.a,{size:s,show:t,onHide:a,"aria-labelledby":"example-modal-sizes-title-lg",dialogClassName:"modal-modify",children:[Object(y.jsx)(c.a.Header,{closeButton:!0,className:"border-bottom-0",children:Object(y.jsx)(c.a.Title,{id:"example-modal-sizes-title-lg",className:"text-primary",children:T.a.isString(m)?E.formatMessage({id:m},{moduleName:E.formatMessage({id:null!==d&&void 0!==d?d:"EMPTY"})}).toUpperCase():m(i)})}),Object.values(f).map((function(e,t){if(T.a.isString(e))throw new Error("S\u1eed d\u1ee5ng sai c\xe1ch "+e);return Object(y.jsx)(M,{modifyPanel:e,validation:u,entity:i,onHide:a,onModify:o,loading:j},"tttttttt".concat(t))}))]})}},1910:function(e,t,a){"use strict";a.r(t);var n=a(18),i=a(8),o=a(0),c=a(1775),r=a(270),s=a(1728),l=a(147),d=a(69),O=a(1725),b=a(1721),u=a(1726),j=a(1736),E=a(1732),m=a(1735),f=a(1);t.default=function(){var e=Object(l.i)({getServer:c.e,countServer:c.a,createServer:c.b,deleteServer:c.c,deleteManyServer:c.d,getAllServer:c.f,updateServer:c.g}),t=e.entities,a=e.intl,h=e.deleteEntity,y=e.setDeleteEntity,M=e.editEntity,g=e.setEditEntity,T=e.createEntity,A=e.selectedEntities,S=e.setSelectedEntities,C=e.detailEntity,p=e.showDelete,x=e.setShowDelete,R=e.showEdit,D=e.setShowEdit,v=e.showCreate,N=e.setShowCreate,w=e.showDetail,_=e.setShowDetail,G=e.showDeleteMany,Y=e.setShowDeleteMany,H=e.paginationProps,I=e.setPaginationProps,L=e.filterProps,P=e.setFilterProps,F=e.total,k=e.loading,z=e.error,B=(e.setError,e.add),U=e.update,V=e.get,J=e.deleteMany,W=e.deleteFn,q=e.getAll,K="CATEGORY.MODULE_NAME";Object(o.useEffect)((function(){q(L)}),[H,L]);var Q=Object(o.useMemo)((function(){return{category:Object(i.a)({dataField:"category",text:"".concat(a.formatMessage({id:"CATEGORY.MASTER.HEADER.CATEGORY"}))},r.e),code:Object(i.a)({dataField:"code",text:"".concat(a.formatMessage({id:"CATEGORY.MASTER.HEADER.CODE"}))},r.e),action:Object(i.a)(Object(i.a)({dataField:"action",text:"".concat(a.formatMessage({id:"CATEGORY.MASTER.TABLE.ACTION_COLUMN"})),formatter:s.a,formatExtraData:{intl:a,onShowDetail:function(e){V(e),_(!0)},onDelete:function(e){y(e),x(!0)},onEdit:function(e){V(e).then((function(e){g(e.data),D(!0)}))}}},r.c),{},{style:{minWidth:"130px"}})}}),[]),X=Object(o.useMemo)((function(){return[{data:{category:{title:"CATEGORY.MASTER.HEADER.CATEGORY"},code:{title:"CATEGORY.MASTER.HEADER.CODE"}},titleClassName:"col-3"}]}),[]),Z=Object(o.useMemo)((function(){return{category:{type:"search-select",label:"Category",onSearch:c.f,keyField:"category"}}}),[]),$=Object(o.useState)(Z),ee=Object(n.a)($,2),te=ee[0],ae=(ee[1],Object(o.useState)({_subTitle:"",category:{_type:"string",label:"CATEGORY.MASTER.HEADER.CATEGORY"},code:{_type:"string",label:"CATEGORY.MASTER.HEADER.CODE",disabled:!0}})),ne=Object(n.a)(ae,2),ie=ne[0],oe=(ne[1],Object(o.useMemo)((function(){return{_header:"CATEGORY.CREATE.TITLE",panel1:{_title:"",group1:ie}}}),[ie])),ce=Object(o.useMemo)((function(){return Object(i.a)(Object(i.a)({},oe),{},{_header:"CATEGORY.EDIT.TITLE"})}),[oe]);return console.log(T),Object(f.jsxs)(o.Fragment,{children:[Object(f.jsx)(O.a,{title:"CATEGORY.VIEW.TITLE",moduleName:K,show:w,entity:C,renderInfo:X,onHide:function(){_(!1)}}),Object(f.jsx)(E.a,{moduleName:K,entity:h,onDelete:W,isShow:p,onHide:function(){x(!1),P(Object(i.a)({},L))},loading:k,error:z}),Object(f.jsx)(m.a,{moduleName:K,selectedEntities:A,loading:k,error:z,isShow:G,onDelete:J,onHide:function(){Y(!1),P(Object(i.a)({},L))}}),Object(f.jsx)(j.a,{formModel:oe,show:v,onModify:B,onHide:function(){N(!1)},loading:k}),Object(f.jsx)(j.a,{formModel:ce,show:R,entity:M,onModify:U,onHide:function(){D(!1)},loading:k}),Object(f.jsx)(d.d,{children:Object(f.jsxs)(d.b,{path:"".concat(r.b.category),children:[Object(f.jsx)(b.a,{title:"CATEGORY.MASTER.HEADER.TITLE",onSearch:function(e){I(r.a),void 0!==e.category?P(Object(i.a)(Object(i.a)({},e),{},{category:e.category.category})):P(e)},searchModel:te}),Object(f.jsx)(u.a,{title:"CATEGORY.MASTER.BODY.TITLE",onCreate:function(){N(!0)},onDeleteMany:function(){return Y(!0)},selectedEntities:A,onSelectMany:S,entities:t,total:F,columns:Q,loading:k,paginationParams:H,setPaginationParams:I,isShowId:!0})]})})]})}}}]);
//# sourceMappingURL=30.a1697772.chunk.js.map