"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[7],{6301:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(1597),l=function(e){return e.isCurrent?{className:"nav-link active"}:{className:"nav-link"}},c=function(e){return n.createElement(r.rU,Object.assign({getProps:l},e))},s=function(e){var t=e.siteTitle;return n.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},n.createElement("div",{className:"container-fluid"},n.createElement(r.rU,{to:"/",className:"navbar-brand",href:"#"},t),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/"},n.createElement("b",null,"Team"))),n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/subject"},n.createElement("b",null,"Subject")))))))};s.defaultProps={siteTitle:""};var m=s,i=function(e){var t,a=e.children,l=(0,r.K2)("3649515864");return n.createElement("div",{className:"container-fluid p-0"},n.createElement(m,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",null,a))}},1490:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(7294),r=a(6301);function l(e){var t=e.data.directus.Subject[0];return n.createElement(r.Z,null,n.createElement("section",{className:"py-5 container"},n.createElement("div",null,n.createElement("h2",null,t.id)," ",n.createElement("h2",null,t.title)),n.createElement("hr",null),t.sections.map((function(e){return n.createElement(c,{data:e,key:e.number})}))))}function c(e){var t=e.data;return n.createElement("div",{class:"card w-100 mt-4"},n.createElement("div",{class:"card-body"},n.createElement("h5",{class:"card-title"},"Section ",t.number),t.periods.map((function(e){return n.createElement("h6",null,e.day," ",e.start," - ",e.end)})),n.createElement("hr",null),n.createElement("table",{class:"table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{scope:"col"},"Student ID"),n.createElement("th",{scope:"col"},"First Name"),n.createElement("th",{scope:"col"},"Last Name"))),n.createElement("tbody",null,t.student.map((function(e){return n.createElement("tr",null,n.createElement("th",{scope:"row"},e.Member_id.student_id),n.createElement("td",null,e.Member_id.first_name),n.createElement("td",null,e.Member_id.last_name))}))))))}}}]);
//# sourceMappingURL=component---src-pages-subject-detail-js-952b9eae76ed64262fd4.js.map