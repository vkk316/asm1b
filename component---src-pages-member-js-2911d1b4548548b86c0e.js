"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[901],{4832:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(5444),r=function(e){return e.isCurrent?{className:"nav-link active"}:{className:"nav-link"}},c=function(e){return n.createElement(l.Link,Object.assign({getProps:r},e))},i=function(e){var t=e.siteTitle;return n.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},n.createElement("div",{className:"container-fluid"},n.createElement(l.Link,{to:"/",className:"navbar-brand",href:"#"},t),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/"},n.createElement("b",null,"Team"))),n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/subject"},n.createElement("b",null,"Subject")))))))};i.defaultProps={siteTitle:""};var s=i,m=function(e){var t,a=e.children,r=(0,l.useStaticQuery)("3649515864");return n.createElement("div",{className:"container-fluid p-0"},n.createElement(s,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",null,a))}},5768:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(7294),l=a(4832);function r(e){var t=e.data.directus.Member[0],a=t.enrollment;return n.createElement(l.Z,null,n.createElement("section",{className:"py-5 container"},n.createElement("div",null,n.createElement("h2",null,t.student_id)," ",n.createElement("h3",null,t.first_name," ",t.last_name)),n.createElement("hr",null),n.createElement("table",{class:"table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{scope:"col"},"Subject ID"),n.createElement("th",{scope:"col"},"Subject Name"),n.createElement("th",{scope:"col"},"Section"),n.createElement("th",{scope:"col"},"Class"))),n.createElement("tbody",null,a.map((function(e){return n.createElement("tr",null,n.createElement("th",{scope:"row"},e.Section_id.subject.id),n.createElement("td",null,e.Section_id.subject.title),n.createElement("td",null,e.Section_id.number),n.createElement("td",null,e.Section_id.periods.map((function(e){return n.createElement("p",null,e.day," ",e.start," - ",e.end)}))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-member-js-2911d1b4548548b86c0e.js.map