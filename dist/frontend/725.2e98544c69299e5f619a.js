"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[725],{725:(Y,b,i)=>{i.r(b),i.d(b,{MarcosModule:()=>k});var l=i(8583),g=i(4655),p=i(5514),M=i(6823),n=i(3679),_=i(9765),Z=i(5319),C=i(6782),t=i(7716),f=i(1645),v=i(9344),A=i(8060),u=i(8295),T=i(9983),O=i(1095);function x(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.getErrorMessage("nombre")," ")}}function P(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.getErrorMessage("precio")," ")}}let q=(()=>{class e{constructor(o,r,c,s){this._marcoService=o,this._toastr=r,this._router=c,this._authService=s,this.destroy$=new _.xQ,this.user=null,this.subscription=new Z.w,this.agregarMarcoForm=new n.cw({nombre:new n.NI("",[n.kI.required,n.kI.maxLength(20)]),precio:new n.NI("",[n.kI.required]),usuario_registro_id:new n.NI(0,n.kI.required)})}ngOnInit(){this.getUser()}getUser(){this.user=this._authService.getUser(),null==this.user&&this.subscription.add(this._authService.user$.pipe((0,C.R)(this.destroy$)).subscribe(o=>{o&&(this.user=o)}))}ngOnDestroy(){this.subscription.unsubscribe(),this.destroy$.next({}),this.destroy$.complete()}agregarMarco(){this.agregarMarcoForm.controls.usuario_registro_id.setValue(this.user.id),this._marcoService.saveMarco(this.agregarMarcoForm.value).subscribe(r=>{r&&(this._toastr.success("Marco agregado exitosamente"),this._router.navigate(["/administrador/marcos"]))})}getErrorMessage(o){var r,c,s;let d="";return(null===(c=null===(r=this.agregarMarcoForm.get(o))||void 0===r?void 0:r.errors)||void 0===c?void 0:c.required)?d="El campo no puede estar vacio":(null===(s=this.agregarMarcoForm.get(o))||void 0===s?void 0:s.hasError("maxlength"))&&(d="El campo sobrepasa el tama\xf1o permitido"),d}isValidField(o){let r=this.agregarMarcoForm.get(o);return(null==r?void 0:r.touched)||(null==r?void 0:r.dirty)&&!(null==r?void 0:r.valid)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.T),t.Y36(v._W),t.Y36(g.F0),t.Y36(A.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-agregar"]],decls:28,vars:4,consts:[[1,"main-content"],[1,"container","mt-4"],[1,"row"],[1,"col-xl-12","m-auto"],[1,"card","bg-secondary","shadow","m-auto"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-12"],[1,"mb-0"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"pl-lg-4"],[1,"col-lg-12"],[1,"form-group","focused"],[1,"full-width-input"],["matInput","","formControlName","nombre","type","text","placeholder","Nombre del marco",1,"form-control"],[4,"ngIf"],["matInput","","formControlName","precio","type","number","placeholder","Precio",1,"form-control"],["mat-raised-button","","type","submit","color","primary",1,"mt-4",3,"disabled"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"h3",8),t._uU(9,"Agregar marco"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"form",10),t.NdJ("ngSubmit",function(){return r.agregarMarco()}),t.TgZ(12,"div",11),t.TgZ(13,"div",2),t.TgZ(14,"div",12),t.TgZ(15,"div",13),t.TgZ(16,"mat-form-field",14),t._UZ(17,"input",15),t.YNc(18,x,2,1,"mat-error",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",2),t.TgZ(20,"div",12),t.TgZ(21,"div",13),t.TgZ(22,"mat-form-field",14),t._UZ(23,"input",17),t.YNc(24,P,2,1,"mat-error",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",2),t.TgZ(26,"button",18),t._uU(27,"Agregar marco"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(11),t.Q6J("formGroup",r.agregarMarcoForm),t.xp6(7),t.Q6J("ngIf",r.isValidField("nombre")),t.xp6(6),t.Q6J("ngIf",r.isValidField("precio")),t.xp6(2),t.Q6J("disabled",r.agregarMarcoForm.invalid))},directives:[n._Y,n.JL,n.sg,u.KE,T.Nt,n.Fj,n.JJ,n.u,l.O5,n.wV,O.lW,u.TO],styles:[".agregar-form[_ngcontent-%COMP%]{padding:4rem 1rem}mat-card[_ngcontent-%COMP%]{max-width:300px;margin:2rem auto;text-align:center;height:200px}.full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.separator[_ngcontent-%COMP%]{margin-bottom:2rem}.card[_ngcontent-%COMP%]{text-align:center;width:40%!important}.ventana[_ngcontent-%COMP%]{width:70%}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#fff;background-clip:border-box}.card[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.card-body[_ngcontent-%COMP%]{padding:1.5rem;flex:1 1 auto}.bg-secondary[_ngcontent-%COMP%]{background-color:#f7fafc!important}a.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus{background-color:#d2e3ee!important}.mt-7[_ngcontent-%COMP%]{margin-top:6rem!important}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.25rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.0625rem}"]}),e})();function y(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.getErrorMessage("nombre")," ")}}function w(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.getErrorMessage("precio")," ")}}let F=(()=>{class e{constructor(o,r,c,s,d){this._marcoService=o,this._rutaActiva=r,this._authService=c,this._router=s,this._toastr=d,this.id="",this.destroy$=new _.xQ,this.user=null,this.subscription=new Z.w,this.editarMarcoForm=new n.cw({nombre:new n.NI("",[n.kI.required,n.kI.maxLength(20),n.kI.minLength(1)]),precio:new n.NI(0,[n.kI.required,n.kI.min(1)]),usuario_registro_id:new n.NI(0,[n.kI.required]),usuario_modificacion_id:new n.NI(0,[n.kI.required])})}ngOnInit(){this.getUser(),this.id=this._rutaActiva.snapshot.params.id,this.subscription.add(this._marcoService.getMarco(this.id).subscribe(o=>{o?(this.editarMarcoForm.controls.nombre.setValue(o.nombre),this.editarMarcoForm.controls.precio.setValue(o.precio),this.editarMarcoForm.controls.usuario_registro_id.setValue(o.usuario_registro_id),this.editarMarcoForm.controls.usuario_modificacion_id.setValue(this.user.id)):this._router.navigate(["/administrador/marcos"])}))}ngOnDestroy(){this.subscription.unsubscribe(),this.destroy$.next({}),this.destroy$.complete()}getUser(){this.user=this._authService.getUser(),null==this.user&&this.subscription.add(this._authService.user$.pipe((0,C.R)(this.destroy$)).subscribe(o=>{o&&(this.user=o)}))}editarMarco(){this._marcoService.updateMarco(this.id,this.editarMarcoForm.value).subscribe(r=>{r&&(this._toastr.success("El marco fue actualizado exitosamente","Marco actualizado",{positionClass:"toast-bottom-right"}),this._router.navigate(["/administrador/marcos"]))})}getErrorMessage(o){var r,c,s,d,h;let m="";return(null===(c=null===(r=this.editarMarcoForm.get(o))||void 0===r?void 0:r.errors)||void 0===c?void 0:c.required)?m="El campo no puede estar vacio":(null===(s=this.editarMarcoForm.get(o))||void 0===s?void 0:s.hasError("maxlength"))?m="El campo sobrepasa el tama\xf1o permitido":(null===(d=this.editarMarcoForm.get(o))||void 0===d?void 0:d.hasError("minlength"))?m="El campo no alcanza el minimo permitido":(null===(h=this.editarMarcoForm.get(o))||void 0===h?void 0:h.hasError("min"))&&(m="No es un precio valido"),m}isValidField(o){let r=this.editarMarcoForm.get(o);return(null==r?void 0:r.touched)||(null==r?void 0:r.dirty)&&!(null==r?void 0:r.valid)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.T),t.Y36(g.gz),t.Y36(A.e),t.Y36(g.F0),t.Y36(v._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-editar"]],decls:28,vars:4,consts:[[1,"main-content"],[1,"container","mt-4"],[1,"row"],[1,"col-xl-12","m-auto"],[1,"card","bg-secondary","shadow","m-auto"],[1,"card-header","bg-white","border-0"],[1,"row","align-items-center"],[1,"col-12"],[1,"mb-0"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"pl-lg-4"],[1,"col-lg-12"],[1,"form-group","focused"],[1,"full-width-input"],["matInput","","formControlName","nombre","type","text","placeholder","Nombre del marco",1,"form-control"],[4,"ngIf"],["matInput","","formControlName","precio","type","number","placeholder","Precio",1,"form-control"],["mat-raised-button","","type","submit","color","primary",1,"mt-4",3,"disabled"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"h3",8),t._uU(9,"Editar marco"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"form",10),t.NdJ("ngSubmit",function(){return r.editarMarco()}),t.TgZ(12,"div",11),t.TgZ(13,"div",2),t.TgZ(14,"div",12),t.TgZ(15,"div",13),t.TgZ(16,"mat-form-field",14),t._UZ(17,"input",15),t.YNc(18,y,2,1,"mat-error",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",2),t.TgZ(20,"div",12),t.TgZ(21,"div",13),t.TgZ(22,"mat-form-field",14),t._UZ(23,"input",17),t.YNc(24,w,2,1,"mat-error",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",2),t.TgZ(26,"button",18),t._uU(27,"Editar marco"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(11),t.Q6J("formGroup",r.editarMarcoForm),t.xp6(7),t.Q6J("ngIf",r.isValidField("nombre")),t.xp6(6),t.Q6J("ngIf",r.isValidField("precio")),t.xp6(2),t.Q6J("disabled",r.editarMarcoForm.invalid))},directives:[n._Y,n.JL,n.sg,u.KE,T.Nt,n.Fj,n.JJ,n.u,l.O5,n.wV,O.lW,u.TO],styles:[".edit-form[_ngcontent-%COMP%]{padding:4rem 1rem}mat-card[_ngcontent-%COMP%]{max-width:300px;margin:2rem auto;text-align:center;height:200px}.full-width-input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}.separator[_ngcontent-%COMP%]{margin-bottom:2rem}.card[_ngcontent-%COMP%]{text-align:center;width:40%!important}.ventana[_ngcontent-%COMP%]{width:70%}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#fff;background-clip:border-box}.card[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.card-body[_ngcontent-%COMP%]{padding:1.5rem;flex:1 1 auto}.bg-secondary[_ngcontent-%COMP%]{background-color:#f7fafc!important}a.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus{background-color:#d2e3ee!important}.mt-7[_ngcontent-%COMP%]{margin-top:6rem!important}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.25rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.0625rem}"]}),e})();var I=i(6627);function U(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"th",9),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",10),t.TgZ(8,"a",11),t.TgZ(9,"mat-icon"),t._uU(10,"edit"),t.qZA(),t.qZA(),t.TgZ(11,"a",12),t.NdJ("click",function(){const c=t.CHM(o),s=c.$implicit,d=c.index;return t.oxw().eliminarMarco(s.id,d)}),t.TgZ(12,"mat-icon"),t._uU(13,"delete"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=a.$implicit;t.xp6(2),t.Oqu(o.id),t.xp6(2),t.hij(" ",o.nombre,""),t.xp6(2),t.hij(" ",o.precio,""),t.xp6(2),t.MGl("routerLink","/administrador/marcos/",o.id,"")}}const N=[{path:"",children:[{path:"agregar",component:q,canActivate:[M.X,p.D]},{path:":id",component:F,canActivate:[M.X,p.D]},{path:"",component:(()=>{class e{constructor(o,r){this._marcosService=o,this._toastr=r,this.marcos=[],this.subscription=new Z.w}ngOnInit(){this.getMarcos()}eliminarMarco(o,r){this._marcosService.deleteMarco(o).subscribe(c=>{this._toastr.success("El marco fue eliminado exitosamente","Marco eliminado",{positionClass:"toast-bottom-right"}),this.marcos.splice(r,1)})}getMarcos(){this.subscription.add(this._marcosService.getMarcos().subscribe(o=>{this.marcos=o}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.T),t.Y36(v._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-listado"]],decls:20,vars:1,consts:[[1,"container","mt-4"],[1,"card"],[1,"card-body"],[1,"h3"],["routerLink","agregar",1,"btn","btn-dark","btn-lg","float-right"],[1,"table","table-striped","mt-5"],["scope","col"],["scope","col",2,"width","80%"],[4,"ngFor","ngForOf"],["scope","row"],[2,"display","flex","flex-direction","row"],[1,"nav-link",3,"routerLink"],[1,"nav-link",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"span",3),t._uU(4,"Lista de servicios"),t.qZA(),t.TgZ(5,"a",4),t._uU(6,"Agregar"),t.qZA(),t.TgZ(7,"table",5),t.TgZ(8,"thead"),t.TgZ(9,"tr"),t.TgZ(10,"th",6),t._uU(11,"Id"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th",6),t._uU(15,"Precio"),t.qZA(),t.TgZ(16,"th",6),t._uU(17,"Opciones"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"tbody"),t.YNc(19,U,14,4,"tr",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(19),t.Q6J("ngForOf",r.marcos))},directives:[g.yS,l.sg,I.Hw],styles:["table[_ngcontent-%COMP%]{width:40%;margin:auto}.mat-column-id[_ngcontent-%COMP%]{width:32px;border-right:1px solid currentColor;padding-right:24px;text-align:center}.mat-column-userId[_ngcontent-%COMP%]{width:32px;border-right:1px solid currentColor;padding-right:24px;text-align:center}.mat-column-title[_ngcontent-%COMP%]{padding-left:16px;font-size:20px}.mat-column-body[_ngcontent-%COMP%]{font-style:italic}.mat-column-demo-symbol[_ngcontent-%COMP%]{width:32px;text-align:center;font-weight:bold}.container-btn[_ngcontent-%COMP%]{width:40%;margin:auto;text-align:right}"]}),e})(),canActivate:[M.X,p.D]}]}];let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(N)],g.Bz]}),e})();var J=i(9731);let k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,S,J.q,n.u5,n.UX]]}),e})()}}]);