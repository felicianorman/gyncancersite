"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3420],{43420:($,m,s)=>{s.r(m),s.d(m,{default:()=>rs});var t=s(74081),e=s(15530),E=s(59461),D=s(12847),l=s(27279),L=s(93153),_=s(50086),i=s(32370),x=s(10701),d=s(93415),W=s(4987),C=s(73354),R=s(27875),S=s(48102),F=s(37472),N=s(74758),Q=s(70774),b=s(38566),T=s(38101),V=s(10989),z=s(86967),q=s(78031),ss=s(26784),ts=s(78665),k=s(36938),X=s(61020),es=s(51447),ns=s(73314),u=s(70627),as=s(61815),Ds=s(40464),Ms=s(64797),cs=s(85811),Os=s(30594),Ps=s(15816),gs=s(97442),ms=s(13576),hs=s(87830),Cs=s(47184),Rs=s(364),Ts=s(71563),us=s(49204),Ls=s(47853),xs=s(75719),vs=s(74919),As=s(29206),Bs=s(98934),js=s(43433),Is=s(8175);const os=()=>"todo empty role",G=({id:a,name:M,description:o,usersCount:v,icons:r,rowIndex:p,canUpdate:c})=>{const{formatMessage:A}=(0,X.Z)(),[,B]=r,O=A({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:v});return(0,t.jsxs)(L.Tr,{"aria-rowindex":p,...c?(0,e.X7)({fn:B.onClick}):{},children:[(0,t.jsx)(_.Td,{maxWidth:(0,e.Q1)(130),children:(0,t.jsx)(i.Z,{ellipsis:!0,textColor:"neutral800",children:M})}),(0,t.jsx)(_.Td,{maxWidth:(0,e.Q1)(250),children:(0,t.jsx)(i.Z,{ellipsis:!0,textColor:"neutral800",children:o})}),(0,t.jsx)(_.Td,{children:(0,t.jsx)(i.Z,{textColor:"neutral800",children:O})}),(0,t.jsx)(_.Td,{children:(0,t.jsx)(x.k,{justifyContent:"flex-end",...e.UW,children:r.map((P,j)=>P?(0,t.jsx)(d.x,{paddingLeft:j===0?0:1,children:(0,t.jsx)(W.h,{onClick:P.onClick,label:P.label,noBorder:!0,icon:P.icon})},P.label):null)})})]},a)};G.propTypes={id:u.number.isRequired,name:u.string.isRequired,description:u.string.isRequired,usersCount:u.number.isRequired,icons:u.array.isRequired,rowIndex:u.number.isRequired,canUpdate:u.bool},G.defaultProps={canUpdate:!1};const ls={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(a,M)=>(0,as.ZP)(a,o=>{switch(M.type){case"ON_REMOVE_ROLES":{o.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{o.shouldRefetchData=!0,o.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{o.shouldRefetchData=!1,o.roleToDelete=null,o.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{o.roleToDelete=M.id;break}default:return o}}),is=({canCreate:a,canDelete:M,canUpdate:o,refetchRoles:v})=>{const{formatMessage:r}=(0,X.Z)(),{formatAPIError:p}=(0,e.So)(),c=(0,e.lm)(),[A,B]=(0,l.useState)(!1),{push:O}=(0,es.k6)(),[{selectedRoles:P,showModalConfirmButtonLoading:j,roleToDelete:H},U]=(0,l.useReducer)(_s,ls),{post:Y}=(0,e.tg)(),J=async()=>{try{U({type:"ON_REMOVE_ROLES"}),await Y("/admin/roles/batch-delete",{ids:[H]}),await v(),U({type:"RESET_DATA_TO_DELETE"})}catch(n){c({type:"warning",message:p(n)})}I()},f=(0,l.useCallback)(n=>{O(`/settings/roles/duplicate/${n}`)},[O]),K=()=>O("/settings/roles/new"),y=(0,l.useCallback)(n=>{U({type:"SET_ROLE_TO_DELETE",id:n}),I()},[]),I=()=>B(n=>!n),g=(0,l.useCallback)(n=>{O(`/settings/roles/${n}`)},[O]),Z=(0,l.useCallback)((n,h)=>{n.preventDefault(),n.stopPropagation(),h.usersCount?c({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):y(h.id)},[c,y]),w=(0,l.useCallback)((n,h)=>{n.preventDefault(),n.stopPropagation(),f(h.id)},[f]),Es=(0,l.useCallback)(n=>[...a?[{onClick:h=>w(h,n),label:r({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,t.jsx)(q.Z,{})}]:[],...o?[{onClick:()=>g(n.id),label:r({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,t.jsx)(ss.Z,{})}]:[],...M?[{onClick:h=>Z(h,n),label:r({id:"global.delete",defaultMessage:"Delete"}),icon:(0,t.jsx)(ts.Z,{})}]:[]],[r,Z,w,g,a,o,M]);return{handleNewRoleClick:K,getIcons:Es,selectedRoles:P,isWarningDeleteAllOpened:A,showModalConfirmButtonLoading:j,handleToggleModal:I,handleDeleteData:J}},ds=()=>{const{formatMessage:a}=(0,X.Z)();(0,e.go)();const M=(0,E.v9)(D.s),[{query:o}]=(0,e.Kx)(),{isLoading:v,allowedActions:{canCreate:r,canDelete:p,canRead:c,canUpdate:A}}=(0,e.ss)(M.settings.roles),{roles:B,isLoading:O,refetch:P}=(0,ns.u)({filters:o?._q?{name:{$containsi:o._q}}:void 0},{cacheTime:0,enabled:!v&&c}),{handleNewRoleClick:j,getIcons:H,isWarningDeleteAllOpened:U,showModalConfirmButtonLoading:Y,handleToggleModal:J,handleDeleteData:f}=is({refetchRoles:P,canCreate:r,canDelete:p,canUpdate:A}),K=B.length+1,y=6;if(v)return(0,t.jsx)(C.o,{children:(0,t.jsx)(e.dO,{})});const I=a({id:"global.roles",defaultMessage:"roles"});return(0,t.jsxs)(C.o,{children:[(0,t.jsx)(e.SL,{name:"Roles"}),(0,t.jsx)(R.T,{primaryAction:r?(0,t.jsx)(S.z,{onClick:j,startIcon:(0,t.jsx)(k.Z,{}),size:"S",children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:I,subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),c&&(0,t.jsx)(F.Z,{startActions:(0,t.jsx)(e.m,{label:a({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:I})})}),c&&(0,t.jsxs)(N.D,{children:[(0,t.jsxs)(Q.i,{colCount:y,rowCount:K,footer:r?(0,t.jsx)(b.c,{onClick:j,icon:(0,t.jsx)(k.Z,{}),children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,t.jsx)(T.h,{children:(0,t.jsxs)(L.Tr,{"aria-rowindex":1,children:[(0,t.jsx)(_.Th,{children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(_.Th,{children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.description",defaultMessage:"Description"})})}),(0,t.jsx)(_.Th,{children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.users",defaultMessage:"Users"})})}),(0,t.jsx)(_.Th,{children:(0,t.jsx)(V.T,{children:a({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(z.p,{children:B?.map((g,Z)=>(0,t.jsx)(G,{id:g.id,name:g.name,description:g.description,usersCount:g.usersCount,icons:H(g),rowIndex:Z+2,canUpdate:A},g.id))})]}),!K&&!O&&(0,t.jsx)(os,{})]}),(0,t.jsx)(e.QH,{isOpen:U,onConfirm:f,isConfirmButtonLoading:Y,onToggleDialog:J})]})},rs=()=>{const a=(0,E.v9)(D.s);return(0,t.jsx)(e.O4,{permissions:a.settings.roles.main,children:(0,t.jsx)(ds,{})})}},73314:($,m,s)=>{s.d(m,{u:()=>l});var t=s(27279),e=s(15530),E=s(61020),D=s(40464);const l=(L={},_={})=>{const{id:i="",...x}=L,{get:d}=(0,e.kY)(),{locale:W}=(0,E.Z)(),C=(0,e.Xe)(W,{sensitivity:"base"}),{data:R,error:S,isError:F,isLoading:N,refetch:Q}=(0,D.useQuery)(["roles",i,x],async()=>{const{data:T}=await d(`/admin/roles/${i??""}`,{params:x});return T},_);return{roles:t.useMemo(()=>{let T=[];return R&&(Array.isArray(R.data)?T=R.data:T=[R.data]),[...T].sort((V,z)=>C.compare(V.name,z.name))},[R,C]),error:S,isError:F,isLoading:N,refetch:Q}}},37472:($,m,s)=>{s.d(m,{Z:()=>E});var t=s(74081),e=s(10701);const E=({startActions:D,endActions:l})=>!D&&!l?null:(0,t.jsxs)(e.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(e.k,{gap:2,wrap:"wrap",children:D}),(0,t.jsx)(e.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},38566:($,m,s)=>{s.d(m,{c:()=>x});var t=s(74081),e=s(19003),E=s(93415),D=s(84366),l=s(10701),L=s(32370);const _=(0,e.ZP)(E.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:d})=>d.colors.primary600};
  }
`,i=(0,e.ZP)(E.x)`
  border-radius: 0 0 ${({theme:d})=>d.borderRadius} ${({theme:d})=>d.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,x=({children:d,icon:W,...C})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(D.i,{}),(0,t.jsx)(i,{as:"button",background:"primary100",padding:5,...C,children:(0,t.jsxs)(l.k,{children:[(0,t.jsx)(_,{"aria-hidden":!0,background:"primary200",children:W}),(0,t.jsx)(E.x,{paddingLeft:3,children:(0,t.jsx)(L.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:d})})]})})]})}}]);
