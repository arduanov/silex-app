/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
!function(a){function b(a){return"undefined"==typeof a.which?!0:"number"==typeof a.which&&a.which>0?!a.ctrlKey&&!a.metaKey&&!a.altKey&&8!=a.which&&9!=a.which:!1}a.expr[":"].notmdproc=function(b){return a(b).data("mdproc")?!1:!0},a.material={options:{input:!0,ripples:!0,checkbox:!0,togglebutton:!0,radio:!0,arrive:!0,autofill:!1,withRipples:[".btn:not(.btn-link)",".card-image",".navbar a:not(.withoutripple)",".dropdown-menu a",".nav-tabs a:not(.withoutripple)",".withripple"].join(","),inputElements:"input.form-control, textarea.form-control, select.form-control",checkboxElements:".checkbox > label > input[type=checkbox]",togglebuttonElements:".togglebutton > label > input[type=checkbox]",radioElements:".radio > label > input[type=radio]"},checkbox:function(b){a(b?b:this.options.checkboxElements).filter(":notmdproc").data("mdproc",!0).after("<span class=checkbox-material><span class=check></span></span>")},togglebutton:function(b){a(b?b:this.options.togglebuttonElements).filter(":notmdproc").data("mdproc",!0).after("<span class=toggle></span>")},radio:function(b){a(b?b:this.options.radioElements).filter(":notmdproc").data("mdproc",!0).after("<span class=circle></span><span class=check></span>")},input:function(c){a(c?c:this.options.inputElements).filter(":notmdproc").data("mdproc",!0).each(function(){var b=a(this);if(a(this).attr("data-hint")||b.hasClass("floating-label")){if(b.wrap("<div class=form-control-wrapper></div>"),b.after("<span class=material-input></span>"),b.hasClass("floating-label")){var c=b.attr("placeholder");b.attr("placeholder",null).removeClass("floating-label"),b.after("<div class=floating-label>"+c+"</div>")}if(b.attr("data-hint")&&b.after("<div class=hint>"+b.attr("data-hint")+"</div>"),(null===b.val()||"undefined"==b.val()||""===b.val())&&b.addClass("empty"),b.parent().next().is("[type=file]")){b.parent().addClass("fileinput");var d=b.parent().next().detach();b.after(d)}}}),a(document).on("change",".checkbox input[type=checkbox]",function(){a(this).blur()}).on("keydown paste",".form-control",function(c){b(c)&&a(this).removeClass("empty")}).on("keyup change",".form-control",function(){var b=a(this);""===b.val()&&"undefined"!=typeof b[0].checkValidity&&b[0].checkValidity()?b.addClass("empty"):b.removeClass("empty")}).on("focus",".form-control-wrapper.fileinput",function(){a(this).find("input").addClass("focus")}).on("blur",".form-control-wrapper.fileinput",function(){a(this).find("input").removeClass("focus")}).on("change",".form-control-wrapper.fileinput [type=file]",function(){var b="";a.each(a(this)[0].files,function(a,c){b+=c.name+", "}),b=b.substring(0,b.length-2),b?a(this).prev().removeClass("empty"):a(this).prev().addClass("empty"),a(this).prev().val(b)})},ripples:function(b){a(b?b:this.options.withRipples).ripples()},autofill:function(){var b=setInterval(function(){a("input[type!=checkbox]").each(function(){a(this).val()&&a(this).val()!==a(this).attr("value")&&a(this).trigger("change")})},100);setTimeout(function(){clearInterval(b)},1e4);var c;a(document).on("focus","input",function(){var b=a(this).parents("form").find("input").not("[type=file]");c=setInterval(function(){b.each(function(){a(this).val()!==a(this).attr("value")&&a(this).trigger("change")})},100)}).on("blur","input",function(){clearInterval(c)})},init:function(){a.fn.ripples&&this.options.ripples&&this.ripples(),this.options.input&&this.input(),this.options.checkbox&&this.checkbox(),this.options.togglebutton&&this.togglebutton(),this.options.radio&&this.radio(),this.options.autofill&&this.autofill(),document.arrive&&this.options.arrive&&(a.fn.ripples&&this.options.ripples&&a(document).arrive(this.options.withRipples,function(){a.material.ripples(a(this))}),this.options.input&&a(document).arrive(this.options.inputElements,function(){a.material.input(a(this))}),this.options.checkbox&&a(document).arrive(this.options.checkboxElements,function(){a.material.checkbox(a(this))}),this.options.radio&&a(document).arrive(this.options.radioElements,function(){a.material.radio(a(this))}),this.options.togglebutton&&a(document).arrive(this.options.togglebuttonElements,function(){a.material.togglebutton(a(this))}))}}}(jQuery);
//# sourceMappingURL=material.min.js.map

!function(a,b,c,d){"use strict";function e(b,c){g=this,this.element=a(b),this.options=a.extend({},h,c),this._defaults=h,this._name=f,this.init()}var f="ripples",g=null,h={};e.prototype.init=function(){var c=this.element;c.on("mousedown touchstart",function(d){if(!g.isTouch()||"mousedown"!==d.type){c.find(".ripple-wrapper").length||c.append('<div class="ripple-wrapper"></div>');var e=c.children(".ripple-wrapper"),f=g.getRelY(e,d),h=g.getRelX(e,d);if(f||h){var i=g.getRipplesColor(c),j=a("<div></div>");j.addClass("ripple").css({left:h,top:f,"background-color":i}),e.append(j),function(){return b.getComputedStyle(j[0]).opacity}(),g.rippleOn(c,j),setTimeout(function(){g.rippleEnd(j)},500),c.on("mouseup mouseleave touchend",function(){j.data("mousedown","off"),"off"===j.data("animating")&&g.rippleOut(j)})}}})},e.prototype.getNewSize=function(a,b){return Math.max(a.outerWidth(),a.outerHeight())/b.outerWidth()*2.5},e.prototype.getRelX=function(a,b){var c=a.offset();return g.isTouch()?(b=b.originalEvent,1!==b.touches.length?b.touches[0].pageX-c.left:!1):b.pageX-c.left},e.prototype.getRelY=function(a,b){var c=a.offset();return g.isTouch()?(b=b.originalEvent,1!==b.touches.length?b.touches[0].pageY-c.top:!1):b.pageY-c.top},e.prototype.getRipplesColor=function(a){var c=a.data("ripple-color")?a.data("ripple-color"):b.getComputedStyle(a[0]).color;return c},e.prototype.hasTransitionSupport=function(){var a=c.body||c.documentElement,b=a.style,e=b.transition!==d||b.WebkitTransition!==d||b.MozTransition!==d||b.MsTransition!==d||b.OTransition!==d;return e},e.prototype.isTouch=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e.prototype.rippleEnd=function(a){a.data("animating","off"),"off"===a.data("mousedown")&&g.rippleOut(a)},e.prototype.rippleOut=function(a){a.off(),g.hasTransitionSupport()?a.addClass("ripple-out"):a.animate({opacity:0},100,function(){a.trigger("transitionend")}),a.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){a.remove()})},e.prototype.rippleOn=function(a,b){var c=g.getNewSize(a,b);g.hasTransitionSupport()?b.css({"-ms-transform":"scale("+c+")","-moz-transform":"scale("+c+")","-webkit-transform":"scale("+c+")",transform:"scale("+c+")"}).addClass("ripple-on").data("animating","on").data("mousedown","on"):b.animate({width:2*Math.max(a.outerWidth(),a.outerHeight()),height:2*Math.max(a.outerWidth(),a.outerHeight()),"margin-left":-1*Math.max(a.outerWidth(),a.outerHeight()),"margin-top":-1*Math.max(a.outerWidth(),a.outerHeight()),opacity:.2},500,function(){b.trigger("transitionend")})},a.fn.ripples=function(b){return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})}}(jQuery,window,document);
//# sourceMappingURL=ripples.min.js.map

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
	module.exports = mod();
  else if (typeof define == "function" && define.amd) // AMD
	return define([], mod);
  else // Plain browser env
	this.CodeMirror = mod();
})(function() {
  "use strict";

  // BROWSER SNIFFING

  // Kludges for bugs and behavior differences that can't be feature
  // detected are enabled based on userAgent etc sniffing.

  var gecko = /gecko\/\d/i.test(navigator.userAgent);
  var ie_upto10 = /MSIE \d/.test(navigator.userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  var ie = ie_upto10 || ie_11up;
  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
  var webkit = /WebKit\//.test(navigator.userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
  var chrome = /Chrome\//.test(navigator.userAgent);
  var presto = /Opera\//.test(navigator.userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
  var phantom = /PhantomJS/.test(navigator.userAgent);

  var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
  var mac = ios || /Mac/.test(navigator.platform);
  var windows = /win/i.test(navigator.platform);

  var presto_version = presto && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
  if (presto_version) presto_version = Number(presto_version[1]);
  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
  var captureRightClick = gecko || (ie && ie_version >= 9);

  // Optimize some code when these features are not used.
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  // EDITOR CONSTRUCTOR

  // A CodeMirror instance represents an editor. This is the object
  // that user code is usually dealing with.

  function CodeMirror(place, options) {
	if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

	this.options = options = options ? copyObj(options) : {};
	// Determine effective options based on given values and defaults.
	copyObj(defaults, options, false);
	setGuttersForLineNumbers(options);

	var doc = options.value;
	if (typeof doc == "string") doc = new Doc(doc, options.mode, null, options.lineSeparator);
	this.doc = doc;

	var input = new CodeMirror.inputStyles[options.inputStyle](this);
	var display = this.display = new Display(place, doc, input);
	display.wrapper.CodeMirror = this;
	updateGutters(this);
	themeChanged(this);
	if (options.lineWrapping)
	  this.display.wrapper.className += " CodeMirror-wrap";
	if (options.autofocus && !mobile) display.input.focus();
	initScrollbars(this);

	this.state = {
	  keyMaps: [],  // stores maps added by addKeyMap
	  overlays: [], // highlighting overlays, as added by addOverlay
	  modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	  overwrite: false,
	  delayingBlurEvent: false,
	  focused: false,
	  suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	  pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	  selectingText: false,
	  draggingText: false,
	  highlight: new Delayed(), // stores highlight worker timeout
	  keySeq: null,  // Unfinished key sequence
	  specialChars: null
	};

	var cm = this;

	// Override magic textarea content restore that IE sometimes does
	// on our hidden textarea on reload
	if (ie && ie_version < 11) setTimeout(function() { cm.display.input.reset(true); }, 20);

	registerEventHandlers(this);
	ensureGlobalHandlers();

	startOperation(this);
	this.curOp.forceUpdate = true;
	attachDoc(this, doc);

	if ((options.autofocus && !mobile) || cm.hasFocus())
	  setTimeout(bind(onFocus, this), 20);
	else
	  onBlur(this);

	for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	  optionHandlers[opt](this, options[opt], Init);
	maybeUpdateLineNumberWidth(this);
	if (options.finishInit) options.finishInit(this);
	for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	endOperation(this);
	// Suppress optimizelegibility in Webkit, since it breaks text
	// measuring on line wrapping boundaries.
	if (webkit && options.lineWrapping &&
		getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	  display.lineDiv.style.textRendering = "auto";
  }

  // DISPLAY CONSTRUCTOR

  // The display handles the DOM integration, both for input reading
  // and content drawing. It holds references to DOM nodes and
  // display-related state.

  function Display(place, doc, input) {
	var d = this;
	this.input = input;

	// Covers bottom-right square when both scrollbars are present.
	d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	d.scrollbarFiller.setAttribute("cm-not-content", "true");
	// Covers bottom of gutter when coverGutterNextToScrollbar is on
	// and h scrollbar is present.
	d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	d.gutterFiller.setAttribute("cm-not-content", "true");
	// Will contain the actual code, positioned to cover the viewport.
	d.lineDiv = elt("div", null, "CodeMirror-code");
	// Elements are added to these to represent selection and cursors.
	d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	// A visibility: hidden element used to find the size of things.
	d.measure = elt("div", null, "CodeMirror-measure");
	// When lines outside of the viewport are measured, they are drawn in this.
	d.lineMeasure = elt("div", null, "CodeMirror-measure");
	// Wraps everything that needs to exist inside the vertically-padded coordinate system
	d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
					  null, "position: relative; outline: none");
	// Moved around its parent to cover visible view.
	d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	// Set to the height of the document, allowing scrolling.
	d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	d.sizerWidth = null;
	// Behavior of elts with overflow: auto and padding is
	// inconsistent across browsers. This is used to ensure the
	// scrollable area is big enough.
	d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	// Will contain the gutters, if any.
	d.gutters = elt("div", null, "CodeMirror-gutters");
	d.lineGutter = null;
	// Actual scrollable element.
	d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	d.scroller.setAttribute("tabIndex", "-1");
	// The element in which the editor lives.
	d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

	// Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	if (!webkit && !(gecko && mobile)) d.scroller.draggable = true;

	if (place) {
	  if (place.appendChild) place.appendChild(d.wrapper);
	  else place(d.wrapper);
	}

	// Current rendered range (may be bigger than the view window).
	d.viewFrom = d.viewTo = doc.first;
	d.reportedViewFrom = d.reportedViewTo = doc.first;
	// Information about the rendered lines.
	d.view = [];
	d.renderedView = null;
	// Holds info about a single rendered line when it was rendered
	// for measurement, while not in view.
	d.externalMeasured = null;
	// Empty space (in pixels) above the view
	d.viewOffset = 0;
	d.lastWrapHeight = d.lastWrapWidth = 0;
	d.updateLineNumbers = null;

	d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	d.scrollbarsClipped = false;

	// Used to only resize the line number gutter when necessary (when
	// the amount of lines crosses a boundary that makes its width change)
	d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	// Set to true when a non-horizontal-scrolling line widget is
	// added. As an optimization, line widget aligning is skipped when
	// this is false.
	d.alignWidgets = false;

	d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

	// Tracks the maximum line length so that the horizontal scrollbar
	// can be kept static when scrolling.
	d.maxLine = null;
	d.maxLineLength = 0;
	d.maxLineChanged = false;

	// Used for measuring wheel scrolling granularity
	d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

	// True when shift is held down.
	d.shift = false;

	// Used to track whether anything happened since the context menu
	// was opened.
	d.selForContextMenu = null;

	d.activeTouch = null;

	input.init(d);
  }

  // STATE UPDATES

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
	cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	resetModeState(cm);
  }

  function resetModeState(cm) {
	cm.doc.iter(function(line) {
	  if (line.stateAfter) line.stateAfter = null;
	  if (line.styles) line.styles = null;
	});
	cm.doc.frontier = cm.doc.first;
	startWorker(cm, 100);
	cm.state.modeGen++;
	if (cm.curOp) regChange(cm);
  }

  function wrappingChanged(cm) {
	if (cm.options.lineWrapping) {
	  addClass(cm.display.wrapper, "CodeMirror-wrap");
	  cm.display.sizer.style.minWidth = "";
	  cm.display.sizerWidth = null;
	} else {
	  rmClass(cm.display.wrapper, "CodeMirror-wrap");
	  findMaxLine(cm);
	}
	estimateLineHeights(cm);
	regChange(cm);
	clearCaches(cm);
	setTimeout(function(){updateScrollbars(cm);}, 100);
  }

  // Returns a function that estimates the height of a line, to use as
  // first approximation until the line becomes visible (and is thus
  // properly measurable).
  function estimateHeight(cm) {
	var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	return function(line) {
	  if (lineIsHidden(cm.doc, line)) return 0;

	  var widgetsHeight = 0;
	  if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
		if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	  }

	  if (wrapping)
		return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	  else
		return widgetsHeight + th;
	};
  }

  function estimateLineHeights(cm) {
	var doc = cm.doc, est = estimateHeight(cm);
	doc.iter(function(line) {
	  var estHeight = est(line);
	  if (estHeight != line.height) updateLineHeight(line, estHeight);
	});
  }

  function themeChanged(cm) {
	cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	  cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	clearCaches(cm);
  }

  function guttersChanged(cm) {
	updateGutters(cm);
	regChange(cm);
	setTimeout(function(){alignHorizontally(cm);}, 20);
  }

  // Rebuild the gutter elements, ensure the margin to the left of the
  // code matches their width.
  function updateGutters(cm) {
	var gutters = cm.display.gutters, specs = cm.options.gutters;
	removeChildren(gutters);
	for (var i = 0; i < specs.length; ++i) {
	  var gutterClass = specs[i];
	  var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	  if (gutterClass == "CodeMirror-linenumbers") {
		cm.display.lineGutter = gElt;
		gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	  }
	}
	gutters.style.display = i ? "" : "none";
	updateGutterSpace(cm);
  }

  function updateGutterSpace(cm) {
	var width = cm.display.gutters.offsetWidth;
	cm.display.sizer.style.marginLeft = width + "px";
  }

  // Compute the character length of a line, taking into account
  // collapsed ranges (see markText) that might hide parts, and join
  // other lines onto it.
  function lineLength(line) {
	if (line.height == 0) return 0;
	var len = line.text.length, merged, cur = line;
	while (merged = collapsedSpanAtStart(cur)) {
	  var found = merged.find(0, true);
	  cur = found.from.line;
	  len += found.from.ch - found.to.ch;
	}
	cur = line;
	while (merged = collapsedSpanAtEnd(cur)) {
	  var found = merged.find(0, true);
	  len -= cur.text.length - found.from.ch;
	  cur = found.to.line;
	  len += cur.text.length - found.to.ch;
	}
	return len;
  }

  // Find the longest line in the document.
  function findMaxLine(cm) {
	var d = cm.display, doc = cm.doc;
	d.maxLine = getLine(doc, doc.first);
	d.maxLineLength = lineLength(d.maxLine);
	d.maxLineChanged = true;
	doc.iter(function(line) {
	  var len = lineLength(line);
	  if (len > d.maxLineLength) {
		d.maxLineLength = len;
		d.maxLine = line;
	  }
	});
  }

  // Make sure the gutters options contains the element
  // "CodeMirror-linenumbers" when the lineNumbers option is true.
  function setGuttersForLineNumbers(options) {
	var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	if (found == -1 && options.lineNumbers) {
	  options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	} else if (found > -1 && !options.lineNumbers) {
	  options.gutters = options.gutters.slice(0);
	  options.gutters.splice(found, 1);
	}
  }

  // SCROLLBARS

  // Prepare DOM reads needed to update the scrollbars. Done in one
  // shot to minimize update/measure roundtrips.
  function measureForScrollbars(cm) {
	var d = cm.display, gutterW = d.gutters.offsetWidth;
	var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	return {
	  clientHeight: d.scroller.clientHeight,
	  viewHeight: d.wrapper.clientHeight,
	  scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	  viewWidth: d.wrapper.clientWidth,
	  barLeft: cm.options.fixedGutter ? gutterW : 0,
	  docHeight: docH,
	  scrollHeight: docH + scrollGap(cm) + d.barHeight,
	  nativeBarWidth: d.nativeBarWidth,
	  gutterWidth: gutterW
	};
  }

  function NativeScrollbars(place, scroll, cm) {
	this.cm = cm;
	var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	place(vert); place(horiz);

	on(vert, "scroll", function() {
	  if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	});
	on(horiz, "scroll", function() {
	  if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	});

	this.checkedOverlay = false;
	// Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
  }

  NativeScrollbars.prototype = copyObj({
	update: function(measure) {
	  var needsH = measure.scrollWidth > measure.clientWidth + 1;
	  var needsV = measure.scrollHeight > measure.clientHeight + 1;
	  var sWidth = measure.nativeBarWidth;

	  if (needsV) {
		this.vert.style.display = "block";
		this.vert.style.bottom = needsH ? sWidth + "px" : "0";
		var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
		// A bug in IE8 can cause this value to be negative, so guard it.
		this.vert.firstChild.style.height =
		  Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	  } else {
		this.vert.style.display = "";
		this.vert.firstChild.style.height = "0";
	  }

	  if (needsH) {
		this.horiz.style.display = "block";
		this.horiz.style.right = needsV ? sWidth + "px" : "0";
		this.horiz.style.left = measure.barLeft + "px";
		var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
		this.horiz.firstChild.style.width =
		  (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	  } else {
		this.horiz.style.display = "";
		this.horiz.firstChild.style.width = "0";
	  }

	  if (!this.checkedOverlay && measure.clientHeight > 0) {
		if (sWidth == 0) this.overlayHack();
		this.checkedOverlay = true;
	  }

	  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	},
	setScrollLeft: function(pos) {
	  if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	},
	setScrollTop: function(pos) {
	  if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	},
	overlayHack: function() {
	  var w = mac && !mac_geMountainLion ? "12px" : "18px";
	  this.horiz.style.minHeight = this.vert.style.minWidth = w;
	  var self = this;
	  var barMouseDown = function(e) {
		if (e_target(e) != self.vert && e_target(e) != self.horiz)
		  operation(self.cm, onMouseDown)(e);
	  };
	  on(this.vert, "mousedown", barMouseDown);
	  on(this.horiz, "mousedown", barMouseDown);
	},
	clear: function() {
	  var parent = this.horiz.parentNode;
	  parent.removeChild(this.horiz);
	  parent.removeChild(this.vert);
	}
  }, NativeScrollbars.prototype);

  function NullScrollbars() {}

  NullScrollbars.prototype = copyObj({
	update: function() { return {bottom: 0, right: 0}; },
	setScrollLeft: function() {},
	setScrollTop: function() {},
	clear: function() {}
  }, NullScrollbars.prototype);

  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

  function initScrollbars(cm) {
	if (cm.display.scrollbars) {
	  cm.display.scrollbars.clear();
	  if (cm.display.scrollbars.addClass)
		rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	}

	cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	  cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	  // Prevent clicks in the scrollbars from killing focus
	  on(node, "mousedown", function() {
		if (cm.state.focused) setTimeout(function() { cm.display.input.focus(); }, 0);
	  });
	  node.setAttribute("cm-not-content", "true");
	}, function(pos, axis) {
	  if (axis == "horizontal") setScrollLeft(cm, pos);
	  else setScrollTop(cm, pos);
	}, cm);
	if (cm.display.scrollbars.addClass)
	  addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
  }

  function updateScrollbars(cm, measure) {
	if (!measure) measure = measureForScrollbars(cm);
	var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	updateScrollbarsInner(cm, measure);
	for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	  if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
		updateHeightsInViewport(cm);
	  updateScrollbarsInner(cm, measureForScrollbars(cm));
	  startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	}
  }

  // Re-synchronize the fake scrollbars with the actual size of the
  // content.
  function updateScrollbarsInner(cm, measure) {
	var d = cm.display;
	var sizes = d.scrollbars.update(measure);

	d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";

	if (sizes.right && sizes.bottom) {
	  d.scrollbarFiller.style.display = "block";
	  d.scrollbarFiller.style.height = sizes.bottom + "px";
	  d.scrollbarFiller.style.width = sizes.right + "px";
	} else d.scrollbarFiller.style.display = "";
	if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	  d.gutterFiller.style.display = "block";
	  d.gutterFiller.style.height = sizes.bottom + "px";
	  d.gutterFiller.style.width = measure.gutterWidth + "px";
	} else d.gutterFiller.style.display = "";
  }

  // Compute the lines that are visible in a given viewport (defaults
  // the the current scroll position). viewport may contain top,
  // height, and ensure (see op.scrollToPos) properties.
  function visibleLines(display, doc, viewport) {
	var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	top = Math.floor(top - paddingTop(display));
	var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

	var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	// Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	// forces those lines into the viewport (if possible).
	if (viewport && viewport.ensure) {
	  var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	  if (ensureFrom < from) {
		from = ensureFrom;
		to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	  } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
		from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
		to = ensureTo;
	  }
	}
	return {from: from, to: Math.max(to, from + 1)};
  }

  // LINE NUMBERS

  // Re-align line numbers and gutter marks to compensate for
  // horizontal scrolling.
  function alignHorizontally(cm) {
	var display = cm.display, view = display.view;
	if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	var gutterW = display.gutters.offsetWidth, left = comp + "px";
	for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	  if (cm.options.fixedGutter && view[i].gutter)
		view[i].gutter.style.left = left;
	  var align = view[i].alignable;
	  if (align) for (var j = 0; j < align.length; j++)
		align[j].style.left = left;
	}
	if (cm.options.fixedGutter)
	  display.gutters.style.left = (comp + gutterW) + "px";
  }

  // Used to ensure that the line number gutter is still the right
  // size for the current document size. Returns true when an update
  // is needed.
  function maybeUpdateLineNumberWidth(cm) {
	if (!cm.options.lineNumbers) return false;
	var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	if (last.length != display.lineNumChars) {
	  var test = display.measure.appendChild(elt("div", [elt("div", last)],
												 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	  var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	  display.lineGutter.style.width = "";
	  display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	  display.lineNumWidth = display.lineNumInnerWidth + padding;
	  display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	  display.lineGutter.style.width = display.lineNumWidth + "px";
	  updateGutterSpace(cm);
	  return true;
	}
	return false;
  }

  function lineNumberFor(options, i) {
	return String(options.lineNumberFormatter(i + options.firstLineNumber));
  }

  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
  // but using getBoundingClientRect to get a sub-pixel-accurate
  // result.
  function compensateForHScroll(display) {
	return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
  }

  // DISPLAY DRAWING

  function DisplayUpdate(cm, viewport, force) {
	var display = cm.display;

	this.viewport = viewport;
	// Store some values that we'll need later (but don't want to force a relayout for)
	this.visible = visibleLines(display, cm.doc, viewport);
	this.editorIsHidden = !display.wrapper.offsetWidth;
	this.wrapperHeight = display.wrapper.clientHeight;
	this.wrapperWidth = display.wrapper.clientWidth;
	this.oldDisplayWidth = displayWidth(cm);
	this.force = force;
	this.dims = getDimensions(cm);
	this.events = [];
  }

  DisplayUpdate.prototype.signal = function(emitter, type) {
	if (hasHandler(emitter, type))
	  this.events.push(arguments);
  };
  DisplayUpdate.prototype.finish = function() {
	for (var i = 0; i < this.events.length; i++)
	  signal.apply(null, this.events[i]);
  };

  function maybeClipScrollbars(cm) {
	var display = cm.display;
	if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	  display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	  display.heightForcer.style.height = scrollGap(cm) + "px";
	  display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	  display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	  display.scrollbarsClipped = true;
	}
  }

  // Does the actual updating of the line display. Bails out
  // (returning false) when there is nothing to be done and forced is
  // false.
  function updateDisplayIfNeeded(cm, update) {
	var display = cm.display, doc = cm.doc;

	if (update.editorIsHidden) {
	  resetView(cm);
	  return false;
	}

	// Bail out if the visible area is already rendered and nothing changed.
	if (!update.force &&
		update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
		(display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
		display.renderedView == display.view && countDirtyView(cm) == 0)
	  return false;

	if (maybeUpdateLineNumberWidth(cm)) {
	  resetView(cm);
	  update.dims = getDimensions(cm);
	}

	// Compute a suitable new viewport (from & to)
	var end = doc.first + doc.size;
	var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	if (sawCollapsedSpans) {
	  from = visualLineNo(cm.doc, from);
	  to = visualLineEndNo(cm.doc, to);
	}

	var different = from != display.viewFrom || to != display.viewTo ||
	  display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	adjustView(cm, from, to);

	display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	// Position the mover div to align with the current scroll position
	cm.display.mover.style.top = display.viewOffset + "px";

	var toUpdate = countDirtyView(cm);
	if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
		(display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	  return false;

	// For big changes, we hide the enclosing element during the
	// update, since that speeds up the operations on most browsers.
	var focused = activeElt();
	if (toUpdate > 4) display.lineDiv.style.display = "none";
	patchDisplay(cm, display.updateLineNumbers, update.dims);
	if (toUpdate > 4) display.lineDiv.style.display = "";
	display.renderedView = display.view;
	// There might have been a widget with a focused element that got
	// hidden or updated, if so re-focus it.
	if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

	// Prevent selection and cursors from interfering with the scroll
	// width and height.
	removeChildren(display.cursorDiv);
	removeChildren(display.selectionDiv);
	display.gutters.style.height = display.sizer.style.minHeight = 0;

	if (different) {
	  display.lastWrapHeight = update.wrapperHeight;
	  display.lastWrapWidth = update.wrapperWidth;
	  startWorker(cm, 400);
	}

	display.updateLineNumbers = null;

	return true;
  }

  function postUpdateDisplay(cm, update) {
	var viewport = update.viewport;
	for (var first = true;; first = false) {
	  if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
		// Clip forced viewport to actual scrollable area.
		if (viewport && viewport.top != null)
		  viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
		// Updated line heights might result in the drawn area not
		// actually covering the viewport. Keep looping until it does.
		update.visible = visibleLines(cm.display, cm.doc, viewport);
		if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
		  break;
	  }
	  if (!updateDisplayIfNeeded(cm, update)) break;
	  updateHeightsInViewport(cm);
	  var barMeasure = measureForScrollbars(cm);
	  updateSelection(cm);
	  setDocumentHeight(cm, barMeasure);
	  updateScrollbars(cm, barMeasure);
	}

	update.signal(cm, "update", cm);
	if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	  update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	  cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	}
  }

  function updateDisplaySimple(cm, viewport) {
	var update = new DisplayUpdate(cm, viewport);
	if (updateDisplayIfNeeded(cm, update)) {
	  updateHeightsInViewport(cm);
	  postUpdateDisplay(cm, update);
	  var barMeasure = measureForScrollbars(cm);
	  updateSelection(cm);
	  setDocumentHeight(cm, barMeasure);
	  updateScrollbars(cm, barMeasure);
	  update.finish();
	}
  }

  function setDocumentHeight(cm, measure) {
	cm.display.sizer.style.minHeight = measure.docHeight + "px";
	var total = measure.docHeight + cm.display.barHeight;
	cm.display.heightForcer.style.top = total + "px";
	cm.display.gutters.style.height = Math.max(total + scrollGap(cm), measure.clientHeight) + "px";
  }

  // Read the actual heights of the rendered lines, and update their
  // stored heights to match.
  function updateHeightsInViewport(cm) {
	var display = cm.display;
	var prevBottom = display.lineDiv.offsetTop;
	for (var i = 0; i < display.view.length; i++) {
	  var cur = display.view[i], height;
	  if (cur.hidden) continue;
	  if (ie && ie_version < 8) {
		var bot = cur.node.offsetTop + cur.node.offsetHeight;
		height = bot - prevBottom;
		prevBottom = bot;
	  } else {
		var box = cur.node.getBoundingClientRect();
		height = box.bottom - box.top;
	  }
	  var diff = cur.line.height - height;
	  if (height < 2) height = textHeight(display);
	  if (diff > .001 || diff < -.001) {
		updateLineHeight(cur.line, height);
		updateWidgetHeight(cur.line);
		if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
		  updateWidgetHeight(cur.rest[j]);
	  }
	}
  }

  // Read and store the height of line widgets associated with the
  // given line.
  function updateWidgetHeight(line) {
	if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	  line.widgets[i].height = line.widgets[i].node.offsetHeight;
  }

  // Do a bulk-read of the DOM positions and sizes needed to draw the
  // view, so that we don't interleave reading and writing to the DOM.
  function getDimensions(cm) {
	var d = cm.display, left = {}, width = {};
	var gutterLeft = d.gutters.clientLeft;
	for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	  left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	  width[cm.options.gutters[i]] = n.clientWidth;
	}
	return {fixedPos: compensateForHScroll(d),
			gutterTotalWidth: d.gutters.offsetWidth,
			gutterLeft: left,
			gutterWidth: width,
			wrapperWidth: d.wrapper.clientWidth};
  }

  // Sync the actual display DOM structure with display.view, removing
  // nodes for lines that are no longer in view, and creating the ones
  // that are not there yet, and updating the ones that are out of
  // date.
  function patchDisplay(cm, updateNumbersFrom, dims) {
	var display = cm.display, lineNumbers = cm.options.lineNumbers;
	var container = display.lineDiv, cur = container.firstChild;

	function rm(node) {
	  var next = node.nextSibling;
	  // Works around a throw-scroll bug in OS X Webkit
	  if (webkit && mac && cm.display.currentWheelTarget == node)
		node.style.display = "none";
	  else
		node.parentNode.removeChild(node);
	  return next;
	}

	var view = display.view, lineN = display.viewFrom;
	// Loop over the elements in the view, syncing cur (the DOM nodes
	// in display.lineDiv) with the view as we go.
	for (var i = 0; i < view.length; i++) {
	  var lineView = view[i];
	  if (lineView.hidden) {
	  } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
		var node = buildLineElement(cm, lineView, lineN, dims);
		container.insertBefore(node, cur);
	  } else { // Already drawn
		while (cur != lineView.node) cur = rm(cur);
		var updateNumber = lineNumbers && updateNumbersFrom != null &&
		  updateNumbersFrom <= lineN && lineView.lineNumber;
		if (lineView.changes) {
		  if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
		  updateLineForChanges(cm, lineView, lineN, dims);
		}
		if (updateNumber) {
		  removeChildren(lineView.lineNumber);
		  lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
		}
		cur = lineView.node.nextSibling;
	  }
	  lineN += lineView.size;
	}
	while (cur) cur = rm(cur);
  }

  // When an aspect of a line changes, a string is added to
  // lineView.changes. This updates the relevant part of the line's
  // DOM structure.
  function updateLineForChanges(cm, lineView, lineN, dims) {
	for (var j = 0; j < lineView.changes.length; j++) {
	  var type = lineView.changes[j];
	  if (type == "text") updateLineText(cm, lineView);
	  else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	  else if (type == "class") updateLineClasses(lineView);
	  else if (type == "widget") updateLineWidgets(cm, lineView, dims);
	}
	lineView.changes = null;
  }

  // Lines with gutter elements, widgets or a background class need to
  // be wrapped, and have the extra elements added to the wrapper div
  function ensureLineWrapped(lineView) {
	if (lineView.node == lineView.text) {
	  lineView.node = elt("div", null, null, "position: relative");
	  if (lineView.text.parentNode)
		lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	  lineView.node.appendChild(lineView.text);
	  if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	}
	return lineView.node;
  }

  function updateLineBackground(lineView) {
	var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	if (cls) cls += " CodeMirror-linebackground";
	if (lineView.background) {
	  if (cls) lineView.background.className = cls;
	  else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	} else if (cls) {
	  var wrap = ensureLineWrapped(lineView);
	  lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	}
  }

  // Wrapper around buildLineContent which will reuse the structure
  // in display.externalMeasured when possible.
  function getLineContent(cm, lineView) {
	var ext = cm.display.externalMeasured;
	if (ext && ext.line == lineView.line) {
	  cm.display.externalMeasured = null;
	  lineView.measure = ext.measure;
	  return ext.built;
	}
	return buildLineContent(cm, lineView);
  }

  // Redraw the line's text. Interacts with the background and text
  // classes because the mode may output tokens that influence these
  // classes.
  function updateLineText(cm, lineView) {
	var cls = lineView.text.className;
	var built = getLineContent(cm, lineView);
	if (lineView.text == lineView.node) lineView.node = built.pre;
	lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	lineView.text = built.pre;
	if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	  lineView.bgClass = built.bgClass;
	  lineView.textClass = built.textClass;
	  updateLineClasses(lineView);
	} else if (cls) {
	  lineView.text.className = cls;
	}
  }

  function updateLineClasses(lineView) {
	updateLineBackground(lineView);
	if (lineView.line.wrapClass)
	  ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	else if (lineView.node != lineView.text)
	  lineView.node.className = "";
	var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	lineView.text.className = textClass || "";
  }

  function updateLineGutter(cm, lineView, lineN, dims) {
	if (lineView.gutter) {
	  lineView.node.removeChild(lineView.gutter);
	  lineView.gutter = null;
	}
	if (lineView.gutterBackground) {
	  lineView.node.removeChild(lineView.gutterBackground);
	  lineView.gutterBackground = null;
	}
	if (lineView.line.gutterClass) {
	  var wrap = ensureLineWrapped(lineView);
	  lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
									  "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
									  "px; width: " + dims.gutterTotalWidth + "px");
	  wrap.insertBefore(lineView.gutterBackground, lineView.text);
	}
	var markers = lineView.line.gutterMarkers;
	if (cm.options.lineNumbers || markers) {
	  var wrap = ensureLineWrapped(lineView);
	  var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
											 (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
	  cm.display.input.setUneditable(gutterWrap);
	  wrap.insertBefore(gutterWrap, lineView.text);
	  if (lineView.line.gutterClass)
		gutterWrap.className += " " + lineView.line.gutterClass;
	  if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
		lineView.lineNumber = gutterWrap.appendChild(
		  elt("div", lineNumberFor(cm.options, lineN),
			  "CodeMirror-linenumber CodeMirror-gutter-elt",
			  "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
			  + cm.display.lineNumInnerWidth + "px"));
	  if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
		var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
		if (found)
		  gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
									 dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	  }
	}
  }

  function updateLineWidgets(cm, lineView, dims) {
	if (lineView.alignable) lineView.alignable = null;
	for (var node = lineView.node.firstChild, next; node; node = next) {
	  var next = node.nextSibling;
	  if (node.className == "CodeMirror-linewidget")
		lineView.node.removeChild(node);
	}
	insertLineWidgets(cm, lineView, dims);
  }

  // Build a line's DOM representation from scratch
  function buildLineElement(cm, lineView, lineN, dims) {
	var built = getLineContent(cm, lineView);
	lineView.text = lineView.node = built.pre;
	if (built.bgClass) lineView.bgClass = built.bgClass;
	if (built.textClass) lineView.textClass = built.textClass;

	updateLineClasses(lineView);
	updateLineGutter(cm, lineView, lineN, dims);
	insertLineWidgets(cm, lineView, dims);
	return lineView.node;
  }

  // A lineView may contain multiple logical lines (when merged by
  // collapsed spans). The widgets for all of them need to be drawn.
  function insertLineWidgets(cm, lineView, dims) {
	insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	  insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
  }

  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	if (!line.widgets) return;
	var wrap = ensureLineWrapped(lineView);
	for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	  var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	  if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	  positionLineWidget(widget, node, lineView, dims);
	  cm.display.input.setUneditable(node);
	  if (allowAbove && widget.above)
		wrap.insertBefore(node, lineView.gutter || lineView.text);
	  else
		wrap.appendChild(node);
	  signalLater(widget, "redraw");
	}
  }

  function positionLineWidget(widget, node, lineView, dims) {
	if (widget.noHScroll) {
	  (lineView.alignable || (lineView.alignable = [])).push(node);
	  var width = dims.wrapperWidth;
	  node.style.left = dims.fixedPos + "px";
	  if (!widget.coverGutter) {
		width -= dims.gutterTotalWidth;
		node.style.paddingLeft = dims.gutterTotalWidth + "px";
	  }
	  node.style.width = width + "px";
	}
	if (widget.coverGutter) {
	  node.style.zIndex = 5;
	  node.style.position = "relative";
	  if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	}
  }

  // POSITION OBJECT

  // A Pos instance represents a position within the text.
  var Pos = CodeMirror.Pos = function(line, ch) {
	if (!(this instanceof Pos)) return new Pos(line, ch);
	this.line = line; this.ch = ch;
  };

  // Compare two positions, return 0 if they are the same, a negative
  // number when a is less, and a positive number otherwise.
  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

  function copyPos(x) {return Pos(x.line, x.ch);}
  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

  // INPUT HANDLING

  function ensureFocus(cm) {
	if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
  }

  function isReadOnly(cm) {
	return cm.options.readOnly || cm.doc.cantEdit;
  }

  // This will be set to an array of strings when copying, so that,
  // when pasting, we know what kind of selections the copied text
  // was made out of.
  var lastCopied = null;

  function applyTextInput(cm, inserted, deleted, sel, origin) {
	var doc = cm.doc;
	cm.display.shift = false;
	if (!sel) sel = doc.sel;

	var paste = cm.state.pasteIncoming || origin == "paste";
	var textLines = doc.splitLines(inserted), multiPaste = null;
	// When pasing N lines into N selections, insert one line per selection
	if (paste && sel.ranges.length > 1) {
	  if (lastCopied && lastCopied.join("\n") == inserted) {
		if (sel.ranges.length % lastCopied.length == 0) {
		  multiPaste = [];
		  for (var i = 0; i < lastCopied.length; i++)
			multiPaste.push(doc.splitLines(lastCopied[i]));
		}
	  } else if (textLines.length == sel.ranges.length) {
		multiPaste = map(textLines, function(l) { return [l]; });
	  }
	}

	// Normal behavior is to insert the new text into every selection
	for (var i = sel.ranges.length - 1; i >= 0; i--) {
	  var range = sel.ranges[i];
	  var from = range.from(), to = range.to();
	  if (range.empty()) {
		if (deleted && deleted > 0) // Handle deletion
		  from = Pos(from.line, from.ch - deleted);
		else if (cm.state.overwrite && !paste) // Handle overwrite
		  to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	  }
	  var updateInput = cm.curOp.updateInput;
	  var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
						 origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	  makeChange(cm.doc, changeEvent);
	  signalLater(cm, "inputRead", cm, changeEvent);
	}
	if (inserted && !paste)
	  triggerElectric(cm, inserted);

	ensureCursorVisible(cm);
	cm.curOp.updateInput = updateInput;
	cm.curOp.typing = true;
	cm.state.pasteIncoming = cm.state.cutIncoming = false;
  }

  function handlePaste(e, cm) {
	var pasted = e.clipboardData && e.clipboardData.getData("text/plain");
	if (pasted) {
	  e.preventDefault();
	  if (!isReadOnly(cm) && !cm.options.disableInput)
		runInOp(cm, function() { applyTextInput(cm, pasted, 0, null, "paste"); });
	  return true;
	}
  }

  function triggerElectric(cm, inserted) {
	// When an 'electric' character is inserted, immediately trigger a reindent
	if (!cm.options.electricChars || !cm.options.smartIndent) return;
	var sel = cm.doc.sel;

	for (var i = sel.ranges.length - 1; i >= 0; i--) {
	  var range = sel.ranges[i];
	  if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue;
	  var mode = cm.getModeAt(range.head);
	  var indented = false;
	  if (mode.electricChars) {
		for (var j = 0; j < mode.electricChars.length; j++)
		  if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
			indented = indentLine(cm, range.head.line, "smart");
			break;
		  }
	  } else if (mode.electricInput) {
		if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
		  indented = indentLine(cm, range.head.line, "smart");
	  }
	  if (indented) signalLater(cm, "electricInput", cm, range.head.line);
	}
  }

  function copyableRanges(cm) {
	var text = [], ranges = [];
	for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	  var line = cm.doc.sel.ranges[i].head.line;
	  var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	  ranges.push(lineRange);
	  text.push(cm.getRange(lineRange.anchor, lineRange.head));
	}
	return {text: text, ranges: ranges};
  }

  function disableBrowserMagic(field) {
	field.setAttribute("autocorrect", "off");
	field.setAttribute("autocapitalize", "off");
	field.setAttribute("spellcheck", "false");
  }

  // TEXTAREA INPUT STYLE

  function TextareaInput(cm) {
	this.cm = cm;
	// See input.poll and input.reset
	this.prevInput = "";

	// Flag that indicates whether we expect input to appear real soon
	// now (after some event like 'keypress' or 'input') and are
	// polling intensively.
	this.pollingFast = false;
	// Self-resetting timeout for the poller
	this.polling = new Delayed();
	// Tracks when input.reset has punted to just putting a short
	// string into the textarea instead of the full selection.
	this.inaccurateSelection = false;
	// Used to work around IE issue with selection being forgotten when focus moves away from textarea
	this.hasSelection = false;
	this.composing = null;
  };

  function hiddenTextarea() {
	var te = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
	var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	// The textarea is kept positioned near the cursor to prevent the
	// fact that it'll be scrolled into view on input from scrolling
	// our fake cursor out of view. On webkit, when wrap=off, paste is
	// very slow. So make the area wide instead.
	if (webkit) te.style.width = "1000px";
	else te.setAttribute("wrap", "off");
	// If border: 0; -- iOS fails to open keyboard (issue #1287)
	if (ios) te.style.border = "1px solid black";
	disableBrowserMagic(te);
	return div;
  }

  TextareaInput.prototype = copyObj({
	init: function(display) {
	  var input = this, cm = this.cm;

	  // Wraps and hides input textarea
	  var div = this.wrapper = hiddenTextarea();
	  // The semihidden textarea that is focused when the editor is
	  // focused, and receives input.
	  var te = this.textarea = div.firstChild;
	  display.wrapper.insertBefore(div, display.wrapper.firstChild);

	  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	  if (ios) te.style.width = "0px";

	  on(te, "input", function() {
		if (ie && ie_version >= 9 && input.hasSelection) input.hasSelection = null;
		input.poll();
	  });

	  on(te, "paste", function(e) {
		if (handlePaste(e, cm)) return true;

		cm.state.pasteIncoming = true;
		input.fastPoll();
	  });

	  function prepareCopyCut(e) {
		if (cm.somethingSelected()) {
		  lastCopied = cm.getSelections();
		  if (input.inaccurateSelection) {
			input.prevInput = "";
			input.inaccurateSelection = false;
			te.value = lastCopied.join("\n");
			selectInput(te);
		  }
		} else if (!cm.options.lineWiseCopyCut) {
		  return;
		} else {
		  var ranges = copyableRanges(cm);
		  lastCopied = ranges.text;
		  if (e.type == "cut") {
			cm.setSelections(ranges.ranges, null, sel_dontScroll);
		  } else {
			input.prevInput = "";
			te.value = ranges.text.join("\n");
			selectInput(te);
		  }
		}
		if (e.type == "cut") cm.state.cutIncoming = true;
	  }
	  on(te, "cut", prepareCopyCut);
	  on(te, "copy", prepareCopyCut);

	  on(display.scroller, "paste", function(e) {
		if (eventInWidget(display, e)) return;
		cm.state.pasteIncoming = true;
		input.focus();
	  });

	  // Prevent normal selection in the editor (we handle our own)
	  on(display.lineSpace, "selectstart", function(e) {
		if (!eventInWidget(display, e)) e_preventDefault(e);
	  });

	  on(te, "compositionstart", function() {
		var start = cm.getCursor("from");
		input.composing = {
		  start: start,
		  range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
		};
	  });
	  on(te, "compositionend", function() {
		if (input.composing) {
		  input.poll();
		  input.composing.range.clear();
		  input.composing = null;
		}
	  });
	},

	prepareSelection: function() {
	  // Redraw the selection and/or cursor
	  var cm = this.cm, display = cm.display, doc = cm.doc;
	  var result = prepareSelection(cm);

	  // Move the hidden textarea near the cursor to prevent scrolling artifacts
	  if (cm.options.moveInputWithCursor) {
		var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
		var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
		result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
											headPos.top + lineOff.top - wrapOff.top));
		result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
											 headPos.left + lineOff.left - wrapOff.left));
	  }

	  return result;
	},

	showSelection: function(drawn) {
	  var cm = this.cm, display = cm.display;
	  removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	  removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	  if (drawn.teTop != null) {
		this.wrapper.style.top = drawn.teTop + "px";
		this.wrapper.style.left = drawn.teLeft + "px";
	  }
	},

	// Reset the input to correspond to the selection (or to be empty,
	// when not typing and nothing is selected)
	reset: function(typing) {
	  if (this.contextMenuPending) return;
	  var minimal, selected, cm = this.cm, doc = cm.doc;
	  if (cm.somethingSelected()) {
		this.prevInput = "";
		var range = doc.sel.primary();
		minimal = hasCopyEvent &&
		  (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
		var content = minimal ? "-" : selected || cm.getSelection();
		this.textarea.value = content;
		if (cm.state.focused) selectInput(this.textarea);
		if (ie && ie_version >= 9) this.hasSelection = content;
	  } else if (!typing) {
		this.prevInput = this.textarea.value = "";
		if (ie && ie_version >= 9) this.hasSelection = null;
	  }
	  this.inaccurateSelection = minimal;
	},

	getField: function() { return this.textarea; },

	supportsTouch: function() { return false; },

	focus: function() {
	  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
		try { this.textarea.focus(); }
		catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	  }
	},

	blur: function() { this.textarea.blur(); },

	resetPosition: function() {
	  this.wrapper.style.top = this.wrapper.style.left = 0;
	},

	receivedFocus: function() { this.slowPoll(); },

	// Poll for input changes, using the normal rate of polling. This
	// runs as long as the editor is focused.
	slowPoll: function() {
	  var input = this;
	  if (input.pollingFast) return;
	  input.polling.set(this.cm.options.pollInterval, function() {
		input.poll();
		if (input.cm.state.focused) input.slowPoll();
	  });
	},

	// When an event has just come in that is likely to add or change
	// something in the input textarea, we poll faster, to ensure that
	// the change appears on the screen quickly.
	fastPoll: function() {
	  var missed = false, input = this;
	  input.pollingFast = true;
	  function p() {
		var changed = input.poll();
		if (!changed && !missed) {missed = true; input.polling.set(60, p);}
		else {input.pollingFast = false; input.slowPoll();}
	  }
	  input.polling.set(20, p);
	},

	// Read input from the textarea, and update the document to match.
	// When something is selected, it is present in the textarea, and
	// selected (unless it is huge, in which case a placeholder is
	// used). When nothing is selected, the cursor sits after previously
	// seen text (can be empty), which is stored in prevInput (we must
	// not reset the textarea when typing, because that breaks IME).
	poll: function() {
	  var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	  // Since this is called a *lot*, try to bail out as cheaply as
	  // possible when it is clear that nothing happened. hasSelection
	  // will be the case when there is a lot of text in the textarea,
	  // in which case reading its value would be expensive.
	  if (this.contextMenuPending || !cm.state.focused ||
		  (hasSelection(input) && !prevInput && !this.composing) ||
		  isReadOnly(cm) || cm.options.disableInput || cm.state.keySeq)
		return false;

	  var text = input.value;
	  // If nothing changed, bail.
	  if (text == prevInput && !cm.somethingSelected()) return false;
	  // Work around nonsensical selection resetting in IE9/10, and
	  // inexplicable appearance of private area unicode characters on
	  // some key combos in Mac (#2689).
	  if (ie && ie_version >= 9 && this.hasSelection === text ||
		  mac && /[\uf700-\uf7ff]/.test(text)) {
		cm.display.input.reset();
		return false;
	  }

	  if (cm.doc.sel == cm.display.selForContextMenu) {
		var first = text.charCodeAt(0);
		if (first == 0x200b && !prevInput) prevInput = "\u200b";
		if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo"); }
	  }
	  // Find the part of the input that is actually new
	  var same = 0, l = Math.min(prevInput.length, text.length);
	  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;

	  var self = this;
	  runInOp(cm, function() {
		applyTextInput(cm, text.slice(same), prevInput.length - same,
					   null, self.composing ? "*compose" : null);

		// Don't leave long text in the textarea, since it makes further polling slow
		if (text.length > 1000 || text.indexOf("\n") > -1) input.value = self.prevInput = "";
		else self.prevInput = text;

		if (self.composing) {
		  self.composing.range.clear();
		  self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"),
											 {className: "CodeMirror-composing"});
		}
	  });
	  return true;
	},

	ensurePolled: function() {
	  if (this.pollingFast && this.poll()) this.pollingFast = false;
	},

	onKeyPress: function() {
	  if (ie && ie_version >= 9) this.hasSelection = null;
	  this.fastPoll();
	},

	onContextMenu: function(e) {
	  var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	  if (!pos || presto) return; // Opera is difficult.

	  // Reset the current text selection only if the click is done outside of the selection
	  // and 'resetSelectionOnContextMenu' option is true.
	  var reset = cm.options.resetSelectionOnContextMenu;
	  if (reset && cm.doc.sel.contains(pos) == -1)
		operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

	  var oldCSS = te.style.cssText;
	  input.wrapper.style.position = "absolute";
	  te.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
		"px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " +
		(ie ? "rgba(255, 255, 255, .05)" : "transparent") +
		"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	  if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	  display.input.focus();
	  if (webkit) window.scrollTo(null, oldScrollY);
	  display.input.reset();
	  // Adds "Select all" to context menu in FF
	  if (!cm.somethingSelected()) te.value = input.prevInput = " ";
	  input.contextMenuPending = true;
	  display.selForContextMenu = cm.doc.sel;
	  clearTimeout(display.detectingSelectAll);

	  // Select-all will be greyed out if there's nothing to select, so
	  // this adds a zero-width space so that we can later check whether
	  // it got selected.
	  function prepareSelectAllHack() {
		if (te.selectionStart != null) {
		  var selected = cm.somethingSelected();
		  var extval = "\u200b" + (selected ? te.value : "");
		  te.value = "\u21da"; // Used to catch context-menu undo
		  te.value = extval;
		  input.prevInput = selected ? "" : "\u200b";
		  te.selectionStart = 1; te.selectionEnd = extval.length;
		  // Re-set this, in case some other handler touched the
		  // selection in the meantime.
		  display.selForContextMenu = cm.doc.sel;
		}
	  }
	  function rehide() {
		input.contextMenuPending = false;
		input.wrapper.style.position = "relative";
		te.style.cssText = oldCSS;
		if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);

		// Try to detect the user choosing select-all
		if (te.selectionStart != null) {
		  if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
		  var i = 0, poll = function() {
			if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
				te.selectionEnd > 0 && input.prevInput == "\u200b")
			  operation(cm, commands.selectAll)(cm);
			else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
			else display.input.reset();
		  };
		  display.detectingSelectAll = setTimeout(poll, 200);
		}
	  }

	  if (ie && ie_version >= 9) prepareSelectAllHack();
	  if (captureRightClick) {
		e_stop(e);
		var mouseup = function() {
		  off(window, "mouseup", mouseup);
		  setTimeout(rehide, 20);
		};
		on(window, "mouseup", mouseup);
	  } else {
		setTimeout(rehide, 50);
	  }
	},

	setUneditable: nothing,

	needsContentAttribute: false
  }, TextareaInput.prototype);

  // CONTENTEDITABLE INPUT STYLE

  function ContentEditableInput(cm) {
	this.cm = cm;
	this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	this.polling = new Delayed();
	this.gracePeriod = false;
  }

  ContentEditableInput.prototype = copyObj({
	init: function(display) {
	  var input = this, cm = input.cm;
	  var div = input.div = display.lineDiv;
	  div.contentEditable = "true";
	  disableBrowserMagic(div);

	  on(div, "paste", function(e) { handlePaste(e, cm); })

	  on(div, "compositionstart", function(e) {
		var data = e.data;
		input.composing = {sel: cm.doc.sel, data: data, startData: data};
		if (!data) return;
		var prim = cm.doc.sel.primary();
		var line = cm.getLine(prim.head.line);
		var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
		if (found > -1 && found <= prim.head.ch)
		  input.composing.sel = simpleSelection(Pos(prim.head.line, found),
												Pos(prim.head.line, found + data.length));
	  });
	  on(div, "compositionupdate", function(e) {
		input.composing.data = e.data;
	  });
	  on(div, "compositionend", function(e) {
		var ours = input.composing;
		if (!ours) return;
		if (e.data != ours.startData && !/\u200b/.test(e.data))
		  ours.data = e.data;
		// Need a small delay to prevent other code (input event,
		// selection polling) from doing damage when fired right after
		// compositionend.
		setTimeout(function() {
		  if (!ours.handled)
			input.applyComposition(ours);
		  if (input.composing == ours)
			input.composing = null;
		}, 50);
	  });

	  on(div, "touchstart", function() {
		input.forceCompositionEnd();
	  });

	  on(div, "input", function() {
		if (input.composing) return;
		if (!input.pollContent())
		  runInOp(input.cm, function() {regChange(cm);});
	  });

	  function onCopyCut(e) {
		if (cm.somethingSelected()) {
		  lastCopied = cm.getSelections();
		  if (e.type == "cut") cm.replaceSelection("", null, "cut");
		} else if (!cm.options.lineWiseCopyCut) {
		  return;
		} else {
		  var ranges = copyableRanges(cm);
		  lastCopied = ranges.text;
		  if (e.type == "cut") {
			cm.operation(function() {
			  cm.setSelections(ranges.ranges, 0, sel_dontScroll);
			  cm.replaceSelection("", null, "cut");
			});
		  }
		}
		// iOS exposes the clipboard API, but seems to discard content inserted into it
		if (e.clipboardData && !ios) {
		  e.preventDefault();
		  e.clipboardData.clearData();
		  e.clipboardData.setData("text/plain", lastCopied.join("\n"));
		} else {
		  // Old-fashioned briefly-focus-a-textarea hack
		  var kludge = hiddenTextarea(), te = kludge.firstChild;
		  cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
		  te.value = lastCopied.join("\n");
		  var hadFocus = document.activeElement;
		  selectInput(te);
		  setTimeout(function() {
			cm.display.lineSpace.removeChild(kludge);
			hadFocus.focus();
		  }, 50);
		}
	  }
	  on(div, "copy", onCopyCut);
	  on(div, "cut", onCopyCut);
	},

	prepareSelection: function() {
	  var result = prepareSelection(this.cm, false);
	  result.focus = this.cm.state.focused;
	  return result;
	},

	showSelection: function(info) {
	  if (!info || !this.cm.display.view.length) return;
	  if (info.focus) this.showPrimarySelection();
	  this.showMultipleSelections(info);
	},

	showPrimarySelection: function() {
	  var sel = window.getSelection(), prim = this.cm.doc.sel.primary();
	  var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset);
	  var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
	  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
		  cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
		  cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
		return;

	  var start = posToDOM(this.cm, prim.from());
	  var end = posToDOM(this.cm, prim.to());
	  if (!start && !end) return;

	  var view = this.cm.display.view;
	  var old = sel.rangeCount && sel.getRangeAt(0);
	  if (!start) {
		start = {node: view[0].measure.map[2], offset: 0};
	  } else if (!end) { // FIXME dangerously hacky
		var measure = view[view.length - 1].measure;
		var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
		end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
	  }

	  try { var rng = range(start.node, start.offset, end.offset, end.node); }
	  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	  if (rng) {
		sel.removeAllRanges();
		sel.addRange(rng);
		if (old && sel.anchorNode == null) sel.addRange(old);
		else if (gecko) this.startGracePeriod();
	  }
	  this.rememberSelection();
	},

	startGracePeriod: function() {
	  var input = this;
	  clearTimeout(this.gracePeriod);
	  this.gracePeriod = setTimeout(function() {
		input.gracePeriod = false;
		if (input.selectionChanged())
		  input.cm.operation(function() { input.cm.curOp.selectionChanged = true; });
	  }, 20);
	},

	showMultipleSelections: function(info) {
	  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	},

	rememberSelection: function() {
	  var sel = window.getSelection();
	  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	},

	selectionInEditor: function() {
	  var sel = window.getSelection();
	  if (!sel.rangeCount) return false;
	  var node = sel.getRangeAt(0).commonAncestorContainer;
	  return contains(this.div, node);
	},

	focus: function() {
	  if (this.cm.options.readOnly != "nocursor") this.div.focus();
	},
	blur: function() { this.div.blur(); },
	getField: function() { return this.div; },

	supportsTouch: function() { return true; },

	receivedFocus: function() {
	  var input = this;
	  if (this.selectionInEditor())
		this.pollSelection();
	  else
		runInOp(this.cm, function() { input.cm.curOp.selectionChanged = true; });

	  function poll() {
		if (input.cm.state.focused) {
		  input.pollSelection();
		  input.polling.set(input.cm.options.pollInterval, poll);
		}
	  }
	  this.polling.set(this.cm.options.pollInterval, poll);
	},

	selectionChanged: function() {
	  var sel = window.getSelection();
	  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
		sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
	},

	pollSelection: function() {
	  if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
		var sel = window.getSelection(), cm = this.cm;
		this.rememberSelection();
		var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
		var head = domToPos(cm, sel.focusNode, sel.focusOffset);
		if (anchor && head) runInOp(cm, function() {
		  setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
		  if (anchor.bad || head.bad) cm.curOp.selectionChanged = true;
		});
	  }
	},

	pollContent: function() {
	  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	  var from = sel.from(), to = sel.to();
	  if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false;

	  var fromIndex;
	  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
		var fromLine = lineNo(display.view[0].line);
		var fromNode = display.view[0].node;
	  } else {
		var fromLine = lineNo(display.view[fromIndex].line);
		var fromNode = display.view[fromIndex - 1].node.nextSibling;
	  }
	  var toIndex = findViewIndex(cm, to.line);
	  if (toIndex == display.view.length - 1) {
		var toLine = display.viewTo - 1;
		var toNode = display.lineDiv.lastChild;
	  } else {
		var toLine = lineNo(display.view[toIndex + 1].line) - 1;
		var toNode = display.view[toIndex + 1].node.previousSibling;
	  }

	  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	  while (newText.length > 1 && oldText.length > 1) {
		if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
		else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
		else break;
	  }

	  var cutFront = 0, cutEnd = 0;
	  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
		++cutFront;
	  var newBot = lst(newText), oldBot = lst(oldText);
	  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
							   oldBot.length - (oldText.length == 1 ? cutFront : 0));
	  while (cutEnd < maxCutEnd &&
			 newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
		++cutEnd;

	  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd);
	  newText[0] = newText[0].slice(cutFront);

	  var chFrom = Pos(fromLine, cutFront);
	  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
		replaceRange(cm.doc, newText, chFrom, chTo, "+input");
		return true;
	  }
	},

	ensurePolled: function() {
	  this.forceCompositionEnd();
	},
	reset: function() {
	  this.forceCompositionEnd();
	},
	forceCompositionEnd: function() {
	  if (!this.composing || this.composing.handled) return;
	  this.applyComposition(this.composing);
	  this.composing.handled = true;
	  this.div.blur();
	  this.div.focus();
	},
	applyComposition: function(composing) {
	  if (composing.data && composing.data != composing.startData)
		operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
	},

	setUneditable: function(node) {
	  node.setAttribute("contenteditable", "false");
	},

	onKeyPress: function(e) {
	  e.preventDefault();
	  operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
	},

	onContextMenu: nothing,
	resetPosition: nothing,

	needsContentAttribute: true
  }, ContentEditableInput.prototype);

  function posToDOM(cm, pos) {
	var view = findViewForLine(cm, pos.line);
	if (!view || view.hidden) return null;
	var line = getLine(cm.doc, pos.line);
	var info = mapFromLineView(view, line, pos.line);

	var order = getOrder(line), side = "left";
	if (order) {
	  var partPos = getBidiPartAt(order, pos.ch);
	  side = partPos % 2 ? "right" : "left";
	}
	var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	result.offset = result.collapse == "right" ? result.end : result.start;
	return result;
  }

  function badPos(pos, bad) { if (bad) pos.bad = true; return pos; }

  function domToPos(cm, node, offset) {
	var lineNode;
	if (node == cm.display.lineDiv) {
	  lineNode = cm.display.lineDiv.childNodes[offset];
	  if (!lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
	  node = null; offset = 0;
	} else {
	  for (lineNode = node;; lineNode = lineNode.parentNode) {
		if (!lineNode || lineNode == cm.display.lineDiv) return null;
		if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
	  }
	}
	for (var i = 0; i < cm.display.view.length; i++) {
	  var lineView = cm.display.view[i];
	  if (lineView.node == lineNode)
		return locateNodeInLineView(lineView, node, offset);
	}
  }

  function locateNodeInLineView(lineView, node, offset) {
	var wrapper = lineView.text.firstChild, bad = false;
	if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), true);
	if (node == wrapper) {
	  bad = true;
	  node = wrapper.childNodes[offset];
	  offset = 0;
	  if (!node) {
		var line = lineView.rest ? lst(lineView.rest) : lineView.line;
		return badPos(Pos(lineNo(line), line.text.length), bad);
	  }
	}

	var textNode = node.nodeType == 3 ? node : null, topNode = node;
	if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	  textNode = node.firstChild;
	  if (offset) offset = textNode.nodeValue.length;
	}
	while (topNode.parentNode != wrapper) topNode = topNode.parentNode;
	var measure = lineView.measure, maps = measure.maps;

	function find(textNode, topNode, offset) {
	  for (var i = -1; i < (maps ? maps.length : 0); i++) {
		var map = i < 0 ? measure.map : maps[i];
		for (var j = 0; j < map.length; j += 3) {
		  var curNode = map[j + 2];
		  if (curNode == textNode || curNode == topNode) {
			var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
			var ch = map[j] + offset;
			if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)];
			return Pos(line, ch);
		  }
		}
	  }
	}
	var found = find(textNode, topNode, offset);
	if (found) return badPos(found, bad);

	// FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	  found = find(after, after.firstChild, 0);
	  if (found)
		return badPos(Pos(found.line, found.ch - dist), bad);
	  else
		dist += after.textContent.length;
	}
	for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
	  found = find(before, before.firstChild, -1);
	  if (found)
		return badPos(Pos(found.line, found.ch + dist), bad);
	  else
		dist += after.textContent.length;
	}
  }

  function domTextBetween(cm, from, to, fromLine, toLine) {
	var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	function recognizeMarker(id) { return function(marker) { return marker.id == id; }; }
	function walk(node) {
	  if (node.nodeType == 1) {
		var cmText = node.getAttribute("cm-text");
		if (cmText != null) {
		  if (cmText == "") cmText = node.textContent.replace(/\u200b/g, "");
		  text += cmText;
		  return;
		}
		var markerID = node.getAttribute("cm-marker"), range;
		if (markerID) {
		  var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
		  if (found.length && (range = found[0].find()))
			text += getBetween(cm.doc, range.from, range.to).join(lineSep);
		  return;
		}
		if (node.getAttribute("contenteditable") == "false") return;
		for (var i = 0; i < node.childNodes.length; i++)
		  walk(node.childNodes[i]);
		if (/^(pre|div|p)$/i.test(node.nodeName))
		  closing = true;
	  } else if (node.nodeType == 3) {
		var val = node.nodeValue;
		if (!val) return;
		if (closing) {
		  text += lineSep;
		  closing = false;
		}
		text += val;
	  }
	}
	for (;;) {
	  walk(from);
	  if (from == to) break;
	  from = from.nextSibling;
	}
	return text;
  }

  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

  // SELECTION / CURSOR

  // Selection objects are immutable. A new one is created every time
  // the selection changes. A selection is one or more non-overlapping
  // (and non-touching) ranges, sorted, and an integer that indicates
  // which one is the primary selection (the one that's scrolled into
  // view, that getCursor returns, etc).
  function Selection(ranges, primIndex) {
	this.ranges = ranges;
	this.primIndex = primIndex;
  }

  Selection.prototype = {
	primary: function() { return this.ranges[this.primIndex]; },
	equals: function(other) {
	  if (other == this) return true;
	  if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	  for (var i = 0; i < this.ranges.length; i++) {
		var here = this.ranges[i], there = other.ranges[i];
		if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	  }
	  return true;
	},
	deepCopy: function() {
	  for (var out = [], i = 0; i < this.ranges.length; i++)
		out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	  return new Selection(out, this.primIndex);
	},
	somethingSelected: function() {
	  for (var i = 0; i < this.ranges.length; i++)
		if (!this.ranges[i].empty()) return true;
	  return false;
	},
	contains: function(pos, end) {
	  if (!end) end = pos;
	  for (var i = 0; i < this.ranges.length; i++) {
		var range = this.ranges[i];
		if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
		  return i;
	  }
	  return -1;
	}
  };

  function Range(anchor, head) {
	this.anchor = anchor; this.head = head;
  }

  Range.prototype = {
	from: function() { return minPos(this.anchor, this.head); },
	to: function() { return maxPos(this.anchor, this.head); },
	empty: function() {
	  return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	}
  };

  // Take an unsorted, potentially overlapping set of ranges, and
  // build a selection out of it. 'Consumes' ranges array (modifying
  // it).
  function normalizeSelection(ranges, primIndex) {
	var prim = ranges[primIndex];
	ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	primIndex = indexOf(ranges, prim);
	for (var i = 1; i < ranges.length; i++) {
	  var cur = ranges[i], prev = ranges[i - 1];
	  if (cmp(prev.to(), cur.from()) >= 0) {
		var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
		var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
		if (i <= primIndex) --primIndex;
		ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	  }
	}
	return new Selection(ranges, primIndex);
  }

  function simpleSelection(anchor, head) {
	return new Selection([new Range(anchor, head || anchor)], 0);
  }

  // Most of the external API clips given positions to make sure they
  // actually exist within the document.
  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
  function clipPos(doc, pos) {
	if (pos.line < doc.first) return Pos(doc.first, 0);
	var last = doc.first + doc.size - 1;
	if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	return clipToLen(pos, getLine(doc, pos.line).text.length);
  }
  function clipToLen(pos, linelen) {
	var ch = pos.ch;
	if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	else if (ch < 0) return Pos(pos.line, 0);
	else return pos;
  }
  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
  function clipPosArray(doc, array) {
	for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	return out;
  }

  // SELECTION UPDATES

  // The 'scroll' parameter given to many of these indicated whether
  // the new cursor position should be scrolled into view after
  // modifying the selection.

  // If shift is held or the extend flag is set, extends a range to
  // include a given position (and optionally a second position).
  // Otherwise, simply returns the range between the given positions.
  // Used for cursor motion and such.
  function extendRange(doc, range, head, other) {
	if (doc.cm && doc.cm.display.shift || doc.extend) {
	  var anchor = range.anchor;
	  if (other) {
		var posBefore = cmp(head, anchor) < 0;
		if (posBefore != (cmp(other, anchor) < 0)) {
		  anchor = head;
		  head = other;
		} else if (posBefore != (cmp(head, other) < 0)) {
		  head = other;
		}
	  }
	  return new Range(anchor, head);
	} else {
	  return new Range(other || head, head);
	}
  }

  // Extend the primary selection range, discard the rest.
  function extendSelection(doc, head, other, options) {
	setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
  }

  // Extend all selections (pos is an array of selections with length
  // equal the number of selections)
  function extendSelections(doc, heads, options) {
	for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	  out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	var newSel = normalizeSelection(out, doc.sel.primIndex);
	setSelection(doc, newSel, options);
  }

  // Updates a single range in the selection.
  function replaceOneSelection(doc, i, range, options) {
	var ranges = doc.sel.ranges.slice(0);
	ranges[i] = range;
	setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
  }

  // Reset the selection to a single range.
  function setSimpleSelection(doc, anchor, head, options) {
	setSelection(doc, simpleSelection(anchor, head), options);
  }

  // Give beforeSelectionChange handlers a change to influence a
  // selection update.
  function filterSelectionChange(doc, sel) {
	var obj = {
	  ranges: sel.ranges,
	  update: function(ranges) {
		this.ranges = [];
		for (var i = 0; i < ranges.length; i++)
		  this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
									 clipPos(doc, ranges[i].head));
	  }
	};
	signal(doc, "beforeSelectionChange", doc, obj);
	if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	else return sel;
  }

  function setSelectionReplaceHistory(doc, sel, options) {
	var done = doc.history.done, last = lst(done);
	if (last && last.ranges) {
	  done[done.length - 1] = sel;
	  setSelectionNoUndo(doc, sel, options);
	} else {
	  setSelection(doc, sel, options);
	}
  }

  // Set a new selection.
  function setSelection(doc, sel, options) {
	setSelectionNoUndo(doc, sel, options);
	addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
  }

  function setSelectionNoUndo(doc, sel, options) {
	if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	  sel = filterSelectionChange(doc, sel);

	var bias = options && options.bias ||
	  (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

	if (!(options && options.scroll === false) && doc.cm)
	  ensureCursorVisible(doc.cm);
  }

  function setSelectionInner(doc, sel) {
	if (sel.equals(doc.sel)) return;

	doc.sel = sel;

	if (doc.cm) {
	  doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	  signalCursorActivity(doc.cm);
	}
	signalLater(doc, "cursorActivity", doc);
  }

  // Verify that the selection does not partially select any atomic
  // marked ranges.
  function reCheckSelection(doc) {
	setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
  }

  // Return a selection that does not partially select any atomic
  // ranges.
  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	var out;
	for (var i = 0; i < sel.ranges.length; i++) {
	  var range = sel.ranges[i];
	  var newAnchor = skipAtomic(doc, range.anchor, bias, mayClear);
	  var newHead = skipAtomic(doc, range.head, bias, mayClear);
	  if (out || newAnchor != range.anchor || newHead != range.head) {
		if (!out) out = sel.ranges.slice(0, i);
		out[i] = new Range(newAnchor, newHead);
	  }
	}
	return out ? normalizeSelection(out, sel.primIndex) : sel;
  }

  // Ensure a given position is not inside an atomic range.
  function skipAtomic(doc, pos, bias, mayClear) {
	var flipped = false, curPos = pos;
	var dir = bias || 1;
	doc.cantEdit = false;
	search: for (;;) {
	  var line = getLine(doc, curPos.line);
	  if (line.markedSpans) {
		for (var i = 0; i < line.markedSpans.length; ++i) {
		  var sp = line.markedSpans[i], m = sp.marker;
		  if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) &&
			  (sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
			if (mayClear) {
			  signal(m, "beforeCursorEnter");
			  if (m.explicitlyCleared) {
				if (!line.markedSpans) break;
				else {--i; continue;}
			  }
			}
			if (!m.atomic) continue;
			var newPos = m.find(dir < 0 ? -1 : 1);
			if (cmp(newPos, curPos) == 0) {
			  newPos.ch += dir;
			  if (newPos.ch < 0) {
				if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1));
				else newPos = null;
			  } else if (newPos.ch > line.text.length) {
				if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0);
				else newPos = null;
			  }
			  if (!newPos) {
				if (flipped) {
				  // Driven in a corner -- no valid cursor position found at all
				  // -- try again *with* clearing, if we didn't already
				  if (!mayClear) return skipAtomic(doc, pos, bias, true);
				  // Otherwise, turn off editing until further notice, and return the start of the doc
				  doc.cantEdit = true;
				  return Pos(doc.first, 0);
				}
				flipped = true; newPos = pos; dir = -dir;
			  }
			}
			curPos = newPos;
			continue search;
		  }
		}
	  }
	  return curPos;
	}
  }

  // SELECTION DRAWING

  function updateSelection(cm) {
	cm.display.input.showSelection(cm.display.input.prepareSelection());
  }

  function prepareSelection(cm, primary) {
	var doc = cm.doc, result = {};
	var curFragment = result.cursors = document.createDocumentFragment();
	var selFragment = result.selection = document.createDocumentFragment();

	for (var i = 0; i < doc.sel.ranges.length; i++) {
	  if (primary === false && i == doc.sel.primIndex) continue;
	  var range = doc.sel.ranges[i];
	  var collapsed = range.empty();
	  if (collapsed || cm.options.showCursorWhenSelecting)
		drawSelectionCursor(cm, range.head, curFragment);
	  if (!collapsed)
		drawSelectionRange(cm, range, selFragment);
	}
	return result;
  }

  // Draws a cursor for the given range
  function drawSelectionCursor(cm, head, output) {
	var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

	var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	cursor.style.left = pos.left + "px";
	cursor.style.top = pos.top + "px";
	cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

	if (pos.other) {
	  // Secondary cursor, shown when on a 'jump' in bi-directional text
	  var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	  otherCursor.style.display = "";
	  otherCursor.style.left = pos.other.left + "px";
	  otherCursor.style.top = pos.other.top + "px";
	  otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	}
  }

  // Draws the given range as a highlighted selection
  function drawSelectionRange(cm, range, output) {
	var display = cm.display, doc = cm.doc;
	var fragment = document.createDocumentFragment();
	var padding = paddingH(cm.display), leftSide = padding.left;
	var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

	function add(left, top, width, bottom) {
	  if (top < 0) top = 0;
	  top = Math.round(top);
	  bottom = Math.round(bottom);
	  fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
							   "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
							   "px; height: " + (bottom - top) + "px"));
	}

	function drawForLine(line, fromArg, toArg) {
	  var lineObj = getLine(doc, line);
	  var lineLen = lineObj.text.length;
	  var start, end;
	  function coords(ch, bias) {
		return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	  }

	  iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
		var leftPos = coords(from, "left"), rightPos, left, right;
		if (from == to) {
		  rightPos = leftPos;
		  left = right = leftPos.left;
		} else {
		  rightPos = coords(to - 1, "right");
		  if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
		  left = leftPos.left;
		  right = rightPos.right;
		}
		if (fromArg == null && from == 0) left = leftSide;
		if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
		  add(left, leftPos.top, null, leftPos.bottom);
		  left = leftSide;
		  if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
		}
		if (toArg == null && to == lineLen) right = rightSide;
		if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
		  start = leftPos;
		if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
		  end = rightPos;
		if (left < leftSide + 1) left = leftSide;
		add(left, rightPos.top, right - left, rightPos.bottom);
	  });
	  return {start: start, end: end};
	}

	var sFrom = range.from(), sTo = range.to();
	if (sFrom.line == sTo.line) {
	  drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	} else {
	  var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	  var singleVLine = visualLine(fromLine) == visualLine(toLine);
	  var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	  var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	  if (singleVLine) {
		if (leftEnd.top < rightStart.top - 2) {
		  add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
		  add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
		} else {
		  add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
		}
	  }
	  if (leftEnd.bottom < rightStart.top)
		add(leftSide, leftEnd.bottom, null, rightStart.top);
	}

	output.appendChild(fragment);
  }

  // Cursor-blinking
  function restartBlink(cm) {
	if (!cm.state.focused) return;
	var display = cm.display;
	clearInterval(display.blinker);
	var on = true;
	display.cursorDiv.style.visibility = "";
	if (cm.options.cursorBlinkRate > 0)
	  display.blinker = setInterval(function() {
		display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	  }, cm.options.cursorBlinkRate);
	else if (cm.options.cursorBlinkRate < 0)
	  display.cursorDiv.style.visibility = "hidden";
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
	if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	  cm.state.highlight.set(time, bind(highlightWorker, cm));
  }

  function highlightWorker(cm) {
	var doc = cm.doc;
	if (doc.frontier < doc.first) doc.frontier = doc.first;
	if (doc.frontier >= cm.display.viewTo) return;
	var end = +new Date + cm.options.workTime;
	var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	var changedLines = [];

	doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	  if (doc.frontier >= cm.display.viewFrom) { // Visible
		var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength;
		var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true);
		line.styles = highlighted.styles;
		var oldCls = line.styleClasses, newCls = highlighted.classes;
		if (newCls) line.styleClasses = newCls;
		else if (oldCls) line.styleClasses = null;
		var ischange = !oldStyles || oldStyles.length != line.styles.length ||
		  oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
		for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
		if (ischange) changedLines.push(doc.frontier);
		line.stateAfter = tooLong ? state : copyState(doc.mode, state);
	  } else {
		if (line.text.length <= cm.options.maxHighlightLength)
		  processLine(cm, line.text, state);
		line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	  }
	  ++doc.frontier;
	  if (+new Date > end) {
		startWorker(cm, cm.options.workDelay);
		return true;
	  }
	});
	if (changedLines.length) runInOp(cm, function() {
	  for (var i = 0; i < changedLines.length; i++)
		regLineChange(cm, changedLines[i], "text");
	});
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
	var minindent, minline, doc = cm.doc;
	var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	for (var search = n; search > lim; --search) {
	  if (search <= doc.first) return doc.first;
	  var line = getLine(doc, search - 1);
	  if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	  var indented = countColumn(line.text, null, cm.options.tabSize);
	  if (minline == null || minindent > indented) {
		minline = search - 1;
		minindent = indented;
	  }
	}
	return minline;
  }

  function getStateBefore(cm, n, precise) {
	var doc = cm.doc, display = cm.display;
	if (!doc.mode.startState) return true;
	var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	if (!state) state = startState(doc.mode);
	else state = copyState(doc.mode, state);
	doc.iter(pos, n, function(line) {
	  processLine(cm, line.text, state);
	  var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	  line.stateAfter = save ? copyState(doc.mode, state) : null;
	  ++pos;
	});
	if (precise) doc.frontier = pos;
	return state;
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop;}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
  function paddingH(display) {
	if (display.cachedPaddingH) return display.cachedPaddingH;
	var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	return data;
  }

  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
  function displayWidth(cm) {
	return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
  }
  function displayHeight(cm) {
	return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
  }

  // Ensure the lineView.wrapping.heights array is populated. This is
  // an array of bottom offsets for the lines that make up a drawn
  // line. When lineWrapping is on, there might be more than one
  // height.
  function ensureLineHeights(cm, lineView, rect) {
	var wrapping = cm.options.lineWrapping;
	var curWidth = wrapping && displayWidth(cm);
	if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	  var heights = lineView.measure.heights = [];
	  if (wrapping) {
		lineView.measure.width = curWidth;
		var rects = lineView.text.firstChild.getClientRects();
		for (var i = 0; i < rects.length - 1; i++) {
		  var cur = rects[i], next = rects[i + 1];
		  if (Math.abs(cur.bottom - next.bottom) > 2)
			heights.push((cur.bottom + next.top) / 2 - rect.top);
		}
	  }
	  heights.push(rect.bottom - rect.top);
	}
  }

  // Find a line map (mapping character offsets to text nodes) and a
  // measurement cache for the given line number. (A line view might
  // contain multiple lines when collapsed ranges are present.)
  function mapFromLineView(lineView, line, lineN) {
	if (lineView.line == line)
	  return {map: lineView.measure.map, cache: lineView.measure.cache};
	for (var i = 0; i < lineView.rest.length; i++)
	  if (lineView.rest[i] == line)
		return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	for (var i = 0; i < lineView.rest.length; i++)
	  if (lineNo(lineView.rest[i]) > lineN)
		return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
  }

  // Render a line into the hidden node display.externalMeasured. Used
  // when measurement is needed for a line that's not in the viewport.
  function updateExternalMeasurement(cm, line) {
	line = visualLine(line);
	var lineN = lineNo(line);
	var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	view.lineN = lineN;
	var built = view.built = buildLineContent(cm, view);
	view.text = built.pre;
	removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	return view;
  }

  // Get a {top, bottom, left, right} box (in line-local coordinates)
  // for a given character.
  function measureChar(cm, line, ch, bias) {
	return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
  }

  // Find a line view that corresponds to the given line number.
  function findViewForLine(cm, lineN) {
	if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	  return cm.display.view[findViewIndex(cm, lineN)];
	var ext = cm.display.externalMeasured;
	if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	  return ext;
  }

  // Measurement can be split in two steps, the set-up work that
  // applies to the whole line, and the measurement of the actual
  // character. Functions like coordsChar, that need to do a lot of
  // measurements in a row, can thus ensure that the set-up work is
  // only done once.
  function prepareMeasureForLine(cm, line) {
	var lineN = lineNo(line);
	var view = findViewForLine(cm, lineN);
	if (view && !view.text) {
	  view = null;
	} else if (view && view.changes) {
	  updateLineForChanges(cm, view, lineN, getDimensions(cm));
	  cm.curOp.forceUpdate = true;
	}
	if (!view)
	  view = updateExternalMeasurement(cm, line);

	var info = mapFromLineView(view, line, lineN);
	return {
	  line: line, view: view, rect: null,
	  map: info.map, cache: info.cache, before: info.before,
	  hasHeights: false
	};
  }

  // Given a prepared measurement object, measures the position of an
  // actual character (or fetches it from the cache).
  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	if (prepared.before) ch = -1;
	var key = ch + (bias || ""), found;
	if (prepared.cache.hasOwnProperty(key)) {
	  found = prepared.cache[key];
	} else {
	  if (!prepared.rect)
		prepared.rect = prepared.view.text.getBoundingClientRect();
	  if (!prepared.hasHeights) {
		ensureLineHeights(cm, prepared.view, prepared.rect);
		prepared.hasHeights = true;
	  }
	  found = measureCharInner(cm, prepared, ch, bias);
	  if (!found.bogus) prepared.cache[key] = found;
	}
	return {left: found.left, right: found.right,
			top: varHeight ? found.rtop : found.top,
			bottom: varHeight ? found.rbottom : found.bottom};
  }

  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

  function nodeAndOffsetInLineMap(map, ch, bias) {
	var node, start, end, collapse;
	// First, search the line map for the text node corresponding to,
	// or closest to, the target character.
	for (var i = 0; i < map.length; i += 3) {
	  var mStart = map[i], mEnd = map[i + 1];
	  if (ch < mStart) {
		start = 0; end = 1;
		collapse = "left";
	  } else if (ch < mEnd) {
		start = ch - mStart;
		end = start + 1;
	  } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
		end = mEnd - mStart;
		start = end - 1;
		if (ch >= mEnd) collapse = "right";
	  }
	  if (start != null) {
		node = map[i + 2];
		if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
		  collapse = bias;
		if (bias == "left" && start == 0)
		  while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
			node = map[(i -= 3) + 2];
			collapse = "left";
		  }
		if (bias == "right" && start == mEnd - mStart)
		  while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
			node = map[(i += 3) + 2];
			collapse = "right";
		  }
		break;
	  }
	}
	return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd};
  }

  function measureCharInner(cm, prepared, ch, bias) {
	var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

	var rect;
	if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	  for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
		while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) --start;
		while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) ++end;
		if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
		  rect = node.parentNode.getBoundingClientRect();
		} else if (ie && cm.options.lineWrapping) {
		  var rects = range(node, start, end).getClientRects();
		  if (rects.length)
			rect = rects[bias == "right" ? rects.length - 1 : 0];
		  else
			rect = nullRect;
		} else {
		  rect = range(node, start, end).getBoundingClientRect() || nullRect;
		}
		if (rect.left || rect.right || start == 0) break;
		end = start;
		start = start - 1;
		collapse = "right";
	  }
	  if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	} else { // If it is a widget, simply get the box for the whole widget.
	  if (start > 0) collapse = bias = "right";
	  var rects;
	  if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
		rect = rects[bias == "right" ? rects.length - 1 : 0];
	  else
		rect = node.getBoundingClientRect();
	}
	if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	  var rSpan = node.parentNode.getClientRects()[0];
	  if (rSpan)
		rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	  else
		rect = nullRect;
	}

	var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	var mid = (rtop + rbot) / 2;
	var heights = prepared.view.measure.heights;
	for (var i = 0; i < heights.length - 1; i++)
	  if (mid < heights[i]) break;
	var top = i ? heights[i - 1] : 0, bot = heights[i];
	var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
				  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
				  top: top, bottom: bot};
	if (!rect.left && !rect.right) result.bogus = true;
	if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

	return result;
  }

  // Work around problem with bounding client rects on ranges being
  // returned incorrectly when zoomed on IE10 and below.
  function maybeUpdateRectForZooming(measure, rect) {
	if (!window.screen || screen.logicalXDPI == null ||
		screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	  return rect;
	var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	return {left: rect.left * scaleX, right: rect.right * scaleX,
			top: rect.top * scaleY, bottom: rect.bottom * scaleY};
  }

  function clearLineMeasurementCacheFor(lineView) {
	if (lineView.measure) {
	  lineView.measure.cache = {};
	  lineView.measure.heights = null;
	  if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
		lineView.measure.caches[i] = {};
	}
  }

  function clearLineMeasurementCache(cm) {
	cm.display.externalMeasure = null;
	removeChildren(cm.display.lineMeasure);
	for (var i = 0; i < cm.display.view.length; i++)
	  clearLineMeasurementCacheFor(cm.display.view[i]);
  }

  function clearCaches(cm) {
	clearLineMeasurementCache(cm);
	cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	cm.display.lineNumChars = null;
  }

  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

  // Converts a {top, bottom, left, right} box from line-local
  // coordinates into another coordinate system. Context may be one of
  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
  // or "page".
  function intoCoordSystem(cm, lineObj, rect, context) {
	if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	  var size = widgetHeight(lineObj.widgets[i]);
	  rect.top += size; rect.bottom += size;
	}
	if (context == "line") return rect;
	if (!context) context = "local";
	var yOff = heightAtLine(lineObj);
	if (context == "local") yOff += paddingTop(cm.display);
	else yOff -= cm.display.viewOffset;
	if (context == "page" || context == "window") {
	  var lOff = cm.display.lineSpace.getBoundingClientRect();
	  yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	  var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	  rect.left += xOff; rect.right += xOff;
	}
	rect.top += yOff; rect.bottom += yOff;
	return rect;
  }

  // Coverts a box from "div" coords to another coordinate system.
  // Context may be "window", "page", "div", or "local"/null.
  function fromCoordSystem(cm, coords, context) {
	if (context == "div") return coords;
	var left = coords.left, top = coords.top;
	// First move into "page" coordinate system
	if (context == "page") {
	  left -= pageScrollX();
	  top -= pageScrollY();
	} else if (context == "local" || !context) {
	  var localBox = cm.display.sizer.getBoundingClientRect();
	  left += localBox.left;
	  top += localBox.top;
	}

	var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
  }

  function charCoords(cm, pos, context, lineObj, bias) {
	if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
  }

  // Returns a box for a given cursor position, which may have an
  // 'other' property containing the position of the secondary cursor
  // on a bidi boundary.
  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	lineObj = lineObj || getLine(cm.doc, pos.line);
	if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	function get(ch, right) {
	  var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	  if (right) m.left = m.right; else m.right = m.left;
	  return intoCoordSystem(cm, lineObj, m, context);
	}
	function getBidi(ch, partPos) {
	  var part = order[partPos], right = part.level % 2;
	  if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
		part = order[--partPos];
		ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
		right = true;
	  } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
		part = order[++partPos];
		ch = bidiLeft(part) - part.level % 2;
		right = false;
	  }
	  if (right && ch == part.to && ch > part.from) return get(ch - 1);
	  return get(ch, right);
	}
	var order = getOrder(lineObj), ch = pos.ch;
	if (!order) return get(ch);
	var partPos = getBidiPartAt(order, ch);
	var val = getBidi(ch, partPos);
	if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	return val;
  }

  // Used to cheaply estimate the coordinates for a position. Used for
  // intermediate scroll updates.
  function estimateCoords(cm, pos) {
	var left = 0, pos = clipPos(cm.doc, pos);
	if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	var lineObj = getLine(cm.doc, pos.line);
	var top = heightAtLine(lineObj) + paddingTop(cm.display);
	return {left: left, right: left, top: top, bottom: top + lineObj.height};
  }

  // Positions returned by coordsChar contain some extra information.
  // xRel is the relative x position of the input coordinates compared
  // to the found position (so xRel > 0 means the coordinates are to
  // the right of the character position, for example). When outside
  // is true, that means the coordinates lie outside the line's
  // vertical range.
  function PosWithInfo(line, ch, outside, xRel) {
	var pos = Pos(line, ch);
	pos.xRel = xRel;
	if (outside) pos.outside = true;
	return pos;
  }

  // Compute the character position closest to the given coordinates.
  // Input must be lineSpace-local ("div" coordinate system).
  function coordsChar(cm, x, y) {
	var doc = cm.doc;
	y += cm.display.viewOffset;
	if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	if (lineN > last)
	  return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	if (x < 0) x = 0;

	var lineObj = getLine(doc, lineN);
	for (;;) {
	  var found = coordsCharInner(cm, lineObj, lineN, x, y);
	  var merged = collapsedSpanAtEnd(lineObj);
	  var mergedPos = merged && merged.find(0, true);
	  if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
		lineN = lineNo(lineObj = mergedPos.to.line);
	  else
		return found;
	}
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	var innerOff = y - heightAtLine(lineObj);
	var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	var preparedMeasure = prepareMeasureForLine(cm, lineObj);

	function getX(ch) {
	  var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	  wrongLine = true;
	  if (innerOff > sp.bottom) return sp.left - adjust;
	  else if (innerOff < sp.top) return sp.left + adjust;
	  else wrongLine = false;
	  return sp.left;
	}

	var bidi = getOrder(lineObj), dist = lineObj.text.length;
	var from = lineLeft(lineObj), to = lineRight(lineObj);
	var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

	if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	// Do a binary search between these bounds.
	for (;;) {
	  if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
		var ch = x < fromX || x - fromX <= toX - x ? from : to;
		var xDiff = x - (ch == from ? fromX : toX);
		while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
		var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
							  xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
		return pos;
	  }
	  var step = Math.ceil(dist / 2), middle = from + step;
	  if (bidi) {
		middle = from;
		for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	  }
	  var middleX = getX(middle);
	  if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	  else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	}
  }

  var measureText;
  // Compute the default text height.
  function textHeight(display) {
	if (display.cachedTextHeight != null) return display.cachedTextHeight;
	if (measureText == null) {
	  measureText = elt("pre");
	  // Measure a bunch of lines, for browsers that compute
	  // fractional heights.
	  for (var i = 0; i < 49; ++i) {
		measureText.appendChild(document.createTextNode("x"));
		measureText.appendChild(elt("br"));
	  }
	  measureText.appendChild(document.createTextNode("x"));
	}
	removeChildrenAndAdd(display.measure, measureText);
	var height = measureText.offsetHeight / 50;
	if (height > 3) display.cachedTextHeight = height;
	removeChildren(display.measure);
	return height || 1;
  }

  // Compute the default character width.
  function charWidth(display) {
	if (display.cachedCharWidth != null) return display.cachedCharWidth;
	var anchor = elt("span", "xxxxxxxxxx");
	var pre = elt("pre", [anchor]);
	removeChildrenAndAdd(display.measure, pre);
	var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	if (width > 2) display.cachedCharWidth = width;
	return width || 10;
  }

  // OPERATIONS

  // Operations are used to wrap a series of changes to the editor
  // state in such a way that each change won't have to update the
  // cursor and display (which would be awkward, slow, and
  // error-prone). Instead, display updates are batched and then all
  // combined and executed at once.

  var operationGroup = null;

  var nextOpId = 0;
  // Start a new operation.
  function startOperation(cm) {
	cm.curOp = {
	  cm: cm,
	  viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	  startHeight: cm.doc.height, // Used to detect need to update scrollbar
	  forceUpdate: false,      // Used to force a redraw
	  updateInput: null,       // Whether to reset the input textarea
	  typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	  changeObjs: null,        // Accumulated changes, for firing change events
	  cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	  cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	  selectionChanged: false, // Whether the selection needs to be redrawn
	  updateMaxLine: false,    // Set when the widest line needs to be determined anew
	  scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	  scrollToPos: null,       // Used to scroll to a specific position
	  focus: false,
	  id: ++nextOpId           // Unique ID
	};
	if (operationGroup) {
	  operationGroup.ops.push(cm.curOp);
	} else {
	  cm.curOp.ownsGroup = operationGroup = {
		ops: [cm.curOp],
		delayedCallbacks: []
	  };
	}
  }

  function fireCallbacksForOps(group) {
	// Calls delayed callbacks and cursorActivity handlers until no
	// new ones appear
	var callbacks = group.delayedCallbacks, i = 0;
	do {
	  for (; i < callbacks.length; i++)
		callbacks[i].call(null);
	  for (var j = 0; j < group.ops.length; j++) {
		var op = group.ops[j];
		if (op.cursorActivityHandlers)
		  while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
			op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
	  }
	} while (i < callbacks.length);
  }

  // Finish an operation, updating the display and signalling delayed events
  function endOperation(cm) {
	var op = cm.curOp, group = op.ownsGroup;
	if (!group) return;

	try { fireCallbacksForOps(group); }
	finally {
	  operationGroup = null;
	  for (var i = 0; i < group.ops.length; i++)
		group.ops[i].cm.curOp = null;
	  endOperations(group);
	}
  }

  // The DOM updates done when an operation finishes are batched so
  // that the minimum number of relayouts are required.
  function endOperations(group) {
	var ops = group.ops;
	for (var i = 0; i < ops.length; i++) // Read DOM
	  endOperation_R1(ops[i]);
	for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	  endOperation_W1(ops[i]);
	for (var i = 0; i < ops.length; i++) // Read DOM
	  endOperation_R2(ops[i]);
	for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	  endOperation_W2(ops[i]);
	for (var i = 0; i < ops.length; i++) // Read DOM
	  endOperation_finish(ops[i]);
  }

  function endOperation_R1(op) {
	var cm = op.cm, display = cm.display;
	maybeClipScrollbars(cm);
	if (op.updateMaxLine) findMaxLine(cm);

	op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	  op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
						 op.scrollToPos.to.line >= display.viewTo) ||
	  display.maxLineChanged && cm.options.lineWrapping;
	op.update = op.mustUpdate &&
	  new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
  }

  function endOperation_W1(op) {
	op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
  }

  function endOperation_R2(op) {
	var cm = op.cm, display = cm.display;
	if (op.updatedDisplay) updateHeightsInViewport(cm);

	op.barMeasure = measureForScrollbars(cm);

	// If the max line changed since it was last measured, measure it,
	// and ensure the document's width matches it.
	// updateDisplay_W2 will use these properties to do the actual resizing
	if (display.maxLineChanged && !cm.options.lineWrapping) {
	  op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	  cm.display.sizerWidth = op.adjustWidthTo;
	  op.barMeasure.scrollWidth =
		Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	  op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	}

	if (op.updatedDisplay || op.selectionChanged)
	  op.preparedSelection = display.input.prepareSelection();
  }

  function endOperation_W2(op) {
	var cm = op.cm;

	if (op.adjustWidthTo != null) {
	  cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	  if (op.maxScrollLeft < cm.doc.scrollLeft)
		setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	  cm.display.maxLineChanged = false;
	}

	if (op.preparedSelection)
	  cm.display.input.showSelection(op.preparedSelection);
	if (op.updatedDisplay)
	  setDocumentHeight(cm, op.barMeasure);
	if (op.updatedDisplay || op.startHeight != cm.doc.height)
	  updateScrollbars(cm, op.barMeasure);

	if (op.selectionChanged) restartBlink(cm);

	if (cm.state.focused && op.updateInput)
	  cm.display.input.reset(op.typing);
	if (op.focus && op.focus == activeElt()) ensureFocus(op.cm);
  }

  function endOperation_finish(op) {
	var cm = op.cm, display = cm.display, doc = cm.doc;

	if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

	// Abort mouse wheel delta measurement, when scrolling explicitly
	if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	  display.wheelStartX = display.wheelStartY = null;

	// Propagate the scroll position to the actual DOM scroller
	if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	  doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	  display.scrollbars.setScrollTop(doc.scrollTop);
	  display.scroller.scrollTop = doc.scrollTop;
	}
	if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	  doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - displayWidth(cm), op.scrollLeft));
	  display.scrollbars.setScrollLeft(doc.scrollLeft);
	  display.scroller.scrollLeft = doc.scrollLeft;
	  alignHorizontally(cm);
	}
	// If we need to scroll a specific position into view, do so.
	if (op.scrollToPos) {
	  var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
									 clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	  if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	}

	// Fire events for markers that are hidden/unidden by editing or
	// undoing
	var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	if (hidden) for (var i = 0; i < hidden.length; ++i)
	  if (!hidden[i].lines.length) signal(hidden[i], "hide");
	if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	  if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

	if (display.wrapper.offsetHeight)
	  doc.scrollTop = cm.display.scroller.scrollTop;

	// Fire change events, and delayed event handlers
	if (op.changeObjs)
	  signal(cm, "changes", cm, op.changeObjs);
	if (op.update)
	  op.update.finish();
  }

  // Run the given function in an operation
  function runInOp(cm, f) {
	if (cm.curOp) return f();
	startOperation(cm);
	try { return f(); }
	finally { endOperation(cm); }
  }
  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm, f) {
	return function() {
	  if (cm.curOp) return f.apply(cm, arguments);
	  startOperation(cm);
	  try { return f.apply(cm, arguments); }
	  finally { endOperation(cm); }
	};
  }
  // Used to add methods to editor and doc instances, wrapping them in
  // operations.
  function methodOp(f) {
	return function() {
	  if (this.curOp) return f.apply(this, arguments);
	  startOperation(this);
	  try { return f.apply(this, arguments); }
	  finally { endOperation(this); }
	};
  }
  function docMethodOp(f) {
	return function() {
	  var cm = this.cm;
	  if (!cm || cm.curOp) return f.apply(this, arguments);
	  startOperation(cm);
	  try { return f.apply(this, arguments); }
	  finally { endOperation(cm); }
	};
  }

  // VIEW TRACKING

  // These objects are used to represent the visible (currently drawn)
  // part of the document. A LineView may correspond to multiple
  // logical lines, if those are connected by collapsed ranges.
  function LineView(doc, line, lineN) {
	// The starting line
	this.line = line;
	// Continuing lines, if any
	this.rest = visualLineContinued(line);
	// Number of logical lines in this visual line
	this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	this.node = this.text = null;
	this.hidden = lineIsHidden(doc, line);
  }

  // Create a range of LineView objects for the given lines.
  function buildViewArray(cm, from, to) {
	var array = [], nextPos;
	for (var pos = from; pos < to; pos = nextPos) {
	  var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	  nextPos = pos + view.size;
	  array.push(view);
	}
	return array;
  }

  // Updates the display.view data structure for a given change to the
  // document. From and to are in pre-change coordinates. Lendiff is
  // the amount of lines added or subtracted by the change. This is
  // used for changes that span multiple lines, or change the way
  // lines are divided into visual lines. regLineChange (below)
  // registers single-line changes.
  function regChange(cm, from, to, lendiff) {
	if (from == null) from = cm.doc.first;
	if (to == null) to = cm.doc.first + cm.doc.size;
	if (!lendiff) lendiff = 0;

	var display = cm.display;
	if (lendiff && to < display.viewTo &&
		(display.updateLineNumbers == null || display.updateLineNumbers > from))
	  display.updateLineNumbers = from;

	cm.curOp.viewChanged = true;

	if (from >= display.viewTo) { // Change after
	  if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
		resetView(cm);
	} else if (to <= display.viewFrom) { // Change before
	  if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
		resetView(cm);
	  } else {
		display.viewFrom += lendiff;
		display.viewTo += lendiff;
	  }
	} else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	  resetView(cm);
	} else if (from <= display.viewFrom) { // Top overlap
	  var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	  if (cut) {
		display.view = display.view.slice(cut.index);
		display.viewFrom = cut.lineN;
		display.viewTo += lendiff;
	  } else {
		resetView(cm);
	  }
	} else if (to >= display.viewTo) { // Bottom overlap
	  var cut = viewCuttingPoint(cm, from, from, -1);
	  if (cut) {
		display.view = display.view.slice(0, cut.index);
		display.viewTo = cut.lineN;
	  } else {
		resetView(cm);
	  }
	} else { // Gap in the middle
	  var cutTop = viewCuttingPoint(cm, from, from, -1);
	  var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	  if (cutTop && cutBot) {
		display.view = display.view.slice(0, cutTop.index)
		  .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
		  .concat(display.view.slice(cutBot.index));
		display.viewTo += lendiff;
	  } else {
		resetView(cm);
	  }
	}

	var ext = display.externalMeasured;
	if (ext) {
	  if (to < ext.lineN)
		ext.lineN += lendiff;
	  else if (from < ext.lineN + ext.size)
		display.externalMeasured = null;
	}
  }

  // Register a change to a single line. Type must be one of "text",
  // "gutter", "class", "widget"
  function regLineChange(cm, line, type) {
	cm.curOp.viewChanged = true;
	var display = cm.display, ext = cm.display.externalMeasured;
	if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	  display.externalMeasured = null;

	if (line < display.viewFrom || line >= display.viewTo) return;
	var lineView = display.view[findViewIndex(cm, line)];
	if (lineView.node == null) return;
	var arr = lineView.changes || (lineView.changes = []);
	if (indexOf(arr, type) == -1) arr.push(type);
  }

  // Clear the view.
  function resetView(cm) {
	cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	cm.display.view = [];
	cm.display.viewOffset = 0;
  }

  // Find the view element corresponding to a given line. Return null
  // when the line isn't visible.
  function findViewIndex(cm, n) {
	if (n >= cm.display.viewTo) return null;
	n -= cm.display.viewFrom;
	if (n < 0) return null;
	var view = cm.display.view;
	for (var i = 0; i < view.length; i++) {
	  n -= view[i].size;
	  if (n < 0) return i;
	}
  }

  function viewCuttingPoint(cm, oldN, newN, dir) {
	var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	  return {index: index, lineN: newN};
	for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	  n += view[i].size;
	if (n != oldN) {
	  if (dir > 0) {
		if (index == view.length - 1) return null;
		diff = (n + view[index].size) - oldN;
		index++;
	  } else {
		diff = n - oldN;
	  }
	  oldN += diff; newN += diff;
	}
	while (visualLineNo(cm.doc, newN) != newN) {
	  if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	  newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	  index += dir;
	}
	return {index: index, lineN: newN};
  }

  // Force the view to cover a given range, adding empty view element
  // or clipping off existing ones as needed.
  function adjustView(cm, from, to) {
	var display = cm.display, view = display.view;
	if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	  display.view = buildViewArray(cm, from, to);
	  display.viewFrom = from;
	} else {
	  if (display.viewFrom > from)
		display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	  else if (display.viewFrom < from)
		display.view = display.view.slice(findViewIndex(cm, from));
	  display.viewFrom = from;
	  if (display.viewTo < to)
		display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	  else if (display.viewTo > to)
		display.view = display.view.slice(0, findViewIndex(cm, to));
	}
	display.viewTo = to;
  }

  // Count the number of lines in the view whose DOM representation is
  // out of date (or nonexistent).
  function countDirtyView(cm) {
	var view = cm.display.view, dirty = 0;
	for (var i = 0; i < view.length; i++) {
	  var lineView = view[i];
	  if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	}
	return dirty;
  }

  // EVENT HANDLERS

  // Attach the necessary event handlers when initializing the editor
  function registerEventHandlers(cm) {
	var d = cm.display;
	on(d.scroller, "mousedown", operation(cm, onMouseDown));
	// Older IE's will not fire a second mousedown for a double click
	if (ie && ie_version < 11)
	  on(d.scroller, "dblclick", operation(cm, function(e) {
		if (signalDOMEvent(cm, e)) return;
		var pos = posFromMouse(cm, e);
		if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
		e_preventDefault(e);
		var word = cm.findWordAt(pos);
		extendSelection(cm.doc, word.anchor, word.head);
	  }));
	else
	  on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	// Some browsers fire contextmenu *after* opening the menu, at
	// which point we can't mess with it anymore. Context menu is
	// handled in onMouseDown for these browsers.
	if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

	// Used to suppress mouse event handling when a touch happens
	var touchFinished, prevTouch = {end: 0};
	function finishTouch() {
	  if (d.activeTouch) {
		touchFinished = setTimeout(function() {d.activeTouch = null;}, 1000);
		prevTouch = d.activeTouch;
		prevTouch.end = +new Date;
	  }
	};
	function isMouseLikeTouchEvent(e) {
	  if (e.touches.length != 1) return false;
	  var touch = e.touches[0];
	  return touch.radiusX <= 1 && touch.radiusY <= 1;
	}
	function farAway(touch, other) {
	  if (other.left == null) return true;
	  var dx = other.left - touch.left, dy = other.top - touch.top;
	  return dx * dx + dy * dy > 20 * 20;
	}
	on(d.scroller, "touchstart", function(e) {
	  if (!isMouseLikeTouchEvent(e)) {
		clearTimeout(touchFinished);
		var now = +new Date;
		d.activeTouch = {start: now, moved: false,
						 prev: now - prevTouch.end <= 300 ? prevTouch : null};
		if (e.touches.length == 1) {
		  d.activeTouch.left = e.touches[0].pageX;
		  d.activeTouch.top = e.touches[0].pageY;
		}
	  }
	});
	on(d.scroller, "touchmove", function() {
	  if (d.activeTouch) d.activeTouch.moved = true;
	});
	on(d.scroller, "touchend", function(e) {
	  var touch = d.activeTouch;
	  if (touch && !eventInWidget(d, e) && touch.left != null &&
		  !touch.moved && new Date - touch.start < 300) {
		var pos = cm.coordsChar(d.activeTouch, "page"), range;
		if (!touch.prev || farAway(touch, touch.prev)) // Single tap
		  range = new Range(pos, pos);
		else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
		  range = cm.findWordAt(pos);
		else // Triple tap
		  range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
		cm.setSelection(range.anchor, range.head);
		cm.focus();
		e_preventDefault(e);
	  }
	  finishTouch();
	});
	on(d.scroller, "touchcancel", finishTouch);

	// Sync scrolling between fake scrollbars and real scrollable
	// area, ensure viewport is updated when scrolling.
	on(d.scroller, "scroll", function() {
	  if (d.scroller.clientHeight) {
		setScrollTop(cm, d.scroller.scrollTop);
		setScrollLeft(cm, d.scroller.scrollLeft, true);
		signal(cm, "scroll", cm);
	  }
	});

	// Listen to wheel events in order to try and update the viewport on time.
	on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

	// Prevent wrapper from ever scrolling
	on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

	d.dragFunctions = {
	  enter: function(e) {if (!signalDOMEvent(cm, e)) e_stop(e);},
	  over: function(e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	  start: function(e){onDragStart(cm, e);},
	  drop: operation(cm, onDrop),
	  leave: function() {clearDragCursor(cm);}
	};

	var inp = d.input.getField();
	on(inp, "keyup", function(e) { onKeyUp.call(cm, e); });
	on(inp, "keydown", operation(cm, onKeyDown));
	on(inp, "keypress", operation(cm, onKeyPress));
	on(inp, "focus", bind(onFocus, cm));
	on(inp, "blur", bind(onBlur, cm));
  }

  function dragDropChanged(cm, value, old) {
	var wasOn = old && old != CodeMirror.Init;
	if (!value != !wasOn) {
	  var funcs = cm.display.dragFunctions;
	  var toggle = value ? on : off;
	  toggle(cm.display.scroller, "dragstart", funcs.start);
	  toggle(cm.display.scroller, "dragenter", funcs.enter);
	  toggle(cm.display.scroller, "dragover", funcs.over);
	  toggle(cm.display.scroller, "dragleave", funcs.leave);
	  toggle(cm.display.scroller, "drop", funcs.drop);
	}
  }

  // Called when the window resizes
  function onResize(cm) {
	var d = cm.display;
	if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	  return;
	// Might be a text scaling operation, clear size caches.
	d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	d.scrollbarsClipped = false;
	cm.setSize();
  }

  // MOUSE EVENTS

  // Return true when the given mouse event happened in a widget
  function eventInWidget(display, e) {
	for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	  if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
		  (n.parentNode == display.sizer && n != display.mover))
		return true;
	}
  }

  // Given a mouse event, find the corresponding position. If liberal
  // is false, it checks whether a gutter or scrollbar was clicked,
  // and returns null if it was. forRect is used by rectangular
  // selections, and tries to estimate a character position even for
  // coordinates beyond the right of the text.
  function posFromMouse(cm, e, liberal, forRect) {
	var display = cm.display;
	if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") return null;

	var x, y, space = display.lineSpace.getBoundingClientRect();
	// Fails unpredictably on IE[67] when mouse is dragged around quickly.
	try { x = e.clientX - space.left; y = e.clientY - space.top; }
	catch (e) { return null; }
	var coords = coordsChar(cm, x, y), line;
	if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	  var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	  coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	}
	return coords;
  }

  // A mouse down can be a single click, double click, triple click,
  // start of selection drag, start of text drag, new cursor
  // (ctrl-click), rectangle drag (alt-drag), or xwin
  // middle-click-paste. Or it might be a click on something we should
  // not interfere with, such as a scrollbar or widget.
  function onMouseDown(e) {
	var cm = this, display = cm.display;
	if (display.activeTouch && display.input.supportsTouch() || signalDOMEvent(cm, e)) return;
	display.shift = e.shiftKey;

	if (eventInWidget(display, e)) {
	  if (!webkit) {
		// Briefly turn off draggability, to allow widgets to do
		// normal dragging things.
		display.scroller.draggable = false;
		setTimeout(function(){display.scroller.draggable = true;}, 100);
	  }
	  return;
	}
	if (clickInGutter(cm, e)) return;
	var start = posFromMouse(cm, e);
	window.focus();

	switch (e_button(e)) {
	case 1:
	  // #3261: make sure, that we're not starting a second selection
	  if (cm.state.selectingText)
		cm.state.selectingText(e);
	  else if (start)
		leftButtonDown(cm, e, start);
	  else if (e_target(e) == display.scroller)
		e_preventDefault(e);
	  break;
	case 2:
	  if (webkit) cm.state.lastMiddleDown = +new Date;
	  if (start) extendSelection(cm.doc, start);
	  setTimeout(function() {display.input.focus();}, 20);
	  e_preventDefault(e);
	  break;
	case 3:
	  if (captureRightClick) onContextMenu(cm, e);
	  else delayBlurEvent(cm);
	  break;
	}
  }

  var lastClick, lastDoubleClick;
  function leftButtonDown(cm, e, start) {
	if (ie) setTimeout(bind(ensureFocus, cm), 0);
	else cm.curOp.focus = activeElt();

	var now = +new Date, type;
	if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	  type = "triple";
	} else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	  type = "double";
	  lastDoubleClick = {time: now, pos: start};
	} else {
	  type = "single";
	  lastClick = {time: now, pos: start};
	}

	var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	if (cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) &&
		type == "single" && (contained = sel.contains(start)) > -1 &&
		(cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
		(cmp(contained.to(), start) > 0 || start.xRel < 0))
	  leftButtonStartDrag(cm, e, start, modifier);
	else
	  leftButtonSelect(cm, e, start, type, modifier);
  }

  // Start a text drag. When it ends, see if any dragging actually
  // happen, and treat as a click if it didn't.
  function leftButtonStartDrag(cm, e, start, modifier) {
	var display = cm.display, startTime = +new Date;
	var dragEnd = operation(cm, function(e2) {
	  if (webkit) display.scroller.draggable = false;
	  cm.state.draggingText = false;
	  off(document, "mouseup", dragEnd);
	  off(display.scroller, "drop", dragEnd);
	  if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
		e_preventDefault(e2);
		if (!modifier && +new Date - 200 < startTime)
		  extendSelection(cm.doc, start);
		// Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
		if (webkit || ie && ie_version == 9)
		  setTimeout(function() {document.body.focus(); display.input.focus();}, 20);
		else
		  display.input.focus();
	  }
	});
	// Let the drag handler handle this.
	if (webkit) display.scroller.draggable = true;
	cm.state.draggingText = dragEnd;
	// IE's approach to draggable
	if (display.scroller.dragDrop) display.scroller.dragDrop();
	on(document, "mouseup", dragEnd);
	on(display.scroller, "drop", dragEnd);
  }

  // Normal selection, as opposed to text dragging.
  function leftButtonSelect(cm, e, start, type, addNew) {
	var display = cm.display, doc = cm.doc;
	e_preventDefault(e);

	var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	if (addNew && !e.shiftKey) {
	  ourIndex = doc.sel.contains(start);
	  if (ourIndex > -1)
		ourRange = ranges[ourIndex];
	  else
		ourRange = new Range(start, start);
	} else {
	  ourRange = doc.sel.primary();
	  ourIndex = doc.sel.primIndex;
	}

	if (e.altKey) {
	  type = "rect";
	  if (!addNew) ourRange = new Range(start, start);
	  start = posFromMouse(cm, e, true, true);
	  ourIndex = -1;
	} else if (type == "double") {
	  var word = cm.findWordAt(start);
	  if (cm.display.shift || doc.extend)
		ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	  else
		ourRange = word;
	} else if (type == "triple") {
	  var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	  if (cm.display.shift || doc.extend)
		ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	  else
		ourRange = line;
	} else {
	  ourRange = extendRange(doc, ourRange, start);
	}

	if (!addNew) {
	  ourIndex = 0;
	  setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	  startSel = doc.sel;
	} else if (ourIndex == -1) {
	  ourIndex = ranges.length;
	  setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
				   {scroll: false, origin: "*mouse"});
	} else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	  setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
				   {scroll: false, origin: "*mouse"});
	  startSel = doc.sel;
	} else {
	  replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	}

	var lastPos = start;
	function extendTo(pos) {
	  if (cmp(lastPos, pos) == 0) return;
	  lastPos = pos;

	  if (type == "rect") {
		var ranges = [], tabSize = cm.options.tabSize;
		var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
		var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
		var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
		for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
			 line <= end; line++) {
		  var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
		  if (left == right)
			ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
		  else if (text.length > leftPos)
			ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
		}
		if (!ranges.length) ranges.push(new Range(start, start));
		setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
					 {origin: "*mouse", scroll: false});
		cm.scrollIntoView(pos);
	  } else {
		var oldRange = ourRange;
		var anchor = oldRange.anchor, head = pos;
		if (type != "single") {
		  if (type == "double")
			var range = cm.findWordAt(pos);
		  else
			var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
		  if (cmp(range.anchor, anchor) > 0) {
			head = range.head;
			anchor = minPos(oldRange.from(), range.anchor);
		  } else {
			head = range.anchor;
			anchor = maxPos(oldRange.to(), range.head);
		  }
		}
		var ranges = startSel.ranges.slice(0);
		ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
		setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	  }
	}

	var editorSize = display.wrapper.getBoundingClientRect();
	// Used to ensure timeout re-tries don't fire when another extend
	// happened in the meantime (clearTimeout isn't reliable -- at
	// least on Chrome, the timeouts still happen even when cleared,
	// if the clear happens after their scheduled firing time).
	var counter = 0;

	function extend(e) {
	  var curCount = ++counter;
	  var cur = posFromMouse(cm, e, true, type == "rect");
	  if (!cur) return;
	  if (cmp(cur, lastPos) != 0) {
		cm.curOp.focus = activeElt();
		extendTo(cur);
		var visible = visibleLines(display, doc);
		if (cur.line >= visible.to || cur.line < visible.from)
		  setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	  } else {
		var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
		if (outside) setTimeout(operation(cm, function() {
		  if (counter != curCount) return;
		  display.scroller.scrollTop += outside;
		  extend(e);
		}), 50);
	  }
	}

	function done(e) {
	  cm.state.selectingText = false;
	  counter = Infinity;
	  e_preventDefault(e);
	  display.input.focus();
	  off(document, "mousemove", move);
	  off(document, "mouseup", up);
	  doc.history.lastSelOrigin = null;
	}

	var move = operation(cm, function(e) {
	  if (!e_button(e)) done(e);
	  else extend(e);
	});
	var up = operation(cm, done);
	cm.state.selectingText = up;
	on(document, "mousemove", move);
	on(document, "mouseup", up);
  }

  // Determines whether an event happened in the gutter, and fires the
  // handlers for the corresponding event.
  function gutterEvent(cm, e, type, prevent, signalfn) {
	try { var mX = e.clientX, mY = e.clientY; }
	catch(e) { return false; }
	if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	if (prevent) e_preventDefault(e);

	var display = cm.display;
	var lineBox = display.lineDiv.getBoundingClientRect();

	if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	mY -= lineBox.top - display.viewOffset;

	for (var i = 0; i < cm.options.gutters.length; ++i) {
	  var g = display.gutters.childNodes[i];
	  if (g && g.getBoundingClientRect().right >= mX) {
		var line = lineAtHeight(cm.doc, mY);
		var gutter = cm.options.gutters[i];
		signalfn(cm, type, cm, line, gutter, e);
		return e_defaultPrevented(e);
	  }
	}
  }

  function clickInGutter(cm, e) {
	return gutterEvent(cm, e, "gutterClick", true, signalLater);
  }

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
	var cm = this;
	clearDragCursor(cm);
	if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	  return;
	e_preventDefault(e);
	if (ie) lastDrop = +new Date;
	var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	if (!pos || isReadOnly(cm)) return;
	// Might be a file drop, in which case we simply extract the text
	// and insert it.
	if (files && files.length && window.FileReader && window.File) {
	  var n = files.length, text = Array(n), read = 0;
	  var loadFile = function(file, i) {
		var reader = new FileReader;
		reader.onload = operation(cm, function() {
		  text[i] = reader.result;
		  if (++read == n) {
			pos = clipPos(cm.doc, pos);
			var change = {from: pos, to: pos,
						  text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
						  origin: "paste"};
			makeChange(cm.doc, change);
			setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
		  }
		});
		reader.readAsText(file);
	  };
	  for (var i = 0; i < n; ++i) loadFile(files[i], i);
	} else { // Normal drop
	  // Don't do a replace if the drop happened inside of the selected text.
	  if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
		cm.state.draggingText(e);
		// Ensure the editor is re-focused
		setTimeout(function() {cm.display.input.focus();}, 20);
		return;
	  }
	  try {
		var text = e.dataTransfer.getData("Text");
		if (text) {
		  if (cm.state.draggingText && !(mac ? e.altKey : e.ctrlKey))
			var selected = cm.listSelections();
		  setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
		  if (selected) for (var i = 0; i < selected.length; ++i)
			replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
		  cm.replaceSelection(text, "around", "paste");
		  cm.display.input.focus();
		}
	  }
	  catch(e){}
	}
  }

  function onDragStart(cm, e) {
	if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

	e.dataTransfer.setData("Text", cm.getSelection());

	// Use dummy image instead of default browsers image.
	// Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	if (e.dataTransfer.setDragImage && !safari) {
	  var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	  img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	  if (presto) {
		img.width = img.height = 1;
		cm.display.wrapper.appendChild(img);
		// Force a relayout, or Opera won't use our image for some obscure reason
		img._top = img.offsetTop;
	  }
	  e.dataTransfer.setDragImage(img, 0, 0);
	  if (presto) img.parentNode.removeChild(img);
	}
  }

  function onDragOver(cm, e) {
	var pos = posFromMouse(cm, e);
	if (!pos) return;
	var frag = document.createDocumentFragment();
	drawSelectionCursor(cm, pos, frag);
	if (!cm.display.dragCursor) {
	  cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	  cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	}
	removeChildrenAndAdd(cm.display.dragCursor, frag);
  }

  function clearDragCursor(cm) {
	if (cm.display.dragCursor) {
	  cm.display.lineSpace.removeChild(cm.display.dragCursor);
	  cm.display.dragCursor = null;
	}
  }

  // SCROLL EVENTS

  // Sync the scrollable area and scrollbars, ensure the viewport
  // covers the visible area.
  function setScrollTop(cm, val) {
	if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	cm.doc.scrollTop = val;
	if (!gecko) updateDisplaySimple(cm, {top: val});
	if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	cm.display.scrollbars.setScrollTop(val);
	if (gecko) updateDisplaySimple(cm);
	startWorker(cm, 100);
  }
  // Sync scroller and scrollbar, ensure the gutter elements are
  // aligned.
  function setScrollLeft(cm, val, isScroller) {
	if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	cm.doc.scrollLeft = val;
	alignHorizontally(cm);
	if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	cm.display.scrollbars.setScrollLeft(val);
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) wheelPixelsPerUnit = -.53;
  else if (gecko) wheelPixelsPerUnit = 15;
  else if (chrome) wheelPixelsPerUnit = -.7;
  else if (safari) wheelPixelsPerUnit = -1/3;

  var wheelEventDelta = function(e) {
	var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	else if (dy == null) dy = e.wheelDelta;
	return {x: dx, y: dy};
  };
  CodeMirror.wheelEventPixels = function(e) {
	var delta = wheelEventDelta(e);
	delta.x *= wheelPixelsPerUnit;
	delta.y *= wheelPixelsPerUnit;
	return delta;
  };

  function onScrollWheel(cm, e) {
	var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

	var display = cm.display, scroll = display.scroller;
	// Quit if there's nothing to scroll here
	if (!(dx && scroll.scrollWidth > scroll.clientWidth ||
		  dy && scroll.scrollHeight > scroll.clientHeight)) return;

	// Webkit browsers on OS X abort momentum scrolls when the target
	// of the scroll event is removed from the scrollable element.
	// This hack (see related code in patchDisplay) makes sure the
	// element is kept around.
	if (dy && mac && webkit) {
	  outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
		for (var i = 0; i < view.length; i++) {
		  if (view[i].node == cur) {
			cm.display.currentWheelTarget = cur;
			break outer;
		  }
		}
	  }
	}

	// On some browsers, horizontal scrolling will cause redraws to
	// happen before the gutter has been realigned, causing it to
	// wriggle around in a most unseemly way. When we have an
	// estimated pixels/delta value, we just handle horizontal
	// scrolling entirely here. It'll be slightly off from native, but
	// better than glitching out.
	if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	  if (dy)
		setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	  setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	  e_preventDefault(e);
	  display.wheelStartX = null; // Abort measurement, if in progress
	  return;
	}

	// 'Project' the visible viewport to cover the area that is being
	// scrolled into view (if we know enough to estimate it).
	if (dy && wheelPixelsPerUnit != null) {
	  var pixels = dy * wheelPixelsPerUnit;
	  var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	  if (pixels < 0) top = Math.max(0, top + pixels - 50);
	  else bot = Math.min(cm.doc.height, bot + pixels + 50);
	  updateDisplaySimple(cm, {top: top, bottom: bot});
	}

	if (wheelSamples < 20) {
	  if (display.wheelStartX == null) {
		display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
		display.wheelDX = dx; display.wheelDY = dy;
		setTimeout(function() {
		  if (display.wheelStartX == null) return;
		  var movedX = scroll.scrollLeft - display.wheelStartX;
		  var movedY = scroll.scrollTop - display.wheelStartY;
		  var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
			(movedX && display.wheelDX && movedX / display.wheelDX);
		  display.wheelStartX = display.wheelStartY = null;
		  if (!sample) return;
		  wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
		  ++wheelSamples;
		}, 200);
	  } else {
		display.wheelDX += dx; display.wheelDY += dy;
	  }
	}
  }

  // KEY EVENTS

  // Run a handler that was bound to a key.
  function doHandleBinding(cm, bound, dropShift) {
	if (typeof bound == "string") {
	  bound = commands[bound];
	  if (!bound) return false;
	}
	// Ensure previous input has been read, so that the handler sees a
	// consistent view of the document
	cm.display.input.ensurePolled();
	var prevShift = cm.display.shift, done = false;
	try {
	  if (isReadOnly(cm)) cm.state.suppressEdits = true;
	  if (dropShift) cm.display.shift = false;
	  done = bound(cm) != Pass;
	} finally {
	  cm.display.shift = prevShift;
	  cm.state.suppressEdits = false;
	}
	return done;
  }

  function lookupKeyForEditor(cm, name, handle) {
	for (var i = 0; i < cm.state.keyMaps.length; i++) {
	  var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	  if (result) return result;
	}
	return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	  || lookupKey(name, cm.options.keyMap, handle, cm);
  }

  var stopSeq = new Delayed;
  function dispatchKey(cm, name, e, handle) {
	var seq = cm.state.keySeq;
	if (seq) {
	  if (isModifierKey(name)) return "handled";
	  stopSeq.set(50, function() {
		if (cm.state.keySeq == seq) {
		  cm.state.keySeq = null;
		  cm.display.input.reset();
		}
	  });
	  name = seq + " " + name;
	}
	var result = lookupKeyForEditor(cm, name, handle);

	if (result == "multi")
	  cm.state.keySeq = name;
	if (result == "handled")
	  signalLater(cm, "keyHandled", cm, name, e);

	if (result == "handled" || result == "multi") {
	  e_preventDefault(e);
	  restartBlink(cm);
	}

	if (seq && !result && /\'$/.test(name)) {
	  e_preventDefault(e);
	  return true;
	}
	return !!result;
  }

  // Handle a key from the keydown event.
  function handleKeyBinding(cm, e) {
	var name = keyName(e, true);
	if (!name) return false;

	if (e.shiftKey && !cm.state.keySeq) {
	  // First try to resolve full name (including 'Shift-'). Failing
	  // that, see if there is a cursor-motion command (starting with
	  // 'go') bound to the keyname without 'Shift-'.
	  return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
		  || dispatchKey(cm, name, e, function(b) {
			   if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
				 return doHandleBinding(cm, b);
			 });
	} else {
	  return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	}
  }

  // Handle a key from the keypress event
  function handleCharBinding(cm, e, ch) {
	return dispatchKey(cm, "'" + ch + "'", e,
					   function(b) { return doHandleBinding(cm, b, true); });
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
	var cm = this;
	cm.curOp.focus = activeElt();
	if (signalDOMEvent(cm, e)) return;
	// IE does strange things with escape.
	if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	var code = e.keyCode;
	cm.display.shift = code == 16 || e.shiftKey;
	var handled = handleKeyBinding(cm, e);
	if (presto) {
	  lastStoppedKey = handled ? code : null;
	  // Opera has no cut event... we try to at least catch the key combo
	  if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
		cm.replaceSelection("", null, "cut");
	}

	// Turn mouse into crosshair when Alt is held on Mac.
	if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	  showCrossHair(cm);
  }

  function showCrossHair(cm) {
	var lineDiv = cm.display.lineDiv;
	addClass(lineDiv, "CodeMirror-crosshair");

	function up(e) {
	  if (e.keyCode == 18 || !e.altKey) {
		rmClass(lineDiv, "CodeMirror-crosshair");
		off(document, "keyup", up);
		off(document, "mouseover", up);
	  }
	}
	on(document, "keyup", up);
	on(document, "mouseover", up);
  }

  function onKeyUp(e) {
	if (e.keyCode == 16) this.doc.sel.shift = false;
	signalDOMEvent(this, e);
  }

  function onKeyPress(e) {
	var cm = this;
	if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	var keyCode = e.keyCode, charCode = e.charCode;
	if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return;
	var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	if (handleCharBinding(cm, e, ch)) return;
	cm.display.input.onKeyPress(e);
  }

  // FOCUS/BLUR EVENTS

  function delayBlurEvent(cm) {
	cm.state.delayingBlurEvent = true;
	setTimeout(function() {
	  if (cm.state.delayingBlurEvent) {
		cm.state.delayingBlurEvent = false;
		onBlur(cm);
	  }
	}, 100);
  }

  function onFocus(cm) {
	if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false;

	if (cm.options.readOnly == "nocursor") return;
	if (!cm.state.focused) {
	  signal(cm, "focus", cm);
	  cm.state.focused = true;
	  addClass(cm.display.wrapper, "CodeMirror-focused");
	  // This test prevents this from firing when a context
	  // menu is closed (since the input reset would kill the
	  // select-all detection hack)
	  if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
		cm.display.input.reset();
		if (webkit) setTimeout(function() { cm.display.input.reset(true); }, 20); // Issue #1730
	  }
	  cm.display.input.receivedFocus();
	}
	restartBlink(cm);
  }
  function onBlur(cm) {
	if (cm.state.delayingBlurEvent) return;

	if (cm.state.focused) {
	  signal(cm, "blur", cm);
	  cm.state.focused = false;
	  rmClass(cm.display.wrapper, "CodeMirror-focused");
	}
	clearInterval(cm.display.blinker);
	setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
  }

  // CONTEXT MENU HANDLING

  // To make the context menu work, we need to briefly unhide the
  // textarea (making it as unobtrusive as possible) to let the
  // right-click take effect on it.
  function onContextMenu(cm, e) {
	if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) return;
	cm.display.input.onContextMenu(e);
  }

  function contextMenuInGutter(cm, e) {
	if (!hasHandler(cm, "gutterContextMenu")) return false;
	return gutterEvent(cm, e, "gutterContextMenu", false, signal);
  }

  // UPDATING

  // Compute the position of the end of a change (its 'to' property
  // refers to the pre-change end).
  var changeEnd = CodeMirror.changeEnd = function(change) {
	if (!change.text) return change.to;
	return Pos(change.from.line + change.text.length - 1,
			   lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
  };

  // Adjust a position to refer to the post-change position of the
  // same text, or the end of the change if the change covers it.
  function adjustForChange(pos, change) {
	if (cmp(pos, change.from) < 0) return pos;
	if (cmp(pos, change.to) <= 0) return changeEnd(change);

	var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	return Pos(line, ch);
  }

  function computeSelAfterChange(doc, change) {
	var out = [];
	for (var i = 0; i < doc.sel.ranges.length; i++) {
	  var range = doc.sel.ranges[i];
	  out.push(new Range(adjustForChange(range.anchor, change),
						 adjustForChange(range.head, change)));
	}
	return normalizeSelection(out, doc.sel.primIndex);
  }

  function offsetPos(pos, old, nw) {
	if (pos.line == old.line)
	  return Pos(nw.line, pos.ch - old.ch + nw.ch);
	else
	  return Pos(nw.line + (pos.line - old.line), pos.ch);
  }

  // Used by replaceSelections to allow moving the selection to the
  // start or around the replaced test. Hint may be "start" or "around".
  function computeReplacedSel(doc, changes, hint) {
	var out = [];
	var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	for (var i = 0; i < changes.length; i++) {
	  var change = changes[i];
	  var from = offsetPos(change.from, oldPrev, newPrev);
	  var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	  oldPrev = change.to;
	  newPrev = to;
	  if (hint == "around") {
		var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
		out[i] = new Range(inv ? to : from, inv ? from : to);
	  } else {
		out[i] = new Range(from, from);
	  }
	}
	return new Selection(out, doc.sel.primIndex);
  }

  // Allow "beforeChange" event handlers to influence a change
  function filterChange(doc, change, update) {
	var obj = {
	  canceled: false,
	  from: change.from,
	  to: change.to,
	  text: change.text,
	  origin: change.origin,
	  cancel: function() { this.canceled = true; }
	};
	if (update) obj.update = function(from, to, text, origin) {
	  if (from) this.from = clipPos(doc, from);
	  if (to) this.to = clipPos(doc, to);
	  if (text) this.text = text;
	  if (origin !== undefined) this.origin = origin;
	};
	signal(doc, "beforeChange", doc, obj);
	if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

	if (obj.canceled) return null;
	return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
  }

  // Apply a change to a document, and add it to the document's
  // history, and propagating it to all linked documents.
  function makeChange(doc, change, ignoreReadOnly) {
	if (doc.cm) {
	  if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	  if (doc.cm.state.suppressEdits) return;
	}

	if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	  change = filterChange(doc, change, true);
	  if (!change) return;
	}

	// Possibly split or suppress the update based on the presence
	// of read-only spans in its range.
	var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	if (split) {
	  for (var i = split.length - 1; i >= 0; --i)
		makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	} else {
	  makeChangeInner(doc, change);
	}
  }

  function makeChangeInner(doc, change) {
	if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	var selAfter = computeSelAfterChange(doc, change);
	addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

	makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	var rebased = [];

	linkedDocs(doc, function(doc, sharedHist) {
	  if (!sharedHist && indexOf(rebased, doc.history) == -1) {
		rebaseHist(doc.history, change);
		rebased.push(doc.history);
	  }
	  makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	});
  }

  // Revert a change stored in a document's history.
  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	if (doc.cm && doc.cm.state.suppressEdits) return;

	var hist = doc.history, event, selAfter = doc.sel;
	var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

	// Verify that there is a useable event (so that ctrl-z won't
	// needlessly clear selection events)
	for (var i = 0; i < source.length; i++) {
	  event = source[i];
	  if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
		break;
	}
	if (i == source.length) return;
	hist.lastOrigin = hist.lastSelOrigin = null;

	for (;;) {
	  event = source.pop();
	  if (event.ranges) {
		pushSelectionToHistory(event, dest);
		if (allowSelectionOnly && !event.equals(doc.sel)) {
		  setSelection(doc, event, {clearRedo: false});
		  return;
		}
		selAfter = event;
	  }
	  else break;
	}

	// Build up a reverse change object to add to the opposite history
	// stack (redo when undoing, and vice versa).
	var antiChanges = [];
	pushSelectionToHistory(selAfter, dest);
	dest.push({changes: antiChanges, generation: hist.generation});
	hist.generation = event.generation || ++hist.maxGeneration;

	var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

	for (var i = event.changes.length - 1; i >= 0; --i) {
	  var change = event.changes[i];
	  change.origin = type;
	  if (filter && !filterChange(doc, change, false)) {
		source.length = 0;
		return;
	  }

	  antiChanges.push(historyChangeFromChange(doc, change));

	  var after = i ? computeSelAfterChange(doc, change) : lst(source);
	  makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	  if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	  var rebased = [];

	  // Propagate to the linked documents
	  linkedDocs(doc, function(doc, sharedHist) {
		if (!sharedHist && indexOf(rebased, doc.history) == -1) {
		  rebaseHist(doc.history, change);
		  rebased.push(doc.history);
		}
		makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	  });
	}
  }

  // Sub-views need their line numbers shifted when text is added
  // above or below them in the parent document.
  function shiftDoc(doc, distance) {
	if (distance == 0) return;
	doc.first += distance;
	doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	  return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
					   Pos(range.head.line + distance, range.head.ch));
	}), doc.sel.primIndex);
	if (doc.cm) {
	  regChange(doc.cm, doc.first, doc.first - distance, distance);
	  for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
		regLineChange(doc.cm, l, "gutter");
	}
  }

  // More lower-level change function, handling only a single document
  // (not linked ones).
  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	if (doc.cm && !doc.cm.curOp)
	  return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

	if (change.to.line < doc.first) {
	  shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	  return;
	}
	if (change.from.line > doc.lastLine()) return;

	// Clip the change to the size of this doc
	if (change.from.line < doc.first) {
	  var shift = change.text.length - 1 - (doc.first - change.from.line);
	  shiftDoc(doc, shift);
	  change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
				text: [lst(change.text)], origin: change.origin};
	}
	var last = doc.lastLine();
	if (change.to.line > last) {
	  change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
				text: [change.text[0]], origin: change.origin};
	}

	change.removed = getBetween(doc, change.from, change.to);

	if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	else updateDoc(doc, change, spans);
	setSelectionNoUndo(doc, selAfter, sel_dontScroll);
  }

  // Handle the interaction of a change to a document with the editor
  // that this document is part of.
  function makeChangeSingleDocInEditor(cm, change, spans) {
	var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

	var recomputeMaxLength = false, checkWidthStart = from.line;
	if (!cm.options.lineWrapping) {
	  checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	  doc.iter(checkWidthStart, to.line + 1, function(line) {
		if (line == display.maxLine) {
		  recomputeMaxLength = true;
		  return true;
		}
	  });
	}

	if (doc.sel.contains(change.from, change.to) > -1)
	  signalCursorActivity(cm);

	updateDoc(doc, change, spans, estimateHeight(cm));

	if (!cm.options.lineWrapping) {
	  doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
		var len = lineLength(line);
		if (len > display.maxLineLength) {
		  display.maxLine = line;
		  display.maxLineLength = len;
		  display.maxLineChanged = true;
		  recomputeMaxLength = false;
		}
	  });
	  if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	}

	// Adjust frontier, schedule worker
	doc.frontier = Math.min(doc.frontier, from.line);
	startWorker(cm, 400);

	var lendiff = change.text.length - (to.line - from.line) - 1;
	// Remember that these lines changed, for updating the display
	if (change.full)
	  regChange(cm);
	else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	  regLineChange(cm, from.line, "text");
	else
	  regChange(cm, from.line, to.line + 1, lendiff);

	var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	if (changeHandler || changesHandler) {
	  var obj = {
		from: from, to: to,
		text: change.text,
		removed: change.removed,
		origin: change.origin
	  };
	  if (changeHandler) signalLater(cm, "change", cm, obj);
	  if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	}
	cm.display.selForContextMenu = null;
  }

  function replaceRange(doc, code, from, to, origin) {
	if (!to) to = from;
	if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	if (typeof code == "string") code = doc.splitLines(code);
	makeChange(doc, {from: from, to: to, text: code, origin: origin});
  }

  // SCROLLING THINGS INTO VIEW

  // If an editor sits on the top or bottom of the window, partially
  // scrolled out of view, this ensures that the cursor is visible.
  function maybeScrollWindow(cm, coords) {
	if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

	var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	if (coords.top + box.top < 0) doScroll = true;
	else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	if (doScroll != null && !phantom) {
	  var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
						   (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
						   (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
						   coords.left + "px; width: 2px;");
	  cm.display.lineSpace.appendChild(scrollNode);
	  scrollNode.scrollIntoView(doScroll);
	  cm.display.lineSpace.removeChild(scrollNode);
	}
  }

  // Scroll a given position into view (immediately), verifying that
  // it actually became visible (as line heights are accurately
  // measured, the position of something may 'drift' during drawing).
  function scrollPosIntoView(cm, pos, end, margin) {
	if (margin == null) margin = 0;
	for (var limit = 0; limit < 5; limit++) {
	  var changed = false, coords = cursorCoords(cm, pos);
	  var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	  var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
										 Math.min(coords.top, endCoords.top) - margin,
										 Math.max(coords.left, endCoords.left),
										 Math.max(coords.bottom, endCoords.bottom) + margin);
	  var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	  if (scrollPos.scrollTop != null) {
		setScrollTop(cm, scrollPos.scrollTop);
		if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	  }
	  if (scrollPos.scrollLeft != null) {
		setScrollLeft(cm, scrollPos.scrollLeft);
		if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	  }
	  if (!changed) break;
	}
	return coords;
  }

  // Scroll a given set of coordinates into view (immediately).
  function scrollIntoView(cm, x1, y1, x2, y2) {
	var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
  }

  // Calculate a new scroll position needed to scroll the given
  // rectangle into view. Returns an object with scrollTop and
  // scrollLeft properties. When these are undefined, the
  // vertical/horizontal position does not need to be adjusted.
  function calculateScrollPos(cm, x1, y1, x2, y2) {
	var display = cm.display, snapMargin = textHeight(cm.display);
	if (y1 < 0) y1 = 0;
	var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	var screen = displayHeight(cm), result = {};
	if (y2 - y1 > screen) y2 = y1 + screen;
	var docBottom = cm.doc.height + paddingVert(display);
	var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	if (y1 < screentop) {
	  result.scrollTop = atTop ? 0 : y1;
	} else if (y2 > screentop + screen) {
	  var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	  if (newTop != screentop) result.scrollTop = newTop;
	}

	var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	var tooWide = x2 - x1 > screenw;
	if (tooWide) x2 = x1 + screenw;
	if (x1 < 10)
	  result.scrollLeft = 0;
	else if (x1 < screenleft)
	  result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	else if (x2 > screenw + screenleft - 3)
	  result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	return result;
  }

  // Store a relative adjustment to the scroll position in the current
  // operation (to be applied when the operation finishes).
  function addToScrollPos(cm, left, top) {
	if (left != null || top != null) resolveScrollToPos(cm);
	if (left != null)
	  cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	if (top != null)
	  cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
  }

  // Make sure that at the end of the operation the current cursor is
  // shown.
  function ensureCursorVisible(cm) {
	resolveScrollToPos(cm);
	var cur = cm.getCursor(), from = cur, to = cur;
	if (!cm.options.lineWrapping) {
	  from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	  to = Pos(cur.line, cur.ch + 1);
	}
	cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
  }

  // When an operation has its scrollToPos property set, and another
  // scroll action is applied before the end of the operation, this
  // 'simulates' scrolling that position into view in a cheap way, so
  // that the effect of intermediate scroll commands is not ignored.
  function resolveScrollToPos(cm) {
	var range = cm.curOp.scrollToPos;
	if (range) {
	  cm.curOp.scrollToPos = null;
	  var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	  var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
									Math.min(from.top, to.top) - range.margin,
									Math.max(from.right, to.right),
									Math.max(from.bottom, to.bottom) + range.margin);
	  cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	}
  }

  // API UTILITIES

  // Indent the given line. The how parameter can be "smart",
  // "add"/null, "subtract", or "prev". When aggressive is false
  // (typically set to true for forced single-line indents), empty
  // lines are not indented, and places where the mode returns Pass
  // are left alone.
  function indentLine(cm, n, how, aggressive) {
	var doc = cm.doc, state;
	if (how == null) how = "add";
	if (how == "smart") {
	  // Fall back to "prev" when the mode doesn't have an indentation
	  // method.
	  if (!doc.mode.indent) how = "prev";
	  else state = getStateBefore(cm, n);
	}

	var tabSize = cm.options.tabSize;
	var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	if (line.stateAfter) line.stateAfter = null;
	var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	if (!aggressive && !/\S/.test(line.text)) {
	  indentation = 0;
	  how = "not";
	} else if (how == "smart") {
	  indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	  if (indentation == Pass || indentation > 150) {
		if (!aggressive) return;
		how = "prev";
	  }
	}
	if (how == "prev") {
	  if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	  else indentation = 0;
	} else if (how == "add") {
	  indentation = curSpace + cm.options.indentUnit;
	} else if (how == "subtract") {
	  indentation = curSpace - cm.options.indentUnit;
	} else if (typeof how == "number") {
	  indentation = curSpace + how;
	}
	indentation = Math.max(0, indentation);

	var indentString = "", pos = 0;
	if (cm.options.indentWithTabs)
	  for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	if (pos < indentation) indentString += spaceStr(indentation - pos);

	if (indentString != curSpaceString) {
	  replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	  line.stateAfter = null;
	  return true;
	} else {
	  // Ensure that, if the cursor was in the whitespace at the start
	  // of the line, it is moved to the end of that space.
	  for (var i = 0; i < doc.sel.ranges.length; i++) {
		var range = doc.sel.ranges[i];
		if (range.head.line == n && range.head.ch < curSpaceString.length) {
		  var pos = Pos(n, curSpaceString.length);
		  replaceOneSelection(doc, i, new Range(pos, pos));
		  break;
		}
	  }
	}
  }

  // Utility for applying a change to a line by handle or number,
  // returning the number and optionally registering the line as
  // changed.
  function changeLine(doc, handle, changeType, op) {
	var no = handle, line = handle;
	if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	else no = lineNo(handle);
	if (no == null) return null;
	if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	return line;
  }

  // Helper for deleting text near the selection(s), used to implement
  // backspace, delete, and similar functionality.
  function deleteNearSelection(cm, compute) {
	var ranges = cm.doc.sel.ranges, kill = [];
	// Build up a set of ranges to kill first, merging overlapping
	// ranges.
	for (var i = 0; i < ranges.length; i++) {
	  var toKill = compute(ranges[i]);
	  while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
		var replaced = kill.pop();
		if (cmp(replaced.from, toKill.from) < 0) {
		  toKill.from = replaced.from;
		  break;
		}
	  }
	  kill.push(toKill);
	}
	// Next, remove those actual ranges.
	runInOp(cm, function() {
	  for (var i = kill.length - 1; i >= 0; i--)
		replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	  ensureCursorVisible(cm);
	});
  }

  // Used for horizontal relative motion. Dir is -1 or 1 (left or
  // right), unit can be "char", "column" (like char, but doesn't
  // cross line boundaries), "word" (across next word), or "group" (to
  // the start of next group of word or non-word-non-whitespace
  // chars). The visually param controls whether, in right-to-left
  // text, direction 1 means to move towards the next index in the
  // string, or towards the character to the right of the current
  // position. The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosH(doc, pos, dir, unit, visually) {
	var line = pos.line, ch = pos.ch, origDir = dir;
	var lineObj = getLine(doc, line);
	var possible = true;
	function findNextLine() {
	  var l = line + dir;
	  if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
	  line = l;
	  return lineObj = getLine(doc, l);
	}
	function moveOnce(boundToLine) {
	  var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	  if (next == null) {
		if (!boundToLine && findNextLine()) {
		  if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
		  else ch = dir < 0 ? lineObj.text.length : 0;
		} else return (possible = false);
	  } else ch = next;
	  return true;
	}

	if (unit == "char") moveOnce();
	else if (unit == "column") moveOnce(true);
	else if (unit == "word" || unit == "group") {
	  var sawType = null, group = unit == "group";
	  var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	  for (var first = true;; first = false) {
		if (dir < 0 && !moveOnce(!first)) break;
		var cur = lineObj.text.charAt(ch) || "\n";
		var type = isWordChar(cur, helper) ? "w"
		  : group && cur == "\n" ? "n"
		  : !group || /\s/.test(cur) ? null
		  : "p";
		if (group && !first && !type) type = "s";
		if (sawType && sawType != type) {
		  if (dir < 0) {dir = 1; moveOnce();}
		  break;
		}

		if (type) sawType = type;
		if (dir > 0 && !moveOnce(!first)) break;
	  }
	}
	var result = skipAtomic(doc, Pos(line, ch), origDir, true);
	if (!possible) result.hitSide = true;
	return result;
  }

  // For relative vertical movement. Dir may be -1 or 1. Unit can be
  // "page" or "line". The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosV(cm, pos, dir, unit) {
	var doc = cm.doc, x = pos.left, y;
	if (unit == "page") {
	  var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	  y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
	} else if (unit == "line") {
	  y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	}
	for (;;) {
	  var target = coordsChar(cm, x, y);
	  if (!target.outside) break;
	  if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	  y += dir * 5;
	}
	return target;
  }

  // EDITOR METHODS

  // The publicly visible API. Note that methodOp(f) means
  // 'wrap f in an operation, performed on its `this` parameter'.

  // This is not the complete set of editor methods. Most of the
  // methods defined on the Doc type are also injected into
  // CodeMirror.prototype, for backwards compatibility and
  // convenience.

  CodeMirror.prototype = {
	constructor: CodeMirror,
	focus: function(){window.focus(); this.display.input.focus();},

	setOption: function(option, value) {
	  var options = this.options, old = options[option];
	  if (options[option] == value && option != "mode") return;
	  options[option] = value;
	  if (optionHandlers.hasOwnProperty(option))
		operation(this, optionHandlers[option])(this, value, old);
	},

	getOption: function(option) {return this.options[option];},
	getDoc: function() {return this.doc;},

	addKeyMap: function(map, bottom) {
	  this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	},
	removeKeyMap: function(map) {
	  var maps = this.state.keyMaps;
	  for (var i = 0; i < maps.length; ++i)
		if (maps[i] == map || maps[i].name == map) {
		  maps.splice(i, 1);
		  return true;
		}
	},

	addOverlay: methodOp(function(spec, options) {
	  var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	  if (mode.startState) throw new Error("Overlays may not be stateful.");
	  this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
	  this.state.modeGen++;
	  regChange(this);
	}),
	removeOverlay: methodOp(function(spec) {
	  var overlays = this.state.overlays;
	  for (var i = 0; i < overlays.length; ++i) {
		var cur = overlays[i].modeSpec;
		if (cur == spec || typeof spec == "string" && cur.name == spec) {
		  overlays.splice(i, 1);
		  this.state.modeGen++;
		  regChange(this);
		  return;
		}
	  }
	}),

	indentLine: methodOp(function(n, dir, aggressive) {
	  if (typeof dir != "string" && typeof dir != "number") {
		if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
		else dir = dir ? "add" : "subtract";
	  }
	  if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	}),
	indentSelection: methodOp(function(how) {
	  var ranges = this.doc.sel.ranges, end = -1;
	  for (var i = 0; i < ranges.length; i++) {
		var range = ranges[i];
		if (!range.empty()) {
		  var from = range.from(), to = range.to();
		  var start = Math.max(end, from.line);
		  end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
		  for (var j = start; j < end; ++j)
			indentLine(this, j, how);
		  var newRanges = this.doc.sel.ranges;
		  if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
			replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
		} else if (range.head.line > end) {
		  indentLine(this, range.head.line, how, true);
		  end = range.head.line;
		  if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
		}
	  }
	}),

	// Fetch the parser token for a given character. Useful for hacks
	// that want to inspect the mode state (say, for completion).
	getTokenAt: function(pos, precise) {
	  return takeToken(this, pos, precise);
	},

	getLineTokens: function(line, precise) {
	  return takeToken(this, Pos(line), precise, true);
	},

	getTokenTypeAt: function(pos) {
	  pos = clipPos(this.doc, pos);
	  var styles = getLineStyles(this, getLine(this.doc, pos.line));
	  var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	  var type;
	  if (ch == 0) type = styles[2];
	  else for (;;) {
		var mid = (before + after) >> 1;
		if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
		else if (styles[mid * 2 + 1] < ch) before = mid + 1;
		else { type = styles[mid * 2 + 2]; break; }
	  }
	  var cut = type ? type.indexOf("cm-overlay ") : -1;
	  return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	},

	getModeAt: function(pos) {
	  var mode = this.doc.mode;
	  if (!mode.innerMode) return mode;
	  return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	},

	getHelper: function(pos, type) {
	  return this.getHelpers(pos, type)[0];
	},

	getHelpers: function(pos, type) {
	  var found = [];
	  if (!helpers.hasOwnProperty(type)) return found;
	  var help = helpers[type], mode = this.getModeAt(pos);
	  if (typeof mode[type] == "string") {
		if (help[mode[type]]) found.push(help[mode[type]]);
	  } else if (mode[type]) {
		for (var i = 0; i < mode[type].length; i++) {
		  var val = help[mode[type][i]];
		  if (val) found.push(val);
		}
	  } else if (mode.helperType && help[mode.helperType]) {
		found.push(help[mode.helperType]);
	  } else if (help[mode.name]) {
		found.push(help[mode.name]);
	  }
	  for (var i = 0; i < help._global.length; i++) {
		var cur = help._global[i];
		if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
		  found.push(cur.val);
	  }
	  return found;
	},

	getStateAfter: function(line, precise) {
	  var doc = this.doc;
	  line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	  return getStateBefore(this, line + 1, precise);
	},

	cursorCoords: function(start, mode) {
	  var pos, range = this.doc.sel.primary();
	  if (start == null) pos = range.head;
	  else if (typeof start == "object") pos = clipPos(this.doc, start);
	  else pos = start ? range.from() : range.to();
	  return cursorCoords(this, pos, mode || "page");
	},

	charCoords: function(pos, mode) {
	  return charCoords(this, clipPos(this.doc, pos), mode || "page");
	},

	coordsChar: function(coords, mode) {
	  coords = fromCoordSystem(this, coords, mode || "page");
	  return coordsChar(this, coords.left, coords.top);
	},

	lineAtHeight: function(height, mode) {
	  height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	  return lineAtHeight(this.doc, height + this.display.viewOffset);
	},
	heightAtLine: function(line, mode) {
	  var end = false, lineObj;
	  if (typeof line == "number") {
		var last = this.doc.first + this.doc.size - 1;
		if (line < this.doc.first) line = this.doc.first;
		else if (line > last) { line = last; end = true; }
		lineObj = getLine(this.doc, line);
	  } else {
		lineObj = line;
	  }
	  return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
		(end ? this.doc.height - heightAtLine(lineObj) : 0);
	},

	defaultTextHeight: function() { return textHeight(this.display); },
	defaultCharWidth: function() { return charWidth(this.display); },

	setGutterMarker: methodOp(function(line, gutterID, value) {
	  return changeLine(this.doc, line, "gutter", function(line) {
		var markers = line.gutterMarkers || (line.gutterMarkers = {});
		markers[gutterID] = value;
		if (!value && isEmpty(markers)) line.gutterMarkers = null;
		return true;
	  });
	}),

	clearGutter: methodOp(function(gutterID) {
	  var cm = this, doc = cm.doc, i = doc.first;
	  doc.iter(function(line) {
		if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
		  line.gutterMarkers[gutterID] = null;
		  regLineChange(cm, i, "gutter");
		  if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
		}
		++i;
	  });
	}),

	lineInfo: function(line) {
	  if (typeof line == "number") {
		if (!isLine(this.doc, line)) return null;
		var n = line;
		line = getLine(this.doc, line);
		if (!line) return null;
	  } else {
		var n = lineNo(line);
		if (n == null) return null;
	  }
	  return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
			  textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
			  widgets: line.widgets};
	},

	getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

	addWidget: function(pos, node, scroll, vert, horiz) {
	  var display = this.display;
	  pos = cursorCoords(this, clipPos(this.doc, pos));
	  var top = pos.bottom, left = pos.left;
	  node.style.position = "absolute";
	  node.setAttribute("cm-ignore-events", "true");
	  this.display.input.setUneditable(node);
	  display.sizer.appendChild(node);
	  if (vert == "over") {
		top = pos.top;
	  } else if (vert == "above" || vert == "near") {
		var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
		hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
		// Default to positioning above (if specified and possible); otherwise default to positioning below
		if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
		  top = pos.top - node.offsetHeight;
		else if (pos.bottom + node.offsetHeight <= vspace)
		  top = pos.bottom;
		if (left + node.offsetWidth > hspace)
		  left = hspace - node.offsetWidth;
	  }
	  node.style.top = top + "px";
	  node.style.left = node.style.right = "";
	  if (horiz == "right") {
		left = display.sizer.clientWidth - node.offsetWidth;
		node.style.right = "0px";
	  } else {
		if (horiz == "left") left = 0;
		else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
		node.style.left = left + "px";
	  }
	  if (scroll)
		scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	},

	triggerOnKeyDown: methodOp(onKeyDown),
	triggerOnKeyPress: methodOp(onKeyPress),
	triggerOnKeyUp: onKeyUp,

	execCommand: function(cmd) {
	  if (commands.hasOwnProperty(cmd))
		return commands[cmd].call(null, this);
	},

	triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

	findPosH: function(from, amount, unit, visually) {
	  var dir = 1;
	  if (amount < 0) { dir = -1; amount = -amount; }
	  for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
		cur = findPosH(this.doc, cur, dir, unit, visually);
		if (cur.hitSide) break;
	  }
	  return cur;
	},

	moveH: methodOp(function(dir, unit) {
	  var cm = this;
	  cm.extendSelectionsBy(function(range) {
		if (cm.display.shift || cm.doc.extend || range.empty())
		  return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
		else
		  return dir < 0 ? range.from() : range.to();
	  }, sel_move);
	}),

	deleteH: methodOp(function(dir, unit) {
	  var sel = this.doc.sel, doc = this.doc;
	  if (sel.somethingSelected())
		doc.replaceSelection("", null, "+delete");
	  else
		deleteNearSelection(this, function(range) {
		  var other = findPosH(doc, range.head, dir, unit, false);
		  return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
		});
	}),

	findPosV: function(from, amount, unit, goalColumn) {
	  var dir = 1, x = goalColumn;
	  if (amount < 0) { dir = -1; amount = -amount; }
	  for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
		var coords = cursorCoords(this, cur, "div");
		if (x == null) x = coords.left;
		else coords.left = x;
		cur = findPosV(this, coords, dir, unit);
		if (cur.hitSide) break;
	  }
	  return cur;
	},

	moveV: methodOp(function(dir, unit) {
	  var cm = this, doc = this.doc, goals = [];
	  var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	  doc.extendSelectionsBy(function(range) {
		if (collapse)
		  return dir < 0 ? range.from() : range.to();
		var headPos = cursorCoords(cm, range.head, "div");
		if (range.goalColumn != null) headPos.left = range.goalColumn;
		goals.push(headPos.left);
		var pos = findPosV(cm, headPos, dir, unit);
		if (unit == "page" && range == doc.sel.primary())
		  addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
		return pos;
	  }, sel_move);
	  if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
		doc.sel.ranges[i].goalColumn = goals[i];
	}),

	// Find the word at the given position (as returned by coordsChar).
	findWordAt: function(pos) {
	  var doc = this.doc, line = getLine(doc, pos.line).text;
	  var start = pos.ch, end = pos.ch;
	  if (line) {
		var helper = this.getHelper(pos, "wordChars");
		if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
		var startChar = line.charAt(start);
		var check = isWordChar(startChar, helper)
		  ? function(ch) { return isWordChar(ch, helper); }
		  : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
		  : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
		while (start > 0 && check(line.charAt(start - 1))) --start;
		while (end < line.length && check(line.charAt(end))) ++end;
	  }
	  return new Range(Pos(pos.line, start), Pos(pos.line, end));
	},

	toggleOverwrite: function(value) {
	  if (value != null && value == this.state.overwrite) return;
	  if (this.state.overwrite = !this.state.overwrite)
		addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	  else
		rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

	  signal(this, "overwriteToggle", this, this.state.overwrite);
	},
	hasFocus: function() { return this.display.input.getField() == activeElt(); },

	scrollTo: methodOp(function(x, y) {
	  if (x != null || y != null) resolveScrollToPos(this);
	  if (x != null) this.curOp.scrollLeft = x;
	  if (y != null) this.curOp.scrollTop = y;
	}),
	getScrollInfo: function() {
	  var scroller = this.display.scroller;
	  return {left: scroller.scrollLeft, top: scroller.scrollTop,
			  height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
			  width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
			  clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	},

	scrollIntoView: methodOp(function(range, margin) {
	  if (range == null) {
		range = {from: this.doc.sel.primary().head, to: null};
		if (margin == null) margin = this.options.cursorScrollMargin;
	  } else if (typeof range == "number") {
		range = {from: Pos(range, 0), to: null};
	  } else if (range.from == null) {
		range = {from: range, to: null};
	  }
	  if (!range.to) range.to = range.from;
	  range.margin = margin || 0;

	  if (range.from.line != null) {
		resolveScrollToPos(this);
		this.curOp.scrollToPos = range;
	  } else {
		var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
									  Math.min(range.from.top, range.to.top) - range.margin,
									  Math.max(range.from.right, range.to.right),
									  Math.max(range.from.bottom, range.to.bottom) + range.margin);
		this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	  }
	}),

	setSize: methodOp(function(width, height) {
	  var cm = this;
	  function interpret(val) {
		return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	  }
	  if (width != null) cm.display.wrapper.style.width = interpret(width);
	  if (height != null) cm.display.wrapper.style.height = interpret(height);
	  if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	  var lineNo = cm.display.viewFrom;
	  cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
		if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
		  if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
		++lineNo;
	  });
	  cm.curOp.forceUpdate = true;
	  signal(cm, "refresh", this);
	}),

	operation: function(f){return runInOp(this, f);},

	refresh: methodOp(function() {
	  var oldHeight = this.display.cachedTextHeight;
	  regChange(this);
	  this.curOp.forceUpdate = true;
	  clearCaches(this);
	  this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	  updateGutterSpace(this);
	  if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
		estimateLineHeights(this);
	  signal(this, "refresh", this);
	}),

	swapDoc: methodOp(function(doc) {
	  var old = this.doc;
	  old.cm = null;
	  attachDoc(this, doc);
	  clearCaches(this);
	  this.display.input.reset();
	  this.scrollTo(doc.scrollLeft, doc.scrollTop);
	  this.curOp.forceScroll = true;
	  signalLater(this, "swapDoc", this, old);
	  return old;
	}),

	getInputField: function(){return this.display.input.getField();},
	getWrapperElement: function(){return this.display.wrapper;},
	getScrollerElement: function(){return this.display.scroller;},
	getGutterElement: function(){return this.display.gutters;}
  };
  eventMixin(CodeMirror);

  // OPTION DEFAULTS

  // The default configuration options.
  var defaults = CodeMirror.defaults = {};
  // Functions to run when options are changed.
  var optionHandlers = CodeMirror.optionHandlers = {};

  function option(name, deflt, handle, notOnInit) {
	CodeMirror.defaults[name] = deflt;
	if (handle) optionHandlers[name] =
	  notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
  }

  // Passed to option handlers when there is no old value.
  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function(cm, val) {
	cm.setValue(val);
  }, true);
  option("mode", null, function(cm, val) {
	cm.doc.modeOption = val;
	loadMode(cm);
  }, true);

  option("indentUnit", 2, loadMode, true);
  option("indentWithTabs", false);
  option("smartIndent", true);
  option("tabSize", 4, function(cm) {
	resetModeState(cm);
	clearCaches(cm);
	regChange(cm);
  }, true);
  option("lineSeparator", null, function(cm, val) {
	cm.doc.lineSep = val;
	if (!val) return;
	var newBreaks = [], lineNo = cm.doc.first;
	cm.doc.iter(function(line) {
	  for (var pos = 0;;) {
		var found = line.text.indexOf(val, pos);
		if (found == -1) break;
		pos = found + val.length;
		newBreaks.push(Pos(lineNo, found));
	  }
	  lineNo++;
	});
	for (var i = newBreaks.length - 1; i >= 0; i--)
	  replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length))
  });
  option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
	cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	if (old != CodeMirror.Init) cm.refresh();
  });
  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
  option("electricChars", true);
  option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
	throw new Error("inputStyle can not (yet) be changed in a running editor"); // FIXME
  }, true);
  option("rtlMoveVisually", !windows);
  option("wholeLineUpdateBefore", true);

  option("theme", "default", function(cm) {
	themeChanged(cm);
	guttersChanged(cm);
  }, true);
  option("keyMap", "default", function(cm, val, old) {
	var next = getKeyMap(val);
	var prev = old != CodeMirror.Init && getKeyMap(old);
	if (prev && prev.detach) prev.detach(cm, next);
	if (next.attach) next.attach(cm, prev || null);
  });
  option("extraKeys", null);

  option("lineWrapping", false, wrappingChanged, true);
  option("gutters", [], function(cm) {
	setGuttersForLineNumbers(cm.options);
	guttersChanged(cm);
  }, true);
  option("fixedGutter", true, function(cm, val) {
	cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	cm.refresh();
  }, true);
  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
  option("scrollbarStyle", "native", function(cm) {
	initScrollbars(cm);
	updateScrollbars(cm);
	cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
  }, true);
  option("lineNumbers", false, function(cm) {
	setGuttersForLineNumbers(cm.options);
	guttersChanged(cm);
  }, true);
  option("firstLineNumber", 1, guttersChanged, true);
  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
  option("showCursorWhenSelecting", false, updateSelection, true);

  option("resetSelectionOnContextMenu", true);
  option("lineWiseCopyCut", true);

  option("readOnly", false, function(cm, val) {
	if (val == "nocursor") {
	  onBlur(cm);
	  cm.display.input.blur();
	  cm.display.disabled = true;
	} else {
	  cm.display.disabled = false;
	  if (!val) cm.display.input.reset();
	}
  });
  option("disableInput", false, function(cm, val) {if (!val) cm.display.input.reset();}, true);
  option("dragDrop", true, dragDropChanged);

  option("cursorBlinkRate", 530);
  option("cursorScrollMargin", 0);
  option("cursorHeight", 1, updateSelection, true);
  option("singleCursorHeightPerLine", true, updateSelection, true);
  option("workTime", 100);
  option("workDelay", 100);
  option("flattenSpans", true, resetModeState, true);
  option("addModeClass", false, resetModeState, true);
  option("pollInterval", 100);
  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
  option("historyEventDelay", 1250);
  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
  option("maxHighlightLength", 10000, resetModeState, true);
  option("moveInputWithCursor", true, function(cm, val) {
	if (!val) cm.display.input.resetPosition();
  });

  option("tabindex", null, function(cm, val) {
	cm.display.input.getField().tabIndex = val || "";
  });
  option("autofocus", null);

  // MODE DEFINITION AND QUERYING

  // Known modes, by name and by MIME
  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  CodeMirror.defineMode = function(name, mode) {
	if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	if (arguments.length > 2)
	  mode.dependencies = Array.prototype.slice.call(arguments, 2);
	modes[name] = mode;
  };

  CodeMirror.defineMIME = function(mime, spec) {
	mimeModes[mime] = spec;
  };

  // Given a MIME type, a {name, ...options} config object, or a name
  // string, return a mode config object.
  CodeMirror.resolveMode = function(spec) {
	if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	  spec = mimeModes[spec];
	} else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	  var found = mimeModes[spec.name];
	  if (typeof found == "string") found = {name: found};
	  spec = createObj(found, spec);
	  spec.name = found.name;
	} else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	  return CodeMirror.resolveMode("application/xml");
	}
	if (typeof spec == "string") return {name: spec};
	else return spec || {name: "null"};
  };

  // Given a mode spec (anything that resolveMode accepts), find and
  // initialize an actual mode object.
  CodeMirror.getMode = function(options, spec) {
	var spec = CodeMirror.resolveMode(spec);
	var mfactory = modes[spec.name];
	if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	var modeObj = mfactory(options, spec);
	if (modeExtensions.hasOwnProperty(spec.name)) {
	  var exts = modeExtensions[spec.name];
	  for (var prop in exts) {
		if (!exts.hasOwnProperty(prop)) continue;
		if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
		modeObj[prop] = exts[prop];
	  }
	}
	modeObj.name = spec.name;
	if (spec.helperType) modeObj.helperType = spec.helperType;
	if (spec.modeProps) for (var prop in spec.modeProps)
	  modeObj[prop] = spec.modeProps[prop];

	return modeObj;
  };

  // Minimal default mode.
  CodeMirror.defineMode("null", function() {
	return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  // This can be used to attach properties to mode objects from
  // outside the actual mode definition.
  var modeExtensions = CodeMirror.modeExtensions = {};
  CodeMirror.extendMode = function(mode, properties) {
	var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	copyObj(properties, exts);
  };

  // EXTENSIONS

  CodeMirror.defineExtension = function(name, func) {
	CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function(name, func) {
	Doc.prototype[name] = func;
  };
  CodeMirror.defineOption = option;

  var initHooks = [];
  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

  var helpers = CodeMirror.helpers = {};
  CodeMirror.registerHelper = function(type, name, value) {
	if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	helpers[type][name] = value;
  };
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	CodeMirror.registerHelper(type, name, value);
	helpers[type]._global.push({pred: predicate, val: value});
  };

  // MODE STATE HANDLING

  // Utility functions for working with state. Exported because nested
  // modes need to do this for their inner modes.

  var copyState = CodeMirror.copyState = function(mode, state) {
	if (state === true) return state;
	if (mode.copyState) return mode.copyState(state);
	var nstate = {};
	for (var n in state) {
	  var val = state[n];
	  if (val instanceof Array) val = val.concat([]);
	  nstate[n] = val;
	}
	return nstate;
  };

  var startState = CodeMirror.startState = function(mode, a1, a2) {
	return mode.startState ? mode.startState(a1, a2) : true;
  };

  // Given a mode and a state (for that mode), find the inner mode and
  // state at the position that the state refers to.
  CodeMirror.innerMode = function(mode, state) {
	while (mode.innerMode) {
	  var info = mode.innerMode(state);
	  if (!info || info.mode == mode) break;
	  state = info.state;
	  mode = info.mode;
	}
	return info || {mode: mode, state: state};
  };

  // STANDARD COMMANDS

  // Commands are parameter-less actions that can be performed on an
  // editor, mostly used for keybindings.
  var commands = CodeMirror.commands = {
	selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	singleSelection: function(cm) {
	  cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	},
	killLine: function(cm) {
	  deleteNearSelection(cm, function(range) {
		if (range.empty()) {
		  var len = getLine(cm.doc, range.head.line).text.length;
		  if (range.head.ch == len && range.head.line < cm.lastLine())
			return {from: range.head, to: Pos(range.head.line + 1, 0)};
		  else
			return {from: range.head, to: Pos(range.head.line, len)};
		} else {
		  return {from: range.from(), to: range.to()};
		}
	  });
	},
	deleteLine: function(cm) {
	  deleteNearSelection(cm, function(range) {
		return {from: Pos(range.from().line, 0),
				to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	  });
	},
	delLineLeft: function(cm) {
	  deleteNearSelection(cm, function(range) {
		return {from: Pos(range.from().line, 0), to: range.from()};
	  });
	},
	delWrappedLineLeft: function(cm) {
	  deleteNearSelection(cm, function(range) {
		var top = cm.charCoords(range.head, "div").top + 5;
		var leftPos = cm.coordsChar({left: 0, top: top}, "div");
		return {from: leftPos, to: range.from()};
	  });
	},
	delWrappedLineRight: function(cm) {
	  deleteNearSelection(cm, function(range) {
		var top = cm.charCoords(range.head, "div").top + 5;
		var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
		return {from: range.from(), to: rightPos };
	  });
	},
	undo: function(cm) {cm.undo();},
	redo: function(cm) {cm.redo();},
	undoSelection: function(cm) {cm.undoSelection();},
	redoSelection: function(cm) {cm.redoSelection();},
	goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	goLineStart: function(cm) {
	  cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
							{origin: "+move", bias: 1});
	},
	goLineStartSmart: function(cm) {
	  cm.extendSelectionsBy(function(range) {
		return lineStartSmart(cm, range.head);
	  }, {origin: "+move", bias: 1});
	},
	goLineEnd: function(cm) {
	  cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
							{origin: "+move", bias: -1});
	},
	goLineRight: function(cm) {
	  cm.extendSelectionsBy(function(range) {
		var top = cm.charCoords(range.head, "div").top + 5;
		return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	  }, sel_move);
	},
	goLineLeft: function(cm) {
	  cm.extendSelectionsBy(function(range) {
		var top = cm.charCoords(range.head, "div").top + 5;
		return cm.coordsChar({left: 0, top: top}, "div");
	  }, sel_move);
	},
	goLineLeftSmart: function(cm) {
	  cm.extendSelectionsBy(function(range) {
		var top = cm.charCoords(range.head, "div").top + 5;
		var pos = cm.coordsChar({left: 0, top: top}, "div");
		if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
		return pos;
	  }, sel_move);
	},
	goLineUp: function(cm) {cm.moveV(-1, "line");},
	goLineDown: function(cm) {cm.moveV(1, "line");},
	goPageUp: function(cm) {cm.moveV(-1, "page");},
	goPageDown: function(cm) {cm.moveV(1, "page");},
	goCharLeft: function(cm) {cm.moveH(-1, "char");},
	goCharRight: function(cm) {cm.moveH(1, "char");},
	goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	goColumnRight: function(cm) {cm.moveH(1, "column");},
	goWordLeft: function(cm) {cm.moveH(-1, "word");},
	goGroupRight: function(cm) {cm.moveH(1, "group");},
	goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	goWordRight: function(cm) {cm.moveH(1, "word");},
	delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	delCharAfter: function(cm) {cm.deleteH(1, "char");},
	delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	delWordAfter: function(cm) {cm.deleteH(1, "word");},
	delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	indentAuto: function(cm) {cm.indentSelection("smart");},
	indentMore: function(cm) {cm.indentSelection("add");},
	indentLess: function(cm) {cm.indentSelection("subtract");},
	insertTab: function(cm) {cm.replaceSelection("\t");},
	insertSoftTab: function(cm) {
	  var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	  for (var i = 0; i < ranges.length; i++) {
		var pos = ranges[i].from();
		var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
		spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
	  }
	  cm.replaceSelections(spaces);
	},
	defaultTab: function(cm) {
	  if (cm.somethingSelected()) cm.indentSelection("add");
	  else cm.execCommand("insertTab");
	},
	transposeChars: function(cm) {
	  runInOp(cm, function() {
		var ranges = cm.listSelections(), newSel = [];
		for (var i = 0; i < ranges.length; i++) {
		  var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
		  if (line) {
			if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
			if (cur.ch > 0) {
			  cur = new Pos(cur.line, cur.ch + 1);
			  cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
							  Pos(cur.line, cur.ch - 2), cur, "+transpose");
			} else if (cur.line > cm.doc.first) {
			  var prev = getLine(cm.doc, cur.line - 1).text;
			  if (prev)
				cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
								prev.charAt(prev.length - 1),
								Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
			}
		  }
		  newSel.push(new Range(cur, cur));
		}
		cm.setSelections(newSel);
	  });
	},
	newlineAndIndent: function(cm) {
	  runInOp(cm, function() {
		var len = cm.listSelections().length;
		for (var i = 0; i < len; i++) {
		  var range = cm.listSelections()[i];
		  cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input");
		  cm.indentLine(range.from().line + 1, null, true);
		  ensureCursorVisible(cm);
		}
	  });
	},
	toggleOverwrite: function(cm) {cm.toggleOverwrite();}
  };


  // STANDARD KEYMAPS

  var keyMap = CodeMirror.keyMap = {};

  keyMap.basic = {
	"Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	"End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	"Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	"Tab": "defaultTab", "Shift-Tab": "indentAuto",
	"Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	"Esc": "singleSelection"
  };
  // Note that the save and find-related commands aren't defined by
  // default. User code or addons can define them. Unknown commands
  // are simply ignored.
  keyMap.pcDefault = {
	"Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	"Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	"Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	"Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	"Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	"Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	"Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	fallthrough: "basic"
  };
  // Very basic readline/emacs-style bindings, which are standard on Mac.
  keyMap.emacsy = {
	"Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	"Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	"Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	"Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
  };
  keyMap.macDefault = {
	"Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	"Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	"Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	"Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	"Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	"Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	"Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	fallthrough: ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

  // KEYMAP DISPATCH

  function normalizeKeyName(name) {
	var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	var alt, ctrl, shift, cmd;
	for (var i = 0; i < parts.length - 1; i++) {
	  var mod = parts[i];
	  if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	  else if (/^a(lt)?$/i.test(mod)) alt = true;
	  else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	  else if (/^s(hift)$/i.test(mod)) shift = true;
	  else throw new Error("Unrecognized modifier name: " + mod);
	}
	if (alt) name = "Alt-" + name;
	if (ctrl) name = "Ctrl-" + name;
	if (cmd) name = "Cmd-" + name;
	if (shift) name = "Shift-" + name;
	return name;
  }

  // This is a kludge to keep keymaps mostly working as raw objects
  // (backwards compatibility) while at the same time support features
  // like normalization and multi-stroke key bindings. It compiles a
  // new normalized keymap, and then updates the old object to reflect
  // this.
  CodeMirror.normalizeKeyMap = function(keymap) {
	var copy = {};
	for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	  var value = keymap[keyname];
	  if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	  if (value == "...") { delete keymap[keyname]; continue; }

	  var keys = map(keyname.split(" "), normalizeKeyName);
	  for (var i = 0; i < keys.length; i++) {
		var val, name;
		if (i == keys.length - 1) {
		  name = keys.join(" ");
		  val = value;
		} else {
		  name = keys.slice(0, i + 1).join(" ");
		  val = "...";
		}
		var prev = copy[name];
		if (!prev) copy[name] = val;
		else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	  }
	  delete keymap[keyname];
	}
	for (var prop in copy) keymap[prop] = copy[prop];
	return keymap;
  };

  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	map = getKeyMap(map);
	var found = map.call ? map.call(key, context) : map[key];
	if (found === false) return "nothing";
	if (found === "...") return "multi";
	if (found != null && handle(found)) return "handled";

	if (map.fallthrough) {
	  if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
		return lookupKey(key, map.fallthrough, handle, context);
	  for (var i = 0; i < map.fallthrough.length; i++) {
		var result = lookupKey(key, map.fallthrough[i], handle, context);
		if (result) return result;
	  }
	}
  };

  // Modifier key presses don't count as 'real' key presses for the
  // purpose of keymap fallthrough.
  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	var name = typeof value == "string" ? value : keyNames[value.keyCode];
	return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
  };

  // Look up the name of a key as indicated by an event object.
  var keyName = CodeMirror.keyName = function(event, noShift) {
	if (presto && event.keyCode == 34 && event["char"]) return false;
	var base = keyNames[event.keyCode], name = base;
	if (name == null || event.altGraphKey) return false;
	if (event.altKey && base != "Alt") name = "Alt-" + name;
	if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	return name;
  };

  function getKeyMap(val) {
	return typeof val == "string" ? keyMap[val] : val;
  }

  // FROMTEXTAREA

  CodeMirror.fromTextArea = function(textarea, options) {
	options = options ? copyObj(options) : {};
	options.value = textarea.value;
	if (!options.tabindex && textarea.tabIndex)
	  options.tabindex = textarea.tabIndex;
	if (!options.placeholder && textarea.placeholder)
	  options.placeholder = textarea.placeholder;
	// Set autofocus to true if this textarea is focused, or if it has
	// autofocus and no other element is focused.
	if (options.autofocus == null) {
	  var hasFocus = activeElt();
	  options.autofocus = hasFocus == textarea ||
		textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	}

	function save() {textarea.value = cm.getValue();}
	if (textarea.form) {
	  on(textarea.form, "submit", save);
	  // Deplorable hack to make the submit method do the right thing.
	  if (!options.leaveSubmitMethodAlone) {
		var form = textarea.form, realSubmit = form.submit;
		try {
		  var wrappedSubmit = form.submit = function() {
			save();
			form.submit = realSubmit;
			form.submit();
			form.submit = wrappedSubmit;
		  };
		} catch(e) {}
	  }
	}

	options.finishInit = function(cm) {
	  cm.save = save;
	  cm.getTextArea = function() { return textarea; };
	  cm.toTextArea = function() {
		cm.toTextArea = isNaN; // Prevent this from being ran twice
		save();
		textarea.parentNode.removeChild(cm.getWrapperElement());
		textarea.style.display = "";
		if (textarea.form) {
		  off(textarea.form, "submit", save);
		  if (typeof textarea.form.submit == "function")
			textarea.form.submit = realSubmit;
		}
	  };
	};

	textarea.style.display = "none";
	var cm = CodeMirror(function(node) {
	  textarea.parentNode.insertBefore(node, textarea.nextSibling);
	}, options);
	return cm;
  };

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	this.pos = this.start = 0;
	this.string = string;
	this.tabSize = tabSize || 8;
	this.lastColumnPos = this.lastColumnValue = 0;
	this.lineStart = 0;
  };

  StringStream.prototype = {
	eol: function() {return this.pos >= this.string.length;},
	sol: function() {return this.pos == this.lineStart;},
	peek: function() {return this.string.charAt(this.pos) || undefined;},
	next: function() {
	  if (this.pos < this.string.length)
		return this.string.charAt(this.pos++);
	},
	eat: function(match) {
	  var ch = this.string.charAt(this.pos);
	  if (typeof match == "string") var ok = ch == match;
	  else var ok = ch && (match.test ? match.test(ch) : match(ch));
	  if (ok) {++this.pos; return ch;}
	},
	eatWhile: function(match) {
	  var start = this.pos;
	  while (this.eat(match)){}
	  return this.pos > start;
	},
	eatSpace: function() {
	  var start = this.pos;
	  while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	  return this.pos > start;
	},
	skipToEnd: function() {this.pos = this.string.length;},
	skipTo: function(ch) {
	  var found = this.string.indexOf(ch, this.pos);
	  if (found > -1) {this.pos = found; return true;}
	},
	backUp: function(n) {this.pos -= n;},
	column: function() {
	  if (this.lastColumnPos < this.start) {
		this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
		this.lastColumnPos = this.start;
	  }
	  return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	},
	indentation: function() {
	  return countColumn(this.string, null, this.tabSize) -
		(this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	},
	match: function(pattern, consume, caseInsensitive) {
	  if (typeof pattern == "string") {
		var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
		var substr = this.string.substr(this.pos, pattern.length);
		if (cased(substr) == cased(pattern)) {
		  if (consume !== false) this.pos += pattern.length;
		  return true;
		}
	  } else {
		var match = this.string.slice(this.pos).match(pattern);
		if (match && match.index > 0) return null;
		if (match && consume !== false) this.pos += match[0].length;
		return match;
	  }
	},
	current: function(){return this.string.slice(this.start, this.pos);},
	hideFirstChars: function(n, inner) {
	  this.lineStart += n;
	  try { return inner(); }
	  finally { this.lineStart -= n; }
	}
  };

  // TEXTMARKERS

  // Created with markText and setBookmark methods. A TextMarker is a
  // handle that can be used to clear or find a marked position in the
  // document. Line objects hold arrays (markedSpans) containing
  // {from, to, marker} object pointing to such marker objects, and
  // indicating that such a marker is present on that line. Multiple
  // lines may point to the same marker when it spans across lines.
  // The spans will have null for their from/to properties when the
  // marker continues beyond the start/end of the line. Markers have
  // links back to the lines they currently touch.

  var nextMarkerId = 0;

  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	this.lines = [];
	this.type = type;
	this.doc = doc;
	this.id = ++nextMarkerId;
  };
  eventMixin(TextMarker);

  // Clear the marker.
  TextMarker.prototype.clear = function() {
	if (this.explicitlyCleared) return;
	var cm = this.doc.cm, withOp = cm && !cm.curOp;
	if (withOp) startOperation(cm);
	if (hasHandler(this, "clear")) {
	  var found = this.find();
	  if (found) signalLater(this, "clear", found.from, found.to);
	}
	var min = null, max = null;
	for (var i = 0; i < this.lines.length; ++i) {
	  var line = this.lines[i];
	  var span = getMarkedSpanFor(line.markedSpans, this);
	  if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	  else if (cm) {
		if (span.to != null) max = lineNo(line);
		if (span.from != null) min = lineNo(line);
	  }
	  line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	  if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
		updateLineHeight(line, textHeight(cm.display));
	}
	if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	  var visual = visualLine(this.lines[i]), len = lineLength(visual);
	  if (len > cm.display.maxLineLength) {
		cm.display.maxLine = visual;
		cm.display.maxLineLength = len;
		cm.display.maxLineChanged = true;
	  }
	}

	if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	this.lines.length = 0;
	this.explicitlyCleared = true;
	if (this.atomic && this.doc.cantEdit) {
	  this.doc.cantEdit = false;
	  if (cm) reCheckSelection(cm.doc);
	}
	if (cm) signalLater(cm, "markerCleared", cm, this);
	if (withOp) endOperation(cm);
	if (this.parent) this.parent.clear();
  };

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  TextMarker.prototype.find = function(side, lineObj) {
	if (side == null && this.type == "bookmark") side = 1;
	var from, to;
	for (var i = 0; i < this.lines.length; ++i) {
	  var line = this.lines[i];
	  var span = getMarkedSpanFor(line.markedSpans, this);
	  if (span.from != null) {
		from = Pos(lineObj ? line : lineNo(line), span.from);
		if (side == -1) return from;
	  }
	  if (span.to != null) {
		to = Pos(lineObj ? line : lineNo(line), span.to);
		if (side == 1) return to;
	  }
	}
	return from && {from: from, to: to};
  };

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  TextMarker.prototype.changed = function() {
	var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	if (!pos || !cm) return;
	runInOp(cm, function() {
	  var line = pos.line, lineN = lineNo(pos.line);
	  var view = findViewForLine(cm, lineN);
	  if (view) {
		clearLineMeasurementCacheFor(view);
		cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	  }
	  cm.curOp.updateMaxLine = true;
	  if (!lineIsHidden(widget.doc, line) && widget.height != null) {
		var oldHeight = widget.height;
		widget.height = null;
		var dHeight = widgetHeight(widget) - oldHeight;
		if (dHeight)
		  updateLineHeight(line, line.height + dHeight);
	  }
	});
  };

  TextMarker.prototype.attachLine = function(line) {
	if (!this.lines.length && this.doc.cm) {
	  var op = this.doc.cm.curOp;
	  if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
		(op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	}
	this.lines.push(line);
  };
  TextMarker.prototype.detachLine = function(line) {
	this.lines.splice(indexOf(this.lines, line), 1);
	if (!this.lines.length && this.doc.cm) {
	  var op = this.doc.cm.curOp;
	  (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	}
  };

  // Collapsed markers have unique ids, in order to be able to order
  // them, which is needed for uniquely determining an outer marker
  // when they overlap (they may nest, but not partially overlap).
  var nextMarkerId = 0;

  // Create a marker, wire it up to the right lines, and
  function markText(doc, from, to, options, type) {
	// Shared markers (across linked documents) are handled separately
	// (markTextShared will call out to this again, once per
	// document).
	if (options && options.shared) return markTextShared(doc, from, to, options, type);
	// Ensure we are in an operation.
	if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

	var marker = new TextMarker(doc, type), diff = cmp(from, to);
	if (options) copyObj(options, marker, false);
	// Don't connect empty markers unless clearWhenEmpty is false
	if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	  return marker;
	if (marker.replacedWith) {
	  // Showing up as a widget implies collapsed (widget replaces text)
	  marker.collapsed = true;
	  marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	  if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	  if (options.insertLeft) marker.widgetNode.insertLeft = true;
	}
	if (marker.collapsed) {
	  if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
		  from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
		throw new Error("Inserting collapsed marker partially overlapping an existing one");
	  sawCollapsedSpans = true;
	}

	if (marker.addToHistory)
	  addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

	var curLine = from.line, cm = doc.cm, updateMaxLine;
	doc.iter(curLine, to.line + 1, function(line) {
	  if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
		updateMaxLine = true;
	  if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	  addMarkedSpan(line, new MarkedSpan(marker,
										 curLine == from.line ? from.ch : null,
										 curLine == to.line ? to.ch : null));
	  ++curLine;
	});
	// lineIsHidden depends on the presence of the spans, so needs a second pass
	if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	  if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	});

	if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

	if (marker.readOnly) {
	  sawReadOnlySpans = true;
	  if (doc.history.done.length || doc.history.undone.length)
		doc.clearHistory();
	}
	if (marker.collapsed) {
	  marker.id = ++nextMarkerId;
	  marker.atomic = true;
	}
	if (cm) {
	  // Sync editor state
	  if (updateMaxLine) cm.curOp.updateMaxLine = true;
	  if (marker.collapsed)
		regChange(cm, from.line, to.line + 1);
	  else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
		for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	  if (marker.atomic) reCheckSelection(cm.doc);
	  signalLater(cm, "markerAdded", cm, marker);
	}
	return marker;
  }

  // SHARED TEXTMARKERS

  // A shared marker spans multiple linked documents. It is
  // implemented as a meta-marker-object controlling multiple normal
  // markers.
  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	this.markers = markers;
	this.primary = primary;
	for (var i = 0; i < markers.length; ++i)
	  markers[i].parent = this;
  };
  eventMixin(SharedTextMarker);

  SharedTextMarker.prototype.clear = function() {
	if (this.explicitlyCleared) return;
	this.explicitlyCleared = true;
	for (var i = 0; i < this.markers.length; ++i)
	  this.markers[i].clear();
	signalLater(this, "clear");
  };
  SharedTextMarker.prototype.find = function(side, lineObj) {
	return this.primary.find(side, lineObj);
  };

  function markTextShared(doc, from, to, options, type) {
	options = copyObj(options);
	options.shared = false;
	var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	var widget = options.widgetNode;
	linkedDocs(doc, function(doc) {
	  if (widget) options.widgetNode = widget.cloneNode(true);
	  markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	  for (var i = 0; i < doc.linked.length; ++i)
		if (doc.linked[i].isParent) return;
	  primary = lst(markers);
	});
	return new SharedTextMarker(markers, primary);
  }

  function findSharedMarkers(doc) {
	return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
						 function(m) { return m.parent; });
  }

  function copySharedMarkers(doc, markers) {
	for (var i = 0; i < markers.length; i++) {
	  var marker = markers[i], pos = marker.find();
	  var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	  if (cmp(mFrom, mTo)) {
		var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
		marker.markers.push(subMark);
		subMark.parent = marker;
	  }
	}
  }

  function detachSharedMarkers(markers) {
	for (var i = 0; i < markers.length; i++) {
	  var marker = markers[i], linked = [marker.primary.doc];;
	  linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	  for (var j = 0; j < marker.markers.length; j++) {
		var subMarker = marker.markers[j];
		if (indexOf(linked, subMarker.doc) == -1) {
		  subMarker.parent = null;
		  marker.markers.splice(j--, 1);
		}
	  }
	}
  }

  // TEXTMARKER SPANS

  function MarkedSpan(marker, from, to) {
	this.marker = marker;
	this.from = from; this.to = to;
  }

  // Search an array of spans for a span matching the given marker.
  function getMarkedSpanFor(spans, marker) {
	if (spans) for (var i = 0; i < spans.length; ++i) {
	  var span = spans[i];
	  if (span.marker == marker) return span;
	}
  }
  // Remove a span from an array, returning undefined if no spans are
  // left (we don't store arrays for lines without spans).
  function removeMarkedSpan(spans, span) {
	for (var r, i = 0; i < spans.length; ++i)
	  if (spans[i] != span) (r || (r = [])).push(spans[i]);
	return r;
  }
  // Add a span to a line.
  function addMarkedSpan(line, span) {
	line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	span.marker.attachLine(line);
  }

  // Used for the algorithm that adjusts markers for a change in the
  // document. These functions cut an array of spans at a given
  // character position, returning an array of remaining chunks (or
  // undefined if nothing remains).
  function markedSpansBefore(old, startCh, isInsert) {
	if (old) for (var i = 0, nw; i < old.length; ++i) {
	  var span = old[i], marker = span.marker;
	  var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	  if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
		var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
		(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	  }
	}
	return nw;
  }
  function markedSpansAfter(old, endCh, isInsert) {
	if (old) for (var i = 0, nw; i < old.length; ++i) {
	  var span = old[i], marker = span.marker;
	  var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	  if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
		var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
		(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
											  span.to == null ? null : span.to - endCh));
	  }
	}
	return nw;
  }

  // Given a change object, compute the new set of marker spans that
  // cover the line in which the change took place. Removes spans
  // entirely within the change, reconnects spans belonging to the
  // same marker that appear on both sides of the change, and cuts off
  // spans partially within the change. Returns an array of span
  // arrays with one element for each line in (after) the change.
  function stretchSpansOverChange(doc, change) {
	if (change.full) return null;
	var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	if (!oldFirst && !oldLast) return null;

	var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	// Get the spans that 'stick out' on both sides
	var first = markedSpansBefore(oldFirst, startCh, isInsert);
	var last = markedSpansAfter(oldLast, endCh, isInsert);

	// Next, merge those two ends
	var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	if (first) {
	  // Fix up .to properties of first
	  for (var i = 0; i < first.length; ++i) {
		var span = first[i];
		if (span.to == null) {
		  var found = getMarkedSpanFor(last, span.marker);
		  if (!found) span.to = startCh;
		  else if (sameLine) span.to = found.to == null ? null : found.to + offset;
		}
	  }
	}
	if (last) {
	  // Fix up .from in last (or move them into first in case of sameLine)
	  for (var i = 0; i < last.length; ++i) {
		var span = last[i];
		if (span.to != null) span.to += offset;
		if (span.from == null) {
		  var found = getMarkedSpanFor(first, span.marker);
		  if (!found) {
			span.from = offset;
			if (sameLine) (first || (first = [])).push(span);
		  }
		} else {
		  span.from += offset;
		  if (sameLine) (first || (first = [])).push(span);
		}
	  }
	}
	// Make sure we didn't create any zero-length spans
	if (first) first = clearEmptySpans(first);
	if (last && last != first) last = clearEmptySpans(last);

	var newMarkers = [first];
	if (!sameLine) {
	  // Fill gap with whole-line-spans
	  var gap = change.text.length - 2, gapMarkers;
	  if (gap > 0 && first)
		for (var i = 0; i < first.length; ++i)
		  if (first[i].to == null)
			(gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	  for (var i = 0; i < gap; ++i)
		newMarkers.push(gapMarkers);
	  newMarkers.push(last);
	}
	return newMarkers;
  }

  // Remove spans that are empty and don't have a clearWhenEmpty
  // option of false.
  function clearEmptySpans(spans) {
	for (var i = 0; i < spans.length; ++i) {
	  var span = spans[i];
	  if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
		spans.splice(i--, 1);
	}
	if (!spans.length) return null;
	return spans;
  }

  // Used for un/re-doing changes from the history. Combines the
  // result of computing the existing spans with the set of spans that
  // existed in the history (so that deleting around a span and then
  // undoing brings back the span).
  function mergeOldSpans(doc, change) {
	var old = getOldSpans(doc, change);
	var stretched = stretchSpansOverChange(doc, change);
	if (!old) return stretched;
	if (!stretched) return old;

	for (var i = 0; i < old.length; ++i) {
	  var oldCur = old[i], stretchCur = stretched[i];
	  if (oldCur && stretchCur) {
		spans: for (var j = 0; j < stretchCur.length; ++j) {
		  var span = stretchCur[j];
		  for (var k = 0; k < oldCur.length; ++k)
			if (oldCur[k].marker == span.marker) continue spans;
		  oldCur.push(span);
		}
	  } else if (stretchCur) {
		old[i] = stretchCur;
	  }
	}
	return old;
  }

  // Used to 'clip' out readOnly ranges when making a change.
  function removeReadOnlyRanges(doc, from, to) {
	var markers = null;
	doc.iter(from.line, to.line + 1, function(line) {
	  if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
		var mark = line.markedSpans[i].marker;
		if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
		  (markers || (markers = [])).push(mark);
	  }
	});
	if (!markers) return null;
	var parts = [{from: from, to: to}];
	for (var i = 0; i < markers.length; ++i) {
	  var mk = markers[i], m = mk.find(0);
	  for (var j = 0; j < parts.length; ++j) {
		var p = parts[j];
		if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
		var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
		if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
		  newParts.push({from: p.from, to: m.from});
		if (dto > 0 || !mk.inclusiveRight && !dto)
		  newParts.push({from: m.to, to: p.to});
		parts.splice.apply(parts, newParts);
		j += newParts.length - 1;
	  }
	}
	return parts;
  }

  // Connect or disconnect spans from a line.
  function detachMarkedSpans(line) {
	var spans = line.markedSpans;
	if (!spans) return;
	for (var i = 0; i < spans.length; ++i)
	  spans[i].marker.detachLine(line);
	line.markedSpans = null;
  }
  function attachMarkedSpans(line, spans) {
	if (!spans) return;
	for (var i = 0; i < spans.length; ++i)
	  spans[i].marker.attachLine(line);
	line.markedSpans = spans;
  }

  // Helpers used when computing which overlapping collapsed span
  // counts as the larger one.
  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

  // Returns a number indicating which of two overlapping collapsed
  // spans is larger (and thus includes the other). Falls back to
  // comparing ids when the spans cover exactly the same range.
  function compareCollapsedMarkers(a, b) {
	var lenDiff = a.lines.length - b.lines.length;
	if (lenDiff != 0) return lenDiff;
	var aPos = a.find(), bPos = b.find();
	var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	if (fromCmp) return -fromCmp;
	var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	if (toCmp) return toCmp;
	return b.id - a.id;
  }

  // Find out whether a line ends or starts in a collapsed span. If
  // so, return the marker for that span.
  function collapsedSpanAtSide(line, start) {
	var sps = sawCollapsedSpans && line.markedSpans, found;
	if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	  sp = sps[i];
	  if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
		  (!found || compareCollapsedMarkers(found, sp.marker) < 0))
		found = sp.marker;
	}
	return found;
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

  // Test whether there exists a collapsed span that partially
  // overlaps (covers the start or end, but not both) of a new span.
  // Such overlap is not allowed.
  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	var line = getLine(doc, lineNo);
	var sps = sawCollapsedSpans && line.markedSpans;
	if (sps) for (var i = 0; i < sps.length; ++i) {
	  var sp = sps[i];
	  if (!sp.marker.collapsed) continue;
	  var found = sp.marker.find(0);
	  var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	  var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	  if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	  if (fromCmp <= 0 && (cmp(found.to, from) > 0 || (sp.marker.inclusiveRight && marker.inclusiveLeft)) ||
		  fromCmp >= 0 && (cmp(found.from, to) < 0 || (sp.marker.inclusiveLeft && marker.inclusiveRight)))
		return true;
	}
  }

  // A visual line is a line as drawn on the screen. Folding, for
  // example, can cause multiple logical lines to appear on the same
  // visual line. This finds the start of the visual line that the
  // given line is part of (usually that is the line itself).
  function visualLine(line) {
	var merged;
	while (merged = collapsedSpanAtStart(line))
	  line = merged.find(-1, true).line;
	return line;
  }

  // Returns an array of logical lines that continue the visual line
  // started by the argument, or undefined if there are no such lines.
  function visualLineContinued(line) {
	var merged, lines;
	while (merged = collapsedSpanAtEnd(line)) {
	  line = merged.find(1, true).line;
	  (lines || (lines = [])).push(line);
	}
	return lines;
  }

  // Get the line number of the start of the visual line that the
  // given line number is part of.
  function visualLineNo(doc, lineN) {
	var line = getLine(doc, lineN), vis = visualLine(line);
	if (line == vis) return lineN;
	return lineNo(vis);
  }
  // Get the line number of the start of the next visual line after
  // the given line.
  function visualLineEndNo(doc, lineN) {
	if (lineN > doc.lastLine()) return lineN;
	var line = getLine(doc, lineN), merged;
	if (!lineIsHidden(doc, line)) return lineN;
	while (merged = collapsedSpanAtEnd(line))
	  line = merged.find(1, true).line;
	return lineNo(line) + 1;
  }

  // Compute whether a line is hidden. Lines count as hidden when they
  // are part of a visual line that starts with another line, or when
  // they are entirely covered by collapsed, non-widget span.
  function lineIsHidden(doc, line) {
	var sps = sawCollapsedSpans && line.markedSpans;
	if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	  sp = sps[i];
	  if (!sp.marker.collapsed) continue;
	  if (sp.from == null) return true;
	  if (sp.marker.widgetNode) continue;
	  if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
		return true;
	}
  }
  function lineIsHiddenInner(doc, line, span) {
	if (span.to == null) {
	  var end = span.marker.find(1, true);
	  return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	}
	if (span.marker.inclusiveRight && span.to == line.text.length)
	  return true;
	for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	  sp = line.markedSpans[i];
	  if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
		  (sp.to == null || sp.to != span.from) &&
		  (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
		  lineIsHiddenInner(doc, line, sp)) return true;
	}
  }

  // LINE WIDGETS

  // Line widgets are block elements displayed above or below a line.

  var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
	if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	  this[opt] = options[opt];
	this.doc = doc;
	this.node = node;
  };
  eventMixin(LineWidget);

  function adjustScrollWhenAboveVisible(cm, line, diff) {
	if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	  addToScrollPos(cm, null, diff);
  }

  LineWidget.prototype.clear = function() {
	var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	if (no == null || !ws) return;
	for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	if (!ws.length) line.widgets = null;
	var height = widgetHeight(this);
	updateLineHeight(line, Math.max(0, line.height - height));
	if (cm) runInOp(cm, function() {
	  adjustScrollWhenAboveVisible(cm, line, -height);
	  regLineChange(cm, no, "widget");
	});
  };
  LineWidget.prototype.changed = function() {
	var oldH = this.height, cm = this.doc.cm, line = this.line;
	this.height = null;
	var diff = widgetHeight(this) - oldH;
	if (!diff) return;
	updateLineHeight(line, line.height + diff);
	if (cm) runInOp(cm, function() {
	  cm.curOp.forceUpdate = true;
	  adjustScrollWhenAboveVisible(cm, line, diff);
	});
  };

  function widgetHeight(widget) {
	if (widget.height != null) return widget.height;
	var cm = widget.doc.cm;
	if (!cm) return 0;
	if (!contains(document.body, widget.node)) {
	  var parentStyle = "position: relative;";
	  if (widget.coverGutter)
		parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
	  if (widget.noHScroll)
		parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
	  removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	}
	return widget.height = widget.node.offsetHeight;
  }

  function addLineWidget(doc, handle, node, options) {
	var widget = new LineWidget(doc, node, options);
	var cm = doc.cm;
	if (cm && widget.noHScroll) cm.display.alignWidgets = true;
	changeLine(doc, handle, "widget", function(line) {
	  var widgets = line.widgets || (line.widgets = []);
	  if (widget.insertAt == null) widgets.push(widget);
	  else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	  widget.line = line;
	  if (cm && !lineIsHidden(doc, line)) {
		var aboveVisible = heightAtLine(line) < doc.scrollTop;
		updateLineHeight(line, line.height + widgetHeight(widget));
		if (aboveVisible) addToScrollPos(cm, null, widget.height);
		cm.curOp.forceUpdate = true;
	  }
	  return true;
	});
	return widget;
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	this.text = text;
	attachMarkedSpans(this, markedSpans);
	this.height = estimateHeight ? estimateHeight(this) : 1;
  };
  eventMixin(Line);
  Line.prototype.lineNo = function() { return lineNo(this); };

  // Change the content (text, markers) of a line. Automatically
  // invalidates cached information and tries to re-estimate the
  // line's height.
  function updateLine(line, text, markedSpans, estimateHeight) {
	line.text = text;
	if (line.stateAfter) line.stateAfter = null;
	if (line.styles) line.styles = null;
	if (line.order != null) line.order = null;
	detachMarkedSpans(line);
	attachMarkedSpans(line, markedSpans);
	var estHeight = estimateHeight ? estimateHeight(line) : 1;
	if (estHeight != line.height) updateLineHeight(line, estHeight);
  }

  // Detach a line from the document tree and its markers.
  function cleanUpLine(line) {
	line.parent = null;
	detachMarkedSpans(line);
  }

  function extractLineClasses(type, output) {
	if (type) for (;;) {
	  var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	  if (!lineClass) break;
	  type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	  var prop = lineClass[1] ? "bgClass" : "textClass";
	  if (output[prop] == null)
		output[prop] = lineClass[2];
	  else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
		output[prop] += " " + lineClass[2];
	}
	return type;
  }

  function callBlankLine(mode, state) {
	if (mode.blankLine) return mode.blankLine(state);
	if (!mode.innerMode) return;
	var inner = CodeMirror.innerMode(mode, state);
	if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
  }

  function readToken(mode, stream, state, inner) {
	for (var i = 0; i < 10; i++) {
	  if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	  var style = mode.token(stream, state);
	  if (stream.pos > stream.start) return style;
	}
	throw new Error("Mode " + mode.name + " failed to advance stream.");
  }

  // Utility for getTokenAt and getLineTokens
  function takeToken(cm, pos, precise, asArray) {
	function getObj(copy) {
	  return {start: stream.start, end: stream.pos,
			  string: stream.current(),
			  type: style || null,
			  state: copy ? copyState(doc.mode, state) : state};
	}

	var doc = cm.doc, mode = doc.mode, style;
	pos = clipPos(doc, pos);
	var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	if (asArray) tokens = [];
	while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	  stream.start = stream.pos;
	  style = readToken(mode, stream, state);
	  if (asArray) tokens.push(getObj(true));
	}
	return asArray ? tokens : getObj();
  }

  // Run the given mode's parser over a line, calling f for each token.
  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	var flattenSpans = mode.flattenSpans;
	if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	var curStart = 0, curStyle = null;
	var stream = new StringStream(text, cm.options.tabSize), style;
	var inner = cm.options.addModeClass && [null];
	if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	while (!stream.eol()) {
	  if (stream.pos > cm.options.maxHighlightLength) {
		flattenSpans = false;
		if (forceToEnd) processLine(cm, text, state, stream.pos);
		stream.pos = text.length;
		style = null;
	  } else {
		style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	  }
	  if (inner) {
		var mName = inner[0].name;
		if (mName) style = "m-" + (style ? mName + " " + style : mName);
	  }
	  if (!flattenSpans || curStyle != style) {
		while (curStart < stream.start) {
		  curStart = Math.min(stream.start, curStart + 50000);
		  f(curStart, curStyle);
		}
		curStyle = style;
	  }
	  stream.start = stream.pos;
	}
	while (curStart < stream.pos) {
	  // Webkit seems to refuse to render text nodes longer than 57444 characters
	  var pos = Math.min(stream.pos, curStart + 50000);
	  f(pos, curStyle);
	  curStart = pos;
	}
  }

  // Compute a style array (an array starting with a mode generation
  // -- for invalidation -- followed by pairs of end positions and
  // style strings), which is used to highlight the tokens on the
  // line.
  function highlightLine(cm, line, state, forceToEnd) {
	// A styles array always starts with a number identifying the
	// mode/overlays that it is based on (for easy invalidation).
	var st = [cm.state.modeGen], lineClasses = {};
	// Compute the base array of styles
	runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	  st.push(end, style);
	}, lineClasses, forceToEnd);

	// Run overlays, adjust style array.
	for (var o = 0; o < cm.state.overlays.length; ++o) {
	  var overlay = cm.state.overlays[o], i = 1, at = 0;
	  runMode(cm, line.text, overlay.mode, true, function(end, style) {
		var start = i;
		// Ensure there's a token end at the current position, and that i points at it
		while (at < end) {
		  var i_end = st[i];
		  if (i_end > end)
			st.splice(i, 1, end, st[i+1], i_end);
		  i += 2;
		  at = Math.min(end, i_end);
		}
		if (!style) return;
		if (overlay.opaque) {
		  st.splice(start, i - start, end, "cm-overlay " + style);
		  i = start + 2;
		} else {
		  for (; start < i; start += 2) {
			var cur = st[start+1];
			st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
		  }
		}
	  }, lineClasses);
	}

	return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
  }

  function getLineStyles(cm, line, updateFrontier) {
	if (!line.styles || line.styles[0] != cm.state.modeGen) {
	  var state = getStateBefore(cm, lineNo(line));
	  var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
	  line.stateAfter = state;
	  line.styles = result.styles;
	  if (result.classes) line.styleClasses = result.classes;
	  else if (line.styleClasses) line.styleClasses = null;
	  if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	}
	return line.styles;
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array. Used for lines that
  // aren't currently visible.
  function processLine(cm, text, state, startAt) {
	var mode = cm.doc.mode;
	var stream = new StringStream(text, cm.options.tabSize);
	stream.start = stream.pos = startAt || 0;
	if (text == "") callBlankLine(mode, state);
	while (!stream.eol()) {
	  readToken(mode, stream, state);
	  stream.start = stream.pos;
	}
  }

  // Convert a style as returned by a mode (either null, or a string
  // containing one or more styles) to a CSS style. This is cached,
  // and also looks for line-wide styles.
  var styleToClassCache = {}, styleToClassCacheWithMode = {};
  function interpretTokenStyle(style, options) {
	if (!style || /^\s*$/.test(style)) return null;
	var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	return cache[style] ||
	  (cache[style] = style.replace(/\S+/g, "cm-$&"));
  }

  // Render the DOM representation of the text of a line. Also builds
  // up a 'line map', which points at the DOM nodes that represent
  // specific stretches of text, and is used by the measuring code.
  // The returned object contains the DOM node, this map, and
  // information about line-wide styles that were set by the mode.
  function buildLineContent(cm, lineView) {
	// The padding-right forces the element to have a 'border', which
	// is needed on Webkit to be able to get line-level bounding
	// rectangles for it (in measureChar).
	var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
				   col: 0, pos: 0, cm: cm,
				   splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	lineView.measure = {};

	// Iterate over the logical lines that make up this visual line.
	for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	  var line = i ? lineView.rest[i - 1] : lineView.line, order;
	  builder.pos = 0;
	  builder.addToken = buildToken;
	  // Optionally wire in some hacks into the token-rendering
	  // algorithm, to deal with browser quirks.
	  if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
		builder.addToken = buildTokenBadBidi(builder.addToken, order);
	  builder.map = [];
	  var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	  insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	  if (line.styleClasses) {
		if (line.styleClasses.bgClass)
		  builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
		if (line.styleClasses.textClass)
		  builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	  }

	  // Ensure at least a single node is present, for measuring.
	  if (builder.map.length == 0)
		builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

	  // Store the map and a cache object for the current logical line
	  if (i == 0) {
		lineView.measure.map = builder.map;
		lineView.measure.cache = {};
	  } else {
		(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
		(lineView.measure.caches || (lineView.measure.caches = [])).push({});
	  }
	}

	// See issue #2901
	if (webkit && /\bcm-tab\b/.test(builder.content.lastChild.className))
	  builder.content.className = "cm-tab-wrap-hack";

	signal(cm, "renderLine", cm, lineView.line, builder.pre);
	if (builder.pre.className)
	  builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

	return builder;
  }

  function defaultSpecialCharPlaceholder(ch) {
	var token = elt("span", "\u2022", "cm-invalidchar");
	token.title = "\\u" + ch.charCodeAt(0).toString(16);
	token.setAttribute("aria-label", token.title);
	return token;
  }

  // Build up the DOM representation for a single token, and add it to
  // the line map. Takes care to render special characters separately.
  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	if (!text) return;
	var displayText = builder.splitSpaces ? text.replace(/ {3,}/g, splitSpaces) : text;
	var special = builder.cm.state.specialChars, mustWrap = false;
	if (!special.test(text)) {
	  builder.col += text.length;
	  var content = document.createTextNode(displayText);
	  builder.map.push(builder.pos, builder.pos + text.length, content);
	  if (ie && ie_version < 9) mustWrap = true;
	  builder.pos += text.length;
	} else {
	  var content = document.createDocumentFragment(), pos = 0;
	  while (true) {
		special.lastIndex = pos;
		var m = special.exec(text);
		var skipped = m ? m.index - pos : text.length - pos;
		if (skipped) {
		  var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
		  if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
		  else content.appendChild(txt);
		  builder.map.push(builder.pos, builder.pos + skipped, txt);
		  builder.col += skipped;
		  builder.pos += skipped;
		}
		if (!m) break;
		pos += skipped + 1;
		if (m[0] == "\t") {
		  var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
		  var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
		  txt.setAttribute("role", "presentation");
		  txt.setAttribute("cm-text", "\t");
		  builder.col += tabWidth;
		} else if (m[0] == "\r" || m[0] == "\n") {
		  var txt = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
		  txt.setAttribute("cm-text", m[0]);
		  builder.col += 1;
		} else {
		  var txt = builder.cm.options.specialCharPlaceholder(m[0]);
		  txt.setAttribute("cm-text", m[0]);
		  if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
		  else content.appendChild(txt);
		  builder.col += 1;
		}
		builder.map.push(builder.pos, builder.pos + 1, txt);
		builder.pos++;
	  }
	}
	if (style || startStyle || endStyle || mustWrap || css) {
	  var fullStyle = style || "";
	  if (startStyle) fullStyle += startStyle;
	  if (endStyle) fullStyle += endStyle;
	  var token = elt("span", [content], fullStyle, css);
	  if (title) token.title = title;
	  return builder.content.appendChild(token);
	}
	builder.content.appendChild(content);
  }

  function splitSpaces(old) {
	var out = " ";
	for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
	out += " ";
	return out;
  }

  // Work around nonsense dimensions being reported for stretches of
  // right-to-left text.
  function buildTokenBadBidi(inner, order) {
	return function(builder, text, style, startStyle, endStyle, title, css) {
	  style = style ? style + " cm-force-border" : "cm-force-border";
	  var start = builder.pos, end = start + text.length;
	  for (;;) {
		// Find the part that overlaps with the start of this text
		for (var i = 0; i < order.length; i++) {
		  var part = order[i];
		  if (part.to > start && part.from <= start) break;
		}
		if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
		inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
		startStyle = null;
		text = text.slice(part.to - start);
		start = part.to;
	  }
	};
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	var widget = !ignoreWidget && marker.widgetNode;
	if (widget) builder.map.push(builder.pos, builder.pos + size, widget);
	if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	  if (!widget)
		widget = builder.content.appendChild(document.createElement("span"));
	  widget.setAttribute("cm-marker", marker.id);
	}
	if (widget) {
	  builder.cm.display.input.setUneditable(widget);
	  builder.content.appendChild(widget);
	}
	builder.pos += size;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
	var spans = line.markedSpans, allText = line.text, at = 0;
	if (!spans) {
	  for (var i = 1; i < styles.length; i+=2)
		builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	  return;
	}

	var len = allText.length, pos = 0, i = 1, text = "", style, css;
	var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	for (;;) {
	  if (nextChange == pos) { // Update current marker set
		spanStyle = spanEndStyle = spanStartStyle = title = css = "";
		collapsed = null; nextChange = Infinity;
		var foundBookmarks = [];
		for (var j = 0; j < spans.length; ++j) {
		  var sp = spans[j], m = sp.marker;
		  if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
			foundBookmarks.push(m);
		  } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
			if (sp.to != null && sp.to != pos && nextChange > sp.to) {
			  nextChange = sp.to;
			  spanEndStyle = "";
			}
			if (m.className) spanStyle += " " + m.className;
			if (m.css) css = m.css;
			if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
			if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
			if (m.title && !title) title = m.title;
			if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
			  collapsed = sp;
		  } else if (sp.from > pos && nextChange > sp.from) {
			nextChange = sp.from;
		  }
		}
		if (collapsed && (collapsed.from || 0) == pos) {
		  buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
							 collapsed.marker, collapsed.from == null);
		  if (collapsed.to == null) return;
		  if (collapsed.to == pos) collapsed = false;
		}
		if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j)
		  buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	  }
	  if (pos >= len) break;

	  var upto = Math.min(len, nextChange);
	  while (true) {
		if (text) {
		  var end = pos + text.length;
		  if (!collapsed) {
			var tokenText = end > upto ? text.slice(0, upto - pos) : text;
			builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
							 spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
		  }
		  if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
		  pos = end;
		  spanStartStyle = "";
		}
		text = allText.slice(at, at = styles[i++]);
		style = interpretTokenStyle(styles[i++], builder.cm.options);
	  }
	}
  }

  // DOCUMENT DATA STRUCTURE

  // By default, updates that start and end at the beginning of a line
  // are treated specially, in order to make the association of line
  // widgets and marker elements with the text behave more intuitive.
  function isWholeLineUpdate(doc, change) {
	return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	  (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
  }

  // Perform a change on the document data structure.
  function updateDoc(doc, change, markedSpans, estimateHeight) {
	function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	function update(line, text, spans) {
	  updateLine(line, text, spans, estimateHeight);
	  signalLater(line, "change", line, change);
	}
	function linesFor(start, end) {
	  for (var i = start, result = []; i < end; ++i)
		result.push(new Line(text[i], spansFor(i), estimateHeight));
	  return result;
	}

	var from = change.from, to = change.to, text = change.text;
	var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

	// Adjust the line structure
	if (change.full) {
	  doc.insert(0, linesFor(0, text.length));
	  doc.remove(text.length, doc.size - text.length);
	} else if (isWholeLineUpdate(doc, change)) {
	  // This is a whole-line replace. Treated specially to make
	  // sure line objects move the way they are supposed to.
	  var added = linesFor(0, text.length - 1);
	  update(lastLine, lastLine.text, lastSpans);
	  if (nlines) doc.remove(from.line, nlines);
	  if (added.length) doc.insert(from.line, added);
	} else if (firstLine == lastLine) {
	  if (text.length == 1) {
		update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	  } else {
		var added = linesFor(1, text.length - 1);
		added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
		update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
		doc.insert(from.line + 1, added);
	  }
	} else if (text.length == 1) {
	  update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	  doc.remove(from.line + 1, nlines);
	} else {
	  update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	  update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	  var added = linesFor(1, text.length - 1);
	  if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	  doc.insert(from.line + 1, added);
	}

	signalLater(doc, "change", doc, change);
  }

  // The document is represented as a BTree consisting of leaves, with
  // chunk of lines in them, and branches, with up to ten leaves or
  // other branch nodes below them. The top node is always a branch
  // node, and is the document object itself (meaning it has
  // additional methods and properties).
  //
  // All nodes have parent links. The tree is used both to go from
  // line numbers to line objects, and to go from objects to numbers.
  // It also indexes by height, and is used to convert between height
  // and line object, and to find the total height of the document.
  //
  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

  function LeafChunk(lines) {
	this.lines = lines;
	this.parent = null;
	for (var i = 0, height = 0; i < lines.length; ++i) {
	  lines[i].parent = this;
	  height += lines[i].height;
	}
	this.height = height;
  }

  LeafChunk.prototype = {
	chunkSize: function() { return this.lines.length; },
	// Remove the n lines at offset 'at'.
	removeInner: function(at, n) {
	  for (var i = at, e = at + n; i < e; ++i) {
		var line = this.lines[i];
		this.height -= line.height;
		cleanUpLine(line);
		signalLater(line, "delete");
	  }
	  this.lines.splice(at, n);
	},
	// Helper used to collapse a small branch into a single leaf.
	collapse: function(lines) {
	  lines.push.apply(lines, this.lines);
	},
	// Insert the given array of lines at offset 'at', count them as
	// having the given height.
	insertInner: function(at, lines, height) {
	  this.height += height;
	  this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	  for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	},
	// Used to iterate over a part of the tree.
	iterN: function(at, n, op) {
	  for (var e = at + n; at < e; ++at)
		if (op(this.lines[at])) return true;
	}
  };

  function BranchChunk(children) {
	this.children = children;
	var size = 0, height = 0;
	for (var i = 0; i < children.length; ++i) {
	  var ch = children[i];
	  size += ch.chunkSize(); height += ch.height;
	  ch.parent = this;
	}
	this.size = size;
	this.height = height;
	this.parent = null;
  }

  BranchChunk.prototype = {
	chunkSize: function() { return this.size; },
	removeInner: function(at, n) {
	  this.size -= n;
	  for (var i = 0; i < this.children.length; ++i) {
		var child = this.children[i], sz = child.chunkSize();
		if (at < sz) {
		  var rm = Math.min(n, sz - at), oldHeight = child.height;
		  child.removeInner(at, rm);
		  this.height -= oldHeight - child.height;
		  if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
		  if ((n -= rm) == 0) break;
		  at = 0;
		} else at -= sz;
	  }
	  // If the result is smaller than 25 lines, ensure that it is a
	  // single leaf node.
	  if (this.size - n < 25 &&
		  (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
		var lines = [];
		this.collapse(lines);
		this.children = [new LeafChunk(lines)];
		this.children[0].parent = this;
	  }
	},
	collapse: function(lines) {
	  for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	},
	insertInner: function(at, lines, height) {
	  this.size += lines.length;
	  this.height += height;
	  for (var i = 0; i < this.children.length; ++i) {
		var child = this.children[i], sz = child.chunkSize();
		if (at <= sz) {
		  child.insertInner(at, lines, height);
		  if (child.lines && child.lines.length > 50) {
			while (child.lines.length > 50) {
			  var spilled = child.lines.splice(child.lines.length - 25, 25);
			  var newleaf = new LeafChunk(spilled);
			  child.height -= newleaf.height;
			  this.children.splice(i + 1, 0, newleaf);
			  newleaf.parent = this;
			}
			this.maybeSpill();
		  }
		  break;
		}
		at -= sz;
	  }
	},
	// When a node has grown, check whether it should be split.
	maybeSpill: function() {
	  if (this.children.length <= 10) return;
	  var me = this;
	  do {
		var spilled = me.children.splice(me.children.length - 5, 5);
		var sibling = new BranchChunk(spilled);
		if (!me.parent) { // Become the parent node
		  var copy = new BranchChunk(me.children);
		  copy.parent = me;
		  me.children = [copy, sibling];
		  me = copy;
		} else {
		  me.size -= sibling.size;
		  me.height -= sibling.height;
		  var myIndex = indexOf(me.parent.children, me);
		  me.parent.children.splice(myIndex + 1, 0, sibling);
		}
		sibling.parent = me.parent;
	  } while (me.children.length > 10);
	  me.parent.maybeSpill();
	},
	iterN: function(at, n, op) {
	  for (var i = 0; i < this.children.length; ++i) {
		var child = this.children[i], sz = child.chunkSize();
		if (at < sz) {
		  var used = Math.min(n, sz - at);
		  if (child.iterN(at, used, op)) return true;
		  if ((n -= used) == 0) break;
		  at = 0;
		} else at -= sz;
	  }
	}
  };

  var nextDocId = 0;
  var Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
	if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
	if (firstLine == null) firstLine = 0;

	BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	this.first = firstLine;
	this.scrollTop = this.scrollLeft = 0;
	this.cantEdit = false;
	this.cleanGeneration = 1;
	this.frontier = firstLine;
	var start = Pos(firstLine, 0);
	this.sel = simpleSelection(start);
	this.history = new History(null);
	this.id = ++nextDocId;
	this.modeOption = mode;
	this.lineSep = lineSep;

	if (typeof text == "string") text = this.splitLines(text);
	updateDoc(this, {from: start, to: start, text: text});
	setSelection(this, simpleSelection(start), sel_dontScroll);
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
	constructor: Doc,
	// Iterate over the document. Supports two forms -- with only one
	// argument, it calls that for each line in the document. With
	// three, it iterates over the range given by the first two (with
	// the second being non-inclusive).
	iter: function(from, to, op) {
	  if (op) this.iterN(from - this.first, to - from, op);
	  else this.iterN(this.first, this.first + this.size, from);
	},

	// Non-public interface for adding and removing lines.
	insert: function(at, lines) {
	  var height = 0;
	  for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	  this.insertInner(at - this.first, lines, height);
	},
	remove: function(at, n) { this.removeInner(at - this.first, n); },

	// From here, the methods are part of the public interface. Most
	// are also available from CodeMirror (editor) instances.

	getValue: function(lineSep) {
	  var lines = getLines(this, this.first, this.first + this.size);
	  if (lineSep === false) return lines;
	  return lines.join(lineSep || this.lineSeparator());
	},
	setValue: docMethodOp(function(code) {
	  var top = Pos(this.first, 0), last = this.first + this.size - 1;
	  makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
						text: this.splitLines(code), origin: "setValue", full: true}, true);
	  setSelection(this, simpleSelection(top));
	}),
	replaceRange: function(code, from, to, origin) {
	  from = clipPos(this, from);
	  to = to ? clipPos(this, to) : from;
	  replaceRange(this, code, from, to, origin);
	},
	getRange: function(from, to, lineSep) {
	  var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	  if (lineSep === false) return lines;
	  return lines.join(lineSep || this.lineSeparator());
	},

	getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

	getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	getLineNumber: function(line) {return lineNo(line);},

	getLineHandleVisualStart: function(line) {
	  if (typeof line == "number") line = getLine(this, line);
	  return visualLine(line);
	},

	lineCount: function() {return this.size;},
	firstLine: function() {return this.first;},
	lastLine: function() {return this.first + this.size - 1;},

	clipPos: function(pos) {return clipPos(this, pos);},

	getCursor: function(start) {
	  var range = this.sel.primary(), pos;
	  if (start == null || start == "head") pos = range.head;
	  else if (start == "anchor") pos = range.anchor;
	  else if (start == "end" || start == "to" || start === false) pos = range.to();
	  else pos = range.from();
	  return pos;
	},
	listSelections: function() { return this.sel.ranges; },
	somethingSelected: function() {return this.sel.somethingSelected();},

	setCursor: docMethodOp(function(line, ch, options) {
	  setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	}),
	setSelection: docMethodOp(function(anchor, head, options) {
	  setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	}),
	extendSelection: docMethodOp(function(head, other, options) {
	  extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	}),
	extendSelections: docMethodOp(function(heads, options) {
	  extendSelections(this, clipPosArray(this, heads, options));
	}),
	extendSelectionsBy: docMethodOp(function(f, options) {
	  extendSelections(this, map(this.sel.ranges, f), options);
	}),
	setSelections: docMethodOp(function(ranges, primary, options) {
	  if (!ranges.length) return;
	  for (var i = 0, out = []; i < ranges.length; i++)
		out[i] = new Range(clipPos(this, ranges[i].anchor),
						   clipPos(this, ranges[i].head));
	  if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	  setSelection(this, normalizeSelection(out, primary), options);
	}),
	addSelection: docMethodOp(function(anchor, head, options) {
	  var ranges = this.sel.ranges.slice(0);
	  ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	  setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	}),

	getSelection: function(lineSep) {
	  var ranges = this.sel.ranges, lines;
	  for (var i = 0; i < ranges.length; i++) {
		var sel = getBetween(this, ranges[i].from(), ranges[i].to());
		lines = lines ? lines.concat(sel) : sel;
	  }
	  if (lineSep === false) return lines;
	  else return lines.join(lineSep || this.lineSeparator());
	},
	getSelections: function(lineSep) {
	  var parts = [], ranges = this.sel.ranges;
	  for (var i = 0; i < ranges.length; i++) {
		var sel = getBetween(this, ranges[i].from(), ranges[i].to());
		if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator());
		parts[i] = sel;
	  }
	  return parts;
	},
	replaceSelection: function(code, collapse, origin) {
	  var dup = [];
	  for (var i = 0; i < this.sel.ranges.length; i++)
		dup[i] = code;
	  this.replaceSelections(dup, collapse, origin || "+input");
	},
	replaceSelections: docMethodOp(function(code, collapse, origin) {
	  var changes = [], sel = this.sel;
	  for (var i = 0; i < sel.ranges.length; i++) {
		var range = sel.ranges[i];
		changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
	  }
	  var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	  for (var i = changes.length - 1; i >= 0; i--)
		makeChange(this, changes[i]);
	  if (newSel) setSelectionReplaceHistory(this, newSel);
	  else if (this.cm) ensureCursorVisible(this.cm);
	}),
	undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

	setExtending: function(val) {this.extend = val;},
	getExtending: function() {return this.extend;},

	historySize: function() {
	  var hist = this.history, done = 0, undone = 0;
	  for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	  for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	  return {undo: done, redo: undone};
	},
	clearHistory: function() {this.history = new History(this.history.maxGeneration);},

	markClean: function() {
	  this.cleanGeneration = this.changeGeneration(true);
	},
	changeGeneration: function(forceSplit) {
	  if (forceSplit)
		this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	  return this.history.generation;
	},
	isClean: function (gen) {
	  return this.history.generation == (gen || this.cleanGeneration);
	},

	getHistory: function() {
	  return {done: copyHistoryArray(this.history.done),
			  undone: copyHistoryArray(this.history.undone)};
	},
	setHistory: function(histData) {
	  var hist = this.history = new History(this.history.maxGeneration);
	  hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	  hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	},

	addLineClass: docMethodOp(function(handle, where, cls) {
	  return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
		var prop = where == "text" ? "textClass"
				 : where == "background" ? "bgClass"
				 : where == "gutter" ? "gutterClass" : "wrapClass";
		if (!line[prop]) line[prop] = cls;
		else if (classTest(cls).test(line[prop])) return false;
		else line[prop] += " " + cls;
		return true;
	  });
	}),
	removeLineClass: docMethodOp(function(handle, where, cls) {
	  return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
		var prop = where == "text" ? "textClass"
				 : where == "background" ? "bgClass"
				 : where == "gutter" ? "gutterClass" : "wrapClass";
		var cur = line[prop];
		if (!cur) return false;
		else if (cls == null) line[prop] = null;
		else {
		  var found = cur.match(classTest(cls));
		  if (!found) return false;
		  var end = found.index + found[0].length;
		  line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
		}
		return true;
	  });
	}),

	addLineWidget: docMethodOp(function(handle, node, options) {
	  return addLineWidget(this, handle, node, options);
	}),
	removeLineWidget: function(widget) { widget.clear(); },

	markText: function(from, to, options) {
	  return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
	},
	setBookmark: function(pos, options) {
	  var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
					  insertLeft: options && options.insertLeft,
					  clearWhenEmpty: false, shared: options && options.shared,
					  handleMouseEvents: options && options.handleMouseEvents};
	  pos = clipPos(this, pos);
	  return markText(this, pos, pos, realOpts, "bookmark");
	},
	findMarksAt: function(pos) {
	  pos = clipPos(this, pos);
	  var markers = [], spans = getLine(this, pos.line).markedSpans;
	  if (spans) for (var i = 0; i < spans.length; ++i) {
		var span = spans[i];
		if ((span.from == null || span.from <= pos.ch) &&
			(span.to == null || span.to >= pos.ch))
		  markers.push(span.marker.parent || span.marker);
	  }
	  return markers;
	},
	findMarks: function(from, to, filter) {
	  from = clipPos(this, from); to = clipPos(this, to);
	  var found = [], lineNo = from.line;
	  this.iter(from.line, to.line + 1, function(line) {
		var spans = line.markedSpans;
		if (spans) for (var i = 0; i < spans.length; i++) {
		  var span = spans[i];
		  if (!(lineNo == from.line && from.ch > span.to ||
				span.from == null && lineNo != from.line||
				lineNo == to.line && span.from > to.ch) &&
			  (!filter || filter(span.marker)))
			found.push(span.marker.parent || span.marker);
		}
		++lineNo;
	  });
	  return found;
	},
	getAllMarks: function() {
	  var markers = [];
	  this.iter(function(line) {
		var sps = line.markedSpans;
		if (sps) for (var i = 0; i < sps.length; ++i)
		  if (sps[i].from != null) markers.push(sps[i].marker);
	  });
	  return markers;
	},

	posFromIndex: function(off) {
	  var ch, lineNo = this.first;
	  this.iter(function(line) {
		var sz = line.text.length + 1;
		if (sz > off) { ch = off; return true; }
		off -= sz;
		++lineNo;
	  });
	  return clipPos(this, Pos(lineNo, ch));
	},
	indexFromPos: function (coords) {
	  coords = clipPos(this, coords);
	  var index = coords.ch;
	  if (coords.line < this.first || coords.ch < 0) return 0;
	  this.iter(this.first, coords.line, function (line) {
		index += line.text.length + 1;
	  });
	  return index;
	},

	copy: function(copyHistory) {
	  var doc = new Doc(getLines(this, this.first, this.first + this.size),
						this.modeOption, this.first, this.lineSep);
	  doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	  doc.sel = this.sel;
	  doc.extend = false;
	  if (copyHistory) {
		doc.history.undoDepth = this.history.undoDepth;
		doc.setHistory(this.getHistory());
	  }
	  return doc;
	},

	linkedDoc: function(options) {
	  if (!options) options = {};
	  var from = this.first, to = this.first + this.size;
	  if (options.from != null && options.from > from) from = options.from;
	  if (options.to != null && options.to < to) to = options.to;
	  var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
	  if (options.sharedHist) copy.history = this.history;
	  (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	  copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	  copySharedMarkers(copy, findSharedMarkers(this));
	  return copy;
	},
	unlinkDoc: function(other) {
	  if (other instanceof CodeMirror) other = other.doc;
	  if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
		var link = this.linked[i];
		if (link.doc != other) continue;
		this.linked.splice(i, 1);
		other.unlinkDoc(this);
		detachSharedMarkers(findSharedMarkers(this));
		break;
	  }
	  // If the histories were shared, split them again
	  if (other.history == this.history) {
		var splitIds = [other.id];
		linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
		other.history = new History(null);
		other.history.done = copyHistoryArray(this.history.done, splitIds);
		other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	  }
	},
	iterLinkedDocs: function(f) {linkedDocs(this, f);},

	getMode: function() {return this.mode;},
	getEditor: function() {return this.cm;},

	splitLines: function(str) {
	  if (this.lineSep) return str.split(this.lineSep);
	  return splitLinesAuto(str);
	},
	lineSeparator: function() { return this.lineSep || "\n"; }
  });

  // Public alias.
  Doc.prototype.eachLine = Doc.prototype.iter;

  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	CodeMirror.prototype[prop] = (function(method) {
	  return function() {return method.apply(this.doc, arguments);};
	})(Doc.prototype[prop]);

  eventMixin(Doc);

  // Call f for all linked documents.
  function linkedDocs(doc, f, sharedHistOnly) {
	function propagate(doc, skip, sharedHist) {
	  if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
		var rel = doc.linked[i];
		if (rel.doc == skip) continue;
		var shared = sharedHist && rel.sharedHist;
		if (sharedHistOnly && !shared) continue;
		f(rel.doc, shared);
		propagate(rel.doc, doc, shared);
	  }
	}
	propagate(doc, null, true);
  }

  // Attach a document to an editor.
  function attachDoc(cm, doc) {
	if (doc.cm) throw new Error("This document is already in use.");
	cm.doc = doc;
	doc.cm = cm;
	estimateLineHeights(cm);
	loadMode(cm);
	if (!cm.options.lineWrapping) findMaxLine(cm);
	cm.options.mode = doc.modeOption;
	regChange(cm);
  }

  // LINE UTILITIES

  // Find the line object corresponding to the given line number.
  function getLine(doc, n) {
	n -= doc.first;
	if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	for (var chunk = doc; !chunk.lines;) {
	  for (var i = 0;; ++i) {
		var child = chunk.children[i], sz = child.chunkSize();
		if (n < sz) { chunk = child; break; }
		n -= sz;
	  }
	}
	return chunk.lines[n];
  }

  // Get the part of a document between two positions, as an array of
  // strings.
  function getBetween(doc, start, end) {
	var out = [], n = start.line;
	doc.iter(start.line, end.line + 1, function(line) {
	  var text = line.text;
	  if (n == end.line) text = text.slice(0, end.ch);
	  if (n == start.line) text = text.slice(start.ch);
	  out.push(text);
	  ++n;
	});
	return out;
  }
  // Get the lines between from and to, as array of strings.
  function getLines(doc, from, to) {
	var out = [];
	doc.iter(from, to, function(line) { out.push(line.text); });
	return out;
  }

  // Update the height of a line, propagating the height change
  // upwards to parent nodes.
  function updateLineHeight(line, height) {
	var diff = height - line.height;
	if (diff) for (var n = line; n; n = n.parent) n.height += diff;
  }

  // Given a line object, find its line number by walking up through
  // its parent links.
  function lineNo(line) {
	if (line.parent == null) return null;
	var cur = line.parent, no = indexOf(cur.lines, line);
	for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	  for (var i = 0;; ++i) {
		if (chunk.children[i] == cur) break;
		no += chunk.children[i].chunkSize();
	  }
	}
	return no + cur.first;
  }

  // Find the line at the given vertical position, using the height
  // information in the document tree.
  function lineAtHeight(chunk, h) {
	var n = chunk.first;
	outer: do {
	  for (var i = 0; i < chunk.children.length; ++i) {
		var child = chunk.children[i], ch = child.height;
		if (h < ch) { chunk = child; continue outer; }
		h -= ch;
		n += child.chunkSize();
	  }
	  return n;
	} while (!chunk.lines);
	for (var i = 0; i < chunk.lines.length; ++i) {
	  var line = chunk.lines[i], lh = line.height;
	  if (h < lh) break;
	  h -= lh;
	}
	return n + i;
  }


  // Find the height above the given line.
  function heightAtLine(lineObj) {
	lineObj = visualLine(lineObj);

	var h = 0, chunk = lineObj.parent;
	for (var i = 0; i < chunk.lines.length; ++i) {
	  var line = chunk.lines[i];
	  if (line == lineObj) break;
	  else h += line.height;
	}
	for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	  for (var i = 0; i < p.children.length; ++i) {
		var cur = p.children[i];
		if (cur == chunk) break;
		else h += cur.height;
	  }
	}
	return h;
  }

  // Get the bidi ordering for the given line (and cache it). Returns
  // false for lines that are fully left-to-right, and an array of
  // BidiSpan objects otherwise.
  function getOrder(line) {
	var order = line.order;
	if (order == null) order = line.order = bidiOrdering(line.text);
	return order;
  }

  // HISTORY

  function History(startGen) {
	// Arrays of change events and selections. Doing something adds an
	// event to done and clears undo. Undoing moves events from done
	// to undone, redoing moves them in the other direction.
	this.done = []; this.undone = [];
	this.undoDepth = Infinity;
	// Used to track when changes can be merged into a single undo
	// event
	this.lastModTime = this.lastSelTime = 0;
	this.lastOp = this.lastSelOp = null;
	this.lastOrigin = this.lastSelOrigin = null;
	// Used by the isClean() method
	this.generation = this.maxGeneration = startGen || 1;
  }

  // Create a history change event from an updateDoc-style change
  // object.
  function historyChangeFromChange(doc, change) {
	var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	return histChange;
  }

  // Pop all selection events off the end of a history array. Stop at
  // a change event.
  function clearSelectionEvents(array) {
	while (array.length) {
	  var last = lst(array);
	  if (last.ranges) array.pop();
	  else break;
	}
  }

  // Find the top change event in the history. Pop off selection
  // events that are in the way.
  function lastChangeEvent(hist, force) {
	if (force) {
	  clearSelectionEvents(hist.done);
	  return lst(hist.done);
	} else if (hist.done.length && !lst(hist.done).ranges) {
	  return lst(hist.done);
	} else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	  hist.done.pop();
	  return lst(hist.done);
	}
  }

  // Register a change in the history. Merges changes that are within
  // a single operation, ore are close together with an origin that
  // allows merging (starting with "+") into a single event.
  function addChangeToHistory(doc, change, selAfter, opId) {
	var hist = doc.history;
	hist.undone.length = 0;
	var time = +new Date, cur;

	if ((hist.lastOp == opId ||
		 hist.lastOrigin == change.origin && change.origin &&
		 ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
		  change.origin.charAt(0) == "*")) &&
		(cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	  // Merge this change into the last event
	  var last = lst(cur.changes);
	  if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
		// Optimized case for simple insertion -- don't want to add
		// new changesets for every character typed
		last.to = changeEnd(change);
	  } else {
		// Add new sub-event
		cur.changes.push(historyChangeFromChange(doc, change));
	  }
	} else {
	  // Can not be merged, start a new event.
	  var before = lst(hist.done);
	  if (!before || !before.ranges)
		pushSelectionToHistory(doc.sel, hist.done);
	  cur = {changes: [historyChangeFromChange(doc, change)],
			 generation: hist.generation};
	  hist.done.push(cur);
	  while (hist.done.length > hist.undoDepth) {
		hist.done.shift();
		if (!hist.done[0].ranges) hist.done.shift();
	  }
	}
	hist.done.push(selAfter);
	hist.generation = ++hist.maxGeneration;
	hist.lastModTime = hist.lastSelTime = time;
	hist.lastOp = hist.lastSelOp = opId;
	hist.lastOrigin = hist.lastSelOrigin = change.origin;

	if (!last) signal(doc, "historyAdded");
  }

  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	var ch = origin.charAt(0);
	return ch == "*" ||
	  ch == "+" &&
	  prev.ranges.length == sel.ranges.length &&
	  prev.somethingSelected() == sel.somethingSelected() &&
	  new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
  }

  // Called whenever the selection changes, sets the new selection as
  // the pending selection in the history, and pushes the old pending
  // selection into the 'done' array when it was significantly
  // different (in number of selected ranges, emptiness, or time).
  function addSelectionToHistory(doc, sel, opId, options) {
	var hist = doc.history, origin = options && options.origin;

	// A new event is started when the previous origin does not match
	// the current, or the origins don't allow matching. Origins
	// starting with * are always merged, those starting with + are
	// merged when similar and close together in time.
	if (opId == hist.lastSelOp ||
		(origin && hist.lastSelOrigin == origin &&
		 (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
		  selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	  hist.done[hist.done.length - 1] = sel;
	else
	  pushSelectionToHistory(sel, hist.done);

	hist.lastSelTime = +new Date;
	hist.lastSelOrigin = origin;
	hist.lastSelOp = opId;
	if (options && options.clearRedo !== false)
	  clearSelectionEvents(hist.undone);
  }

  function pushSelectionToHistory(sel, dest) {
	var top = lst(dest);
	if (!(top && top.ranges && top.equals(sel)))
	  dest.push(sel);
  }

  // Used to store marked span information in the history.
  function attachLocalSpans(doc, change, from, to) {
	var existing = change["spans_" + doc.id], n = 0;
	doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	  if (line.markedSpans)
		(existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	  ++n;
	});
  }

  // When un/re-doing restores text containing marked spans, those
  // that have been explicitly cleared should not be restored.
  function removeClearedSpans(spans) {
	if (!spans) return null;
	for (var i = 0, out; i < spans.length; ++i) {
	  if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	  else if (out) out.push(spans[i]);
	}
	return !out ? spans : out.length ? out : null;
  }

  // Retrieve and filter the old marked spans stored in a change event.
  function getOldSpans(doc, change) {
	var found = change["spans_" + doc.id];
	if (!found) return null;
	for (var i = 0, nw = []; i < change.text.length; ++i)
	  nw.push(removeClearedSpans(found[i]));
	return nw;
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup, instantiateSel) {
	for (var i = 0, copy = []; i < events.length; ++i) {
	  var event = events[i];
	  if (event.ranges) {
		copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
		continue;
	  }
	  var changes = event.changes, newChanges = [];
	  copy.push({changes: newChanges});
	  for (var j = 0; j < changes.length; ++j) {
		var change = changes[j], m;
		newChanges.push({from: change.from, to: change.to, text: change.text});
		if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
		  if (indexOf(newGroup, Number(m[1])) > -1) {
			lst(newChanges)[prop] = change[prop];
			delete change[prop];
		  }
		}
	  }
	}
	return copy;
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSelSingle(pos, from, to, diff) {
	if (to < pos.line) {
	  pos.line += diff;
	} else if (from < pos.line) {
	  pos.line = from;
	  pos.ch = 0;
	}
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
	for (var i = 0; i < array.length; ++i) {
	  var sub = array[i], ok = true;
	  if (sub.ranges) {
		if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
		for (var j = 0; j < sub.ranges.length; j++) {
		  rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
		  rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
		}
		continue;
	  }
	  for (var j = 0; j < sub.changes.length; ++j) {
		var cur = sub.changes[j];
		if (to < cur.from.line) {
		  cur.from = Pos(cur.from.line + diff, cur.from.ch);
		  cur.to = Pos(cur.to.line + diff, cur.to.ch);
		} else if (from <= cur.to.line) {
		  ok = false;
		  break;
		}
	  }
	  if (!ok) {
		array.splice(0, i + 1);
		i = 0;
	  }
	}
  }

  function rebaseHist(hist, change) {
	var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	rebaseHistArray(hist.done, from, to, diff);
	rebaseHistArray(hist.undone, from, to, diff);
  }

  // EVENT UTILITIES

  // Due to the fact that we still support jurassic IE versions, some
  // compatibility wrappers are needed.

  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	if (e.preventDefault) e.preventDefault();
	else e.returnValue = false;
  };
  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	if (e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;
  };
  function e_defaultPrevented(e) {
	return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
  }
  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

  function e_target(e) {return e.target || e.srcElement;}
  function e_button(e) {
	var b = e.which;
	if (b == null) {
	  if (e.button & 1) b = 1;
	  else if (e.button & 2) b = 3;
	  else if (e.button & 4) b = 2;
	}
	if (mac && e.ctrlKey && b == 1) b = 3;
	return b;
  }

  // EVENT HANDLING

  // Lightweight event framework. on/off also work on DOM nodes,
  // registering native DOM handlers.

  var on = CodeMirror.on = function(emitter, type, f) {
	if (emitter.addEventListener)
	  emitter.addEventListener(type, f, false);
	else if (emitter.attachEvent)
	  emitter.attachEvent("on" + type, f);
	else {
	  var map = emitter._handlers || (emitter._handlers = {});
	  var arr = map[type] || (map[type] = []);
	  arr.push(f);
	}
  };

  var off = CodeMirror.off = function(emitter, type, f) {
	if (emitter.removeEventListener)
	  emitter.removeEventListener(type, f, false);
	else if (emitter.detachEvent)
	  emitter.detachEvent("on" + type, f);
	else {
	  var arr = emitter._handlers && emitter._handlers[type];
	  if (!arr) return;
	  for (var i = 0; i < arr.length; ++i)
		if (arr[i] == f) { arr.splice(i, 1); break; }
	}
  };

  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	var arr = emitter._handlers && emitter._handlers[type];
	if (!arr) return;
	var args = Array.prototype.slice.call(arguments, 2);
	for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
  };

  var orphanDelayedCallbacks = null;

  // Often, we want to signal events at a point where we are in the
  // middle of some work, but don't want the handler to start calling
  // other methods on the editor, which might be in an inconsistent
  // state or simply not expect any other events to happen.
  // signalLater looks whether there are any handlers, and schedules
  // them to be executed when the last operation ends, or, if no
  // operation is active, when a timeout fires.
  function signalLater(emitter, type /*, values...*/) {
	var arr = emitter._handlers && emitter._handlers[type];
	if (!arr) return;
	var args = Array.prototype.slice.call(arguments, 2), list;
	if (operationGroup) {
	  list = operationGroup.delayedCallbacks;
	} else if (orphanDelayedCallbacks) {
	  list = orphanDelayedCallbacks;
	} else {
	  list = orphanDelayedCallbacks = [];
	  setTimeout(fireOrphanDelayed, 0);
	}
	function bnd(f) {return function(){f.apply(null, args);};};
	for (var i = 0; i < arr.length; ++i)
	  list.push(bnd(arr[i]));
  }

  function fireOrphanDelayed() {
	var delayed = orphanDelayedCallbacks;
	orphanDelayedCallbacks = null;
	for (var i = 0; i < delayed.length; ++i) delayed[i]();
  }

  // The DOM events that CodeMirror handles can be overridden by
  // registering a (non-DOM) handler on the editor for the event name,
  // and preventDefault-ing the event in that handler.
  function signalDOMEvent(cm, e, override) {
	if (typeof e == "string")
	  e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	signal(cm, override || e.type, cm, e);
	return e_defaultPrevented(e) || e.codemirrorIgnore;
  }

  function signalCursorActivity(cm) {
	var arr = cm._handlers && cm._handlers.cursorActivity;
	if (!arr) return;
	var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	  set.push(arr[i]);
  }

  function hasHandler(emitter, type) {
	var arr = emitter._handlers && emitter._handlers[type];
	return arr && arr.length > 0;
  }

  // Add on and off methods to a constructor's prototype, to make
  // registering events on such objects more convenient.
  function eventMixin(ctor) {
	ctor.prototype.on = function(type, f) {on(this, type, f);};
	ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // MISC UTILITIES

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerGap = 30;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

  // Reused option objects for setSelection & friends
  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

  function Delayed() {this.id = null;}
  Delayed.prototype.set = function(ms, f) {
	clearTimeout(this.id);
	this.id = setTimeout(f, ms);
  };

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	if (end == null) {
	  end = string.search(/[^\s\u00a0]/);
	  if (end == -1) end = string.length;
	}
	for (var i = startIndex || 0, n = startValue || 0;;) {
	  var nextTab = string.indexOf("\t", i);
	  if (nextTab < 0 || nextTab >= end)
		return n + (end - i);
	  n += nextTab - i;
	  n += tabSize - (n % tabSize);
	  i = nextTab + 1;
	}
  };

  // The inverse of countColumn -- find the offset that corresponds to
  // a particular column.
  var findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
	for (var pos = 0, col = 0;;) {
	  var nextTab = string.indexOf("\t", pos);
	  if (nextTab == -1) nextTab = string.length;
	  var skipped = nextTab - pos;
	  if (nextTab == string.length || col + skipped >= goal)
		return pos + Math.min(skipped, goal - col);
	  col += nextTab - pos;
	  col += tabSize - (col % tabSize);
	  pos = nextTab + 1;
	  if (col >= goal) return pos;
	}
  }

  var spaceStrs = [""];
  function spaceStr(n) {
	while (spaceStrs.length <= n)
	  spaceStrs.push(lst(spaceStrs) + " ");
	return spaceStrs[n];
  }

  function lst(arr) { return arr[arr.length-1]; }

  var selectInput = function(node) { node.select(); };
  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
  else if (ie) // Suppress mysterious IE10 errors
	selectInput = function(node) { try { node.select(); } catch(_e) {} };

  function indexOf(array, elt) {
	for (var i = 0; i < array.length; ++i)
	  if (array[i] == elt) return i;
	return -1;
  }
  function map(array, f) {
	var out = [];
	for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	return out;
  }

  function nothing() {}

  function createObj(base, props) {
	var inst;
	if (Object.create) {
	  inst = Object.create(base);
	} else {
	  nothing.prototype = base;
	  inst = new nothing();
	}
	if (props) copyObj(props, inst);
	return inst;
  };

  function copyObj(obj, target, overwrite) {
	if (!target) target = {};
	for (var prop in obj)
	  if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
		target[prop] = obj[prop];
	return target;
  }

  function bind(f) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function(){return f.apply(null, args);};
  }

  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	return /\w/.test(ch) || ch > "\x80" &&
	  (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
  };
  function isWordChar(ch, helper) {
	if (!helper) return isWordCharBasic(ch);
	if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	return helper.test(ch);
  }

  function isEmpty(obj) {
	for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	return true;
  }

  // Extending unicode characters. A series of a non-extending char +
  // any number of extending chars is treated as a single unit as far
  // as editing and measuring is concerned. This is not fully correct,
  // since some scripts/fonts/browsers also treat other configurations
  // of code points as a group.
  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

  // DOM UTILITIES

  function elt(tag, content, className, style) {
	var e = document.createElement(tag);
	if (className) e.className = className;
	if (style) e.style.cssText = style;
	if (typeof content == "string") e.appendChild(document.createTextNode(content));
	else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	return e;
  }

  var range;
  if (document.createRange) range = function(node, start, end, endNode) {
	var r = document.createRange();
	r.setEnd(endNode || node, end);
	r.setStart(node, start);
	return r;
  };
  else range = function(node, start, end) {
	var r = document.body.createTextRange();
	try { r.moveToElementText(node.parentNode); }
	catch(e) { return r; }
	r.collapse(true);
	r.moveEnd("character", end);
	r.moveStart("character", start);
	return r;
  };

  function removeChildren(e) {
	for (var count = e.childNodes.length; count > 0; --count)
	  e.removeChild(e.firstChild);
	return e;
  }

  function removeChildrenAndAdd(parent, e) {
	return removeChildren(parent).appendChild(e);
  }

  var contains = CodeMirror.contains = function(parent, child) {
	if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	  child = child.parentNode;
	if (parent.contains)
	  return parent.contains(child);
	do {
	  if (child.nodeType == 11) child = child.host;
	  if (child == parent) return true;
	} while (child = child.parentNode);
  };

  function activeElt() {
	var activeElement = document.activeElement;
	while (activeElement && activeElement.root && activeElement.root.activeElement)
	  activeElement = activeElement.root.activeElement;
	return activeElement;
  }
  // Older versions of IE throws unspecified error when touching
  // document.activeElement in some cases (during loading, in iframe)
  if (ie && ie_version < 11) activeElt = function() {
	try { return document.activeElement; }
	catch(e) { return document.body; }
  };

  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
  var rmClass = CodeMirror.rmClass = function(node, cls) {
	var current = node.className;
	var match = classTest(cls).exec(current);
	if (match) {
	  var after = current.slice(match.index + match[0].length);
	  node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	}
  };
  var addClass = CodeMirror.addClass = function(node, cls) {
	var current = node.className;
	if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
  };
  function joinClasses(a, b) {
	var as = a.split(" ");
	for (var i = 0; i < as.length; i++)
	  if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	return b;
  }

  // WINDOW-WIDE EVENTS

  // These must be handled carefully, because naively registering a
  // handler for each editor will cause the editors to never be
  // garbage collected.

  function forEachCodeMirror(f) {
	if (!document.body.getElementsByClassName) return;
	var byClass = document.body.getElementsByClassName("CodeMirror");
	for (var i = 0; i < byClass.length; i++) {
	  var cm = byClass[i].CodeMirror;
	  if (cm) f(cm);
	}
  }

  var globalsRegistered = false;
  function ensureGlobalHandlers() {
	if (globalsRegistered) return;
	registerGlobalHandlers();
	globalsRegistered = true;
  }
  function registerGlobalHandlers() {
	// When the window resizes, we need to refresh active editors.
	var resizeTimer;
	on(window, "resize", function() {
	  if (resizeTimer == null) resizeTimer = setTimeout(function() {
		resizeTimer = null;
		forEachCodeMirror(onResize);
	  }, 100);
	});
	// When the window loses focus, we want to show the editor as blurred
	on(window, "blur", function() {
	  forEachCodeMirror(onBlur);
	});
  }

  // FEATURE DETECTION

  // Detect drag-and-drop
  var dragAndDrop = function() {
	// There is *some* kind of drag-and-drop support in IE6-8, but I
	// couldn't get it to work yet.
	if (ie && ie_version < 9) return false;
	var div = elt('div');
	return "draggable" in div || "dragDrop" in div;
  }();

  var zwspSupported;
  function zeroWidthElement(measure) {
	if (zwspSupported == null) {
	  var test = elt("span", "\u200b");
	  removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	  if (measure.firstChild.offsetHeight != 0)
		zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	}
	var node = zwspSupported ? elt("span", "\u200b") :
	  elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	node.setAttribute("cm-text", "");
	return node;
  }

  // Feature-detect IE's crummy client rect reporting for bidi text
  var badBidiRects;
  function hasBadBidiRects(measure) {
	if (badBidiRects != null) return badBidiRects;
	var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	var r0 = range(txt, 0, 1).getBoundingClientRect();
	if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	var r1 = range(txt, 1, 2).getBoundingClientRect();
	return badBidiRects = (r1.right - r0.right < 3);
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLinesAuto = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	var pos = 0, result = [], l = string.length;
	while (pos <= l) {
	  var nl = string.indexOf("\n", pos);
	  if (nl == -1) nl = string.length;
	  var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	  var rt = line.indexOf("\r");
	  if (rt != -1) {
		result.push(line.slice(0, rt));
		pos += rt + 1;
	  } else {
		result.push(line);
		pos = nl + 1;
	  }
	}
	return result;
  } : function(string){return string.split(/\r\n?|\n/);};

  var hasSelection = window.getSelection ? function(te) {
	try { return te.selectionStart != te.selectionEnd; }
	catch(e) { return false; }
  } : function(te) {
	try {var range = te.ownerDocument.selection.createRange();}
	catch(e) {}
	if (!range || range.parentElement() != te) return false;
	return range.compareEndPoints("StartToEnd", range) != 0;
  };

  var hasCopyEvent = (function() {
	var e = elt("div");
	if ("oncopy" in e) return true;
	e.setAttribute("oncopy", "return;");
	return typeof e.oncopy == "function";
  })();

  var badZoomedRects = null;
  function hasBadZoomedRects(measure) {
	if (badZoomedRects != null) return badZoomedRects;
	var node = removeChildrenAndAdd(measure, elt("span", "x"));
	var normal = node.getBoundingClientRect();
	var fromRange = range(node, 0, 1).getBoundingClientRect();
	return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
  }

  // KEY NAMES

  var keyNames = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
				  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
				  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
				  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 107: "=", 109: "-", 127: "Delete",
				  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
				  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
				  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"};
  CodeMirror.keyNames = keyNames;
  (function() {
	// Number keys
	for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	// Alphabetic keys
	for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	// Function keys
	for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
  })();

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
	if (!order) return f(from, to, "ltr");
	var found = false;
	for (var i = 0; i < order.length; ++i) {
	  var part = order[i];
	  if (part.from < to && part.to > from || from == to && part.to == from) {
		f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
		found = true;
	  }
	}
	if (!found) f(from, to, "ltr");
  }

  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
  function lineRight(line) {
	var order = getOrder(line);
	if (!order) return line.text.length;
	return bidiRight(lst(order));
  }

  function lineStart(cm, lineN) {
	var line = getLine(cm.doc, lineN);
	var visual = visualLine(line);
	if (visual != line) lineN = lineNo(visual);
	var order = getOrder(visual);
	var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	return Pos(lineN, ch);
  }
  function lineEnd(cm, lineN) {
	var merged, line = getLine(cm.doc, lineN);
	while (merged = collapsedSpanAtEnd(line)) {
	  line = merged.find(1, true).line;
	  lineN = null;
	}
	var order = getOrder(line);
	var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	return Pos(lineN == null ? lineNo(line) : lineN, ch);
  }
  function lineStartSmart(cm, pos) {
	var start = lineStart(cm, pos.line);
	var line = getLine(cm.doc, start.line);
	var order = getOrder(line);
	if (!order || order[0].level == 0) {
	  var firstNonWS = Math.max(0, line.text.search(/\S/));
	  var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	  return Pos(start.line, inWS ? 0 : firstNonWS);
	}
	return start;
  }

  function compareBidiLevel(order, a, b) {
	var linedir = order[0].level;
	if (a == linedir) return true;
	if (b == linedir) return false;
	return a < b;
  }
  var bidiOther;
  function getBidiPartAt(order, pos) {
	bidiOther = null;
	for (var i = 0, found; i < order.length; ++i) {
	  var cur = order[i];
	  if (cur.from < pos && cur.to > pos) return i;
	  if ((cur.from == pos || cur.to == pos)) {
		if (found == null) {
		  found = i;
		} else if (compareBidiLevel(order, cur.level, order[found].level)) {
		  if (cur.from != cur.to) bidiOther = found;
		  return i;
		} else {
		  if (cur.from != cur.to) bidiOther = i;
		  return found;
		}
	  }
	}
	return found;
  }

  function moveInLine(line, pos, dir, byUnit) {
	if (!byUnit) return pos + dir;
	do pos += dir;
	while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	return pos;
  }

  // This is needed in order to move 'visually' through bi-directional
  // text -- i.e., pressing left should make the cursor go left, even
  // when in RTL text. The tricky part is the 'jumps', where RTL and
  // LTR text touch each other. This often requires the cursor offset
  // to move more than one unit, in order to visually move one unit.
  function moveVisually(line, start, dir, byUnit) {
	var bidi = getOrder(line);
	if (!bidi) return moveLogically(line, start, dir, byUnit);
	var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

	for (;;) {
	  if (target > part.from && target < part.to) return target;
	  if (target == part.from || target == part.to) {
		if (getBidiPartAt(bidi, target) == pos) return target;
		part = bidi[pos += dir];
		return (dir > 0) == part.level % 2 ? part.to : part.from;
	  } else {
		part = bidi[pos += dir];
		if (!part) return null;
		if ((dir > 0) == part.level % 2)
		  target = moveInLine(line, part.to, -1, byUnit);
		else
		  target = moveInLine(line, part.from, 1, byUnit);
	  }
	}
  }

  function moveLogically(line, start, dir, byUnit) {
	var target = start + dir;
	if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	return target < 0 || target > line.text.length ? null : target;
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
	// Character types for codepoints 0 to 0xff
	var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	// Character types for codepoints 0x600 to 0x6ff
	var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	function charType(code) {
	  if (code <= 0xf7) return lowTypes.charAt(code);
	  else if (0x590 <= code && code <= 0x5f4) return "R";
	  else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	  else if (0x6ee <= code && code <= 0x8ac) return "r";
	  else if (0x2000 <= code && code <= 0x200b) return "w";
	  else if (code == 0x200c) return "b";
	  else return "L";
	}

	var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	// Browsers seem to always treat the boundaries of block elements as being L.
	var outerType = "L";

	function BidiSpan(level, from, to) {
	  this.level = level;
	  this.from = from; this.to = to;
	}

	return function(str) {
	  if (!bidiRE.test(str)) return false;
	  var len = str.length, types = [];
	  for (var i = 0, type; i < len; ++i)
		types.push(type = charType(str.charCodeAt(i)));

	  // W1. Examine each non-spacing mark (NSM) in the level run, and
	  // change the type of the NSM to the type of the previous
	  // character. If the NSM is at the start of the level run, it will
	  // get the type of sor.
	  for (var i = 0, prev = outerType; i < len; ++i) {
		var type = types[i];
		if (type == "m") types[i] = prev;
		else prev = type;
	  }

	  // W2. Search backwards from each instance of a European number
	  // until the first strong type (R, L, AL, or sor) is found. If an
	  // AL is found, change the type of the European number to Arabic
	  // number.
	  // W3. Change all ALs to R.
	  for (var i = 0, cur = outerType; i < len; ++i) {
		var type = types[i];
		if (type == "1" && cur == "r") types[i] = "n";
		else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	  }

	  // W4. A single European separator between two European numbers
	  // changes to a European number. A single common separator between
	  // two numbers of the same type changes to that type.
	  for (var i = 1, prev = types[0]; i < len - 1; ++i) {
		var type = types[i];
		if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
		else if (type == "," && prev == types[i+1] &&
				 (prev == "1" || prev == "n")) types[i] = prev;
		prev = type;
	  }

	  // W5. A sequence of European terminators adjacent to European
	  // numbers changes to all European numbers.
	  // W6. Otherwise, separators and terminators change to Other
	  // Neutral.
	  for (var i = 0; i < len; ++i) {
		var type = types[i];
		if (type == ",") types[i] = "N";
		else if (type == "%") {
		  for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
		  var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
		  for (var j = i; j < end; ++j) types[j] = replace;
		  i = end - 1;
		}
	  }

	  // W7. Search backwards from each instance of a European number
	  // until the first strong type (R, L, or sor) is found. If an L is
	  // found, then change the type of the European number to L.
	  for (var i = 0, cur = outerType; i < len; ++i) {
		var type = types[i];
		if (cur == "L" && type == "1") types[i] = "L";
		else if (isStrong.test(type)) cur = type;
	  }

	  // N1. A sequence of neutrals takes the direction of the
	  // surrounding strong text if the text on both sides has the same
	  // direction. European and Arabic numbers act as if they were R in
	  // terms of their influence on neutrals. Start-of-level-run (sor)
	  // and end-of-level-run (eor) are used at level run boundaries.
	  // N2. Any remaining neutrals take the embedding direction.
	  for (var i = 0; i < len; ++i) {
		if (isNeutral.test(types[i])) {
		  for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
		  var before = (i ? types[i-1] : outerType) == "L";
		  var after = (end < len ? types[end] : outerType) == "L";
		  var replace = before || after ? "L" : "R";
		  for (var j = i; j < end; ++j) types[j] = replace;
		  i = end - 1;
		}
	  }

	  // Here we depart from the documented algorithm, in order to avoid
	  // building up an actual levels array. Since there are only three
	  // levels (0, 1, 2) in an implementation that doesn't take
	  // explicit embedding into account, we can build up the order on
	  // the fly, without following the level-based algorithm.
	  var order = [], m;
	  for (var i = 0; i < len;) {
		if (countsAsLeft.test(types[i])) {
		  var start = i;
		  for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
		  order.push(new BidiSpan(0, start, i));
		} else {
		  var pos = i, at = order.length;
		  for (++i; i < len && types[i] != "L"; ++i) {}
		  for (var j = pos; j < i;) {
			if (countsAsNum.test(types[j])) {
			  if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
			  var nstart = j;
			  for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
			  order.splice(at, 0, new BidiSpan(2, nstart, j));
			  pos = j;
			} else ++j;
		  }
		  if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
		}
	  }
	  if (order[0].level == 1 && (m = str.match(/^\s+/))) {
		order[0].from = m[0].length;
		order.unshift(new BidiSpan(0, 0, m[0].length));
	  }
	  if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
		lst(order).to -= m[0].length;
		order.push(new BidiSpan(0, len - m[0].length, len));
	  }
	  if (order[0].level == 2)
		order.unshift(new BidiSpan(1, order[0].to, order[0].to));
	  if (order[0].level != lst(order).level)
		order.push(new BidiSpan(order[0].level, len, len));

	  return order;
	};
  })();

  // THE END

  CodeMirror.version = "5.6.1";

  return CodeMirror;
});
// NOTE: This has been modified from the original version to add additional commands


(function(mod) {
	if (typeof exports == "object" && typeof module == "object") // CommonJS
		mod(require("../../lib/codemirror"));
	else if (typeof define == "function" && define.amd) // AMD
		define(["../../lib/codemirror"], mod);
	else // Plain browser env
		mod(CodeMirror);
})(function(CodeMirror) {
	"use strict";

	var listRE = /^(\s*)(>[> ]*|[*+-]\s|(\d+)([.)]))(\s*)/,
		emptyListRE = /^(\s*)(>[> ]*|[*+-]|(\d+)[.)])(\s*)$/,
		unorderedListRE = /[*+-]\s/;

	CodeMirror.commands.newlineAndIndentContinueMarkdownList = function(cm) {
		if (cm.getOption("disableInput")) return CodeMirror.Pass;
		var ranges = cm.listSelections(),
			replacements = [];
		for (var i = 0; i < ranges.length; i++) {
			var pos = ranges[i].head;
			var eolState = cm.getStateAfter(pos.line);
			var inList = eolState.list !== false;
			var inQuote = eolState.quote !== 0;

			var line = cm.getLine(pos.line),
				match = listRE.exec(line);
			if (!ranges[i].empty() || (!inList && !inQuote) || !match) {
				cm.execCommand("newlineAndIndent");
				return;
			}
			if (emptyListRE.test(line)) {
				cm.replaceRange("", {
					line: pos.line,
					ch: 0
				}, {
					line: pos.line,
					ch: pos.ch + 1
				});
				replacements[i] = "\n";
			} else {
				var indent = match[1],
					after = match[5];
				var bullet = unorderedListRE.test(match[2]) || match[2].indexOf(">") >= 0 ? match[2] : (parseInt(match[3], 10) + 1) + match[4];

				replacements[i] = "\n" + indent + bullet + after;
			}
		}

		cm.replaceSelections(replacements);
	};

	CodeMirror.commands.shiftTabAndIndentContinueMarkdownList = function(cm) {
		var ranges = cm.listSelections();
		var pos = ranges[0].head;
		var eolState = cm.getStateAfter(pos.line);
		var inList = eolState.list !== false;

		if (inList) {
			cm.execCommand('indentLess');
			return;
		}
		
		if(cm.options.indentWithTabs){
			cm.execCommand('insertTab');
		}
		else{
			var spaces = Array(cm.options.tabSize + 1).join(" ");
			cm.replaceSelection(spaces);
		}
	};

	CodeMirror.commands.tabAndIndentContinueMarkdownList = function(cm) {
		var ranges = cm.listSelections();
		var pos = ranges[0].head;
		var eolState = cm.getStateAfter(pos.line);
		var inList = eolState.list !== false;

		if (inList) {
			cm.execCommand('indentMore');
			return;
		}

		if(cm.options.indentWithTabs){
			cm.execCommand('insertTab');
		}
		else{
			var spaces = Array(cm.options.tabSize + 1).join(" ");
			cm.replaceSelection(spaces);
		}
	};
});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
	mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
	define(["../../lib/codemirror"], mod);
  else // Plain browser env
	mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineOption("fullScreen", false, function(cm, val, old) {
	if (old == CodeMirror.Init) old = false;
	if (!old == !val) return;
	if (val) setFullscreen(cm);
	else setNormal(cm);
  });

  function setFullscreen(cm) {
	var wrap = cm.getWrapperElement();
	cm.state.fullScreenRestore = {scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset,
								  width: wrap.style.width, height: wrap.style.height};
	wrap.style.width = "";
	wrap.style.height = "auto";
	wrap.className += " CodeMirror-fullscreen";
	document.documentElement.style.overflow = "hidden";
	cm.refresh();
  }

  function setNormal(cm) {
	var wrap = cm.getWrapperElement();
	wrap.className = wrap.className.replace(/\s*CodeMirror-fullscreen\b/, "");
	document.documentElement.style.overflow = "";
	var info = cm.state.fullScreenRestore;
	wrap.style.width = info.width; wrap.style.height = info.height;
	window.scrollTo(info.scrollLeft, info.scrollTop);
	cm.refresh();
  }
});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
	mod(require("../../lib/codemirror"), require("../xml/xml"), require("../meta"));
  else if (typeof define == "function" && define.amd) // AMD
	define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
  else // Plain browser env
	mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlFound = CodeMirror.modes.hasOwnProperty("xml");
  var htmlMode = CodeMirror.getMode(cmCfg, htmlFound ? {name: "xml", htmlMode: true} : "text/plain");

  function getMode(name) {
	if (CodeMirror.findModeByName) {
	  var found = CodeMirror.findModeByName(name);
	  if (found) name = found.mime || found.mimes[0];
	}
	var mode = CodeMirror.getMode(cmCfg, name);
	return mode.name == "null" ? null : mode;
  }

  // Should characters that affect highlighting be highlighted separate?
  // Does not include characters that will be output (such as `1.` and `-` for lists)
  if (modeCfg.highlightFormatting === undefined)
	modeCfg.highlightFormatting = false;

  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
  // Excess `>` will emit `error` token.
  if (modeCfg.maxBlockquoteDepth === undefined)
	modeCfg.maxBlockquoteDepth = 0;

  // Should underscores in words open/close em/strong?
  if (modeCfg.underscoresBreakWords === undefined)
	modeCfg.underscoresBreakWords = true;

  // Turn on fenced code blocks? ("```" to start/end)
  if (modeCfg.fencedCodeBlocks === undefined) modeCfg.fencedCodeBlocks = false;

  // Turn on task lists? ("- [ ] " and "- [x] ")
  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

  // Turn on strikethrough syntax
  if (modeCfg.strikethrough === undefined)
	modeCfg.strikethrough = false;

  var codeDepth = 0;

  var header   = 'header'
  ,   code     = 'comment'
  ,   quote    = 'quote'
  ,   list1    = 'variable-2'
  ,   list2    = 'variable-3'
  ,   list3    = 'keyword'
  ,   hr       = 'hr'
  ,   image    = 'tag'
  ,   formatting = 'formatting'
  ,   linkinline = 'link'
  ,   linkemail = 'link'
  ,   linktext = 'link'
  ,   linkhref = 'string'
  ,   em       = 'em'
  ,   strong   = 'strong'
  ,   strikethrough = 'strikethrough';

  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
  ,   ulRE = /^[*\-+]\s+/
  ,   olRE = /^[0-9]+([.)])\s+/
  ,   taskListRE = /^\[(x| )\](?=\s)/ // Must follow ulRE or olRE
  ,   atxHeaderRE = /^(#+)(?: |$)/
  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
  ,   textRE = /^[^#!\[\]*_\\<>` "'(~]+/;

  function switchInline(stream, state, f) {
	state.f = state.inline = f;
	return f(stream, state);
  }

  function switchBlock(stream, state, f) {
	state.f = state.block = f;
	return f(stream, state);
  }


  // Blocks

  function blankLine(state) {
	// Reset linkTitle state
	state.linkTitle = false;
	// Reset EM state
	state.em = false;
	// Reset STRONG state
	state.strong = false;
	// Reset strikethrough state
	state.strikethrough = false;
	// Reset state.quote
	state.quote = 0;
	// Reset state.indentedCode
	state.indentedCode = false;
	if (!htmlFound && state.f == htmlBlock) {
	  state.f = inlineNormal;
	  state.block = blockNormal;
	}
	// Reset state.trailingSpace
	state.trailingSpace = 0;
	state.trailingSpaceNewLine = false;
	// Mark this line as blank
	state.thisLineHasContent = false;
	return null;
  }

  function blockNormal(stream, state) {

	var sol = stream.sol();

	var prevLineIsList = state.list !== false,
		prevLineIsIndentedCode = state.indentedCode;

	state.indentedCode = false;

	if (prevLineIsList) {
	  if (state.indentationDiff >= 0) { // Continued list
		if (state.indentationDiff < 4) { // Only adjust indentation if *not* a code block
		  state.indentation -= state.indentationDiff;
		}
		state.list = null;
	  } else if (state.indentation > 0) {
		state.list = null;
		state.listDepth = Math.floor(state.indentation / 4);
	  } else { // No longer a list
		state.list = false;
		state.listDepth = 0;
	  }
	}

	var match = null;
	if (state.indentationDiff >= 4) {
	  stream.skipToEnd();
	  if (prevLineIsIndentedCode || !state.prevLineHasContent) {
		state.indentation -= 4;
		state.indentedCode = true;
		return code;
	  } else {
		return null;
	  }
	} else if (stream.eatSpace()) {
	  return null;
	} else if ((match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
	  state.header = match[1].length;
	  if (modeCfg.highlightFormatting) state.formatting = "header";
	  state.f = state.inline;
	  return getType(state);
	} else if (state.prevLineHasContent && !state.quote && !prevLineIsList && !prevLineIsIndentedCode && (match = stream.match(setextHeaderRE))) {
	  state.header = match[0].charAt(0) == '=' ? 1 : 2;
	  if (modeCfg.highlightFormatting) state.formatting = "header";
	  state.f = state.inline;
	  return getType(state);
	} else if (stream.eat('>')) {
	  state.quote = sol ? 1 : state.quote + 1;
	  if (modeCfg.highlightFormatting) state.formatting = "quote";
	  stream.eatSpace();
	  return getType(state);
	} else if (stream.peek() === '[') {
	  return switchInline(stream, state, footnoteLink);
	} else if (stream.match(hrRE, true)) {
	  state.hr = true;
	  return hr;
	} else if ((!state.prevLineHasContent || prevLineIsList) && (stream.match(ulRE, false) || stream.match(olRE, false))) {
	  var listType = null;
	  if (stream.match(ulRE, true)) {
		listType = 'ul';
	  } else {
		stream.match(olRE, true);
		listType = 'ol';
	  }
	  state.indentation += 4;
	  state.list = true;
	  state.listDepth++;
	  if (modeCfg.taskLists && stream.match(taskListRE, false)) {
		state.taskList = true;
	  }
	  state.f = state.inline;
	  if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
	  return getType(state);
	} else if (modeCfg.fencedCodeBlocks && stream.match(/^```[ \t]*([\w+#]*)/, true)) {
	  // try switching mode
	  state.localMode = getMode(RegExp.$1);
	  if (state.localMode) state.localState = state.localMode.startState();
	  state.f = state.block = local;
	  if (modeCfg.highlightFormatting) state.formatting = "code-block";
	  state.code = true;
	  return getType(state);
	}

	return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
	var style = htmlMode.token(stream, state.htmlState);
	if ((htmlFound && state.htmlState.tagStart === null &&
		 (!state.htmlState.context && state.htmlState.tokenize.isInText)) ||
		(state.md_inside && stream.current().indexOf(">") > -1)) {
	  state.f = inlineNormal;
	  state.block = blockNormal;
	  state.htmlState = null;
	}
	return style;
  }

  function local(stream, state) {
	if (stream.sol() && stream.match("```", false)) {
	  state.localMode = state.localState = null;
	  state.f = state.block = leavingLocal;
	  return null;
	} else if (state.localMode) {
	  return state.localMode.token(stream, state.localState);
	} else {
	  stream.skipToEnd();
	  return code;
	}
  }

  function leavingLocal(stream, state) {
	stream.match("```");
	state.block = blockNormal;
	state.f = inlineNormal;
	if (modeCfg.highlightFormatting) state.formatting = "code-block";
	state.code = true;
	var returnType = getType(state);
	state.code = false;
	return returnType;
  }

  // Inline
  function getType(state) {
	var styles = [];

	if (state.formatting) {
	  styles.push(formatting);

	  if (typeof state.formatting === "string") state.formatting = [state.formatting];

	  for (var i = 0; i < state.formatting.length; i++) {
		styles.push(formatting + "-" + state.formatting[i]);

		if (state.formatting[i] === "header") {
		  styles.push(formatting + "-" + state.formatting[i] + "-" + state.header);
		}

		// Add `formatting-quote` and `formatting-quote-#` for blockquotes
		// Add `error` instead if the maximum blockquote nesting depth is passed
		if (state.formatting[i] === "quote") {
		  if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
			styles.push(formatting + "-" + state.formatting[i] + "-" + state.quote);
		  } else {
			styles.push("error");
		  }
		}
	  }
	}

	if (state.taskOpen) {
	  styles.push("meta");
	  return styles.length ? styles.join(' ') : null;
	}
	if (state.taskClosed) {
	  styles.push("property");
	  return styles.length ? styles.join(' ') : null;
	}

	if (state.linkHref) {
	  styles.push(linkhref, "url");
	} else { // Only apply inline styles to non-url text
	  if (state.strong) { styles.push(strong); }
	  if (state.em) { styles.push(em); }
	  if (state.strikethrough) { styles.push(strikethrough); }

	  if (state.linkText) { styles.push(linktext); }

	  if (state.code) { styles.push(code); }
	}

	if (state.header) { styles.push(header); styles.push(header + "-" + state.header); }

	if (state.quote) {
	  styles.push(quote);

	  // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
	  if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
		styles.push(quote + "-" + state.quote);
	  } else {
		styles.push(quote + "-" + modeCfg.maxBlockquoteDepth);
	  }
	}

	if (state.list !== false) {
	  var listMod = (state.listDepth - 1) % 3;
	  if (!listMod) {
		styles.push(list1);
	  } else if (listMod === 1) {
		styles.push(list2);
	  } else {
		styles.push(list3);
	  }
	}

	if (state.trailingSpaceNewLine) {
	  styles.push("trailing-space-new-line");
	} else if (state.trailingSpace) {
	  styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
	}

	return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
	if (stream.match(textRE, true)) {
	  return getType(state);
	}
	return undefined;
  }

  function inlineNormal(stream, state) {
	var style = state.text(stream, state);
	if (typeof style !== 'undefined')
	  return style;

	if (state.list) { // List marker (*, +, -, 1., etc)
	  state.list = null;
	  return getType(state);
	}

	if (state.taskList) {
	  var taskOpen = stream.match(taskListRE, true)[1] !== "x";
	  if (taskOpen) state.taskOpen = true;
	  else state.taskClosed = true;
	  if (modeCfg.highlightFormatting) state.formatting = "task";
	  state.taskList = false;
	  return getType(state);
	}

	state.taskOpen = false;
	state.taskClosed = false;

	if (state.header && stream.match(/^#+$/, true)) {
	  if (modeCfg.highlightFormatting) state.formatting = "header";
	  return getType(state);
	}

	// Get sol() value now, before character is consumed
	var sol = stream.sol();

	var ch = stream.next();

	if (ch === '\\') {
	  stream.next();
	  if (modeCfg.highlightFormatting) {
		var type = getType(state);
		return type ? type + " formatting-escape" : "formatting-escape";
	  }
	}

	// Matches link titles present on next line
	if (state.linkTitle) {
	  state.linkTitle = false;
	  var matchCh = ch;
	  if (ch === '(') {
		matchCh = ')';
	  }
	  matchCh = (matchCh+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	  var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
	  if (stream.match(new RegExp(regex), true)) {
		return linkhref;
	  }
	}

	// If this block is changed, it may need to be updated in GFM mode
	if (ch === '`') {
	  var previousFormatting = state.formatting;
	  if (modeCfg.highlightFormatting) state.formatting = "code";
	  var t = getType(state);
	  var before = stream.pos;
	  stream.eatWhile('`');
	  var difference = 1 + stream.pos - before;
	  if (!state.code) {
		codeDepth = difference;
		state.code = true;
		return getType(state);
	  } else {
		if (difference === codeDepth) { // Must be exact
		  state.code = false;
		  return t;
		}
		state.formatting = previousFormatting;
		return getType(state);
	  }
	} else if (state.code) {
	  return getType(state);
	}

	if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
	  stream.match(/\[[^\]]*\]/);
	  state.inline = state.f = linkHref;
	  return image;
	}

	if (ch === '[' && stream.match(/.*\](\(.*\)| ?\[.*\])/, false)) {
	  state.linkText = true;
	  if (modeCfg.highlightFormatting) state.formatting = "link";
	  return getType(state);
	}

	if (ch === ']' && state.linkText && stream.match(/\(.*\)| ?\[.*\]/, false)) {
	  if (modeCfg.highlightFormatting) state.formatting = "link";
	  var type = getType(state);
	  state.linkText = false;
	  state.inline = state.f = linkHref;
	  return type;
	}

	if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
	  state.f = state.inline = linkInline;
	  if (modeCfg.highlightFormatting) state.formatting = "link";
	  var type = getType(state);
	  if (type){
		type += " ";
	  } else {
		type = "";
	  }
	  return type + linkinline;
	}

	if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
	  state.f = state.inline = linkInline;
	  if (modeCfg.highlightFormatting) state.formatting = "link";
	  var type = getType(state);
	  if (type){
		type += " ";
	  } else {
		type = "";
	  }
	  return type + linkemail;
	}

	if (ch === '<' && stream.match(/^(!--|\w)/, false)) {
	  var end = stream.string.indexOf(">", stream.pos);
	  if (end != -1) {
		var atts = stream.string.substring(stream.start, end);
		if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
	  }
	  stream.backUp(1);
	  state.htmlState = CodeMirror.startState(htmlMode);
	  return switchBlock(stream, state, htmlBlock);
	}

	if (ch === '<' && stream.match(/^\/\w*?>/)) {
	  state.md_inside = false;
	  return "tag";
	}

	var ignoreUnderscore = false;
	if (!modeCfg.underscoresBreakWords) {
	  if (ch === '_' && stream.peek() !== '_' && stream.match(/(\w)/, false)) {
		var prevPos = stream.pos - 2;
		if (prevPos >= 0) {
		  var prevCh = stream.string.charAt(prevPos);
		  if (prevCh !== '_' && prevCh.match(/(\w)/, false)) {
			ignoreUnderscore = true;
		  }
		}
	  }
	}
	if (ch === '*' || (ch === '_' && !ignoreUnderscore)) {
	  if (sol && stream.peek() === ' ') {
		// Do nothing, surrounded by newline and space
	  } else if (state.strong === ch && stream.eat(ch)) { // Remove STRONG
		if (modeCfg.highlightFormatting) state.formatting = "strong";
		var t = getType(state);
		state.strong = false;
		return t;
	  } else if (!state.strong && stream.eat(ch)) { // Add STRONG
		state.strong = ch;
		if (modeCfg.highlightFormatting) state.formatting = "strong";
		return getType(state);
	  } else if (state.em === ch) { // Remove EM
		if (modeCfg.highlightFormatting) state.formatting = "em";
		var t = getType(state);
		state.em = false;
		return t;
	  } else if (!state.em) { // Add EM
		state.em = ch;
		if (modeCfg.highlightFormatting) state.formatting = "em";
		return getType(state);
	  }
	} else if (ch === ' ') {
	  if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
		if (stream.peek() === ' ') { // Surrounded by spaces, ignore
		  return getType(state);
		} else { // Not surrounded by spaces, back up pointer
		  stream.backUp(1);
		}
	  }
	}

	if (modeCfg.strikethrough) {
	  if (ch === '~' && stream.eatWhile(ch)) {
		if (state.strikethrough) {// Remove strikethrough
		  if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
		  var t = getType(state);
		  state.strikethrough = false;
		  return t;
		} else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
		  state.strikethrough = true;
		  if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
		  return getType(state);
		}
	  } else if (ch === ' ') {
		if (stream.match(/^~~/, true)) { // Probably surrounded by space
		  if (stream.peek() === ' ') { // Surrounded by spaces, ignore
			return getType(state);
		  } else { // Not surrounded by spaces, back up pointer
			stream.backUp(2);
		  }
		}
	  }
	}

	if (ch === ' ') {
	  if (stream.match(/ +$/, false)) {
		state.trailingSpace++;
	  } else if (state.trailingSpace) {
		state.trailingSpaceNewLine = true;
	  }
	}

	return getType(state);
  }

  function linkInline(stream, state) {
	var ch = stream.next();

	if (ch === ">") {
	  state.f = state.inline = inlineNormal;
	  if (modeCfg.highlightFormatting) state.formatting = "link";
	  var type = getType(state);
	  if (type){
		type += " ";
	  } else {
		type = "";
	  }
	  return type + linkinline;
	}

	stream.match(/^[^>]+/, true);

	return linkinline;
  }

  function linkHref(stream, state) {
	// Check if space, and return NULL if so (to avoid marking the space)
	if(stream.eatSpace()){
	  return null;
	}
	var ch = stream.next();
	if (ch === '(' || ch === '[') {
	  state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]");
	  if (modeCfg.highlightFormatting) state.formatting = "link-string";
	  state.linkHref = true;
	  return getType(state);
	}
	return 'error';
  }

  function getLinkHrefInside(endChar) {
	return function(stream, state) {
	  var ch = stream.next();

	  if (ch === endChar) {
		state.f = state.inline = inlineNormal;
		if (modeCfg.highlightFormatting) state.formatting = "link-string";
		var returnState = getType(state);
		state.linkHref = false;
		return returnState;
	  }

	  if (stream.match(inlineRE(endChar), true)) {
		stream.backUp(1);
	  }

	  state.linkHref = true;
	  return getType(state);
	};
  }

  function footnoteLink(stream, state) {
	if (stream.match(/^[^\]]*\]:/, false)) {
	  state.f = footnoteLinkInside;
	  stream.next(); // Consume [
	  if (modeCfg.highlightFormatting) state.formatting = "link";
	  state.linkText = true;
	  return getType(state);
	}
	return switchInline(stream, state, inlineNormal);
  }

  function footnoteLinkInside(stream, state) {
	if (stream.match(/^\]:/, true)) {
	  state.f = state.inline = footnoteUrl;
	  if (modeCfg.highlightFormatting) state.formatting = "link";
	  var returnType = getType(state);
	  state.linkText = false;
	  return returnType;
	}

	stream.match(/^[^\]]+/, true);

	return linktext;
  }

  function footnoteUrl(stream, state) {
	// Check if space, and return NULL if so (to avoid marking the space)
	if(stream.eatSpace()){
	  return null;
	}
	// Match URL
	stream.match(/^[^\s]+/, true);
	// Check for link title
	if (stream.peek() === undefined) { // End of line, set flag to check next line
	  state.linkTitle = true;
	} else { // More content on line, check if link title
	  stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
	}
	state.f = state.inline = inlineNormal;
	return linkhref + " url";
  }

  var savedInlineRE = [];
  function inlineRE(endChar) {
	if (!savedInlineRE[endChar]) {
	  // Escape endChar for RegExp (taken from http://stackoverflow.com/a/494122/526741)
	  endChar = (endChar+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	  // Match any non-endChar, escaped character, as well as the closing
	  // endChar.
	  savedInlineRE[endChar] = new RegExp('^(?:[^\\\\]|\\\\.)*?(' + endChar + ')');
	}
	return savedInlineRE[endChar];
  }

  var mode = {
	startState: function() {
	  return {
		f: blockNormal,

		prevLineHasContent: false,
		thisLineHasContent: false,

		block: blockNormal,
		htmlState: null,
		indentation: 0,

		inline: inlineNormal,
		text: handleText,

		formatting: false,
		linkText: false,
		linkHref: false,
		linkTitle: false,
		em: false,
		strong: false,
		header: 0,
		hr: false,
		taskList: false,
		list: false,
		listDepth: 0,
		quote: 0,
		trailingSpace: 0,
		trailingSpaceNewLine: false,
		strikethrough: false
	  };
	},

	copyState: function(s) {
	  return {
		f: s.f,

		prevLineHasContent: s.prevLineHasContent,
		thisLineHasContent: s.thisLineHasContent,

		block: s.block,
		htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
		indentation: s.indentation,

		localMode: s.localMode,
		localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

		inline: s.inline,
		text: s.text,
		formatting: false,
		linkTitle: s.linkTitle,
		em: s.em,
		strong: s.strong,
		strikethrough: s.strikethrough,
		header: s.header,
		hr: s.hr,
		taskList: s.taskList,
		list: s.list,
		listDepth: s.listDepth,
		quote: s.quote,
		indentedCode: s.indentedCode,
		trailingSpace: s.trailingSpace,
		trailingSpaceNewLine: s.trailingSpaceNewLine,
		md_inside: s.md_inside
	  };
	},

	token: function(stream, state) {

	  // Reset state.formatting
	  state.formatting = false;

	  if (stream.sol()) {
		var forceBlankLine = !!state.header || state.hr;

		// Reset state.header and state.hr
		state.header = 0;
		state.hr = false;

		if (stream.match(/^\s*$/, true) || forceBlankLine) {
		  state.prevLineHasContent = false;
		  blankLine(state);
		  return forceBlankLine ? this.token(stream, state) : null;
		} else {
		  state.prevLineHasContent = state.thisLineHasContent;
		  state.thisLineHasContent = true;
		}

		// Reset state.taskList
		state.taskList = false;

		// Reset state.code
		state.code = false;

		// Reset state.trailingSpace
		state.trailingSpace = 0;
		state.trailingSpaceNewLine = false;

		state.f = state.block;
		var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
		var difference = Math.floor((indentation - state.indentation) / 4) * 4;
		if (difference > 4) difference = 4;
		var adjustedIndentation = state.indentation + difference;
		state.indentationDiff = adjustedIndentation - state.indentation;
		state.indentation = adjustedIndentation;
		if (indentation > 0) return null;
	  }
	  return state.f(stream, state);
	},

	innerMode: function(state) {
	  if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
	  if (state.localState) return {state: state.localState, mode: state.localMode};
	  return {state: state, mode: mode};
	},

	blankLine: blankLine,

	getType: getType,

	fold: "markdown"
  };
  return mode;
}, "xml");

CodeMirror.defineMIME("text/x-markdown", "markdown");

});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Utility function that allows modes to be combined. The mode given
// as the base argument takes care of most of the normal mode
// functionality, but a second (typically simple) mode is used, which
// can override the style of text. Both modes get to parse all of the
// text, but when both assign a non-null style to a piece of code, the
// overlay wins, unless the combine argument was true and not overridden,
// or state.overlay.combineTokens was true, in which case the styles are
// combined.

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
	mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
	define(["../../lib/codemirror"], mod);
  else // Plain browser env
	mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.overlayMode = function(base, overlay, combine) {
  return {
	startState: function() {
	  return {
		base: CodeMirror.startState(base),
		overlay: CodeMirror.startState(overlay),
		basePos: 0, baseCur: null,
		overlayPos: 0, overlayCur: null,
		streamSeen: null
	  };
	},
	copyState: function(state) {
	  return {
		base: CodeMirror.copyState(base, state.base),
		overlay: CodeMirror.copyState(overlay, state.overlay),
		basePos: state.basePos, baseCur: null,
		overlayPos: state.overlayPos, overlayCur: null
	  };
	},

	token: function(stream, state) {
	  if (stream != state.streamSeen ||
		  Math.min(state.basePos, state.overlayPos) < stream.start) {
		state.streamSeen = stream;
		state.basePos = state.overlayPos = stream.start;
	  }

	  if (stream.start == state.basePos) {
		state.baseCur = base.token(stream, state.base);
		state.basePos = stream.pos;
	  }
	  if (stream.start == state.overlayPos) {
		stream.pos = stream.start;
		state.overlayCur = overlay.token(stream, state.overlay);
		state.overlayPos = stream.pos;
	  }
	  stream.pos = Math.min(state.basePos, state.overlayPos);

	  // state.overlay.combineTokens always takes precedence over combine,
	  // unless set to null
	  if (state.overlayCur == null) return state.baseCur;
	  else if (state.baseCur != null &&
			   state.overlay.combineTokens ||
			   combine && state.overlay.combineTokens == null)
		return state.baseCur + " " + state.overlayCur;
	  else return state.overlayCur;
	},

	indent: base.indent && function(state, textAfter) {
	  return base.indent(state.base, textAfter);
	},
	electricChars: base.electricChars,

	innerMode: function(state) { return {state: state.base, mode: base}; },

	blankLine: function(state) {
	  if (base.blankLine) base.blankLine(state.base);
	  if (overlay.blankLine) overlay.blankLine(state.overlay);
	}
  };
};

});
// NOTE: This has been modified from the original version to remove linking GitHub-only references, like references to issues using #X.



(function(mod) {
	if (typeof exports == "object" && typeof module == "object") // CommonJS
		mod(require("../../lib/codemirror"), require("../markdown/markdown"), require("../../addon/mode/overlay"));
	else if (typeof define == "function" && define.amd) // AMD
		define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], mod);
	else // Plain browser env
		mod(CodeMirror);
})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("gfm", function(config, modeConfig) {
		var codeDepth = 0;

		function blankLine(state) {
			state.code = false;
			return null;
		}
		var gfmOverlay = {
			startState: function() {
				return {
					code: false,
					codeBlock: false,
					ateSpace: false
				};
			},
			copyState: function(s) {
				return {
					code: s.code,
					codeBlock: s.codeBlock,
					ateSpace: s.ateSpace
				};
			},
			token: function(stream, state) {
				state.combineTokens = null;

				// Hack to prevent formatting override inside code blocks (block and inline)
				if (state.codeBlock) {
					if (stream.match(/^```/)) {
						state.codeBlock = false;
						return null;
					}
					stream.skipToEnd();
					return null;
				}
				if (stream.sol()) {
					state.code = false;
				}
				if (stream.sol() && stream.match(/^```/)) {
					stream.skipToEnd();
					state.codeBlock = true;
					return null;
				}
				// If this block is changed, it may need to be updated in Markdown mode
				if (stream.peek() === '`') {
					stream.next();
					var before = stream.pos;
					stream.eatWhile('`');
					var difference = 1 + stream.pos - before;
					if (!state.code) {
						codeDepth = difference;
						state.code = true;
					} else {
						if (difference === codeDepth) { // Must be exact
							state.code = false;
						}
					}
					return null;
				} else if (state.code) {
					stream.next();
					return null;
				}
				// Check if space. If so, links can be formatted later on
				if (stream.eatSpace()) {
					state.ateSpace = true;
					return null;
				}
				if (stream.sol() || state.ateSpace) {
					state.ateSpace = false;
				}
				if (stream.match(/^((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i) &&
					stream.string.slice(stream.start - 2, stream.start) != "](") {
					// URLs
					// Taken from http://daringfireball.net/2010/07/improved_regex_for_matching_urls
					// And then (issue #1160) simplified to make it not crash the Chrome Regexp engine
					state.combineTokens = true;
					return "link";
				}
				stream.next();
				return null;
			},
			blankLine: blankLine
		};

		var markdownConfig = {
			underscoresBreakWords: false,
			taskLists: true,
			fencedCodeBlocks: true,
			strikethrough: true
		};
		for (var attr in modeConfig) {
			markdownConfig[attr] = modeConfig[attr];
		}
		markdownConfig.name = "markdown";
		return CodeMirror.overlayMode(CodeMirror.getMode(config, markdownConfig), gfmOverlay);

	}, "markdown");

	CodeMirror.defineMIME("text/x-gfm", "gfm");
});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
	mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
	define(["../../lib/codemirror"], mod);
  else // Plain browser env
	mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("xml", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var multilineTagIndentFactor = parserConfig.multilineTagIndentFactor || 1;
  var multilineTagIndentPastTag = parserConfig.multilineTagIndentPastTag;
  if (multilineTagIndentPastTag == null) multilineTagIndentPastTag = true;

  var Kludges = parserConfig.htmlMode ? {
	autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
					  'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
					  'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
					  'track': true, 'wbr': true, 'menuitem': true},
	implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
					   'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
					   'th': true, 'tr': true},
	contextGrabbers: {
	  'dd': {'dd': true, 'dt': true},
	  'dt': {'dd': true, 'dt': true},
	  'li': {'li': true},
	  'option': {'option': true, 'optgroup': true},
	  'optgroup': {'optgroup': true},
	  'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
			'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
			'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
			'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
			'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
	  'rp': {'rp': true, 'rt': true},
	  'rt': {'rp': true, 'rt': true},
	  'tbody': {'tbody': true, 'tfoot': true},
	  'td': {'td': true, 'th': true},
	  'tfoot': {'tbody': true},
	  'th': {'td': true, 'th': true},
	  'thead': {'tbody': true, 'tfoot': true},
	  'tr': {'tr': true}
	},
	doNotIndent: {"pre": true},
	allowUnquoted: true,
	allowMissing: true,
	caseFold: true
  } : {
	autoSelfClosers: {},
	implicitlyClosed: {},
	contextGrabbers: {},
	doNotIndent: {},
	allowUnquoted: false,
	allowMissing: false,
	caseFold: false
  };
  var alignCDATA = parserConfig.alignCDATA;

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
	function chain(parser) {
	  state.tokenize = parser;
	  return parser(stream, state);
	}

	var ch = stream.next();
	if (ch == "<") {
	  if (stream.eat("!")) {
		if (stream.eat("[")) {
		  if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
		  else return null;
		} else if (stream.match("--")) {
		  return chain(inBlock("comment", "-->"));
		} else if (stream.match("DOCTYPE", true, true)) {
		  stream.eatWhile(/[\w\._\-]/);
		  return chain(doctype(1));
		} else {
		  return null;
		}
	  } else if (stream.eat("?")) {
		stream.eatWhile(/[\w\._\-]/);
		state.tokenize = inBlock("meta", "?>");
		return "meta";
	  } else {
		type = stream.eat("/") ? "closeTag" : "openTag";
		state.tokenize = inTag;
		return "tag bracket";
	  }
	} else if (ch == "&") {
	  var ok;
	  if (stream.eat("#")) {
		if (stream.eat("x")) {
		  ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
		} else {
		  ok = stream.eatWhile(/[\d]/) && stream.eat(";");
		}
	  } else {
		ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
	  }
	  return ok ? "atom" : "error";
	} else {
	  stream.eatWhile(/[^&<]/);
	  return null;
	}
  }
  inText.isInText = true;

  function inTag(stream, state) {
	var ch = stream.next();
	if (ch == ">" || (ch == "/" && stream.eat(">"))) {
	  state.tokenize = inText;
	  type = ch == ">" ? "endTag" : "selfcloseTag";
	  return "tag bracket";
	} else if (ch == "=") {
	  type = "equals";
	  return null;
	} else if (ch == "<") {
	  state.tokenize = inText;
	  state.state = baseState;
	  state.tagName = state.tagStart = null;
	  var next = state.tokenize(stream, state);
	  return next ? next + " tag error" : "tag error";
	} else if (/[\'\"]/.test(ch)) {
	  state.tokenize = inAttribute(ch);
	  state.stringStartCol = stream.column();
	  return state.tokenize(stream, state);
	} else {
	  stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
	  return "word";
	}
  }

  function inAttribute(quote) {
	var closure = function(stream, state) {
	  while (!stream.eol()) {
		if (stream.next() == quote) {
		  state.tokenize = inTag;
		  break;
		}
	  }
	  return "string";
	};
	closure.isInAttribute = true;
	return closure;
  }

  function inBlock(style, terminator) {
	return function(stream, state) {
	  while (!stream.eol()) {
		if (stream.match(terminator)) {
		  state.tokenize = inText;
		  break;
		}
		stream.next();
	  }
	  return style;
	};
  }
  function doctype(depth) {
	return function(stream, state) {
	  var ch;
	  while ((ch = stream.next()) != null) {
		if (ch == "<") {
		  state.tokenize = doctype(depth + 1);
		  return state.tokenize(stream, state);
		} else if (ch == ">") {
		  if (depth == 1) {
			state.tokenize = inText;
			break;
		  } else {
			state.tokenize = doctype(depth - 1);
			return state.tokenize(stream, state);
		  }
		}
	  }
	  return "meta";
	};
  }

  function Context(state, tagName, startOfLine) {
	this.prev = state.context;
	this.tagName = tagName;
	this.indent = state.indented;
	this.startOfLine = startOfLine;
	if (Kludges.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
	  this.noIndent = true;
  }
  function popContext(state) {
	if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
	var parentTagName;
	while (true) {
	  if (!state.context) {
		return;
	  }
	  parentTagName = state.context.tagName;
	  if (!Kludges.contextGrabbers.hasOwnProperty(parentTagName) ||
		  !Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
		return;
	  }
	  popContext(state);
	}
  }

  function baseState(type, stream, state) {
	if (type == "openTag") {
	  state.tagStart = stream.column();
	  return tagNameState;
	} else if (type == "closeTag") {
	  return closeTagNameState;
	} else {
	  return baseState;
	}
  }
  function tagNameState(type, stream, state) {
	if (type == "word") {
	  state.tagName = stream.current();
	  setStyle = "tag";
	  return attrState;
	} else {
	  setStyle = "error";
	  return tagNameState;
	}
  }
  function closeTagNameState(type, stream, state) {
	if (type == "word") {
	  var tagName = stream.current();
	  if (state.context && state.context.tagName != tagName &&
		  Kludges.implicitlyClosed.hasOwnProperty(state.context.tagName))
		popContext(state);
	  if (state.context && state.context.tagName == tagName) {
		setStyle = "tag";
		return closeState;
	  } else {
		setStyle = "tag error";
		return closeStateErr;
	  }
	} else {
	  setStyle = "error";
	  return closeStateErr;
	}
  }

  function closeState(type, _stream, state) {
	if (type != "endTag") {
	  setStyle = "error";
	  return closeState;
	}
	popContext(state);
	return baseState;
  }
  function closeStateErr(type, stream, state) {
	setStyle = "error";
	return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
	if (type == "word") {
	  setStyle = "attribute";
	  return attrEqState;
	} else if (type == "endTag" || type == "selfcloseTag") {
	  var tagName = state.tagName, tagStart = state.tagStart;
	  state.tagName = state.tagStart = null;
	  if (type == "selfcloseTag" ||
		  Kludges.autoSelfClosers.hasOwnProperty(tagName)) {
		maybePopContext(state, tagName);
	  } else {
		maybePopContext(state, tagName);
		state.context = new Context(state, tagName, tagStart == state.indented);
	  }
	  return baseState;
	}
	setStyle = "error";
	return attrState;
  }
  function attrEqState(type, stream, state) {
	if (type == "equals") return attrValueState;
	if (!Kludges.allowMissing) setStyle = "error";
	return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
	if (type == "string") return attrContinuedState;
	if (type == "word" && Kludges.allowUnquoted) {setStyle = "string"; return attrState;}
	setStyle = "error";
	return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
	if (type == "string") return attrContinuedState;
	return attrState(type, stream, state);
  }

  return {
	startState: function() {
	  return {tokenize: inText,
			  state: baseState,
			  indented: 0,
			  tagName: null, tagStart: null,
			  context: null};
	},

	token: function(stream, state) {
	  if (!state.tagName && stream.sol())
		state.indented = stream.indentation();

	  if (stream.eatSpace()) return null;
	  type = null;
	  var style = state.tokenize(stream, state);
	  if ((style || type) && style != "comment") {
		setStyle = null;
		state.state = state.state(type || style, stream, state);
		if (setStyle)
		  style = setStyle == "error" ? style + " error" : setStyle;
	  }
	  return style;
	},

	indent: function(state, textAfter, fullLine) {
	  var context = state.context;
	  // Indent multi-line strings (e.g. css).
	  if (state.tokenize.isInAttribute) {
		if (state.tagStart == state.indented)
		  return state.stringStartCol + 1;
		else
		  return state.indented + indentUnit;
	  }
	  if (context && context.noIndent) return CodeMirror.Pass;
	  if (state.tokenize != inTag && state.tokenize != inText)
		return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
	  // Indent the starts of attribute names.
	  if (state.tagName) {
		if (multilineTagIndentPastTag)
		  return state.tagStart + state.tagName.length + 2;
		else
		  return state.tagStart + indentUnit * multilineTagIndentFactor;
	  }
	  if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
	  var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
	  if (tagAfter && tagAfter[1]) { // Closing tag spotted
		while (context) {
		  if (context.tagName == tagAfter[2]) {
			context = context.prev;
			break;
		  } else if (Kludges.implicitlyClosed.hasOwnProperty(context.tagName)) {
			context = context.prev;
		  } else {
			break;
		  }
		}
	  } else if (tagAfter) { // Opening tag spotted
		while (context) {
		  var grabbers = Kludges.contextGrabbers[context.tagName];
		  if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
			context = context.prev;
		  else
			break;
		}
	  }
	  while (context && !context.startOfLine)
		context = context.prev;
	  if (context) return context.indent + indentUnit;
	  else return 0;
	},

	electricInput: /<\/[\s\w:]+>$/,
	blockCommentStart: "<!--",
	blockCommentEnd: "-->",

	configuration: parserConfig.htmlMode ? "html" : "xml",
	helperType: parserConfig.htmlMode ? "html" : "xml"
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});
'use strict';

/**
 * Typo is a JavaScript implementation of a spellchecker using hunspell-style
 * dictionaries.
 */

/**
 * Typo constructor.
 *
 * @param {String} [dictionary] The locale code of the dictionary being used. e.g.,
 *                              "en_US". This is only used to auto-load dictionaries.
 * @param {String} [affData] The data from the dictionary's .aff file. If omitted
 *                           and the first argument is supplied, in "chrome" platform,
 *                           the .aff file will be loaded automatically from
 *                           lib/typo/dictionaries/[dictionary]/[dictionary].aff
 *                           In other platform, it will be loaded from
 *                           [setting.path]/dictionaries/[dictionary]/[dictionary].aff
 * @param {String} [wordsData] The data from the dictionary's .dic file. If omitted,
 *                           and the first argument is supplied, in "chrome" platform,
 *                           the .dic file will be loaded automatically from
 *                           lib/typo/dictionaries/[dictionary]/[dictionary].dic
 *                           In other platform, it will be loaded from
 *                           [setting.path]/dictionaries/[dictionary]/[dictionary].dic
 * @param {Object} [settings] Constructor settings. Available properties are:
 *                            {String} [platform]: "chrome" for Chrome Extension or other
 *                              value for the usual web.
 *                            {String} [dictionaryPath]: path to load dictionary from in non-chrome
 *                              environment.
 *                            {Object} [flags]: flag information.
 *
 *
 * @returns {Typo} A Typo object.
 */

var Typo = function (dictionary, affData, wordsData, settings) {
	settings = settings || {};
	
	/** Determines the method used for auto-loading .aff and .dic files. **/
	this.platform = settings.platform || "chrome";
	
	this.dictionary = null;
	
	this.rules = {};
	this.dictionaryTable = {};
	
	this.compoundRules = [];
	this.compoundRuleCodes = {};
	
	this.replacementTable = [];
	
	this.flags = settings.flags || {};
	
	if (dictionary) {
		this.dictionary = dictionary;
		
		if (this.platform == "chrome") {
			if (!affData) affData = this._readFile(chrome.extension.getURL("lib/typo/dictionaries/" + dictionary + "/" + dictionary + ".aff"));
			if (!wordsData) wordsData = this._readFile(chrome.extension.getURL("lib/typo/dictionaries/" + dictionary + "/" + dictionary + ".dic"));
		} else {
			var path = settings.dictionaryPath || '';
			
			if (!affData) affData = this._readFile(path + "/" + dictionary + "/" + dictionary + ".aff");
			if (!wordsData) wordsData = this._readFile(path + "/" + dictionary + "/" + dictionary + ".dic");
		}
		
		this.rules = this._parseAFF(affData);
		
		// Save the rule codes that are used in compound rules.
		this.compoundRuleCodes = {};
		
		for (var i = 0, _len = this.compoundRules.length; i < _len; i++) {
			var rule = this.compoundRules[i];
			
			for (var j = 0, _jlen = rule.length; j < _jlen; j++) {
				this.compoundRuleCodes[rule[j]] = [];
			}
		}
		
		// If we add this ONLYINCOMPOUND flag to this.compoundRuleCodes, then _parseDIC
		// will do the work of saving the list of words that are compound-only.
		if ("ONLYINCOMPOUND" in this.flags) {
			this.compoundRuleCodes[this.flags.ONLYINCOMPOUND] = [];
		}
		
		this.dictionaryTable = this._parseDIC(wordsData);
		
		// Get rid of any codes from the compound rule codes that are never used
		// (or that were special regex characters).  Not especially necessary...
		for (var i in this.compoundRuleCodes) {
			if (this.compoundRuleCodes[i].length == 0) {
				delete this.compoundRuleCodes[i];
			}
		}
		
		// Build the full regular expressions for each compound rule.
		// I have a feeling (but no confirmation yet) that this method of
		// testing for compound words is probably slow.
		for (var i = 0, _len = this.compoundRules.length; i < _len; i++) {
			var ruleText = this.compoundRules[i];
			
			var expressionText = "";
			
			for (var j = 0, _jlen = ruleText.length; j < _jlen; j++) {
				var character = ruleText[j];
				
				if (character in this.compoundRuleCodes) {
					expressionText += "(" + this.compoundRuleCodes[character].join("|") + ")";
				}
				else {
					expressionText += character;
				}
			}
			
			this.compoundRules[i] = new RegExp(expressionText, "i");
		}
	}
	
	return this;
};

Typo.prototype = {
	/**
	 * Loads a Typo instance from a hash of all of the Typo properties.
	 *
	 * @param object obj A hash of Typo properties, probably gotten from a JSON.parse(JSON.stringify(typo_instance)).
	 */
	
	load : function (obj) {
		for (var i in obj) {
			this[i] = obj[i];
		}
		
		return this;
	},
	
	/**
	 * Read the contents of a file.
	 *
	 * @param {String} path The path (relative) to the file.
	 * @param {String} [charset="ISO8859-1"] The expected charset of the file
	 * @returns string The file data.
	 */
	
	_readFile : function (path, charset) {
		if (!charset) charset = "ISO8859-1";
		
		var req = new XMLHttpRequest();
		req.open("GET", path, false);
		
		if (req.overrideMimeType)
			req.overrideMimeType("text/plain; charset=" + charset);
		
		req.send(null);
		
		return req.responseText;
	},
	
	/**
	 * Parse the rules out from a .aff file.
	 *
	 * @param {String} data The contents of the affix file.
	 * @returns object The rules from the file.
	 */
	
	_parseAFF : function (data) {
		var rules = {};
		
		// Remove comment lines
		data = this._removeAffixComments(data);
		
		var lines = data.split("\n");
		
		for (var i = 0, _len = lines.length; i < _len; i++) {
			var line = lines[i];
			
			var definitionParts = line.split(/\s+/);
			
			var ruleType = definitionParts[0];
			
			if (ruleType == "PFX" || ruleType == "SFX") {
				var ruleCode = definitionParts[1];
				var combineable = definitionParts[2];
				var numEntries = parseInt(definitionParts[3], 10);
				
				var entries = [];
				
				for (var j = i + 1, _jlen = i + 1 + numEntries; j < _jlen; j++) {
					var line = lines[j];
					
					var lineParts = line.split(/\s+/);
					var charactersToRemove = lineParts[2];
					
					var additionParts = lineParts[3].split("/");
					
					var charactersToAdd = additionParts[0];
					if (charactersToAdd === "0") charactersToAdd = "";
					
					var continuationClasses = this.parseRuleCodes(additionParts[1]);
					
					var regexToMatch = lineParts[4];
					
					var entry = {};
					entry.add = charactersToAdd;
					
					if (continuationClasses.length > 0) entry.continuationClasses = continuationClasses;
					
					if (regexToMatch !== ".") {
						if (ruleType === "SFX") {
							entry.match = new RegExp(regexToMatch + "$");
						}
						else {
							entry.match = new RegExp("^" + regexToMatch);
						}
					}
					
					if (charactersToRemove != "0") {
						if (ruleType === "SFX") {
							entry.remove = new RegExp(charactersToRemove  + "$");
						}
						else {
							entry.remove = charactersToRemove;
						}
					}
					
					entries.push(entry);
				}
				
				rules[ruleCode] = { "type" : ruleType, "combineable" : (combineable == "Y"), "entries" : entries };
				
				i += numEntries;
			}
			else if (ruleType === "COMPOUNDRULE") {
				var numEntries = parseInt(definitionParts[1], 10);
				
				for (var j = i + 1, _jlen = i + 1 + numEntries; j < _jlen; j++) {
					var line = lines[j];
					
					var lineParts = line.split(/\s+/);
					this.compoundRules.push(lineParts[1]);
				}
				
				i += numEntries;
			}
			else if (ruleType === "REP") {
				var lineParts = line.split(/\s+/);
				
				if (lineParts.length === 3) {
					this.replacementTable.push([ lineParts[1], lineParts[2] ]);
				}
			}
			else {
				// ONLYINCOMPOUND
				// COMPOUNDMIN
				// FLAG
				// KEEPCASE
				// NEEDAFFIX
				
				this.flags[ruleType] = definitionParts[1];
			}
		}
		
		return rules;
	},
	
	/**
	 * Removes comment lines and then cleans up blank lines and trailing whitespace.
	 *
	 * @param {String} data The data from an affix file.
	 * @return {String} The cleaned-up data.
	 */
	
	_removeAffixComments : function (data) {
		// Remove comments
		data = data.replace(/#.*$/mg, "");
		
		// Trim each line
		data = data.replace(/^\s\s*/m, '').replace(/\s\s*$/m, '');
		
		// Remove blank lines.
		data = data.replace(/\n{2,}/g, "\n");
		
		// Trim the entire string
		data = data.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		
		return data;
	},
	
	/**
	 * Parses the words out from the .dic file.
	 *
	 * @param {String} data The data from the dictionary file.
	 * @returns object The lookup table containing all of the words and
	 *                 word forms from the dictionary.
	 */
	
	_parseDIC : function (data) {
		data = this._removeDicComments(data);
		
		var lines = data.split("\n");
		var dictionaryTable = {};
		
		function addWord(word, rules) {
			// Some dictionaries will list the same word multiple times with different rule sets.
			if (!(word in dictionaryTable) || typeof dictionaryTable[word] != 'object') {
				dictionaryTable[word] = [];
			}
			
			dictionaryTable[word].push(rules);
		}
		
		// The first line is the number of words in the dictionary.
		for (var i = 1, _len = lines.length; i < _len; i++) {
			var line = lines[i];
			
			var parts = line.split("/", 2);
			
			var word = parts[0];

			// Now for each affix rule, generate that form of the word.
			if (parts.length > 1) {
				var ruleCodesArray = this.parseRuleCodes(parts[1]);
				
				// Save the ruleCodes for compound word situations.
				if (!("NEEDAFFIX" in this.flags) || ruleCodesArray.indexOf(this.flags.NEEDAFFIX) == -1) {
					addWord(word, ruleCodesArray);
				}
				
				for (var j = 0, _jlen = ruleCodesArray.length; j < _jlen; j++) {
					var code = ruleCodesArray[j];
					
					var rule = this.rules[code];
					
					if (rule) {
						var newWords = this._applyRule(word, rule);
						
						for (var ii = 0, _iilen = newWords.length; ii < _iilen; ii++) {
							var newWord = newWords[ii];
							
							addWord(newWord, []);
							
							if (rule.combineable) {
								for (var k = j + 1; k < _jlen; k++) {
									var combineCode = ruleCodesArray[k];
									
									var combineRule = this.rules[combineCode];
									
									if (combineRule) {
										if (combineRule.combineable && (rule.type != combineRule.type)) {
											var otherNewWords = this._applyRule(newWord, combineRule);
											
											for (var iii = 0, _iiilen = otherNewWords.length; iii < _iiilen; iii++) {
												var otherNewWord = otherNewWords[iii];
												addWord(otherNewWord, []);
											}
										}
									}
								}
							}
						}
					}
					
					if (code in this.compoundRuleCodes) {
						this.compoundRuleCodes[code].push(word);
					}
				}
			}
			else {
				addWord(word.trim(), []);
			}
		}
		
		return dictionaryTable;
	},
	
	
	/**
	 * Removes comment lines and then cleans up blank lines and trailing whitespace.
	 *
	 * @param {String} data The data from a .dic file.
	 * @return {String} The cleaned-up data.
	 */
	
	_removeDicComments : function (data) {
		// I can't find any official documentation on it, but at least the de_DE
		// dictionary uses tab-indented lines as comments.
		
		// Remove comments
		data = data.replace(/^\t.*$/mg, "");
		
		return data;
		
		// Trim each line
		data = data.replace(/^\s\s*/m, '').replace(/\s\s*$/m, '');
		
		// Remove blank lines.
		data = data.replace(/\n{2,}/g, "\n");
		
		// Trim the entire string
		data = data.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		
		return data;
	},
	
	parseRuleCodes : function (textCodes) {
		if (!textCodes) {
			return [];
		}
		else if (!("FLAG" in this.flags)) {
			return textCodes.split("");
		}
		else if (this.flags.FLAG === "long") {
			var flags = [];
			
			for (var i = 0, _len = textCodes.length; i < _len; i += 2) {
				flags.push(textCodes.substr(i, 2));
			}
			
			return flags;
		}
		else if (this.flags.FLAG === "num") {
			return textCode.split(",");
		}
	},
	
	/**
	 * Applies an affix rule to a word.
	 *
	 * @param {String} word The base word.
	 * @param {Object} rule The affix rule.
	 * @returns {String[]} The new words generated by the rule.
	 */
	
	_applyRule : function (word, rule) {
		var entries = rule.entries;
		var newWords = [];
		
		for (var i = 0, _len = entries.length; i < _len; i++) {
			var entry = entries[i];
			
			if (!entry.match || word.match(entry.match)) {
				var newWord = word;
				
				if (entry.remove) {
					newWord = newWord.replace(entry.remove, "");
				}
				
				if (rule.type === "SFX") {
					newWord = newWord + entry.add;
				}
				else {
					newWord = entry.add + newWord;
				}
				
				newWords.push(newWord);
				
				if ("continuationClasses" in entry) {
					for (var j = 0, _jlen = entry.continuationClasses.length; j < _jlen; j++) {
						var continuationRule = this.rules[entry.continuationClasses[j]];
						
						if (continuationRule) {
							newWords = newWords.concat(this._applyRule(newWord, continuationRule));
						}
						/*
						else {
							// This shouldn't happen, but it does, at least in the de_DE dictionary.
							// I think the author mistakenly supplied lower-case rule codes instead
							// of upper-case.
						}
						*/
					}
				}
			}
		}
		
		return newWords;
	},
	
	/**
	 * Checks whether a word or a capitalization variant exists in the current dictionary.
	 * The word is trimmed and several variations of capitalizations are checked.
	 * If you want to check a word without any changes made to it, call checkExact()
	 *
	 * @see http://blog.stevenlevithan.com/archives/faster-trim-javascript re:trimming function
	 *
	 * @param {String} aWord The word to check.
	 * @returns {Boolean}
	 */
	
	check : function (aWord) {
		// Remove leading and trailing whitespace
		var trimmedWord = aWord.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		
		if (this.checkExact(trimmedWord)) {
			return true;
		}
		
		// The exact word is not in the dictionary.
		if (trimmedWord.toUpperCase() === trimmedWord) {
			// The word was supplied in all uppercase.
			// Check for a capitalized form of the word.
			var capitalizedWord = trimmedWord[0] + trimmedWord.substring(1).toLowerCase();
			
			if (this.hasFlag(capitalizedWord, "KEEPCASE")) {
				// Capitalization variants are not allowed for this word.
				return false;
			}
			
			if (this.checkExact(capitalizedWord)) {
				return true;
			}
		}
		
		var lowercaseWord = trimmedWord.toLowerCase();
		
		if (lowercaseWord !== trimmedWord) {
			if (this.hasFlag(lowercaseWord, "KEEPCASE")) {
				// Capitalization variants are not allowed for this word.
				return false;
			}
			
			// Check for a lowercase form
			if (this.checkExact(lowercaseWord)) {
				return true;
			}
		}
		
		return false;
	},
	
	/**
	 * Checks whether a word exists in the current dictionary.
	 *
	 * @param {String} word The word to check.
	 * @returns {Boolean}
	 */
	
	checkExact : function (word) {
		var ruleCodes = this.dictionaryTable[word];
		
		if (typeof ruleCodes === 'undefined') {
			// Check if this might be a compound word.
			if ("COMPOUNDMIN" in this.flags && word.length >= this.flags.COMPOUNDMIN) {
				for (var i = 0, _len = this.compoundRules.length; i < _len; i++) {
					if (word.match(this.compoundRules[i])) {
						return true;
					}
				}
			}
			
			return false;
		}
		else {
			for (var i = 0, _len = ruleCodes.length; i < _len; i++) {
				if (!this.hasFlag(word, "ONLYINCOMPOUND", ruleCodes[i])) {
					return true;
				}
			}
			
			return false;
		}
	},
	
	/**
	 * Looks up whether a given word is flagged with a given flag.
	 *
	 * @param {String} word The word in question.
	 * @param {String} flag The flag in question.
	 * @return {Boolean}
	 */
	 
	hasFlag : function (word, flag, wordFlags) {
		if (flag in this.flags) {
			if (typeof wordFlags === 'undefined') {
				var wordFlags = Array.prototype.concat.apply([], this.dictionaryTable[word]);
			}
			
			if (wordFlags && wordFlags.indexOf(this.flags[flag]) !== -1) {
				return true;
			}
		}
		
		return false;
	},
	
	/**
	 * Returns a list of suggestions for a misspelled word.
	 *
	 * @see http://www.norvig.com/spell-correct.html for the basis of this suggestor.
	 * This suggestor is primitive, but it works.
	 *
	 * @param {String} word The misspelling.
	 * @param {Number} [limit=5] The maximum number of suggestions to return.
	 * @returns {String[]} The array of suggestions.
	 */
	
	alphabet : "",
	
	suggest : function (word, limit) {
		if (!limit) limit = 5;
		
		if (this.check(word)) return [];
		
		// Check the replacement table.
		for (var i = 0, _len = this.replacementTable.length; i < _len; i++) {
			var replacementEntry = this.replacementTable[i];
			
			if (word.indexOf(replacementEntry[0]) !== -1) {
				var correctedWord = word.replace(replacementEntry[0], replacementEntry[1]);
				
				if (this.check(correctedWord)) {
					return [ correctedWord ];
				}
			}
		}
		
		var self = this;
		self.alphabet = "abcdefghijklmnopqrstuvwxyz";
		
		/*
		if (!self.alphabet) {
			// Use the alphabet as implicitly defined by the words in the dictionary.
			var alphaHash = {};
			
			for (var i in self.dictionaryTable) {
				for (var j = 0, _len = i.length; j < _len; j++) {
					alphaHash[i[j]] = true;
				}
			}
			
			for (var i in alphaHash) {
				self.alphabet += i;
			}
			
			var alphaArray = self.alphabet.split("");
			alphaArray.sort();
			self.alphabet = alphaArray.join("");
		}
		*/
		
		function edits1(words) {
			var rv = [];
			
			for (var ii = 0, _iilen = words.length; ii < _iilen; ii++) {
				var word = words[ii];
				
				var splits = [];
			
				for (var i = 0, _len = word.length + 1; i < _len; i++) {
					splits.push([ word.substring(0, i), word.substring(i, word.length) ]);
				}
			
				var deletes = [];
			
				for (var i = 0, _len = splits.length; i < _len; i++) {
					var s = splits[i];
				
					if (s[1]) {
						deletes.push(s[0] + s[1].substring(1));
					}
				}
			
				var transposes = [];
			
				for (var i = 0, _len = splits.length; i < _len; i++) {
					var s = splits[i];
				
					if (s[1].length > 1) {
						transposes.push(s[0] + s[1][1] + s[1][0] + s[1].substring(2));
					}
				}
			
				var replaces = [];
			
				for (var i = 0, _len = splits.length; i < _len; i++) {
					var s = splits[i];
				
					if (s[1]) {
						for (var j = 0, _jlen = self.alphabet.length; j < _jlen; j++) {
							replaces.push(s[0] + self.alphabet[j] + s[1].substring(1));
						}
					}
				}
			
				var inserts = [];
			
				for (var i = 0, _len = splits.length; i < _len; i++) {
					var s = splits[i];
				
					if (s[1]) {
						for (var j = 0, _jlen = self.alphabet.length; j < _jlen; j++) {
							replaces.push(s[0] + self.alphabet[j] + s[1]);
						}
					}
				}
			
				rv = rv.concat(deletes);
				rv = rv.concat(transposes);
				rv = rv.concat(replaces);
				rv = rv.concat(inserts);
			}
			
			return rv;
		}
		
		function known(words) {
			var rv = [];
			
			for (var i = 0; i < words.length; i++) {
				if (self.check(words[i])) {
					rv.push(words[i]);
				}
			}
			
			return rv;
		}
		
		function correct(word) {
			// Get the edit-distance-1 and edit-distance-2 forms of this word.
			var ed1 = edits1([word]);
			var ed2 = edits1(ed1);
			
			var corrections = known(ed1).concat(known(ed2));
			
			// Sort the edits based on how many different ways they were created.
			var weighted_corrections = {};
			
			for (var i = 0, _len = corrections.length; i < _len; i++) {
				if (!(corrections[i] in weighted_corrections)) {
					weighted_corrections[corrections[i]] = 1;
				}
				else {
					weighted_corrections[corrections[i]] += 1;
				}
			}
			
			var sorted_corrections = [];
			
			for (var i in weighted_corrections) {
				sorted_corrections.push([ i, weighted_corrections[i] ]);
			}
			
			function sorter(a, b) {
				if (a[1] < b[1]) {
					return -1;
				}
				
				return 1;
			}
			
			sorted_corrections.sort(sorter).reverse();
			
			var rv = [];
			
			for (var i = 0, _len = Math.min(limit, sorted_corrections.length); i < _len; i++) {
				if (!self.hasFlag(sorted_corrections[i][0], "NOSUGGEST")) {
					rv.push(sorted_corrections[i][0]);
				}
			}
			
			return rv;
		}
		
		return correct(word);
	}
};
// Initialize data globally to reduce memory consumption
var num_loaded = 0;
var aff_loading = false;
var dic_loading = false;
var aff_data = "";
var dic_data = "";
var typo;


CodeMirror.defineMode("spell-checker", function(config, parserConfig) {
	// Load AFF/DIC data
	if(!aff_loading){
		aff_loading = true;
		var xhr_aff = new XMLHttpRequest();
		xhr_aff.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", true);
		xhr_aff.onload = function (e) {
			if (xhr_aff.readyState === 4 && xhr_aff.status === 200) {
				aff_data = xhr_aff.responseText;
				num_loaded++;
				
				if(num_loaded == 2){
					typo = new Typo("en_US", aff_data, dic_data, {
						platform: 'any'
					});
				}
			}
		};
		xhr_aff.send(null);
	}
	
	if(!dic_loading){
		dic_loading = true;
		var xhr_dic = new XMLHttpRequest();
		xhr_dic.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", true);
		xhr_dic.onload = function (e) {
			if (xhr_dic.readyState === 4 && xhr_dic.status === 200) {
				dic_data = xhr_dic.responseText;
				num_loaded++;
				
				if(num_loaded == 2){
					typo = new Typo("en_US", aff_data, dic_data, {
						platform: 'any'
					});
				}
			}
		};
		xhr_dic.send(null);
	}

	
	
	// Define what separates a word
	var rx_word = "!\"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ";
	
	
	// Create the overlay and such
	var overlay = {
		token: function(stream, state) {
			var ch = stream.peek();
			var word = "";

			if(rx_word.includes(ch)) {
				stream.next();
				return null;
			}

			while((ch = stream.peek()) != null && !rx_word.includes(ch)) {
				word += ch;
				stream.next();
			}

			if(typo && !typo.check(word))
				return "spell-error"; // CSS class: cm-spell-error

			return null;
		}
	};

	var mode = CodeMirror.getMode(
		config, config.backdrop || "text/plain"
	);

	return CodeMirror.overlayMode(mode, overlay, true);
});


// Because some browsers don't support this functionality yet
if(!String.prototype.includes) {
	String.prototype.includes = function() {'use strict';
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};
}
/**
 * marked - a markdown parser - v0.3.5
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
	+ block.gfm.fences.source.replace('\\1', '\\2') + '|'
	+ block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
	if (this.options.tables) {
	  this.rules = block.tables;
	} else {
	  this.rules = block.gfm;
	}
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
	.replace(/\r\n|\r/g, '\n')
	.replace(/\t/g, '    ')
	.replace(/\u00a0/g, ' ')
	.replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
	, next
	, loose
	, cap
	, bull
	, b
	, item
	, space
	, i
	, l;

  while (src) {
	// newline
	if (cap = this.rules.newline.exec(src)) {
	  src = src.substring(cap[0].length);
	  if (cap[0].length > 1) {
		this.tokens.push({
		  type: 'space'
		});
	  }
	}

	// code
	if (cap = this.rules.code.exec(src)) {
	  src = src.substring(cap[0].length);
	  cap = cap[0].replace(/^ {4}/gm, '');
	  this.tokens.push({
		type: 'code',
		text: !this.options.pedantic
		  ? cap.replace(/\n+$/, '')
		  : cap
	  });
	  continue;
	}

	// fences (gfm)
	if (cap = this.rules.fences.exec(src)) {
	  src = src.substring(cap[0].length);
	  this.tokens.push({
		type: 'code',
		lang: cap[2],
		text: cap[3] || ''
	  });
	  continue;
	}

	// heading
	if (cap = this.rules.heading.exec(src)) {
	  src = src.substring(cap[0].length);
	  this.tokens.push({
		type: 'heading',
		depth: cap[1].length,
		text: cap[2]
	  });
	  continue;
	}

	// table no leading pipe (gfm)
	if (top && (cap = this.rules.nptable.exec(src))) {
	  src = src.substring(cap[0].length);

	  item = {
		type: 'table',
		header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
		align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
		cells: cap[3].replace(/\n$/, '').split('\n')
	  };

	  for (i = 0; i < item.align.length; i++) {
		if (/^ *-+: *$/.test(item.align[i])) {
		  item.align[i] = 'right';
		} else if (/^ *:-+: *$/.test(item.align[i])) {
		  item.align[i] = 'center';
		} else if (/^ *:-+ *$/.test(item.align[i])) {
		  item.align[i] = 'left';
		} else {
		  item.align[i] = null;
		}
	  }

	  for (i = 0; i < item.cells.length; i++) {
		item.cells[i] = item.cells[i].split(/ *\| */);
	  }

	  this.tokens.push(item);

	  continue;
	}

	// lheading
	if (cap = this.rules.lheading.exec(src)) {
	  src = src.substring(cap[0].length);
	  this.tokens.push({
		type: 'heading',
		depth: cap[2] === '=' ? 1 : 2,
		text: cap[1]
	  });
	  continue;
	}

	// hr
	if (cap = this.rules.hr.exec(src)) {
	  src = src.substring(cap[0].length);
	  this.tokens.push({
		type: 'hr'
	  });
	  continue;
	}

	// blockquote
	if (cap = this.rules.blockquote.exec(src)) {
	  src = src.substring(cap[0].length);

	  this.tokens.push({
		type: 'blockquote_start'
	  });

	  cap = cap[0].replace(/^ *> ?/gm, '');

	  // Pass `top` to keep the current
	  // "toplevel" state. This is exactly
	  // how markdown.pl works.
	  this.token(cap, top, true);

	  this.tokens.push({
		type: 'blockquote_end'
	  });

	  continue;
	}

	// list
	if (cap = this.rules.list.exec(src)) {
	  src = src.substring(cap[0].length);
	  bull = cap[2];

	  this.tokens.push({
		type: 'list_start',
		ordered: bull.length > 1
	  });

	  // Get each top-level item.
	  cap = cap[0].match(this.rules.item);

	  next = false;
	  l = cap.length;
	  i = 0;

	  for (; i < l; i++) {
		item = cap[i];

		// Remove the list item's bullet
		// so it is seen as the next token.
		space = item.length;
		item = item.replace(/^ *([*+-]|\d+\.) +/, '');

		// Outdent whatever the
		// list item contains. Hacky.
		if (~item.indexOf('\n ')) {
		  space -= item.length;
		  item = !this.options.pedantic
			? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
			: item.replace(/^ {1,4}/gm, '');
		}

		// Determine whether the next list item belongs here.
		// Backpedal if it does not belong in this list.
		if (this.options.smartLists && i !== l - 1) {
		  b = block.bullet.exec(cap[i + 1])[0];
		  if (bull !== b && !(bull.length > 1 && b.length > 1)) {
			src = cap.slice(i + 1).join('\n') + src;
			i = l - 1;
		  }
		}

		// Determine whether item is loose or not.
		// Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
		// for discount behavior.
		loose = next || /\n\n(?!\s*$)/.test(item);
		if (i !== l - 1) {
		  next = item.charAt(item.length - 1) === '\n';
		  if (!loose) loose = next;
		}

		this.tokens.push({
		  type: loose
			? 'loose_item_start'
			: 'list_item_start'
		});

		// Recurse.
		this.token(item, false, bq);

		this.tokens.push({
		  type: 'list_item_end'
		});
	  }

	  this.tokens.push({
		type: 'list_end'
	  });

	  continue;
	}

	// html
	if (cap = this.rules.html.exec(src)) {
	  src = src.substring(cap[0].length);
	  this.tokens.push({
		type: this.options.sanitize
		  ? 'paragraph'
		  : 'html',
		pre: !this.options.sanitizer
		  && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
		text: cap[0]
	  });
	  continue;
	}

	// def
	if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	  src = src.substring(cap[0].length);
	  this.tokens.links[cap[1].toLowerCase()] = {
		href: cap[2],
		title: cap[3]
	  };
	  continue;
	}

	// table (gfm)
	if (top && (cap = this.rules.table.exec(src))) {
	  src = src.substring(cap[0].length);

	  item = {
		type: 'table',
		header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
		align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
		cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	  };

	  for (i = 0; i < item.align.length; i++) {
		if (/^ *-+: *$/.test(item.align[i])) {
		  item.align[i] = 'right';
		} else if (/^ *:-+: *$/.test(item.align[i])) {
		  item.align[i] = 'center';
		} else if (/^ *:-+ *$/.test(item.align[i])) {
		  item.align[i] = 'left';
		} else {
		  item.align[i] = null;
		}
	  }

	  for (i = 0; i < item.cells.length; i++) {
		item.cells[i] = item.cells[i]
		  .replace(/^ *\| *| *\| *$/g, '')
		  .split(/ *\| */);
	  }

	  this.tokens.push(item);

	  continue;
	}

	// top-level paragraph
	if (top && (cap = this.rules.paragraph.exec(src))) {
	  src = src.substring(cap[0].length);
	  this.tokens.push({
		type: 'paragraph',
		text: cap[1].charAt(cap[1].length - 1) === '\n'
		  ? cap[1].slice(0, -1)
		  : cap[1]
	  });
	  continue;
	}

	// text
	if (cap = this.rules.text.exec(src)) {
	  // Top-level should never reach here.
	  src = src.substring(cap[0].length);
	  this.tokens.push({
		type: 'text',
		text: cap[0]
	  });
	  continue;
	}

	if (src) {
	  throw new
		Error('Infinite loop on byte: ' + src.charCodeAt(0));
	}
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
	(']|', '~]|')
	('|', '|https?://|')
	()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
	throw new
	  Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
	if (this.options.breaks) {
	  this.rules = inline.breaks;
	} else {
	  this.rules = inline.gfm;
	}
  } else if (this.options.pedantic) {
	this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
	, link
	, text
	, href
	, cap;

  while (src) {
	// escape
	if (cap = this.rules.escape.exec(src)) {
	  src = src.substring(cap[0].length);
	  out += cap[1];
	  continue;
	}

	// autolink
	if (cap = this.rules.autolink.exec(src)) {
	  src = src.substring(cap[0].length);
	  if (cap[2] === '@') {
		text = cap[1].charAt(6) === ':'
		  ? this.mangle(cap[1].substring(7))
		  : this.mangle(cap[1]);
		href = this.mangle('mailto:') + text;
	  } else {
		text = escape(cap[1]);
		href = text;
	  }
	  out += this.renderer.link(href, null, text);
	  continue;
	}

	// url (gfm)
	if (!this.inLink && (cap = this.rules.url.exec(src))) {
	  src = src.substring(cap[0].length);
	  text = escape(cap[1]);
	  href = text;
	  out += this.renderer.link(href, null, text);
	  continue;
	}

	// tag
	if (cap = this.rules.tag.exec(src)) {
	  if (!this.inLink && /^<a /i.test(cap[0])) {
		this.inLink = true;
	  } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
		this.inLink = false;
	  }
	  src = src.substring(cap[0].length);
	  out += this.options.sanitize
		? this.options.sanitizer
		  ? this.options.sanitizer(cap[0])
		  : escape(cap[0])
		: cap[0]
	  continue;
	}

	// link
	if (cap = this.rules.link.exec(src)) {
	  src = src.substring(cap[0].length);
	  this.inLink = true;
	  out += this.outputLink(cap, {
		href: cap[2],
		title: cap[3]
	  });
	  this.inLink = false;
	  continue;
	}

	// reflink, nolink
	if ((cap = this.rules.reflink.exec(src))
		|| (cap = this.rules.nolink.exec(src))) {
	  src = src.substring(cap[0].length);
	  link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	  link = this.links[link.toLowerCase()];
	  if (!link || !link.href) {
		out += cap[0].charAt(0);
		src = cap[0].substring(1) + src;
		continue;
	  }
	  this.inLink = true;
	  out += this.outputLink(cap, link);
	  this.inLink = false;
	  continue;
	}

	// strong
	if (cap = this.rules.strong.exec(src)) {
	  src = src.substring(cap[0].length);
	  out += this.renderer.strong(this.output(cap[2] || cap[1]));
	  continue;
	}

	// em
	if (cap = this.rules.em.exec(src)) {
	  src = src.substring(cap[0].length);
	  out += this.renderer.em(this.output(cap[2] || cap[1]));
	  continue;
	}

	// code
	if (cap = this.rules.code.exec(src)) {
	  src = src.substring(cap[0].length);
	  out += this.renderer.codespan(escape(cap[2], true));
	  continue;
	}

	// br
	if (cap = this.rules.br.exec(src)) {
	  src = src.substring(cap[0].length);
	  out += this.renderer.br();
	  continue;
	}

	// del (gfm)
	if (cap = this.rules.del.exec(src)) {
	  src = src.substring(cap[0].length);
	  out += this.renderer.del(this.output(cap[1]));
	  continue;
	}

	// text
	if (cap = this.rules.text.exec(src)) {
	  src = src.substring(cap[0].length);
	  out += this.renderer.text(escape(this.smartypants(cap[0])));
	  continue;
	}

	if (src) {
	  throw new
		Error('Infinite loop on byte: ' + src.charCodeAt(0));
	}
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
	, title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
	? this.renderer.link(href, title, this.output(cap[1]))
	: this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
	// em-dashes
	.replace(/---/g, '\u2014')
	// en-dashes
	.replace(/--/g, '\u2013')
	// opening singles
	.replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	// closing singles & apostrophes
	.replace(/'/g, '\u2019')
	// opening doubles
	.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	// closing doubles
	.replace(/"/g, '\u201d')
	// ellipses
	.replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
	, l = text.length
	, i = 0
	, ch;

  for (; i < l; i++) {
	ch = text.charCodeAt(i);
	if (Math.random() > 0.5) {
	  ch = 'x' + ch.toString(16);
	}
	out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
	var out = this.options.highlight(code, lang);
	if (out != null && out !== code) {
	  escaped = true;
	  code = out;
	}
  }

  if (!lang) {
	return '<pre><code>'
	  + (escaped ? code : escape(code, true))
	  + '\n</code></pre>';
  }

  return '<pre><code class="'
	+ this.options.langPrefix
	+ escape(lang, true)
	+ '">'
	+ (escaped ? code : escape(code, true))
	+ '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
	+ level
	+ ' id="'
	+ this.options.headerPrefix
	+ raw.toLowerCase().replace(/[^\w]+/g, '-')
	+ '">'
	+ text
	+ '</h'
	+ level
	+ '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
	+ '<thead>\n'
	+ header
	+ '</thead>\n'
	+ '<tbody>\n'
	+ body
	+ '</tbody>\n'
	+ '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
	? '<' + type + ' style="text-align:' + flags.align + '">'
	: '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
	try {
	  var prot = decodeURIComponent(unescape(href))
		.replace(/[^\w:]/g, '')
		.toLowerCase();
	} catch (e) {
	  return '';
	}
	if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	  return '';
	}
  }
  var out = '<a href="' + href + '"';
  if (title) {
	out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
	out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
	out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
	body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
	case 'space': {
	  return '';
	}
	case 'hr': {
	  return this.renderer.hr();
	}
	case 'heading': {
	  return this.renderer.heading(
		this.inline.output(this.token.text),
		this.token.depth,
		this.token.text);
	}
	case 'code': {
	  return this.renderer.code(this.token.text,
		this.token.lang,
		this.token.escaped);
	}
	case 'table': {
	  var header = ''
		, body = ''
		, i
		, row
		, cell
		, flags
		, j;

	  // header
	  cell = '';
	  for (i = 0; i < this.token.header.length; i++) {
		flags = { header: true, align: this.token.align[i] };
		cell += this.renderer.tablecell(
		  this.inline.output(this.token.header[i]),
		  { header: true, align: this.token.align[i] }
		);
	  }
	  header += this.renderer.tablerow(cell);

	  for (i = 0; i < this.token.cells.length; i++) {
		row = this.token.cells[i];

		cell = '';
		for (j = 0; j < row.length; j++) {
		  cell += this.renderer.tablecell(
			this.inline.output(row[j]),
			{ header: false, align: this.token.align[j] }
		  );
		}

		body += this.renderer.tablerow(cell);
	  }
	  return this.renderer.table(header, body);
	}
	case 'blockquote_start': {
	  var body = '';

	  while (this.next().type !== 'blockquote_end') {
		body += this.tok();
	  }

	  return this.renderer.blockquote(body);
	}
	case 'list_start': {
	  var body = ''
		, ordered = this.token.ordered;

	  while (this.next().type !== 'list_end') {
		body += this.tok();
	  }

	  return this.renderer.list(body, ordered);
	}
	case 'list_item_start': {
	  var body = '';

	  while (this.next().type !== 'list_item_end') {
		body += this.token.type === 'text'
		  ? this.parseText()
		  : this.tok();
	  }

	  return this.renderer.listitem(body);
	}
	case 'loose_item_start': {
	  var body = '';

	  while (this.next().type !== 'list_item_end') {
		body += this.tok();
	  }

	  return this.renderer.listitem(body);
	}
	case 'html': {
	  var html = !this.token.pre && !this.options.pedantic
		? this.inline.output(this.token.text)
		: this.token.text;
	  return this.renderer.html(html);
	}
	case 'paragraph': {
	  return this.renderer.paragraph(this.inline.output(this.token.text));
	}
	case 'text': {
	  return this.renderer.paragraph(this.parseText());
	}
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
	.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
	n = n.toLowerCase();
	if (n === 'colon') return ':';
	if (n.charAt(0) === '#') {
	  return n.charAt(1) === 'x'
		? String.fromCharCode(parseInt(n.substring(2), 16))
		: String.fromCharCode(+n.substring(1));
	}
	return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
	if (!name) return new RegExp(regex, opt);
	val = val.source || val;
	val = val.replace(/(^|[^\[])\^/g, '$1');
	regex = regex.replace(name, val);
	return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
	, target
	, key;

  for (; i < arguments.length; i++) {
	target = arguments[i];
	for (key in target) {
	  if (Object.prototype.hasOwnProperty.call(target, key)) {
		obj[key] = target[key];
	  }
	}
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
	if (!callback) {
	  callback = opt;
	  opt = null;
	}

	opt = merge({}, marked.defaults, opt || {});

	var highlight = opt.highlight
	  , tokens
	  , pending
	  , i = 0;

	try {
	  tokens = Lexer.lex(src, opt)
	} catch (e) {
	  return callback(e);
	}

	pending = tokens.length;

	var done = function(err) {
	  if (err) {
		opt.highlight = highlight;
		return callback(err);
	  }

	  var out;

	  try {
		out = Parser.parse(tokens, opt);
	  } catch (e) {
		err = e;
	  }

	  opt.highlight = highlight;

	  return err
		? callback(err)
		: callback(null, out);
	};

	if (!highlight || highlight.length < 3) {
	  return done();
	}

	delete opt.highlight;

	if (!pending) return done();

	for (; i < tokens.length; i++) {
	  (function(token) {
		if (token.type !== 'code') {
		  return --pending || done();
		}
		return highlight(token.text, token.lang, function(err, code) {
		  if (err) return done(err);
		  if (code == null || code === token.text) {
			return --pending || done();
		  }
		  token.text = code;
		  token.escaped = true;
		  --pending || done();
		});
	  })(tokens[i]);
	}

	return;
  }
  try {
	if (opt) opt = merge({}, marked.defaults, opt);
	return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
	e.message += '\nPlease report this to https://github.com/chjj/marked.';
	if ((opt || marked.defaults).silent) {
	  return '<p>An error occured:</p><pre>'
		+ escape(e.message + '', true)
		+ '</pre>';
	}
	throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
var isMac = /Mac/.test(navigator.platform);

var shortcuts = {
	'Cmd-B': toggleBold,
	'Cmd-I': toggleItalic,
	'Cmd-K': drawLink,
	'Cmd-H': toggleHeadingSmaller,
	'Shift-Cmd-H': toggleHeadingBigger,
	'Cmd-Alt-I': drawImage,
	"Cmd-'": toggleBlockquote,
	'Cmd-Alt-L': toggleOrderedList,
	'Cmd-L': toggleUnorderedList,
	'Cmd-Alt-C': toggleCodeBlock,
	'Cmd-P': togglePreview,
};


/**
 * Fix shortcut. Mac use Command, others use Ctrl.
 */
function fixShortcut(name) {
	if(isMac) {
		name = name.replace('Ctrl', 'Cmd');
	} else {
		name = name.replace('Cmd', 'Ctrl');
	}
	return name;
}


/**
 * Create icon element for toolbar.
 */
function createIcon(options, enableTooltips) {
	options = options || {};
	var el = document.createElement('a');
	enableTooltips = (enableTooltips == undefined) ? true : enableTooltips;

	if(options.title && enableTooltips) {
		el.title = options.title;

		if(isMac) {
			el.title = el.title.replace('Ctrl', '⌘');
			el.title = el.title.replace('Alt', '⌥');
		}
	}

	el.className = options.className;
	return el;
}

function createSep() {
	el = document.createElement('i');
	el.className = 'separator';
	el.innerHTML = '|';
	return el;
}


/**
 * The state of CodeMirror at the given position.
 */
function getState(cm, pos) {
	pos = pos || cm.getCursor('start');
	var stat = cm.getTokenAt(pos);
	if(!stat.type) return {};

	var types = stat.type.split(' ');

	var ret = {},
		data, text;
	for(var i = 0; i < types.length; i++) {
		data = types[i];
		if(data === 'strong') {
			ret.bold = true;
		} else if(data === 'variable-2') {
			text = cm.getLine(pos.line);
			if(/^\s*\d+\.\s/.test(text)) {
				ret['ordered-list'] = true;
			} else {
				ret['unordered-list'] = true;
			}
		} else if(data === 'atom') {
			ret.quote = true;
		} else if(data === 'em') {
			ret.italic = true;
		} else if(data === 'quote') {
			ret.quote = true;
		} else if(data === 'strikethrough') {
			ret.strikethrough = true;
		}
	}
	return ret;
}


// Saved overflow setting
var saved_overflow = "";

/**
 * Toggle full screen of the editor.
 */
function toggleFullScreen(editor) {
	// Set fullscreen
	var cm = editor.codemirror;
	cm.setOption("fullScreen", !cm.getOption("fullScreen"));


	// Prevent scrolling on body during fullscreen active
	if(cm.getOption("fullScreen")) {
		saved_overflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = saved_overflow;
	}


	// Update toolbar class
	var wrap = cm.getWrapperElement();

	if(!/fullscreen/.test(wrap.previousSibling.className)) {
		wrap.previousSibling.className += " fullscreen";
	} else {
		wrap.previousSibling.className = wrap.previousSibling.className.replace(/\s*fullscreen\b/, "");
	}


	// Update toolbar button
	var toolbarButton = editor.toolbarElements.fullscreen;

	if(!/active/.test(toolbarButton.className)) {
		toolbarButton.className += " active";
	} else {
		toolbarButton.className = toolbarButton.className.replace(/\s*active\s*/g, '');
	}


	// Hide side by side if needed
	var sidebyside = cm.getWrapperElement().nextSibling;
	if(/editor-preview-active-side/.test(sidebyside.className))
		toggleSideBySide(editor);
}


/**
 * Action for toggling bold.
 */
function toggleBold(editor) {
	_toggleBlock(editor, 'bold', '**');
}


/**
 * Action for toggling italic.
 */
function toggleItalic(editor) {
	_toggleBlock(editor, 'italic', '*');
}


/**
 * Action for toggling strikethrough.
 */
function toggleStrikethrough(editor) {
	_toggleBlock(editor, 'strikethrough', '~~');
}

/**
 * Action for toggling code block.
 */
function toggleCodeBlock(editor) {
	_toggleBlock(editor, 'code', '```\r\n', '\r\n```');
}

/**
 * Action for toggling blockquote.
 */
function toggleBlockquote(editor) {
	var cm = editor.codemirror;
	_toggleLine(cm, 'quote');
}

/**
 * Action for toggling heading size: normal -> h1 -> h2 -> h3 -> h4 -> h5 -> h6 -> normal
 */
function toggleHeadingSmaller(editor) {
	var cm = editor.codemirror;
	_toggleHeading(cm, 'smaller');
}

/**
 * Action for toggling heading size: normal -> h6 -> h5 -> h4 -> h3 -> h2 -> h1 -> normal
 */
function toggleHeadingBigger(editor) {
	var cm = editor.codemirror;
	_toggleHeading(cm, 'bigger');
}

/**
 * Action for toggling heading size 1
 */
function toggleHeading1(editor) {
	var cm = editor.codemirror;
	_toggleHeading(cm, undefined, 1);
}

/**
 * Action for toggling heading size 2
 */
function toggleHeading2(editor) {
	var cm = editor.codemirror;
	_toggleHeading(cm, undefined, 2);
}

/**
 * Action for toggling heading size 3
 */
function toggleHeading3(editor) {
	var cm = editor.codemirror;
	_toggleHeading(cm, undefined, 3);
}


/**
 * Action for toggling ul.
 */
function toggleUnorderedList(editor) {
	var cm = editor.codemirror;
	_toggleLine(cm, 'unordered-list');
}


/**
 * Action for toggling ol.
 */
function toggleOrderedList(editor) {
	var cm = editor.codemirror;
	_toggleLine(cm, 'ordered-list');
}


/**
 * Action for drawing a link.
 */
function drawLink(editor) {
	var cm = editor.codemirror;
	var stat = getState(cm);
	_replaceSelection(cm, stat.link, '[', '](http://)');
}


/**
 * Action for drawing an img.
 */
function drawImage(editor) {
	var cm = editor.codemirror;
	var stat = getState(cm);
	_replaceSelection(cm, stat.image, '![](http://', ')');
}


/**
 * Action for drawing a horizontal rule.
 */
function drawHorizontalRule(editor) {
	var cm = editor.codemirror;
	var stat = getState(cm);
	_replaceSelection(cm, stat.image, '', '\n\n-----\n\n');
}


/**
 * Undo action.
 */
function undo(editor) {
	var cm = editor.codemirror;
	cm.undo();
	cm.focus();
}


/**
 * Redo action.
 */
function redo(editor) {
	var cm = editor.codemirror;
	cm.redo();
	cm.focus();
}


/**
 * Toggle side by side preview
 */
function toggleSideBySide(editor) {
	var cm = editor.codemirror;
	var wrapper = cm.getWrapperElement();
	var code = wrapper.firstChild;
	var preview = wrapper.nextSibling;
	var toolbarButton = editor.toolbarElements["side-by-side"];

	if(/editor-preview-active-side/.test(preview.className)) {
		preview.className = preview.className.replace(
			/\s*editor-preview-active-side\s*/g, ''
		);
		toolbarButton.className = toolbarButton.className.replace(/\s*active\s*/g, '');
		wrapper.className = wrapper.className.replace(/\s*CodeMirror-sided\s*/g, ' ');
	} else {
		/* When the preview button is clicked for the first time,
		 * give some time for the transition from editor.css to fire and the view to slide from right to left,
		 * instead of just appearing.
		 */
		setTimeout(function() {
			if(!cm.getOption("fullScreen")) toggleFullScreen(editor);
			preview.className += ' editor-preview-active-side'
		}, 1);
		toolbarButton.className += ' active';
		wrapper.className += ' CodeMirror-sided';
	}

	// Hide normal preview if active
	var previewNormal = wrapper.lastChild;
	if(/editor-preview-active/.test(previewNormal.className)) {
		previewNormal.className = previewNormal.className.replace(
			/\s*editor-preview-active\s*/g, ''
		);
		var toolbar = editor.toolbarElements.preview;
		var toolbar_div = wrapper.previousSibling;
		toolbar.className = toolbar.className.replace(/\s*active\s*/g, '');
		toolbar_div.className = toolbar_div.className.replace(/\s*disabled-for-preview*/g, '');
	}

	// Start preview with the current text
	var parse = editor.constructor.markdown;
	preview.innerHTML = parse(cm.getValue());

	// Updates preview
	cm.on('update', function() {
		preview.innerHTML = parse(cm.getValue());
	});
}


/**
 * Preview action.
 */
function togglePreview(editor) {
	var cm = editor.codemirror;
	var wrapper = cm.getWrapperElement();
	var toolbar_div = wrapper.previousSibling;
	var toolbar = editor.toolbarElements.preview;
	var parse = editor.constructor.markdown;
	var preview = wrapper.lastChild;
	if(!/editor-preview/.test(preview.className)) {
		preview = document.createElement('div');
		preview.className = 'editor-preview';
		wrapper.appendChild(preview);
	}
	if(/editor-preview-active/.test(preview.className)) {
		preview.className = preview.className.replace(
			/\s*editor-preview-active\s*/g, ''
		);
		toolbar.className = toolbar.className.replace(/\s*active\s*/g, '');
		toolbar_div.className = toolbar_div.className.replace(/\s*disabled-for-preview*/g, '');
	} else {
		/* When the preview button is clicked for the first time,
		 * give some time for the transition from editor.css to fire and the view to slide from right to left,
		 * instead of just appearing.
		 */
		setTimeout(function() {
			preview.className += ' editor-preview-active'
		}, 1);
		toolbar.className += ' active';
		toolbar_div.className += ' disabled-for-preview';
	}
	var text = cm.getValue();
	preview.innerHTML = parse(text);

	// Turn off side by side if needed
	var sidebyside = cm.getWrapperElement().nextSibling;
	if(/editor-preview-active-side/.test(sidebyside.className))
		toggleSideBySide(editor);
}

function _replaceSelection(cm, active, start, end) {
	if(/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
		return;

	var text;
	var startPoint = cm.getCursor('start');
	var endPoint = cm.getCursor('end');
	if(active) {
		text = cm.getLine(startPoint.line);
		start = text.slice(0, startPoint.ch);
		end = text.slice(startPoint.ch);
		cm.replaceRange(start + end, {
			line: startPoint.line,
			ch: 0
		});
	} else {
		text = cm.getSelection();
		cm.replaceSelection(start + text + end);

		startPoint.ch += start.length;
		endPoint.ch += start.length;
	}
	cm.setSelection(startPoint, endPoint);
	cm.focus();
}


function _toggleHeading(cm, direction, size) {
	if(/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
		return;

	var startPoint = cm.getCursor('start');
	var endPoint = cm.getCursor('end');
	for(var i = startPoint.line; i <= endPoint.line; i++) {
		(function(i) {
			var text = cm.getLine(i);
			var currHeadingLevel = text.search(/[^#]/);

			if(direction !== undefined) {
				if(currHeadingLevel <= 0) {
					if(direction == 'bigger') {
						text = '###### ' + text;
					} else {
						text = '# ' + text;
					}
				} else if(currHeadingLevel == 6 && direction == 'smaller') {
					text = text.substr(7);
				} else if(currHeadingLevel == 1 && direction == 'bigger') {
					text = text.substr(2);
				} else {
					if(direction == 'bigger') {
						text = text.substr(1);
					} else {
						text = '#' + text;
					}
				}
			} else {
				if(size == 1) {
					if(currHeadingLevel <= 0) {
						text = '# ' + text;
					} else if(currHeadingLevel == size) {
						text = text.substr(currHeadingLevel + 1);
					} else {
						text = '# ' + text.substr(currHeadingLevel + 1);
					}
				} else if(size == 2) {
					if(currHeadingLevel <= 0) {
						text = '## ' + text;
					} else if(currHeadingLevel == size) {
						text = text.substr(currHeadingLevel + 1);
					} else {
						text = '## ' + text.substr(currHeadingLevel + 1);
					}
				} else {
					if(currHeadingLevel <= 0) {
						text = '### ' + text;
					} else if(currHeadingLevel == size) {
						text = text.substr(currHeadingLevel + 1);
					} else {
						text = '### ' + text.substr(currHeadingLevel + 1);
					}
				}
			}

			cm.replaceRange(text, {
				line: i,
				ch: 0
			}, {
				line: i,
				ch: 99999999999999
			});
		})(i);
	}
	cm.focus();
}


function _toggleLine(cm, name) {
	if(/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
		return;

	var stat = getState(cm);
	var startPoint = cm.getCursor('start');
	var endPoint = cm.getCursor('end');
	var repl = {
		'quote': /^(\s*)\>\s+/,
		'unordered-list': /^(\s*)(\*|\-|\+)\s+/,
		'ordered-list': /^(\s*)\d+\.\s+/
	};
	var map = {
		'quote': '> ',
		'unordered-list': '* ',
		'ordered-list': '1. '
	};
	for(var i = startPoint.line; i <= endPoint.line; i++) {
		(function(i) {
			var text = cm.getLine(i);
			if(stat[name]) {
				text = text.replace(repl[name], '$1');
			} else {
				text = map[name] + text;
			}
			cm.replaceRange(text, {
				line: i,
				ch: 0
			}, {
				line: i,
				ch: 99999999999999
			});
		})(i);
	}
	cm.focus();
}

function _toggleBlock(editor, type, start_chars, end_chars) {
	if(/editor-preview-active/.test(editor.codemirror.getWrapperElement().lastChild.className))
		return;

	end_chars = (typeof end_chars === 'undefined') ? start_chars : end_chars;
	var cm = editor.codemirror;
	var stat = getState(cm);

	var text;
	var start = start_chars;
	var end = end_chars;

	var startPoint = cm.getCursor('start');
	var endPoint = cm.getCursor('end');

	if(stat[type]) {
		text = cm.getLine(startPoint.line);
		start = text.slice(0, startPoint.ch);
		end = text.slice(startPoint.ch);
		if(type == "bold") {
			start = start.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, "");
			end = end.replace(/(\*\*|__)/, "");
		} else if(type == "italic") {
			start = start.replace(/(\*|_)(?![\s\S]*(\*|_))/, "");
			end = end.replace(/(\*|_)/, "");
		} else if(type == "strikethrough") {
			start = start.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, "");
			end = end.replace(/(\*\*|~~)/, "");
		}
		cm.replaceRange(start + end, {
			line: startPoint.line,
			ch: 0
		}, {
			line: startPoint.line,
			ch: 99999999999999
		});

		if(type == "bold" || type == "strikethrough") {
			startPoint.ch -= 2;
			endPoint.ch -= 2;
		} else if(type == "italic") {
			startPoint.ch -= 1;
			endPoint.ch -= 1;
		}
	} else {
		text = cm.getSelection();
		if(type == "bold") {
			text = text.split("**").join("");
			text = text.split("__").join("");
		} else if(type == "italic") {
			text = text.split("*").join("");
			text = text.split("_").join("");
		} else if(type == "strikethrough") {
			text = text.split("~~").join("");
		}
		cm.replaceSelection(start + text + end);

		startPoint.ch += start_chars.length;
		endPoint.ch = startPoint.ch + text.length;
	}

	cm.setSelection(startPoint, endPoint);
	cm.focus();
}


/* The right word count in respect for CJK. */
function wordCount(data) {
	var pattern = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
	var m = data.match(pattern);
	var count = 0;
	if(m === null) return count;
	for(var i = 0; i < m.length; i++) {
		if(m[i].charCodeAt(0) >= 0x4E00) {
			count += m[i].length;
		} else {
			count += 1;
		}
	}
	return count;
}


var toolbarBuiltInButtons = {
	"bold": {
		name: "bold",
		action: toggleBold,
		className: "fa fa-bold",
		title: "Bold (Ctrl+B)",
	},
	"italic": {
		name: "italic",
		action: toggleItalic,
		className: "fa fa-italic",
		title: "Italic (Ctrl+I)",
	},
	"strikethrough": {
		name: "strikethrough",
		action: toggleStrikethrough,
		className: "fa fa-strikethrough",
		title: "Strikethrough",
	},
	"heading": {
		name: "heading",
		action: toggleHeadingSmaller,
		className: "fa fa-header",
		title: "Heading (Ctrl+H)",
	},
	"heading-smaller": {
		name: "heading-smaller",
		action: toggleHeadingSmaller,
		className: "fa fa-header fa-header-x fa-header-smaller",
		title: "Smaller Heading (Ctrl+H)",
	},
	"heading-bigger": {
		name: "heading-bigger",
		action: toggleHeadingBigger,
		className: "fa fa-header fa-header-x fa-header-bigger",
		title: "Bigger Heading (Shift+Ctrl+H)",
	},
	"heading-1": {
		name: "heading-1",
		action: toggleHeading1,
		className: "fa fa-header fa-header-x fa-header-1",
		title: "Big Heading",
	},
	"heading-2": {
		name: "heading-2",
		action: toggleHeading2,
		className: "fa fa-header fa-header-x fa-header-2",
		title: "Medium Heading",
	},
	"heading-3": {
		name: "heading-3",
		action: toggleHeading3,
		className: "fa fa-header fa-header-x fa-header-3",
		title: "Small Heading",
	},
	"code": {
		name: "code",
		action: toggleCodeBlock,
		className: "fa fa-code",
		title: "Code (Ctrl+Alt+C)",
	},
	"quote": {
		name: "quote",
		action: toggleBlockquote,
		className: "fa fa-quote-left",
		title: "Quote (Ctrl+')",
	},
	"unordered-list": {
		name: "unordered-list",
		action: toggleUnorderedList,
		className: "fa fa-list-ul",
		title: "Generic List (Ctrl+L)",
	},
	"ordered-list": {
		name: "ordered-list",
		action: toggleOrderedList,
		className: "fa fa-list-ol",
		title: "Numbered List (Ctrl+Alt+L)",
	},
	"link": {
		name: "link",
		action: drawLink,
		className: "fa fa-link",
		title: "Create Link (Ctrl+K)",
	},
	"image": {
		name: "image",
		action: drawImage,
		className: "fa fa-picture-o",
		title: "Insert Image (Ctrl+Alt+I)",
	},
	"horizontal-rule": {
		name: "horizontal-rule",
		action: drawHorizontalRule,
		className: "fa fa-minus",
		title: "Insert Horizontal Line",
	},
	"preview": {
		name: "preview",
		action: togglePreview,
		className: "fa fa-eye",
		title: "Toggle Preview (Ctrl+P)",
	},
	"side-by-side": {
		name: "side-by-side",
		action: toggleSideBySide,
		className: "fa fa-columns",
		title: "Toggle Side by Side (F9)",
	},
	"fullscreen": {
		name: "fullscreen",
		action: toggleFullScreen,
		className: "fa fa-arrows-alt",
		title: "Toggle Fullscreen (F11)",
	},
	"guide": {
		name: "guide",
		action: "http://nextstepwebs.github.io/simplemde-markdown-editor/markdown-guide",
		className: "fa fa-question-circle",
		title: "Markdown Guide",
	}
};

var toolbar = ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview", "side-by-side", "fullscreen", "guide"];

/**
 * Interface of SimpleMDE.
 */
function SimpleMDE(options) {
	options = options || {};

	if(options.element) {
		this.element = options.element;
	} else if(options.element === null) {
		// This means that the element option was specified, but no element was found
		console.log("SimpleMDE: Error. No element was found.");
		return;
	}

	if(options.toolbar !== false)
		options.toolbar = options.toolbar || SimpleMDE.toolbar;

	if(!options.hasOwnProperty('status')) {
		options.status = ['autosave', 'lines', 'words', 'cursor'];
	}

	this.options = options;

	// If user has passed an element, it should auto rendered
	this.render();

	// The codemirror component is only available after rendering
	// so, the setter for the initialValue can only run after
	// the element has been rendered
	if(options.initialValue) {
		this.value(options.initialValue);
	}
}

/**
 * Default toolbar elements.
 */
SimpleMDE.toolbar = toolbar;

/**
 * Default markdown render.
 */
SimpleMDE.markdown = function(text) {
	if(window.marked) {
		// Update options
		if(this.options.singleLineBreaks !== false) {
			marked.setOptions({
				breaks: true
			});
		}

		return marked(text);
	}
};

/**
 * Render editor to the given element.
 */
SimpleMDE.prototype.render = function(el) {
	if(!el) {
		el = this.element || document.getElementsByTagName('textarea')[0];
	}

	if(this._rendered && this._rendered === el) {
		// Already rendered.
		return;
	}

	this.element = el;
	var options = this.options;

	var self = this;
	var keyMaps = {};

	for(var key in shortcuts) {
		(function(key) {
			keyMaps[fixShortcut(key)] = function(cm) {
				shortcuts[key](self);
			};
		})(key);
	}

	keyMaps["Enter"] = "newlineAndIndentContinueMarkdownList";
	keyMaps["Tab"] = "tabAndIndentContinueMarkdownList";
	keyMaps["Shift-Tab"] = "shiftTabAndIndentContinueMarkdownList";
	keyMaps["F11"] = function(cm) {
		toggleFullScreen(self);
	};
	keyMaps["F9"] = function(cm) {
		toggleSideBySide(self);
	};
	keyMaps["Esc"] = function(cm) {
		if(cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
	};

	var mode = "spell-checker";
	var backdrop = "gfm";

	if(options.spellChecker === false) {
		mode = "gfm";
		backdrop = undefined;
	}

	this.codemirror = CodeMirror.fromTextArea(el, {
		mode: mode,
		backdrop: backdrop,
		theme: 'paper',
		tabSize: (options.tabSize != undefined) ? options.tabSize : 2,
		indentUnit: (options.tabSize != undefined) ? options.tabSize : 2,
		indentWithTabs: (options.indentWithTabs === false) ? false : true,
		lineNumbers: false,
		autofocus: (options.autofocus === true) ? true : false,
		extraKeys: keyMaps,
		lineWrapping: (options.lineWrapping === false) ? false : true
	});

	if(options.toolbar !== false) {
		this.createToolbar();
	}
	if(options.status !== false) {
		this.createStatusbar();
	}
	if(options.autosave != undefined && options.autosave.enabled === true) {
		this.autosave();
	}

	this.createSidebyside();

	this._rendered = this.element;
};

SimpleMDE.prototype.autosave = function() {
	var content = this.value();
	var simplemde = this;

	if(this.options.autosave.unique_id == undefined || this.options.autosave.unique_id == "") {
		console.log("SimpleMDE: You must set a unique_id to use the autosave feature");
		return;
	}

	if(simplemde.element.form != null && simplemde.element.form != undefined) {
		simplemde.element.form.addEventListener("submit", function() {
			localStorage.setItem(simplemde.options.autosave.unique_id, "");
		});
	}

	if(this.options.autosave.loaded !== true) {
		if(localStorage.getItem(this.options.autosave.unique_id) != "")
			this.codemirror.setValue(localStorage.getItem(this.options.autosave.unique_id));

		this.options.autosave.loaded = true;
	}

	if(localStorage) {
		localStorage.setItem(this.options.autosave.unique_id, content);
	}

	var el = document.getElementById("autosaved");
	if(el != null && el != undefined && el != "") {
		var d = new Date();
		var hh = d.getHours();
		var m = d.getMinutes();
		var dd = "am";
		var h = hh;
		if(h >= 12) {
			h = hh - 12;
			dd = "pm";
		}
		if(h == 0) {
			h = 12;
		}
		m = m < 10 ? "0" + m : m;

		el.innerHTML = "Autosaved: " + h + ":" + m + " " + dd;
	}

	setTimeout(function() {
		simplemde.autosave();
	}, this.options.autosave.delay || 10000);
};

SimpleMDE.prototype.createSidebyside = function() {
	var cm = this.codemirror;
	var wrapper = cm.getWrapperElement();
	var preview = wrapper.nextSibling;

	if(!/editor-preview-side/.test(preview.className)) {
		preview = document.createElement('div');
		preview.className = 'editor-preview-side';
		wrapper.parentNode.insertBefore(preview, wrapper.nextSibling);
	}

	// Syncs scroll  editor -> preview
	var cScroll = false;
	var pScroll = false;
	cm.on('scroll', function(v) {
		if(cScroll) {
			cScroll = false;
			return;
		};
		pScroll = true;
		height = v.getScrollInfo().height - v.getScrollInfo().clientHeight;
		ratio = parseFloat(v.getScrollInfo().top) / height;
		move = (preview.scrollHeight - preview.clientHeight) * ratio;
		preview.scrollTop = move;
	});

	// Syncs scroll  preview -> editor
	preview.onscroll = function(v) {
		if(pScroll) {
			pScroll = false;
			return;
		};
		cScroll = true;
		height = preview.scrollHeight - preview.clientHeight;
		ratio = parseFloat(preview.scrollTop) / height;
		move = (cm.getScrollInfo().height - cm.getScrollInfo().clientHeight) * ratio;
		cm.scrollTo(0, move);
	};
	return true;
}

SimpleMDE.prototype.createToolbar = function(items) {
	items = items || this.options.toolbar;

	if(!items || items.length === 0) {
		return;
	}

	for(var i = 0; i < items.length; i++) {
		if(toolbarBuiltInButtons[items[i]] != undefined) {
			items[i] = toolbarBuiltInButtons[items[i]];
		}
	}

	var bar = document.createElement('div');
	bar.className = 'editor-toolbar btn-group';

	var self = this;

	var el;
	var toolbar_data = {};
	self.toolbar = items;

	for(var i = 0; i < items.length; i++) {
		if(items[i].name == "guide" && self.options.toolbarGuideIcon === false)
			continue;

		(function(item) {
			var el;
			if(item === '|') {
				el = createSep();
			} else {
				el = createIcon(item, self.options.toolbarTips);
			}

			// bind events, special for info
			if(item.action) {
				if(typeof item.action === 'function') {
					el.onclick = function(e) {
						item.action(self);
					};
				} else if(typeof item.action === 'string') {
					el.href = item.action;
					el.target = '_blank';
				}
			}
			toolbar_data[item.name || item] = el;
			bar.appendChild(el);
		})(items[i]);
	}

	self.toolbarElements = toolbar_data;

	var cm = this.codemirror;
	cm.on('cursorActivity', function() {
		var stat = getState(cm);

		for(var key in toolbar_data) {
			(function(key) {
				var el = toolbar_data[key];
				if(stat[key]) {
					el.className += ' active';
				} else if(key != "fullscreen" && key != "side-by-side") {
					el.className = el.className.replace(/\s*active\s*/g, '');
				}
			})(key);
		}
	});

	var cmWrapper = cm.getWrapperElement();
	cmWrapper.parentNode.insertBefore(bar, cmWrapper);
	return bar;
};

SimpleMDE.prototype.createStatusbar = function(status) {
	status = status || this.options.status;
	options = this.options;

	if(!status || status.length === 0) return;

	var bar = document.createElement('div');
	bar.className = 'editor-statusbar';

	var pos, cm = this.codemirror;
	for(var i = 0; i < status.length; i++) {
		(function(name) {
			var el = document.createElement('span');
			el.className = name;
			if(name === 'words') {
				el.innerHTML = '0';
				cm.on('update', function() {
					el.innerHTML = wordCount(cm.getValue());
				});
			} else if(name === 'lines') {
				el.innerHTML = '0';
				cm.on('update', function() {
					el.innerHTML = cm.lineCount();
				});
			} else if(name === 'cursor') {
				el.innerHTML = '0:0';
				cm.on('cursorActivity', function() {
					pos = cm.getCursor();
					el.innerHTML = pos.line + ':' + pos.ch;
				});
			} else if(name === 'autosave') {
				if(options.autosave != undefined && options.autosave.enabled === true) {
					el.setAttribute("id", "autosaved");
				}
			}
			bar.appendChild(el);
		})(status[i]);
	}

	var cmWrapper = this.codemirror.getWrapperElement();
	cmWrapper.parentNode.insertBefore(bar, cmWrapper.nextSibling);
	return bar;
};

/**
 * Get or set the text content.
 */
SimpleMDE.prototype.value = function(val) {
	if(val === undefined) {
		return this.codemirror.getValue();
	} else {
		this.codemirror.getDoc().setValue(val);
		return this;
	}
};


/**
 * Bind static methods for exports.
 */
SimpleMDE.toggleBold = toggleBold;
SimpleMDE.toggleItalic = toggleItalic;
SimpleMDE.toggleStrikethrough = toggleStrikethrough;
SimpleMDE.toggleBlockquote = toggleBlockquote;
SimpleMDE.toggleHeadingSmaller = toggleHeadingSmaller;
SimpleMDE.toggleHeadingBigger = toggleHeadingBigger;
SimpleMDE.toggleHeading1 = toggleHeading1;
SimpleMDE.toggleHeading2 = toggleHeading2;
SimpleMDE.toggleHeading3 = toggleHeading3;
SimpleMDE.toggleCodeBlock = toggleCodeBlock;
SimpleMDE.toggleUnorderedList = toggleUnorderedList;
SimpleMDE.toggleOrderedList = toggleOrderedList;
SimpleMDE.drawLink = drawLink;
SimpleMDE.drawImage = drawImage;
SimpleMDE.drawHorizontalRule = drawHorizontalRule;
SimpleMDE.undo = undo;
SimpleMDE.redo = redo;
SimpleMDE.togglePreview = togglePreview;
SimpleMDE.toggleSideBySide = toggleSideBySide;
SimpleMDE.toggleFullScreen = toggleFullScreen;

/**
 * Bind instance methods for exports.
 */
SimpleMDE.prototype.toggleBold = function() {
	toggleBold(this);
};
SimpleMDE.prototype.toggleItalic = function() {
	toggleItalic(this);
};
SimpleMDE.prototype.toggleStrikethrough = function() {
	toggleStrikethrough(this);
};
SimpleMDE.prototype.toggleBlockquote = function() {
	toggleBlockquote(this);
};
SimpleMDE.prototype.toggleHeadingSmaller = function() {
	toggleHeadingSmaller(this);
};
SimpleMDE.prototype.toggleHeadingBigger = function() {
	toggleHeadingBigger(this);
};
SimpleMDE.prototype.toggleHeading1 = function() {
	toggleHeading1(this);
};
SimpleMDE.prototype.toggleHeading2 = function() {
	toggleHeading2(this);
};
SimpleMDE.prototype.toggleHeading3 = function() {
	toggleHeading3(this);
};
SimpleMDE.prototype.toggleCodeBlock = function() {
	toggleCodeBlock(this);
};
SimpleMDE.prototype.toggleUnorderedList = function() {
	toggleUnorderedList(this);
};
SimpleMDE.prototype.toggleOrderedList = function() {
	toggleOrderedList(this);
};
SimpleMDE.prototype.drawLink = function() {
	drawLink(this);
};
SimpleMDE.prototype.drawImage = function() {
	drawImage(this);
};
SimpleMDE.prototype.drawHorizontalRule = function() {
	drawHorizontalRule(this);
};
SimpleMDE.prototype.undo = function() {
	undo(this);
};
SimpleMDE.prototype.redo = function() {
	redo(this);
};
SimpleMDE.prototype.togglePreview = function() {
	togglePreview(this);
};
SimpleMDE.prototype.toggleSideBySide = function() {
	toggleSideBySide(this);
};
SimpleMDE.prototype.toggleFullScreen = function() {
	toggleFullScreen(this);
};

//$('.datetime input').datetimepicker(
//    {locale: 'en-gb'}
//);

var simplemdeToolbar = [
    {
        name: "bold",
        action: toggleBold,
        className: "btn btn-default mdi-editor-format-bold",
        title: "Bold (Ctrl+B)",
    },
    //{
    //    name: "italic",
    //    action: toggleItalic,
    //    className: "mdi-editor-format-italic",
    //    title: "Italic (Ctrl+I)",
    //},
    //{
    //    name: "strikethrough",
    //    action: toggleStrikethrough,
    //    className: "mdi-editor-format-strikethrough",
    //    title: "Strikethrough",
    //},
    {
        name: "heading-1",
        action: toggleHeading1,
        className: "btn btn-default mdi-editor-format-color-text",
        title: "Big Heading",
    },
    //{
    //    name: "heading-2",
    //    action: toggleHeading2,
    //    className: "mdi-content-text-format",
    //    title: "Medium Heading",
    //},
    {
        name: "code",
        action: toggleCodeBlock,
        className: "btn btn-default mdi-action-receipt",
        title: "Code (Ctrl+Alt+C)",
    },
    {
        name: "quote",
        action: toggleBlockquote,
        className: "btn btn-default mdi-editor-format-quote",
        title: "Quote (Ctrl+')",
    },
    {
        name: "unordered-list",
        action: toggleUnorderedList,
        className: "btn btn-default mdi-editor-format-list-bulleted",
        title: "Generic List (Ctrl+L)",
    },
    {
        name: "ordered-list",
        action: toggleOrderedList,
        className: "btn btn-default mdi-editor-format-list-numbered",
        title: "Numbered List (Ctrl+Alt+L)",
    },
    {
        name: "link",
        action: drawLink,
        className: "btn btn-default mdi-editor-insert-link",
        title: "Create Link (Ctrl+K)",
    },
    {
        name: "image",
        action: drawImage,
        className: "btn btn-default mdi-editor-insert-photo",
        title: "Insert Image (Ctrl+Alt+I)",
    },
    {
        name: "preview",
        action: togglePreview,
        className: "btn btn-default fa-eye mdi-action-visibility",
        title: "Toggle Preview (Ctrl+P)",
    },
    {
        name: "side-by-side",
        action: toggleSideBySide,
        className: "btn btn-default fa-columns mdi-image-compare",
        title: "Toggle Side by Side (F9)",
    },
    {
        name: "fullscreen",
        action: toggleFullScreen,
        className: "btn btn-default fa-arrows-alt mdi-navigation-fullscreen",
        title: "Toggle Fullscreen (F11)",
    }
];

$(".markdown_editor").each(function (index, obj) {
    var editor_name = $(obj).attr('id') + 'simplemde' + index;
    window[editor_name] = new SimpleMDE(
        {
            element: obj,
            toolbar: simplemdeToolbar,
            autosave: {
                enabled: true,
                unique_id: editor_name
            },
            spellChecker: false
        }
    );
    window[editor_name].render();
    window[editor_name].codemirror.on("blur", function () {
        window[editor_name].element.value = window[editor_name].value();
    })
});

//var simplemde = new SimpleMDE(
//    {
//        element: $(".markdown_editor")[0],
//        toolbar: simplemdeToolbar
//    }
//);
//simplemde.render();

$.material.init();
