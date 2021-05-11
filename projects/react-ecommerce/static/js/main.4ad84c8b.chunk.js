(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(19),r=a.n(c),i=a(11),s=(a(27),a(2)),m=a(3),o=a(5),u=a(4),p=a(6),d=(a(28),a(29),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(e){var t=document.getElementById("nav-btn");t.classList.contains("collapse")?(t.classList.remove("collapse"),t.classList.toggle("expand")):t.classList.contains("expand")&&(t.classList.remove("expand"),t.classList.toggle("collapse"))}},{key:"render",value:function(){var e=this;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Back to portfolio"),n.a.createElement("button",{onClick:function(t){return e.onClick(t)},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"nav-btn"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},this.props.links.map((function(e,t){return n.a.createElement("li",{key:t,className:"nav-item active"},n.a.createElement(i.b,{to:"/projects/react-ecommerce"+e.src,className:"nav-link"},e.text))})))))}}]),t}(n.a.Component)),E=(a(35),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={texto:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"page-footer font-small stylish-color-dark pt-4"},n.a.createElement("ul",{className:"list-unstyled list-inline text-center"},n.a.createElement("li",{className:"list-inline-item"}," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/joel-p-10ab3911a/",className:"btn-floating btn-li mx-1"}," ",n.a.createElement("i",{className:"fab fa-linkedin-in"}," ")," ")," "),n.a.createElement("li",{className:"list-inline-item"}," ",n.a.createElement("a",{href:"https://www.github.com/joeperpetua",className:"btn-floating btn-li mx-1"}," ",n.a.createElement("i",{className:"fab fa-github"}," ")," ")," ")),n.a.createElement("div",{className:"footer-copyright text-center py-3"},"Made by: \xa0  ",n.a.createElement("a",{href:"https://joeperpetua.me"},"Joel Perpetua")))}}]),t}(n.a.Component)),b=a(10),h=(a(36),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},this.props.items.map((function(e,t){return n.a.createElement("div",{key:t,className:"col-md-6 col-xl-4 card-con"},n.a.createElement("div",{className:"card booking-card"},n.a.createElement("div",{className:"view overlay"},n.a.createElement("img",{className:"card-img-top",src:"https://joeperpetua.me/projects/react-ecommerce/"+e.disp_pic,alt:"imagen de "+e.disp_brand+" "+e.disp_model}),n.a.createElement("a",{href:"#!"},n.a.createElement("div",{className:"mask rgba-white-slight"}))),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title font-weight-bold"},e.disp_brand," ",e.disp_model),n.a.createElement("strong",null,n.a.createElement("p",{className:"mb-2"},"$",e.product_price)),n.a.createElement("p",{className:"mb-2"},"Stock: ",e.product_stock),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",{className:"lead"},n.a.createElement("strong",null,"Especificaciones")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"chip mr-0"},e.cpu_brand," ",e.cpu_model)),n.a.createElement("li",null,n.a.createElement("div",{className:"chip mr-0"},e.rom_size,"GB ROM")),n.a.createElement("li",null,n.a.createElement("div",{className:"chip mr-0"},e.ram_size,"GB RAM")),n.a.createElement("li",null,n.a.createElement("div",{className:"chip mr-0"},e.battery_capacity,"mAh"))),n.a.createElement(i.b,{to:"/projects/react-ecommerce/product?id_product="+e.id_product,className:"btn btn-info btn-rounded"},"Ver mas detalles"))))})))}}]),t}(n.a.Component)),v=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-2"},n.a.createElement("h1",null,"Filtros")),n.a.createElement("div",{className:"col-md-10"},n.a.createElement(h,{items:this.props.items}))))}}]),t}(n.a.Component)),f=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container container-about"},n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is a quick ecommerce demo made with ReactJS and Bootstrap and BulmaCSS for the product page."))}}]),t}(n.a.Component)),N=(a(39),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={producto:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://exoapi.000webhostapp.com/api/producto.php"+window.location.search;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({producto:t.response})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",null,this.state.producto.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"section product-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column"},n.a.createElement("span",{className:"title is-3"},e.disp_brand," ",e.disp_model),n.a.createElement("span",{className:"title is-3 has-text-muted"},"\xa0|\xa0"),n.a.createElement("span",{className:"title is-4 has-text-muted"},e.cat))))),n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-6"},n.a.createElement("div",{className:"image is-2by2"},n.a.createElement("img",{src:"https://joeperpetua.me/projects/react-ecommerce/"+e.disp_pic,alt:"imagen de "+e.disp_brand+" "+e.disp_model}))),n.a.createElement("div",{className:"column is-5 is-offset-1"},n.a.createElement("div",{className:"title is-2"},e.disp_brand," ",e.disp_model),n.a.createElement("p",{className:"title is-3 has-text-muted"},"$",e.product_price),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"This is a product description"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"text",defaultValue:"1",className:"input has-text-centered"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("button",{className:"button is-primary"},"Add to cart"))))),n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"tabs"},n.a.createElement("ul",null,n.a.createElement("li",{className:"is-active"},n.a.createElement("span",null,"Especificaciones")))),n.a.createElement("div",{className:"box"},n.a.createElement("ul",null,n.a.createElement("b",null,n.a.createElement("li",null,"Datos del dispositivo"))),n.a.createElement("ul",null,n.a.createElement("li",null,"Codigo de modelo: ",e.disp_code),n.a.createElement("li",null,"S.O: ",e.disp_so," ",e.disp_so_version),n.a.createElement("li",null,"Color: ",e.disp_color),n.a.createElement("li",null,"Anio: ",e.disp_year)),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("b",null,n.a.createElement("li",null,"Unidades de procesamiento"))),n.a.createElement("ul",null,n.a.createElement("li",null,"CPU: ",e.cpu_brand," ",e.cpu_model),n.a.createElement("li",null,"Nucleos: ",e.cpu_cores),n.a.createElement("li",null,"GPU: ",e.gpu_brand," ",e.gpu_model)),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("b",null,n.a.createElement("li",null,"Pantalla"))),n.a.createElement("ul",null,n.a.createElement("li",null,"Tamanio: ",e.screen_size,'"'),n.a.createElement("li",null,"Resolucion: ",e.screen_reso),n.a.createElement("li",null,"Tipo: ",e.screen_type),n.a.createElement("li",null,"Relacion aspecto: ",e.screen_aspect_ratio)),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("b",null,n.a.createElement("li",null,"Memoria"))),n.a.createElement("ul",null,n.a.createElement("li",null,"Ram: ",e.ram_size,"GB"),n.a.createElement("li",null,"Rom: ",e.rom_size,"GB"),n.a.createElement("li",null,"SD (max): ",e.sd_size,"GB")),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("b",null,n.a.createElement("li",null,"Bateria"))),n.a.createElement("ul",null,n.a.createElement("li",null,"Tipo: ",e.battery_type),n.a.createElement("li",null,"Capacidad: ",e.battery_capacity,"mAh"),n.a.createElement("li",null,"Carga rapida: ",e.battery_qc),n.a.createElement("li",null,"Carga inalambrica: ",e.battery_wc)),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("b",null,n.a.createElement("li",null,"Conectividad"))),n.a.createElement("ul",null,n.a.createElement("li",null,"Tipo SIM: ",e.sim_type),n.a.createElement("li",null,"Tipo USB: ",e.usb_type),n.a.createElement("li",null,"NFC: ",e.has_nfc),n.a.createElement("li",null,"IRC: ",e.has_irc),n.a.createElement("li",null,"LTE: ",e.has_lte)),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("b",null," ",n.a.createElement("li",null,"Camaras"))),n.a.createElement("ul",null,n.a.createElement("li",null,e.a)),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("b",null," ",n.a.createElement("li",null,"Extras"))),n.a.createElement("ul",null,n.a.createElement("li",null,"Lector dactilar: ",e.fingerprint_type),n.a.createElement("li",null,"Audio: ",e.speaker_type),n.a.createElement("li",null,"Resistencia al agua: ",e.water_resistant_grade),n.a.createElement("li",null,"Jack 3.5mm: ",e.has_headphone_jack))))))})))}}]),t}(n.a.Component)),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/projects/react-ecommerce",render:function(t){return n.a.createElement(v,Object.assign({},t,{items:e.props.items}))}}),n.a.createElement(b.a,{exact:!0,path:"/projects/react-ecommerce/product",render:function(t){return n.a.createElement(N,Object.assign({},t,{items:e.props.items}))}}),n.a.createElement(b.a,{path:"/projects/react-ecommerce/about",component:f}))}}]),t}(n.a.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:[],hideItems:!1,texto:"exoPhone",links:[{text:"Inicio",src:"/"},{text:"About",src:"/about"}],color:"green"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://exoapi.000webhostapp.com/api/producto.php").then((function(e){return e.json()})).then((function(t){e.setState({items:t.response})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,{texto:this.state.texto,links:this.state.links,color:this.state.color}),n.a.createElement(j,{items:this.state.items}),n.a.createElement(E,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(i.a,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4ad84c8b.chunk.js.map