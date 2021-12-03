"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9817],{8507:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(7294),i=n(3616),r=n(9960),l=n(6010),s="cardContainer_176R",o="cardContainerLink_3Y-c",c="cardTitle_2FZj",m="cardDescription_2M51",d=n(3919);function u(e){var t=e.href,n=e.children,i=(0,l.Z)("card margin-bottom--lg padding--lg",s,t&&o);return t?a.createElement(r.Z,{href:t,className:i},n):a.createElement("div",{className:i},n)}function v(e){var t=e.href,n=e.icon,i=e.title,r=e.description;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",c),title:i},n," ",i),a.createElement("div",{className:(0,l.Z)("text--truncate",m),title:r},r))}function h(e){var t=e.item,n=(0,i.Wl)(t);return a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function g(e){var t,n=e.item,r=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(v,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.items;return a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6"},a.createElement(f,{item:e}))})))}var p=n(1101),b=n(1217),N=n(4474),Z=n(7597),k=n(9649),_="generatedIndexPage_329f",L="title_14Qs";function T(e){var t=e.categoryGeneratedIndex,n=(0,i.jA)();return a.createElement(a.Fragment,null,a.createElement(b.Z,{title:t.title,description:t.description}),a.createElement("div",{className:_},a.createElement(N.Z,null),a.createElement(Z.Z,null),a.createElement("header",null,a.createElement(k.N,{className:L},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(E,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(p.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},1101:function(e,t,n){var a=n(7294),i=n(9960),r=n(5999);t.Z=function(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(i.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},n.title," \xbb"))))}},7597:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),i=n(3616),r=n(6010);function l(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",n.label):null}},4474:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),i=n(2263),r=n(9960),l=n(5999),s=n(907),o=n(3616),c=n(6010);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function u(e){var t=e.versionLabel,n=e.to,i=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:i},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,r=e.versionMetadata,l=(0,i.Z)().siteConfig.title,m=(0,s.gA)({failfast:!0}).pluginId,v=(0,o.J)(m).savePreferredVersionName,h=(0,s.Jo)(m),g=h.latestDocSuggestion,f=h.latestVersionSuggestion,E=null!=g?g:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,c.Z)(n,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(d,{siteTitle:l,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(u,{versionLabel:f.label,to:E.path,onClick:function(){return v(f.name)}})))}function h(e){var t=e.className,n=(0,o.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},9649:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return v}});var a=n(3366),i=n(7462),r=n(7294),l=n(6010),s=n(5999),o=n(3616),c="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",d=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,i.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var n,u=e.id,v=(0,a.Z)(e,d),h=(0,o.LU)().navbar.hideOnScroll;return u?r.createElement(t,(0,i.Z)({},v,{className:(0,l.Z)("anchor",(n={},n[m]=h,n[c]=!h,n)),id:u}),v.children,r.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,v)});var t}}}]);