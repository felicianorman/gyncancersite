"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5290],{5290:(U,m,s)=>{s.r(m),s.d(m,{default:()=>ct});var t=s(74081),o=s(15530),c=s(59461),x=s(12847),l=s(27279),S=s(51926),D=s(27997),L=s(73354),p=s(27875),r=s(37472),g=s(32370),b=s(48102),q=s(74758),k=s(93415),_=s(70774),tt=s(38566),st=s(38101),F=s(93153),i=s(50086),K=s(73411),et=s(10989),nt=s(86967),P=s(10701),w=s(19003);const $=w.ZP.div`
  background: ${({theme:a})=>a.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:a})=>a?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:a})=>a.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:a})=>a.spaces[1]};
    top: ${({theme:a})=>a.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ot=w.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:a})=>a.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,at=l.forwardRef(({label:a,onChange:u,onLabel:j="On",offLabel:h="Off",selected:C,visibleLabels:n=!1,...v},f)=>(0,t.jsx)(ot,{ref:f,role:"switch","aria-checked":C,"aria-label":a,onClick:u,visibleLabels:n,type:"button",...v,children:(0,t.jsxs)(P.k,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)("span",{children:j}),(0,t.jsx)("span",{children:h})]}),n&&(0,t.jsx)(k.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:C?"success600":"danger600",children:C?j:h})]})}));var z=s(4987),dt=s(6191),B=s(36938),H=s(78665),it=s(26784),lt=s(52448),rt=s(61020),O=s(40464),V=s(51447),St=s(64797),Dt=s(85811),Lt=s(30594),pt=s(15816),Pt=s(97442),$t=s(13576),Bt=s(87830),Ot=s(47184),Zt=s(364),At=s(71563),Wt=s(49204),It=s(47853),Rt=s(75719),Ut=s(74919),kt=s(29206),Ft=s(98934),Kt=s(43433),wt=s(8175);const ht=()=>{const[a,u]=(0,l.useState)(!1),[j,h]=(0,l.useState)([]),C=(0,c.v9)(x.s),{formatMessage:n}=(0,rt.Z)(),{formatAPIError:v}=(0,o.So)(),f=(0,o.lm)();(0,o.go)();const{push:gt}=(0,V.k6)(),{pathname:N}=(0,V.TH)(),{isLoading:xt,allowedActions:{canCreate:Z,canUpdate:Q,canDelete:Y}}=(0,o.ss)(C.settings.webhooks),{get:ut,post:mt,put:jt}=(0,o.kY)(),{notifyStatus:G}=(0,S.G)(),vt="webhooks",{isLoading:ft,data:y,error:A,refetch:X}=(0,O.useQuery)(vt,async()=>{const{data:{data:e}}=await ut("/admin/webhooks");return e});(0,l.useEffect)(()=>{if(A){f({type:"warning",message:v(A)});return}y&&G(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[y,A,f,n,G,v]);const J=(0,O.useMutation)(async()=>{await mt("/admin/webhooks/batch-delete",{ids:j})},{onError(e){f({type:"warning",message:v(e)}),u(!1)},onSuccess(){h([]),u(!1),X()}}),yt=(0,O.useMutation)(async({isEnabled:e,id:d})=>{const{id:E,...R}=y.find(Et=>Et.id===d)??{},Tt={...R,isEnabled:e};await jt(`/admin/webhooks/${d}`,Tt)},{onError(e){f({type:"warning",message:v(e)})},onSuccess(){X()}}),Ct=()=>J.mutate(),Mt=e=>h(e?y.map(d=>d.id):[]),bt=(e,d)=>h(e?E=>[...E,d]:E=>E.filter(R=>R!==d)),W=e=>gt(`${N}/${e}`),I=xt||ft,T=y?.length??0,M=j.length;return(0,t.jsxs)(D.A,{children:[(0,t.jsx)(o.SL,{name:"Webhooks"}),(0,t.jsxs)(L.o,{"aria-busy":I,children:[(0,t.jsx)(p.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:Z&&!I&&(0,t.jsx)(o.Qj,{startIcon:(0,t.jsx)(B.Z,{}),variant:"default",to:`${N}/create`,size:"S",children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),M>0&&Y&&(0,t.jsx)(r.Z,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",children:n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:M})}),(0,t.jsx)(b.z,{onClick:()=>u(!0),startIcon:(0,t.jsx)(H.Z,{}),size:"L",variant:"danger-light",children:n({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,t.jsx)(q.D,{children:I?(0,t.jsx)(k.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.dO,{})}):T>0?(0,t.jsxs)(_.i,{colCount:5,rowCount:T+1,footer:(0,t.jsx)(tt.c,{onClick:()=>Z?W("create"):{},icon:(0,t.jsx)(B.Z,{}),children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,t.jsx)(st.h,{children:(0,t.jsxs)(F.Tr,{children:[(0,t.jsx)(i.Th,{children:(0,t.jsx)(K.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:M>0&&M<T,value:M===T,onValueChange:Mt})}),(0,t.jsx)(i.Th,{width:"20%",children:(0,t.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(i.Th,{width:"60%",children:(0,t.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,t.jsx)(i.Th,{width:"20%",children:(0,t.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,t.jsx)(i.Th,{children:(0,t.jsx)(et.T,{children:n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(nt.p,{children:y.map(e=>(0,t.jsxs)(F.Tr,{...(0,o.X7)({fn:()=>W(e.id),condition:Q}),children:[(0,t.jsx)(i.Td,{...o.UW,children:(0,t.jsx)(K.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:d=>bt(d,e.id),name:"select"})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(g.Z,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(g.Z,{textColor:"neutral800",children:e.url})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(P.k,{children:(0,t.jsx)(at,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:d=>{d.stopPropagation(),yt.mutate({isEnabled:!e.isEnabled,id:e.id})},visibleLabels:!0})})}),(0,t.jsx)(i.Td,{children:(0,t.jsxs)(P.k,{gap:1,children:[Q&&(0,t.jsx)(z.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,t.jsx)(it.Z,{}),noBorder:!0}),Y&&(0,t.jsx)(z.h,{onClick:d=>{d.stopPropagation(),h([e.id]),u(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,t.jsx)(H.Z,{}),noBorder:!0})]})})]},e.id))})]}):(0,t.jsx)(dt.x,{icon:(0,t.jsx)(lt.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,t.jsx)(b.z,{variant:"secondary",startIcon:(0,t.jsx)(B.Z,{}),onClick:()=>Z?W("create"):{},children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,t.jsx)(o.QH,{isOpen:a,onToggleDialog:()=>u(e=>!e),onConfirm:Ct,isConfirmButtonLoading:J.isLoading})]})},ct=()=>{const a=(0,c.v9)(x.s);return(0,t.jsx)(o.O4,{permissions:a.settings.webhooks.main,children:(0,t.jsx)(ht,{})})}},37472:(U,m,s)=>{s.d(m,{Z:()=>c});var t=s(74081),o=s(10701);const c=({startActions:x,endActions:l})=>!x&&!l?null:(0,t.jsxs)(o.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(o.k,{gap:2,wrap:"wrap",children:x}),(0,t.jsx)(o.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},38566:(U,m,s)=>{s.d(m,{c:()=>p});var t=s(74081),o=s(19003),c=s(93415),x=s(84366),l=s(10701),S=s(32370);const D=(0,o.ZP)(c.x)`
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
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,L=(0,o.ZP)(c.x)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,p=({children:r,icon:g,...b})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(x.i,{}),(0,t.jsx)(L,{as:"button",background:"primary100",padding:5,...b,children:(0,t.jsxs)(l.k,{children:[(0,t.jsx)(D,{"aria-hidden":!0,background:"primary200",children:g}),(0,t.jsx)(c.x,{paddingLeft:3,children:(0,t.jsx)(S.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:r})})]})})]})}}]);
