(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){t.exports=n("zUnb")},"73Ib":function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return P}));var r=n("XNiG"),o=n("quSY"),a=n("Cfvw"),s=n("eIep"),c=n("fXoL"),i=n("khYj"),u=n("eHuo"),b=n("tyNb"),l=n("/t3+"),h=n("ofXK"),g=n("jaxi"),p=n("bTqV"),f=n("NFeN"),d=n("STbY"),m=n("sYmb");const _=["toolbar"];function v(t,e){if(1&t){const t=c.Rb();c.Qb(0,"button",5),c.Yb("click",(function(){return c.jc(t),c.ac().backClick$$.next()})),c.Qb(1,"mat-icon"),c.qc(2,"keyboard_backspace"),c.Pb(),c.Pb()}}function k(t,e){if(1&t&&(c.Qb(0,"mat-button-toggle",6),c.qc(1),c.bc(2,"lowercase"),c.Pb()),2&t){const t=e.$implicit;c.fc("value",t),c.zb(1),c.rc(c.cc(2,2,t))}}function w(t,e){if(1&t){const t=c.Rb();c.Qb(0,"span"),c.Qb(1,"button",7),c.Qb(2,"mat-icon"),c.qc(3,"more_vert"),c.Pb(),c.Pb(),c.Pb(),c.Qb(4,"mat-menu",null,8),c.Qb(6,"button",9),c.Yb("click",(function(){return c.jc(t),c.ac().logoutClick$$.next()})),c.Qb(7,"span",10),c.qc(8,"Logout"),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.ic(5);c.zb(1),c.fc("matMenuTriggerFor",t)}}var y=function(t){return t[t.normal=0]="normal",t[t.error=1]="error",t[t.checkIn=2]="checkIn",t[t.checkOut=3]="checkOut",t[t.success=4]="success",t}({});let P=(()=>{class t{constructor(t,e,n){this._auth=t,this._language=e,this._router=n,this.type=y.normal,this.showLogoutButton=!1,this.showBackButton=!1,this.logoutClick$$=new r.a,this.backClick$$=new r.a,this._subs=new o.a}ngOnInit(){this._subs.add(this.logoutClick$$.pipe(Object(s.a)(this._auth.logOut$.bind(this._auth))).subscribe()),this._subs.add(this.backClick$$.pipe(Object(s.a)(()=>Object(a.a)(this._router.navigate(["in-out"])))).subscribe())}ngOnDestroy(){this._subs.unsubscribe()}ngAfterViewInit(){switch(this.type){case y.error:this._toolbar.color="warn";break;case y.normal:this._toolbar.color="primary";break;case y.checkIn:this._toolbar.color="primary",this._toolbar._elementRef.nativeElement.style="background-color:#03a9f4";break;case y.checkOut:this._toolbar.color="accent";break;case y.success:this._toolbar.color="primary",this._toolbar._elementRef.nativeElement.style="background-color:#FFD600"}}get languages(){return this._language.languages}get currentLanguage(){return this._language.currentLanguage}onLanguageChange(t){this._language.use(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(i.a),c.Lb(u.b),c.Lb(b.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-toolbar"]],viewQuery:function(t,e){var n;1&t&&c.vc(_,!0),2&t&&c.hc(n=c.Zb())&&(e._toolbar=n.first)},inputs:{type:"type",title:"title",showLogoutButton:"showLogoutButton",showBackButton:"showBackButton"},decls:10,vars:5,consts:[["toolbar",""],[3,"ngIf"],[1,"spacer"],[3,"value","change"],[3,"value",4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"],[3,"value"],["mat-icon-button","",3,"matMenuTriggerFor"],["extraMenu","matMenu"],["mat-menu-item","",3,"click"],[3,"translate"]],template:function(t,e){1&t&&(c.Qb(0,"mat-toolbar",null,0),c.Qb(2,"mat-toolbar-row"),c.pc(3,v,3,0,"ng-template",1),c.Qb(4,"h1"),c.qc(5),c.Pb(),c.Mb(6,"span",2),c.Qb(7,"mat-button-toggle-group",3),c.Yb("change",(function(t){return e.onLanguageChange(t.value)})),c.pc(8,k,3,4,"mat-button-toggle",4),c.Pb(),c.pc(9,w,9,1,"ng-template",1),c.Pb(),c.Pb()),2&t&&(c.zb(3),c.fc("ngIf",e.showBackButton),c.zb(2),c.rc(e.title),c.zb(2),c.fc("value",e.currentLanguage),c.zb(1),c.fc("ngForOf",e.languages),c.zb(1),c.fc("ngIf",e.showLogoutButton))},directives:[l.a,l.c,h.k,g.b,h.j,p.b,f.a,g.a,d.c,d.d,d.a,m.a],pipes:[h.h],styles:[""]}),t})()},AytR:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r="https://idme.ch/",o={production:!0,backend:{host:r,prefix:"checkinout/api/",auth_prefix:"api/",base:r+"checkinout/api/"}}},PCNd:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var r=n("ofXK"),o=n("/t3+"),a=n("STbY"),s=n("NFeN"),c=n("bTqV"),i=n("YUcS"),u=n("3Pt+"),b=n("kmnG"),l=n("qFsG"),h=n("tk/3"),g=n("sYmb"),p=n("d3UM"),f=n("YjoU"),d=n("jaxi"),m=n("fXoL");let _=(()=>{class t{}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[r.b,o.b,a.b,s.b,c.c,i.a,u.l,b.e,l.b,h.c,g.c,p.b,d.c,f.a],r.b,o.b,a.b,s.b,c.c,i.a,u.l,b.e,l.b,h.c,g.c,p.b]}),t})()},TAFP:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("z6cu"),o=n("AytR"),a=n("JIr8"),s=n("fXoL");let c=(()=>{class t{constructor(){}intercept(t,e){if(!t.url.match("json")){const e=(("authenticate"===t.url?o.a.backend.host+o.a.backend.auth_prefix:o.a.backend.base)+"/"+t.url).split("/").filter(t=>!!t).join("/").replace(/(https?:)\//,"$1//");t=t.clone({url:e})}return e.handle(t).pipe(Object(a.a)(t=>{const e=t.error.hasOwnProperty("detail")?t.error.detail:t.error.hasOwnProperty("message")?t.error.message:t.message;return Object(r.a)(new Error(e))}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac}),t})()},YjoU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),o=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.b]]}),t})()},eHuo:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var r=n("fXoL"),o=n("YjoU"),a=n("sYmb");const s=["en","de"],c=new r.q("local_storage");let i=(()=>{class t{constructor(t,e){if(this._translate=t,this._storage=e,this._translate.addLangs(s),this._translate.setDefaultLang("en"),this._storage.has("language"))this._translate.use(this._storage.get("language"));else{const t=this._translate.getBrowserLang();for(const e of s){const n=new RegExp(e);if(t.match(n)){this.use(e);break}}}}use(t){return this._storage.set("language",t),this._translate.use(t)}translate(t){return this._translate.instant(t)}get languages(){return s}get currentLanguage(){return this._translate.currentLang}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(a.e),r.Ub(c))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:o.a}),t})()},khYj:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("LRne"),o=n("Cfvw"),a=n("vkgz"),s=n("eIep"),c=n("JIr8"),i=n("Nm8O"),u=n("eHuo"),b=n("fXoL"),l=n("tk/3"),h=n("y9W9"),g=n("tyNb");let p=(()=>{class t{constructor(t,e,n,r){this._http=t,this._storage=e,this._err=n,this._router=r,this._jwtHelper=new i.a}get isLoggedIn(){let t=this._storage.has("authorization");if(t)try{console.info("Token expires at: %s",this._jwtHelper.getTokenExpirationDate(this._storage.get("authorization"))),t=!this._jwtHelper.isTokenExpired(this._storage.get("authorization"))}catch(e){console.error(e),t=!1}return t}get token(){return this.isLoggedIn?this._storage.get("authorization"):null}get user(){return this._storage.has("user")?this._storage.get("user"):null}get club(){return this._storage.has("club")?this._storage.get("club"):null}authorize$(t){return this._http.post("authenticate",t).pipe(Object(a.a)(this._saveTokenData.bind(this)),Object(s.a)(t=>this._http.get("user/"+t.userId,{headers:{Authorization:"Bearer "+t.id_token}}).pipe(Object(a.a)(this._saveUserData.bind(this)),Object(s.a)(e=>this._http.get("club/"+e.clubId,{headers:{Authorization:"Bearer "+t.id_token}})),Object(a.a)(this._saveClubData.bind(this)))),Object(c.a)(t=>(this._err.handleError(t),Object(r.a)(t))))}logOut$(){return this._storage.remove("authorization"),this._storage.remove("user"),this._storage.remove("club"),Object(o.a)(this._router.navigate(["/"]))}_saveTokenData(t){const{id_token:e}=t;this._storage.set("authorization",e)}_saveUserData(t){this._storage.set("user",t)}_saveClubData(t){this._storage.set("club",t)}}return t.\u0275fac=function(e){return new(e||t)(b.Ub(l.b),b.Ub(u.a),b.Ub(h.a),b.Ub(g.a))},t.\u0275prov=b.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},y9W9:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("fXoL"),o=n("dNgK"),a=n("eHuo");let s=(()=>{class t{constructor(t,e,n){this._snack=t,this._zone=e,this._lang=n}handleError(t){console.error(t),this._zone.run(()=>{this._snackBar=this._snack.open(this._lang.translate(t.message),this._lang.translate("close"),{data:t,panelClass:"error",duration:5e3})})}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(o.a),r.Ub(r.z),r.Ub(a.b))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("fXoL"),o=n("AytR"),a=n("jhN1"),s=n("tyNb");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"mobile-center"],[1,"card"]],template:function(t,e){1&t&&(r.Qb(0,"div",0),r.Qb(1,"main",1),r.Mb(2,"router-outlet"),r.Pb(),r.Pb())},directives:[s.d],styles:["[_nghost-%COMP%]{flex-direction:column;flex:1;height:100%}[_nghost-%COMP%], main[_ngcontent-%COMP%]{display:flex}.mobile-center[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{flex-direction:column}.mobile-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}@media (min-width:600px){.mobile-center[_ngcontent-%COMP%]{height:100vh}}a[_ngcontent-%COMP%]{text-decoration:none}"],changeDetection:0}),t})();var i=n("73Ib"),u=n("XiUz"),b=n("sYmb"),l=n("NFeN"),h=n("bTqV");let g=(()=>{class t{constructor(){}ngOnInit(){}get toolbarType(){return i.b.error}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-error"]],decls:12,vars:1,consts:[["title","Check In/Out",3,"type"],[1,"content"],["fxLayout","column","fxLayoutAlign","center center"],[3,"translate"],["color","warn",1,"symbol"],[2,"height","300px"],["mat-raised-button","","color","warn","routerLink","/"]],template:function(t,e){1&t&&(r.Mb(0,"app-toolbar",0),r.Qb(1,"div",1),r.Qb(2,"div",2),r.Qb(3,"h1",3),r.qc(4,"Error"),r.Pb(),r.Qb(5,"h3",3),r.qc(6,"Page Not Found"),r.Pb(),r.Qb(7,"mat-icon",4),r.qc(8,"cancel"),r.Pb(),r.Mb(9,"p",5),r.Qb(10,"button",6),r.qc(11,"Ok"),r.Pb(),r.Pb(),r.Pb()),2&t&&r.fc("type",e.toolbarType)},directives:[i.a,u.b,u.a,b.a,l.a,h.b,s.b],styles:[""]}),t})();var p=n("XNiG"),f=n("quSY"),d=n("Cfvw"),m=n("3Pt+"),_=n("pLZG"),v=n("lJxs"),k=n("eIep"),w=n("tk/3"),y=n("khYj"),P=n("kmnG"),O=n("qFsG"),j=n("ofXK");function L(t,e){1&t&&(r.Qb(0,"mat-error",2),r.qc(1,"Login required "),r.Pb())}function I(t,e){1&t&&(r.Qb(0,"mat-error",2),r.qc(1,"Password required "),r.Pb())}let x=(()=>{class t{constructor(t,e){this._auth=t,this._router=e,this.submit$$=new p.a,this._subs=new f.a}ngOnInit(){this.form=new m.d({username:new m.b("",[m.n.required]),password:new m.b("",[m.n.required])}),this._subs.add(this.submit$$.asObservable().pipe(Object(_.a)(()=>this.form.valid),Object(v.a)(()=>Object.assign({},this.form.value,{rememberMe:!1})),Object(k.a)(this._auth.authorize$.bind(this._auth)),Object(_.a)(t=>!(t instanceof Error||t instanceof w.d)),Object(k.a)(()=>Object(d.a)(this._router.navigate(["in-out"])))).subscribe())}ngOnDestroy(){this._subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(y.a),r.Lb(s.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-login"]],decls:24,vars:4,consts:[["title","Check In/Out"],[1,"content"],[3,"translate"],[1,"main-content",3,"formGroup","ngSubmit"],["fxLayout","column",1,"central-content"],["autofocus","","formControlName","username","matInput","","required","","type","text"],[3,"translate",4,"ngIf"],["formControlName","password","matInput","","required","","type","password"],["fxLayoutAlign","center center","fxLayout","column",1,"top-margin"],["color","primary","mat-raised-button","","type","submit",3,"disabled"],["mat-button","",1,"restore-password"]],template:function(t,e){1&t&&(r.Mb(0,"app-toolbar",0),r.Qb(1,"div",1),r.Qb(2,"h2",2),r.qc(3,"Enter your credentials to sign-in"),r.Pb(),r.Qb(4,"form",3),r.Yb("ngSubmit",(function(){return e.submit$$.next()})),r.Qb(5,"section",4),r.Qb(6,"div"),r.Qb(7,"mat-form-field"),r.Qb(8,"mat-label",2),r.qc(9,"Username"),r.Pb(),r.Mb(10,"input",5),r.pc(11,L,2,0,"mat-error",6),r.Pb(),r.Qb(12,"mat-form-field"),r.Qb(13,"mat-label",2),r.qc(14,"Password"),r.Pb(),r.Mb(15,"input",7),r.pc(16,I,2,0,"mat-error",6),r.Pb(),r.Pb(),r.Qb(17,"div",8),r.Qb(18,"button",9),r.Qb(19,"span",2),r.qc(20,"Login"),r.Pb(),r.Pb(),r.Qb(21,"a",10),r.Qb(22,"span",2),r.qc(23,"Do not remember the password?"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.zb(4),r.fc("formGroup",e.form),r.zb(7),r.fc("ngIf",e.form.controls.username.hasError("required")),r.zb(5),r.fc("ngIf",e.form.controls.password.hasError("required")),r.zb(2),r.fc("disabled",e.form.invalid))},directives:[i.a,b.a,m.o,m.j,m.e,u.b,P.c,P.f,m.a,O.a,m.i,m.c,m.m,j.k,u.a,h.b,h.a,P.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1}.main-content[_ngcontent-%COMP%]{margin-top:24px}.central-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}a.restore-password[_ngcontent-%COMP%]{color:grey;font-weight:400;font-size:16px;text-decoration:underline}.top-margin[_ngcontent-%COMP%]{margin-top:36px}"],changeDetection:0}),t})(),Q=(()=>{class t{constructor(t,e){this._auth=t,this._router=e}canActivate(t,e){return!!this._auth.isLoggedIn||this._router.parseUrl("/")}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(y.a),r.Ub(s.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const C=[{path:"",component:c,children:[{path:"",component:x,canActivate:[(()=>{class t{constructor(t,e){this._auth=t,this._router=e}canActivate(t,e){return!this._auth.isLoggedIn||this._router.parseUrl("in-out")}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(y.a),r.Ub(s.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]},{path:"in-out",loadChildren:()=>n.e(7).then(n.bind(null,"J6bi")).then(t=>t.InOutModule),canActivate:[Q]},{path:"**",component:g}]}];let q=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[s.c.forRoot(C)],s.c]}),t})(),z=(()=>{class t{constructor(){this.title="check-in-out-app"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){1&t&&r.Mb(0,"router-outlet")},directives:[s.d],encapsulation:2,changeDetection:0}),t})();var M=n("R1ws"),U=n("SX+u"),$=n("y9W9"),F=n("PCNd"),N=n("TAFP"),Y=n("mqiu"),D=n("dNgK"),T=n("eHuo");function B(t){return new Y.a(t,o.a.production?"./assets/i18n/":"/assets/i18n/")}let E=(()=>{class t{}return t.\u0275mod=r.Jb({type:t,bootstrap:[z]}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[{provide:T.a,useExisting:U.a},{useClass:$.a,provide:r.m},{useClass:N.a,provide:w.a,multi:!0}],imports:[[a.a,q,M.b,F.a,D.b,b.c.forRoot({loader:{provide:b.b,useFactory:B,deps:[w.b]}})]]}),t})();o.a.production&&Object(r.S)(),a.c().bootstrapModule(E).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,6]]]);