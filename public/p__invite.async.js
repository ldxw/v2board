(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),i=a("3a4m"),c=a.n(i),l=a("/MKj"),r=a("20nU");class o extends s.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-user"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7ad9\u70b9\u914d\u7f6e",type:"item",href:"/admin/config/site",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-users"})}];this.props.header.userInfo.is_admin&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,n){switch(e){case"heading":return s.a.createElement("li",{className:"nav-main-heading"},t);case"item":return s.a.createElement("li",{className:"nav-main-item"},s.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{c.a.push(a),this.props.dispatch({type:"header/showNav"})}},n&&n,s.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return s.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},s.a.createElement("div",{className:"smini-visible-block"},s.a.createElement("div",{className:"content-header bg-black-10"},s.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},s.a.createElement("span",{className:"text-white-75"},"X"),s.a.createElement("span",{className:"text-white"},"H")))),s.a.createElement("div",{className:"smini-hidden ".concat(1===r["a"].theme?"":"bg-header-dark")},s.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},s.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},s.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),s.a.createElement("div",{className:"d-lg-none"},s.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},s.a.createElement("i",{className:"fa fa-times-circle"}))))),s.a.createElement("div",{className:"content-side content-side-full"},s.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var m=Object(l["c"])(e=>{var t=e.header;return{header:t}})(o),d=a("t3Un");class p extends s.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(d["a"])("/user/logout").then(e=>{c.a.push("/login")})}render(){return s.a.createElement("header",{id:"page-header"},s.a.createElement("div",{className:"content-header"},s.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"none":"block"}},s.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},s.a.createElement("i",{className:"fa fa-fw fa-bars"}))),this.props.search&&s.a.createElement("div",null,s.a.createElement("input",{type:"text",className:"form-control rounded-lg px-4",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)})),s.a.createElement("div",null,this.state.loading?s.a.createElement("div",{className:"spinner-grow text-primary"}):s.a.createElement("div",{className:"dropdown d-inline-block"},s.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},s.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),s.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),s.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},s.a.createElement("div",{className:"p-2"},s.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",s.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))))}}var h=Object(l["c"])(e=>{var t=e.header;return{header:t}})(p);class u extends s.a.Component{render(){return s.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},s.a.createElement("div",{className:"content py-0"},s.a.createElement("div",{className:"row font-size-sm"},s.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},s.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),s.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},s.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.1"),s.a.createElement("span",{"data-toggle":"year-copy"})))))}}class v extends s.a.Component{render(){return s.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===r["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},s.a.createElement(m,this.props),s.a.createElement(h,{search:this.props.search}),this.props.loading?s.a.createElement("main",{id:"main-container"},s.a.createElement("div",{className:"content content-full"},s.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,s.a.createElement(u,null))}}t["a"]=Object(l["c"])(e=>{var t=e.header;return{header:t}})(v)},kdhn:function(e,t,a){"use strict";a.r(t);var n=a("jehZ"),s=a.n(n),i=(a("g9YV"),a("wCAj")),c=(a("miYZ"),a("tsqr")),l=a("p0pE"),r=a.n(l),o=a("q1tI"),m=a.n(o),d=a("Bl7J"),p=a("/MKj"),h=a("t3Un"),u=a("+QRC"),v=a.n(u),f=a("wd/R"),E=a.n(f);class g extends m.a.Component{constructor(){super(...arguments),this.state={codes:[],stat:[0,0,0,0],loading:!0}}componentDidMount(){this.fetchData()}fetchData(){Object(h["a"])("/user/invite").then(e=>{200===e.code&&this.setState(r()({},e.data,{loading:!1}))})}genInviteCode(){Object(h["a"])("/user/invite/save").then(e=>{200===e.code&&e.data&&(this.fetchData(),c["a"].success("\u5df2\u751f\u6210"))})}render(){var e=[{title:"\u9080\u8bf7\u7801",dataIndex:"code",key:"code"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at",key:"created_at",render:e=>{return E()(1e3*e).format("YYYY/MM/DD HH:mm")}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"right",render:(e,t)=>{return m.a.createElement("div",null,m.a.createElement("a",{href:"javascript:;",onClick:()=>{v()(window.location.origin+"/#/register?code="+t.code),c["a"].success("\u590d\u5236\u6210\u529f")}},"\u590d\u5236\u94fe\u63a5"))}}];return m.a.createElement(d["a"],s()({},this.props,{loading:this.state.loading}),m.a.createElement("main",{id:"main-container"},m.a.createElement("div",{className:"content content-full"},m.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},m.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u9080\u8bf7\u603b\u89c8")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6 col-sm-6 col-lg-3 js-appear-enabled animated fadeIn","data-toggle":"appear","data-timeout":"300"},m.a.createElement("div",{className:"block block-rounded text-center"},m.a.createElement("div",{className:"block-content block-content-full aspect-ratio-16-9 d-flex justify-content-center align-items-center"},m.a.createElement("div",null,m.a.createElement("a",{className:"link-fx text-success font-size-h1 font-w700",href:"javascript:void(0)"},this.state.stat[0]),m.a.createElement("div",{className:"font-size-sm font-w700 text-uppercase text-muted mt-1"},"\u5df2\u6ce8\u518c\u7528\u6237\u6570"))))),m.a.createElement("div",{className:"col-6 col-sm-6 col-lg-3 js-appear-enabled animated fadeIn","data-toggle":"appear","data-timeout":"150"},m.a.createElement("div",{className:"block block-rounded text-center"},m.a.createElement("div",{className:"block-content block-content-full aspect-ratio-16-9 d-flex justify-content-center align-items-center"},m.a.createElement("div",null,m.a.createElement("a",{className:"link-fx text-success font-size-h1 font-w700",href:"javascript:void(0)"},"\xa5 ",this.state.stat[1]/100),m.a.createElement("div",{className:"font-size-sm font-w700 text-uppercase text-muted mt-1"},"\u6709\u6548\u7684\u4f63\u91d1"))))),m.a.createElement("div",{className:"col-6 col-sm-6 col-lg-3 js-appear-enabled animated fadeIn","data-toggle":"appear","data-timeout":"450"},m.a.createElement("div",{className:"block block-rounded text-center"},m.a.createElement("div",{className:"block-content block-content-full aspect-ratio-16-9 d-flex justify-content-center align-items-center"},m.a.createElement("div",null,m.a.createElement("a",{className:"link-fx text-success font-size-h1 font-w700",href:"javascript:void(0)"},"\xa5 ",this.state.stat[2]/100),m.a.createElement("div",{className:"font-size-sm font-w700 text-uppercase text-muted mt-1"},"\u786e\u8ba4\u4e2d\u7684\u4f63\u91d1"))))),m.a.createElement("div",{className:"col-6 col-sm-6 col-lg-3 js-appear-enabled animated fadeIn","data-toggle":"appear","data-timeout":"450"},m.a.createElement("div",{className:"block block-rounded text-center"},m.a.createElement("div",{className:"block-content block-content-full aspect-ratio-16-9 d-flex justify-content-center align-items-center"},m.a.createElement("div",null,m.a.createElement("a",{className:"link-fx text-success font-size-h1 font-w700",href:"javascript:void(0)"},"\xa5 ",this.state.stat[3]/100),m.a.createElement("div",{className:"font-size-sm font-w700 text-uppercase text-muted mt-1"},"\u5df2\u63d0\u73b0\u603b\u989d")))))),m.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},m.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u9080\u8bf7\u7801\u7ba1\u7406"),m.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3",onClick:()=>this.genInviteCode()},"\u751f\u6210\u9080\u8bf7\u7801")),m.a.createElement("div",{className:"block block-rounded text-center"},m.a.createElement("div",{className:"block-content block-content-full p-0"},m.a.createElement(i["a"],{scroll:{x:700},columns:e,dataSource:this.state.codes,pagination:!1}))))))}}t["default"]=Object(p["c"])()(g)}}]);