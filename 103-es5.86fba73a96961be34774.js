(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{KIXJ:function(t,e){var r=function(){return function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}(),n={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},s="{",i="}",o={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},a="--",u="@media",l="@";function c(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var p=/\bvar\(/,f=/\B--[\w-]+\s*:/,h=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,v=/^[\t ]+\n/gm;function m(t,e,r){var n=function(t,e){var r=c(p,t,e);if(!r)return null;var n=function(t,e){for(var n=0,s=r.start;s<t.length;s++){var i=t[s];if("("===i)n++;else if(")"===i&&--n<=0)return s+1}return s}(t),s=t.substring(r.end,n-1).split(","),i=s[0],o=s.slice(1);return{start:r.start,end:n,propName:i.trim(),fallback:o.length>0?o.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,i=null!=n.fallback?y(n.fallback):void 0;return e.push(t.substring(r,n.start),function(t){return function(e,r,n){return t[s]?t[s]:n?d(n,t):""}(0,0,i)}),n.end}function d(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function g(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var i=t[s];if(r)n&&'"'===i&&(r=!1),n||"'"!==i||(r=!1);else if('"'===i)r=!0,n=!0;else if("'"===i)r=!0,n=!1;else{if(";"===i)return s+1;if("}"===i)return s}}return s}function y(t){var e=0;t=function(t){for(var e="",r=0;;){var n=c(f,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=g(t,s)}return e}(t=t.replace(h,"")).replace(v,"");for(var r=[];e<t.length;)e=m(t,r,e);return r}function S(t){var e={};t.forEach(function(t){t.declarations.forEach(function(t){e[t.prop]=t.value})});for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach(function(t){var n=t[0],s=d(t[1],r);s!==r[n]&&(r[n]=s,e=!0)}),!e)return"break"},i=0;i<10&&"break"!==s();i++);return r}function b(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter(function(t){return t.type===n.STYLE_RULE}).forEach(function(t){var n=function(t){for(var e,r=[];e=M.exec(t.trim());){var n=w(e[2]),s=n.value,i=n.important;r.push({prop:e[1].trim(),value:y(s),important:i})}return r}(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach(function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:1,nu:e})}),e++}),r}var E="!important",M=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function w(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(E);return e&&(t=t.substr(0,t.length-E.length).trim()),{value:t,important:e}}function L(t){var e=[];return t.forEach(function(t){e.push.apply(e,t.selectors)}),e}function x(t){var e,c=function t(e,r){var s=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){s=(s=(s=(s=r.substring(e.previous?e.previous.end:e.parent.start,e.start-1)).replace(/\\([0-9a-f]{1,6})\s/gi,function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t})).replace(o.multipleSpaces," ")).substring(s.lastIndexOf(";")+1);var i=e.parsedSelector=e.selector=s.trim();e.atRule=0===i.indexOf(l),e.atRule?0===i.indexOf(u)?e.type=n.MEDIA_RULE:i.match(o.keyframesRule)&&(e.type=n.KEYFRAMES_RULE,e.keyframesName=e.selector.split(o.multipleSpaces).pop()):e.type=0===i.indexOf(a)?n.MIXIN_RULE:n.STYLE_RULE}var c=e.rules;if(c)for(var p=0,f=c.length,h=void 0;p<f&&(h=c[p]);p++)t(h,r);return e}(function(t){var e=new r;e.start=0,e.end=t.length;for(var n=e,o=0,a=t.length;o<a;o++)if(t[o]===s){n.rules||(n.rules=[]);var u=n,l=u.rules[u.rules.length-1]||null;(n=new r).start=o+1,n.parent=u,n.previous=l,u.rules.push(n)}else t[o]===i&&(n.end=o+1,n=n.parent||e);return e}(e=(e=t).replace(o.comments,"").replace(o.port,"")),e),p=y(t);return{original:t,template:p,selectors:b(c),usesCssVars:p.length>1}}function k(t,e){var r=x(e.innerHTML);r.styleEl=e,t.push(r)}function R(t,e,r){var n;return n="."+r,t.replace(new RegExp("\\."+e,"g"),n)}function T(t,e,r){var n=r.href;return fetch(n).then(function(t){return t.text()}).then(function(s){if(((o=s).indexOf("var(")>-1||I.test(o))&&r.parentNode){(function(t){return _.lastIndex=0,_.test(t)})(s)&&(s=function(t,e){var r=n.replace(/[^\/]*$/,"");return t.replace(_,function(t,e){return t.replace(e,r+e)})}(s));var i=t.createElement("style");i.setAttribute("data-styles",""),i.innerHTML=s,k(e,i),r.parentNode.insertBefore(i,r),r.remove()}var o}).catch(function(t){console.error(t)})}var I=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,_=/url[\s]*\([\s]*['"]?(?![http|\/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,H=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map}return t.prototype.initShim=function(){var t=this;return new Promise(function(e){t.win.requestAnimationFrame(function(){var r,n;(r=t.doc,n=t.globalScopes,function(t,e){for(var r=t.querySelectorAll("style:not([data-styles])"),n=0;n<r.length;n++)k(e,r[n])}(r,n),function(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]'),s=0;s<n.length;s++)r.push(T(t,e,n[s]));return Promise.all(r)}(r,n)).then(function(){return e()})})})},t.prototype.addLink=function(t){var e=this;return T(this.doc,this.globalScopes,t).then(function(){e.updateGlobal()})},t.prototype.addGlobalStyle=function(t){k(this.globalScopes,t),this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s,i,o,a,u=this.registerHostTemplate(r,e,n),l=this.doc.createElement("style");return u.usesCssVars?n?(l["s-sc"]=e=u.scopeId+"-"+this.count,l.innerHTML="/*needs update*/",this.hostStyleMap.set(t,l),this.hostScopeMap.set(t,(i=e,o=(s=u).template.map(function(t){return"string"==typeof t?R(t,s.scopeId,i):t}),a=s.selectors.map(function(t){return Object.assign({},t,{selector:R(t.selector,s.scopeId,i)})}),Object.assign({},s,{template:o,selectors:a,scopeId:i}))),this.count++):(u.styleEl=l,u.usesCssVars||(l.innerHTML=d(u.template,{})),this.globalScopes.push(u),this.updateGlobal(),this.hostScopeMap.set(t,u)):l.innerHTML=r,l},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=S(function(t,e,r){var n;return(n=L(r.concat(function(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}(e,t))).filter(function(e){return function(e,r){return":root"===r||"html"===r||t.matches(r)}(0,e.selector)})).sort(function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity}),n}(t,this.hostScopeMap,this.globalScopes));r.innerHTML=d(e.template,n)}}},t.prototype.updateGlobal=function(){var t,e;e=S(L(t=this.globalScopes)),t.forEach(function(t){t.usesCssVars&&(t.styleEl.innerHTML=d(t.template,e))})},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=x(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}(),A=window;A.__stencil_cssshim||A.CSS&&A.CSS.supports&&A.CSS.supports("color","var(--c)")||(A.__stencil_cssshim=new H(A,document))}}]);