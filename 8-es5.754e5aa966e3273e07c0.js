function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw c}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nHPb:function(e,t,n){"use strict";n.r(t),n.d(t,"CheckInModule",(function(){return x}));var o=n("tyNb"),r=n("quSY"),c=n("2Vo4"),a=n("pLZG"),i=n("vkgz"),s=n("eIep"),u=n("fXoL"),l=n("4jVr"),b=n("sYmb"),f=n("kmnG"),p=n("d3UM"),h=n("FKr1"),d=n("ofXK"),v=n("IyRd"),y=["scanner"];function m(e,t){if(1&e&&(u.Qb(0,"mat-option",8),u.qc(1),u.Pb()),2&e){var n=t.$implicit;u.fc("value",n.deviceId),u.zb(1),u.sc(" ",n.label," ")}}var g,k,C,P,_,w,O=function(){return["QR_CODE"]},Q=((g=function(){function e(t){_classCallCheck(this,e),this._operations=t,this._subs=new r.a,this.scanned$$=new c.a(!1),this.scannerEnabled=!0,this.currentDevice=null}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this._subs.add(this.scanned$$.asObservable().pipe(Object(a.a)((function(e){return!!e})),Object(a.a)((function(){return e.scannerEnabled})),Object(i.a)((function(){e.scannerEnabled=!1})),Object(s.a)(this._operations.analyzeCheckInQRCode.bind(this._operations)),Object(i.a)((function(){e.scannerEnabled=!0})),Object(a.a)((function(e){return!!e}))).subscribe())}},{key:"ngOnDestroy",value:function(){this._subs.unsubscribe()}},{key:"onCamerasFound",value:function(e){console.log("camera found"),this.availableDevices=e,this.hasDevices=Boolean(e&&e.length);var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(/back|rear|environment/gi.test(o.label)){this.currentDevice=o;break}}}catch(r){n.e(r)}finally{n.f()}this.hasDevices&&!this.currentDevice&&(this.currentDevice=e[0])}},{key:"onCamerasNotFound",value:function(){console.log("camera not found"),this.hasDevices=!1}},{key:"onHasPermission",value:function(e){console.log("has permissions"),this.hasPermission=e}},{key:"handleQrCodeResult",value:function(e){this.scanned$$.next(this._operations.parseCode(e))}},{key:"scanError",value:function(){console.log("error")}},{key:"onDeviceSelectChange",value:function(e){var t=this.availableDevices.find((function(t){return t.deviceId===e}));this.currentDevice=t||null}}]),e}()).\u0275fac=function(e){return new(e||g)(u.Lb(l.a))},g.\u0275cmp=u.Fb({type:g,selectors:[["app-check-in"]],viewQuery:function(e,t){var n;1&e&&u.vc(y,!0),2&e&&u.hc(n=u.Zb())&&(t.scanner=n.first)},decls:10,vars:7,consts:[[3,"translate"],[1,"device-select-field"],[3,"value","selectionChange"],[3,"value","translate"],["class","mat-option",3,"value",4,"ngFor","ngForOf"],[1,"scanner"],[3,"device","formats","tryHarder","scanSuccess","scanError","camerasFound","camerasNotFound","permissionResponse"],["scanner",""],[1,"mat-option",3,"value"]],template:function(e,t){1&e&&(u.Qb(0,"h3",0),u.qc(1,"Scan QR code"),u.Pb(),u.Qb(2,"mat-form-field",1),u.Qb(3,"mat-select",2),u.Yb("selectionChange",(function(e){return t.onDeviceSelectChange(e.value)})),u.Qb(4,"mat-option",3),u.qc(5,"No device selected"),u.Pb(),u.pc(6,m,2,2,"mat-option",4),u.Pb(),u.Pb(),u.Qb(7,"div",5),u.Qb(8,"zxing-scanner",6,7),u.Yb("scanSuccess",(function(e){return t.handleQrCodeResult(e)}))("scanError",(function(){return t.scanError()}))("camerasFound",(function(e){return t.onCamerasFound(e)}))("camerasNotFound",(function(){return t.onCamerasNotFound()}))("permissionResponse",(function(e){return t.onHasPermission(e)})),u.Pb(),u.Pb()),2&e&&(u.zb(3),u.fc("value",null!=t.currentDevice&&t.currentDevice.deviceId?t.currentDevice.deviceId:""),u.zb(1),u.fc("value",""),u.zb(2),u.fc("ngForOf",t.availableDevices),u.zb(2),u.fc("device",t.currentDevice)("formats",u.gc(6,O))("tryHarder",!0))},directives:[b.a,f.c,p.a,h.h,d.j,v.a],styles:["[_nghost-%COMP%]   zxing-scanner[_ngcontent-%COMP%] {width:100%;height:100%;-o-object-fit:contain;object-fit:contain}a[_ngcontent-%COMP%]{margin:0 auto;display:block;padding-top:36px;font-weight:400;color:grey!important;text-decoration:underline;text-transform:capitalize}"],changeDetection:0}),g),I=n("73Ib"),M=n("XiUz"),D=n("NFeN"),L=n("bTqV"),B=((C=function(){function e(t){_classCallCheck(this,e),this._operations=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"visitors",get:function(){return this._operations.getVisitors()}},{key:"toolbarType",get:function(){return I.b.checkIn}}]),e}()).\u0275fac=function(e){return new(e||C)(u.Lb(l.a))},C.\u0275cmp=u.Fb({type:C,selectors:[["app-validation-success"]],decls:17,vars:7,consts:[[3,"showBackButton","showLogoutButton","title","type"],[1,"content"],["fxLayout","column","fxLayoutAlign","center center",2,"padding-top","64px"],[3,"translate"],[1,"symbol"],[1,"visitors"],["color","primary","mat-raised-button","","routerLink","/in-out/check-in"],[2,"font-weight","lighter",3,"translate"]],template:function(e,t){1&e&&(u.Mb(0,"app-toolbar",0),u.bc(1,"translate"),u.Qb(2,"div",1),u.Qb(3,"div",2),u.Qb(4,"h1",3),u.qc(5,"SMS sent to guest"),u.Pb(),u.Qb(6,"mat-icon",4),u.qc(7,"verified"),u.Pb(),u.Qb(8,"p",5),u.Qb(9,"span",3),u.qc(10,"Number of guests currently checked-in"),u.Pb(),u.Pb(),u.Qb(11,"div",5),u.qc(12),u.Pb(),u.Qb(13,"button",6),u.qc(14,"Ok"),u.Pb(),u.Qb(15,"p",7),u.qc(16,"Please ask the customer for the SMS"),u.Pb(),u.Pb(),u.Pb()),2&e&&(u.fc("showBackButton",!0)("showLogoutButton",!0)("title",u.cc(1,5,"Check-in"))("type",t.toolbarType),u.zb(12),u.sc("[",t.visitors,"]"))},directives:[I.a,M.b,M.a,b.a,D.a,L.b,o.b],pipes:[b.d],styles:["[_nghost-%COMP%]{height:100%;flex:1}.symbol[_ngcontent-%COMP%]{color:#03a9f4}.mat-raised-button[_ngcontent-%COMP%]{background-color:#03a9f4!important}.visitors[_ngcontent-%COMP%]{color:#03a9f4}div.visitors[_ngcontent-%COMP%]{line-height:200%;font-size:300%}"]}),C),F=((k=function(){function e(t){_classCallCheck(this,e),this._operations=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"visitors",get:function(){return this._operations.getVisitors()}},{key:"toolbarType",get:function(){return I.b.success}}]),e}()).\u0275fac=function(e){return new(e||k)(u.Lb(l.a))},k.\u0275cmp=u.Fb({type:k,selectors:[["app-check-in-success"]],decls:15,vars:7,consts:[[3,"showBackButton","showLogoutButton","title","type"],[1,"content"],["fxLayout","column","fxLayoutAlign","center center",2,"padding-top","64px"],[3,"translate"],["color","primary",1,"symbol"],[1,"visitors"],["color","primary","mat-raised-button","","routerLink","/in-out/check-in"]],template:function(e,t){1&e&&(u.Mb(0,"app-toolbar",0),u.bc(1,"translate"),u.Qb(2,"div",1),u.Qb(3,"div",2),u.Qb(4,"h1",3),u.qc(5,"Check-in Successfull"),u.Pb(),u.Qb(6,"mat-icon",4),u.qc(7,"fact_check"),u.Pb(),u.Qb(8,"p",5),u.Qb(9,"span",3),u.qc(10,"Number of guests currently checked-in"),u.Pb(),u.Pb(),u.Qb(11,"div",5),u.qc(12),u.Pb(),u.Qb(13,"button",6),u.qc(14,"Ok"),u.Pb(),u.Pb(),u.Pb()),2&e&&(u.fc("showBackButton",!0)("showLogoutButton",!0)("title",u.cc(1,5,"Check-in"))("type",t.toolbarType),u.zb(12),u.sc("[",t.visitors,"]"))},directives:[I.a,M.b,M.a,b.a,D.a,L.b,o.b],pipes:[b.d],styles:["[_nghost-%COMP%]{height:100%;flex:1}.symbol[_ngcontent-%COMP%]{color:#ffd600}.mat-raised-button[_ngcontent-%COMP%]{background-color:#ffd600!important}.visitors[_ngcontent-%COMP%]{color:#ffd600}div.visitors[_ngcontent-%COMP%]{line-height:200%;font-size:300%}"]}),k),S=[{path:"",component:(P=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"toolbarType",get:function(){return I.b.checkIn}}]),e}(),P.\u0275fac=function(e){return new(e||P)},P.\u0275cmp=u.Fb({type:P,selectors:[["app-layout"]],decls:4,vars:6,consts:[[3,"showBackButton","showLogoutButton","title","type"],[1,"content"]],template:function(e,t){1&e&&(u.Mb(0,"app-toolbar",0),u.bc(1,"translate"),u.Qb(2,"div",1),u.Mb(3,"router-outlet"),u.Pb()),2&e&&u.fc("showBackButton",!0)("showLogoutButton",!0)("title",u.cc(1,4,"Check-in"))("type",t.toolbarType)},directives:[I.a,o.d],pipes:[b.d],styles:[""]}),P),children:[{path:"",component:Q}]},{path:"validation",component:B},{path:"success",component:F}],j=((_=function e(){_classCallCheck(this,e)}).\u0275mod=u.Jb({type:_}),_.\u0275inj=u.Ib({factory:function(e){return new(e||_)},imports:[[o.c.forChild(S)],o.c]}),_),q=n("PCNd"),x=((w=function e(){_classCallCheck(this,e)}).\u0275mod=u.Jb({type:w}),w.\u0275inj=u.Ib({factory:function(e){return new(e||w)},providers:[],imports:[[j,q.a,v.b]]}),w)}}]);