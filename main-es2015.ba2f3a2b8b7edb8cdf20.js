(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){t.exports=n("zUnb")},AytR:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r="https://idme.ch/",o={production:!0,backend:{host:r,prefix:"checkinout/api/",auth_prefix:"api/",base:r+"checkinout/api/"}}},PCNd:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("ofXK"),o=n("/t3+"),a=n("STbY"),c=n("NFeN"),s=n("bTqV"),i=n("YUcS"),u=n("3Pt+"),b=n("kmnG"),l=n("qFsG"),p=n("tk/3"),d=n("sYmb"),f=n("fXoL");let h=(()=>{class t{}return t.\u0275mod=f.Ib({type:t}),t.\u0275inj=f.Hb({factory:function(e){return new(e||t)},imports:[[r.c,o.b,a.b,c.b,s.c,i.a,u.l,b.d,l.b,p.c,d.c],r.c,o.b,a.b,c.b,s.c,i.a,u.l,b.d,l.b,p.c,d.c]}),t})()},TAFP:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("z6cu"),o=n("AytR"),a=n("JIr8"),c=n("fXoL");let s=(()=>{class t{constructor(){}intercept(t,e){if(!t.url.match("json")){const e=(("authenticate"===t.url?o.a.backend.host+o.a.backend.auth_prefix:o.a.backend.base)+"/"+t.url).split("/").filter(t=>!!t).join("/").replace(/(https?:)\//,"$1//");t=t.clone({url:e})}return e.handle(t).pipe(Object(a.a)(t=>{const e=t.error.hasOwnProperty("detail")?t.error.detail:t.error.hasOwnProperty("message")?t.error.message:t.message;return Object(r.a)(new Error(e))}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})()},khYj:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return d}));var r=n("fXoL"),o=n("LRne"),a=n("Cfvw"),c=n("vkgz"),s=n("eIep"),i=n("JIr8"),u=n("tk/3"),b=n("y9W9"),l=n("tyNb");const p=new r.q("local_storage");let d=(()=>{class t{constructor(t,e,n,r){this._http=t,this._storage=e,this._err=n,this._router=r}get isLoggedIn$(){return Object(o.a)(this._storage.has("authorization"))}get token(){return this._storage.has("authorization")?this._storage.get("authorization"):null}authorize$(t){return this._http.post("authenticate",t).pipe(Object(c.a)(this._saveTokenData.bind(this)),Object(s.a)(t=>this._http.get("user/"+t.userId,{headers:{Authorization:"Bearer "+t.id_token}})),Object(c.a)(console.log.bind(console)),Object(i.a)(t=>(this._err.handleError(t),Object(o.a)(t))))}logOut$(){return this._storage.remove("authorization"),Object(a.a)(this._router.navigate(["/"]))}_saveTokenData(t){const{id_token:e}=t;this._storage.set("authorization",e)}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(u.b),r.Tb(p),r.Tb(b.a),r.Tb(l.a))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},qyK6:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("tk/3"),o=n("LRne"),a=n("fXoL");let c=(()=>{class t{constructor(){}intercept(t,e){const n=t.url;switch(console.log("Make a backend call to",n),n){case"/club/registration/validation":case"/club/checkout":case"/club/checkin":return Object(o.a)(new r.e({status:201,body:{currentGuestNumber:0,maxGuestNumber:0}}))}return e.handle(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})()},y9W9:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("fXoL"),o=n("dNgK"),a=n("sYmb");let c=(()=>{class t{constructor(t,e,n){this._snack=t,this._zone=e,this._translate=n}handleError(t){this._zone.run(()=>{this._snackBar=this._snack.open(this._translate.instant(t.message),this._translate.instant("close"),{data:t,panelClass:"error",duration:5e3})})}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(o.a),r.Tb(r.z),r.Tb(a.e))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("fXoL"),o=n("AytR"),a=n("jhN1"),c=n("tyNb");let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"mobile-center"],[1,"card"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"main",1),r.Lb(2,"router-outlet"),r.Ob(),r.Ob())},directives:[c.e],styles:["[_nghost-%COMP%]{flex-direction:column;flex:1;height:100%}[_nghost-%COMP%], main[_ngcontent-%COMP%]{display:flex}.mobile-center[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{flex-direction:column}.mobile-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}@media (min-width:600px){.mobile-center[_ngcontent-%COMP%]{height:100vh}}a[_ngcontent-%COMP%]{text-decoration:none}"],changeDetection:0}),t})();var i=n("/t3+"),u=n("XiUz"),b=n("sYmb"),l=n("NFeN"),p=n("bTqV");let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-error"]],decls:14,vars:0,consts:[["color","warn"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","routerLink","/"],[1,"content"],["fxLayout","column","fxLayoutAlign","center center"],[3,"translate"],["color","warn",1,"symbol"],["mat-raised-button","","color","warn","routerLink","/"]],template:function(t,e){1&t&&(r.Pb(0,"mat-toolbar",0),r.Pb(1,"mat-toolbar-row"),r.Pb(2,"a",1),r.Pb(3,"h1"),r.pc(4,"Check In Out - Error"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(5,"div",2),r.Pb(6,"div",3),r.Pb(7,"h3",4),r.pc(8,"Page Not Found"),r.Ob(),r.Pb(9,"mat-icon",5),r.pc(10,"cancel"),r.Ob(),r.Lb(11,"p"),r.Pb(12,"button",6),r.pc(13,"Ok"),r.Ob(),r.Ob(),r.Ob())},directives:[i.a,i.c,c.c,u.a,u.c,u.b,b.a,l.a,p.b,c.b],styles:[""]}),t})();var f=n("XNiG"),h=n("quSY"),m=n("Cfvw"),g=n("3Pt+"),O=n("pLZG"),v=n("lJxs"),y=n("eIep"),_=n("tk/3"),w=n("khYj"),P=n("kmnG"),k=n("qFsG"),x=n("ofXK");function L(t,e){1&t&&(r.Pb(0,"mat-error"),r.pc(1,"Login required"),r.Ob())}function j(t,e){1&t&&(r.Pb(0,"mat-error"),r.pc(1,"Password required"),r.Ob())}let I=(()=>{class t{constructor(t,e){this._auth=t,this._router=e,this.submit$$=new f.a,this._subs=new h.a}ngOnInit(){this.form=new g.d({username:new g.b("",[g.n.required]),password:new g.b("",[g.n.required])}),this._subs.add(this.submit$$.asObservable().pipe(Object(O.a)(()=>this.form.valid),Object(v.a)(()=>Object.assign({},this.form.value,{rememberMe:!1})),Object(y.a)(this._auth.authorize$.bind(this._auth)),Object(O.a)(t=>!(t instanceof Error||t instanceof _.d)),Object(y.a)(()=>Object(m.a)(this._router.navigate(["in-out"])))).subscribe())}ngOnDestroy(){this._subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(w.a),r.Kb(c.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-login"]],decls:25,vars:7,consts:[[2,"background-color","gray"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","routerLink","/"],[1,"content"],[1,"main-content",3,"formGroup","ngSubmit"],["fxLayout","column",1,"central-content"],[3,"translate"],["autofocus","","formControlName","username","matInput","","required","","type","text"],[4,"ngIf"],["formControlName","password","matInput","","required","","type","password"],["fxLayoutAlign","center center","fxLayout","column",1,"top-margin"],["color","primary","mat-raised-button","","type","submit",3,"disabled","translate"],["mat-button","",1,"restore-password",3,"translate"]],template:function(t,e){1&t&&(r.Pb(0,"mat-toolbar",0),r.Pb(1,"mat-toolbar-row"),r.Pb(2,"a",1),r.Pb(3,"h1"),r.pc(4),r.ac(5,"translate"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(6,"div",2),r.Pb(7,"form",3),r.Xb("ngSubmit",(function(){return e.submit$$.next()})),r.Pb(8,"section",4),r.Pb(9,"div"),r.Pb(10,"mat-form-field"),r.Pb(11,"mat-label",5),r.pc(12,"Username"),r.Ob(),r.Lb(13,"input",6),r.oc(14,L,2,0,"mat-error",7),r.Ob(),r.Pb(15,"mat-form-field"),r.Pb(16,"mat-label",5),r.pc(17,"Password"),r.Ob(),r.Lb(18,"input",8),r.oc(19,j,2,0,"mat-error",7),r.Ob(),r.Ob(),r.Pb(20,"div",9),r.Pb(21,"button",10),r.pc(22,"Login "),r.Ob(),r.Pb(23,"a",11),r.pc(24,"Don't remember the password?"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t&&(r.zb(4),r.rc("Check In Out - ",r.bc(5,5,"Login page"),""),r.zb(3),r.ec("formGroup",e.form),r.zb(7),r.ec("ngIf",e.form.controls.username.hasError("required")),r.zb(5),r.ec("ngIf",e.form.controls.password.hasError("required")),r.zb(2),r.ec("disabled",e.form.invalid))},directives:[i.a,i.c,c.c,u.a,u.c,u.b,g.o,g.j,g.e,P.b,P.e,b.a,g.a,k.a,g.i,g.c,g.m,x.j,p.b,p.a,P.a],pipes:[b.d],styles:[".central-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}a.restore-password[_ngcontent-%COMP%]{color:grey;font-weight:400;font-size:16px;text-decoration:underline}.top-margin[_ngcontent-%COMP%]{margin-top:36px}"],changeDetection:0}),t})(),C=(()=>{class t{constructor(t,e){this._auth=t,this._router=e}canActivate(t,e){return this._auth.isLoggedIn$.pipe(Object(v.a)(t=>t||this._router.parseUrl("/")))}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(w.a),r.Tb(c.a))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const z=[{path:"",component:s,children:[{path:"",component:I,canActivate:[(()=>{class t{constructor(t,e){this._auth=t,this._router=e}canActivate(t,e){return this._auth.isLoggedIn$.pipe(Object(v.a)(t=>!t||this._router.parseUrl("in-out")))}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(w.a),r.Tb(c.a))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]},{path:"in-out",loadChildren:()=>n.e(7).then(n.bind(null,"J6bi")).then(t=>t.InOutModule),canActivate:[C]},{path:"**",component:d}]}];let N=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[c.d.forRoot(z)],c.d]}),t})(),T=(()=>{class t{constructor(t){this.title="check-in-out-app",t.addLangs(["en","de"]),t.setDefaultLang("en"),t.use("de")}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(b.e))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){1&t&&r.Lb(0,"router-outlet")},directives:[c.e],encapsulation:2,changeDetection:0}),t})();var q=n("R1ws"),G=n("qyK6"),M=n("SX+u"),A=n("y9W9"),E=n("PCNd"),$=n("TAFP"),X=n("mqiu"),F=n("dNgK");function D(t){return new X.a(t)}let K=(()=>{class t{}return t.\u0275mod=r.Ib({type:t,bootstrap:[T]}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},providers:[{provide:w.b,useExisting:M.a},{useClass:A.a,provide:r.m},{useClass:G.a,provide:_.a,multi:!0},{useClass:$.a,provide:_.a,multi:!0}],imports:[[a.a,N,q.b,E.a,F.b,b.c.forRoot({loader:{provide:b.b,useFactory:D,deps:[_.b]}})]]}),t})();o.a.production&&Object(r.S)(),a.c().bootstrapModule(K).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,6]]]);