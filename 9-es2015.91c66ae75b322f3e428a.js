(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{bD6a:function(n,e,t){"use strict";t.r(e),t.d(e,"CheckOutModule",(function(){return _}));var o=t("ofXK"),c=t("tyNb"),r=t("quSY"),s=t("2Vo4"),a=t("pLZG"),i=t("eIep"),u=t("fXoL"),b=t("4jVr"),l=t("f0Cb"),d=t("IyRd"),p=t("bTqV");const m=function(){return["QR_CODE"]};let h=(()=>{class n{constructor(n){this._operations=n,this._subs=new r.a,this.scanned$$=new s.a(!1),this.scannerEnabled=!0,this.currentDevice=null}ngOnInit(){this._subs.add(this.scanned$$.asObservable().pipe(Object(a.a)(n=>!!n),Object(i.a)(this._operations.checkOut$.bind(this._operations)),Object(a.a)(n=>!!n)).subscribe())}onCamerasFound(n){console.log("camera found"),this.availableDevices=n,this.hasDevices=Boolean(n&&n.length);for(const e of n)if(/back|rear|environment/gi.test(e.label)){this.currentDevice=e;break}this.hasDevices&&!this.currentDevice&&(this.currentDevice=n[0])}onCamerasNotFound(){console.log("camera not found"),this.hasDevices=!1}onHasPermission(n){console.log("has permissions"),this.hasPermission=n}handleQrCodeResult(n){console.log("handle",n);let e={};n.split(";").forEach(n=>{const[t,o]=n.split("=");e[t]=o}),this.scanned$$.next(e)}scanError(){console.log("error")}}return n.\u0275fac=function(e){return new(e||n)(u.Kb(b.a))},n.\u0275cmp=u.Eb({type:n,selectors:[["app-check-out"]],decls:7,vars:5,consts:[[1,"scanner"],[3,"enable","device","formats","tryHarder","scanSuccess","scanError","camerasFound","camerasNotFound","permissionResponse"],["routerLink","/in-out","mat-button",""]],template:function(n,e){1&n&&(u.Pb(0,"h3"),u.pc(1,"Scan QR Code"),u.Ob(),u.Lb(2,"mat-divider"),u.Pb(3,"div",0),u.Pb(4,"zxing-scanner",1),u.Xb("scanSuccess",(function(n){return e.handleQrCodeResult(n)}))("scanError",(function(){return e.scanError()}))("camerasFound",(function(n){return e.onCamerasFound(n)}))("camerasNotFound",(function(){return e.onCamerasNotFound()}))("permissionResponse",(function(n){return e.onHasPermission(n)})),u.Ob(),u.Ob(),u.Pb(5,"a",2),u.pc(6,"Cancel"),u.Ob()),2&n&&(u.zb(4),u.ec("enable",e.scannerEnabled)("device",e.currentDevice)("formats",u.fc(4,m))("tryHarder",!0))},directives:[l.a,d.a,c.c,p.a],styles:["h3[_ngcontent-%COMP%]{color:grey}mat-divider[_ngcontent-%COMP%]{background-color:#03a9f4}div.scanner[_ngcontent-%COMP%]{padding:24px;margin-top:36px}[_nghost-%COMP%]   zxing-scanner[_ngcontent-%COMP%] {width:100%;height:100%;-o-object-fit:contain;object-fit:contain}a[_ngcontent-%COMP%]{margin:0 auto;display:block;padding-top:36px;font-weight:400;color:grey!important;text-decoration:underline}"],changeDetection:0}),n})(),f=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=u.Eb({type:n,selectors:[["app-check-out-success"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary","routerLink","/in-out"]],template:function(n,e){1&n&&(u.Pb(0,"p"),u.pc(1,"Visitor is successfully checked out"),u.Ob(),u.Pb(2,"button",0),u.pc(3,"Ok"),u.Ob())},directives:[p.b,c.b],styles:[""]}),n})();var g=t("/t3+"),O=t("XiUz"),v=t("sYmb"),P=t("STbY"),y=t("NFeN");const C=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=u.Eb({type:n,selectors:[["app-layout"]],decls:16,vars:1,consts:[["color","accent"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","routerLink","/"],[3,"translate"],[1,"spacer"],["mat-icon-button","",3,"matMenuTriggerFor"],["extraMenu","matMenu"],["mat-menu-item",""],[1,"content"]],template:function(n,e){if(1&n&&(u.Pb(0,"mat-toolbar",0),u.Pb(1,"mat-toolbar-row"),u.Pb(2,"a",1),u.Pb(3,"h1",2),u.pc(4,"Check-out"),u.Ob(),u.Ob(),u.Lb(5,"span",3),u.Pb(6,"span"),u.Pb(7,"button",4),u.Pb(8,"mat-icon"),u.pc(9,"more_vert"),u.Ob(),u.Ob(),u.Ob(),u.Pb(10,"mat-menu",null,5),u.Pb(12,"button",6),u.pc(13,"Logout"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(14,"div",7),u.Lb(15,"router-outlet"),u.Ob()),2&n){const n=u.hc(11);u.zb(7),u.ec("matMenuTriggerFor",n)}},directives:[g.a,g.c,c.c,O.a,O.c,O.b,v.a,p.b,P.c,y.a,P.d,P.a,c.e],styles:["a[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#000}"]}),n})(),children:[{path:"",component:h},{path:"success",component:f}]}];let w=(()=>{class n{}return n.\u0275mod=u.Ib({type:n}),n.\u0275inj=u.Hb({factory:function(e){return new(e||n)},imports:[[c.d.forChild(C)],c.d]}),n})();var k=t("PCNd");let _=(()=>{class n{}return n.\u0275mod=u.Ib({type:n}),n.\u0275inj=u.Hb({factory:function(e){return new(e||n)},imports:[[o.c,w,d.b,l.b,k.a]]}),n})()}}]);