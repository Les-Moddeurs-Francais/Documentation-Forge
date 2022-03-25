"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[7918],{4067:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(7556),r={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},s=a(6010),i=a(9960),o=a(4996);function c(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(i.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function d(e){var t=e.children,a=e.active,l=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function m(){var e=(0,o.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.Z,{className:(0,s.Z)("breadcrumbs__link",r.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,l.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,s.Z)(l.kM.docs.docBreadcrumbs,r.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(m,null),e.map((function(t,a){return n.createElement(d,{key:a,active:a===e.length-1,index:a},n.createElement(c,{href:a<e.length-1?t.href:void 0},t.label))})))):null}},9153:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(7294),l=a(6010),r=a(1101),s=a(4474),i=a(7597),o=a(5999),c=a(7556);function d(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:c.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(m,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(6753),b=a(62),p="lastUpdated_foO9";function E(e){return n.createElement("div",{className:(0,l.Z)(c.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(b.Z,e)))}function h(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(c.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(v.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",p)},(a||r)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function f(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||r||i);return d||m?n.createElement("footer",{className:(0,l.Z)(c.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(E,{tags:o}),m&&n.createElement(h,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var g=a(1575),N="tocCollapsible_jdIR",Z="tocCollapsibleButton_Fzxq",L="tocCollapsibleContent_MpvI",k="tocCollapsibleExpanded_laf4",_=a(5002);function C(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,c.uR)({initialState:!0}),d=i.collapsed,m=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(N,!d&&k,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",Z),onClick:m},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(c.zF,{lazy:!0,className:L,collapsed:d},n.createElement(_.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var U=a(9649),T="docItemContainer_vinB",y="docItemCol_DM6M",M="tocMobile_TmEX",A=a(4067),w=a(7459);function x(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=a.assets,i=r.keywords,o=l.description,d=l.title,m=null!=(t=s.image)?t:r.image;return n.createElement(c.d,{title:d,description:o,keywords:i,image:m})}function H(e){var t=e.content,a=t.metadata,o=t.frontMatter,d=o.hide_title,m=o.hide_table_of_contents,u=o.toc_min_heading_level,v=o.toc_max_heading_level,b=a.title,p=!d&&void 0===t.contentTitle,E=(0,c.iP)(),h=!m&&t.toc&&t.toc.length>0,N=h&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!m&&y)},n.createElement(s.Z,null),n.createElement("div",{className:T},n.createElement("article",null,n.createElement(A.Z,null),n.createElement(i.Z,null),h&&n.createElement(C,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:(0,l.Z)(c.kM.docs.docTocMobile,M)}),n.createElement("div",{className:(0,l.Z)(c.kM.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(U.Z,{as:"h1"},b)),n.createElement(w.Z,null,n.createElement(t,null))),n.createElement(f,e)),n.createElement(r.Z,{previous:a.previous,next:a.next}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(g.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:c.kM.docs.docTocDesktop})))}function B(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(c.FG,{className:t},n.createElement(x,e),n.createElement(H,e))}},1101:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7462),l=a(7294),r=a(5999),s=a(1750);function i(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s.Z,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(s.Z,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(5999),r=a(7556),s=a(6010);function i(e){var t=e.className,a=(0,r.E6)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,r.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),l=a(2263),r=a(9960),s=a(5999),i=a(5551),o=a(7556),c=a(6010);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,r=e.versionMetadata,s=(0,l.Z)().siteConfig.title,d=(0,i.gA)({failfast:!0}).pluginId,v=(0,o.J)(d).savePreferredVersionName,b=(0,i.Jo)(d),p=b.latestDocSuggestion,E=b.latestVersionSuggestion,h=null!=p?p:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,c.Z)(a,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:E.label,to:h.path,onClick:function(){return v(E.name)}})))}function b(e){var t=e.className,a=(0,o.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),r=a(7294),s=a(6010),i=a(5002),o="tableOfContents_cNA8",c=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,s.Z)(o,"thin-scrollbar",t)},r.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),s=a(7556),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,p=e.maxHeadingLevel,E=(0,l.Z)(e,i),h=(0,s.LU)(),f=null!=b?b:h.tableOfContents.minHeadingLevel,g=null!=p?p:h.tableOfContents.maxHeadingLevel,N=(0,s.b9)({toc:t,minHeadingLevel:f,maxHeadingLevel:g}),Z=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:f,maxHeadingLevel:g}}),[m,v,f,g]);return(0,s.Si)(Z),r.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},E))}}}]);