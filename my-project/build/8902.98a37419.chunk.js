(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8902],{29520:N=>{function Z(d,o,g,j){for(var C=-1,O=d==null?0:d.length;++C<O;){var x=d[C];o(j,x,g(x),d)}return j}N.exports=Z},98694:(N,Z,d)=>{var o=d(1107);function g(j,C,O,x){return o(j,function(B,A,L){C(x,B,O(B),L)}),x}N.exports=g},37177:(N,Z,d)=>{var o=d(29520),g=d(98694),j=d(90040),C=d(26126);function O(x,B){return function(A,L){var Q=C(A)?o:g,ee=B?B():{};return Q(A,x,j(L,2),ee)}}N.exports=O},39738:(N,Z,d)=>{var o=d(93367),g=1/0;function j(C){var O=C==null?0:C.length;return O?o(C,g):[]}N.exports=j},63799:(N,Z,d)=>{var o=d(71041),g=d(37177),j=Object.prototype,C=j.hasOwnProperty,O=g(function(x,B,A){C.call(x,A)?x[A].push(B):o(x,A,[B])});N.exports=O},68902:(N,Z,d)=>{"use strict";d.d(Z,{P:()=>Tt,a:()=>Dt,u:()=>vt});var o=d(74081),g=d(27279),j=d(48102),C=d(10701),O=d(32370),x=d(93415),B=d(61181),A=d(5938),L=d(6918),Q=d(15244),ee=d(35250),H=d(73411),D=d(22572),R=d(23298),k=d(74577),G=d(45322),w=d(24920),le=d(34642),de=d(69878),se=d(94098),X=d(61908),W=d(15530),J=d(10131),F=d(10124),r=d(70627),K=d(61020),Re=d(76873),be=d(8243),_=d(19003),ce=d(35318),Pe=d(10411),Te=d(57853),Ge=d(78582),T=d(98934),je=d(74919),ve=d(89486),Oe=d(82298),he=d(61815),ue=d(63799),Ce=d(51943),Os=d(39738),ne=d(3243),Es=d(87830),Y=d(43433),De=d(8175),Xe=d(40464);const[Ms,As]=(0,Re.k)("PermissionsDataManager"),pe=()=>As("usePermissionsDataManager"),Rs=_.ZP.div`
  position: relative;

  ${({hasConditions:e,disabled:s,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${s?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,$e=({onClick:e,className:s,hasConditions:n,variant:t})=>{const{formatMessage:i}=(0,K.Z)();return(0,o.jsx)(Rs,{hasConditions:n,className:s,children:(0,o.jsx)(j.z,{variant:t,startIcon:(0,o.jsx)(ce.Z,{}),onClick:e,children:i({id:"global.settings",defaultMessage:"Settings"})})})};$e.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},$e.propTypes={onClick:r.func.isRequired,className:r.string,hasConditions:r.bool,variant:r.string};const Ee=(0,_.ZP)($e)``,Ts=e=>Object.values(e).map(s=>Object.entries(s).filter(([,n])=>n).map(([n])=>n)).flat(),vs=e=>e.reduce((s,[n,t])=>(s.push({label:Ce(n),children:t.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Ds=(e,s)=>e.map(([,n])=>n).flat().reduce((n,t)=>({[t.id]:s.includes(t.id),...n}),{}),Ye=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s,isGrey:n,label:t,name:i,onChange:a,value:l})=>{const{formatMessage:c}=(0,K.Z)(),p=u=>{a(i,Ds(e,u))};return(0,o.jsxs)(C.k,{as:"li",background:n?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,o.jsxs)(C.k,{paddingLeft:6,style:{width:180},children:[(0,o.jsxs)(O.Z,{variant:"sigma",textColor:"neutral600",children:[c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,o.jsx)(O.Z,{variant:"sigma",title:t,textColor:"primary600",ellipsis:!0,children:c({id:`Settings.roles.form.permissions.${t.toLowerCase()}`,defaultMessage:t})}),(0,o.jsxs)(O.Z,{variant:"sigma",textColor:"neutral600",children:["\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,o.jsx)(x.x,{style:{maxWidth:430,width:"100%"},children:(0,o.jsx)(B.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Ts(l),options:vs(e),disabled:s})})]})};Ye.propTypes={arrayOfOptionsGroupedByCategory:r.array.isRequired,isFormDisabled:r.bool.isRequired,isGrey:r.bool.isRequired,label:r.string.isRequired,name:r.string.isRequired,value:r.object.isRequired,onChange:r.func.isRequired};const $s=(e,s)=>e.reduce((n,t)=>(n[t.id]=T(s,t.id,!1),n),{}),Ss=(e,s)=>e.reduce((n,t)=>{const[i,a]=t,l=$s(a,s);return n[i]=l,n},{}),Ls=(e,s,n)=>e.reduce((t,i)=>{const a=T(s,[...i.pathToConditionsObject,"conditions"],{}),l=Ss(n,a);return t[i.pathToConditionsObject.join("..")]=l,t},{}),Se=({actions:e,headerBreadCrumbs:s,isFormDisabled:n,onClosed:t,onToggle:i})=>{const{formatMessage:a}=(0,K.Z)(),{availableConditions:l,modifiedData:c,onChangeConditions:p}=pe(),u=(0,g.useMemo)(()=>Object.entries(ue(l,"category")),[l]),m=e.filter(({isDisplayed:h,hasSomeActionsSelected:M,hasAllActionsSelected:P})=>h&&(M||P)),y=(0,g.useMemo)(()=>Ls(m,c,u),[m,c,u]),[b,$]=(0,g.useState)(y),E=(h,M)=>{$((0,he.ZP)(P=>{P[h]||(P[h]={}),P[h].default||(P[h].default={}),P[h].default=M}))},f=()=>{const h=Object.entries(b).reduce((M,P)=>{const[v,V]=P,I=Object.values(V).reduce((U,S)=>({...U,...S}),{});return M[v]=I,M},{});p(h),i()};return(0,o.jsxs)(A.P,{labelledBy:"condition-modal-breadcrumbs",onClose:t,children:[(0,o.jsx)(L.x,{children:(0,o.jsx)(ve.O,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((h,M,P)=>(0,o.jsx)(Oe.$,{isCurrent:M===P.length-1,children:Ce(a({id:h,defaultMessage:h}))},h))})}),(0,o.jsxs)(Q.f,{children:[m.length===0&&(0,o.jsx)(O.Z,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,o.jsx)("ul",{children:m.map(({actionId:h,label:M,pathToConditionsObject:P},v)=>{const V=P.join("..");return(0,o.jsx)(Ye,{arrayOfOptionsGroupedByCategory:u,label:M,isFormDisabled:n,isGrey:v%2===0,name:V,onChange:E,value:T(b,V,{})},h)})})]}),(0,o.jsx)(ee.m,{startActions:(0,o.jsx)(j.z,{variant:"tertiary",onClick:i,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,o.jsx)(j.z,{onClick:f,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})};Se.propTypes={actions:r.arrayOf(r.shape({actionId:r.string.isRequired,checkboxName:r.string,hasSomeActionsSelected:r.bool.isRequired,hasAllActionsSelected:r.bool,isDisplayed:r.bool.isRequired,label:r.string})).isRequired,headerBreadCrumbs:r.arrayOf(r.string).isRequired,isFormDisabled:r.bool.isRequired,onClosed:r.func.isRequired,onToggle:r.func.isRequired};const ge=`${120/16}rem`,Le=`${200/16}rem`,Me=`${53/16}rem`,Ie=_.ZP.div`
  width: ${ge};
`,ze=(0,_.ZP)(C.k)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,Be=({children:e,isCollapsable:s,isActive:n,isFormDisabled:t,label:i,onChange:a,onClick:l,checkboxName:c,someChecked:p,value:u})=>{const{formatMessage:m}=(0,K.Z)();return(0,o.jsxs)(C.k,{alignItems:"center",paddingLeft:6,style:{width:Le,flexShrink:0},children:[(0,o.jsx)(x.x,{paddingRight:2,children:(0,o.jsx)(H.C,{name:c,"aria-label":m({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:t,onValueChange:y=>a({target:{name:c,value:y}}),indeterminate:p,value:u})}),(0,o.jsxs)(ze,{title:i,alignItems:"center",isCollapsable:s,...s&&{onClick:l,"aria-expanded":n,onKeyDown:({key:y})=>(y==="Enter"||y===" ")&&l(),tabIndex:0,role:"button"},children:[(0,o.jsx)(O.Z,{fontWeight:n?"bold":"",textColor:n?"primary600":"neutral800",ellipsis:!0,children:Ce(i)}),e]})]})};Be.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Be.propTypes={checkboxName:r.string,children:r.node,label:r.string.isRequired,isCollapsable:r.bool,isFormDisabled:r.bool.isRequired,onChange:r.func,onClick:r.func.isRequired,someChecked:r.bool,value:r.bool,isActive:r.bool.isRequired};const Qe=(0,g.memo)(Be),oe=e=>ne(e)?Os(Object.values(e).map(s=>ne(s)?oe(s):s)):[],ke=e=>e?Object.keys(e).reduce((s,n)=>(n!=="conditions"&&(s[n]=e[n]),s),{}):null,ie=e=>{const s=ke(e),n=oe(s);if(!n.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const t=n.every(a=>a),i=n.some(a=>a)&&!t;return{hasAllActionsSelected:t,hasSomeActionsSelected:i}},xe=(0,_.ZP)(Pe.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,ye=e=>`
  ${O.Z} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold}
  }
  ${xe} {
    display: block;
    path {
      fill: ${e.colors.primary600}
    };
  }
