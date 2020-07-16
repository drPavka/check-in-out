function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){t.exports=n("zUnb")},AytR:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r="https://idme.ch/",o={production:!0,backend:{host:r,prefix:"checkinout/api/",auth_prefix:"api/",base:r+"checkinout/api/"}}},PCNd:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("ofXK"),o=n("/t3+"),a=n("STbY"),i=n("NFeN"),c=n("bTqV"),s=n("YUcS"),u=n("3Pt+"),b=n("kmnG"),l=n("qFsG"),f=n("tk/3"),h=n("sYmb"),p=n("d3UM"),d=n("fXoL"),m=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},imports:[[r.c,o.b,a.b,i.b,c.c,s.a,u.l,b.e,l.b,f.c,h.c,p.b],r.c,o.b,a.b,i.b,c.c,s.a,u.l,b.e,l.b,f.c,h.c,p.b]}),t}()},TAFP:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("z6cu"),o=n("AytR"),a=n("JIr8"),i=n("fXoL"),c=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"intercept",value:function(t,e){if(!t.url.match("json")){var n=(("authenticate"===t.url?o.a.backend.host+o.a.backend.auth_prefix:o.a.backend.base)+"/"+t.url).split("/").filter((function(t){return!!t})).join("/").replace(/(https?:)\//,"$1//");t=t.clone({url:n})}return e.handle(t).pipe(Object(a.a)((function(t){var e=t.error.hasOwnProperty("detail")?t.error.detail:t.error.hasOwnProperty("message")?t.error.message:t.message;return Object(r.a)(new Error(e))})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t}()},khYj:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));var r=n("fXoL"),o=n("LRne"),a=n("Cfvw"),i=n("vkgz"),c=n("eIep"),s=n("JIr8"),u=n("tk/3"),b=n("y9W9"),l=n("tyNb"),f=new r.q("local_storage"),h=function(){var t=function(){function t(e,n,r,o){_classCallCheck(this,t),this._http=e,this._storage=n,this._err=r,this._router=o}return _createClass(t,[{key:"authorize$",value:function(t){var e=this;return this._http.post("authenticate",t).pipe(Object(i.a)(this._saveTokenData.bind(this)),Object(c.a)((function(t){return e._http.get("user/"+t.userId,{headers:{Authorization:"Bearer "+t.id_token}}).pipe(Object(i.a)(e._saveUserData.bind(e)),Object(c.a)((function(n){return e._http.get("club/"+n.clubId,{headers:{Authorization:"Bearer "+t.id_token}})})),Object(i.a)(e._saveClubData.bind(e)))})),Object(s.a)((function(t){return e._err.handleError(t),Object(o.a)(t)})))}},{key:"logOut$",value:function(){return this._storage.remove("authorization"),this._storage.remove("user"),this._storage.remove("club"),Object(a.a)(this._router.navigate(["/"]))}},{key:"_saveTokenData",value:function(t){var e=t.id_token;this._storage.set("authorization",e)}},{key:"_saveUserData",value:function(t){this._storage.set("user",t)}},{key:"_saveClubData",value:function(t){this._storage.set("club",t)}},{key:"isLoggedIn$",get:function(){return Object(o.a)(this._storage.has("authorization"))}},{key:"token",get:function(){return this._storage.has("authorization")?this._storage.get("authorization"):null}},{key:"user",get:function(){return this._storage.has("user")?this._storage.get("user"):null}},{key:"club",get:function(){return this._storage.has("club")?this._storage.get("club"):null}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Ub(u.b),r.Ub(f),r.Ub(b.a),r.Ub(l.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},y9W9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("fXoL"),o=n("dNgK"),a=n("sYmb"),i=function(){var t=function(){function t(e,n,r){_classCallCheck(this,t),this._snack=e,this._zone=n,this._translate=r}return _createClass(t,[{key:"handleError",value:function(t){var e=this;console.error(t),this._zone.run((function(){e._snackBar=e._snack.open(e._translate.instant(t.message),e._translate.instant("close"),{data:t,panelClass:"error",duration:5e3})}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Ub(o.a),r.Ub(r.z),r.Ub(a.e))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},zUnb:function(t,e,n){"use strict";n.r(e);var r,o,a=n("fXoL"),i=n("AytR"),c=n("jhN1"),s=n("tyNb"),u=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.Fb({type:r,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"mobile-center"],[1,"card"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"main",1),a.Mb(2,"router-outlet"),a.Pb(),a.Pb())},directives:[s.e],styles:["[_nghost-%COMP%]{flex-direction:column;flex:1;height:100%}[_nghost-%COMP%], main[_ngcontent-%COMP%]{display:flex}.mobile-center[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{flex-direction:column}.mobile-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}@media (min-width:600px){.mobile-center[_ngcontent-%COMP%]{height:100vh}}a[_ngcontent-%COMP%]{text-decoration:none}"],changeDetection:0}),r),b=n("/t3+"),l=n("XiUz"),f=n("sYmb"),h=n("NFeN"),p=n("bTqV"),d=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=a.Fb({type:o,selectors:[["app-error"]],decls:14,vars:0,consts:[["color","warn"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","routerLink","/"],[1,"content"],["fxLayout","column","fxLayoutAlign","center center"],[3,"translate"],["color","warn",1,"symbol"],["mat-raised-button","","color","warn","routerLink","/"]],template:function(t,e){1&t&&(a.Qb(0,"mat-toolbar",0),a.Qb(1,"mat-toolbar-row"),a.Qb(2,"a",1),a.Qb(3,"h1"),a.qc(4,"Check In Out - Error"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(5,"div",2),a.Qb(6,"div",3),a.Qb(7,"h3",4),a.qc(8,"Page Not Found"),a.Pb(),a.Qb(9,"mat-icon",5),a.qc(10,"cancel"),a.Pb(),a.Mb(11,"p"),a.Qb(12,"button",6),a.qc(13,"Ok"),a.Pb(),a.Pb(),a.Pb())},directives:[b.a,b.c,s.c,l.a,l.c,l.b,f.a,h.a,p.b,s.b],styles:[""]}),o),m=n("XNiG"),_=n("quSY"),g=n("Cfvw"),v=n("3Pt+"),y=n("pLZG"),k=n("lJxs"),C=n("eIep"),P=n("tk/3"),w=n("khYj"),O=n("kmnG"),x=n("qFsG"),j=n("ofXK");function L(t,e){1&t&&(a.Qb(0,"mat-error",5),a.qc(1,"Login required "),a.Pb())}function Q(t,e){1&t&&(a.Qb(0,"mat-error",5),a.qc(1,"Password required "),a.Pb())}var q,I,z,U,M,N=((I=function(){function t(e,n){_classCallCheck(this,t),this._auth=e,this._router=n,this.submit$$=new m.a,this._subs=new _.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.form=new v.d({username:new v.b("",[v.n.required]),password:new v.b("",[v.n.required])}),this._subs.add(this.submit$$.asObservable().pipe(Object(y.a)((function(){return t.form.valid})),Object(k.a)((function(){return Object.assign({},t.form.value,{rememberMe:!1})})),Object(C.a)(this._auth.authorize$.bind(this._auth)),Object(y.a)((function(t){return!(t instanceof Error||t instanceof P.d)})),Object(C.a)((function(){return Object(g.a)(t._router.navigate(["in-out"]))}))).subscribe())}},{key:"ngOnDestroy",value:function(){this._subs.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||I)(a.Lb(w.a),a.Lb(s.a))},I.\u0275cmp=a.Fb({type:I,selectors:[["app-login"]],decls:27,vars:7,consts:[[2,"background-color","gray"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center","routerLink","/"],[1,"content"],[1,"main-content",3,"formGroup","ngSubmit"],["fxLayout","column",1,"central-content"],[3,"translate"],["autofocus","","formControlName","username","matInput","","required","","type","text"],[3,"translate",4,"ngIf"],["formControlName","password","matInput","","required","","type","password"],["fxLayoutAlign","center center","fxLayout","column",1,"top-margin"],["color","primary","mat-raised-button","","type","submit",3,"disabled"],["mat-button","",1,"restore-password"]],template:function(t,e){1&t&&(a.Qb(0,"mat-toolbar",0),a.Qb(1,"mat-toolbar-row"),a.Qb(2,"a",1),a.Qb(3,"h1"),a.qc(4),a.bc(5,"translate"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"div",2),a.Qb(7,"form",3),a.Yb("ngSubmit",(function(){return e.submit$$.next()})),a.Qb(8,"section",4),a.Qb(9,"div"),a.Qb(10,"mat-form-field"),a.Qb(11,"mat-label",5),a.qc(12,"Username"),a.Pb(),a.Mb(13,"input",6),a.pc(14,L,2,0,"mat-error",7),a.Pb(),a.Qb(15,"mat-form-field"),a.Qb(16,"mat-label",5),a.qc(17,"Password"),a.Pb(),a.Mb(18,"input",8),a.pc(19,Q,2,0,"mat-error",7),a.Pb(),a.Pb(),a.Qb(20,"div",9),a.Qb(21,"button",10),a.Qb(22,"span",5),a.qc(23,"Login"),a.Pb(),a.Pb(),a.Qb(24,"a",11),a.Qb(25,"span",5),a.qc(26,"Do not remember the password?"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.zb(4),a.rc(a.cc(5,5,"Login page")),a.zb(3),a.fc("formGroup",e.form),a.zb(7),a.fc("ngIf",e.form.controls.username.hasError("required")),a.zb(5),a.fc("ngIf",e.form.controls.password.hasError("required")),a.zb(2),a.fc("disabled",e.form.invalid))},directives:[b.a,b.c,s.c,l.a,l.c,l.b,v.o,v.j,v.e,O.c,O.f,f.a,v.a,x.a,v.i,v.c,v.m,j.k,p.b,p.a,O.b],pipes:[f.d],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1}.central-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}a.restore-password[_ngcontent-%COMP%]{color:grey;font-weight:400;font-size:16px;text-decoration:underline}.top-margin[_ngcontent-%COMP%]{margin-top:36px}"],changeDetection:0}),I),A=((q=function(){function t(e,n){_classCallCheck(this,t),this._auth=e,this._router=n}return _createClass(t,[{key:"canActivate",value:function(t,e){var n=this;return this._auth.isLoggedIn$.pipe(Object(k.a)((function(t){return t||n._router.parseUrl("/")})))}}]),t}()).\u0275fac=function(t){return new(t||q)(a.Ub(w.a),a.Ub(s.a))},q.\u0275prov=a.Hb({token:q,factory:q.\u0275fac,providedIn:"root"}),q),F=[{path:"",component:u,children:[{path:"",component:N,canActivate:[(z=function(){function t(e,n){_classCallCheck(this,t),this._auth=e,this._router=n}return _createClass(t,[{key:"canActivate",value:function(t,e){var n=this;return this._auth.isLoggedIn$.pipe(Object(k.a)((function(t){return!t||n._router.parseUrl("in-out")})))}}]),t}(),z.\u0275fac=function(t){return new(t||z)(a.Ub(w.a),a.Ub(s.a))},z.\u0275prov=a.Hb({token:z,factory:z.\u0275fac,providedIn:"root"}),z)]},{path:"in-out",loadChildren:function(){return n.e(7).then(n.bind(null,"J6bi")).then((function(t){return t.InOutModule}))},canActivate:[A]},{path:"**",component:d}]}],D=((M=function t(){_classCallCheck(this,t)}).\u0275mod=a.Jb({type:M}),M.\u0275inj=a.Ib({factory:function(t){return new(t||M)},imports:[[s.d.forRoot(F)],s.d]}),M),$=((U=function t(e){_classCallCheck(this,t),this.title="check-in-out-app",e.addLangs(["en","de"]),e.setDefaultLang("en"),e.use("de")}).\u0275fac=function(t){return new(t||U)(a.Lb(f.e))},U.\u0275cmp=a.Fb({type:U,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){1&t&&a.Mb(0,"router-outlet")},directives:[s.e],encapsulation:2,changeDetection:0}),U),E=n("R1ws"),X=n("SX+u"),J=n("y9W9"),T=n("PCNd"),Y=n("TAFP"),G=n("mqiu"),R=n("dNgK");function S(t){return new G.a(t,i.a.production?"./assets/i18n/":"/assets/i18n/")}var H,K=((H=function t(){_classCallCheck(this,t)}).\u0275mod=a.Jb({type:H,bootstrap:[$]}),H.\u0275inj=a.Ib({factory:function(t){return new(t||H)},providers:[{provide:w.b,useExisting:X.a},{useClass:J.a,provide:a.m},{useClass:Y.a,provide:P.a,multi:!0}],imports:[[c.a,D,E.b,T.a,R.b,f.c.forRoot({loader:{provide:f.b,useFactory:S,deps:[P.b]}})]]}),H);i.a.production&&Object(a.S)(),c.c().bootstrapModule(K).catch((function(t){return console.error(t)}))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,6]]]);