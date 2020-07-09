function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nHPb:function(e,n,t){"use strict";t.r(n),t.d(n,"CheckInModule",(function(){return w}));var r,o,a,i,c,s=t("ofXK"),u=t("tyNb"),l=t("quSY"),f=t("XNiG"),b=t("2Vo4"),d=t("eIep"),p=t("pLZG"),h=t("fXoL"),y=t("4jVr"),m=t("f0Cb"),v=t("IyRd"),_=t("bTqV"),g=function(){return["QR_CODE"]},C=[{path:"",component:(a=function(){function e(n){_classCallCheck(this,e),this._operations=n,this._subs=new l.a,this.submit$$=new f.a,this.scanned$$=new b.a(!1),this.scannerEnabled=!0,this.currentDevice=null,this.scanned$=this.scanned$$.asObservable()}return _createClass(e,[{key:"ngOnInit",value:function(){this._subs.add(this.scanned$.pipe(Object(d.a)(this._operations.analyzeCheckInQRCode.bind(this._operations)),Object(p.a)((function(e){return!!e}))).subscribe())}},{key:"ngOnDestroy",value:function(){this._subs.unsubscribe()}},{key:"onCamerasFound",value:function(e){console.log("camera found"),this.availableDevices=e,this.hasDevices=Boolean(e&&e.length);var n,t=_createForOfIteratorHelper(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;if(/back|rear|environment/gi.test(r.label)){this.currentDevice=r;break}}}catch(o){t.e(o)}finally{t.f()}this.hasDevices&&!this.currentDevice&&(this.currentDevice=e[0])}},{key:"onCamerasNotFound",value:function(){console.log("camera not found"),this.hasDevices=!1}},{key:"onHasPermission",value:function(e){console.log("has permissions"),this.hasPermission=e}},{key:"handleQrCodeResult",value:function(e){console.log("handle",e);var n={};e.split(";").forEach((function(e){var t=_slicedToArray(e.split("="),2),r=t[0],o=t[1];n[r]=o})),this.scanned$$.next(n)}},{key:"scanError",value:function(){console.log("error")}}]),e}(),a.\u0275fac=function(e){return new(e||a)(h.Jb(y.a))},a.\u0275cmp=h.Db({type:a,selectors:[["app-check-in"]],decls:7,vars:5,consts:[[1,"scanner"],[3,"enable","device","formats","tryHarder","scanSuccess","scanError","camerasFound","camerasNotFound","permissionResponse"],["routerLink","/in-out","mat-button",""]],template:function(e,n){1&e&&(h.Ob(0,"h3"),h.mc(1,"Scan QR Code"),h.Nb(),h.Kb(2,"mat-divider"),h.Ob(3,"div",0),h.Ob(4,"zxing-scanner",1),h.Wb("scanSuccess",(function(e){return n.handleQrCodeResult(e)}))("scanError",(function(){return n.scanError()}))("camerasFound",(function(e){return n.onCamerasFound(e)}))("camerasNotFound",(function(){return n.onCamerasNotFound()}))("permissionResponse",(function(e){return n.onHasPermission(e)})),h.Nb(),h.Nb(),h.Ob(5,"a",2),h.mc(6,"Cancel"),h.Nb()),2&e&&(h.zb(4),h.bc("enable",n.scannerEnabled)("device",n.currentDevice)("formats",h.cc(4,g))("tryHarder",!0))},directives:[m.a,v.a,u.c,_.a],styles:["h3[_ngcontent-%COMP%]{color:grey}mat-divider[_ngcontent-%COMP%]{background-color:#03a9f4}div.scanner[_ngcontent-%COMP%]{padding:24px;margin-top:36px}[_nghost-%COMP%]   zxing-scanner[_ngcontent-%COMP%] {width:100%;height:100%;-o-object-fit:contain;object-fit:contain}a[_ngcontent-%COMP%]{margin:0 auto;display:block;padding-top:36px;font-weight:400;color:grey!important;text-decoration:underline}"],changeDetection:0}),a)},{path:"validation",component:(o=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=h.Db({type:o,selectors:[["app-validation-success"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary","routerLink","/in-out"]],template:function(e,n){1&e&&(h.Ob(0,"p"),h.mc(1,"Vistor validated. SMS send to the visitor"),h.Nb(),h.Ob(2,"button",0),h.mc(3,"Ok"),h.Nb())},directives:[_.b,u.b],styles:[""]}),o)},{path:"success",component:(r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=h.Db({type:r,selectors:[["app-check-in-success"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary","routerLink","/in-out"]],template:function(e,n){1&e&&(h.Ob(0,"p"),h.mc(1,"Visitor is checked-in"),h.Nb(),h.Ob(2,"button",0),h.mc(3,"Ok"),h.Nb())},directives:[_.b,u.b],styles:[""]}),r)}],k=((i=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:i}),i.\u0275inj=h.Gb({factory:function(e){return new(e||i)},imports:[[u.d.forChild(C)],u.d]}),i),O=t("PCNd"),w=((c=function e(){_classCallCheck(this,e)}).\u0275mod=h.Hb({type:c}),c.\u0275inj=h.Gb({factory:function(e){return new(e||c)},providers:[],imports:[[s.b,k,O.a,v.b,m.b]]}),c)}}]);