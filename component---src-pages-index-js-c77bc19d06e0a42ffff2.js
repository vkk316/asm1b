"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[678],{4832:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(7294),r=t(5444),l=function(e){return e.isCurrent?{className:"nav-link active"}:{className:"nav-link"}},c=function(e){return n.createElement(r.Link,Object.assign({getProps:l},e))},s=function(e){var a=e.siteTitle;return n.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},n.createElement("div",{className:"container-fluid"},n.createElement(r.Link,{to:"/",className:"navbar-brand",href:"#"},a),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/"},n.createElement("b",null,"Team"))),n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/subject"},n.createElement("b",null,"Subject")))))))};s.defaultProps={siteTitle:""};var i=s,m=function(e){var a,t=e.children,l=(0,r.useStaticQuery)("3649515864");return n.createElement("div",{className:"container-fluid p-0"},n.createElement(i,{siteTitle:(null===(a=l.site.siteMetadata)||void 0===a?void 0:a.title)||"Title"}),n.createElement("main",null,t))}},3631:function(e,a,t){t.r(a),t.d(a,{default:function(){return s}});var n=t(7294),r=t(4832),l=t(5444),c=function(e){var a=e.data,t="http://localhost:8055/assets/"+a.profile_img.id+"?fit=cover&width=200&height=200";return n.createElement("div",{className:"card",style:{width:"18rem",margin:12}},n.createElement("div",{className:"card-body"},n.createElement("img",{src:t,alt:a.student_id}),n.createElement("h5",{className:"card-title"},a.first_name," ",a.last_name),n.createElement("h6",{className:"card-text"},a.student_id),n.createElement(l.Link,{to:"member/"+a.student_id,className:"btn btn-primary my-3"},"Detail")))},s=function(){var e=(0,l.useStaticQuery)("4232657212");return n.createElement(r.Z,null,n.createElement("section",{className:"py-5 text-center container"},n.createElement("div",{className:"row py-lg-5"},e.directus.Member.map((function(e){return n.createElement(c,{data:e,key:e.student_id})})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c77bc19d06e0a42ffff2.js.map