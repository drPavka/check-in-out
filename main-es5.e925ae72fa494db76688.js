function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){t.exports=n("zUnb")},"73Ib":function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return C}));var r=n("XNiG"),a=n("quSY"),o=n("Cfvw"),i=n("eIep"),c=n("fXoL"),u=n("khYj"),s=n("eHuo"),l=n("tyNb"),b=n("/t3+"),f=n("ofXK"),h=n("jaxi"),p=n("bTqV"),g=n("NFeN"),d=n("STbY"),m=n("sYmb"),_=["toolbar"];function v(t,e){if(1&t){var n=c.Rb();c.Qb(0,"button",5),c.Yb("click",(function(){return c.jc(n),c.ac().backClick$$.next()})),c.Qb(1,"mat-icon"),c.qc(2,"keyboard_backspace"),c.Pb(),c.Pb()}}function y(t,e){if(1&t&&(c.Qb(0,"mat-button-toggle",6),c.qc(1),c.bc(2,"lowercase"),c.Pb()),2&t){var n=e.$implicit;c.fc("value",n),c.zb(1),c.rc(c.cc(2,2,n))}}function k(t,e){if(1&t){var n=c.Rb();c.Qb(0,"span"),c.Qb(1,"button",7),c.Qb(2,"mat-icon"),c.qc(3,"more_vert"),c.Pb(),c.Pb(),c.Pb(),c.Qb(4,"mat-menu",null,8),c.Qb(6,"button",9),c.Yb("click",(function(){return c.jc(n),c.ac().logoutClick$$.next()})),c.Qb(7,"span",10),c.qc(8,"Logout"),c.Pb(),c.Pb(),c.Pb()}if(2&t){var r=c.ic(5);c.zb(1),c.fc("matMenuTriggerFor",r)}}var w=function(t){return t[t.normal=0]="normal",t[t.error=1]="error",t[t.checkIn=2]="checkIn",t[t.checkOut=3]="checkOut",t[t.success=4]="success",t}({}),C=function(){var t=function(){function t(e,n,o){_classCallCheck(this,t),this._auth=e,this._language=n,this._router=o,this.type=w.normal,this.showLogoutButton=!1,this.showBackButton=!1,this.logoutClick$$=new r.a,this.backClick$$=new r.a,this._subs=new a.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this._subs.add(this.logoutClick$$.pipe(Object(i.a)(this._auth.logOut$.bind(this._auth))).subscribe()),this._subs.add(this.backClick$$.pipe(Object(i.a)((function(){return Object(o.a)(t._router.navigate(["in-out"]))}))).subscribe())}},{key:"ngOnDestroy",value:function(){this._subs.unsubscribe()}},{key:"ngAfterViewInit",value:function(){switch(this.type){case w.error:this._toolbar.color="warn";break;case w.normal:this._toolbar.color="primary";break;case w.checkIn:this._toolbar.color="primary",this._toolbar._elementRef.nativeElement.style="background-color:#03a9f4";break;case w.checkOut:this._toolbar.color="accent";break;case w.success:this._toolbar.color="primary",this._toolbar._elementRef.nativeElement.style="background-color:#FFD600"}}},{key:"onLanguageChange",value:function(t){this._language.use(t)}},{key:"languages",get:function(){return this._language.languages}},{key:"currentLanguage",get:function(){return this._language.currentLanguage}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Lb(u.a),c.Lb(s.b),c.Lb(l.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-toolbar"]],viewQuery:function(t,e){var n;1&t&&c.vc(_,!0),2&t&&c.hc(n=c.Zb())&&(e._toolbar=n.first)},inputs:{type:"type",title:"title",showLogoutButton:"showLogoutButton",showBackButton:"showBackButton"},decls:10,vars:5,consts:[["toolbar",""],[3,"ngIf"],[1,"spacer"],[3,"value","change"],[3,"value",4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"],[3,"value"],["mat-icon-button","",3,"matMenuTriggerFor"],["extraMenu","matMenu"],["mat-menu-item","",3,"click"],[3,"translate"]],template:function(t,e){1&t&&(c.Qb(0,"mat-toolbar",null,0),c.Qb(2,"mat-toolbar-row"),c.pc(3,v,3,0,"ng-template",1),c.Qb(4,"h1"),c.qc(5),c.Pb(),c.Mb(6,"span",2),c.Qb(7,"mat-button-toggle-group",3),c.Yb("change",(function(t){return e.onLanguageChange(t.value)})),c.pc(8,y,3,4,"mat-button-toggle",4),c.Pb(),c.pc(9,k,9,1,"ng-template",1),c.Pb(),c.Pb()),2&t&&(c.zb(3),c.fc("ngIf",e.showBackButton),c.zb(2),c.rc(e.title),c.zb(2),c.fc("value",e.currentLanguage),c.zb(1),c.fc("ngForOf",e.languages),c.zb(1),c.fc("ngIf",e.showLogoutButton))},directives:[b.a,b.c,f.k,h.b,f.j,p.b,g.a,h.a,d.c,d.d,d.a,m.a],pipes:[f.h],styles:[""]}),t}()},AytR:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r="https://idme.ch/",a={production:!0,backend:{host:r,prefix:"checkinout/api/",auth_prefix:"api/",base:r+"checkinout/api/"}}},PCNd:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var r=n("ofXK"),a=n("/t3+"),o=n("STbY"),i=n("NFeN"),c=n("bTqV"),u=n("YUcS"),s=n("3Pt+"),l=n("kmnG"),b=n("qFsG"),f=n("tk/3"),h=n("sYmb"),p=n("d3UM"),g=n("YjoU"),d=n("jaxi"),m=n("fXoL"),_=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[r.b,a.b,o.b,i.b,c.c,u.a,s.l,l.e,b.b,f.c,h.c,p.b,d.c,g.a],r.b,a.b,o.b,i.b,c.c,u.a,s.l,l.e,b.b,f.c,h.c,p.b]}),t}()},TAFP:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("z6cu"),a=n("AytR"),o=n("JIr8"),i=n("fXoL"),c=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"intercept",value:function(t,e){if(!t.url.match("json")){var n=(("authenticate"===t.url?a.a.backend.host+a.a.backend.auth_prefix:a.a.backend.base)+"/"+t.url).split("/").filter((function(t){return!!t})).join("/").replace(/(https?:)\//,"$1//");t=t.clone({url:n})}return e.handle(t).pipe(Object(o.a)((function(t){var e=t.error.hasOwnProperty("detail")?t.error.detail:t.error.hasOwnProperty("message")?t.error.message:t.message;return Object(r.a)(new Error(e))})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t}()},YjoU:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("ofXK"),a=n("fXoL"),o=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[r.b]]}),t}()},eHuo:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u}));var r=n("fXoL"),a=n("YjoU"),o=n("sYmb"),i=["en","de"],c=new r.q("local_storage"),u=function(){var t=function(){function t(e,n){if(_classCallCheck(this,t),this._translate=e,this._storage=n,this._translate.addLangs(i),this._translate.setDefaultLang("en"),this._storage.has("language"))this._translate.use(this._storage.get("language"));else{var r,a=this._translate.getBrowserLang(),o=_createForOfIteratorHelper(i);try{for(o.s();!(r=o.n()).done;){var c=r.value,u=new RegExp(c);if(a.match(u)){this.use(c);break}}}catch(s){o.e(s)}finally{o.f()}}}return _createClass(t,[{key:"use",value:function(t){return this._storage.set("language",t),this._translate.use(t)}},{key:"translate",value:function(t){return this._translate.instant(t)}},{key:"languages",get:function(){return i}},{key:"currentLanguage",get:function(){return this._translate.currentLang}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Ub(o.e),r.Ub(c))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:a.a}),t}()},khYj:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("LRne"),a=n("Cfvw"),o=n("vkgz"),i=n("eIep"),c=n("JIr8"),u=n("Nm8O"),s=n("eHuo"),l=n("fXoL"),b=n("tk/3"),f=n("y9W9"),h=n("tyNb"),p=function(){var t=function(){function t(e,n,r,a){_classCallCheck(this,t),this._http=e,this._storage=n,this._err=r,this._router=a,this._jwtHelper=new u.a}return _createClass(t,[{key:"authorize$",value:function(t){var e=this;return this._http.post("authenticate",t).pipe(Object(o.a)(this._saveTokenData.bind(this)),Object(i.a)((function(t){return e._http.get("user/"+t.userId,{headers:{Authorization:"Bearer "+t.id_token}}).pipe(Object(o.a)(e._saveUserData.bind(e)),Object(i.a)((function(n){return e._http.get("club/"+n.clubId,{headers:{Authorization:"Bearer "+t.id_token}})})),Object(o.a)(e._saveClubData.bind(e)))})),Object(c.a)((function(t){return e._err.handleError(t),Object(r.a)(t)})))}},{key:"logOut$",value:function(){return this._storage.remove("authorization"),this._storage.remove("user"),this._storage.remove("club"),Object(a.a)(this._router.navigate(["/"]))}},{key:"_saveTokenData",value:function(t){var e=t.id_token;this._storage.set("authorization",e)}},{key:"_saveUserData",value:function(t){this._storage.set("user",t)}},{key:"_saveClubData",value:function(t){this._storage.set("club",t)}},{key:"isLoggedIn",get:function(){var t=this._storage.has("authorization");return t&&(console.info("Token expires at: %s",this._jwtHelper.getTokenExpirationDate(this._storage.get("authorization"))),t=!this._jwtHelper.isTokenExpired(this._storage.get("authorization"))),t}},{key:"token",get:function(){return this.isLoggedIn?this._storage.get("authorization"):null}},{key:"user",get:function(){return this._storage.has("user")?this._storage.get("user"):null}},{key:"club",get:function(){return this._storage.has("club")?this._storage.get("club"):null}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Ub(b.b),l.Ub(s.a),l.Ub(f.a),l.Ub(h.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},y9W9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("fXoL"),a=n("dNgK"),o=n("eHuo"),i=function(){var t=function(){function t(e,n,r){_classCallCheck(this,t),this._snack=e,this._zone=n,this._lang=r}return _createClass(t,[{key:"handleError",value:function(t){var e=this;console.error(t),this._zone.run((function(){e._snackBar=e._snack.open(e._lang.translate(t.message),e._lang.translate("close"),{data:t,panelClass:"error",duration:5e3})}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Ub(a.a),r.Ub(r.z),r.Ub(o.b))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},zUnb:function(t,e,n){"use strict";n.r(e);var r,a,o=n("fXoL"),i=n("AytR"),c=n("jhN1"),u=n("tyNb"),s=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=o.Fb({type:r,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"mobile-center"],[1,"card"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.Qb(1,"main",1),o.Mb(2,"router-outlet"),o.Pb(),o.Pb())},directives:[u.d],styles:["[_nghost-%COMP%]{flex-direction:column;flex:1;height:100%}[_nghost-%COMP%], main[_ngcontent-%COMP%]{display:flex}.mobile-center[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{flex-direction:column}.mobile-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}@media (min-width:600px){.mobile-center[_ngcontent-%COMP%]{height:100vh}}a[_ngcontent-%COMP%]{text-decoration:none}"],changeDetection:0}),r),l=n("73Ib"),b=n("XiUz"),f=n("sYmb"),h=n("NFeN"),p=n("bTqV"),g=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"toolbarType",get:function(){return l.b.error}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=o.Fb({type:a,selectors:[["app-error"]],decls:12,vars:1,consts:[["title","Check In/Out",3,"type"],[1,"content"],["fxLayout","column","fxLayoutAlign","center center"],[3,"translate"],["color","warn",1,"symbol"],[2,"height","300px"],["mat-raised-button","","color","warn","routerLink","/"]],template:function(t,e){1&t&&(o.Mb(0,"app-toolbar",0),o.Qb(1,"div",1),o.Qb(2,"div",2),o.Qb(3,"h1",3),o.qc(4,"Error"),o.Pb(),o.Qb(5,"h3",3),o.qc(6,"Page Not Found"),o.Pb(),o.Qb(7,"mat-icon",4),o.qc(8,"cancel"),o.Pb(),o.Mb(9,"p",5),o.Qb(10,"button",6),o.qc(11,"Ok"),o.Pb(),o.Pb(),o.Pb()),2&t&&o.fc("type",e.toolbarType)},directives:[l.a,b.b,b.a,f.a,h.a,p.b,u.b],styles:[""]}),a),d=n("XNiG"),m=n("quSY"),_=n("Cfvw"),v=n("3Pt+"),y=n("pLZG"),k=n("lJxs"),w=n("eIep"),C=n("tk/3"),P=n("khYj"),O=n("kmnG"),j=n("qFsG"),I=n("ofXK");function L(t,e){1&t&&(o.Qb(0,"mat-error",2),o.qc(1,"Login required "),o.Pb())}function x(t,e){1&t&&(o.Qb(0,"mat-error",2),o.qc(1,"Password required "),o.Pb())}var Q,q,z,M,U,A=((q=function(){function t(e,n){_classCallCheck(this,t),this._auth=e,this._router=n,this.submit$$=new d.a,this._subs=new m.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.form=new v.d({username:new v.b("",[v.n.required]),password:new v.b("",[v.n.required])}),this._subs.add(this.submit$$.asObservable().pipe(Object(y.a)((function(){return t.form.valid})),Object(k.a)((function(){return Object.assign({},t.form.value,{rememberMe:!1})})),Object(w.a)(this._auth.authorize$.bind(this._auth)),Object(y.a)((function(t){return!(t instanceof Error||t instanceof C.d)})),Object(w.a)((function(){return Object(_.a)(t._router.navigate(["in-out"]))}))).subscribe())}},{key:"ngOnDestroy",value:function(){this._subs.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||q)(o.Lb(P.a),o.Lb(u.a))},q.\u0275cmp=o.Fb({type:q,selectors:[["app-login"]],decls:24,vars:4,consts:[["title","Check In/Out"],[1,"content"],[3,"translate"],[1,"main-content",3,"formGroup","ngSubmit"],["fxLayout","column",1,"central-content"],["autofocus","","formControlName","username","matInput","","required","","type","text"],[3,"translate",4,"ngIf"],["formControlName","password","matInput","","required","","type","password"],["fxLayoutAlign","center center","fxLayout","column",1,"top-margin"],["color","primary","mat-raised-button","","type","submit",3,"disabled"],["mat-button","",1,"restore-password"]],template:function(t,e){1&t&&(o.Mb(0,"app-toolbar",0),o.Qb(1,"div",1),o.Qb(2,"h2",2),o.qc(3,"Enter your credentials to sign-in"),o.Pb(),o.Qb(4,"form",3),o.Yb("ngSubmit",(function(){return e.submit$$.next()})),o.Qb(5,"section",4),o.Qb(6,"div"),o.Qb(7,"mat-form-field"),o.Qb(8,"mat-label",2),o.qc(9,"Username"),o.Pb(),o.Mb(10,"input",5),o.pc(11,L,2,0,"mat-error",6),o.Pb(),o.Qb(12,"mat-form-field"),o.Qb(13,"mat-label",2),o.qc(14,"Password"),o.Pb(),o.Mb(15,"input",7),o.pc(16,x,2,0,"mat-error",6),o.Pb(),o.Pb(),o.Qb(17,"div",8),o.Qb(18,"button",9),o.Qb(19,"span",2),o.qc(20,"Login"),o.Pb(),o.Pb(),o.Qb(21,"a",10),o.Qb(22,"span",2),o.qc(23,"Do not remember the password?"),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&t&&(o.zb(4),o.fc("formGroup",e.form),o.zb(7),o.fc("ngIf",e.form.controls.username.hasError("required")),o.zb(5),o.fc("ngIf",e.form.controls.password.hasError("required")),o.zb(2),o.fc("disabled",e.form.invalid))},directives:[l.a,f.a,v.o,v.j,v.e,b.b,O.c,O.f,v.a,j.a,v.i,v.c,v.m,I.k,b.a,p.b,p.a,O.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1}.main-content[_ngcontent-%COMP%]{margin-top:24px}.central-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}a.restore-password[_ngcontent-%COMP%]{color:grey;font-weight:400;font-size:16px;text-decoration:underline}.top-margin[_ngcontent-%COMP%]{margin-top:36px}"],changeDetection:0}),q),$=((Q=function(){function t(e,n){_classCallCheck(this,t),this._auth=e,this._router=n}return _createClass(t,[{key:"canActivate",value:function(t,e){return!!this._auth.isLoggedIn||this._router.parseUrl("/")}}]),t}()).\u0275fac=function(t){return new(t||Q)(o.Ub(P.a),o.Ub(u.a))},Q.\u0275prov=o.Hb({token:Q,factory:Q.\u0275fac,providedIn:"root"}),Q),F=[{path:"",component:s,children:[{path:"",component:A,canActivate:[(z=function(){function t(e,n){_classCallCheck(this,t),this._auth=e,this._router=n}return _createClass(t,[{key:"canActivate",value:function(t,e){return!this._auth.isLoggedIn||this._router.parseUrl("in-out")}}]),t}(),z.\u0275fac=function(t){return new(t||z)(o.Ub(P.a),o.Ub(u.a))},z.\u0275prov=o.Hb({token:z,factory:z.\u0275fac,providedIn:"root"}),z)]},{path:"in-out",loadChildren:function(){return n.e(7).then(n.bind(null,"J6bi")).then((function(t){return t.InOutModule}))},canActivate:[$]},{path:"**",component:g}]}],T=((U=function t(){_classCallCheck(this,t)}).\u0275mod=o.Jb({type:U}),U.\u0275inj=o.Ib({factory:function(t){return new(t||U)},imports:[[u.c.forRoot(F)],u.c]}),U),N=((M=function t(){_classCallCheck(this,t),this.title="check-in-out-app"}).\u0275fac=function(t){return new(t||M)},M.\u0275cmp=o.Fb({type:M,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){1&t&&o.Mb(0,"router-outlet")},directives:[u.d],encapsulation:2,changeDetection:0}),M),Y=n("R1ws"),E=n("SX+u"),D=n("y9W9"),B=n("PCNd"),H=n("TAFP"),X=n("mqiu"),S=n("dNgK"),R=n("eHuo");function J(t){return new X.a(t,i.a.production?"./assets/i18n/":"/assets/i18n/")}var G,K=((G=function t(){_classCallCheck(this,t)}).\u0275mod=o.Jb({type:G,bootstrap:[N]}),G.\u0275inj=o.Ib({factory:function(t){return new(t||G)},providers:[{provide:R.a,useExisting:E.a},{useClass:D.a,provide:o.m},{useClass:H.a,provide:C.a,multi:!0}],imports:[[c.a,T,Y.b,B.a,S.b,f.c.forRoot({loader:{provide:f.b,useFactory:J,deps:[C.b]}})]]}),G);i.a.production&&Object(o.S)(),c.c().bootstrapModule(K).catch((function(t){return console.error(t)}))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,6]]]);