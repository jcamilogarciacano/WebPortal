(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{zlY0:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n("QPqR"),o=function(t){var e,n,o,l,v=10*-f,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,w=function(t){v=Object(i.n)(t),b(t)},h=function(){clearTimeout(l),l=void 0,n&&(O(!1),n=void 0)},E=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},b=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var o=Object(i.o)(e),a=o.x,c=o.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),O(!0)}if(t){var u=m.get(t);u&&(clearTimeout(u),m.delete(t));var f=r(t)?0:d;t.classList.remove(s),l=setTimeout((function(){T(t,a,c),l=void 0}),f)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&c(t);i&&i.addRipple&&(j(),o=i.addRipple(e,n))},j=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},O=function(t){j();var e=n;if(e){var i=u-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),m.delete(e)}),u);m.set(e,o)}else e.classList.remove(s)}},R=document;R.addEventListener("ionScrollStart",(function(t){e=t.target,h()})),R.addEventListener("ionScrollEnd",(function(){e=void 0})),R.addEventListener("ionGestureCaptured",h),R.addEventListener("touchstart",(function(t){v=Object(i.n)(t),E(t)}),!0),R.addEventListener("touchcancel",w,!0),R.addEventListener("touchend",w,!0),R.addEventListener("mousedown",(function(t){var e=Object(i.n)(t)-f;v<e&&E(t)}),!0),R.addEventListener("mouseup",(function(t){var e=Object(i.n)(t)-f;v<e&&b(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",d=200,u=200,f=2500}}]);