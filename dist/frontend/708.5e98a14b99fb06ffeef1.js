(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[708],{9457:function(E,C){var a,_;void 0!==(_="function"==typeof(a=function(){"use strict";function v(r,s,l){var c=new XMLHttpRequest;c.open("GET",r),c.responseType="blob",c.onload=function(){t(c.response,s,l)},c.onerror=function(){console.error("could not download file")},c.send()}function Z(r){var s=new XMLHttpRequest;s.open("HEAD",r,!1);try{s.send()}catch(l){}return 200<=s.status&&299>=s.status}function p(r){try{r.dispatchEvent(new MouseEvent("click"))}catch(l){var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(s)}}var g="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,b=g.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),t=g.saveAs||("object"!=typeof window||window!==g?function(){}:"download"in HTMLAnchorElement.prototype&&!b?function(r,s,l){var c=g.URL||g.webkitURL,d=document.createElement("a");d.download=s=s||r.name||"download",d.rel="noopener","string"==typeof r?(d.href=r,d.origin===location.origin?p(d):Z(d.href)?v(r,s,l):p(d,d.target="_blank")):(d.href=c.createObjectURL(r),setTimeout(function(){c.revokeObjectURL(d.href)},4e4),setTimeout(function(){p(d)},0))}:"msSaveOrOpenBlob"in navigator?function(r,s,l){if(s=s||r.name||"download","string"!=typeof r)navigator.msSaveOrOpenBlob(function(r,s){return void 0===s?s={autoBom:!1}:"object"!=typeof s&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\ufeff",r],{type:r.type}):r}(r,l),s);else if(Z(r))v(r,s,l);else{var c=document.createElement("a");c.href=r,c.target="_blank",setTimeout(function(){p(c)})}}:function(r,s,l,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof r)return v(r,s,l);var d="application/octet-stream"===r.type,M=/constructor/i.test(g.HTMLElement)||g.safari,q=/CriOS\/[\d]+/.test(navigator.userAgent);if((q||d&&M||b)&&"undefined"!=typeof FileReader){var x=new FileReader;x.onloadend=function(){var h=x.result;h=q?h:h.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=h:location=h,c=null},x.readAsDataURL(r)}else{var O=g.URL||g.webkitURL,T=O.createObjectURL(r);c?c.location=T:location.href=T,c=null,setTimeout(function(){O.revokeObjectURL(T)},4e4)}});g.saveAs=t.saveAs=t,E.exports=t})?a.apply(C,[]):a)&&(E.exports=_)},6708:(E,C,a)=>{"use strict";a.r(C),a.d(C,{EditarModule:()=>ct});var m=a(8583),_=a(4655),f=a(6823),v=a(2487),Z=a(9765),p=a(5319),g=a(6782),b=a(2340),t=a(7716),r=a(5842),s=a(8060),l=a(9344),c=a(6627);function d(n,o){1&n&&t._UZ(0,"img",24),2&n&&t.Q6J("src",o.$implicit,t.LSH)}function M(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"div",17),t.TgZ(1,"div",5),t.TgZ(2,"div",6),t.TgZ(3,"div",7),t.TgZ(4,"div",8),t.TgZ(5,"h3",18),t._uU(6," Imagenes subidas "),t.qZA(),t.TgZ(7,"a",19),t.NdJ("click",function(){return t.CHM(i),t.oxw().downloadRar()}),t.TgZ(8,"mat-icon",20),t._uU(9,"file_download"),t.qZA(),t.TgZ(10,"p",21),t._uU(11,"Descargar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",13),t.TgZ(13,"div",2),t.TgZ(14,"div",22),t.YNc(15,d,1,1,"img",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const i=t.oxw();t.ekj("col-xl-6",i.imagesHtml.length>30)("col-xl-4",i.imagesHtml.length<=30),t.xp6(15),t.Q6J("ngForOf",i.imagesHtml)}}function q(n,o){if(1&n&&(t.TgZ(0,"h3",18),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.servicio.paquete_nombre)}}function x(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(i),t.oxw().finalizarServicio()}),t._uU(1,"Finalizar servicio"),t.qZA()}}function O(n,o){if(1&n&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.servicio.estatus_nombre)}}function T(n,o){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"div",26),t.TgZ(2,"mat-icon"),t._uU(3,"calendar_today"),t.qZA(),t._uU(4," Fecha del evento : "),t.qZA(),t.TgZ(5,"div",27),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.fecha_evento," ")}}function h(n,o){if(1&n&&(t.TgZ(0,"div",28),t.TgZ(1,"div",26),t.TgZ(2,"mat-icon"),t._uU(3,"place"),t.qZA(),t._uU(4," Direccion : "),t.qZA(),t.TgZ(5,"div",27),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.direccion," ")}}function w(n,o){if(1&n&&(t.TgZ(0,"div",28),t.TgZ(1,"div",26),t.TgZ(2,"mat-icon"),t._uU(3,"face"),t.qZA(),t._uU(4," Nombre del cliente : "),t.qZA(),t.TgZ(5,"div",27),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.nombre_cliente," ")}}function y(n,o){if(1&n&&(t.TgZ(0,"div",28),t.TgZ(1,"div",26),t.TgZ(2,"mat-icon"),t._uU(3,"image"),t.qZA(),t._uU(4," Numero de fotos digitales : "),t.qZA(),t.TgZ(5,"div",27),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.no_Fotos_Dig," ")}}function P(n,o){if(1&n&&(t.TgZ(0,"div",28),t.TgZ(1,"div",26),t.TgZ(2,"mat-icon"),t._uU(3,"image"),t.qZA(),t._uU(4," Numero de fotos enmarcadas : "),t.qZA(),t.TgZ(5,"div",27),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.no_Fotos_Enm," ")}}function U(n,o){if(1&n&&(t.TgZ(0,"div",28),t.TgZ(1,"div",26),t.TgZ(2,"mat-icon"),t._uU(3,"image"),t.qZA(),t._uU(4," Numero de fotos fisicas : "),t.qZA(),t.TgZ(5,"div",27),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.no_Fotos_Fis," ")}}function S(n,o){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"div",26),t.TgZ(2,"mat-icon"),t._uU(3,"credit_card"),t.qZA(),t._uU(4," El total es : "),t.qZA(),t.TgZ(5,"div",27),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.total," ")}}function I(n,o){if(1&n&&(t.TgZ(0,"video",31),t._UZ(1,"source",32),t.qZA()),2&n){const i=o.$implicit;t.xp6(1),t.Q6J("src",i,t.LSH)}}function N(n,o){if(1&n&&(t.TgZ(0,"div",29),t.TgZ(1,"div",5),t.TgZ(2,"div",6),t.TgZ(3,"div",7),t.TgZ(4,"div",8),t.TgZ(5,"h3",18),t._uU(6," Videos subidos "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",13),t.TgZ(8,"div",2),t.TgZ(9,"div",22),t.YNc(10,I,2,1,"video",30),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(10),t.Q6J("ngForOf",i.videosHtml)}}const F=a(9457);let Y=(()=>{class n{constructor(i,e,u,A){this._rutaActiva=i,this._recepcionistaService=e,this._authService=u,this._toastr=A,this.url=b.N.url,this.mostrarBotonFinalizar=!1,this.user=null,this.destroy$=new Z.xQ,this.subscription=new p.w,this.id="",this.imagesHtml=[],this.videosHtml=[]}ngOnDestroy(){this.subscription.unsubscribe(),this.destroy$.next({}),this.destroy$.complete()}ngOnInit(){this.getUser(),this.id=this._rutaActiva.snapshot.params.id,this.getServicio(),this.subscription.add(this._recepcionistaService.getImagesEvento(this.id).subscribe(i=>{i.forEach(e=>{this.imagesHtml.push(this.url+e.url_imagen)})})),this.subscription.add(this._recepcionistaService.getVideos(this.id).subscribe(i=>{for(var e=0;e<i.length;e++)this.videosHtml.push(this.url+i[e].url_video)}))}getUser(){this.user=this._authService.getUser(),null==this.user&&this.subscription.add(this._authService.user$.pipe((0,g.R)(this.destroy$)).subscribe(i=>{i&&(this.user=i)}))}getServicio(){this.subscription.add(this._recepcionistaService.getServicioEvento(this.id).subscribe(i=>{this.servicio=i}))}finalizarServicio(){this.getServicio(),this._recepcionistaService.changeStatusServicioEvento(this.id).subscribe(i=>{this._toastr.success("Se ha cambiado el estado del servicio exitosamente","Estado cambiado",{positionClass:"toast-bottom-right"})})}downloadRar(){F.saveAs(this.url+this.servicio.url_rar,this.servicio.nombre_cliente+"-"+this.servicio.paquete_nombre+".rar")}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(_.gz),t.Y36(r.i),t.Y36(s.e),t.Y36(l._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-eventos"]],decls:23,vars:12,consts:[[1,"main-content"],[1,"container","mt-4"],[1,"row"],["class","order-xl-1 mb-3",3,"col-xl-6","col-xl-4",4,"ngIf"],[1,"order-xl-1","col-xl-5"],[1,"card","bg-secondary","shadow"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-12","header"],["class","mb-0",4,"ngIf"],[1,"container-status"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"card-body"],["class","row",4,"ngIf"],["class","row mt-3",4,"ngIf"],["class","col-xl-3 order-xl-1",4,"ngIf"],[1,"order-xl-1","mb-3"],[1,"mb-0"],["href","javascript:void(0)",1,"float-right",2,"cursor","pointer",3,"click"],[1,"align-middle"],[1,"align-middle","d-inline"],[1,"col-lg-12"],["class","img-form","style","margin: 3px;",3,"src",4,"ngFor","ngForOf"],[1,"img-form",2,"margin","3px",3,"src"],["type","button",1,"btn","btn-primary",3,"click"],[1,"col-lg-6"],[1,"col-lg-6","text-right"],[1,"row","mt-3"],[1,"col-xl-3","order-xl-1"],["width","200","height","200","controls","",4,"ngFor","ngForOf"],["width","200","height","200","controls",""],["type","video/mp4",3,"src"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,M,16,5,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.YNc(9,q,2,1,"h3",9),t.TgZ(10,"div",10),t.YNc(11,x,2,0,"button",11),t.YNc(12,O,2,1,"h3",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",13),t.YNc(14,T,7,1,"div",14),t.YNc(15,h,7,1,"div",15),t.YNc(16,w,7,1,"div",15),t.YNc(17,y,7,1,"div",15),t.YNc(18,P,7,1,"div",15),t.YNc(19,U,7,1,"div",15),t._UZ(20,"hr"),t.YNc(21,S,7,1,"div",14),t.qZA(),t.qZA(),t.qZA(),t.YNc(22,N,11,1,"div",16),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(3),t.Q6J("ngIf",0!=e.imagesHtml.length),t.xp6(6),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio&&5==e.servicio.estatus_id),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",0!=e.videosHtml.length))},directives:[m.O5,c.Hw,m.sg],styles:[".card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#fff;background-clip:border-box}.card[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.card-body[_ngcontent-%COMP%]{padding:1.5rem;flex:1 1 auto}.bg-secondary[_ngcontent-%COMP%]{background-color:#f7fafc!important}a.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus{background-color:#d2e3ee!important}.mt-4[_ngcontent-%COMP%]{margin-top:4rem!important}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.25rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.0625rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.img-form[_ngcontent-%COMP%]{height:50px;max-width:400px}.container-status[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.container-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}.container-status[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:0}"]}),n})();function j(n,o){1&n&&t._UZ(0,"img",22),2&n&&t.Q6J("src",o.$implicit,t.LSH)}function J(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"div",15),t.TgZ(1,"div",5),t.TgZ(2,"div",6),t.TgZ(3,"div",7),t.TgZ(4,"div",8),t.TgZ(5,"h3",16),t._uU(6," Imagenes subidas "),t.qZA(),t.TgZ(7,"a",17),t.NdJ("click",function(){return t.CHM(i),t.oxw().downloadRar()}),t.TgZ(8,"mat-icon",18),t._uU(9,"file_download"),t.qZA(),t.TgZ(10,"p",19),t._uU(11,"Descarga aqui"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",13),t.TgZ(13,"div",2),t.TgZ(14,"div",20),t.YNc(15,j,1,1,"img",21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const i=t.oxw();t.xp6(15),t.Q6J("ngForOf",i.imagesHtml)}}function Q(n,o){if(1&n&&(t.TgZ(0,"h3",16),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.servicio.paquete_nombre)}}function H(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){return t.CHM(i),t.oxw().finalizarServicio()}),t._uU(1,"Finalizar servicio"),t.qZA()}}function k(n,o){if(1&n&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.servicio.estatus_nombre)}}function R(n,o){if(1&n&&(t.TgZ(0,"div",24),t.TgZ(1,"div",25),t.TgZ(2,"mat-icon"),t._uU(3,"face"),t.qZA(),t._uU(4," Nombre del cliente : "),t.qZA(),t.TgZ(5,"div",26),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.nombre_cliente," ")}}function z(n,o){if(1&n&&(t.TgZ(0,"div",24),t.TgZ(1,"div",25),t.TgZ(2,"mat-icon"),t._uU(3,"image"),t.qZA(),t._uU(4," Total de imagenes : "),t.qZA(),t.TgZ(5,"div",26),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.imagesHtml.length," ")}}function $(n,o){if(1&n&&(t.TgZ(0,"div",24),t.TgZ(1,"div",25),t.TgZ(2,"mat-icon"),t._uU(3,"credit_card"),t.qZA(),t._uU(4," El total es : "),t.qZA(),t.TgZ(5,"div",26),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.total," ")}}const D=a(9457);function B(n,o){if(1&n&&(t.TgZ(0,"h3",14),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.servicio.paquete_nombre)}}function X(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){return t.CHM(i),t.oxw().finalizarServicio()}),t._uU(1,"Finalizar servicio"),t.qZA()}}function W(n,o){if(1&n&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.servicio.estatus_nombre)}}function K(n,o){if(1&n&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"mat-icon"),t._uU(3,"calendar_today"),t.qZA(),t._uU(4," Fecha de la sesi\xf3n : "),t.qZA(),t.TgZ(5,"div",18),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.fecha_sesion," ")}}function V(n,o){if(1&n&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"mat-icon"),t._uU(3,"face"),t.qZA(),t._uU(4," Nombre del cliente : "),t.qZA(),t.TgZ(5,"div",18),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.nombre_cliente," ")}}function G(n,o){if(1&n&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"mat-icon"),t._uU(3,"image"),t.qZA(),t._uU(4," Total de fotos digitales : "),t.qZA(),t.TgZ(5,"div",18),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.no_Fotos_Dig," ")}}function tt(n,o){if(1&n&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"mat-icon"),t._uU(3,"image"),t.qZA(),t._uU(4," Total de fotos enmarcada "),t.qZA(),t.TgZ(5,"div",18),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.no_Fotos_Enm," ")}}function it(n,o){if(1&n&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"mat-icon"),t._uU(3,"image"),t.qZA(),t._uU(4," Total de fotos fisicas : "),t.qZA(),t.TgZ(5,"div",18),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.no_Fotos_Fis," ")}}function nt(n,o){if(1&n&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"mat-icon"),t._uU(3,"credit_card"),t.qZA(),t._uU(4," El total es : "),t.qZA(),t.TgZ(5,"div",18),t._uU(6),t.qZA(),t.qZA()),2&n){const i=t.oxw();t.xp6(6),t.hij(" ",i.servicio.total," ")}}const ot=[{path:"",children:[{path:"evento/:id",component:Y,canActivate:[f.X,v.x]},{path:"impresion/:id",component:(()=>{class n{constructor(i,e,u,A){this._rutaActiva=i,this._recepcionistaService=e,this._authService=u,this._toastr=A,this.url=b.N.url,this.mostrarBotonFinalizar=!1,this.subscription=new p.w,this.id="",this.images=[],this.imagesHtml=[],this.destroy$=new Z.xQ,this.user=null}ngOnDestroy(){this.subscription.unsubscribe(),this.destroy$.next({}),this.destroy$.complete()}ngOnInit(){this.getUser(),this.id=this._rutaActiva.snapshot.params.id,this.getServicio(),this.subscription.add(this._recepcionistaService.getImagesImpresion(this.id).subscribe(i=>{i.forEach(e=>{this.imagesHtml.push(this.url+e.url_imagen)}),this.archivoRar=i.url_rar}))}getServicio(){this.subscription.add(this._recepcionistaService.getServicioImpresion(this.id).subscribe(i=>{this.servicio=i}))}getUser(){this.user=this._authService.getUser(),null==this.user&&this.subscription.add(this._authService.user$.pipe((0,g.R)(this.destroy$)).subscribe(i=>{i&&(this.user=i)}))}finalizarServicio(){this.getServicio(),this._recepcionistaService.changeStatusServicioImpresion(this.id).subscribe(i=>{this._toastr.success("Se ha cambiado el estado del servicio exitosamente","Estado cambiado",{positionClass:"toast-bottom-right"})})}downloadRar(){D.saveAs(this.url+this.servicio.url_rar,this.servicio.nombre_cliente+"-"+this.servicio.paquete_nombre+".rar")}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(_.gz),t.Y36(r.i),t.Y36(s.e),t.Y36(l._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-impresiones"]],decls:18,vars:11,consts:[[1,"main-content"],[1,"container","mt-4"],[1,"row"],["class","col-xl-4 order-xl-1",4,"ngIf"],[1,"m-auto","order-xl-1"],[1,"card","bg-secondary","shadow"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-12","header"],["class","mb-0",4,"ngIf"],[1,"container-status"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"card-body"],["class","row mt-3",4,"ngIf"],[1,"col-xl-4","order-xl-1"],[1,"mb-0"],["href","javascript:void(0)",1,"float-right",2,"cursor","pointer",3,"click"],[1,"align-middle"],[1,"align-middle","d-inline"],[1,"col-lg-12"],["class","img-form","style","margin: 3px;",3,"src",4,"ngFor","ngForOf"],[1,"img-form",2,"margin","3px",3,"src"],["type","button",1,"btn","btn-primary",3,"click"],[1,"row","mt-3"],[1,"col-lg-6"],[1,"col-lg-6","text-right"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,J,16,1,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.YNc(9,Q,2,1,"h3",9),t.TgZ(10,"div",10),t.YNc(11,H,2,0,"button",11),t.YNc(12,k,2,1,"h3",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",13),t.YNc(14,R,7,1,"div",14),t.YNc(15,z,7,1,"div",14),t._UZ(16,"hr"),t.YNc(17,$,7,1,"div",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(3),t.Q6J("ngIf",0!=e.imagesHtml.length),t.xp6(1),t.ekj("col-xl-7",0!=e.imagesHtml.length)("col-xl-8",0==e.imagesHtml.length),t.xp6(5),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio&&5==e.servicio.estatus_id),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio))},directives:[m.O5,c.Hw,m.sg],styles:[".card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#fff;background-clip:border-box}.card[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.card-body[_ngcontent-%COMP%]{padding:1.5rem;flex:1 1 auto}.bg-secondary[_ngcontent-%COMP%]{background-color:#f7fafc!important}a.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus{background-color:#d2e3ee!important}.mt-4[_ngcontent-%COMP%]{margin-top:4rem!important}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.25rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.0625rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.img-form[_ngcontent-%COMP%]{height:50px;max-width:400px}.container-status[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.container-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}.container-status[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:0}"]}),n})(),canActivate:[f.X,v.x]},{path:"sesion/:id",component:(()=>{class n{constructor(i,e,u,A){this._rutaActiva=i,this._recepcionistaService=e,this._authService=u,this._toastr=A,this.mostrarBotonFinalizar=!1,this.subscription=new p.w,this.id="",this.destroy$=new Z.xQ,this.user=null}ngOnDestroy(){this.subscription.unsubscribe(),this.destroy$.next({}),this.destroy$.complete()}ngOnInit(){this.getUser(),this.user=this._authService.getUser(),this.id=this._rutaActiva.snapshot.params.id,this.getServicio()}getServicio(){this.subscription.add(this._recepcionistaService.getServicioSesion(this.id).subscribe(i=>{this.servicio=i}))}getUser(){this.user=this._authService.getUser(),null==this.user&&this.subscription.add(this._authService.user$.pipe((0,g.R)(this.destroy$)).subscribe(i=>{i&&(this.user=i)}))}finalizarServicio(){this.getServicio(),this._recepcionistaService.changeStatusServicioSesion(this.id).subscribe(i=>{this._toastr.success("Se ha cambiado el estado del servicio exitosamente","Estado cambiado",{positionClass:"toast-bottom-right"})})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(_.gz),t.Y36(r.i),t.Y36(s.e),t.Y36(l._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sesiones"]],decls:20,vars:9,consts:[[1,"main-content"],[1,"container","mt-4"],[1,"row"],[1,"m-auto","order-xl-1","col-xl-7"],[1,"card","bg-secondary","shadow"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-12","header"],["class","mb-0",4,"ngIf"],[1,"container-status","float-right"],["type","button","class","btn btn-primary btn-sm",3,"click",4,"ngIf"],[4,"ngIf"],[1,"card-body"],["class","row mt-3",4,"ngIf"],[1,"mb-0"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],[1,"row","mt-3"],[1,"col-lg-6"],[1,"col-lg-6","text-right"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.YNc(8,B,2,1,"h3",8),t.TgZ(9,"div",9),t.YNc(10,X,2,0,"button",10),t.YNc(11,W,2,1,"h3",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",12),t.YNc(13,K,7,1,"div",13),t.YNc(14,V,7,1,"div",13),t.YNc(15,G,7,1,"div",13),t.YNc(16,tt,7,1,"div",13),t.YNc(17,it,7,1,"div",13),t._UZ(18,"hr"),t.YNc(19,nt,7,1,"div",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(8),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio&&5==e.servicio.estatus_id),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(1),t.Q6J("ngIf",null!=e.servicio),t.xp6(2),t.Q6J("ngIf",null!=e.servicio))},directives:[m.O5,c.Hw],styles:[".card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#fff;background-clip:border-box}.card[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.card-body[_ngcontent-%COMP%]{padding:1.5rem;flex:1 1 auto}.bg-secondary[_ngcontent-%COMP%]{background-color:#f7fafc!important}a.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus{background-color:#d2e3ee!important}.mt-4[_ngcontent-%COMP%]{margin-top:4rem!important}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.25rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.0625rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.img-form[_ngcontent-%COMP%]{height:50px;max-width:400px}.container-status[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.container-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}.container-status[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:0}"]}),n})(),canActivate:[f.X,v.x]}]}];let rt=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_.Bz.forChild(ot)],_.Bz]}),n})();var st=a(9731);let ct=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,rt,st.q]]}),n})()}}]);