`,Is=(e,s,n)=>e.map(({actionId:t,isDisplayed:i,applyToProperties:a,label:l})=>{if(!i)return{actionId:t,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...n.split(".."),t],p=F(a)?[...c,"properties","enabled"]:c,u=p.join(".."),m=T(s,[...c,"conditions"],null),y=oe(m).some(f=>f);if(F(a)){const f=T(s,p,!1);return{actionId:t,checkboxName:u,hasAllActionsSelected:f,hasConditions:y,hasSomeActionsSelected:f,isDisplayed:i,isParentCheckbox:!1,label:l,pathToConditionsObject:c}}const b=T(s,p,null),{hasAllActionsSelected:$,hasSomeActionsSelected:E}=ie(b);return{actionId:t,checkboxName:u,hasAllActionsSelected:$,hasConditions:y,hasSomeActionsSelected:E,isDisplayed:i,isParentCheckbox:!0,label:l,pathToConditionsObject:c}}),We=(e,s)=>`
  ${Je} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${ss} {
    display: flex;
  }
  ${Ee} {
    display: block;
  }
  &:hover {
   ${ye(e)}
  }

  &:focus-within {
    ${({theme:n,isActive:t})=>We(n,t)}
  }
  
`,Je=_.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Me};
  background-color: ${({isGrey:e,theme:s})=>e?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Bs=_.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${Ee} {
    display: none;
  }
  ${({isActive:e,theme:s})=>e&&We(s,e)}
  &:hover {
    ${({theme:e,isActive:s})=>We(e,s)}
  }
`,es=(0,_.ZP)(C.k)`
  width: ${ge};
  position: relative;
`,ss=(0,_.ZP)(x.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,ts=_.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.primary600};
`,ks=(0,_.ZP)(x.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ns=({availableActions:e,isActive:s,isGrey:n,isFormDisabled:t,label:i,onClickToggle:a,pathToData:l})=>{const[c,p]=(0,g.useState)(!1),{formatMessage:u}=(0,K.Z)(),{modifiedData:m,onChangeParentCheckbox:y,onChangeSimpleCheckbox:b}=pe(),$=()=>{p(I=>!I)},E=()=>{p(!1)},f=T(m,l.split(".."),{}),h=(0,g.useMemo)(()=>Object.keys(f).reduce((I,U)=>(I[U]=je(f[U],"conditions"),I),{}),[f]),{hasAllActionsSelected:M,hasSomeActionsSelected:P}=ie(h),v=(0,g.useMemo)(()=>Is(e,m,l),[e,m,l]),V=v.some(({hasConditions:I})=>I);return(0,o.jsxs)(Bs,{isActive:s,children:[(0,o.jsxs)(Je,{isGrey:n,children:[(0,o.jsx)(Qe,{isCollapsable:!0,isFormDisabled:t,label:i,checkboxName:l,onChange:y,onClick:a,someChecked:P,value:M,isActive:s,children:(0,o.jsx)(ss,{paddingLeft:2,children:s?(0,o.jsx)(Te.Z,{}):(0,o.jsx)(Ge.Z,{})})}),(0,o.jsx)(C.k,{style:{flex:1},children:v.map(({actionId:I,hasConditions:U,hasAllActionsSelected:S,hasSomeActionsSelected:z,isDisplayed:me,isParentCheckbox:q,checkboxName:te,label:_e})=>me?q?(0,o.jsxs)(es,{justifyContent:"center",alignItems:"center",children:[U&&(0,o.jsx)(ts,{}),(0,o.jsx)(H.C,{disabled:t,name:te,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${_e} ${i}`}),onValueChange:re=>{y({target:{name:te,value:re}})},indeterminate:z,value:S})]},I):(0,o.jsxs)(es,{justifyContent:"center",alignItems:"center",children:[U&&(0,o.jsx)(ts,{}),(0,o.jsx)(H.C,{disabled:t,indeterminate:U,name:te,onValueChange:re=>{b({target:{name:te,value:re}})},value:S})]},I):(0,o.jsx)(Ie,{},I))}),c&&(0,o.jsx)(Se,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:v,isFormDisabled:t,onClosed:E,onToggle:$})]}),(0,o.jsx)(ks,{children:(0,o.jsx)(Ee,{onClick:$,hasConditions:V})})]})};ns.propTypes={availableActions:r.array.isRequired,isActive:r.bool.isRequired,isGrey:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggle:r.func.isRequired,pathToData:r.string.isRequired};const Ws=_.ZP.span`
  color: ${({theme:e})=>e.colors.danger700};
  padding-left: ${({theme:e})=>e.spaces[1]}px;
`,os=()=>(0,o.jsx)(Ws,{children:"*"}),Ks=(e,s)=>e.map(n=>{const t=Array.isArray(n.subjects)&&n.subjects.indexOf(s)!==-1;return{...n,isDisplayed:t}}),Zs=(0,_.ZP)(x.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Us=_.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,Ke=e=>(0,o.jsx)(Zs,{children:(0,o.jsx)(Us,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})});Ke.defaultProps={fill:"primary200"},Ke.propTypes={fill:r.string};const Fs=(0,g.memo)(Ke),is=(0,_.ZP)(C.k)`
  width: ${ge};
  position: relative;
`,Ns=(0,_.ZP)(C.k)`
  height: ${Me};
`,Vs=(0,_.ZP)(x.x)`
  padding-left: ${31/16}rem;
`,ws=(0,_.ZP)(x.x)`
  border-left: ${({isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,qs=(0,_.ZP)(C.k)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${xe} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${ye(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&ye(s)};
`,Hs=_.ZP.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Ze=({childrenForm:e,isFormDisabled:s,recursiveLevel:n,pathToDataFromActionRow:t,propertyActions:i,parentName:a,propertyName:l})=>{const{formatMessage:c}=(0,K.Z)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:m}=pe(),[y,b]=(0,g.useState)(null),$=f=>{b(h=>h===f?null:f)},E=(0,g.useMemo)(()=>y?e.find(({value:f})=>f===y):null,[y,e]);return(0,o.jsxs)(Vs,{children:[(0,o.jsx)(Hs,{}),e.map(({label:f,value:h,required:M,children:P},v)=>{const V=v+1<e.length,I=Array.isArray(P),U=y===h;return(0,o.jsxs)(ws,{isVisible:V,children:[(0,o.jsxs)(Ns,{children:[(0,o.jsx)(Fs,{color:"primary200"}),(0,o.jsxs)(C.k,{style:{flex:1},children:[(0,o.jsx)(qs,{level:n,isActive:U,isCollapsable:I,children:(0,o.jsxs)(ze,{alignItems:"center",isCollapsable:I,...I&&{onClick:()=>$(h),"aria-expanded":U,onKeyDown:({key:S})=>(S==="Enter"||S===" ")&&$(h),tabIndex:0,role:"button"},title:f,children:[(0,o.jsx)(O.Z,{ellipsis:!0,children:Ce(f)}),M&&(0,o.jsx)(os,{}),(0,o.jsx)(xe,{$isActive:U})]})}),(0,o.jsx)(C.k,{style:{flex:1},children:i.map(({actionId:S,label:z,isActionRelatedToCurrentProperty:me})=>{if(!me)return(0,o.jsx)(Ie,{},S);const q=[...t.split(".."),S,"properties",l,...a.split(".."),h],te=T(p,q,!1);if(!P)return(0,o.jsx)(is,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.C,{disabled:s,name:q.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${f} ${z}`}),onValueChange:ae=>{m({target:{name:q.join(".."),value:ae}})},value:te})},z);const{hasAllActionsSelected:_e,hasSomeActionsSelected:re}=ie(te);return(0,o.jsx)(is,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.C,{disabled:s,name:q.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${f} ${z}`}),onValueChange:ae=>{u({target:{name:q.join(".."),value:ae}})},value:_e,indeterminate:re},z)},z)})})]})]}),E&&U&&(0,o.jsx)(x.x,{paddingBottom:2,children:(0,o.jsx)(Ze,{isFormDisabled:s,parentName:`${a}..${h}`,pathToDataFromActionRow:t,propertyActions:i,propertyName:l,recursiveLevel:n+1,childrenForm:E.children})})]},h)})]})};Ze.propTypes={childrenForm:r.array.isRequired,isFormDisabled:r.bool.isRequired,parentName:r.string.isRequired,pathToDataFromActionRow:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,recursiveLevel:r.number.isRequired};const Gs=(0,g.memo)(Ze),Xs=e=>e.reduce((n,t)=>(t.isActionRelatedToCurrentProperty&&n.push(t.actionId),n),[]),Ys=(e,s,n,t,i)=>{const l=Xs(e).reduce((c,p)=>{const u=[...n.split(".."),p,"properties",t,i],m=T(s,u,!1);return c[p]=m,c},{});return ie(l)},rs=(0,_.ZP)(C.k)`
  width: ${ge};
  position: relative;
`,zs=(0,_.ZP)(C.k)`
  height: ${Me};
  flex: 1;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${xe} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${ye(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&ye(s)};
`,Ue=({childrenForm:e,label:s,isFormDisabled:n,name:t,required:i,pathToData:a,propertyActions:l,propertyName:c,isOdd:p})=>{const{formatMessage:u}=(0,K.Z)(),[m,y]=(0,g.useState)(null),{modifiedData:b,onChangeCollectionTypeLeftActionRowCheckbox:$,onChangeParentCheckbox:E,onChangeSimpleCheckbox:f}=pe(),h=m===t,M=(0,g.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=M.length>0,v=(0,g.useCallback)(()=>{P&&y(S=>S===t?null:t)},[P,t]),V=({target:{value:S}})=>{$(a,c,t,S)},{hasAllActionsSelected:I,hasSomeActionsSelected:U}=(0,g.useMemo)(()=>Ys(l,b,a,c,t),[l,b,a,c,t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(zs,{alignItems:"center",isCollapsable:P,isActive:h,background:p?"neutral100":"neutral0",children:(0,o.jsxs)(C.k,{children:[(0,o.jsxs)(Qe,{onChange:V,onClick:v,isCollapsable:P,isFormDisabled:n,label:s,someChecked:U,value:I,isActive:h,children:[i&&(0,o.jsx)(os,{}),(0,o.jsx)(xe,{$isActive:h})]}),(0,o.jsx)(C.k,{children:l.map(({label:S,isActionRelatedToCurrentProperty:z,actionId:me})=>{if(!z)return(0,o.jsx)(Ie,{},S);const q=[...a.split(".."),me,"properties",c,t];if(!P){const ae=T(b,q,!1);return(0,o.jsx)(rs,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.C,{disabled:n,name:q.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${S}`}),onValueChange:$t=>{f({target:{name:q.join(".."),value:$t}})},value:ae})},me)}const te=T(b,q,{}),{hasAllActionsSelected:_e,hasSomeActionsSelected:re}=ie(te);return(0,o.jsx)(rs,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.C,{disabled:n,name:q.join(".."),onValueChange:ae=>{E({target:{name:q.join(".."),value:ae}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${S}`}),value:_e,indeterminate:re})},S)})})]})}),h&&(0,o.jsx)(Gs,{childrenForm:M,isFormDisabled:n,parentName:t,pathToDataFromActionRow:a,propertyName:c,propertyActions:l,recursiveLevel:0})]})};Ue.defaultProps={childrenForm:[],required:!1},Ue.propTypes={childrenForm:r.array,label:r.string.isRequired,isFormDisabled:r.bool.isRequired,name:r.string.isRequired,pathToData:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,required:r.bool,isOdd:r.bool.isRequired};const Qs=(0,g.memo)(Ue),as=(0,_.ZP)(C.k)`
  width: ${ge};
  flex-shrink: 0;
`,Js=(0,_.ZP)(C.k)`
  width: ${Le};
  height: ${Me};
  flex-shrink: 0;
`,ls=({headers:e,label:s})=>{const{formatMessage:n}=(0,K.Z)(),t=n({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return(0,o.jsxs)(C.k,{children:[(0,o.jsx)(Js,{alignItems:"center",paddingLeft:6,children:(0,o.jsx)(O.Z,{variant:"sigma",textColor:"neutral500",children:t})}),e.map(i=>i.isActionRelatedToCurrentProperty?(0,o.jsx)(as,{justifyContent:"center",children:(0,o.jsx)(O.Z,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label})})},i.label):(0,o.jsx)(as,{},i.label))]})};ls.propTypes={headers:r.arrayOf(r.shape({label:r.string.isRequired,isActionRelatedToCurrentProperty:r.bool.isRequired})).isRequired,label:r.string.isRequired};const et=(e,s)=>e.map(n=>{const t=Array.isArray(n.applyToProperties)&&n.applyToProperties.indexOf(s)!==-1&&n.isDisplayed;return{label:n.label,actionId:n.actionId,isActionRelatedToCurrentProperty:t}}),st=_.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,ds=({availableActions:e,childrenForm:s,isFormDisabled:n,label:t,pathToData:i,propertyName:a})=>{const l=(0,g.useMemo)(()=>et(e,a),[e,a]);return(0,o.jsxs)(st,{children:[(0,o.jsx)(ls,{label:t,headers:l}),(0,o.jsx)(x.x,{children:s.map(({children:c,label:p,value:u,required:m},y)=>(0,o.jsx)(Qs,{childrenForm:c,label:p,isFormDisabled:n,name:u,required:m,propertyActions:l,pathToData:i,propertyName:a,isOdd:y%2===0},u))})]})};ds.propTypes={childrenForm:r.array.isRequired,availableActions:r.array.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,pathToData:r.string.isRequired,propertyName:r.string.isRequired};const tt=_.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:e,isActive:s})=>s&&`border: 1px solid ${e.colors.primary600};`}
`,cs=({allActions:e,contentTypeName:s,label:n,index:t,isActive:i,isFormDisabled:a,onClickToggleCollapse:l,pathToData:c,properties:p})=>{const u=(0,g.useCallback)(()=>{l(s)},[s,l]),m=(0,g.useMemo)(()=>Ks(e,s),[e,s]);return(0,o.jsxs)(tt,{isActive:i,children:[(0,o.jsx)(ns,{availableActions:m,isActive:i,isGrey:t%2===0,isFormDisabled:a,label:n,onClickToggle:u,pathToData:c}),i&&p.map(({label:y,value:b,children:$})=>(0,o.jsx)(ds,{availableActions:m,childrenForm:$,isFormDisabled:a,label:y,pathToData:c,propertyName:b},b))]})};cs.propTypes={allActions:r.array.isRequired,contentTypeName:r.string.isRequired,index:r.number.isRequired,isActive:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggleCollapse:r.func.isRequired,pathToData:r.string.isRequired,properties:r.array.isRequired};const Fe=({actions:e,isFormDisabled:s,pathToData:n,subjects:t})=>{const[i,a]=(0,g.useState)(null),l=c=>{a(i===c?null:c)};return t.map(({uid:c,label:p,properties:u},m)=>(0,o.jsx)(cs,{allActions:e,contentTypeName:c,label:p,isActive:i===c,isFormDisabled:s,index:m,onClickToggleCollapse:l,pathToData:`${n}..${c}`,properties:u},c))};Fe.defaultProps={actions:[],subjects:[]},Fe.propTypes={actions:r.array.isRequired,isFormDisabled:r.bool.isRequired,pathToData:r.string.isRequired,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))};const nt=(0,g.memo)(Fe),ot=e=>e.filter(({subjects:s})=>s&&s.length),it=e=>e.map(({actionId:s})=>s),rt=(e,s)=>e.reduce((n,t)=>(Object.keys(s).forEach(i=>{const a=T(s,[i,t],{}),l={[i]:ke(a)};n[t]?n[t]={...n[t],...l}:n[t]=l}),n),{}),at=(e,s)=>{const n=it(e),t=rt(n,s);return Object.keys(t).reduce((a,l)=>(a[l]=ie(t[l]),a),{})},lt=(0,_.ZP)(C.k)`
  width: ${ge};
  flex-shrink: 0;
