webpackJsonp([1],{0:function(l,n,u){l.exports=u("cDNt")},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),e=function(){return function(){}}(),i=function(){return function(){}}(),o=function(){function l(){this.path="https://loading.io/spinners/fidget-spinner/lg.fidget-spinner.gif",this.text="Carregando"}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}(),r=[[".l-loader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:30000}.m-loader[_ngcontent-%COMP%]{position:relative;width:200px;height:60px;padding:2em;margin-left:calc(50% - 100px);margin-top:calc(25% - 25px);background:rgba(0,0,0,.8);border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:0 0 5px #333;box-shadow:0 0 5px #333}.m-loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px;margin-right:6px}.m-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}"]],a=t._12({encapsulation:0,styles:r,data:{}});function c(l){return t._33(0,[(l()(),t._15(0,0,null,null,9,"div",[["class","l-loader"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n  "])),(l()(),t._15(2,0,null,null,6,"div",[["class","m-loader"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(6,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._31(7,null,["",""])),(l()(),t._31(-1,null,["\n  "])),(l()(),t._31(-1,null,["\n"]))],null,function(l,n){var u=n.component;l(n,4,0,u.path),l(n,7,0,u.text)})}t._10("app-loader",o,function(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-loader",[],null,null,null,c,a)),t._13(1,114688,null,0,o,[],null,null)],function(l,n){l(n,1,0)},null)},{path:"path",text:"text"},{},[]);var s=function(){function l(){this.title="Sem T\xedtulo",this.thumb="https://fakeimg.pl/160x224?text=Thumb"}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}(),_=[[".c-thumb[_ngcontent-%COMP%]{position:relative;overflow:hidden}.c-thumb[_ngcontent-%COMP%]:hover   .c-thumb__caption[_ngcontent-%COMP%]{opacity:1}.c-thumb__caption[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:0;left:0;opacity:0;z-index:1000;text-align:center;background:rgba(0,0,0,.7);color:#fff;padding:.7em 0;transition:all .2s ease-out;-moz-transition:all .2s ease-out;-webkit-transition:all .2s ease-out}"]],p=t._12({encapsulation:0,styles:_,data:{}});function g(l){return t._33(0,[(l()(),t._15(0,0,null,null,9,"figure",[["class","c-thumb"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(2,0,null,null,0,"img",[["class","img-fluid c-thumb__img"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(4,0,null,null,4,"figcaption",[["class","c-thumb__caption"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n        "])),(l()(),t._15(6,0,null,null,1,"span",[["class","c-thumb__caption--title"]],null,null,null,null,null)),(l()(),t._31(7,null,["",""])),(l()(),t._31(-1,null,["\n    "])),(l()(),t._31(-1,null,["\n"]))],null,function(l,n){var u=n.component;l(n,2,0,u.thumb,u.title),l(n,7,0,u.title)})}t._10("app-thumb",s,function(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-thumb",[],null,null,null,g,p)),t._13(1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)},{title:"title",thumb:"thumb"},{},[]);var f=function(){function l(){}return l.prototype.transform=function(l,n){return n?(n=n.toLowerCase(),l.filter(function(l){return l.game.name.toLowerCase().includes(n)})):l},l}(),m=u("qbdv"),h=u("BkNc"),d=u("XKz0"),v=function(){function l(l){this._http=l,this.endpoint="https://api.twitch.tv/kraken/games/",this.API_KEY="oou228jsk6nypimwoaocjunvoexrz6"}return l.prototype.getAll=function(l,n){void 0===l&&(l=10),void 0===n&&(n=void 0);var u=this.endpoint+"top?limit="+l;n&&(u+="&offset="+n);var t=(new d.g).set("Client-ID",this.API_KEY);return this._http.get(u,{headers:t,observe:"response"})},l.ctorParameters=function(){return[{type:d.c}]},l}(),b=function(){function l(l,n){this._twitchService=l,this.router=n,this.games=[],this.page=1,this.perPage={mobile:25,tablet:50,desktop:100}}return l.prototype.ngOnInit=function(){this.loading=!0,this.getAllGames()},l.prototype.getAllGames=function(){var l=this.getPerPage();this._twitchService.getAll(l).subscribe(this.callbackGetAllGames.bind(this),this.handlerError.bind(this))},l.prototype.callbackGetAllGames=function(l){for(var n=0,u=l.body.top;n<u.length;n++){var t=u[n];this.games.push(t)}this.loading=!1},l.prototype.doInfiniteScroll=function(l){var n=this,u=this.getPerPage(),t=u*this.page;this._twitchService.getAll(u,t).subscribe(function(u){n.callbackGetAllGames(u),l.complete()},function(u){n.handlerError(u),l.complete()}),this.page+=1},l.prototype.getPerPage=function(){var l=window.innerWidth;return l<540?this.perPage.mobile:l>=540&&l<720?this.perPage.tablet:l>=720?this.perPage.desktop:void 0},l.prototype.onSearch=function(l,n){l.value=n},l.prototype.onPopularity=function(l){if(!l)return this.games.sort(function(l,n){return l.game.popularity<n.game.popularity?-1:l.game.popularity>n.game.popularity?1:0});this.games.sort(function(l,n){return l.game.popularity>n.game.popularity?-1:l.game.popularity<n.game.popularity?1:0})},l.prototype.onViewers=function(l){if(!l)return this.games.sort(function(l,n){return l.viewers<n.viewers?-1:l.viewers>n.viewers?1:0});this.games.sort(function(l,n){return l.viewers>n.viewers?-1:l.viewers<n.viewers?1:0})},l.prototype.openGame=function(l){this._twitchService.storage=l,this.router.navigate(["details"])},l.prototype.handlerError=function(l){console.log("ERROR",l)},l.ctorParameters=function(){return[{type:v},{type:h.k}]},l}(),w=function(){function l(){this.search=new t.p,this.popularity=new t.p,this.viewers=new t.p,this.popularityActive=!1,this.viewersActive=!1}return l.prototype.ngOnInit=function(){},l.prototype.onInput=function(l){this.search.emit(l)},l.prototype.onPopularity=function(l){var n=l.target||l.srcElement;this.popularityActive=!this.popularityActive,this.popularityActive?this.activeButton(n):this.inactiveButton(n),this.popularity.emit(this.popularityActive)},l.prototype.onViewers=function(l){var n=l.target||l.srcElement;this.viewersActive=!this.viewersActive,this.viewersActive?this.activeButton(n):this.inactiveButton(n),this.viewers.emit(this.viewersActive)},l.prototype.activeButton=function(l){l.classList.remove("btn-primary"),l.classList.add("btn-secondary")},l.prototype.inactiveButton=function(l){l.classList.remove("btn-secondary"),l.classList.add("btn-primary")},l.ctorParameters=function(){return[]},l}(),y=[[".search-box__input[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:5px;background:#f2f2f4;color:#333}.search-box__input--field[_ngcontent-%COMP%]{width:calc(100% - 26px);padding:1em;border:none;background:transparent;outline:none}.search-box__input--icon[_ngcontent-%COMP%]{position:absolute;right:5px;top:15px}.search-box__filters[_ngcontent-%COMP%]{position:relative;margin-top:1em}"]],k=t._12({encapsulation:0,styles:y,data:{}});function x(l){return t._33(0,[(l()(),t._31(-1,null,["\n"])),(l()(),t._15(1,0,null,null,51,"div",[["class","search-box"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n  \n  "])),(l()(),t._15(3,0,null,null,48,"form",[],null,null,null,null,null)),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(5,0,null,null,20,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n      "])),(l()(),t._15(7,0,null,null,17,"div",[["class","col"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n        \n        "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._15(10,0,null,null,13,"div",[["class","search-box__input"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(12,0,[["search",1]],null,0,"input",[["class","search-box__input--field"],["placeholder","Buscar"],["type","text"]],null,[[null,"input"]],function(l,n,u){var e=!0,i=l.component;"input"===n&&(e=!1!==i.onInput(t._27(l,12).value)&&e);return e},null,null)),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(14,0,null,null,8,"span",[["class","search-box__input--icon"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n            "])),(l()(),t._15(16,0,null,null,5,":svg:svg",[["fill","#000000"],["height","24"],["viewBox","0 0 24 24"],["width","24"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n              "])),(l()(),t._15(18,0,null,null,0,":svg:path",[["d","M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n              "])),(l()(),t._15(20,0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n            "])),(l()(),t._31(-1,null,["\n          "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n      "])),(l()(),t._31(-1,null,["\n    "])),(l()(),t._31(-1,null,["\n    \n    "])),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(28,0,null,null,22,"div",[["class","search-box__filters"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n      "])),(l()(),t._15(30,0,null,null,19,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n        "])),(l()(),t._15(32,0,null,null,4,"div",[["class","col-xs-2"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(34,0,null,null,1,"strong",[["class","text-right"]],null,null,null,null,null)),(l()(),t._31(-1,null,["Filtrar por:"])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._15(38,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(40,0,null,null,1,"button",[["class","btn btn-primary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.onPopularity(u)&&t);return t},null,null)),(l()(),t._31(-1,null,["Popularidade"])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._15(44,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(46,0,null,null,1,"button",[["class","btn btn-primary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.onViewers(u)&&t);return t},null,null)),(l()(),t._31(-1,null,["Visualiza\xe7\xf5es"])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n      "])),(l()(),t._31(-1,null,["\n    "])),(l()(),t._31(-1,null,["\n    \n  "])),(l()(),t._31(-1,null,["\n  \n"]))],null,null)}t._10("app-search",w,function(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-search",[],null,null,null,x,k)),t._13(1,114688,null,0,w,[],null,null)],function(l,n){l(n,1,0)},null)},{},{search:"search",popularity:"popularity",viewers:"viewers"},[]);var P=function(){function l(){this.scrollcallback=new t.p,this.loader="https://loading.io/spinners/fidget-spinner/lg.fidget-spinner.gif",this.isVisible=!1}return l.prototype.ngOnInit=function(){this.scrollEvent()},l.prototype.scrollEvent=function(){var l=this;document.addEventListener("scroll",function(){var n=document.querySelector("app-infinite-scroll");l.isVisibleInViewPort(n)&&!l.isVisible&&(l.isVisible=!0,l.scrollcallback.emit(l))})},l.prototype.isVisibleInViewPort=function(l){return!!l&&l.getBoundingClientRect().bottom-10<=(window.innerHeight||document.documentElement.clientHeight)},l.prototype.complete=function(){this.isVisible=!1},l.ctorParameters=function(){return[]},l}(),O=[[".infinite-scroll[_ngcontent-%COMP%]{position:relative;width:100%}.infinite-scroll[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:1em auto;width:50px;height:50px}"]],C=t._12({encapsulation:0,styles:O,data:{}});function M(l){return t._33(0,[(l()(),t._15(0,0,null,null,3,"p",[["class","infinite-scroll"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(2,0,null,null,0,"img",[["alt","Carregando..."]],[[8,"src",4]],null,null,null,null)),(l()(),t._31(-1,null,["\n"]))],null,function(l,n){l(n,2,0,n.component.loader)})}function I(l){return t._33(0,[(l()(),t._9(16777216,null,null,1,null,M)),t._13(1,16384,null,0,m.i,[t.Y,t.V],{ngIf:[0,"ngIf"]},null),(l()(),t._31(-1,null,["\n"]))],function(l,n){l(n,1,0,n.component.isVisible)},null)}t._10("app-infinite-scroll",P,function(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-infinite-scroll",[],null,null,null,I,C)),t._13(1,114688,null,0,P,[],null,null)],function(l,n){l(n,1,0)},null)},{loader:"loader"},{scrollcallback:"scrollcallback"},[]);var A=[[".l-game-list[_ngcontent-%COMP%]{position:relative;margin-top:2em}"]],V=t._12({encapsulation:0,styles:A,data:{}});function F(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-loader",[],null,null,null,c,a)),t._13(1,114688,null,0,o,[],null,null)],function(l,n){l(n,1,0)},null)}function S(l){return t._33(0,[(l()(),t._15(0,0,null,null,4,"div",[["class","col-4 col-md-3 mt-3"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n              "])),(l()(),t._15(2,0,null,null,1,"app-thumb",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.openGame(l.context.$implicit)&&t);return t},g,p)),t._13(3,114688,null,0,s,[],{title:[0,"title"],thumb:[1,"thumb"]},null),(l()(),t._31(-1,null,["\n            "]))],function(l,n){l(n,3,0,n.context.$implicit.game.name,n.context.$implicit.game.box.large)},null)}function j(l){return t._33(0,[t._28(0,f,[]),(l()(),t._15(1,0,null,null,30,"section",[["class","l-game-list"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n  \n  "])),(l()(),t._9(16777216,null,null,1,null,F)),t._13(4,16384,null,0,m.i,[t.Y,t.V],{ngIf:[0,"ngIf"]},null),(l()(),t._31(-1,null,["\n  \n  "])),(l()(),t._15(6,0,null,null,24,"div",[["class","container"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n    \n    "])),(l()(),t._15(8,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n      "])),(l()(),t._15(10,0,null,null,18,"div",[["class","col-12 col-md-8 offset-md-2"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n        \n        "])),(l()(),t._15(12,0,null,null,1,"app-search",[],null,[[null,"search"],[null,"popularity"],[null,"viewers"]],function(l,n,u){var e=!0,i=l.component;"search"===n&&(e=!1!==i.onSearch(t._27(l,13),u)&&e);"popularity"===n&&(e=!1!==i.onPopularity(u)&&e);"viewers"===n&&(e=!1!==i.onViewers(u)&&e);return e},x,k)),t._13(13,114688,[["search",4]],0,w,[],null,{search:"search",popularity:"popularity",viewers:"viewers"}),(l()(),t._31(-1,null,["\n        \n        "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._15(16,0,null,null,8,"section",[["class","l-game-list__gallery"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(18,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n            "])),(l()(),t._9(16777216,null,null,2,null,S)),t._13(21,802816,null,0,m.h,[t.Y,t.V,t.y],{ngForOf:[0,"ngForOf"]},null),t._29(22,2),(l()(),t._31(-1,null,["\n          "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n        \n        "])),(l()(),t._15(26,0,null,null,1,"app-infinite-scroll",[],null,[[null,"scrollcallback"]],function(l,n,u){var t=!0,e=l.component;"scrollcallback"===n&&(t=!1!==e.doInfiniteScroll(u)&&t);return t},I,C)),t._13(27,114688,null,0,P,[],null,{scrollcallback:"scrollcallback"}),(l()(),t._31(-1,null,["\n\n      "])),(l()(),t._31(-1,null,["\n    "])),(l()(),t._31(-1,null,["\n  "])),(l()(),t._31(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,4,0,u.loading),l(n,13,0),l(n,21,0,t._32(n,21,0,l(n,22,0,t._27(n,0),u.games,t._27(n,13).value))),l(n,27,0)},null)}var E=t._10("app-game-list",b,function(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-game-list",[],null,null,null,j,V)),t._13(1,114688,null,0,b,[v,h.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),G=function(){function l(){}return l.prototype.transform=function(l,n){return l.includes("{width}")&&(l=l.replace("{width}",1400)),l.includes("{height}")&&(l=l.replace("{height}",1500)),l},l}(),z=function(){function l(){}return l.prototype.transform=function(l,n){return Intl.NumberFormat("pt-BR",{style:"decimal"}).format(l)},l}(),B=function(){return function(l,n,u){this.viewers=l,this.channels=n,this.game=u}}(),L=function(){function l(l,n){this._twitchService=l,this.router=n,this.game=new B}return l.prototype.ngOnInit=function(){this.setGame()},l.prototype.setGame=function(){if(!this._twitchService.storage)return this.router.navigate(["/"]);this.game=this._twitchService.storage},l.prototype.goBack=function(){return this.router.navigate(["/"])},l.ctorParameters=function(){return[{type:v},{type:h.k}]},l}(),Y=[[".l-game-detail[_ngcontent-%COMP%]{position:relative}.l-game-detail__header[_ngcontent-%COMP%]{width:100%;padding:1em;background:#00bed7;color:#fff}.l-game-detail__content[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-attachment:fixed;min-height:500px;height:auto}.m-game__card[_ngcontent-%COMP%]{position:relative}.m-game__caption[_ngcontent-%COMP%]{width:100%;height:auto;position:absolute;left:0;bottom:0;padding:1em;text-align:center;background:rgba(0,0,0,.7);color:#fff}.m-game__caption--title[_ngcontent-%COMP%]{margin-bottom:1em}.m-game__caption--info[_ngcontent-%COMP%]{display:block;line-height:1.7em}.m-game__button--back[_ngcontent-%COMP%]{cursor:pointer}"]],R=t._12({encapsulation:0,styles:Y,data:{}});function D(l){return t._33(0,[(l()(),t._15(0,0,null,null,58,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n    "])),(l()(),t._15(2,0,null,null,55,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n      "])),(l()(),t._15(4,0,null,null,52,"div",[["class","col-12 col-md-6 offset-md-3"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._15(7,0,null,null,20,"header",[["class","l-game-detail__header"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(9,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n            "])),(l()(),t._15(11,0,null,null,8,"div",[["class","col-2 col-sm-1 m-game__button--back"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.goBack()&&t);return t},null,null)),(l()(),t._31(-1,null,["\n              "])),(l()(),t._15(13,0,null,null,5,":svg:svg",[["fill","#FFFFFF"],["height","36"],["viewBox","0 0 24 24"],["width","36"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n                "])),(l()(),t._15(15,0,null,null,0,":svg:path",[["d","M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n                "])),(l()(),t._15(17,0,null,null,0,":svg:path",[["d","M0-.5h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n              "])),(l()(),t._31(-1,null,["\n            "])),(l()(),t._31(-1,null,["\n            "])),(l()(),t._15(21,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n              "])),(l()(),t._15(23,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t._31(24,null,["",""])),(l()(),t._31(-1,null,["\n            "])),(l()(),t._31(-1,null,["\n          "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n        \n        "])),(l()(),t._31(-1,null,["\n          "])),(l()(),t._15(30,0,null,null,25,"div",[["class","l-game-detail__content"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n            "])),(l()(),t._15(32,0,null,null,22,"figure",[["class","m-game__card"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n              "])),(l()(),t._15(34,0,null,null,1,"img",[["class","img-fluid"]],[[8,"src",4]],null,null,null,null)),t._29(35,1),(l()(),t._31(-1,null,["\n              "])),(l()(),t._15(37,0,null,null,16,"figcaption",[["class","m-game__caption"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n                "])),(l()(),t._15(39,0,null,null,1,"h4",[["class","m-game__caption--title"]],null,null,null,null,null)),(l()(),t._31(40,null,["",""])),(l()(),t._31(-1,null,["\n                "])),(l()(),t._15(42,0,null,null,2,"span",[["class","m-game__caption--info"]],null,null,null,null,null)),(l()(),t._31(43,null,[""," visualiza\xe7\xf5es"])),t._29(44,1),(l()(),t._31(-1,null,["\n                "])),(l()(),t._15(46,0,null,null,2,"span",[["class","m-game__caption--info"]],null,null,null,null,null)),(l()(),t._31(47,null,[""," canais ao vivo"])),t._29(48,1),(l()(),t._31(-1,null,["\n                "])),(l()(),t._15(50,0,null,null,2,"span",[["class","m-game__caption--info"]],null,null,null,null,null)),(l()(),t._31(51,null,[""," popularidade"])),t._29(52,1),(l()(),t._31(-1,null,["\n              "])),(l()(),t._31(-1,null,["\n            "])),(l()(),t._31(-1,null,["\n          "])),(l()(),t._31(-1,null,["\n        "])),(l()(),t._31(-1,null,["\n      "])),(l()(),t._31(-1,null,["\n      \n    "]))],null,function(l,n){var u=n.component;l(n,24,0,u.game.game.name),l(n,34,0,t._18(1,"",t._32(n,34,0,l(n,35,0,t._27(n.parent,0),u.game.game.box.template)),"")),l(n,40,0,u.game.game.name),l(n,43,0,t._32(n,43,0,l(n,44,0,t._27(n.parent,1),u.game.viewers))),l(n,47,0,t._32(n,47,0,l(n,48,0,t._27(n.parent,1),u.game.channels))),l(n,51,0,t._32(n,51,0,l(n,52,0,t._27(n.parent,1),u.game.game.popularity)))})}function N(l){return t._33(0,[t._28(0,G,[]),t._28(0,z,[]),(l()(),t._15(2,0,null,null,4,"section",[["class","l-game-detail"]],null,null,null,null,null)),(l()(),t._31(-1,null,["\n  \n  "])),(l()(),t._9(16777216,null,null,1,null,D)),t._13(5,16384,null,0,m.i,[t.Y,t.V],{ngIf:[0,"ngIf"]},null),(l()(),t._31(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,5,0,null==u.game?null:u.game.game)},null)}var q=t._10("app-game-details",L,function(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-game-details",[],null,null,null,N,R)),t._13(1,114688,null,0,L,[v,h.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),K=[[""]],T=t._12({encapsulation:0,styles:K,data:{}});function H(l){return t._33(0,[(l()(),t._15(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t._13(1,212992,null,0,h.m,[h.b,t.Y,t.k,[8,null],t.i],null,null)],function(l,n){l(n,1,0)},null)}var X=t._10("app-root",i,function(l){return t._33(0,[(l()(),t._15(0,0,null,null,1,"app-root",[],null,null,null,H,T)),t._13(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),W=u("fc+i"),$=function(){return function(){}}(),J=t._11(e,[i],function(l){return t._25([t._26(512,t.k,t._7,[[8,[E,q,X]],[3,t.k],t.E]),t._26(5120,t.A,t._24,[[3,t.A]]),t._26(4608,m.k,m.j,[t.A]),t._26(5120,t.c,t._16,[]),t._26(5120,t.y,t._22,[]),t._26(5120,t.z,t._23,[]),t._26(4608,W.b,W.s,[m.c]),t._26(6144,t.Q,null,[W.b]),t._26(4608,W.e,W.f,[]),t._26(5120,W.c,function(l,n,u,t){return[new W.k(l),new W.o(n),new W.n(u,t)]},[m.c,m.c,m.c,W.e]),t._26(4608,W.d,W.d,[W.c,t.G]),t._26(135680,W.m,W.m,[m.c]),t._26(4608,W.l,W.l,[W.d,W.m]),t._26(6144,t.O,null,[W.l]),t._26(6144,W.p,null,[W.m]),t._26(4608,t.W,t.W,[t.G]),t._26(4608,W.g,W.g,[m.c]),t._26(4608,W.i,W.i,[m.c]),t._26(5120,h.a,h.v,[h.k]),t._26(4608,h.d,h.d,[]),t._26(6144,h.f,null,[h.d]),t._26(135680,h.n,h.n,[h.k,t.D,t.j,t.w,h.f]),t._26(4608,h.e,h.e,[]),t._26(5120,h.h,h.y,[h.w]),t._26(5120,t.b,function(l){return[l]},[h.h]),t._26(4608,d.i,d.n,[m.c,t.J,d.l]),t._26(4608,d.o,d.o,[d.i,d.m]),t._26(5120,d.a,function(l){return[l]},[d.o]),t._26(4608,d.k,d.k,[]),t._26(6144,d.j,null,[d.k]),t._26(4608,d.h,d.h,[d.j]),t._26(6144,d.b,null,[d.h]),t._26(5120,d.f,d.p,[d.b,[2,d.a]]),t._26(4608,d.c,d.c,[d.f]),t._26(4608,v,v,[d.c]),t._26(512,m.b,m.b,[]),t._26(1024,t.o,W.q,[]),t._26(1024,t.F,function(){return[h.r()]},[]),t._26(512,h.w,h.w,[t.w]),t._26(1024,t.d,function(l,n,u){return[W.r(l,n),h.x(u)]},[[2,W.h],[2,t.F],h.w]),t._26(512,t.e,t.e,[[2,t.d]]),t._26(131584,t._14,t._14,[t.G,t._8,t.w,t.o,t.k,t.e]),t._26(2048,t.g,null,[t._14]),t._26(512,t.f,t.f,[t.g]),t._26(512,W.a,W.a,[[3,W.a]]),t._26(1024,h.q,h.t,[[3,h.k]]),t._26(512,h.p,h.c,[]),t._26(512,h.b,h.b,[]),t._26(256,h.g,{},[]),t._26(1024,m.g,h.s,[m.m,[2,m.a],h.g]),t._26(512,m.f,m.f,[m.g]),t._26(512,t.j,t.j,[]),t._26(512,t.D,t.T,[t.j,[2,t.U]]),t._26(1024,h.i,function(){return[[{path:"",component:b},{path:"details",component:L}]]},[]),t._26(1024,h.k,h.u,[t.g,h.p,h.b,m.f,t.w,t.D,t.j,h.i,h.g,[2,h.o],[2,h.j]]),t._26(512,h.l,h.l,[[2,h.q],[2,h.k]]),t._26(512,$,$,[]),t._26(512,d.e,d.e,[]),t._26(512,d.d,d.d,[]),t._26(512,e,e,[]),t._26(256,d.l,"XSRF-TOKEN",[]),t._26(256,d.m,"X-XSRF-TOKEN",[])])});Object(t._2)(),Object(W.j)().bootstrapModuleFactory(J).catch(function(l){return console.log(l)})},gFIY:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="gFIY"}},[0]);