(this["webpackJsonpsingle.earth-test"]=this["webpackJsonpsingle.earth-test"]||[]).push([[7],{795:function(t,n,e){"use strict";e.r(n);var r,a=e(0),o=e(11),u=e(2),c=r||(r={});c.Pop="POP",c.Push="PUSH",c.Replace="REPLACE";var i=function(t){return t};function s(t){t.preventDefault(),t.returnValue=""}function l(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter((function(t){return t!==n}))}},call:function(n){t.forEach((function(t){return t&&t(n)}))}}}function f(){return Math.random().toString(36).substr(2,8)}function h(t){var n=t.pathname,e=t.search;return(void 0===n?"/":n)+(void 0===e?"":e)+(void 0===(t=t.hash)?"":t)}function d(t){var n={};if(t){var e=t.indexOf("#");0<=e&&(n.hash=t.substr(e),t=t.substr(0,e)),0<=(e=t.indexOf("?"))&&(n.search=t.substr(e),t=t.substr(0,e)),t&&(n.pathname=t)}return n}var p=e(32),v=e(1);n.default=function(){return Object(a.useEffect)((function(){(function(t){function n(){var t=p.location,n=v.state||{};return[n.idx,i({pathname:t.pathname,search:t.search,hash:t.hash,state:n.usr||null,key:n.key||"default"})]}function e(t){return"string"===typeof t?t:h(t)}function a(t,n){return void 0===n&&(n=null),i(Object(u.a)({},j,"string"===typeof t?d(t):t,{state:n,key:f()}))}function o(t){g=t,t=n(),y=t[0],j=t[1],k.call({action:g,location:j})}function c(t){v.go(t)}void 0===t&&(t={});var p=void 0===(t=t.window)?document.defaultView:t,v=p.history,b=null;p.addEventListener("popstate",(function(){if(b)x.call(b),b=null;else{var t=r.Pop,e=n(),a=e[0];if(e=e[1],x.length){if(null!=a){var u=y-a;u&&(b={action:t,location:e,retry:function(){c(-1*u)}},c(u))}}else o(t)}}));var g=r.Pop,y=(t=n())[0],j=t[1],k=l(),x=l();return null==y&&(y=0,v.replaceState(Object(u.a)({},v.state,{idx:y}),"")),{get action(){return g},get location(){return j},createHref:e,push:function t(n,u){var c=r.Push,i=a(n,u);if(!x.length||(x.call({action:c,location:i,retry:function(){t(n,u)}}),0)){var s=[{usr:i.state,key:i.key,idx:y+1},e(i)];i=s[0],s=s[1];try{v.pushState(i,"",s)}catch(l){p.location.assign(s)}o(c)}},replace:function t(n,u){var c=r.Replace,i=a(n,u);x.length&&(x.call({action:c,location:i,retry:function(){t(n,u)}}),1)||(i=[{usr:i.state,key:i.key,idx:y},e(i)],v.replaceState(i[0],"",i[1]),o(c))},go:c,back:function(){c(-1)},forward:function(){c(1)},listen:function(t){return k.push(t)},block:function(t){var n=x.push(t);return 1===x.length&&p.addEventListener("beforeunload",s),function(){n(),x.length||p.removeEventListener("beforeunload",s)}}}})().replace("/notfound")}),[]),Object(v.jsx)(p.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Not Found"}),Object(v.jsx)(o.b,{to:"/",children:Object(v.jsx)("button",{type:"button",children:"Back Home"})})]})})}}}]);
//# sourceMappingURL=NotFoundPage.f4f11418.chunk.js.map