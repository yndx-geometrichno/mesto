(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}t.d({},{U:()=>H,$:()=>M});var r=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,r;return e=t,(r=[{key:"_getResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponse)}},{key:"updateUserInfo",value:function(t){var e=t.profileName,n=t.about;fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})}).then(this._getResponse)}},{key:"updateAvatar",value:function(t){var e=t.avatar;fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponse)}},{key:"addNewCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})}).then(this._getResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponse)}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function u(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_showInputError",(function(t){var e=t.closest("label").querySelector(".".concat(t.id,"-error"));t.classList.add(r._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(r._errorClass)})),u(this,"_hideInputError",(function(t){var e=t.closest("label").querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),e.classList.remove(r._errorClass),e.textContent=""})),this._formElement=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._inputSelector))),this._buttonElement=this._formElement.querySelector(".".concat(this._submitButtonSelector))}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleSubmitButton()}))})),this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._formElement.addEventListener("reset",(function(){t._disableSubmitButton()}))}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"resetInputErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!1)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0)}},{key:"_toggleSubmitButton",value:function(){this._hasInvalidInput(this._inputList)?this._disableSubmitButton():this._enableSubmitButton()}},{key:"enableValidation",value:function(){return this._setEventListeners(),this._formElement}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),l={formSelector:"popup__form",inputSelector:"popup__input",submitButtonSelector:"popup__save-btn",inactiveButtonClass:"popup__save-btn_type_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"setItems",value:function(){this._renderer(item)}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mouseup",(function(e){var n=e.target.classList;(n.contains("popup")||n.contains("popup__close-btn"))&&t.close()}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._submitCallback=r,n._submitBtn=n._popup.querySelector(".popup__save-btn"),n._inputLlist=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputLlist.forEach((function(e){t[e.name]=e.value.trim()})),t}},{key:"setEventListeners",value:function(){var t=this;v(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var n=t._getInputValues();t._submitCallback(n,t._submitBtn)}))}},{key:"close",value:function(){v(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"open",value:function(t,e){w(j(u.prototype),"open",this).call(this),H.src=e,H.alt=t,M.textContent=t}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var I=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameEl=document.querySelector(n),this._aboutEl=document.querySelector(r),this._avatarEl=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameEl.textContent,about:this._aboutEl.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameEl.textContent=e,this._aboutEl.textContent=n,this._avatarEl.src=r}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var T=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._cardId=e._id,this._userId=e.owner._id,this._myId=a,this._serverLikes=e.likes.length,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteBtnClick=o,this._apiRemoveLike=u,this._apiSetLike=i,this._handleLikeBtnClick=this._handleLikeBtnClick.bind(this),this._likeBtnIsPressed=this._likeBtnIsPressed.bind(this)}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.cloneNode(!0)}},{key:"_likeBtnIsPressed",value:function(){var t=this;this._data.likes.some((function(e){return e._id===t._myId}))&&this._likeBtn.classList.add("card__like-btn_active")}},{key:"_handleLikeBtnClick",value:function(){this._likeBtn.classList.contains("card__like-btn_active")?(this._apiRemoveLike(this._cardId,this._likeCounter),this._likeBtn.classList.remove("card__like-btn_active")):(this._apiSetLike(this._cardId,this._likeCounter),this._likeBtn.classList.add("card__like-btn_active"))}},{key:"_setEventListeners",value:function(){var t=this;this._deleteElement=this._element.querySelector(".card__delete-btn"),this._deleteElement.addEventListener("click",(function(){t._handleDeleteBtnClick(t._cardId,t._deleteElement)})),this._likeBtn=this._element.querySelector(".card__like-btn"),this._likeBtn.addEventListener("click",(function(){t._handleLikeBtnClick(t._likeBtn,t._cardId)})),this._element.querySelector(".card__img").addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._likeBtnIsPressed(),this._userId!==this._myId&&this._element.querySelector(".card__delete-btn").remove(),this._likeCounter=this._element.querySelector(".card__like-counter"),this._element.querySelector(".card__like-counter").textContent=this._serverLikes,this._element.querySelector(".card__name").textContent=this._name,this._element.querySelector(".card__img").src=this._link,this._element.querySelector(".card__img").alt=this._name,this._element}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._submitBtn=n._form.querySelector(".popup__save-btn"),n._submitCallback=r,n}return e=u,(n=[{key:"_confirmAction",value:function(t){this._confirmAction=t}},{key:"setData",value:function(t,e){this._cardId=t,this._deleteElem=e}},{key:"setEventListeners",value:function(){var t=this;A(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._cardId,t._deleteElem,t._submitBtn)}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var J=document.querySelector(".popup_type_photo"),H=J.querySelector(".photo-popup__photo"),M=J.querySelector(".photo-popup__header"),$=document.querySelector(".profile__edit-avatar-btn"),z=document.querySelector(".profile__edit-btn"),F=document.querySelector(".popup__input_type_profile-name"),G=document.querySelector(".popup__input_type_about"),K=document.querySelector(".profile__add-pic-btn"),Q=document.querySelector(".popup__form-profile"),W=document.querySelector(".popup__form-card"),X=document.querySelector(".popup__form-avatar"),Y=new r({url:"https://mesto.nomoreparties.co/v1/cohort-74",headers:{authorization:"1a4f8f06-b6f0-4df4-84b8-b4034a99d943","Content-type":"application/json"}}),Z="";Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];et.setUserInfo(o),Z=o._id,tt.renderItems(i)}));var tt=new p({renderer:function(t){var e=lt(t);tt.addItem(e)}},".cards"),et=new I({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),nt=new k(".popup_type_profile-pic-update",{submitCallback:function(t,e){ft(e,"Сохранение..."),Y.updateAvatar(t),Y.getUserInfo().then((function(t){et.setUserInfo(t)})).finally((function(){setTimeout(ft,1e3,e,"Сохранить"),nt.close()}))}});$.addEventListener("click",(function(){nt.open(),ut.resetInputErrors()})),nt.setEventListeners();var rt=new k(".popup_type_profile",{submitCallback:function(t,e){ft(e,"Сохранение..."),Y.updateUserInfo(t),Y.getUserInfo().then((function(t){et.setUserInfo(t)})).finally((function(){setTimeout(ft,1e3,e,"Сохранить"),rt.close()}))}});z.addEventListener("click",(function(){rt.open(),ut.resetInputErrors();var t=et.getUserInfo();F.value=t.name,G.value=t.about})),rt.setEventListeners();var ot=new k(".popup_type_card",{submitCallback:function(t,e){ft(e,"Сохранение...");var n={name:t.cardName,link:t.url};Y.addNewCard(n).then((function(t){var e=lt(t);tt.addItem(e)})).finally((function(){setTimeout(ft,1e3,e,"Сохранить"),ot.close()}))}});ot.setEventListeners(),K.addEventListener("click",(function(){ot.open(),at.resetInputErrors()}));var it=new N(".popup_type_delete-card-confirmation",{submitCallback:function(t,e,n){!function(t,e,n){n.value="Удаление...",Y.deleteCard(t).then((function(){e.closest(".card").remove(),it.close()})).finally((function(){setTimeout(ft,1e3,n,"Да")}))}(t,e,n)}});it.setEventListeners();var ut=new c(l,Q);ut.enableValidation();var at=new c(l,W);at.enableValidation(),new c(l,X).enableValidation();var ct=new P(".popup_type_photo");function lt(t){return new T(t,".template-card",st,pt,yt,ht,Z).createCard()}function st(t,e){ct.open(t,e)}function ft(t,e){t.value=e}function pt(t,e){it.open(),it.setData(t,e)}function yt(t,e){Y.setLike(t).then((function(t){e.textContent=t.likes.length}))}function ht(t,e){Y.removeLike(t).then((function(t){e.textContent=t.likes.length}))}ct.setEventListeners()})();