(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("3a4m"),l=t.n(s),r=t("/MKj"),c=t("20nU");class m extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7ad9\u70b9\u914d\u7f6e",type:"item",href:"/admin/config/site",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})}];this.props.header.userInfo.is_admin&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},a);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{l.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var o=Object(r["c"])(e=>{var a=e.header;return{header:a}})(m),d=t("t3Un");class p extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(d["a"])("/user/logout").then(e=>{l.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"none":"block"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"}))),this.props.search&&i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"form-control rounded-lg px-4",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)})),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))))}}var h=Object(r["c"])(e=>{var a=e.header;return{header:a}})(p);class v extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.1"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class u extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(o,this.props),i.a.createElement(h,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(v,null))}}a["a"]=Object(r["c"])(e=>{var a=e.header;return{header:a}})(u)},L4tb:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return E});var n=t("jehZ"),i=t.n(n),s=(t("BoS7"),t("Sdc0")),l=(t("5Dmo"),t("3S7+")),r=(t("Pwec"),t("CtXQ")),c=(t("+L6B"),t("2/Rp")),m=(t("miYZ"),t("tsqr")),o=t("p0pE"),d=t.n(o),p=t("q1tI"),h=t.n(p),v=t("Bl7J"),u=t("t3Un");class E extends h.a.Component{constructor(){super(...arguments),this.state={invite:{},site:{},server:{},loading:!0}}componentDidMount(){this.fetchData()}fetchData(){Object(u["a"])("/admin/config").then(e=>{200===e.code&&this.setState(d()({},e.data,{loading:!1}))})}submit(e){Object(u["b"])("/admin/config/save",this.state[e]).then(e=>{200===e.code&&e.data&&(this.fetchData(),m["a"].success("\u4fdd\u5b58\u6210\u529f"))})}set(e,a,t){this.setState({[e]:d()({},this.state[e],{[a]:t})})}render(){return h.a.createElement(v["a"],i()({},this.props,{loading:this.state.loading}),h.a.createElement("main",{id:"main-container"},h.a.createElement("div",{className:"content content-full"},h.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u7ad9\u70b9\u914d\u7f6e"),h.a.createElement("div",{className:"block block-rounded block-bordered"},h.a.createElement("div",{className:"block-header block-header-default"},h.a.createElement("h3",{className:"block-title"},"\u7ad9\u70b9"),h.a.createElement("div",{className:"block-options"},h.a.createElement(c["a"],{type:"primary",onClick:()=>this.submit("site")},"\u4fdd\u5b58"))),h.a.createElement("div",{className:"block-content"},h.a.createElement("div",{className:"row push"},h.a.createElement("div",{className:"col-lg-8 col-xl-5"},h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-text-input"},"\u7ad9\u70b9\u540d\u79f0"),h.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.site.app_name,onChange:e=>this.set("site","app_name",e.target.value)})),h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-text-input"},"\u7ad9\u70b9URL ",h.a.createElement(l["a"],{placement:"top",title:"\u66f4\u6539\u7ad9\u70b9URL\u4f1a\u5f71\u54cd\u5230\u8ba2\u9605\u7b49\u6709\u7528\u5230\u5916\u90e8URL\u7684\u5730\u65b9\uff0c\u5176\u4ed6\u4e0d\u53d7\u5f71\u54cd"},h.a.createElement(r["a"],{type:"question-circle"}))),h.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.site.app_url,onChange:e=>this.set("site","app_url",e.target.value)})),h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-text-input"},"\u505c\u6b62\u65b0\u7528\u6237\u6ce8\u518c"),h.a.createElement("div",null,h.a.createElement(s["a"],{checked:parseInt(this.state.site.stop_register),onChange:e=>this.set("site","stop_register",e?1:0)}))),h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-text-input"},"\u90ae\u7bb1\u9a8c\u8bc1"),h.a.createElement("div",null,h.a.createElement(s["a"],{checked:parseInt(this.state.site.email_verify),onChange:e=>this.set("site","email_verify",e?1:0)}))))))),h.a.createElement("div",{className:"block block-rounded block-bordered"},h.a.createElement("div",{className:"block-header block-header-default"},h.a.createElement("h3",{className:"block-title"},"\u9080\u8bf7"),h.a.createElement("div",{className:"block-options"},h.a.createElement(c["a"],{type:"primary",onClick:()=>this.submit("invite")},"\u4fdd\u5b58"))),h.a.createElement("div",{className:"block-content"},h.a.createElement("div",{className:"row push"},h.a.createElement("div",{className:"col-lg-8 col-xl-5"},h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-text-input"},"\u5f00\u542f\u5f3a\u5236\u9080\u8bf7"),h.a.createElement("div",null,h.a.createElement(s["a"],{checked:parseInt(this.state.invite.invite_force),onChange:e=>this.set("invite","invite_force",e?1:0)}))),h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-email-input"},"\u9080\u8bf7\u4f63\u91d1\u767e\u5206\u6bd4"),h.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.invite.invite_commission,onChange:e=>this.set("invite","invite_commission",parseInt(e.target.value))})),h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-email-input"},"\u7528\u6237\u53ef\u521b\u5efa\u9080\u8bf7\u7801\u4e0a\u9650"),h.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.invite.invite_gen_limit,onChange:e=>this.set("invite","invite_gen_limit",parseInt(e.target.value))})),h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-email-input"},"\u9080\u8bf7\u7801\u6c38\u4e0d\u8fc7\u671f"),h.a.createElement("div",null,h.a.createElement(s["a"],{checked:parseInt(this.state.invite.invite_never_expire),onChange:e=>this.set("invite","invite_never_expire",e?1:0)}))))))),h.a.createElement("div",{className:"block block-rounded block-bordered"},h.a.createElement("div",{className:"block-header block-header-default"},h.a.createElement("h3",{className:"block-title"},"\u670d\u52a1\u7aef"),h.a.createElement("div",{className:"block-options"},h.a.createElement(c["a"],{type:"primary",onClick:()=>this.submit("server")},"\u4fdd\u5b58"))),h.a.createElement("div",{className:"block-content"},h.a.createElement("div",{className:"row push"},h.a.createElement("div",{className:"col-lg-8 col-xl-5"},h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-text-input"},"\u901a\u8baf\u5bc6\u94a5"),h.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.server.server_token,onChange:e=>this.set("server","server_token",e.target.value)})))))))))}}}}]);