`,Ne=({actions:e,isFormDisabled:s,kind:n})=>{const{formatMessage:t}=(0,K.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:a}=pe(),l=(0,g.useMemo)(()=>ot(e),[e]),c=(0,g.useMemo)(()=>at(l,i[n]),[i,l,n]);return(0,o.jsx)(x.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Le},children:(0,o.jsx)(C.k,{gap:0,children:l.map(({label:p,actionId:u})=>(0,o.jsxs)(lt,{direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,o.jsx)(O.Z,{variant:"sigma",textColor:"neutral500",children:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),(0,o.jsx)(H.C,{disabled:s,onValueChange:m=>{a(n,u,m)},name:u,"aria-label":t({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:T(c,[u,"hasAllActionsSelected"],!1),indeterminate:T(c,[u,"hasSomeActionsSelected"],!1)})]},u))})})};Ne.defaultProps={actions:[]},Ne.propTypes={actions:r.arrayOf(r.shape({label:r.string.isRequired,actionId:r.string.isRequired,subjects:r.array.isRequired})),isFormDisabled:r.bool.isRequired,kind:r.string.isRequired};const dt=(0,g.memo)(Ne),ct=(0,_.ZP)(x.x)`
  overflow-x: auto;
`,us=({isFormDisabled:e,kind:s,layout:{actions:n,subjects:t}})=>{const i=be([...t],"label");return(0,o.jsxs)(ct,{background:"neutral0",children:[(0,o.jsx)(dt,{actions:n,kind:s,isFormDisabled:e}),(0,o.jsx)(nt,{actions:n,isFormDisabled:e,pathToData:s,subjects:i})]})};us.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.shape({actions:r.array,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))}).isRequired};const ps=(0,g.memo)(us),ut=(e,s,n)=>e.map(t=>{const i=[...n,t.action,"properties","enabled"],a=T(s,i,!1),l=T(s,[...n,t.action,"conditions"],{}),c=oe(l).some(p=>p);return{...t,isDisplayed:a,checkboxName:i.join(".."),hasSomeActionsSelected:a,value:a,hasConditions:c,label:t.displayName,actionId:t.action,pathToConditionsObject:[...n,t.action]}}),pt=e=>{const s=Object.entries(e).reduce((t,i)=>{const[a,{conditions:l}]=i;return t[a]=l,t},{});return oe(s).some(t=>t)},gt=_.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,mt=_.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:s,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${s?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,gs=({categoryName:e,isFormDisabled:s,subCategoryName:n,actions:t,pathToData:i})=>{const[a,l]=(0,g.useState)(!1),{modifiedData:c,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=pe(),{formatMessage:m}=(0,K.Z)(),y=T(c,i,{}),b=(0,g.useMemo)(()=>Object.keys(y).reduce((v,V)=>(v[V]=ke(y[V]),v),{}),[y]),{hasAllActionsSelected:$,hasSomeActionsSelected:E}=ie(b),f=()=>{l(v=>!v)},h=()=>{l(!1)},M=ut(t,c,i),P=pt(T(c,[...i],{}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(x.x,{children:[(0,o.jsxs)(C.k,{justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(x.x,{paddingRight:4,children:(0,o.jsx)(O.Z,{variant:"sigma",textColor:"neutral600",children:n})}),(0,o.jsx)(gt,{}),(0,o.jsx)(x.x,{paddingLeft:4,children:(0,o.jsx)(D.X,{name:i.join(".."),disabled:s,onValueChange:v=>{p({target:{name:i.join(".."),value:v}})},indeterminate:E,value:$,children:m({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,o.jsxs)(C.k,{paddingTop:6,paddingBottom:6,children:[(0,o.jsx)(R.r,{gap:2,style:{flex:1},children:M.map(({checkboxName:v,value:V,action:I,displayName:U,hasConditions:S})=>(0,o.jsx)(k.P,{col:3,children:(0,o.jsx)(mt,{disabled:s,hasConditions:S,children:(0,o.jsx)(D.X,{name:v,disabled:s,onValueChange:z=>{u({target:{name:v,value:z}})},value:V,children:U})})},I))}),(0,o.jsx)(Ee,{hasConditions:P,onClick:f})]})]}),a&&(0,o.jsx)(Se,{headerBreadCrumbs:[e,n],actions:M,isFormDisabled:s,onClosed:h,onToggle:f})]})};gs.propTypes={actions:r.array.isRequired,categoryName:r.string.isRequired,isFormDisabled:r.bool.isRequired,subCategoryName:r.string.isRequired,pathToData:r.array.isRequired};const Ve=({childrenForm:e,kind:s,name:n,isOpen:t,isFormDisabled:i,isWhite:a,onOpenCategory:l,pathToData:c})=>{const{formatMessage:p}=(0,K.Z)(),u=()=>{l(n)},m=(0,g.useMemo)(()=>n.split("::").pop(),[n]);return(0,o.jsxs)(G.U,{expanded:t,onToggle:u,id:`accordion-${n}`,variant:a?"primary":"secondary",children:[(0,o.jsx)(w.B,{title:Ce(m),description:`${p({id:"Settings.permissions.category"},{category:m})} ${s==="plugins"?"plugin":s}`}),(0,o.jsx)(le.v,{children:(0,o.jsx)(x.x,{padding:6,children:e.map(({actions:y,subCategoryName:b,subCategoryId:$})=>(0,o.jsx)(gs,{actions:y,categoryName:m,isFormDisabled:i,subCategoryName:b,pathToData:[...c,$]},b))})})]})};Ve.defaultProps={},Ve.propTypes={childrenForm:r.array.isRequired,isOpen:r.bool.isRequired,isFormDisabled:r.bool.isRequired,isWhite:r.bool.isRequired,kind:r.string.isRequired,name:r.string.isRequired,onOpenCategory:r.func.isRequired,pathToData:r.array.isRequired};const we=({isFormDisabled:e,kind:s,layout:n})=>{const[t,i]=(0,g.useState)(null),a=l=>{i(l===t?null:l)};return(0,o.jsx)(x.x,{padding:6,background:"neutral0",children:n.map(({category:l,categoryId:c,childrenForm:p},u)=>(0,o.jsx)(Ve,{childrenForm:p,kind:s,isFormDisabled:e,isOpen:t===l,isWhite:u%2===1,name:l,onOpenCategory:a,pathToData:[s,c]},l))})};we.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.arrayOf(r.shape({category:r.string.isRequired,categoryId:r.string.isRequired,childrenForm:r.arrayOf(r.shape({actions:r.array.isRequired})).isRequired}).isRequired).isRequired};const ms=(e,s,n)=>e.find(t=>t.action===s&&t.subject===n),hs=(e,s=[])=>e.reduce((n,t)=>(n[t.id]=s.indexOf(t.id)!==-1,n),{}),Cs=({children:e},s,n="")=>e.reduce((t,i)=>{if(i.children)return{...t,[i.value]:Cs(i,s,`${n}${i.value}.`)};const a=s.indexOf(`${n}${i.value}`)!==-1;return t[i.value]=a,t},{}),ht=(e,s,n)=>e.reduce((t,i)=>{const a=s.properties.find(({value:l})=>l===i);if(a){const l=T(n,["properties",a.value],[]),c=Cs(a,l);t.properties[i]=c}return t},{properties:{}}),Ct=(e,s)=>s.reduce((n,t)=>{const i=e.find(({uid:a})=>a===t)||null;return i&&(n[t]=i),n},{}),xs=({subjects:e},s,n,t=[])=>s.reduce((i,a)=>{const l=a.subjects,c=Ct(e,l);if(F(c))return i;const p=Object.keys(c).reduce((u,m)=>{const{actionId:y,applyToProperties:b}=a,f=c[m].properties.map(({value:v})=>v).every(v=>(b||[]).indexOf(v)===-1),h=ms(t,y,m),M=hs(n,T(h,"conditions",[]));if(F(b)||f)return Y(u,[m,y],{properties:{enabled:h!==void 0},conditions:M}),u;const P=ht(b,c[m],h);return Y(u,[m,y],{...P,conditions:M}),u},{});return Es(i,p)},{}),xt=(e,s,n)=>e.reduce((t,i)=>{const a=ms(n,i.action,null);return t[i.action]={properties:{enabled:a!==void 0},conditions:hs(s,a?.conditions??[])},t},{}),yt=(e,s,n)=>e.reduce((t,i)=>(t[i.subCategoryId]=xt(i.actions,s,n),t),{}),ys=(e,s,n=[])=>e.reduce((t,{categoryId:i,childrenForm:a})=>{const l=yt(a,s,n);return t[i]=l,t},{}),fs=e=>e.split(" ").join("-"),_s=(e,s)=>Object.entries(ue(e,s)).map(([n,t])=>({category:n,categoryId:fs(n),childrenForm:Object.entries(ue(t,"subCategory")).map(([i,a])=>({subCategoryName:i,subCategoryId:fs(i),actions:a}))})),ft=(e,s)=>{const{conditions:n,sections:{collectionTypes:t,singleTypes:i,plugins:a,settings:l}}=e,c={collectionTypes:t,singleTypes:i,plugins:_s(a,"plugin"),settings:_s(l,"category")},p={collectionTypes:xs(t,t.actions||[],n,s),singleTypes:xs(i,i.actions||[],n,s),plugins:ys(c.plugins,n,s),settings:ys(c.settings,n,s)};return{initialData:p,modifiedData:p,layouts:c}},Ae=e=>Object.keys(e).reduce((s,n)=>{const t=e[n];if(ne(t)&&!J(t,"conditions"))return{...s,[n]:Ae(t)};if(ne(t)&&J(t,"conditions")&&!oe(je(t,"conditions")).some(a=>a)){const a=Object.keys(t.conditions).reduce((l,c)=>(l[c]=!1,l),{});return{...s,[n]:{...t,conditions:a}}}return s[n]=t,s},{}),fe=(e,s,n=!1)=>Object.keys(e).reduce((t,i)=>{const a=e[i];return i==="conditions"&&!n?(t[i]=a,t):ne(a)?{...t,[i]:fe(a,s,i==="fields")}:(t[i]=s,t)},{}),_t={initialData:{},modifiedData:{},layouts:{}},bt=(e,s)=>(0,he.ZP)(e,n=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:t,actionId:i,value:a}=s,l=["modifiedData",t];Object.keys(T(e,l)).forEach(c=>{const p=T(e,[...l,c,i],void 0);if(p){let u=fe(p,a);if(!a&&u.conditions){const m=fe(u.conditions,!1);u={...u,conditions:m}}Y(n,[...l,c,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:t,propertyName:i,rowName:a,value:l}=s;let c=De(e.modifiedData);const p=t.split(".."),u=T(c,p,{});Object.keys(u).forEach(m=>{if(J(u[m],`properties.${i}`)){const y=T(u,[m,"properties",i,a]),b=[...p,m,"properties",i,a];if(!ne(y))Y(c,b,l);else{const $=fe(y,l);Y(c,b,$)}}}),l||(c=Ae(c)),Y(n,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(t=>{const[i,a]=t;Y(n,["modifiedData",...i.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let t=De(e.modifiedData);Y(t,[...s.keys.split("..")],s.value),s.value||(t=Ae(t)),Y(n,"modifiedData",t);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:t,value:i}=s,a=[...t.split("..")];let l=De(e.modifiedData);const c=T(l,a,{}),p=fe(c,i);Y(l,a,p),i||(l=Ae(l)),Y(n,["modifiedData"],l);break}case"RESET_FORM":{n.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{n.initialData=e.modifiedData;break}default:return n}}),qe=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),Pt=e=>{const[s,{conditions:n}]=e;return{action:s,subject:null,conditions:qe(n),properties:{}}},jt=e=>Object.values(e).reduce((s,n)=>{const t=Object.entries(n).reduce((i,a)=>{const[,{properties:{enabled:l}}]=a;if(!l)return i;const c=Pt(a);return i.push(c),i},[]);return[...s,...t]},[]),bs=e=>Object.values(e).reduce((s,n)=>{const t=jt(n);return[...s,...t]},[]),Ps=(e,s="")=>Object.entries(e).reduce((n,t)=>{const[i,a]=t;return ne(a)?[...n,...Ps(a,`${s}${i}.`)]:(a&&!ne(a)&&n.push(`${s}${i}`),n)},[]),Ot=(e,s,{conditions:n,properties:t})=>Object.entries(t).reduce((i,a)=>{const[l,c]=a;return i.properties[l]=Ps(c),i},{action:e,subject:s,conditions:qe(n),properties:{}}),Et=(e,s,{conditions:n})=>({action:e,subject:s,properties:{},conditions:qe(n)}),Mt=(e,s)=>Object.entries(s).reduce((t,i)=>{const[a,l]=i;if(!oe(l).some(u=>u))return t;if(!l?.properties?.enabled){const u=Ot(a,e,l);return[...t,u]}if(!l.properties.enabled)return t;const p=Et(a,e,l);return t.push(p),t},[]),js=e=>Object.entries(e).reduce((n,t)=>{const[i,a]=t,l=Mt(i,a);return[...n,...l]},[]),At=e=>{const s=bs(e.plugins),n=bs(e.settings),t=js(e.collectionTypes),i=js(e.singleTypes);return[...s,...n,...t,...i]},Rt=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],He=(0,g.forwardRef)(({layout:e,isFormDisabled:s,permissions:n},t)=>{const[{initialData:i,layouts:a,modifiedData:l},c]=(0,g.useReducer)(bt,_t,()=>ft(e,n)),{formatMessage:p}=(0,K.Z)();(0,g.useImperativeHandle)(t,()=>({getPermissions(){const E=(0,W.e5)(i.collectionTypes,l.collectionTypes),f=(0,W.e5)(i.singleTypes,l.singleTypes),h={...E,...f};let M;return F(h)?M=!1:M=Object.values(h).some(P=>Object.values(P).some(v=>J(v,"conditions"))),{permissionsToSend:At(l),didUpdateConditions:M}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(E,f,h,M)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:E,propertyName:f,rowName:h,value:M})},m=(E,f,h)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:E,actionId:f,value:h})},y=E=>{c({type:"ON_CHANGE_CONDITIONS",conditions:E})},b=(0,g.useCallback)(({target:{name:E,value:f}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:E,value:f})},[]),$=(0,g.useCallback)(({target:{name:E,value:f}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:E,value:f})},[]);return(0,o.jsx)(Ms,{availableConditions:e.conditions,modifiedData:l,onChangeConditions:y,onChangeSimpleCheckbox:b,onChangeParentCheckbox:$,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:m,children:(0,o.jsxs)(de.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,o.jsx)(se.m,{children:Rt.map(E=>(0,o.jsx)(se.O,{children:p({id:E.labelId,defaultMessage:E.defaultMessage})},E.id))}),(0,o.jsxs)(X.n,{style:{position:"relative"},children:[(0,o.jsx)(X.x,{children:(0,o.jsx)(ps,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),(0,o.jsx)(X.x,{children:(0,o.jsx)(ps,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),(0,o.jsx)(X.x,{children:(0,o.jsx)(we,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),(0,o.jsx)(X.x,{children:(0,o.jsx)(we,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})]})})});He.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},He.propTypes={layout:r.object,isFormDisabled:r.bool.isRequired,permissions:r.array};const Tt=(0,g.memo)(He),vt=(e,s={})=>{const{get:n}=(0,W.kY)(),{data:t,error:i,isError:a,isLoading:l}=(0,Xe.useQuery)(["permissions",e],async()=>{const{data:{data:c}}=await n("/admin/permissions",{params:{role:e}});return c},s);return{data:t,error:i,isError:a,isLoading:l}},Dt=(e={id:null},s={})=>{const{id:n,...t}=e,{get:i}=(0,W.kY)(),{data:a,error:l,isError:c,isLoading:p,refetch:u}=(0,Xe.useQuery)(["roles",n,"permissions",t],async()=>{const{data:{data:m}}=await i(`/admin/roles/${n}/permissions`,{params:t});return m},s);return{permissions:a,error:l,isError:c,isLoading:p,refetch:u}}},45322:(N,Z,d)=>{"use strict";d.d(Z,{U:()=>H,y:()=>Q});var o=d(74081),g=d(27279),j=d(19003),C=d(39267),O=d(74513),x=d(32370),B=d(10701),A=d(93415);const L=({theme:D,expanded:R,variant:k,disabled:G,error:w})=>w?`1px solid ${D.colors.danger600} !important`:G?`1px solid ${D.colors.neutral150}`:R?`1px solid ${D.colors.primary600}`:k==="primary"?`1px solid ${D.colors.neutral0}`:`1px solid ${D.colors.neutral100}`,Q=(0,j.ZP)(x.Z)``,ee=(0,j.ZP)(A.x)`
  border: ${L};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:D})=>D.colors.primary600};

    ${Q} {
      color: ${({theme:D,expanded:R})=>R?void 0:D.colors.primary700};
    }

    ${x.Z} {
      color: ${({theme:D,expanded:R})=>R?void 0:D.colors.primary600};
    }

    & > ${B.k} {
      background: ${({theme:D})=>D.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:D})=>D.colors.primary200};
    }
  }
