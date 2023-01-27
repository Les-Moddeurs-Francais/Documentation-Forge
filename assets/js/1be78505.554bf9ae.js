"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9514,4204],{19963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(67294),l=n(86010),r=n(10833),o=n(35281),c=n(43320),i=n(52802),s=n(74477),d=n(1116),m=n(54774),u=n(95999),b=n(12466),p=n(85936);const E="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,E,e&&h),type:"button",onClick:t})}var v=n(76775),_=n(87524),g=n(86668),k=n(21327),C=n(87462);function S(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(S,{className:N}))}var y=n(59689),x=n(902);const T=Symbol("EmptyContext"),L=a.createContext(T);function A(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:r},t)}var w=n(86043),M=n(48596),B=n(39960),H=n(72389);function F(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:E}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,g.L)(),f=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),v=(0,i._F)(t,r),_=(0,M.Mg)(E,r),{collapsed:k,setCollapsed:S}=(0,w.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(L);if(e===T)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:v,collapsed:k,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&h&&S(!0)}),[b,I,s,S,h]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!E&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),E?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),E&&b&&a.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(q,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:c+1})))}var D=n(13919),W=n(39471);const R="menuExternalLink_NmtK";function V(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,E=(0,i._F)(t,r),h=(0,D.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&R,{"menu__link--active":E}),autoAddBaseUrl:p,"aria-current":E?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(W.Z,null)))}const z="menuHtmlItem_M9Kj";function U(e){let{item:t,level:n,index:r}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),i&&[z,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:c}})}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,C.Z)({item:t},n));case"html":return a.createElement(U,(0,C.Z)({item:t},n));default:return a.createElement(V,(0,C.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(A,null,t.map(((e,t)=>a.createElement(K,(0,C.Z)({key:t,item:e,index:t},n)))))}const q=(0,a.memo)(j),G="menu_SIkG",O="menuWithAnnouncementBar_GW3s";function Y(e){let{path:t,sidebar:n,className:r}=e;const c=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",G,c&&O,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,g.L)();return a.createElement("div",{className:(0,l.Z)(X,c&&J,o&&Q)},c&&a.createElement(k.Z,{tabIndex:-1,className:$}),a.createElement(Y,{path:t,sidebar:n}),i&&a.createElement(Z,{onClick:r}))}const te=a.memo(ee);var ne=n(13102),ae=n(72961);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}const oe=a.memo(re);function ce(e){const t=(0,_.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(oe,e))}const ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:se}))}const me={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ue(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:c}=(0,v.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,me.docSidebarContainer,n&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&n&&s(!0)}},a.createElement(ue,null,a.createElement("div",{className:(0,l.Z)(me.sidebarViewport,i&&me.sidebarViewportHidden)},a.createElement(ce,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(de,{toggleSidebar:d}))))}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(pe.docMainContainer,(t||!r)&&pe.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},n))}const he="docPage__5DB",fe="docsWrapper_BCFX";function ve(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:fe},a.createElement(f,null),a.createElement("div",{className:he},n&&a.createElement(be,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(84204),ge=n(90197);function ke(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ge.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(_e.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(ke,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ve,null,c)))))}},84204:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),l=n(54774),r=n(95999),o=n(10833),c=n(39960);function i(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Oups \ud83d\ude44"),a.createElement("p",null,"Il semble que nous ayons peut-\xeatre oubli\xe9 cette page \ud83d\udc40"),a.createElement("p",null,"Si c'est le cas, n'h\xe9sitez pas \xe0 nous contacter sur ",a.createElement("a",{href:"https://discord.lesmoddeursfrancais.com",target:"_blank"},"Discord")," \ud83d\ude0a."),a.createElement(c.Z,{className:"button button--secondary button--lg",to:"/"},"Revenir \xe0 l'accueil"))))))}}}]);