(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[28],{1736:function(e,t,a){"use strict";var n=a(60),i=a(0),r=a.n(i),o=a(1918),c=a(8),s=a(18),l=a(1740),d=a(73),u=a(65),b=a(1720),O=a.n(b),E=a(1719),j=a.n(E),p=a(270),f=a(1722),A=a(147),N=a(1);var m=function(e){var t=e.entity,a=e.onModify,b=(e.moduleName,e.onHide),E=e.modifyPanel,m=e.validation,h=e.loading,y=Object(u.a)(),S=(E._title,Object(n.a)(E,["_title"])),I=Object(i.useMemo)((function(){return Object(A.j)({_header:"",panel1:E})}),[E]),D=Object(i.useState)(I),v=Object(s.a)(D,2),g=v[0],_=v[1];return Object(i.useEffect)((function(){_(null!==t&&void 0!==t?t:I)}),[t,I]),Object(N.jsx)(d.d,{enableReinitialize:!0,initialValues:g,validationSchema:m,onSubmit:function(e,n){var i=n.setSubmitting;a(Object(c.a)(Object(c.a)(Object(c.a)({},t),e),{},{__v:void 0})).then((function(){b()})).catch((function(e){i(!1)}))},children:function(e){var t=e.handleSubmit;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.a.Body,{className:"overlay overlay-block cursor-default",children:Object(N.jsx)(d.c,{className:"form form-label-right",children:Object.keys(S).map((function(e){return Object(N.jsx)(r.a.Fragment,{children:Object(N.jsx)(f.a,{inputGroups:S})},e)}))})}),Object(N.jsxs)(o.a.Footer,{className:"border-top-0 pt-10",children:[Object(N.jsxs)("button",{type:"submit",onClick:function(){return t()},className:"btn btn-primary fixed-btn-width",children:[!0===h?Object(N.jsx)(l.a,{animation:"border",variant:"light",size:"sm"}):Object(N.jsx)(O.a,{style:p.h}),"\xa0",y.formatMessage({id:"COMMON_COMPONENT.MODIFY_DIALOG.SAVE_BTN"})]}),Object(N.jsxs)("button",{type:"button",onClick:b,className:"btn btn-outline-primary fixed-btn-width",children:[Object(N.jsx)(j.a,{style:p.h}),y.formatMessage({id:"COMMON_COMPONENT.MODIFY_DIALOG.CLOSE_BTN"})]})]})]})}})},h=a(41),y=a.n(h);t.a=function(e){var t=e.show,a=e.onHide,i=e.entity,r=e.onModify,c=e.size,s=void 0===c?"sm":c,l=e.moduleName,d=void 0===l?"COMMON_COMPONENT.DETAIL_DIALOG.MODULE_NAME":l,b=e.formModel,O=e.validation,E=e.loading,j=Object(u.a)(),p=b._header,f=Object(n.a)(b,["_header"]);return Object(N.jsxs)(o.a,{size:s,show:t,onHide:a,"aria-labelledby":"example-modal-sizes-title-lg",dialogClassName:"modal-modify",children:[Object(N.jsx)(o.a.Header,{closeButton:!0,className:"border-bottom-0",children:Object(N.jsx)(o.a.Title,{id:"example-modal-sizes-title-lg",className:"text-primary",children:y.a.isString(p)?j.formatMessage({id:p},{moduleName:j.formatMessage({id:null!==d&&void 0!==d?d:"EMPTY"})}).toUpperCase():p(i)})}),Object.values(f).map((function(e,t){if(y.a.isString(e))throw new Error("S\u1eed d\u1ee5ng sai c\xe1ch "+e);return Object(N.jsx)(m,{modifyPanel:e,validation:O,entity:i,onHide:a,onModify:r,loading:E},"tttttttt".concat(t))}))]})}},1768:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"h",(function(){return b})),a.d(t,"g",(function(){return O})),a.d(t,"a",(function(){return E})),a.d(t,"f",(function(){return j})),a.d(t,"i",(function(){return p})),a.d(t,"c",(function(){return f})),a.d(t,"e",(function(){return A})),a.d(t,"d",(function(){return N}));var n=a(8),i=a(51),r=a.n(i),o=a(78),c=o.a+"/store-level",s=o.a+"/agency",l=c+"/tree",d=c+"/bulk",u=(o.a,function(e){return r.a.post(c,e)}),b=function(e){var t=e.queryProps,a=e.sortList,i=e.paginationProps;return r.a.get("".concat(l),{params:Object(n.a)(Object(n.a)(Object(n.a)({},t),i),{},{sortList:a})})},O=function(e){var t=e.agencyParams,a=e.paginationProps;return r.a.get("".concat(s),{params:Object(n.a)(Object(n.a)({},t),a)})},E=function(e){var t=e.queryProps,a=e.sortList,i=e.paginationProps;return r.a.get("".concat(c,"/count"),{params:Object(n.a)(Object(n.a)(Object(n.a)({},t),i),{},{sortList:a})})},j=function(e){return r.a.get("".concat(c,"/").concat(e._id))},p=function(e){return r.a.put("".concat(c,"/").concat(e._id),e)},f=function(e){return r.a.delete("".concat(c,"/").concat(e._id))},A=function(e){return r.a.delete(d,{data:{listSpecies:e}})},N=function(e){return r.a.delete("".concat(s,"/").concat(e._id))}},1927:function(e,t,a){"use strict";a.r(t);var n=a(66),i=a(18),r=a(8),o=a(0),c=a(65),s=a(147),l=a(51),d=a.n(l),u=a(78).a+"/agency",b=function(e){return d.a.post(u,Object(r.a)(Object(r.a)({},e),{},{type:"0"}))},O=function(e){var t,a=e.queryProps,n=e.sortList,i=e.paginationProps;return d.a.get("".concat(u),{params:Object(r.a)(Object(r.a)(Object(r.a)({},a),i),{},{sortList:n,storeLevel:{_id:null===a||void 0===a||null===(t=a.storeLevel)||void 0===t?void 0:t._id}})})},E=function(e){var t=e.queryProps,a=e.sortList,n=e.paginationProps;return d.a.get("".concat(u,"/count"),{params:Object(r.a)(Object(r.a)(Object(r.a)({},t),n),{},{sortList:a})})},j=function(e){return d.a.get("".concat(u,"/").concat(e._id))},p=function(e){return d.a.get("".concat(u,"/").concat(e))},f=function(e){return d.a.put("".concat(u,"/").concat(e._id),Object(r.a)(Object(r.a)({},e),{},{type:"0"}))},A=function(e){return d.a.delete("".concat(u,"/").concat(e._id))},N=function(e){return d.a.delete("".concat(u,"/bulk"),{data:{listAgencies:e}})},m=a(1721),h=a(1726),y=a(1728),S=a(270),I=a(1732),D=a(1735),v=a(69),g=a(1768),_=a(1741),M=a(1760),C=a(1725),T=a(1769),P=a(1739),Y=a(1720),G=a.n(Y),L=a(1719),R=a.n(L),F=a(1736),x=a(1),w="AGENCY.MODIFY.SHIPPING_ADDRESS.MODULE_NAME";function q(e){var t=e.onCreate,a=e.onEdit,n=e.onDelete,l=e.showCreate,d=e.showEdit,u=e.showDelete,b=e.editEntity,O=e.deleteEntity,E=(Object(c.a)(),Object(o.useState)(null)),j=Object(i.a)(E,2),p=j[0],f=j[1],A=Object(o.useState)(null),N=Object(i.a)(A,2),m=N[0],h=N[1];Object(o.useEffect)((function(){f(null===b||void 0===b?void 0:b.state),h(null===b||void 0===b?void 0:b.city)}),[b]);var y=Object(o.useCallback)((function(e){var t=e.queryProps,a=e.paginationProps;return Object(T.a)({queryProps:Object(r.a)(Object(r.a)({},t),{},{state:p}),paginationProps:a})}),[p]),S=Object(o.useCallback)((function(e){var t=e.queryProps,a=e.paginationProps;return Object(T.b)({queryProps:Object(r.a)(Object(r.a)({},t),{},{city:m}),paginationProps:a})}),[m]),D=Object(o.useMemo)((function(){return{_subTitle:"",state:{_type:"search-select",onSearch:T.c,onChange:function(e,t){var a=t.setFieldValue,n=t.setFieldTouched;p!=e&&(h(null),a("city",""),n("city",!1),a("district",""),n("district",!1)),f(e)},required:!0,label:"AGENCY.MODIFY.SHIPPING_ADDRESS.STATE"},city:{_type:"search-select",onSearch:y,required:!0,onChange:function(e,t){var a=t.setFieldValue,n=t.setFieldTouched;m!=e&&(a("district",""),n("district",!1)),h(e)},disabled:function(e){return""===(null===e||void 0===e?void 0:e.state)},label:"AGENCY.MODIFY.SHIPPING_ADDRESS.CITY"},district:{_type:"search-select",onSearch:S,required:!0,disabled:function(e){return""===(null===e||void 0===e?void 0:e.city)},label:"AGENCY.MODIFY.SHIPPING_ADDRESS.DISTRICT"},address:{_type:"string",required:!0,label:"AGENCY.MODIFY.SHIPPING_ADDRESS.ADDRESS"}}}),[y,S]),v=Object(o.useMemo)((function(){return{_header:"AGENCY.MODIFY.SHIPPING_ADDRESS.CREATE_TITLE",panel1:{_title:"",group1:D}}}),[D]),g=Object(o.useMemo)((function(){return Object(r.a)(Object(r.a)({},v),{},{_header:"AGENCY.MODIFY.SHIPPING_ADDRESS.UPDATE_TITLE"})}),[v]),_=Object(o.useState)(null===l||void 0===l?void 0:l.show),M=Object(i.a)(_,2),C=M[0],P=M[1];Object(o.useEffect)((function(){P(null===l||void 0===l?void 0:l.show)}),[l]);var Y=Object(o.useState)(null===d||void 0===d?void 0:d.show),G=Object(i.a)(Y,2),L=G[0],R=G[1];Object(o.useEffect)((function(){R(null===d||void 0===d?void 0:d.show)}),[d]);var q=Object(o.useState)(null===u||void 0===u?void 0:u.show),H=Object(i.a)(q,2),U=H[0],V=H[1];Object(o.useEffect)((function(){V(null===u||void 0===u?void 0:u.show)}),[u]);var B=Object(o.useMemo)((function(){return Object(r.a)(Object(r.a)({},Object(s.j)(v)),{},{isDefault:!1})}),[]);return Object(x.jsxs)(o.Fragment,{children:[Object(x.jsx)(F.a,{entity:B,moduleName:w,formModel:v,show:C,onModify:t,onHide:function(){P(!1)}}),Object(x.jsx)(F.a,{moduleName:w,formModel:g,show:L,entity:b,onModify:a,onHide:function(){R(!1)}}),Object(x.jsx)(I.a,{moduleName:w,title:"AGENCY.MODIFY.SHIPPING_ADDRESS.DELETE_TITLE",entity:O,onDelete:n,isShow:U,onHide:function(){V(!1)}})]})}var H=a(85),U=a(1738),V=a.n(U),B=a(41),k=a.n(B),z=a(21),W=a(1740),J="AGENCY.MODULE_NAME";t.default=function(){var e=Object(v.g)(),t=Object(c.a)(),a=Object(s.i)({getServer:j,countServer:E,createServer:b,deleteServer:A,deleteManyServer:N,getAllServer:O,updateServer:f}),l=a.entities,d=(a.setEntities,a.deleteEntity),u=a.setDeleteEntity,Y=a.editEntity,L=(a.setEditEntity,a.createEntity,a.setCreateEntity,a.selectedEntities),F=a.setSelectedEntities,w=a.detailEntity,U=(a.setDetailEntity,a.showDelete),B=a.setShowDelete,X=(a.showEdit,a.setShowEdit,a.showCreate,a.setShowCreate,a.showDetail),K=a.setShowDetail,Q=a.showDeleteMany,Z=a.setShowDeleteMany,$=a.paginationProps,ee=a.setPaginationProps,te=a.filterProps,ae=a.setFilterProps,ne=a.total,ie=(a.setTotal,a.loading),re=(a.setLoading,a.error),oe=(a.setError,a.add),ce=a.update,se=a.get,le=a.deleteMany,de=a.deleteFn,ue=a.getAll;a.refreshData,Object(o.useEffect)((function(){ue(Object(r.a)(Object(r.a)({},te),{},{type:"0"}))}),[$,te]);var be=Object(o.useMemo)((function(){return{code:Object(r.a)(Object(r.a)({dataField:"code",text:"".concat(t.formatMessage({id:"AGENCY.MASTER.TABLE.CODE_COLUMN"}))},S.e),{},{align:"center"}),name:Object(r.a)(Object(r.a)({dataField:"name",text:"".concat(t.formatMessage({id:"AGENCY.MASTER.TABLE.NAME_COLUMN"}))},S.e),{},{align:"center"}),storeLevel:Object(r.a)(Object(r.a)({dataField:"storeLevel.name",text:"".concat(t.formatMessage({id:"AGENCY.MASTER.TABLE.STORE_LEVEL_COLUMN"}))},S.e),{},{align:"center"}),address:Object(r.a)(Object(r.a)({dataField:"address",text:"".concat(t.formatMessage({id:"AGENCY.MASTER.TABLE.AGENCY_ADDRESS_COLUMN"})),formatter:z.b},S.c),{},{align:"center"}),status:Object(r.a)(Object(r.a)({dataField:"status",text:"".concat(t.formatMessage({id:"AGENCY.MASTER.TABLE.STATUS_COLUMN"})),formatter:y.b},S.e),{},{align:"center"}),action:Object(r.a)(Object(r.a)({dataField:"action",text:"".concat(t.formatMessage({id:"AGENCY.MASTER.TABLE.ACTION_COLUMN"})),formatter:y.a,formatExtraData:{intl:t,onShowDetail:function(e){se(e).then((function(e){K(!0)}))},onDelete:function(e){u(e),B(!0)},onEdit:function(t){e.push("".concat(window.location.pathname,"/").concat(t._id))}}},S.c),{},{style:{minWidth:"130px"}})}}),[]),Oe=Object(o.useMemo)((function(){return[{header:"AGENCY.DETAIL_DIALOG.SHIPPING.SUBTITLE",className:"col-7",data:{code:{title:"AGENCY.DETAIL_DIALOG.SHIPPING.CODE"},name:{title:"AGENCY.DETAIL_DIALOG.SHIPPING.NAME"},address:{title:"AGENCY.DETAIL_DIALOG.SHIPPING.ADDRESS",formatter:function(e,t){var a="".concat(e.address,", ").concat(e.district,", ").concat(e.city,", ").concat(e.state);return Object(x.jsx)(x.Fragment,{children:a})}}}},{header:"EMPTY",className:"col-5 pl-xl-15 pl-md-10 pl-5",data:{phone:{title:"AGENCY.DETAIL_DIALOG.SHIPPING.PHONE_NUMBER"},status:{title:"AGENCY.DETAIL_DIALOG.SHIPPING.STATUS",formatter:y.b}}},{header:"AGENCY.DETAIL_DIALOG.OWNER.SUBTITLE",className:"col-7",data:{fullName:{title:"AGENCY.DETAIL_DIALOG.OWNER.FULL_NAME",keyField:"owner.fullName"},email:{title:"AGENCY.DETAIL_DIALOG.OWNER.EMAIL",keyField:"owner.email"},phone:{title:"AGENCY.DETAIL_DIALOG.OWNER.PHONE_NUMBER",keyField:"owner.phone"}}},{header:"AGENCY.DETAIL_DIALOG.SHIPPING_ADDRESS",className:"col-12",dataClassName:"col-12",data:{shippingAddress:{keyField:"shippingAddress",formatter:function(e,a){var n,i=e.find((function(e){return e.isDefault}));if(!(i=null!==(n=i)&&void 0!==n?n:e[0]))return Object(x.jsx)(x.Fragment,{});var r="".concat(i.address,", ").concat(i.district,", ").concat(i.city,", ").concat(i.state);return Object(x.jsxs)(x.Fragment,{children:[r,Object(x.jsxs)("span",{style:{color:"#B5B5C3"},className:"ml-5",children:["[",t.formatMessage({id:"AGENCY.VIEW.LABEL.DEFAULT_SHIPPING_ADDRESS"}),"]"]})]})}}}}]}),[]),Ee=Object(o.useState)({}),je=Object(i.a)(Ee,2),pe=je[0],fe=je[1],Ae=Object(o.useState)(null),Ne=Object(i.a)(Ae,2),me=Ne[0],he=Ne[1],ye=Object(o.useState)(null),Se=Object(i.a)(ye,2),Ie=Se[0],De=Se[1],ve=Object(o.useState)(null),ge=Object(i.a)(ve,2),_e=ge[0],Me=ge[1],Ce=Object(o.useState)(null),Te=Object(i.a)(Ce,2),Pe=Te[0],Ye=Te[1],Ge=Object(o.useState)(null),Le=Object(i.a)(Ge,2),Re=Le[0],Fe=Le[1],xe=Object(o.useState)(null),we=Object(i.a)(xe,2);we[0],we[1],Object(o.useEffect)((function(){var e,t,a,n,i,r;he(null===Y||void 0===Y||null===(e=Y.address)||void 0===e?void 0:e.state),De(null===Y||void 0===Y||null===(t=Y.address)||void 0===t?void 0:t.city),Me(null===Y||void 0===Y||null===(a=Y.owner)||void 0===a||null===(n=a.address)||void 0===n?void 0:n.state),Ye(null===Y||void 0===Y||null===(i=Y.owner)||void 0===i||null===(r=i.address)||void 0===r?void 0:r.city)}),[Y]),Object(o.useEffect)((function(){var e={};M.h({queryProps:Object(r.a)({},te),paginationProps:Object(r.a)(Object(r.a)({},$),{},{limit:100})}).then((function(t){var a=t.data.data.findIndex((function(e){return"Ph\xf2ng B\xe1n h\xe0ng"===e.name||"00005"===e.code}));-1!==a&&(e.managementUnit=t.data.data[a],_.f({queryProps:Object(r.a)(Object(r.a)({},te),{},{managementUnit:Object(r.a)({},e.managementUnit)}),paginationProps:Object(r.a)(Object(r.a)({},$),{},{limit:100})}).then((function(t){var a=t.data.data.findIndex((function(e){return"Ch\u1ee7 \u0111\u01a1n v\u1ecb b\xe1n h\xe0ng"===e.name}));-1!==a&&(e.role=t.data.data[a],fe(e))})))}))}),[]);var qe=Object(o.useCallback)((function(e){var t=e.queryProps,a=e.paginationProps;return Object(T.a)({queryProps:Object(r.a)(Object(r.a)({},t),{},{state:me}),paginationProps:a})}),[me]),He=Object(o.useCallback)((function(e){var t=e.queryProps,a=e.paginationProps;return Object(T.b)({queryProps:Object(r.a)(Object(r.a)({},t),{},{city:Ie}),paginationProps:a})}),[Ie]),Ue=Object(o.useCallback)((function(e){var t=e.queryProps,a=e.paginationProps;return console.log(_e),Object(T.a)({queryProps:Object(r.a)(Object(r.a)({},t),{},{state:_e}),paginationProps:a})}),[_e]),Ve=Object(o.useCallback)((function(e){var t=e.queryProps,a=e.paginationProps;return Object(T.b)({queryProps:Object(r.a)(Object(r.a)({},t),{},{city:Pe}),paginationProps:a})}),[Pe]),Be={code:{type:"string",label:"AGENCY.MASTER.SEARCH.CODE"},name:{type:"string",label:"AGENCY.MASTER.SEARCH.NAME"},storeLevel:{type:"tree-select",label:"AGENCY.MASTER.SEARCH.STORE_LEVEL",onSearch:function(e){var t=e.queryProps;e.sortList,e.paginationProps;return g.h({queryProps:t}).then((function(e){return e.data}))}},state:{type:"search-select",label:"AGENCY.MASTER.SEARCH.STATE",name:"address.state",onSearch:T.c,onChange:function(e,t){var a=t.setFieldValue;console.log(e),me!=e&&(De(null),a("address.city",null),a("address.district",null)),he(e)}},city:{type:"search-select",label:"AGENCY.MASTER.SEARCH.CITY",name:"address.city",onSearch:qe,onChange:function(e,t){var a=t.setFieldValue;Ie!=e&&a("address.district",null),De(e)},disabled:function(e){var t;return!(null===(t=e.address)||void 0===t?void 0:t.state)}},district:{type:"search-select",label:"AGENCY.MASTER.SEARCH.DISTRICT",name:"address.district",onSearch:He,disabled:function(e){var t;return!(null===(t=e.address)||void 0===t?void 0:t.city)}}},ke=Object(o.useMemo)((function(){return{_subTitle:"AGENCY.MODIFY.GENERAL_INFO",_className:"col-6 pr-xl-15 pr-md-10 pr-5",code:{_type:"string",label:"AGENCY.MODIFY.CODE",disabled:!0},name:{_type:"string",required:!0,label:"AGENCY.MODIFY.NAME"},storeLevel:{_type:"tree-select",required:!0,label:"AGENCY.MODIFY.STORE_LEVEL",onSearch:function(e){var t=e.queryProps;e.sortList,e.paginationProps;return g.h({queryProps:t}).then((function(e){return e.data}))}},address:{_type:"object",state:{_type:"search-select",onSearch:T.c,disabled:function(e){console.log(e)},onChange:function(e,t){var a=t.setFieldValue,n=t.setFieldTouched;me!=e&&(De(null),a("address.city",""),n("address.city",!1),a("address.district",""),n("address.district",!1)),he(e)},required:!0,label:"AGENCY.MODIFY.STATE"},city:{_type:"search-select",onSearch:qe,required:!0,onChange:function(e,t){var a=t.setFieldValue,n=t.setFieldTouched;Ie!=e&&(a("address.district",""),n("address.district",!1)),De(e)},disabled:function(e){var t;return""===(null===e||void 0===e||null===(t=e.address)||void 0===t?void 0:t.state)},label:"AGENCY.MODIFY.CITY"},district:{_type:"search-select",onSearch:He,required:!0,disabled:function(e){var t;return""===(null===e||void 0===e||null===(t=e.address)||void 0===t?void 0:t.city)},label:"AGENCY.MODIFY.DISTRICT"},address:{_type:"string",required:!0,label:"AGENCY.MODIFY.ADDRESS"}},status:{_type:"boolean",label:"AGENCY.MODIFY.STATUS",trueFalse:{true:"1",false:"0"}},phone:{_type:"string-number",required:!0,label:"AGENCY.MODIFY.PHONE_NUMBER"},taxId:{_type:"string-number",required:!0,label:"AGENCY.MODIFY.TAX_NUMBER"},images:{_type:"image",label:"AGENCY.MODIFY.IMAGE"},"":{_type:"object","":{_type:"object",_subTitle:"AGENCY.MODIFY.SHIPPING_ADDRESS",shippingAddress:{_type:"radio",required:!0,label:"AGENCY.MODIFY.SHIPPING_ADDRESS",labelWidth:0,optionsClassName:"col-12 mr-0",value:function(e){var t=k.a.isString(e)?null:null===e||void 0===e?void 0:e.find((function(e){return e.isDefault}));return console.log(t),t?JSON.stringify(t):t},onChange:function(e,t){var a=t.setFieldValue,i=t.values.shippingAddress;a("shippingAddress",Object(n.a)(i.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{isDefault:JSON.stringify(t)===e.target.value})}))))},options:function(e){var a=e.field,i=(e.values,e.setFieldValue,e.setFieldTouched);return a.value?a.value.map((function(e,r){return{label:function(o){var c=o.setFieldValue,s=(o.handleChange,o.values);o.handleBlur;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"pr-23",style:{display:"inline-block"},children:"".concat(e.address,", ").concat(e.district,", ").concat(e.city,", ").concat(e.state)}),Object(x.jsx)("span",{style:{position:"absolute",right:0,top:"calc(50% - 15px)"},children:Object(y.a)(e,{field:a,values:s,setFieldValue:c,setFieldTouched:i},1,{onDelete:function(){ct(e),St((function(){return function(){var t=a.value;c("shippingAddress",t.filter((function(t){return JSON.stringify(t)!==JSON.stringify(e)}))),nt({show:!1})}})),nt({show:!0})},onEdit:function(){ut(e),Nt((function(){return function(e){a.value[r]=e,c("shippingAddress",Object(n.a)(a.value)),$e({show:!1})}})),$e({show:!0})},intl:t})})]})},value:JSON.stringify(e)}})):[]}}},_addShippingAgencyBtn:{_type:"custom",component:function(e){var a=e.values,i=e.setFieldValue;return Object(x.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:function(){jt((function(){return function(e){var t=a.shippingAddress;i("shippingAddress",[e].concat(Object(n.a)(t))),Xe({show:!1})}})),Xe({show:!0})},children:[Object(x.jsx)(V.a,{style:S.h}),t.formatMessage({id:"AGENCY.MODIFY.ADD_SHIPPING_ADDRESS"})]})}}}}}),[qe,He]),ze=Object(o.useState)({show:!1}),We=Object(i.a)(ze,2),Je=We[0],Xe=We[1],Ke=Object(o.useState)({show:!1}),Qe=Object(i.a)(Ke,2),Ze=Qe[0],$e=Qe[1],et=Object(o.useState)({show:!1}),tt=Object(i.a)(et,2),at=tt[0],nt=tt[1],it=Object(o.useState)({}),rt=Object(i.a)(it,2),ot=rt[0],ct=rt[1],st=Object(o.useState)({}),lt=Object(i.a)(st,2),dt=lt[0],ut=lt[1],bt=Object(o.useState)((function(){return console.log})),Ot=Object(i.a)(bt,2),Et=Ot[0],jt=Ot[1],pt=Object(o.useState)((function(){return console.log})),ft=Object(i.a)(pt,2),At=ft[0],Nt=ft[1],mt=Object(o.useState)((function(){return console.log})),ht=Object(i.a)(mt,2),yt=ht[0],St=ht[1],It=Object(o.useMemo)((function(){return{_subTitle:"AGENCY.MODIFY.OWNER_INFO",_className:"col-6 pl-xl-15 pl-md-10 pl-5",owner:{_type:"object",code:{_type:"string",label:"AGENCY.MODIFY.USER_CODE",disabled:!0},username:{_type:"string",label:"AGENCY.MODIFY.USER_NAME",required:!0},fullName:{_type:"string",required:!0,label:"AGENCY.MODIFY.DISPLAY_NAME"},phone:{_type:"string-number",required:!0,label:"AGENCY.MODIFY.PHONE_NUMBER"},email:{_type:"email",required:!0,label:"AGENCY.MODIFY.EMAIL"},gender:{_type:"radio",required:!0,options:[{label:"AGENCY.MODIFY.GENDER_OPTION.MALE",value:"1"},{label:"AGENCY.MODIFY.GENDER_OPTION.FEMALE",value:"0"}],label:"AGENCY.MODIFY.GENDER"},birthDay:{_type:"date-time",required:!0,label:"AGENCY.MODIFY.DATE_OF_BIRTH"},address:{_type:"object",state:{_type:"search-select",onSearch:T.c,disabled:function(e){console.log(e)},onChange:function(e,t){var a=t.setFieldValue,n=t.setFieldTouched;_e!=e&&(Ye(null),a("owner.address.city",""),n("owner.address.city",!1),a("owner.address.district",""),n("owner.address.district",!1)),Me(e)},required:!0,label:"AGENCY.MODIFY.STATE"},city:{_type:"search-select",onSearch:Ue,required:!0,onChange:function(e,t){var a=t.setFieldValue,n=t.setFieldTouched;Pe!=e&&(a("owner.address.district",""),n("owner.address.district",!1)),Ye(e)},disabled:function(e){var t,a;return""===(null===e||void 0===e||null===(t=e.owner)||void 0===t||null===(a=t.address)||void 0===a?void 0:a.state)},label:"AGENCY.MODIFY.CITY"},district:{_type:"search-select",onSearch:Ve,required:!0,disabled:function(e){var t,a;return""===(null===e||void 0===e||null===(t=e.owner)||void 0===t||null===(a=t.address)||void 0===a?void 0:a.city)},label:"AGENCY.MODIFY.DISTRICT"},address:{_type:"string",required:!0,label:"AGENCY.MODIFY.ADDRESS"}},managementUnit:{_type:"search-select",label:"USER.MODIFY.MANAGEMENT_UNIT",keyField:"name",required:!0,onSearch:M.h,onChange:function(e,t){var a=t.setFieldValue;Re!=e&&a("role",null),Fe(e)},disabled:!0},role:{_type:"search-select",label:"USER.MODIFY.ROLE",keyField:"name",onSearch:function(e,t){var a=e.queryProps,n=e.paginationProps;return _.f({queryProps:Object(r.a)(Object(r.a)({},a),{},{managementUnit:Object(r.a)({},null===t||void 0===t?void 0:t.managementUnit)}),paginationProps:n})},disabled:!0},image:{_type:"image",isArray:!1,maxNumber:1,label:"AGENCY.MODIFY.REPRESENT_IMAGE"}}}}),[Ue,Ve,_e,Pe,Re]),Dt=Object(o.useMemo)((function(){return{type:"inside",data:{save:{role:"submit",type:"submit",linkto:void 0,className:"btn btn-primary mr-8 fixed-btn-width",label:"SAVE_BTN_LABEL",icon:ie?Object(x.jsx)(W.a,{style:S.h,animation:"border",variant:"light",size:"sm"}):Object(x.jsx)(G.a,{style:S.h})},cancel:{role:"link-button",type:"button",linkto:"/agency",className:"btn btn-outline-primary fixed-btn-width",label:"CANCEL_BTN_LABEL",icon:Object(x.jsx)(R.a,{})}}}}),[ie]),vt=Object(o.useMemo)((function(){return{_header:"SHIPPING_AGENCY.CREATE.HEADER",panel1:{_title:"",group1:ke,group2:It}}}),[ke,It]),gt=Object(o.useMemo)((function(){return Object(r.a)(Object(r.a)({},vt),{},{_header:"SHIPPING_AGENCY.UPDATE.HEADER"})}),[vt]),_t=Object(o.useMemo)((function(){return H.d().shape({phone:H.f().max(11,"VALIDATE.ERROR.INVALID_INPUT").min(8,"VALIDATE.ERROR.INVALID_INPUT"),taxId:H.f().min(10,"VALIDATE.ERROR.INVALID_INPUT").max(13,"VALIDATE.ERROR.INVALID_INPUT"),owner:H.d().shape({phone:H.f().max(11,"VALIDATE.ERROR.INVALID_INPUT").min(8,"VALIDATE.ERROR.INVALID_INPUT"),birthDay:H.a().max(new Date,"VALIDATE.ERROR.MUST_LESS_THAN_TODAY")})})}),[]),Mt=Object(o.useMemo)((function(){return Object(r.a)(Object(r.a)({},Object(s.j)(vt)),{},{status:"0"})}),[vt]),Ct=Object(o.useMemo)((function(){return Object(r.a)(Object(r.a)({},Mt),{},{owner:Object(r.a)(Object(r.a)({},Mt.owner),pe)})}),[Mt,pe]);return Object(x.jsxs)(o.Fragment,{children:[Object(x.jsx)(q,{showCreate:Je,showEdit:Ze,showDelete:at,onCreate:Et,onEdit:At,onDelete:yt,editEntity:dt,deleteEntity:ot}),Object(x.jsx)(I.a,{moduleName:J,entity:d,onDelete:de,isShow:U,onHide:function(){B(!1)},loading:ie,error:re}),Object(x.jsx)(D.a,{moduleName:J,selectedEntities:L,loading:ie,isShow:Q,onDelete:le,onHide:function(){Z(!1)},error:re}),Object(x.jsxs)(v.d,{children:[Object(x.jsxs)(v.b,{path:"/agency",exact:!0,children:[Object(x.jsx)(m.a,{title:"AGENCY.MASTER.HEADER.TITLE",onSearch:function(e){ee(S.a),ae(e)},searchModel:Be}),Object(x.jsx)(h.a,{title:"AGENCY.MASTER.BODY.TITLE",onCreate:function(){e.push("".concat(window.location.pathname,"/new"))},onDeleteMany:function(){return Z(!0)},selectedEntities:L,onSelectMany:F,entities:l,total:ne,columns:be,loading:ie,paginationParams:$,setPaginationParams:ee})]}),Object(x.jsx)(v.b,{path:"/agency/new",children:Object(x.jsx)(P.a,{moduleName:J,onModify:oe,formModel:vt,actions:Dt,entity:Ct,validation:_t,homePageUrl:S.b.agency})}),Object(x.jsx)(v.b,{path:"/agency/:code",children:function(e){e.history;var t=e.match;return Object(x.jsx)(P.a,{onModify:ce,moduleName:J,code:null===t||void 0===t?void 0:t.params.code,get:p,formModel:gt,actions:Dt,validation:_t,homePageUrl:S.b.agency})}})]}),Object(x.jsx)(C.a,{title:"SHIPPING_AGENCY.DETAIL_DIALOG.TITLE",moduleName:J,entity:w,onHide:function(){K(!1)},show:X,size:"lg",renderInfo:Oe})]})}}}]);
//# sourceMappingURL=28.dee4a76b.chunk.js.map