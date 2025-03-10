(()=>{"use strict";var t={56:(t,e,s)=>{t.exports=function(t){var e=s.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function s(t){for(var s=-1,r=0;r<e.length;r++)if(e[r].identifier===t){s=r;break}return s}function r(t,r){for(var o={},i=[],a=0;a<t.length;a++){var A=t[a],c=r.base?A[0]+r.base:A[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var m=s(l),h={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var p=n(h,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function n(t,e){var s=e.domAPI(e);return s.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;s.update(t=e)}else s.remove()}}t.exports=function(t,n){var o=r(t=t||[],n=n||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var a=s(o[i]);e[a].references--}for(var A=r(t,n),c=0;c<o.length;c++){var d=s(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=A}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",r=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),r&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),r&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,r,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var A=this[a][0];null!=A&&(i[A]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),s&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=s):d[2]=s),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},354:t=>{t.exports=function(t){var e=t[1],s=t[3];if(!s)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(n," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},659:t=>{var e={};t.exports=function(t,s){var r=function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(s)}},795:(t,e,s)=>{s.d(e,{A:()=>a});var r=s(354),n=s.n(r),o=s(314),i=s.n(o)()(n());i.push([t.id,"body{margin:0;padding:0;padding-left:150px;padding-right:150px}.chat-room{width:100%;height:100vh;display:grid;grid-template-columns:.25fr 1fr}.chat-room .users-col .users-list{border-left:1px solid #000;border-top:1px solid #000;border-bottom:1px solid #000;border-top-left-radius:20px;border-bottom-left-radius:20px;margin-top:80px}.chat-room .users-col .users-list .items{list-style:none;padding:10px}.chat-room .users-col .users-list .items .items-item{display:flex;height:100%;flex-direction:row;margin-bottom:5px}.chat-room .users-col .users-list .items .item-ava{margin-top:8px;width:40px;height:40px;border-radius:20px;border:1px solid #000}.chat-room .users-col .users-list .items .item-userblock{margin-left:10px}.chat-room .users-col .users-list .items .item-username{font-size:18px}.chat-room .users-col .users-list .items .item-username.session-user{color:red}.chat-room .chat-col .chat{margin-top:40px;border-top:1px solid #000;border-right:1px solid #000;border-left:1px solid #000;border-top-left-radius:20px;border-top-right-radius:20px;height:60vh;padding:20px;overflow:auto;overscroll-behavior-y:contain}.chat-room .chat-col .chat .chat-messages{list-style:none;margin:0;padding:0}.chat-room .chat-col .chat .chat-messages li{margin-bottom:10px;background-color:#fff}.chat-room .chat-col .chat .chat-messages li .message-header{font-size:14px;margin-bottom:3px}.chat-room .chat-col .chat .chat-messages li .message-body{font-size:20px}.chat-room .chat-col .chat .chat-messages li.right{text-align:right}.chat-room .chat-col .chat .chat-messages li.right .message-header{color:red}.chat-room .chat-col .send-message{border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-bottom:1px solid #000;border-right:1px solid #000;border-left:1px solid #000}.chat-room .chat-col .send-message .message-form{text-align:center}.chat-room .chat-col .send-message .message-form .message-content{border-radius:20px;width:98%;padding:12px 20px;margin:8px 0;box-sizing:border-box}.user-form{width:40%;position:absolute;top:25vh;left:30vw;background-color:#fff;border-radius:10px;border:1px solid #000;padding:10px}.user-form .form-caption{text-align:center;margin-top:10px;margin-bottom:10px}.user-form .form-caption h3{padding:0;margin:0}.user-form .form-group label{display:block}.user-form .form-group input[type=text]{width:98%;font-size:20px}.user-form .buttons-list{margin-top:20px;text-align:center}.user-form .buttons-list button{font-size:15px;width:200px;height:30px}.user-form .error-message{background-color:#ffa07a}.form-block{height:100%}","",{version:3,sources:["webpack://./src/css/style.scss"],names:[],mappings:"AAAA,KACC,QAAA,CACA,SAAA,CACA,kBAAA,CACA,mBAAA,CAID,WACC,UAAA,CACA,YAAA,CACA,YAAA,CACA,+BAAA,CAEE,kCACD,0BAAA,CACA,yBAAA,CACA,4BAAA,CACA,2BAAA,CACA,8BAAA,CACA,eAAA,CACA,yCACC,eAAA,CACA,YAAA,CACA,qDACC,YAAA,CACA,WAAA,CACA,kBAAA,CACA,iBAAA,CAGD,mDACC,cAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,qBAAA,CAED,yDACC,gBAAA,CAGD,wDACC,cAAA,CACA,qEACC,SAAA,CAOH,2BACC,eAAA,CACA,yBAAA,CACA,2BAAA,CACA,0BAAA,CACA,2BAAA,CACA,4BAAA,CACA,WAAA,CACA,YAAA,CACA,aAAA,CACA,6BAAA,CACA,0CACC,eAAA,CACA,QAAA,CACA,SAAA,CACA,6CACC,kBAAA,CACA,qBAAA,CACA,6DACC,cAAA,CACA,iBAAA,CAED,2DACC,cAAA,CAED,mDACC,gBAAA,CACA,mEACC,SAAA,CAML,mCACC,8BAAA,CACA,+BAAA,CACA,4BAAA,CACA,2BAAA,CACA,0BAAA,CACA,iDACa,iBAAA,CACZ,kEACC,kBAAA,CACA,SAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CASL,WACC,SAAA,CACA,iBAAA,CACA,QAAA,CACA,SAAA,CACA,qBAAA,CACA,kBAAA,CACA,qBAAA,CACA,YAAA,CACA,yBACC,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,4BACC,SAAA,CACA,QAAA,CAIC,6BACF,aAAA,CAEE,wCACF,SAAA,CACA,cAAA,CAGD,yBACC,eAAA,CACA,iBAAA,CACA,gCACC,cAAA,CACA,WAAA,CACA,WAAA,CAIF,0BACC,wBAAA,CAKF,YACC,WAAA",sourcesContent:["body {\n\tmargin: 0;\n\tpadding: 0;\n\tpadding-left: 150px;\n\tpadding-right: 150px;\n }\n\n\n.chat-room {\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 0.25fr 1fr;\n\t.users-col{\n\t  .users-list{\n\t\tborder-left: 1px solid black;\n\t\tborder-top: 1px solid black;\n\t\tborder-bottom: 1px solid black;\n\t\tborder-top-left-radius: 20px;\n\t\tborder-bottom-left-radius: 20px;\n\t\tmargin-top: 80px;\n\t\t.items {\n\t\t\tlist-style: none;\n\t\t\tpadding: 10px;\n\t\t\t.items-item{\n\t\t\t\tdisplay: flex;\n\t\t\t\theight: 100%;\n\t\t\t\tflex-direction: row;\n\t\t\t\tmargin-bottom: 5px;\n\t\n\t\t\t}\n\t\t\t.item-ava {\n\t\t\t\tmargin-top: 8px;\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tborder: 1px solid black;\n\t\t\t}\n\t\t\t.item-userblock {\n\t\t\t\tmargin-left: 10px;\n\t\t\t}\n\n\t\t\t.item-username {\n\t\t\t\tfont-size: 18px;\n\t\t\t\t&.session-user {\n\t\t\t\t\tcolor: red;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t  }\n\t}\n\t.chat-col{\n\t\t.chat {\n\t\t\tmargin-top: 40px;\n\t\t\tborder-top: 1px solid black;\n\t\t\tborder-right: 1px solid black;\n\t\t\tborder-left: 1px solid black;\n\t\t\tborder-top-left-radius: 20px;\n\t\t\tborder-top-right-radius: 20px;\n\t\t\theight: 60vh;\n\t\t\tpadding: 20px;\n\t\t\toverflow: auto;\n\t\t\toverscroll-behavior-y: contain;\n\t\t\t.chat-messages {\n\t\t\t\tlist-style: none;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tli {\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\t.message-header{\n\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\tmargin-bottom: 3px;\n\t\t\t\t\t}\n\t\t\t\t\t.message-body {\n\t\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\t}\n\t\t\t\t\t&.right {\n\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t.message-header{\n\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.send-message {\n\t\t\tborder-bottom-left-radius: 20px;\n\t\t\tborder-bottom-right-radius: 20px;\n\t\t\tborder-bottom: 1px solid black;\n\t\t\tborder-right: 1px solid black;\n\t\t\tborder-left: 1px solid black;\n\t\t\t.message-form {\n                text-align: center;\n\t\t\t\t.message-content {\n\t\t\t\t\tborder-radius: 20px;\n\t\t\t\t\twidth: 98%;\n\t\t\t\t\tpadding: 12px 20px;\n\t\t\t\t\tmargin: 8px 0;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t  }\n\t\t\t}\n\n\t\t}\n\t  }\n}\n\n\n.user-form {\n\twidth: 40%;\n\tposition: absolute;\n\ttop: 25vh;\n\tleft: 30vw;\n\tbackground-color: white;\n\tborder-radius: 10px;\n\tborder: 1px solid black;\n\tpadding: 10px;\n\t.form-caption {\n\t\ttext-align: center;\n\t\tmargin-top: 10px;\n\t\tmargin-bottom: 10px;\n\t\th3 {\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t}\n\t}\n\t.form-group {\n\t   label {\n\t\tdisplay: block;\n\t   }\n\t   input[type=text]{\n\t\twidth: 98%;\n\t\tfont-size: 20px;\n\t   }\n\t}\n\t.buttons-list {\n\t\tmargin-top: 20px;\n\t\ttext-align: center;\n\t\tbutton{\n\t\t\tfont-size: 15px;\n\t\t\twidth: 200px;\n\t\t\theight: 30px;\n\n\t\t}\n\t}\n\t.error-message {\n\t\tbackground-color: lightsalmon;\n\t}\n\n}\n\n.form-block {\n\theight: 100%;\n}"],sourceRoot:""}]);const a=i},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(s){!function(t,e,s){var r="";s.supports&&(r+="@supports (".concat(s.supports,") {")),s.media&&(r+="@media ".concat(s.media," {"));var n=void 0!==s.layer;n&&(r+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),r+=s.css,n&&(r+="}"),s.media&&(r+="}"),s.supports&&(r+="}");var o=s.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,s)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function s(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,s),o.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.nc=void 0;var r=s(72),n=s.n(r),o=s(825),i=s.n(o),a=s(659),A=s.n(a),c=s(56),d=s.n(c),l=s(540),m=s.n(l),h=s(113),p=s.n(h),u=s(795),C={};C.styleTagTransform=p(),C.setAttributes=d(),C.insert=A().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=m(),n()(u.A,C),u.A&&u.A.locals&&u.A.locals;class g{constructor(t,e){this.element=t,this.loginUser=e,this.onSubmit=this.onSubmit.bind(this),this.onError=this.onError.bind(this),this.formRemove=this.formRemove.bind(this)}static get markup(){return'<form class="user-form">\n              <div class="form-caption"><h3>Выберите псевдоним</h3></div>\n              <div class="form-group">\n                <input type="text" name="user-name" class="user-name" autocomplete="off">\n               </div>\n              <div class="buttons-list">\n                <button class="submit">Продолжить</button>\n              </div>\n            </form>'}static get submitSelector(){return".submit"}static get formSelector(){return".user-form"}static get userInput(){return".user-name"}static get errMsgSelector(){return".error-message"}bindToDOM(){this.element.innerHTML=g.markup,this.form=this.element.querySelector(g.formSelector),this.userinput=this.element.querySelector(g.userInput),this.form.addEventListener("submit",this.onSubmit),this.userinput.addEventListener("input",(()=>{const t=this.element.querySelector(g.errMsgSelector);t&&t.remove()}))}formRemove(t){t.preventDefault(),this.form.removeEventListener("submit",this.onCancel),this.form.remove()}onError(t){const e=document.createElement("div");e.classList.add("error-message"),e.textContent=t,this.form.appendChild(e)}onSubmit(t){t.preventDefault();const e=this.form.elements[0].value;e&&this.loginUser(e)}}class f{constructor(t,e){this.element=t,this.refreshData=this.refreshData.bind(this),this.addItem=this.addItem.bind(this),this.sessionUserName=e}static get markup(){return'<ul class="items"></ul>'}bindToDOM(){this.element.innerHTML=f.markup,this.items=this.element.querySelector(".items")}addItem(t){const e=document.createElement("li");e.classList.add("items-item");const s=document.createElement("div");s.classList.add("item-ava");const r=document.createElement("div");r.classList.add("item-userblock");const n=document.createElement("p");n.classList.add("item-username"),t.name===this.sessionUserName?(n.classList.add("session-user"),n.textContent="You"):n.textContent=t.name,e.appendChild(s),e.appendChild(r),r.appendChild(n),this.items.appendChild(e)}refreshData(t){t&&(this.items.innerHTML="",t.forEach((t=>{this.addItem(t)})))}}class b{constructor(t,e){this.element=t,this.refreshData=this.refreshData.bind(this),this.addItem=this.addItem.bind(this),this.sessionUserName=e}static get markup(){return'<ul class="chat-messages"></ul>'}bindToDOM(){this.element.innerHTML=b.markup,this.items=this.element.querySelector(".chat-messages")}addItem(t){const e=document.createElement("li");e.classList.add("message-item");const s=document.createElement("div");let r;s.classList.add("message-header"),t.user===this.sessionUserName?(r="You",e.classList.add("right")):r=t.user,s.textContent=`${r}, ${t.dateTime}`;const n=document.createElement("div");n.classList.add("message-body"),n.textContent=t.content,e.appendChild(s),e.appendChild(n),this.items.appendChild(e)}refreshData(t){t&&(this.items.innerHTML="",t.forEach((t=>{this.addItem(t)})))}}class x{constructor(t,e,s){this.element=t,this.sessionUserName=e,this.refrehUsers=this.refrehUsers.bind(this),this.refrehChat=this.refrehChat.bind(this),this.sendMessage=this.sendMessage.bind(this),this.sendToServer=s}static get markup(){return'<div class="chat-room">\n      <div class="users-col">\n        <div class="users-list"></div>\n      </div>\n      <div class="chat-col">\n        <div class="chat"></div>\n        <div class="send-message">\n        <form class="message-form">             \n           <div class="form-group">\n             <input type="text" name="message-content" class="message-content" placeholder="Type your message here" autocomplete="off">\n           </div>\n        </form>\n        </div>\n      </div>\n    </div>'}static get chatSelector(){return".chat"}static get usersSelector(){return".users-list"}static get messageFormSelector(){return".message-form"}static get messageInptSelector(){return".message-content"}bindToDOM(){this.element.innerHTML=x.markup,this.users=this.element.querySelector(x.usersSelector),this.chat=this.element.querySelector(x.chatSelector),this.messageForm=this.element.querySelector(x.messageFormSelector),this.messageInpt=this.messageForm.querySelector(x.messageInptSelector),this.userlist=new f(this.users,this.sessionUserName),this.userlist.bindToDOM(),this.chatMessages=new b(this.chat,this.sessionUserName),this.chatMessages.bindToDOM(),this.messageForm.addEventListener("submit",(t=>{this.sendMessage(t)}))}sendMessage(t){t.preventDefault();const e=this.messageForm.elements[0].value;e&&(this.sendToServer(e),this.messageInpt.value="")}refrehUsers(t){this.userlist.refreshData(t)}refrehChat(t){this.chatMessages.refreshData(t)}}const v=document.querySelector(".container"),y=document.querySelector(".form-block"),S=()=>document.querySelector(".chat");let k,B,w;const D=new WebSocket("wss://hw-ahj-sse-ws-backend.onrender.com");D.addEventListener("message",(t=>{const e=JSON.parse(t.data);"login"===e.type&&0===e.status&&(k=e.name,w=new x(v,k,(t=>(t=>{const e={type:"chatMessage",user:k,content:t};D.send(JSON.stringify(e))})(t))),w.bindToDOM(),B.formRemove(t)),"login"===e.type&&-1===e.status&&B.onError(e.message),"userlist"===e.type&&w&&w.refrehUsers(e.users),"chat"===e.type&&w&&(w.refrehChat(e.chat),S().scrollTop=S().scrollHeight)})),document.addEventListener("DOMContentLoaded",(()=>{B=new g(y,(t=>(t=>{const e={type:"login",user:t};D.send(JSON.stringify(e))})(t))),B.bindToDOM()})),window.addEventListener("beforeunload",(()=>{if(k){const t={type:"logout",user:k};D.send(JSON.stringify(t))}}))})();
//# sourceMappingURL=main.js.map