`,H=({children:D,disabled:R=!1,error:k,expanded:G=!1,hasErrorMessage:w=!0,id:le,onToggle:de,toggle:se,size:X="M",variant:W="primary",shadow:J})=>{const F=(0,O.M)(le),r=g.useMemo(()=>({expanded:G,onToggle:de,toggle:se,id:F,size:X,variant:W,disabled:R}),[R,G,F,de,X,se,W]);return(0,o.jsxs)(C.S.Provider,{value:r,children:[(0,o.jsx)(ee,{"data-strapi-expanded":G,disabled:R,"aria-disabled":R,expanded:G,hasRadius:!0,variant:W,error:k,shadow:J,children:D}),k&&w&&(0,o.jsx)(A.x,{paddingTop:1,children:(0,o.jsx)(x.Z,{variant:"pi",textColor:"danger600",children:k})})]})}},34642:(N,Z,d)=>{"use strict";d.d(Z,{v:()=>C});var o=d(74081),g=d(39267),j=d(93415);const C=({children:O,...x})=>{const{expanded:B,id:A}=(0,g.A)();if(!B)return null;const L=`accordion-content-${A}`,Q=`accordion-label-${A}`,ee=`accordion-desc-${A}`;return(0,o.jsx)(j.x,{role:"region",id:L,"aria-labelledby":Q,"aria-describedby":ee,...x,children:O})}},39267:(N,Z,d)=>{"use strict";d.d(Z,{A:()=>j,S:()=>g});var o=d(27279);const g=(0,o.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),j=()=>(0,o.useContext)(g)},24920:(N,Z,d)=>{"use strict";d.d(Z,{B:()=>D});var o=d(74081),g=d(10411),j=d(19003),C=d(45322),O=d(39267);const x=({expanded:R,disabled:k,variant:G})=>{let w="neutral100";return R?w="primary100":k?w="neutral150":G==="primary"&&(w="neutral0"),w};var B=d(1782),A=d(50703),L=d(10701),Q=d(32370);const ee=(0,j.ZP)(B.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:R,expanded:k})=>k?R.colors.primary600:R.colors.neutral500};
    }
  }
`,H=(0,j.ZP)(L.k)`
  min-height: ${({theme:R,size:k})=>R.sizes.accordions[k]};
  border-radius: ${({theme:R,expanded:k})=>k?`${R.borderRadius} ${R.borderRadius} 0 0`:R.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:R})=>R.colors.primary600};
      }
    }
  }
`,D=({title:R,description:k,as:G="span",togglePosition:w="right",action:le,...de})=>{const{onToggle:se,toggle:X,expanded:W,id:J,size:F,variant:r,disabled:K}=(0,O.A)(),Re=`accordion-content-${J}`,be=`accordion-label-${J}`,_=`accordion-desc-${J}`,ce=F==="M"?6:4,Pe=F==="M"?ce:ce-2,Te=x({expanded:W,disabled:K,variant:r}),T={as:G,fontWeight:F==="S"?"bold":void 0,id:be,textColor:W?"primary600":"neutral700",ellipsis:!0,variant:F==="M"?"delta":void 0},je=W?"primary600":"neutral600",ve=W?"primary200":"neutral200",Oe=F==="M"?`${32/16}rem`:`${24/16}rem`,he=()=>{K||(X&&!se?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),X()):se&&se())},ue=(0,o.jsx)(L.k,{justifyContent:"center",borderRadius:"50%",height:Oe,width:Oe,transform:W?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ve,cursor:K?"not-allowed":"pointer",onClick:he,shrink:0,children:(0,o.jsx)(A.J,{as:g.Z,width:F==="M"?`${11/16}rem`:`${8/16}rem`,color:W?"primary600":"neutral600"})});return(0,o.jsx)(H,{paddingBottom:Pe,paddingLeft:ce,paddingRight:ce,paddingTop:Pe,background:Te,expanded:W,size:F,justifyContent:"space-between",cursor:K?"not-allowed":"",children:(0,o.jsxs)(L.k,{gap:3,flex:1,maxWidth:"100%",children:[w==="left"&&ue,(0,o.jsx)(ee,{onClick:he,"aria-disabled":K,"aria-expanded":W,"aria-controls":Re,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:W,type:"button",flex:1,minWidth:0,...de,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.y,{...T,children:R}),k&&(0,o.jsx)(Q.Z,{as:"p",id:_,textColor:je,children:k})]})}),w==="right"&&(0,o.jsxs)(L.k,{gap:3,children:[ue,le]}),w==="left"&&le]})})}},61181:(N,Z,d)=>{"use strict";d.d(Z,{Q:()=>C});var o=d(74081),g=d(19003),j=d(97232);const C=({options:x,...B})=>(0,o.jsx)(j.NU,{...B,children:x.map(A=>"children"in A?(0,o.jsx)(j.Ab,{label:A.label,values:A.children.map(L=>L.value.toString()),children:A.children.map(L=>(0,o.jsx)(O,{value:L.value,children:L.label},L.value))},A.label):(0,o.jsx)(j.ML,{value:A.value,children:A.label},A.value))}),O=(0,g.ZP)(j.ML)`
  padding-left: ${({theme:x})=>x.spaces[7]};
`}}]);
