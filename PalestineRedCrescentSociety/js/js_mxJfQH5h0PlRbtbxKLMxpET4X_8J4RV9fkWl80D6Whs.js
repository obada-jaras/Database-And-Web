/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
window.drupalTranslations = {"strings":{"":{"Edit":"\u062a\u062d\u0631\u064a\u0631","Close":"\u0625\u063a\u0644\u0627\u0642","Save":"\u062d\u0641\u0638","Add":"\u0625\u0636\u0627\u0641\u0629","Image":"\u0627\u0644\u0635\u0648\u0631\u0629","Cancel":"\u0627\u0644\u063a\u0627\u0621","Apply":"\u062a\u0637\u0628\u064a\u0642","One result found.\u0003@count results found: ":"\u062a\u0645\u0651 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0646\u062a\u064a\u062c\u0629 \u0648\u0627\u062d\u062f\u0629\u0003\u062a\u0645\u0651 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 @count \u0646\u062a\u064a\u062c\u0629\u0003\u062a\u0645\u0651 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 @count \u0646\u062a\u064a\u062c\u0629\u0003\u062a\u0645\u0651 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 @count \u0646\u062a\u064a\u062c\u0629\u0003\u062a\u0645\u0651 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 @count \u0646\u062a\u064a\u062c\u0629\u0003\u062a\u0645\u0651 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 @count \u0646\u062a\u064a\u062c\u0629"}},"pluralFormula":{"0":1,"1":0,"2":2,"3":3,"4":3,"5":3,"6":3,"7":3,"8":3,"9":3,"10":3,"100":5,"101":5,"102":5,"103":3,"104":3,"105":3,"106":3,"107":3,"108":3,"109":3,"110":3,"default":4}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){"use strict";return e.ui=e.ui||{},e.ui.version="1.13.1"}));

/*!
 * jQuery UI :data 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.extend(e.expr.pseudos,{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));

/*!
 * jQuery UI Disable Selection 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));

/*!
 * jQuery UI Focusable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.focusable=function(i,t){var n,s,r,u,a,o=i.nodeName.toLowerCase();return"area"===o?(s=(n=i.parentNode).name,!(!i.href||!s||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+s+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(o)?(u=!i.disabled)&&(a=e(i).closest("fieldset")[0])&&(u=!a.disabled):u="a"===o&&i.href||t,u&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"visible"===i}(e(i)))},e.extend(e.expr.pseudos,{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)}}));

/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";if(e.expr.pseudos||(e.expr.pseudos=e.expr[":"]),e.uniqueSort||(e.uniqueSort=e.unique),!e.escapeSelector){var n=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,t=function(e,n){return n?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};e.escapeSelector=function(e){return(e+"").replace(n,t)}}e.fn.even&&e.fn.odd||e.fn.extend({even:function(){return this.filter((function(e){return e%2==0}))},odd:function(){return this.filter((function(e){return e%2==1}))}})}));

/*!
 * jQuery UI Keycode 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.plugin={add:function(n,i,t){var u,o=e.ui[n].prototype;for(u in t)o.plugins[u]=o.plugins[u]||[],o.plugins[u].push([i,t[u]])},call:function(e,n,i,t){var u,o=e.plugins[n];if(o&&(t||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(u=0;u<o.length;u++)e.options[o[u][0]]&&o[u][1].apply(e.element,i)}}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));

/*!
 * jQuery UI Scroll Parent 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.scrollParent=function(e){var s=this.css("position"),n="absolute"===s,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==s&&i.length?i:t(this[0].ownerDocument||document)}}));

/*!
 * jQuery UI Unique ID 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){"use strict";return i.fn.extend({uniqueId:(e=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++e)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var e}));

/*!
 * jQuery UI Widget 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";var e,i=0,s=Array.prototype.hasOwnProperty,n=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove");e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),Array.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr.pseudos[u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(t,e){r[t]="function"==typeof e?function(){function s(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,o=this._superApply;return this._super=s,this._superApply=n,t=e.apply(this,arguments),this._super=i,this._superApply=o,t}}():e})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,o,a=n.call(arguments,1),r=0,l=a.length;r<l;r++)for(i in a[r])o=a[r][i],s.call(a[r],i)&&void 0!==o&&(t.isPlainObject(o)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):e[i]=o);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=n.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?"function"!=typeof n[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for "+e+" widget instance"):(i=n[o].apply(n,r))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(){var i=[];e.element.each((function(e,n){t.map(s.classesElementLookup,(function(t){return t})).some((function(t){return t.is(n)}))||i.push(n)})),s._on(t(i),{remove:"_untrackClassesElement"})}function o(o,a){var r,l;for(l=0;l<o.length;l++)r=s.classesElementLookup[o[l]]||t(),e.add?(n(),r=t(t.uniqueSort(r.get().concat(e.element.get())))):r=t(r.not(e.element).get()),s.classesElementLookup[o[l]]=r,i.push(o[l]),a&&e.classes[o[l]]&&i.push(e.classes[o[l]])}return(e=t.extend({element:this.element,classes:this.options.classes||{}},e)).keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})),this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!("function"==typeof a&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})?n={duration:n}:!0===n&&(n={}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));

/*!
 * jQuery UI Labels 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.labels=function(){var e,s,i,n,a;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),s="label[for='"+t.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n)):this.pushStack([])}}));

/*!
 * jQuery UI Mouse 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],e):e(jQuery)}((function(e){"use strict";var t=!1;return e(document).on("mouseup",(function(){t=!1})),e.widget("ui.mouse",{version:"1.13.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,(function(e){return t._mouseDown(e)})).on("click."+this.widgetName,(function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,o=1===i.which,n=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&e(i.target).closest(this.options.cancel).length;return!(o&&!n&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){s.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=!1!==this._mouseStart(i),!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,t=!1,i.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}));

/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,r=e.tabbable={};t(r),r.noConflict=function(){return e.tabbable=n,r}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,o=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},i=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},a=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},l=function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},c=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),i=o.width,a=o.height;return 0===i&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(u(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},d=function(e,t){return!(!c(e,t)||l(t)||i(t)<0)},f=t.concat("iframe").join(",");e.focusable=function(e,t){return o(e,(t=t||{}).includeContainer,c.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,f)&&c(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&d(t,e)},e.tabbable=function(e,t){var n=[],r=[];return o(e,(t=t||{}).includeContainer,d.bind(null,t)).forEach((function(e,t){var o=i(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(a).map((function(e){return e.node})).concat(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) {
      return t[i].exports;
    }
    var s = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = e),
  (n.c = t),
  (n.d = function(e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
  }),
  (n.r = function(e) {
    typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 });
  }),
  (n.t = function(e, t) {
    if ((1 & t && (e = n(e)), 8 & t)) {
      return e;
    }
    if (4 & t && typeof e === 'object' && e && e.__esModule) {
      return e;
    }
    var i = Object.create(null);
    if (
      (n.r(i),
      Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
      2 & t && typeof e !== 'string')
    ) {
      for (var s in e) {
        n.d(
          i,
          s,
          function(t) {
            return e[t];
          }.bind(null, s)
        );
      }
    }
    return i;
  }),
  (n.n = function(e) {
    var t =
        e && e.__esModule
          ? function() {
            return e.default;
          }
          : function() {
            return e;
          };
    return n.d(t, 'a', t), t;
  }),
  (n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (n.p = ''),
  n((n.s = 1));
})([
  function(e) {
    e.exports = JSON.parse('{"a":"8.5.19"}');
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var i = n(0);
    var s = {
      hooks: {},
      extensions: [],
      wrappers: [],
      navbar: { add: !0, sticky: !0, title: 'Menu', titleLink: 'parent' },
      onClick: { close: null, preventDefault: null, setSelected: !0 },
      slidingSubmenus: !0
    };
    var a = {
      classNames: {
        inset: 'Inset',
        nolistview: 'NoListview',
        nopanel: 'NoPanel',
        panel: 'Panel',
        selected: 'Selected',
        vertical: 'Vertical'
      },
      language: null,
      openingInterval: 25,
      panelNodetype: ['ul', 'ol', 'div'],
      transitionDuration: 400
    };
    function o(e, t) {
      for (var n in (r(e) != 'object' && (e = {}),
      r(t) != 'object' && (t = {}),
      t)) {
        t.hasOwnProperty(n) &&
          (void 0 === e[n]
            ? (e[n] = t[n])
            : r(e[n]) == 'object' && o(e[n], t[n]));
      }
      return e;
    }
    function r(e) {
      return {}.toString
        .call(e)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
    }
    function c(e, t, n) {
      if (typeof t === 'function') {
        var i = t.call(e);
        if (void 0 !== i) {
          return i;
        }
      }
      return (t !== null && typeof t !== 'function' && void 0 !== t) ||
        void 0 === n
        ? t
        : n;
    }
    function m(e, t, n) {
      var i = !1;
      var s = function(n) {
        (void 0 !== n && n.target !== e) ||
          (i ||
            (e.removeEventListener('transitionend', s),
            e.removeEventListener('webkitTransitionEnd', s),
            t.call(e)),
          (i = !0));
      };
      e.addEventListener('transitionend', s),
      e.addEventListener('webkitTransitionEnd', s),
      setTimeout(s, 1.1 * n);
    }
    function l() {
      return 'mm-' + d++;
    }
    var d = 0;
    function p(e) {
      return e.slice(0, 3) == 'mm-' ? e.slice(3) : e;
    }
    var u = {};
    function f(e, t) {
      void 0 === u[t] && (u[t] = {}), o(u[t], e);
    }
    var h = { Menu: 'منو' };
    var v = { Menu: 'Menü' };
    var b = { Menu: 'Меню' };
    function g(e) {
      var t = e.split('.');
      var n = document.createElement(t.shift());
      return (
        t.forEach(function(e) {
          n.classList.add(e);
        }),
        n
      );
    }
    function _(e, t) {
      return Array.prototype.slice.call(e.querySelectorAll(t));
    }
    function y(e, t) {
      var n = Array.prototype.slice.call(e.children);
      return t
        ? n.filter(function(e) {
          return e.matches(t);
        })
        : n;
    }
    function L(e, t) {
      for (var n = [], i = e.parentElement; i; ) {
        n.push(i), (i = i.parentElement);
      }
      return t
        ? n.filter(function(e) {
          return e.matches(t);
        })
        : n;
    }
    function w(e) {
      return e.filter(function(e) {
        return !e.matches('.mm-hidden');
      });
    }
    function E(e) {
      var t = [];
      return (
        w(e).forEach(function(e) {
          t.push.apply(t, y(e, 'a.mm-listitem__text'));
        }),
        t.filter(function(e) {
          return !e.matches('.mm-btn_next');
        })
      );
    }
    function x(e, t, n) {
      e.matches('.' + t) && (e.classList.remove(t), e.classList.add(n));
    }
    var P = {};
    function k(e, t, n) {
      typeof e === 'number' && (e = '(min-width: ' + e + 'px)'),
      (P[e] = P[e] || []),
      P[e].push({ yes: t, no: n });
    }
    function S(e, t) {
      for (var n = t.matches ? 'yes' : 'no', i = 0; i < P[e].length; i++) {
        P[e][i][n]();
      }
    }
    f({ Menu: 'Menu' }, 'nl'), f(h, 'fa'), f(v, 'de'), f(b, 'ru');
    var M = (function() {
      function e(t, n, i) {
        return (
          (this.opts = o(n, e.options)),
          (this.conf = o(i, e.configs)),
          (this._api = [
            'bind',
            'initPanel',
            'initListview',
            'openPanel',
            'closePanel',
            'closeAllPanels',
            'setSelected'
          ]),
          (this.node = {}),
          (this.vars = {}),
          (this.hook = {}),
          (this.clck = []),
          (this.node.menu =
            typeof t === 'string' ? document.querySelector(t) : t),
          typeof this._deprecatedWarnings === 'function' &&
            this._deprecatedWarnings(),
          this._initWrappers(),
          this._initAddons(),
          this._initExtensions(),
          this._initHooks(),
          this._initAPI(),
          this._initMenu(),
          this._initPanels(),
          this._initOpened(),
          this._initAnchors(),
          (function() {
            var e = function(e) {
              var t = window.matchMedia(e);
              S(e, t),
              (t.onchange = function(n) {
                S(e, t);
              });
            };
            for (var t in P) {
              e(t);
            }
          })(),
          this
        );
      }
      return (
        (e.prototype.openPanel = function(e, t) {
          var n = this;
          if (
            (this.trigger('openPanel:before', [e]),
            e && (e.matches('.mm-panel') || (e = e.closest('.mm-panel')), e))
          ) {
            if (
              (typeof t !== 'boolean' && (t = !0),
              e.parentElement.matches('.mm-listitem_vertical'))
            ) {
              L(e, '.mm-listitem_vertical').forEach(function(e) {
                e.classList.add('mm-listitem_opened'),
                y(e, '.mm-panel').forEach(function(e) {
                  e.classList.remove('mm-hidden');
                });
              });
              var i = L(e, '.mm-panel').filter(function(e) {
                return !e.parentElement.matches('.mm-listitem_vertical');
              });
              this.trigger('openPanel:start', [e]),
              i.length && this.openPanel(i[0]),
              this.trigger('openPanel:finish', [e]);
            }
            else {
              if (e.matches('.mm-panel_opened')) {
                return;
              }
              var s = y(this.node.pnls, '.mm-panel');
              var a = y(this.node.pnls, '.mm-panel_opened')[0];
              s.filter(function(t) {
                return t !== e;
              }).forEach(function(e) {
                e.classList.remove('mm-panel_opened-parent');
              });
              for (var o = e.mmParent; o; ) {
                (o = o.closest('.mm-panel')) &&
                  (o.parentElement.matches('.mm-listitem_vertical') ||
                    o.classList.add('mm-panel_opened-parent'),
                  (o = o.mmParent));
              }
              s.forEach(function(e) {
                e.classList.remove('mm-panel_highest');
              }),
              s
                .filter(function(e) {
                  return e !== a;
                })
                .filter(function(t) {
                  return t !== e;
                })
                .forEach(function(e) {
                  e.classList.add('mm-hidden');
                }),
              e.classList.remove('mm-hidden');
              var r = function() {
                a && a.classList.remove('mm-panel_opened'),
                e.classList.add('mm-panel_opened'),
                e.matches('.mm-panel_opened-parent')
                  ? (a && a.classList.add('mm-panel_highest'),
                  e.classList.remove('mm-panel_opened-parent'))
                  : (a && a.classList.add('mm-panel_opened-parent'),
                  e.classList.add('mm-panel_highest')),
                n.trigger('openPanel:start', [e]);
              };
              var c = function() {
                a &&
                  (a.classList.remove('mm-panel_highest'),
                  a.classList.add('mm-hidden')),
                e.classList.remove('mm-panel_highest'),
                n.trigger('openPanel:finish', [e]);
              };
              t && !e.matches('.mm-panel_noanimation')
                ? setTimeout(function() {
                  m(
                    e,
                    function() {
                      c();
                    },
                    n.conf.transitionDuration
                  ),
                  r();
                }, this.conf.openingInterval)
                : (r(), c());
            }
            this.trigger('openPanel:after', [e]);
          }
        }),
        (e.prototype.closePanel = function(e) {
          this.trigger('closePanel:before', [e]);
          var t = e.parentElement;
          t.matches('.mm-listitem_vertical') &&
            (t.classList.remove('mm-listitem_opened'),
            e.classList.add('mm-hidden'),
            this.trigger('closePanel', [e])),
          this.trigger('closePanel:after', [e]);
        }),
        (e.prototype.closeAllPanels = function(e) {
          this.trigger('closeAllPanels:before'),
          this.node.pnls
            .querySelectorAll('.mm-listitem')
            .forEach(function(e) {
              e.classList.remove('mm-listitem_selected'),
              e.classList.remove('mm-listitem_opened');
            });
          var t = y(this.node.pnls, '.mm-panel');
          var n = e || t[0];
          y(this.node.pnls, '.mm-panel').forEach(function(e) {
            e !== n &&
              (e.classList.remove('mm-panel_opened'),
              e.classList.remove('mm-panel_opened-parent'),
              e.classList.remove('mm-panel_highest'),
              e.classList.add('mm-hidden'));
          }),
          this.openPanel(n, !1),
          this.trigger('closeAllPanels:after');
        }),
        (e.prototype.togglePanel = function(e) {
          var t = e.parentElement;
          t.matches('.mm-listitem_vertical') &&
            this[t.matches('.mm-listitem_opened') ? 'closePanel' : 'openPanel'](
              e
            );
        }),
        (e.prototype.setSelected = function(e) {
          this.trigger('setSelected:before', [e]),
          _(this.node.menu, '.mm-listitem_selected').forEach(function(e) {
            e.classList.remove('mm-listitem_selected');
          }),
          e.classList.add('mm-listitem_selected'),
          this.trigger('setSelected:after', [e]);
        }),
        (e.prototype.bind = function(e, t) {
          (this.hook[e] = this.hook[e] || []), this.hook[e].push(t);
        }),
        (e.prototype.trigger = function(e, t) {
          if (this.hook[e]) {
            for (var n = 0, i = this.hook[e].length; n < i; n++) {
              this.hook[e][n].apply(this, t);
            }
          }
        }),
        (e.prototype._initAPI = function() {
          var e = this;
          var t = this;
          (this.API = {}),
          this._api.forEach(function(n) {
            e.API[n] = function() {
              var e = t[n].apply(t, arguments);
              return void 0 === e ? t.API : e;
            };
          }),
          (this.node.menu.mmApi = this.API);
        }),
        (e.prototype._initHooks = function() {
          for (var e in this.opts.hooks) {
            this.bind(e, this.opts.hooks[e]);
          }
        }),
        (e.prototype._initWrappers = function() {
          this.trigger('initWrappers:before');
          for (var t = 0; t < this.opts.wrappers.length; t++) {
            var n = e.wrappers[this.opts.wrappers[t]];
            typeof n === 'function' && n.call(this);
          }
          this.trigger('initWrappers:after');
        }),
        (e.prototype._initAddons = function() {
          for (var t in (this.trigger('initAddons:before'), e.addons)) {
            e.addons[t].call(this);
          }
          this.trigger('initAddons:after');
        }),
        (e.prototype._initExtensions = function() {
          var e = this;
          this.trigger('initExtensions:before'),
          r(this.opts.extensions) == 'array' &&
              (this.opts.extensions = { all: this.opts.extensions }),
          Object.keys(this.opts.extensions).forEach(function(t) {
            var n = e.opts.extensions[t].map(function(e) {
              return 'mm-menu_' + e;
            });
            n.length &&
                k(
                  t,
                  function() {
                    n.forEach(function(t) {
                      e.node.menu.classList.add(t);
                    });
                  },
                  function() {
                    n.forEach(function(t) {
                      e.node.menu.classList.remove(t);
                    });
                  }
                );
          }),
          this.trigger('initExtensions:after');
        }),
        (e.prototype._initMenu = function() {
          var e = this;
          this.trigger('initMenu:before'),
          (this.node.wrpr = this.node.wrpr || this.node.menu.parentElement),
          this.node.wrpr.classList.add('mm-wrapper'),
          (this.node.menu.id = this.node.menu.id || l());
          var t = g('div.mm-panels');
          y(this.node.menu).forEach(function(n) {
            e.conf.panelNodetype.indexOf(n.nodeName.toLowerCase()) > -1 &&
              t.append(n);
          }),
          this.node.menu.append(t),
          (this.node.pnls = t),
          this.node.menu.classList.add('mm-menu'),
          this.trigger('initMenu:after');
        }),
        (e.prototype._initPanels = function() {
          var e = this;
          this.trigger('initPanels:before'),
          this.clck.push(function(t, n) {
            if (n.inMenu) {
              var i = t.getAttribute('href');
              if (i && i.length > 1 && i.slice(0, 1) == '#') {
                try {
                  var s = _(e.node.menu, i)[0];
                  if (s && s.matches('.mm-panel')) {
                    return (
                      t.parentElement.matches('.mm-listitem_vertical')
                        ? e.togglePanel(s)
                        : e.openPanel(s),
                      !0
                    );
                  }
                }
                catch (e) {}
              }
            }
          }),
          y(this.node.pnls).forEach(function(t) {
            e.initPanel(t);
          }),
          this.trigger('initPanels:after');
        }),
        (e.prototype.initPanel = function(e) {
          var t = this;
          var n = this.conf.panelNodetype.join(', ');
          if (
            e.matches(n) &&
            (e.matches('.mm-panel') || (e = this._initPanel(e)), e)
          ) {
            var i = [];
            i.push.apply(i, y(e, '.' + this.conf.classNames.panel)),
            y(e, '.mm-listview').forEach(function(e) {
              y(e, '.mm-listitem').forEach(function(e) {
                i.push.apply(i, y(e, n));
              });
            }),
            i.forEach(function(e) {
              t.initPanel(e);
            });
          }
        }),
        (e.prototype._initPanel = function(e) {
          var t = this;
          if (
            (this.trigger('initPanel:before', [e]),
            x(e, this.conf.classNames.panel, 'mm-panel'),
            x(e, this.conf.classNames.nopanel, 'mm-nopanel'),
            x(e, this.conf.classNames.inset, 'mm-listview_inset'),
            e.matches('.mm-listview_inset') && e.classList.add('mm-nopanel'),
            e.matches('.mm-nopanel'))
          ) {
            return null;
          }
          var n = e.id || l();
          var i =
            e.matches('.' + this.conf.classNames.vertical) ||
            !this.opts.slidingSubmenus;
          if (
            (e.classList.remove(this.conf.classNames.vertical),
            e.matches('ul, ol'))
          ) {
            e.removeAttribute('id');
            var s = g('div');
            e.before(s), s.append(e), (e = s);
          }
          (e.id = n), e.classList.add('mm-panel'), e.classList.add('mm-hidden');
          var a = [e.parentElement].filter(function(e) {
            return e.matches('li');
          })[0];
          if (
            (i
              ? a && a.classList.add('mm-listitem_vertical')
              : this.node.pnls.append(e),
            a &&
              ((a.mmChild = e),
              (e.mmParent = a),
              a && a.matches('.mm-listitem') && !y(a, '.mm-btn').length))
          ) {
            var o = y(a, '.mm-listitem__text')[0];
            if (o) {
              var r = g('a.mm-btn.mm-btn_next.mm-listitem__btn');
              r.setAttribute('href', '#' + e.id),
              o.matches('span')
                ? (r.classList.add('mm-listitem__text'),
                (r.innerHTML = o.innerHTML),
                a.insertBefore(r, o.nextElementSibling),
                o.remove())
                : a.insertBefore(r, y(a, '.mm-panel')[0]);
            }
          }
          return (
            this._initNavbar(e),
            y(e, 'ul, ol').forEach(function(e) {
              t.initListview(e);
            }),
            this.trigger('initPanel:after', [e]),
            e
          );
        }),
        (e.prototype._initNavbar = function(e) {
          if (
            (this.trigger('initNavbar:before', [e]), !y(e, '.mm-navbar').length)
          ) {
            var t = null;
            var n = null;
            if (
              (e.getAttribute('data-mm-parent')
                ? (n = _(this.node.pnls, e.getAttribute('data-mm-parent'))[0])
                : (t = e.mmParent) && (n = t.closest('.mm-panel')),
              !t || !t.matches('.mm-listitem_vertical'))
            ) {
              var i = g('div.mm-navbar');
              if (
                (this.opts.navbar.add
                  ? this.opts.navbar.sticky &&
                    i.classList.add('mm-navbar_sticky')
                  : i.classList.add('mm-hidden'),
                n)
              ) {
                var s = g('a.mm-btn.mm-btn_prev.mm-navbar__btn');
                s.setAttribute('href', '#' + n.id), i.append(s);
              }
              var a = null;
              t
                ? (a = y(t, '.mm-listitem__text')[0])
                : n && (a = _(n, 'a[href="#' + e.id + '"]')[0]);
              var o = g('a.mm-navbar__title');
              var r = g('span');
              switch (
                (o.append(r),
                (r.innerHTML =
                  e.getAttribute('data-mm-title') ||
                  (a ? a.textContent : '') ||
                  this.i18n(this.opts.navbar.title) ||
                  this.i18n('Menu')),
                this.opts.navbar.titleLink)
              ) {
                case 'anchor':
                  a && o.setAttribute('href', a.getAttribute('href'));
                  break;
                case 'parent':
                  n && o.setAttribute('href', '#' + n.id);
              }
              i.append(o), e.prepend(i), this.trigger('initNavbar:after', [e]);
            }
          }
        }),
        (e.prototype.initListview = function(e) {
          var t = this;
          this.trigger('initListview:before', [e]),
          x(e, this.conf.classNames.nolistview, 'mm-nolistview'),
          e.matches('.mm-nolistview') ||
              (e.classList.add('mm-listview'),
              y(e).forEach(function(e) {
                e.classList.add('mm-listitem'),
                x(e, t.conf.classNames.selected, 'mm-listitem_selected'),
                y(e, 'a, span').forEach(function(e) {
                  e.matches('.mm-btn') ||
                      e.classList.add('mm-listitem__text');
                });
              })),
          this.trigger('initListview:after', [e]);
        }),
        (e.prototype._initOpened = function() {
          this.trigger('initOpened:before');
          var e = this.node.pnls.querySelectorAll('.mm-listitem_selected');
          var t = null;
          e.forEach(function(e) {
            (t = e), e.classList.remove('mm-listitem_selected');
          }),
          t && t.classList.add('mm-listitem_selected');
          var n = t
            ? t.closest('.mm-panel')
            : y(this.node.pnls, '.mm-panel')[0];
          this.openPanel(n, !1), this.trigger('initOpened:after');
        }),
        (e.prototype._initAnchors = function() {
          var e = this;
          this.trigger('initAnchors:before'),
          document.addEventListener(
            'click',
            function(t) {
              var n = t.target.closest('a[href]');
              if (n) {
                for (
                  var i = {
                      inMenu: n.closest('.mm-menu') === e.node.menu,
                      inListview: n.matches('.mm-listitem > a'),
                      toExternal:
                          n.matches('[rel="external"]') ||
                          n.matches('[target="_blank"]')
                    },
                    s = {
                      close: null,
                      setSelected: null,
                      preventDefault:
                          n.getAttribute('href').slice(0, 1) == '#'
                    },
                    a = 0;
                  a < e.clck.length;
                  a++
                ) {
                  var m = e.clck[a].call(e, n, i);
                  if (m) {
                    if (typeof m === 'boolean') {
                      return void t.preventDefault();
                    }
                    r(m) == 'object' && (s = o(m, s));
                  }
                }
                i.inMenu &&
                    i.inListview &&
                    !i.toExternal &&
                    (c(n, e.opts.onClick.setSelected, s.setSelected) &&
                      e.setSelected(n.parentElement),
                    c(n, e.opts.onClick.preventDefault, s.preventDefault) &&
                      t.preventDefault(),
                    c(n, e.opts.onClick.close, s.close) &&
                      e.opts.offCanvas &&
                      typeof e.close === 'function' &&
                      e.close());
              }
            },
            !0
          ),
          this.trigger('initAnchors:after');
        }),
        (e.prototype.i18n = function(e) {
          return (function(e, t) {
            return (typeof t === 'string' && void 0 !== u[t] && u[t][e]) || e;
          })(e, this.conf.language);
        }),
        (e.version = i.a),
        (e.options = s),
        (e.configs = a),
        (e.addons = {}),
        (e.wrappers = {}),
        (e.node = {}),
        (e.vars = {}),
        e
      );
    })();
    var A = { blockUI: !0, moveBackground: !0 };
    var T = {
      clone: !1,
      menu: { insertMethod: 'prepend', insertSelector: 'body' },
      page: { nodetype: 'div', selector: null, noSelector: [] }
    };
    function C(e) {
      return e ? e.charAt(0).toUpperCase() + e.slice(1) : '';
    }
    function N(e, t, n) {
      var i = t.split('.');
      (e[(t = 'mmEvent' + C(i[0]) + C(i[1]))] = e[t] || []),
      e[t].push(n),
      e.addEventListener(i[0], n);
    }
    function H(e, t) {
      var n = t.split('.');
      (t = 'mmEvent' + C(n[0]) + C(n[1])),
      (e[t] || []).forEach(function(t) {
        e.removeEventListener(n[0], t);
      });
    }
    (M.options.offCanvas = A), (M.configs.offCanvas = T);
    (M.prototype.open = function() {
      var e = this;
      this.trigger('open:before'),
      this.vars.opened ||
          (this._openSetup(),
          setTimeout(function() {
            e._openStart();
          }, this.conf.openingInterval),
          this.trigger('open:after'));
    }),
    (M.prototype._openSetup = function() {
      var e = this;
      var t = this.opts.offCanvas;
      this.closeAllOthers(),
      (function(e, t, n) {
        var i = t.split('.');
        (e[(t = 'mmEvent' + C(i[0]) + C(i[1]))] || []).forEach(function(e) {
          e(n || {});
        });
      })(window, 'resize.page', { force: !0 });
      var n = ['mm-wrapper_opened'];
      t.blockUI && n.push('mm-wrapper_blocking'),
      t.blockUI == 'modal' && n.push('mm-wrapper_modal'),
      t.moveBackground && n.push('mm-wrapper_background'),
      n.forEach(function(t) {
        e.node.wrpr.classList.add(t);
      }),
      setTimeout(function() {
        e.vars.opened = !0;
      }, this.conf.openingInterval),
      this.node.menu.classList.add('mm-menu_opened');
    }),
    (M.prototype._openStart = function() {
      var e = this;
      m(
        M.node.page,
        function() {
          e.trigger('open:finish');
        },
        this.conf.transitionDuration
      ),
      this.trigger('open:start'),
      this.node.wrpr.classList.add('mm-wrapper_opening');
    }),
    (M.prototype.close = function() {
      var e = this;
      this.trigger('close:before'),
      this.vars.opened &&
            (m(
              M.node.page,
              function() {
                e.node.menu.classList.remove('mm-menu_opened');
                [
                  'mm-wrapper_opened',
                  'mm-wrapper_blocking',
                  'mm-wrapper_modal',
                  'mm-wrapper_background'
                ].forEach(function(t) {
                  e.node.wrpr.classList.remove(t);
                }),
                (e.vars.opened = !1),
                e.trigger('close:finish');
              },
              this.conf.transitionDuration
            ),
            this.trigger('close:start'),
            this.node.wrpr.classList.remove('mm-wrapper_opening'),
            this.trigger('close:after'));
    }),
    (M.prototype.closeAllOthers = function() {
      var e = this;
      _(document.body, '.mm-menu_offcanvas').forEach(function(t) {
        if (t !== e.node.menu) {
          var n = t.mmApi;
          n && n.close && n.close();
        }
      });
    }),
    (M.prototype.setPage = function(e) {
      this.trigger('setPage:before', [e]);
      var t = this.conf.offCanvas;
      if (!e) {
        var n =
            typeof t.page.selector === 'string'
              ? _(document.body, t.page.selector)
              : y(document.body, t.page.nodetype);
        if (
          ((n = n.filter(function(e) {
            return !e.matches('.mm-menu, .mm-wrapper__blocker');
          })),
          t.page.noSelector.length &&
              (n = n.filter(function(e) {
                return !e.matches(t.page.noSelector.join(', '));
              })),
          n.length > 1)
        ) {
          var i = g('div');
          n[0].before(i),
          n.forEach(function(e) {
            i.append(e);
          }),
          (n = [i]);
        }
        e = n[0];
      }
      e.classList.add('mm-page'),
      e.classList.add('mm-slideout'),
      (e.id = e.id || l()),
      (M.node.page = e),
      this.trigger('setPage:after', [e]);
    });
    var j = function() {
      var e = this;
      H(document.body, 'keydown.tabguard'),
      N(document.body, 'keydown.tabguard', function(t) {
        t.keyCode == 9 &&
            e.node.wrpr.matches('.mm-wrapper_opened') &&
            t.preventDefault();
      });
    };
    var D = function() {
      var e = this;
      this.trigger('initBlocker:before');
      var t = this.opts.offCanvas;
      var n = this.conf.offCanvas;
      if (t.blockUI) {
        if (!M.node.blck) {
          var i = g('div.mm-wrapper__blocker.mm-slideout');
          (i.innerHTML = '<a></a>'),
          document.querySelector(n.menu.insertSelector).append(i),
          (M.node.blck = i);
        }
        var s = function(t) {
          t.preventDefault(),
          t.stopPropagation(),
          e.node.wrpr.matches('.mm-wrapper_modal') || e.close();
        };
        M.node.blck.addEventListener('mousedown', s),
        M.node.blck.addEventListener('touchstart', s),
        M.node.blck.addEventListener('touchmove', s),
        this.trigger('initBlocker:after');
      }
    };
    var O = { aria: !0, text: !0 };
    var I = {
      text: {
        closeMenu: 'Close menu',
        closeSubmenu: 'Close submenu',
        openSubmenu: 'Open submenu',
        toggleSubmenu: 'Toggle submenu'
      }
    };
    var q = {
      'Close menu': 'بستن منو',
      'Close submenu': 'بستن زیرمنو',
      'Open submenu': 'بازکردن زیرمنو',
      'Toggle submenu': 'سوییچ زیرمنو'
    };
    var B = {
      'Close menu': 'Menü schließen',
      'Close submenu': 'Untermenü schließen',
      'Open submenu': 'Untermenü öffnen',
      'Toggle submenu': 'Untermenü wechseln'
    };
    var z = {
      'Close menu': 'Закрыть меню',
      'Close submenu': 'Закрыть подменю',
      'Open submenu': 'Открыть подменю',
      'Toggle submenu': 'Переключить подменю'
    };
    f(
      {
        'Close menu': 'Menu sluiten',
        'Close submenu': 'Submenu sluiten',
        'Open submenu': 'Submenu openen',
        'Toggle submenu': 'Submenu wisselen'
      },
      'nl'
    ),
    f(q, 'fa'),
    f(B, 'de'),
    f(z, 'ru'),
    (M.options.screenReader = O),
    (M.configs.screenReader = I);
    var R;
    (R = function(e, t, n) {
      (e[t] = n), n ? e.setAttribute(t, n.toString()) : e.removeAttribute(t);
    }),
    (M.sr_aria = function(e, t, n) {
      R(e, 'aria-' + t, n);
    }),
    (M.sr_role = function(e, t) {
      R(e, 'role', t);
    }),
    (M.sr_text = function(e) {
      return '<span class="mm-sronly">' + e + '</span>';
    });
    var U = { fix: !0 };
    var W =
      'ontouchstart' in window || Boolean(navigator.msMaxTouchPoints) || !1;
    M.options.scrollBugFix = U;
    var Y = { height: 'default' };
    M.options.autoHeight = Y;
    var F = { close: !1, open: !1 };
    M.options.backButton = F;
    var X = { add: !1, visible: { min: 1, max: 3 } };
    M.options.columns = X;
    var V = { add: !1, addTo: 'panels', count: !1 };
    (M.options.counters = V),
    (M.configs.classNames.counters = { counter: 'Counter' });
    var Z = { add: !1, addTo: 'panels' };
    (M.options.dividers = Z), (M.configs.classNames.divider = 'Divider');
    var G = { open: !1, node: null };
    var J =
      'ontouchstart' in window || Boolean(navigator.msMaxTouchPoints) || !1;
    var K = { top: 0, right: 0, bottom: 0, left: 0 };
    var Q = { start: 15, swipe: 15 };
    var $ = { x: ['Right', 'Left'], y: ['Down', 'Up'] };
    var ee = 0;
    var te = 1;
    var ne = 2;
    var ie = function(e, t) {
      return (
        typeof e === 'string' &&
          e.slice(-1) == '%' &&
          (e = t * ((e = parseInt(e.slice(0, -1), 10)) / 100)),
        e
      );
    };
    var se = (function() {
      function e(e, t, n) {
        (this.surface = e),
        (this.area = o(t, K)),
        (this.treshold = o(n, Q)),
        this.surface.mmHasDragEvents ||
            (this.surface.addEventListener(
              J ? 'touchstart' : 'mousedown',
              this.start.bind(this)
            ),
            this.surface.addEventListener(
              J ? 'touchend' : 'mouseup',
              this.stop.bind(this)
            ),
            this.surface.addEventListener(
              J ? 'touchleave' : 'mouseleave',
              this.stop.bind(this)
            ),
            this.surface.addEventListener(
              J ? 'touchmove' : 'mousemove',
              this.move.bind(this)
            )),
        (this.surface.mmHasDragEvents = !0);
      }
      return (
        (e.prototype.start = function(e) {
          this.currentPosition = {
            x: e.touches ? e.touches[0].pageX : e.pageX || 0,
            y: e.touches ? e.touches[0].pageY : e.pageY || 0
          };
          var t = this.surface.clientWidth;
          var n = this.surface.clientHeight;
          var i = ie(this.area.top, n);
          if (!(typeof i === 'number' && this.currentPosition.y < i)) {
            var s = ie(this.area.right, t);
            if (
              !(
                typeof s === 'number' &&
                ((s = t - s), this.currentPosition.x > s)
              )
            ) {
              var a = ie(this.area.bottom, n);
              if (
                !(
                  typeof a === 'number' &&
                  ((a = n - a), this.currentPosition.y > a)
                )
              ) {
                var o = ie(this.area.left, t);
                (typeof o === 'number' && this.currentPosition.x < o) ||
                  ((this.startPosition = {
                    x: this.currentPosition.x,
                    y: this.currentPosition.y
                  }),
                  (this.state = te));
              }
            }
          }
        }),
        (e.prototype.stop = function(e) {
          if (this.state == ne) {
            var t = this._dragDirection();
            var n = this._eventDetail(t);
            if (
              (this._dispatchEvents('drag*End', n),
              Math.abs(this.movement[this.axis]) > this.treshold.swipe)
            ) {
              var i = this._swipeDirection();
              (n.direction = i), this._dispatchEvents('swipe*', n);
            }
          }
          this.state = ee;
        }),
        (e.prototype.move = function(e) {
          switch (this.state) {
            case te:
            case ne:
              var t = {
                x: e.changedTouches ? e.touches[0].pageX : e.pageX || 0,
                y: e.changedTouches ? e.touches[0].pageY : e.pageY || 0
              };
              (this.movement = {
                x: t.x - this.currentPosition.x,
                y: t.y - this.currentPosition.y
              }),
              (this.distance = {
                x: t.x - this.startPosition.x,
                y: t.y - this.startPosition.y
              }),
              (this.currentPosition = { x: t.x, y: t.y }),
              (this.axis =
                  Math.abs(this.distance.x) > Math.abs(this.distance.y)
                    ? 'x'
                    : 'y');
              var n = this._dragDirection();
              var i = this._eventDetail(n);
              this.state == te &&
                Math.abs(this.distance[this.axis]) > this.treshold.start &&
                (this._dispatchEvents('drag*Start', i), (this.state = ne)),
              this.state == ne && this._dispatchEvents('drag*Move', i);
          }
        }),
        (e.prototype._eventDetail = function(e) {
          var t = this.distance.x;
          var n = this.distance.y;
          return (
            this.axis == 'x' &&
              (t -= t > 0 ? this.treshold.start : 0 - this.treshold.start),
            this.axis == 'y' &&
              (n -= n > 0 ? this.treshold.start : 0 - this.treshold.start),
            {
              axis: this.axis,
              direction: e,
              movementX: this.movement.x,
              movementY: this.movement.y,
              distanceX: t,
              distanceY: n
            }
          );
        }),
        (e.prototype._dispatchEvents = function(e, t) {
          var n = new CustomEvent(e.replace('*', ''), { detail: t });
          this.surface.dispatchEvent(n);
          var i = new CustomEvent(e.replace('*', this.axis.toUpperCase()), {
            detail: t
          });
          this.surface.dispatchEvent(i);
          var s = new CustomEvent(e.replace('*', t.direction), { detail: t });
          this.surface.dispatchEvent(s);
        }),
        (e.prototype._dragDirection = function() {
          return $[this.axis][this.distance[this.axis] > 0 ? 0 : 1];
        }),
        (e.prototype._swipeDirection = function() {
          return $[this.axis][this.movement[this.axis] > 0 ? 0 : 1];
        }),
        e
      );
    })();
    var ae = null;
    var oe = null;
    var re = 0;
    var ce = function(e) {
      var t = this;
      var n = {};
      var i = !1;
      var s = function() {
        var e = Object.keys(t.opts.extensions);
        e.length
          ? (k(
            e.join(', '),
            function() {},
            function() {
              n = me(n, [], t.node.menu);
            }
          ),
          e.forEach(function(e) {
            k(
              e,
              function() {
                n = me(n, t.opts.extensions[e], t.node.menu);
              },
              function() {}
            );
          }))
          : (n = me(n, [], t.node.menu));
      };
      oe && (H(oe, 'dragStart'), H(oe, 'dragMove'), H(oe, 'dragEnd')),
      (ae = new se((oe = e))),
      s(),
      (s = function() {}),
      oe &&
          (N(oe, 'dragStart', function(e) {
            e.detail.direction == n.direction &&
              ((i = !0),
              t.node.wrpr.classList.add('mm-wrapper_dragging'),
              t._openSetup(),
              t.trigger('open:start'),
              (re =
                t.node.menu[n.axis == 'x' ? 'clientWidth' : 'clientHeight']));
          }),
          N(oe, 'dragMove', function(e) {
            if (e.detail.axis == n.axis && i) {
              var t = e.detail['distance' + n.axis.toUpperCase()];
              switch (n.position) {
                case 'right':
                case 'bottom':
                  t = Math.min(Math.max(t, -re), 0);
                  break;
                default:
                  t = Math.max(Math.min(t, re), 0);
              }
              if (n.zposition == 'front') {
                switch (n.position) {
                  case 'right':
                  case 'bottom':
                    t += re;
                    break;
                  default:
                    t -= re;
                }
              }
              n.slideOutNodes.forEach(function(e) {
                e.style.transform =
                  'translate' + n.axis.toUpperCase() + '(' + t + 'px)';
              });
            }
          }),
          N(oe, 'dragEnd', function(e) {
            if (e.detail.axis == n.axis && i) {
              (i = !1),
              t.node.wrpr.classList.remove('mm-wrapper_dragging'),
              n.slideOutNodes.forEach(function(e) {
                e.style.transform = '';
              });
              var s =
                Math.abs(e.detail['distance' + n.axis.toUpperCase()]) >=
                0.75 * re;
              if (!s) {
                var a = e.detail['movement' + n.axis.toUpperCase()];
                switch (n.position) {
                  case 'right':
                  case 'bottom':
                    s = a <= 0;
                    break;
                  default:
                    s = a >= 0;
                }
              }
              s ? t._openStart() : t.close();
            }
          }));
    };
    var me = function(e, t, n) {
      switch (
        ((e.position = 'left'),
        (e.zposition = 'back'),
        ['right', 'top', 'bottom'].forEach(function(n) {
          t.indexOf('position-' + n) > -1 && (e.position = n);
        }),
        ['front', 'top', 'bottom'].forEach(function(n) {
          t.indexOf('position-' + n) > -1 && (e.zposition = 'front');
        }),
        (ae.area = {
          top: e.position == 'bottom' ? '75%' : 0,
          right: e.position == 'left' ? '75%' : 0,
          bottom: e.position == 'top' ? '75%' : 0,
          left: e.position == 'right' ? '75%' : 0
        }),
        e.position)
      ) {
        case 'top':
        case 'bottom':
          e.axis = 'y';
          break;
        default:
          e.axis = 'x';
      }
      switch (e.position) {
        case 'top':
          e.direction = 'Down';
          break;
        case 'right':
          e.direction = 'Left';
          break;
        case 'bottom':
          e.direction = 'Up';
          break;
        default:
          e.direction = 'Right';
      }
      switch (e.zposition) {
        case 'front':
          e.slideOutNodes = [n];
          break;
        default:
          e.slideOutNodes = _(document.body, '.mm-slideout');
      }
      return e;
    };
    M.options.drag = G;
    var le = {
      drop: !1,
      fitViewport: !0,
      event: 'click',
      position: {},
      tip: !0
    };
    var de = {
      offset: { button: { x: -5, y: 5 }, viewport: { x: 20, y: 20 } },
      height: { max: 880 },
      width: { max: 440 }
    };
    (M.options.dropdown = le), (M.configs.dropdown = de);
    var pe = { insertMethod: 'append', insertSelector: 'body' };
    (M.configs.fixedElements = pe),
    (M.configs.classNames.fixedElements = { fixed: 'Fixed' });
    var ue = {
      use: !1,
      top: [],
      bottom: [],
      position: 'left',
      type: 'default'
    };
    M.options.iconbar = ue;
    var fe = {
      add: !1,
      blockPanel: !0,
      hideDivider: !1,
      hideNavbar: !0,
      visible: 3
    };
    M.options.iconPanels = fe;
    var he = { enable: !1, enhance: !1 };
    M.options.keyboardNavigation = he;
    var ve = function(e) {
      var t = this;
      H(document.body, 'keydown.tabguard'),
      H(document.body, 'focusin.tabguard'),
      N(document.body, 'focusin.tabguard', function(e) {
        if (t.node.wrpr.matches('.mm-wrapper_opened')) {
          var n = e.target;
          if (n.matches('.mm-tabend')) {
            var i = void 0;
            n.parentElement.matches('.mm-menu') &&
                M.node.blck &&
                (i = M.node.blck),
            n.parentElement.matches('.mm-wrapper__blocker') &&
                  (i = _(
                    document.body,
                    '.mm-menu_offcanvas.mm-menu_opened'
                  )[0]),
            i || (i = n.parentElement),
            i && y(i, '.mm-tabstart')[0].focus();
          }
        }
      }),
      H(document.body, 'keydown.navigate'),
      N(document.body, 'keydown.navigate', function(t) {
        var n = t.target;
        var i = n.closest('.mm-menu');
        if (i) {
          i.mmApi;
          if (!n.matches('input, textarea')) {
            switch (t.keyCode) {
              case 13:
                (n.matches('.mm-toggle') || n.matches('.mm-check')) &&
                    n.dispatchEvent(new Event('click'));
                break;
              case 32:
              case 37:
              case 38:
              case 39:
              case 40:
                t.preventDefault();
            }
          }
          if (e) {
            if (n.matches('input')) {
              switch (t.keyCode) {
                case 27:
                  n.value = '';
              }
            }
            else {
              var s = i.mmApi;
              switch (t.keyCode) {
                case 8:
                  var a = _(i, '.mm-panel_opened')[0].mmParent;
                  a && s.openPanel(a.closest('.mm-panel'));
                  break;
                case 27:
                  i.matches('.mm-menu_offcanvas') && s.close();
              }
            }
          }
        }
      });
    };
    var be = { load: !1 };
    M.options.lazySubmenus = be;
    var ge = [];
    var _e = { breadcrumbs: { separator: '/', removeFirst: !1 } };
    function ye() {
      var e = this;
      var t = this.opts.navbars;
      if (void 0 !== t) {
        t instanceof Array || (t = [t]);
        var n = {};
        t.length &&
          (t.forEach(function(t) {
            if (
              !(t = (function(e) {
                return (
                  typeof e === 'boolean' && e && (e = {}),
                  typeof e !== 'object' && (e = {}),
                  void 0 === e.content && (e.content = ['prev', 'title']),
                  e.content instanceof Array || (e.content = [e.content]),
                  void 0 === e.use && (e.use = !0),
                  typeof e.use === 'boolean' && e.use && (e.use = !0),
                  e
                );
              })(t)).use
            ) {
              return !1;
            }
            var i = g('div.mm-navbar');
            var s = t.position;
            s !== 'bottom' && (s = 'top'),
            n[s] || (n[s] = g('div.mm-navbars_' + s)),
            n[s].append(i);
            for (var a = 0, o = t.content.length; a < o; a++) {
              var r;
              var c = t.content[a];
              if (typeof c === 'string') {
                if (typeof (r = ye.navbarContents[c]) === 'function') {
                  r.call(e, i);
                }
                else {
                  var m = g('span');
                  m.innerHTML = c;
                  var l = y(m);
                  l.length == 1 && (m = l[0]), i.append(m);
                }
              }
              else {
                i.append(c);
              }
            }
            typeof t.type === 'string' &&
              typeof (r = ye.navbarTypes[t.type]) === 'function' &&
              r.call(e, i);
            typeof t.use !== 'boolean' &&
              k(
                t.use,
                function() {
                  i.classList.remove('mm-hidden'), M.sr_aria(i, 'hidden', !1);
                },
                function() {
                  i.classList.add('mm-hidden'), M.sr_aria(i, 'hidden', !0);
                }
              );
          }),
          this.bind('initMenu:after', function() {
            for (var t in n) {
              e.node.menu[t == 'bottom' ? 'append' : 'prepend'](n[t]);
            }
          }));
      }
    }
    (M.options.navbars = ge),
    (M.configs.navbars = _e),
    (M.configs.classNames.navbars = {
      panelPrev: 'Prev',
      panelTitle: 'Title'
    }),
    (ye.navbarContents = {
      breadcrumbs: function(e) {
        var t = this;
        var n = g('div.mm-navbar__breadcrumbs');
        e.append(n),
        this.bind('initNavbar:after', function(e) {
          if (!e.querySelector('.mm-navbar__breadcrumbs')) {
            y(e, '.mm-navbar')[0].classList.add('mm-hidden');
            for (
              var n = [],
                i = g('span.mm-navbar__breadcrumbs'),
                s = e,
                a = !0;
              s;

            ) {
              if (
                !(s = s.closest('.mm-panel')).parentElement.matches(
                  '.mm-listitem_vertical'
                )
              ) {
                var o = _(s, '.mm-navbar__title span')[0];
                if (o) {
                  var r = o.textContent;
                  r.length &&
                        n.unshift(
                          a
                            ? '<span>' + r + '</span>'
                            : '<a href="#' + s.id + '">' + r + '</a>'
                        );
                }
                a = !1;
              }
              s = s.mmParent;
            }
            t.conf.navbars.breadcrumbs.removeFirst && n.shift(),
            (i.innerHTML = n.join(
              '<span class="mm-separator">' +
                      t.conf.navbars.breadcrumbs.separator +
                      '</span>'
            )),
            y(e, '.mm-navbar')[0].append(i);
          }
        }),
        this.bind('openPanel:start', function(e) {
          var t = e.querySelector('.mm-navbar__breadcrumbs');
          n.innerHTML = t ? t.innerHTML : '';
        }),
        this.bind('initNavbar:after:sr-aria', function(e) {
          _(e, '.mm-breadcrumbs a').forEach(function(e) {
            M.sr_aria(e, 'owns', e.getAttribute('href').slice(1));
          });
        });
      },
      close: function(e) {
        var t = this;
        var n = g('a.mm-btn.mm-btn_close.mm-navbar__btn');
        e.append(n),
        this.bind('setPage:after', function(e) {
          n.setAttribute('href', '#' + e.id);
        }),
        this.bind('setPage:after:sr-text', function() {
          (n.innerHTML = M.sr_text(
            t.i18n(t.conf.screenReader.text.closeMenu)
          )),
          M.sr_aria(n, 'owns', n.getAttribute('href').slice(1));
        });
      },
      prev: function(e) {
        var t;
        var n;
        var i;
        var s = this;
        var a = g('a.mm-btn.mm-btn_prev.mm-navbar__btn');
        e.append(a),
        this.bind('initNavbar:after', function(e) {
          y(e, '.mm-navbar')[0].classList.add('mm-hidden');
        }),
        this.bind('openPanel:start', function(e) {
          e.parentElement.matches('.mm-listitem_vertical') ||
                ((t = e.querySelector(
                  '.' + s.conf.classNames.navbars.panelPrev
                )) || (t = e.querySelector('.mm-navbar__btn.mm-btn_prev')),
                (n = t ? t.getAttribute('href') : ''),
                (i = t ? t.innerHTML : ''),
                n ? a.setAttribute('href', n) : a.removeAttribute('href'),
                a.classList[n || i ? 'remove' : 'add']('mm-hidden'),
                (a.innerHTML = i));
        }),
        this.bind('initNavbar:after:sr-aria', function(e) {
          M.sr_aria(e.querySelector('.mm-navbar'), 'hidden', !0);
        }),
        this.bind('openPanel:start:sr-aria', function(e) {
          M.sr_aria(a, 'hidden', a.matches('.mm-hidden')),
          M.sr_aria(a, 'owns', (a.getAttribute('href') || '').slice(1));
        });
      },
      searchfield: function(e) {
        r(this.opts.searchfield) != 'object' && (this.opts.searchfield = {});
        var t = g('div.mm-navbar__searchfield');
        e.append(t),
        (this.opts.searchfield.add = !0),
        (this.opts.searchfield.addTo = [t]);
      },
      title: function(e) {
        var t;
        var n;
        var i;
        var s;
        var a = this;
        var o = g('a.mm-navbar__title');
        var r = g('span');
        o.append(r),
        e.append(o),
        this.bind('openPanel:start', function(e) {
          e.parentElement.matches('.mm-listitem_vertical') ||
                ((i = e.querySelector(
                  '.' + a.conf.classNames.navbars.panelTitle
                )) || (i = e.querySelector('.mm-navbar__title span')),
                (t =
                  i && i.closest('a')
                    ? i.closest('a').getAttribute('href')
                    : '')
                  ? o.setAttribute('href', t)
                  : o.removeAttribute('href'),
                (n = i ? i.innerHTML : ''),
                (r.innerHTML = n));
        }),
        this.bind('openPanel:start:sr-aria', function(e) {
          if (a.opts.screenReader.text) {
            if (!s) {
              y(a.node.menu, '.mm-navbars_top, .mm-navbars_bottom').forEach(
                function(e) {
                  var t = e.querySelector('.mm-btn_prev');
                  t && (s = t);
                }
              );
            }
            if (s) {
              var t = !0;
              a.opts.navbar.titleLink == 'parent' &&
                    (t = !s.matches('.mm-hidden')),
              M.sr_aria(o, 'hidden', t);
            }
          }
        });
      }
    }),
    (ye.navbarTypes = {
      tabs: function(e) {
        var t = this;
        e.classList.add('mm-navbar_tabs'),
        e.parentElement.classList.add('mm-navbars_has-tabs');
        var n = y(e, 'a');
        e.addEventListener('click', function(e) {
          var n = e.target;
          if (n.matches('a')) {
            if (n.matches('.mm-navbar__tab_selected')) {
              e.stopImmediatePropagation();
            }
            else {
              try {
                t.openPanel(
                  t.node.menu.querySelector(n.getAttribute('href')),
                  !1
                ),
                e.stopImmediatePropagation();
              }
              catch (e) {}
            }
          }
        }),
        this.bind('openPanel:start', function e(t) {
          n.forEach(function(e) {
            e.classList.remove('mm-navbar__tab_selected');
          });
          var i = n.filter(function(e) {
            return e.matches('[href="#' + t.id + '"]');
          })[0];
          if (i) {
            i.classList.add('mm-navbar__tab_selected');
          }
          else {
            var s = t.mmParent;
            s && e.call(this, s.closest('.mm-panel'));
          }
        });
      }
    });
    var Le = { scroll: !1, update: !1 };
    var we = { scrollOffset: 0, updateOffset: 50 };
    (M.options.pageScroll = Le), (M.configs.pageScroll = we);
    var Ee = {
      add: !1,
      addTo: 'panels',
      cancel: !1,
      noResults: 'No results found.',
      placeholder: 'Search',
      panel: {
        add: !1,
        dividers: !0,
        fx: 'none',
        id: null,
        splash: null,
        title: 'Search'
      },
      search: !0,
      showTextItems: !1,
      showSubPanels: !0
    };
    var xe = { clear: !1, form: !1, input: !1, submit: !1 };
    var Pe = {
      Search: 'جستجو',
      'No results found.': 'نتیجه‌ای یافت نشد.',
      cancel: 'انصراف'
    };
    var ke = {
      Search: 'Suche',
      'No results found.': 'Keine Ergebnisse gefunden.',
      cancel: 'beenden'
    };
    var Se = {
      Search: 'Найти',
      'No results found.': 'Ничего не найдено.',
      cancel: 'отменить'
    };
    var Me = function() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
        e += arguments[t].length;
      }
      var i = Array(e);
      var s = 0;
      for (t = 0; t < n; t++) {
        for (var a = arguments[t], o = 0, r = a.length; o < r; o++, s++) {
          i[s] = a[o];
        }
      }
      return i;
    };
    f(
      {
        Search: 'Zoeken',
        'No results found.': 'Geen resultaten gevonden.',
        cancel: 'annuleren'
      },
      'nl'
    ),
    f(Pe, 'fa'),
    f(ke, 'de'),
    f(Se, 'ru'),
    (M.options.searchfield = Ee),
    (M.configs.searchfield = xe);
    var Ae = function() {
      var e = this.opts.searchfield;
      var t = (this.conf.searchfield, y(this.node.pnls, '.mm-panel_search')[0]);
      if (t) {
        return t;
      }
      (t = g('div.mm-panel.mm-panel_search.mm-hidden')),
      e.panel.id && (t.id = e.panel.id),
      e.panel.title && t.setAttribute('data-mm-title', e.panel.title);
      var n = g('ul');
      switch (
        (t.append(n),
        this.node.pnls.append(t),
        this.initListview(n),
        this._initNavbar(t),
        e.panel.fx)
      ) {
        case !1:
          break;
        case 'none':
          t.classList.add('mm-panel_noanimation');
          break;
        default:
          t.classList.add('mm-panel_fx-' + e.panel.fx);
      }
      if (e.panel.splash) {
        var i = g('div.mm-panel__content');
        (i.innerHTML = e.panel.splash), t.append(i);
      }
      return (
        t.classList.add('mm-panel'),
        t.classList.add('mm-hidden'),
        this.node.pnls.append(t),
        t
      );
    };
    var Te = function(e) {
      var t = this.opts.searchfield;
      var n = this.conf.searchfield;
      if (e.parentElement.matches('.mm-listitem_vertical')) {
        return null;
      }
      if ((a = _(e, '.mm-searchfield')[0])) {
        return a;
      }
      function i(e, t) {
        if (t) {
          for (var n in t) {
            e.setAttribute(n, t[n]);
          }
        }
      }
      var s;
      var a = g((n.form ? 'form' : 'div') + '.mm-searchfield');
      var o = g('div.mm-searchfield__input');
      var r = g('input');
      ((r.type = 'text'),
      (r.autocomplete = 'off'),
      (r.placeholder = this.i18n(t.placeholder)),
      o.append(r),
      a.append(o),
      e.prepend(a),
      i(r, n.input),
      n.clear) &&
        ((s = g('a.mm-btn.mm-btn_close.mm-searchfield__btn')).setAttribute(
          'href',
          '#'
        ),
        o.append(s));
      (i(a, n.form), n.form && n.submit && !n.clear) &&
        ((s = g('a.mm-btn.mm-btn_next.mm-searchfield__btn')).setAttribute(
          'href',
          '#'
        ),
        o.append(s));
      t.cancel &&
        ((s = g('a.mm-searchfield__cancel')).setAttribute('href', '#'),
        (s.textContent = this.i18n('cancel')),
        a.append(s));
      return a;
    };
    var Ce = function(e) {
      var t = this;
      var n = this.opts.searchfield;
      var i = (this.conf.searchfield, {});
      e.closest('.mm-panel_search')
        ? ((i.panels = _(this.node.pnls, '.mm-panel')),
        (i.noresults = [e.closest('.mm-panel')]))
        : e.closest('.mm-panel')
          ? ((i.panels = [e.closest('.mm-panel')]), (i.noresults = i.panels))
          : ((i.panels = _(this.node.pnls, '.mm-panel')),
          (i.noresults = [this.node.menu])),
      (i.panels = i.panels.filter(function(e) {
        return !e.matches('.mm-panel_search');
      })),
      (i.panels = i.panels.filter(function(e) {
        return !e.parentElement.matches('.mm-listitem_vertical');
      })),
      (i.listitems = []),
      (i.dividers = []),
      i.panels.forEach(function(e) {
        var t;
        var n;
        (t = i.listitems).push.apply(t, _(e, '.mm-listitem')),
        (n = i.dividers).push.apply(n, _(e, '.mm-divider'));
      });
      var s = y(this.node.pnls, '.mm-panel_search')[0];
      var a = _(e, 'input')[0];
      var o = _(e, '.mm-searchfield__cancel')[0];
      (a.mmSearchfield = i),
      n.panel.add &&
          n.panel.splash &&
          (H(a, 'focus.splash'),
          N(a, 'focus.splash', function(e) {
            t.openPanel(s);
          })),
      n.cancel &&
          (H(a, 'focus.cancel'),
          N(a, 'focus.cancel', function(e) {
            o.classList.add('mm-searchfield__cancel-active');
          }),
          H(o, 'click.splash'),
          N(o, 'click.splash', function(e) {
            if (
              (e.preventDefault(),
              o.classList.remove('mm-searchfield__cancel-active'),
              s.matches('.mm-panel_opened'))
            ) {
              var n = y(t.node.pnls, '.mm-panel_opened-parent');
              n.length && t.openPanel(n[n.length - 1]);
            }
          })),
      n.panel.add &&
          n.addTo == 'panel' &&
          this.bind('openPanel:finish', function(e) {
            e === s && a.focus();
          }),
      H(a, 'input.search'),
      N(a, 'input.search', function(e) {
        switch (e.keyCode) {
          case 9:
          case 16:
          case 17:
          case 18:
          case 37:
          case 38:
          case 39:
          case 40:
            break;
          default:
            t.search(a);
        }
      }),
      this.search(a);
    };
    var Ne = function(e) {
      if (e) {
        var t = this.opts.searchfield;
        this.conf.searchfield;
        if (
          (e.closest('.mm-panel') || (e = y(this.node.pnls, '.mm-panel')[0]),
          !y(e, '.mm-panel__noresultsmsg').length)
        ) {
          var n = g('div.mm-panel__noresultsmsg.mm-hidden');
          (n.innerHTML = this.i18n(t.noResults)), e.append(n);
        }
      }
    };
    M.prototype.search = function(e, t) {
      var n;
      var i = this;
      var s = this.opts.searchfield;
      this.conf.searchfield;
      t = (t = t || String(e.value)).toLowerCase().trim();
      var a = e.mmSearchfield;
      var o = _(e.closest('.mm-searchfield'), '.mm-btn');
      var r = y(this.node.pnls, '.mm-panel_search')[0];
      var c = a.panels;
      var m = a.noresults;
      var l = a.listitems;
      var d = a.dividers;
      if (
        (l.forEach(function(e) {
          e.classList.remove('mm-listitem_nosubitems'),
          e.classList.remove('mm-listitem_onlysubitems'),
          e.classList.remove('mm-hidden');
        }),
        r && (y(r, '.mm-listview')[0].innerHTML = ''),
        c.forEach(function(e) {
          e.scrollTop = 0;
        }),
        t.length)
      ) {
        d.forEach(function(e) {
          e.classList.add('mm-hidden');
        }),
        l.forEach(function(e) {
          var n;
          var i = y(e, '.mm-listitem__text')[0];
          var a = !1;
          i &&
              ((n = i),
              Array.prototype.slice
                .call(n.childNodes)
                .filter(function(e) {
                  return e.nodeType == 3;
                })
                .map(function(e) {
                  return e.textContent;
                })
                .join(' '))
                .toLowerCase()
                .indexOf(t) > -1 &&
              (i.matches('.mm-listitem__btn')
                ? s.showSubPanels && (a = !0)
                : (i.matches('a') || s.showTextItems) && (a = !0)),
          a || e.classList.add('mm-hidden');
        });
        var p = l.filter(function(e) {
          return !e.matches('.mm-hidden');
        }).length;
        if (s.panel.add) {
          var u = [];
          c.forEach(function(e) {
            var t = w(_(e, '.mm-listitem'));
            if (
              (t = t.filter(function(e) {
                return !e.matches('.mm-hidden');
              })).length
            ) {
              if (s.panel.dividers) {
                var n = g('li.mm-divider');
                var i = _(e, '.mm-navbar__title')[0];
                i && ((n.innerHTML = i.innerHTML), u.push(n));
              }
              t.forEach(function(e) {
                u.push(e.cloneNode(!0));
              });
            }
          }),
          u.forEach(function(e) {
            e.querySelectorAll('.mm-toggle, .mm-check').forEach(function(e) {
              e.remove();
            });
          }),
          (n = y(r, '.mm-listview')[0]).append.apply(n, u),
          this.openPanel(r);
        }
        else {
          s.showSubPanels &&
            c.forEach(function(e) {
              w(_(e, '.mm-listitem')).forEach(function(e) {
                var t = e.mmChild;
                t &&
                  _(t, '.mm-listitem').forEach(function(e) {
                    e.classList.remove('mm-hidden');
                  });
              });
            }),
          Me(c)
            .reverse()
            .forEach(function(t, n) {
              var s = t.mmParent;
              s &&
                  (w(_(t, '.mm-listitem')).length
                    ? (s.matches('.mm-hidden') &&
                        s.classList.remove('mm-hidden'),
                    s.classList.add('mm-listitem_onlysubitems'))
                    : e.closest('.mm-panel') ||
                      ((t.matches('.mm-panel_opened') ||
                        t.matches('.mm-panel_opened-parent')) &&
                        setTimeout(function() {
                          i.openPanel(s.closest('.mm-panel'));
                        }, (n + 1) * (1.5 * i.conf.openingInterval)),
                      s.classList.add('mm-listitem_nosubitems')));
            }),
          c.forEach(function(e) {
            w(_(e, '.mm-listitem')).forEach(function(e) {
              L(e, '.mm-listitem_vertical').forEach(function(e) {
                e.matches('.mm-hidden') &&
                    (e.classList.remove('mm-hidden'),
                    e.classList.add('mm-listitem_onlysubitems'));
              });
            });
          }),
          c.forEach(function(e) {
            w(_(e, '.mm-listitem')).forEach(function(e) {
              var t = (function(e, t) {
                for (var n = [], i = e.previousElementSibling; i; ) {
                  (t && !i.matches(t)) || n.push(i),
                  (i = i.previousElementSibling);
                }
                return n;
              })(e, '.mm-divider')[0];
              t && t.classList.remove('mm-hidden');
            });
          });
        }
        o.forEach(function(e) {
          return e.classList.remove('mm-hidden');
        }),
        m.forEach(function(e) {
          _(e, '.mm-panel__noresultsmsg').forEach(function(e) {
            return e.classList[p ? 'add' : 'remove']('mm-hidden');
          });
        }),
        s.panel.add &&
            (s.panel.splash &&
              _(r, '.mm-panel__content').forEach(function(e) {
                return e.classList.add('mm-hidden');
              }),
            l.forEach(function(e) {
              return e.classList.remove('mm-hidden');
            }),
            d.forEach(function(e) {
              return e.classList.remove('mm-hidden');
            }));
      }
      else if (
        (l.forEach(function(e) {
          return e.classList.remove('mm-hidden');
        }),
        d.forEach(function(e) {
          return e.classList.remove('mm-hidden');
        }),
        o.forEach(function(e) {
          return e.classList.add('mm-hidden');
        }),
        m.forEach(function(e) {
          _(e, '.mm-panel__noresultsmsg').forEach(function(e) {
            return e.classList.add('mm-hidden');
          });
        }),
        s.panel.add)
      ) {
        if (s.panel.splash) {
          _(r, '.mm-panel__content').forEach(function(e) {
            return e.classList.remove('mm-hidden');
          });
        }
        else if (!e.closest('.mm-panel_search')) {
          var f = y(this.node.pnls, '.mm-panel_opened-parent');
          this.openPanel(f.slice(-1)[0]);
        }
      }
      this.trigger('updateListview');
    };
    var He = { add: !1, addTo: 'panels' };
    M.options.sectionIndexer = He;
    var je = { current: !0, hover: !1, parent: !1 };
    M.options.setSelected = je;
    var De = {
      collapsed: { use: !1, blockMenu: !0, hideDivider: !1, hideNavbar: !0 },
      expanded: { use: !1, initial: 'open' }
    };
    M.options.sidebar = De;
    M.configs.classNames.toggles = { toggle: 'Toggle', check: 'Check' };
    /*!
     * mmenu.js
     * mmenujs.com
     *
     * Copyright (c) Fred Heusschen
     * frebsite.nl
     */
    (M.addons = {
      offcanvas: function() {
        var e = this;
        if (this.opts.offCanvas) {
          var t = (function(e) {
            return typeof e !== 'object' && (e = {}), e;
          })(this.opts.offCanvas);
          this.opts.offCanvas = o(t, M.options.offCanvas);
          var n = this.conf.offCanvas;
          this._api.push('open', 'close', 'setPage'),
          (this.vars.opened = !1),
          this.bind('initMenu:before', function() {
            n.clone &&
                ((e.node.menu = e.node.menu.cloneNode(!0)),
                e.node.menu.id && (e.node.menu.id = 'mm-' + e.node.menu.id),
                _(e.node.menu, '[id]').forEach(function(e) {
                  e.id = 'mm-' + e.id;
                })),
            (e.node.wrpr = document.body),
            document
              .querySelector(n.menu.insertSelector)
              [n.menu.insertMethod](e.node.menu);
          }),
          this.bind('initMenu:after', function() {
            D.call(e),
            e.setPage(M.node.page),
            j.call(e),
            e.node.menu.classList.add('mm-menu_offcanvas');
            var t = window.location.hash;
            if (t) {
              var n = p(e.node.menu.id);
              n &&
                  n == t.slice(1) &&
                  setTimeout(function() {
                    e.open();
                  }, 1e3);
            }
          }),
          this.bind('setPage:after', function(e) {
            M.node.blck &&
                y(M.node.blck, 'a').forEach(function(t) {
                  t.setAttribute('href', '#' + e.id);
                });
          }),
          this.bind('open:start:sr-aria', function() {
            M.sr_aria(e.node.menu, 'hidden', !1);
          }),
          this.bind('close:finish:sr-aria', function() {
            M.sr_aria(e.node.menu, 'hidden', !0);
          }),
          this.bind('initMenu:after:sr-aria', function() {
            M.sr_aria(e.node.menu, 'hidden', !0);
          }),
          this.bind('initBlocker:after:sr-text', function() {
            y(M.node.blck, 'a').forEach(function(t) {
              t.innerHTML = M.sr_text(
                e.i18n(e.conf.screenReader.text.closeMenu)
              );
            });
          }),
          this.clck.push(function(t, n) {
            var i = p(e.node.menu.id);
            if (i && t.matches('[href="#' + i + '"]')) {
              if (n.inMenu) {
                return e.open(), !0;
              }
              var s = t.closest('.mm-menu');
              if (s) {
                var a = s.mmApi;
                if (a && a.close) {
                  return (
                    a.close(),
                    m(
                      s,
                      function() {
                        e.open();
                      },
                      e.conf.transitionDuration
                    ),
                    !0
                  );
                }
              }
              return e.open(), !0;
            }
            if ((i = M.node.page.id) && t.matches('[href="#' + i + '"]')) {
              return e.close(), !0;
            }
          });
        }
      },
      screenReader: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { aria: e, text: e }),
            typeof e !== 'object' && (e = {}),
            e
          );
        })(this.opts.screenReader);
        this.opts.screenReader = o(t, M.options.screenReader);
        var n = this.conf.screenReader;
        t.aria &&
          (this.bind('initAddons:after', function() {
            e.bind('initMenu:after', function() {
              this.trigger('initMenu:after:sr-aria', [].slice.call(arguments));
            }),
            e.bind('initNavbar:after', function() {
              this.trigger(
                'initNavbar:after:sr-aria',
                [].slice.call(arguments)
              );
            }),
            e.bind('openPanel:start', function() {
              this.trigger(
                'openPanel:start:sr-aria',
                [].slice.call(arguments)
              );
            }),
            e.bind('close:start', function() {
              this.trigger('close:start:sr-aria', [].slice.call(arguments));
            }),
            e.bind('close:finish', function() {
              this.trigger('close:finish:sr-aria', [].slice.call(arguments));
            }),
            e.bind('open:start', function() {
              this.trigger('open:start:sr-aria', [].slice.call(arguments));
            }),
            e.bind('initOpened:after', function() {
              this.trigger(
                'initOpened:after:sr-aria',
                [].slice.call(arguments)
              );
            });
          }),
          this.bind('updateListview', function() {
            e.node.pnls.querySelectorAll('.mm-listitem').forEach(function(e) {
              M.sr_aria(e, 'hidden', e.matches('.mm-hidden'));
            });
          }),
          this.bind('openPanel:start', function(t) {
            var n = _(e.node.pnls, '.mm-panel')
              .filter(function(e) {
                return e !== t;
              })
              .filter(function(e) {
                return !e.parentElement.matches('.mm-panel');
              });
            var i = [t];
            _(t, '.mm-listitem_vertical .mm-listitem_opened').forEach(function(
              e
            ) {
              i.push.apply(i, y(e, '.mm-panel'));
            }),
            n.forEach(function(e) {
              M.sr_aria(e, 'hidden', !0);
            }),
            i.forEach(function(e) {
              M.sr_aria(e, 'hidden', !1);
            });
          }),
          this.bind('closePanel', function(e) {
            M.sr_aria(e, 'hidden', !0);
          }),
          this.bind('initPanel:after', function(e) {
            _(e, '.mm-btn').forEach(function(e) {
              M.sr_aria(e, 'haspopup', !0);
              var t = e.getAttribute('href');
              t && M.sr_aria(e, 'owns', t.replace('#', ''));
            });
          }),
          this.bind('initNavbar:after', function(e) {
            var t = y(e, '.mm-navbar')[0];
            var n = t.matches('.mm-hidden');
            M.sr_aria(t, 'hidden', n);
          }),
          t.text &&
            this.opts.navbar.titleLink == 'parent' &&
            this.bind('initNavbar:after', function(e) {
              var t = y(e, '.mm-navbar')[0];
              var n = Boolean(t.querySelector('.mm-btn_prev'));
              M.sr_aria(_(t, '.mm-navbar__title')[0], 'hidden', n);
            })),
        t.text &&
            (this.bind('initAddons:after', function() {
              e.bind('setPage:after', function() {
                this.trigger('setPage:after:sr-text', [].slice.call(arguments));
              }),
              e.bind('initBlocker:after', function() {
                this.trigger(
                  'initBlocker:after:sr-text',
                  [].slice.call(arguments)
                );
              });
            }),
            this.bind('initNavbar:after', function(t) {
              var i = y(t, '.mm-navbar')[0];
              if (i) {
                var s = y(i, '.mm-btn_prev')[0];
                s && (s.innerHTML = M.sr_text(e.i18n(n.text.closeSubmenu)));
              }
            }),
            this.bind('initListview:after', function(t) {
              var i = t.closest('.mm-panel').mmParent;
              if (i) {
                var s = y(i, '.mm-btn_next')[0];
                if (s) {
                  var a = e.i18n(
                    n.text[
                      s.parentElement.matches('.mm-listitem_vertical')
                        ? 'toggleSubmenu'
                        : 'openSubmenu'
                    ]
                  );
                  s.innerHTML += M.sr_text(a);
                }
              }
            }));
      },
      scrollBugFix: function() {
        var e = this;
        if (W && this.opts.offCanvas && this.opts.offCanvas.blockUI) {
          var t = (function(e) {
            return (
              typeof e === 'boolean' && (e = { fix: e }),
              typeof e !== 'object' && (e = {}),
              e
            );
          })(this.opts.scrollBugFix);
          if (
            ((this.opts.scrollBugFix = o(t, M.options.scrollBugFix)), t.fix)
          ) {
            var n;
            var i;
            var s =
              ((n = this.node.menu),
              (i = ''),
              n.addEventListener('touchmove', function(e) {
                (i = ''),
                e.movementY > 0
                  ? (i = 'down')
                  : e.movementY < 0 && (i = 'up');
              }),
              {
                get: function() {
                  return i;
                }
              });
            this.node.menu.addEventListener('scroll', a, { passive: !1 }),
            this.node.menu.addEventListener(
              'touchmove',
              function(e) {
                var t = e.target.closest(
                  '.mm-panel, .mm-iconbar__top, .mm-iconbar__bottom'
                );
                t &&
                    t.closest('.mm-listitem_vertical') &&
                    (t = L(t, '.mm-panel').pop()),
                t
                  ? (t.scrollHeight === t.offsetHeight ||
                          (t.scrollTop == 0 && s.get() == 'down') ||
                          (t.scrollHeight == t.scrollTop + t.offsetHeight &&
                            s.get() == 'up')) &&
                        a(e)
                  : a(e);
              },
              { passive: !1 }
            ),
            this.bind('open:start', function() {
              var t = y(e.node.pnls, '.mm-panel_opened')[0];
              t && (t.scrollTop = 0);
            }),
            window.addEventListener('orientationchange', function(t) {
              var n = y(e.node.pnls, '.mm-panel_opened')[0];
              n &&
                  ((n.scrollTop = 0),
                  (n.style['-webkit-overflow-scrolling'] = 'auto'),
                  (n.style['-webkit-overflow-scrolling'] = 'touch'));
            });
          }
        }
        function a(e) {
          e.preventDefault(), e.stopPropagation();
        }
      },
      autoHeight: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && e && (e = { height: 'auto' }),
            typeof e === 'string' && (e = { height: e }),
            typeof e !== 'object' && (e = {}),
            e
          );
        })(this.opts.autoHeight);
        if (
          ((this.opts.autoHeight = o(t, M.options.autoHeight)),
          t.height == 'auto' || t.height == 'highest')
        ) {
          var n;
          var i =
            ((n = function(e) {
              return (
                e.parentElement.matches('.mm-listitem_vertical') &&
                  (e = L(e, '.mm-panel').filter(function(e) {
                    return !e.parentElement.matches('.mm-listitem_vertical');
                  })[0]),
                e
              );
            }),
            function() {
              if (!e.opts.offCanvas || e.vars.opened) {
                var i;
                var s;
                var a = 0;
                var o = e.node.menu.offsetHeight - e.node.pnls.offsetHeight;
                e.node.menu.classList.add('mm-menu_autoheight-measuring'),
                t.height == 'auto'
                  ? ((s = y(e.node.pnls, '.mm-panel_opened')[0]) &&
                        (s = n(s)),
                  s || (s = y(e.node.pnls, '.mm-panel')[0]),
                  (a = s.scrollHeight))
                  : t.height == 'highest' &&
                      ((i = 0),
                      y(e.node.pnls, '.mm-panel').forEach(function(e) {
                        (e = n(e)), (i = Math.max(i, e.scrollHeight));
                      }),
                      (a = i)),
                (e.node.menu.style.height = a + o + 'px'),
                e.node.menu.classList.remove('mm-menu_autoheight-measuring');
              }
            });
          this.bind('initMenu:after', function() {
            e.node.menu.classList.add('mm-menu_autoheight');
          }),
          this.opts.offCanvas && this.bind('open:start', i),
          t.height == 'highest' && this.bind('initPanels:after', i),
          t.height == 'auto' &&
              (this.bind('updateListview', i), this.bind('openPanel:start', i));
        }
      },
      backButton: function() {
        var e = this;
        if (this.opts.offCanvas) {
          var t = (function(e) {
            return (
              typeof e === 'boolean' && (e = { close: e }),
              typeof e !== 'object' && (e = {}),
              e
            );
          })(this.opts.backButton);
          this.opts.backButton = o(t, M.options.backButton);
          var n = '#' + this.node.menu.id;
          if (t.close) {
            var i = [];
            var s = function() {
              (i = [n]),
              y(
                e.node.pnls,
                '.mm-panel_opened, .mm-panel_opened-parent'
              ).forEach(function(e) {
                i.push('#' + e.id);
              });
            };
            this.bind('open:finish', function() {
              history.pushState(null, document.title, n);
            }),
            this.bind('open:finish', s),
            this.bind('openPanel:finish', s),
            this.bind('close:finish', function() {
              (i = []),
              history.back(),
              history.pushState(
                null,
                document.title,
                location.pathname + location.search
              );
            }),
            window.addEventListener('popstate', function(t) {
              if (e.vars.opened && i.length) {
                var s = (i = i.slice(0, -1))[i.length - 1];
                s == n
                  ? e.close()
                  : (e.openPanel(e.node.menu.querySelector(s)),
                  history.pushState(null, document.title, n));
              }
            });
          }
          t.open &&
            window.addEventListener('popstate', function(t) {
              e.vars.opened || location.hash != n || e.open();
            });
        }
      },
      columns: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { add: e }),
            typeof e === 'number' && (e = { add: !0, visible: e }),
            typeof e !== 'object' && (e = {}),
            typeof e.visible === 'number' &&
              (e.visible = { min: e.visible, max: e.visible }),
            e
          );
        })(this.opts.columns);
        if (((this.opts.columns = o(t, M.options.columns)), t.add)) {
          (t.visible.min = Math.max(1, Math.min(6, t.visible.min))),
          (t.visible.max = Math.max(
            t.visible.min,
            Math.min(6, t.visible.max)
          ));
          for (
            var n = [],
              i = [],
              s = [
                'mm-panel_opened',
                'mm-panel_opened-parent',
                'mm-panel_highest'
              ],
              a = 0;
            a <= t.visible.max;
            a++
          ) {
            n.push('mm-menu_columns-' + a), i.push('mm-panel_columns-' + a);
          }
          s.push.apply(s, i),
          this.bind('openPanel:before', function(t) {
            var n;
            if (
              (t && (n = t.mmParent),
              n &&
                  !n.classList.contains('mm-listitem_vertical') &&
                  (n = n.closest('.mm-panel')))
            ) {
              var i = n.className;
              if (i.length && (i = i.split('mm-panel_columns-')[1])) {
                for (var a = parseInt(i.split(' ')[0], 10) + 1; a > 0; ) {
                  if (!(t = y(e.node.pnls, '.mm-panel_columns-' + a)[0])) {
                    a = -1;
                    break;
                  }
                  a++,
                  t.classList.add('mm-hidden'),
                  s.forEach(function(e) {
                    t.classList.remove(e);
                  });
                }
              }
            }
          }),
          this.bind('openPanel:start', function(s) {
            if (s) {
              var a = s.mmParent;
              if (a && a.classList.contains('mm-listitem_vertical')) {
                return;
              }
            }
            var o = y(e.node.pnls, '.mm-panel_opened-parent').length;
            s.matches('.mm-panel_opened-parent') || o++,
            (o = Math.min(t.visible.max, Math.max(t.visible.min, o))),
            n.forEach(function(t) {
              e.node.menu.classList.remove(t);
            }),
            e.node.menu.classList.add('mm-menu_columns-' + o);
            var r = [];
            y(e.node.pnls, '.mm-panel').forEach(function(e) {
              i.forEach(function(t) {
                e.classList.remove(t);
              }),
              e.matches('.mm-panel_opened-parent') && r.push(e);
            }),
            r.push(s),
            r.slice(-t.visible.max).forEach(function(e, t) {
              e.classList.add('mm-panel_columns-' + t);
            });
          });
        }
      },
      counters: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' &&
              (e = { add: e, addTo: 'panels', count: e }),
            typeof e !== 'object' && (e = {}),
            e.addTo == 'panels' && (e.addTo = '.mm-listview'),
            e
          );
        })(this.opts.counters);
        if (
          ((this.opts.counters = o(t, M.options.counters)),
          this.bind('initListview:after', function(t) {
            var n = e.conf.classNames.counters.counter;
            _(t, '.' + n).forEach(function(e) {
              x(e, n, 'mm-counter');
            });
          }),
          t.add &&
            this.bind('initListview:after', function(e) {
              if (e.matches(t.addTo)) {
                var n = e.closest('.mm-panel').mmParent;
                if (n && !_(n, '.mm-counter').length) {
                  var i = y(n, '.mm-btn')[0];
                  i && i.prepend(g('span.mm-counter'));
                }
              }
            }),
          t.count)
        ) {
          var n = function(t) {
            (t
              ? [t.closest('.mm-panel')]
              : y(e.node.pnls, '.mm-panel')
            ).forEach(function(e) {
              var t = e.mmParent;
              if (t) {
                var n = _(t, '.mm-counter')[0];
                if (n) {
                  var i = [];
                  y(e, '.mm-listview').forEach(function(e) {
                    i.push.apply(i, y(e));
                  }),
                  (n.innerHTML = w(i).length.toString());
                }
              }
            });
          };
          this.bind('initListview:after', n), this.bind('updateListview', n);
        }
      },
      dividers: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { add: e }),
            typeof e !== 'object' && (e = {}),
            e.addTo == 'panels' && (e.addTo = '.mm-listview'),
            e
          );
        })(this.opts.dividers);
        (this.opts.dividers = o(t, M.options.dividers)),
        this.bind('initListview:after', function(t) {
          y(t).forEach(function(t) {
            x(t, e.conf.classNames.divider, 'mm-divider'),
            t.matches('.mm-divider') && t.classList.remove('mm-listitem');
          });
        }),
        t.add &&
            this.bind('initListview:after', function(e) {
              if (e.matches(t.addTo)) {
                _(e, '.mm-divider').forEach(function(e) {
                  e.remove();
                });
                var n = '';
                w(y(e)).forEach(function(t) {
                  var i = y(t, '.mm-listitem__text')[0]
                    .textContent.trim()
                    .toLowerCase()[0];
                  if (i.length && i != n) {
                    n = i;
                    var s = g('li.mm-divider');
                    (s.textContent = i), e.insertBefore(s, t);
                  }
                });
              }
            });
      },
      drag: function() {
        var e = this;
        if (this.opts.offCanvas) {
          var t = (function(e) {
            return (
              typeof e === 'boolean' && (e = { open: e }),
              typeof e !== 'object' && (e = {}),
              e
            );
          })(this.opts.drag);
          (this.opts.drag = o(t, M.options.drag)),
          t.open &&
              this.bind('setPage:after', function(n) {
                ce.call(e, t.node || n);
              });
        }
      },
      dropdown: function() {
        var e = this;
        if (this.opts.offCanvas) {
          var t = (function(e) {
            return (
              typeof e === 'boolean' && e && (e = { drop: e }),
              typeof e !== 'object' && (e = {}),
              typeof e.position === 'string' &&
                (e.position = { of: e.position }),
              e
            );
          })(this.opts.dropdown);
          this.opts.dropdown = o(t, M.options.dropdown);
          var n = this.conf.dropdown;
          if (t.drop) {
            var i;
            this.bind('initMenu:after', function() {
              if (
                (e.node.menu.classList.add('mm-menu_dropdown'),
                typeof t.position.of !== 'string')
              ) {
                var n = p(e.node.menu.id);
                n && (t.position.of = '[href="#' + n + '"]');
              }
              if (typeof t.position.of === 'string') {
                i = _(document.body, t.position.of)[0];
                var s = t.event.split(' ');
                s.length == 1 && (s[1] = s[0]),
                s[0] == 'hover' &&
                    i.addEventListener(
                      'mouseenter',
                      function() {
                        e.open();
                      },
                      { passive: !0 }
                    ),
                s[1] == 'hover' &&
                    e.node.menu.addEventListener(
                      'mouseleave',
                      function() {
                        e.close();
                      },
                      { passive: !0 }
                    );
              }
            }),
            this.bind('open:start', function() {
              (e.node.menu.mmStyle = e.node.menu.getAttribute('style')),
              e.node.wrpr.classList.add('mm-wrapper_dropdown');
            }),
            this.bind('close:finish', function() {
              e.node.menu.setAttribute('style', e.node.menu.mmStyle),
              e.node.wrpr.classList.remove('mm-wrapper_dropdown');
            });
            var s = function(e, s) {
              var a;
              var o;
              var r;
              var c = s[0];
              var m = s[1];
              var l = e == 'x' ? 'offsetWidth' : 'offsetHeight';
              var d = e == 'x' ? 'left' : 'top';
              var p = e == 'x' ? 'right' : 'bottom';
              var u = e == 'x' ? 'width' : 'height';
              var f = e == 'x' ? 'innerWidth' : 'innerHeight';
              var h = e == 'x' ? 'maxWidth' : 'maxHeight';
              var v = null;
              var b =
                ((a = d),
                i.getBoundingClientRect()[a] +
                  document.body[a === 'left' ? 'scrollLeft' : 'scrollTop']);
              var g = b + i[l];
              var _ = window[f];
              var y = n.offset.button[e] + n.offset.viewport[e];
              if (t.position[e]) {
                switch (t.position[e]) {
                  case 'left':
                  case 'bottom':
                    v = 'after';
                    break;
                  case 'right':
                  case 'top':
                    v = 'before';
                }
              }
              return (
                v === null &&
                  (v = b + (g - b) / 2 < _ / 2 ? 'after' : 'before'),
                v == 'after'
                  ? ((r = _ - ((o = e == 'x' ? b : g) + y)),
                  (c[d] = o + n.offset.button[e] + 'px'),
                  (c[p] = 'auto'),
                  t.tip &&
                      m.push('mm-menu_tip-' + (e == 'x' ? 'left' : 'top')))
                  : ((r = (o = e == 'x' ? g : b) - y),
                  (c[p] =
                      'calc( 100% - ' + (o - n.offset.button[e]) + 'px )'),
                  (c[d] = 'auto'),
                  t.tip &&
                      m.push('mm-menu_tip-' + (e == 'x' ? 'right' : 'bottom'))),
                t.fitViewport && (c[h] = Math.min(n[u].max, r) + 'px'),
                [c, m]
              );
            };
            this.bind('open:start', a),
            window.addEventListener(
              'resize',
              function(t) {
                a.call(e);
              },
              { passive: !0 }
            ),
            this.opts.offCanvas.blockUI ||
                window.addEventListener(
                  'scroll',
                  function(t) {
                    a.call(e);
                  },
                  { passive: !0 }
                );
          }
        }
        function a() {
          var e = this;
          if (this.vars.opened) {
            this.node.menu.setAttribute('style', this.node.menu.mmStyle);
            var n = [{}, []];
            for (var i in ((n = s.call(this, 'y', n)),
            (n = s.call(this, 'x', n))[0])) {
              this.node.menu.style[i] = n[0][i];
            }
            if (t.tip) {
              [
                'mm-menu_tip-left',
                'mm-menu_tip-right',
                'mm-menu_tip-top',
                'mm-menu_tip-bottom'
              ].forEach(function(t) {
                e.node.menu.classList.remove(t);
              }),
              n[1].forEach(function(t) {
                e.node.menu.classList.add(t);
              });
            }
          }
        }
      },
      fixedElements: function() {
        var e = this;
        if (this.opts.offCanvas) {
          var t;
          var n;
          var i = this.conf.fixedElements;
          this.bind('setPage:after', function(s) {
            (t = e.conf.classNames.fixedElements.fixed),
            (n = _(document, i.insertSelector)[0]),
            _(s, '.' + t).forEach(function(e) {
              x(e, t, 'mm-slideout'), n[i.insertMethod](e);
            });
          });
        }
      },
      iconbar: function() {
        var e;
        var t = this;
        var n = (function(e) {
          return (
            r(e) == 'array' && (e = { use: !0, top: e }),
            r(e) != 'object' && (e = {}),
            void 0 === e.use && (e.use = !0),
            typeof e.use === 'boolean' && e.use && (e.use = !0),
            e
          );
        })(this.opts.iconbar);
        if (
          ((this.opts.iconbar = o(n, M.options.iconbar)), n.use) &&
          (['top', 'bottom'].forEach(function(t, i) {
            var s = n[t];
            r(s) != 'array' && (s = [s]);
            for (
              var a = g('div.mm-iconbar__' + t), o = 0, c = s.length;
              o < c;
              o++
            ) {
              typeof s[o] === 'string' ? (a.innerHTML += s[o]) : a.append(s[o]);
            }
            a.children.length && (e || (e = g('div.mm-iconbar')), e.append(a));
          }),
          e)
        ) {
          this.bind('initMenu:after', function() {
            t.node.menu.prepend(e);
          });
          var i = 'mm-menu_iconbar-' + n.position;
          var s = function() {
            t.node.menu.classList.add(i), M.sr_aria(e, 'hidden', !1);
          };
          if (
            (typeof n.use === 'boolean'
              ? this.bind('initMenu:after', s)
              : k(n.use, s, function() {
                t.node.menu.classList.remove(i), M.sr_aria(e, 'hidden', !0);
              }),
            n.type == 'tabs')
          ) {
            e.classList.add('mm-iconbar_tabs'),
            e.addEventListener('click', function(e) {
              var n = e.target;
              if (n.matches('a')) {
                if (n.matches('.mm-iconbar__tab_selected')) {
                  e.stopImmediatePropagation();
                }
                else {
                  try {
                    var i = t.node.menu.querySelector(
                      n.getAttribute('href')
                    )[0];
                    i &&
                        i.matches('.mm-panel') &&
                        (e.preventDefault(),
                        e.stopImmediatePropagation(),
                        t.openPanel(i, !1));
                  }
                  catch (e) {}
                }
              }
            });
            var a = function(t) {
              _(e, 'a').forEach(function(e) {
                e.classList.remove('mm-iconbar__tab_selected');
              });
              var n = _(e, '[href="#' + t.id + '"]')[0];
              if (n) {
                n.classList.add('mm-iconbar__tab_selected');
              }
              else {
                var i = t.mmParent;
                i && a(i.closest('.mm-panel'));
              }
            };
            this.bind('openPanel:start', a);
          }
        }
      },
      iconPanels: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { add: e }),
            (typeof e !== 'number' && typeof e !== 'string') ||
              (e = { add: !0, visible: e }),
            typeof e !== 'object' && (e = {}),
            e
          );
        })(this.opts.iconPanels);
        this.opts.iconPanels = o(t, M.options.iconPanels);
        var n = !1;
        if (
          (t.visible == 'first' && ((n = !0), (t.visible = 1)),
          (t.visible = Math.min(3, Math.max(1, t.visible))),
          t.visible++,
          t.add)
        ) {
          this.bind('initMenu:after', function() {
            var n = ['mm-menu_iconpanel'];
            t.hideNavbar && n.push('mm-menu_hidenavbar'),
            t.hideDivider && n.push('mm-menu_hidedivider'),
            n.forEach(function(t) {
              e.node.menu.classList.add(t);
            });
          });
          var i = [];
          if (!n) {
            for (var s = 0; s <= t.visible; s++) {
              i.push('mm-panel_iconpanel-' + s);
            }
          }
          this.bind('openPanel:start', function(s) {
            var a = y(e.node.pnls, '.mm-panel');
            if (
              !(s = s || a[0]).parentElement.matches('.mm-listitem_vertical')
            ) {
              if (n) {
                a.forEach(function(e, t) {
                  e.classList[t == 0 ? 'add' : 'remove'](
                    'mm-panel_iconpanel-first'
                  );
                });
              }
              else {
                a.forEach(function(e) {
                  i.forEach(function(t) {
                    e.classList.remove(t);
                  });
                }),
                (a = a.filter(function(e) {
                  return e.matches('.mm-panel_opened-parent');
                }));
                var o = !1;
                a.forEach(function(e) {
                  s === e && (o = !0);
                }),
                o || a.push(s),
                a.forEach(function(e) {
                  e.classList.remove('mm-hidden');
                }),
                (a = a.slice(-t.visible)).forEach(function(e, t) {
                  e.classList.add('mm-panel_iconpanel-' + t);
                });
              }
            }
          }),
          this.bind('initPanel:after', function(e) {
            if (
              t.blockPanel &&
                !e.parentElement.matches('.mm-listitem_vertical') &&
                !y(e, '.mm-panel__blocker')[0]
            ) {
              var n = g('a.mm-panel__blocker');
              n.setAttribute('href', '#' + e.closest('.mm-panel').id),
              e.prepend(n);
            }
          });
        }
      },
      keyboardNavigation: function() {
        var e = this;
        if (!W) {
          var t = (function(e) {
            return (
              (typeof e !== 'boolean' && typeof e !== 'string') ||
                (e = { enable: e }),
              typeof e !== 'object' && (e = {}),
              e
            );
          })(this.opts.keyboardNavigation);
          if (
            ((this.opts.keyboardNavigation = o(
              t,
              M.options.keyboardNavigation
            )),
            t.enable)
          ) {
            var n = g('button.mm-tabstart.mm-sronly');
            var i = g('button.mm-tabend.mm-sronly');
            var s = g('button.mm-tabend.mm-sronly');
            this.bind('initMenu:after', function() {
              t.enhance && e.node.menu.classList.add('mm-menu_keyboardfocus'),
              ve.call(e, t.enhance);
            }),
            this.bind('initOpened:before', function() {
              e.node.menu.prepend(n),
              e.node.menu.append(i),
              y(e.node.menu, '.mm-navbars-top, .mm-navbars-bottom').forEach(
                function(e) {
                  e.querySelectorAll('.mm-navbar__title').forEach(function(
                    e
                  ) {
                    e.setAttribute('tabindex', '-1');
                  });
                }
              );
            }),
            this.bind('initBlocker:after', function() {
              M.node.blck.append(s),
              y(M.node.blck, 'a')[0].classList.add('mm-tabstart');
            });
            var a = 'input, select, textarea, button, label, a[href]';
            var r = function(n) {
              n = n || y(e.node.pnls, '.mm-panel_opened')[0];
              var i = null;
              var s = document.activeElement.closest('.mm-navbar');
              if (!s || s.closest('.mm-menu') != e.node.menu) {
                if (
                  t.enable == 'default' &&
                  ((i = _(n, '.mm-listview a[href]:not(.mm-hidden)')[0]) ||
                    (i = _(n, a + ':not(.mm-hidden)')[0]),
                  !i)
                ) {
                  var o = [];
                  y(e.node.menu, '.mm-navbars_top, .mm-navbars_bottom').forEach(
                    function(e) {
                      o.push.apply(o, _(e, a + ':not(.mm-hidden)'));
                    }
                  ),
                  (i = o[0]);
                }
                i || (i = y(e.node.menu, '.mm-tabstart')[0]), i && i.focus();
              }
            };
            this.bind('open:finish', r),
            this.bind('openPanel:finish', r),
            this.bind('initOpened:after:sr-aria', function() {
              [e.node.menu, M.node.blck].forEach(function(e) {
                y(e, '.mm-tabstart, .mm-tabend').forEach(function(e) {
                  M.sr_aria(e, 'hidden', !0), M.sr_role(e, 'presentation');
                });
              });
            });
          }
        }
      },
      lazySubmenus: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { load: e }),
            typeof e !== 'object' && (e = {}),
            e
          );
        })(this.opts.lazySubmenus);
        (this.opts.lazySubmenus = o(t, M.options.lazySubmenus)),
        t.load &&
            (this.bind('initPanels:before', function() {
              var t = [];
              _(e.node.pnls, 'li').forEach(function(n) {
                t.push.apply(t, y(n, e.conf.panelNodetype.join(', ')));
              }),
              t
                .filter(function(e) {
                  return !e.matches('.mm-listview_inset');
                })
                .filter(function(e) {
                  return !e.matches('.mm-nolistview');
                })
                .filter(function(e) {
                  return !e.matches('.mm-nopanel');
                })
                .forEach(function(e) {
                  [
                    'mm-panel_lazysubmenu',
                    'mm-nolistview',
                    'mm-nopanel'
                  ].forEach(function(t) {
                    e.classList.add(t);
                  });
                });
            }),
            this.bind('initPanels:before', function() {
              var t = [];
              _(e.node.pnls, '.' + e.conf.classNames.selected).forEach(function(
                e
              ) {
                t.push.apply(t, L(e, '.mm-panel_lazysubmenu'));
              }),
              t.length &&
                  t.forEach(function(e) {
                    console.log(e);
                    [
                      'mm-panel_lazysubmenu',
                      'mm-nolistview',
                      'mm-nopanel'
                    ].forEach(function(t) {
                      e.classList.remove(t);
                    });
                  });
            }),
            this.bind('openPanel:before', function(t) {
              var n = _(t, '.mm-panel_lazysubmenu').filter(function(e) {
                return !e.matches(
                  '.mm-panel_lazysubmenu .mm-panel_lazysubmenu'
                );
              });
              t.matches('.mm-panel_lazysubmenu') && n.unshift(t),
              n.forEach(function(t) {
                [
                  'mm-panel_lazysubmenu',
                  'mm-nolistview',
                  'mm-nopanel'
                ].forEach(function(e) {
                  t.classList.remove(e);
                }),
                e.initPanel(t);
              });
            }));
      },
      navbars: ye,
      pageScroll: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { scroll: e }),
            typeof e !== 'object' && (e = {}),
            e
          );
        })(this.opts.pageScroll);
        this.opts.pageScroll = o(t, M.options.pageScroll);
        var n;
        var i = this.conf.pageScroll;
        function s() {
          n &&
            window.scrollTo({
              top:
                n.getBoundingClientRect().top +
                document.scrollingElement.scrollTop -
                i.scrollOffset,
              behavior: 'smooth'
            }),
          (n = null);
        }
        function a(e) {
          try {
            return e != '#' && e.slice(0, 1) == '#'
              ? M.node.page.querySelector(e)
              : null;
          }
          catch (e) {
            return null;
          }
        }
        if (
          (t.scroll &&
            this.bind('close:finish', function() {
              s();
            }),
          this.opts.offCanvas &&
            t.scroll &&
            this.clck.push(function(t, i) {
              if (((n = null), i.inMenu)) {
                var o = t.getAttribute('href');
                if ((n = a(o))) {
                  return e.node.menu.matches('.mm-menu_sidebar-expanded') &&
                    e.node.wrpr.matches('.mm-wrapper_sidebar-expanded')
                    ? void s()
                    : { close: !0 };
                }
              }
            }),
          t.update)
        ) {
          var r = [];
          this.bind('initListview:after', function(e) {
            E(y(e, '.mm-listitem')).forEach(function(e) {
              var t = a(e.getAttribute('href'));
              t && r.unshift(t);
            });
          });
          var c = -1;
          window.addEventListener('scroll', function(t) {
            for (var n = window.scrollY, s = 0; s < r.length; s++) {
              if (r[s].offsetTop < n + i.updateOffset) {
                if (c !== s) {
                  c = s;
                  var a = E(
                    _(y(e.node.pnls, '.mm-panel_opened')[0], '.mm-listitem')
                  );
                  (a = a.filter(function(e) {
                    return e.matches('[href="#' + r[s].id + '"]');
                  })).length && e.setSelected(a[0].parentElement);
                }
                break;
              }
            }
          });
        }
      },
      searchfield: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { add: e }),
            typeof e !== 'object' && (e = {}),
            typeof e.panel === 'boolean' && (e.panel = { add: e.panel }),
            typeof e.panel !== 'object' && (e.panel = {}),
            e.addTo == 'panel' && (e.panel.add = !0),
            e.panel.add &&
              ((e.showSubPanels = !1), e.panel.splash && (e.cancel = !0)),
            e
          );
        })(this.opts.searchfield);
        this.opts.searchfield = o(t, M.options.searchfield);
        this.conf.searchfield;
        t.add &&
          (this.bind('close:start', function() {
            _(e.node.menu, '.mm-searchfield').forEach(function(e) {
              e.blur();
            });
          }),
          this.bind('initPanel:after', function(n) {
            var i = null;
            t.panel.add && (i = Ae.call(e));
            var s = null;
            switch (t.addTo) {
              case 'panels':
                s = [n];
                break;
              case 'panel':
                s = [i];
                break;
              default:
                typeof t.addTo === 'string'
                  ? (s = _(e.node.menu, t.addTo))
                  : r(t.addTo) == 'array' && (s = t.addTo);
            }
            s.forEach(function(n) {
              (n = Te.call(e, n)), t.search && n && Ce.call(e, n);
            }),
            t.noResults && Ne.call(e, t.panel.add ? i : n);
          }),
          this.clck.push(function(t, n) {
            if (n.inMenu && t.matches('.mm-searchfield__btn')) {
              if (t.matches('.mm-btn_close')) {
                var i = _((s = t.closest('.mm-searchfield')), 'input')[0];
                return (i.value = ''), e.search(i), !0;
              }
              var s;
              if (t.matches('.mm-btn_next')) {
                return (s = t.closest('form')) && s.submit(), !0;
              }
            }
          }));
      },
      sectionIndexer: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { add: e }),
            typeof e !== 'object' && (e = {}),
            e
          );
        })(this.opts.sectionIndexer);
        (this.opts.sectionIndexer = o(t, M.options.sectionIndexer)),
        t.add &&
            this.bind('initPanels:after', function() {
              if (!e.node.indx) {
                var t = '';
                'abcdefghijklmnopqrstuvwxyz'.split('').forEach(function(e) {
                  t += '<a href="#">' + e + '</a>';
                });
                var n = g('div.mm-sectionindexer');
                (n.innerHTML = t),
                e.node.pnls.prepend(n),
                (e.node.indx = n),
                e.node.indx.addEventListener('click', function(e) {
                  e.target.matches('a') && e.preventDefault();
                });
                var i = function(t) {
                  if (t.target.matches('a')) {
                    var n = t.target.textContent;
                    var i = y(e.node.pnls, '.mm-panel_opened')[0];
                    var s = -1;
                    var a = i.scrollTop;
                    (i.scrollTop = 0),
                    _(i, '.mm-divider')
                      .filter(function(e) {
                        return !e.matches('.mm-hidden');
                      })
                      .forEach(function(e) {
                        s < 0 &&
                            n ==
                              e.textContent
                                .trim()
                                .slice(0, 1)
                                .toLowerCase() &&
                            (s = e.offsetTop);
                      }),
                    (i.scrollTop = s > -1 ? s : a);
                  }
                };
                W
                  ? (e.node.indx.addEventListener('touchstart', i),
                  e.node.indx.addEventListener('touchmove', i))
                  : e.node.indx.addEventListener('mouseover', i);
              }
              e.bind('openPanel:start', function(t) {
                var n = _(t, '.mm-divider').filter(function(e) {
                  return !e.matches('.mm-hidden');
                }).length;
                e.node.indx.classList[n ? 'add' : 'remove'](
                  'mm-sectionindexer_active'
                );
              });
            });
      },
      setSelected: function() {
        var e = this;
        var t = (function(e) {
          return (
            typeof e === 'boolean' && (e = { hover: e, parent: e }),
            typeof e !== 'object' && (e = {}),
            e
          );
        })(this.opts.setSelected);
        if (
          ((this.opts.setSelected = o(t, M.options.setSelected)),
          t.current == 'detect')
        ) {
          var n = function(t) {
            t = t.split('?')[0].split('#')[0];
            var i = e.node.menu.querySelector(
              'a[href="' + t + '"], a[href="' + t + '/"]'
            );
            if (i) {
              e.setSelected(i.parentElement);
            }
            else {
              var s = t.split('/').slice(0, -1);
              s.length && n(s.join('/'));
            }
          };
          this.bind('initMenu:after', function() {
            n.call(e, window.location.href);
          });
        }
        else {
          t.current ||
            this.bind('initListview:after', function(e) {
              y(e, '.mm-listitem_selected').forEach(function(e) {
                e.classList.remove('mm-listitem_selected');
              });
            });
        }
        t.hover &&
          this.bind('initMenu:after', function() {
            e.node.menu.classList.add('mm-menu_selected-hover');
          }),
        t.parent &&
            (this.bind('openPanel:finish', function(t) {
              _(e.node.pnls, '.mm-listitem_selected-parent').forEach(function(
                e
              ) {
                e.classList.remove('mm-listitem_selected-parent');
              });
              for (var n = t.mmParent; n; ) {
                n.matches('.mm-listitem_vertical') ||
                  n.classList.add('mm-listitem_selected-parent'),
                (n = (n = n.closest('.mm-panel')).mmParent);
              }
            }),
            this.bind('initMenu:after', function() {
              e.node.menu.classList.add('mm-menu_selected-parent');
            }));
      },
      sidebar: function() {
        var e = this;
        if (this.opts.offCanvas) {
          var t = (function(e) {
            return (
              (typeof e === 'string' ||
                (typeof e === 'boolean' && e) ||
                typeof e === 'number') &&
                (e = { expanded: e }),
              typeof e !== 'object' && (e = {}),
              typeof e.collapsed === 'boolean' &&
                e.collapsed &&
                (e.collapsed = { use: !0 }),
              (typeof e.collapsed !== 'string' &&
                typeof e.collapsed !== 'number') ||
                (e.collapsed = { use: e.collapsed }),
              typeof e.collapsed !== 'object' && (e.collapsed = {}),
              typeof e.expanded === 'boolean' &&
                e.expanded &&
                (e.expanded = { use: !0 }),
              (typeof e.expanded !== 'string' &&
                typeof e.expanded !== 'number') ||
                (e.expanded = { use: e.expanded }),
              typeof e.expanded !== 'object' && (e.expanded = {}),
              e
            );
          })(this.opts.sidebar);
          if (
            ((this.opts.sidebar = o(t, M.options.sidebar)), t.collapsed.use)
          ) {
            this.bind('initMenu:after', function() {
              if (
                (e.node.menu.classList.add('mm-menu_sidebar-collapsed'),
                t.collapsed.blockMenu &&
                  e.opts.offCanvas &&
                  !y(e.node.menu, '.mm-menu__blocker')[0])
              ) {
                var n = g('a.mm-menu__blocker');
                n.setAttribute('href', '#' + e.node.menu.id),
                e.node.menu.prepend(n);
              }
              t.collapsed.hideNavbar &&
                e.node.menu.classList.add('mm-menu_hidenavbar'),
              t.collapsed.hideDivider &&
                  e.node.menu.classList.add('mm-menu_hidedivider');
            });
            var n = function() {
              e.node.wrpr.classList.add('mm-wrapper_sidebar-collapsed');
            };
            var i = function() {
              e.node.wrpr.classList.remove('mm-wrapper_sidebar-collapsed');
            };
            typeof t.collapsed.use === 'boolean'
              ? this.bind('initMenu:after', n)
              : k(t.collapsed.use, n, i);
          }
          if (t.expanded.use) {
            this.bind('initMenu:after', function() {
              e.node.menu.classList.add('mm-menu_sidebar-expanded');
            });
            (n = function() {
              e.node.wrpr.classList.add('mm-wrapper_sidebar-expanded'),
              e.node.wrpr.matches('.mm-wrapper_sidebar-closed') || e.open();
            }),
            (i = function() {
              e.node.wrpr.classList.remove('mm-wrapper_sidebar-expanded'),
              e.close();
            });
            typeof t.expanded.use === 'boolean'
              ? this.bind('initMenu:after', n)
              : k(t.expanded.use, n, i),
            this.bind('close:start', function() {
              e.node.wrpr.matches('.mm-wrapper_sidebar-expanded') &&
                  (e.node.wrpr.classList.add('mm-wrapper_sidebar-closed'),
                  t.expanded.initial == 'remember' &&
                    window.localStorage.setItem(
                      'mmenuExpandedState',
                      'closed'
                    ));
            }),
            this.bind('open:start', function() {
              e.node.wrpr.matches('.mm-wrapper_sidebar-expanded') &&
                  (e.node.wrpr.classList.remove('mm-wrapper_sidebar-closed'),
                  t.expanded.initial == 'remember' &&
                    window.localStorage.setItem('mmenuExpandedState', 'open'));
            });
            var s = t.expanded.initial;
            if (t.expanded.initial == 'remember') {
              var a = window.localStorage.getItem('mmenuExpandedState');
              switch (a) {
                case 'open':
                case 'closed':
                  s = a;
              }
            }
            s == 'closed' &&
              this.bind('initMenu:after', function() {
                e.node.wrpr.classList.add('mm-wrapper_sidebar-closed');
              }),
            this.clck.push(function(n, i) {
              if (
                i.inMenu &&
                  i.inListview &&
                  e.node.wrpr.matches('.mm-wrapper_sidebar-expanded')
              ) {
                return { close: t.expanded.initial == 'closed' };
              }
            });
          }
        }
      },
      toggles: function() {
        var e = this;
        this.bind('initPanel:after', function(t) {
          _(t, 'input').forEach(function(t) {
            x(t, e.conf.classNames.toggles.toggle, 'mm-toggle'),
            x(t, e.conf.classNames.toggles.check, 'mm-check');
          });
        });
      }
    }),
    (M.wrappers = {
      angular: function() {
        this.opts.onClick = {
          close: !0,
          preventDefault: !1,
          setSelected: !0
        };
      },
      bootstrap: function() {
        var e = this;
        if (this.node.menu.matches('.navbar-collapse')) {
          this.conf.offCanvas && (this.conf.offCanvas.clone = !1);
          var t = g('nav');
          var n = g('div');
          t.append(n),
          y(this.node.menu).forEach(function(t) {
            switch (!0) {
              case t.matches('.navbar-nav'):
                n.append(
                  (function(e) {
                    var t = g('ul');
                    return (
                      _(e, '.nav-item').forEach(function(e) {
                        var n = g('li');
                        if (
                          (e.matches('.active') &&
                                n.classList.add('Selected'),
                          !e.matches('.nav-link'))
                        ) {
                          var i = y(e, '.dropdown-menu')[0];
                          i && n.append(o(i)), (e = y(e, '.nav-link')[0]);
                        }
                        n.prepend(a(e)), t.append(n);
                      }),
                      t
                    );
                  })(t)
                );
                break;
              case t.matches('.dropdown-menu'):
                n.append(o(t));
                break;
              case t.matches('.form-inline'):
                (e.conf.searchfield.form = {
                  action: t.getAttribute('action') || null,
                  method: t.getAttribute('method') || null
                }),
                (e.conf.searchfield.input = {
                  name:
                          t.querySelector('input').getAttribute('name') || null
                }),
                (e.conf.searchfield.clear = !1),
                (e.conf.searchfield.submit = !0);
                break;
              default:
                n.append(t.cloneNode(!0));
            }
          }),
          this.bind('initMenu:before', function() {
            document.body.prepend(t), (e.node.menu = t);
          });
          var i = this.node.menu.parentElement;
          if (i) {
            var s = i.querySelector('.navbar-toggler');
            s &&
                (s.removeAttribute('data-target'),
                s.removeAttribute('aria-controls'),
                (s.outerHTML = s.outerHTML),
                (s = i.querySelector('.navbar-toggler')).addEventListener(
                  'click',
                  function(t) {
                    t.preventDefault(),
                    t.stopImmediatePropagation(),
                    e[e.vars.opened ? 'close' : 'open']();
                  }
                ));
          }
        }
        function a(e) {
          for (
            var t = g(e.matches('a') ? 'a' : 'span'),
              n = ['href', 'title', 'target'],
              i = 0;
            i < n.length;
            i++
          ) {
            e.getAttribute(n[i]) &&
                t.setAttribute(n[i], e.getAttribute(n[i]));
          }
          return (
            (t.innerHTML = e.innerHTML),
            _(t, '.sr-only').forEach(function(e) {
              e.remove();
            }),
            t
          );
        }
        function o(e) {
          var t = g('ul');
          return (
            y(e).forEach(function(e) {
              var n = g('li');
              e.matches('.dropdown-divider')
                ? n.classList.add('Divider')
                : e.matches('.dropdown-item') && n.append(a(e)),
              t.append(n);
            }),
            t
          );
        }
      },
      olark: function() {
        this.conf.offCanvas.page.noSelector.push('#olark');
      },
      turbolinks: function() {
        var e;
        document.addEventListener('turbolinks:before-visit', function(t) {
          e = document
            .querySelector('.mm-wrapper')
            .className.split(' ')
            .filter(function(e) {
              return /mm-/.test(e);
            });
        }),
        document.addEventListener('turbolinks:load', function(t) {
          void 0 !== e &&
                (document.querySelector('.mm-wrapper').className = e);
        });
      },
      wordpress: function() {
        this.conf.classNames.selected = 'current-menu-item';
        var e = document.getElementById('wpadminbar');
        e && ((e.style.position = 'fixed'), e.classList.add('mm-slideout'));
      }
    });
    var Oe;
    t.default = M;
    window && (window.Mmenu = M),
    (Oe = window.jQuery || window.Zepto || null) &&
        (Oe.fn.mmenu = function(e, t) {
          var n = Oe();
          return (
            this.each(function(i, s) {
              if (!s.mmApi) {
                var a = new M(s, e, t);
                var o = Oe(a.node.menu);
                o.data('mmenu', a.API), (n = n.add(o));
              }
            }),
            n
          );
        });
  }
]);
;
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=None; Secure";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;

  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };

  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };

  var drupalOnce = once;

  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }

  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }

  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
/**
 * @file
 * External links js file.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, drupalSettings) {
    if (typeof drupalSettings.data === 'undefined' || !drupalSettings.data.hasOwnProperty('extlink')) {
      return;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the
    // icon, defaults to 'append'.
    var extIconPlacement = 'append';
    if (drupalSettings.data.extlink.extIconPlacement && drupalSettings.data.extlink.extIconPlacement != '0') {
          extIconPlacement = drupalSettings.data.extlink.extIconPlacement;
        }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3$6');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (drupalSettings.data.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Whitelisted domains.
    var whitelistedDomains = false;
    if (drupalSettings.data.extlink.whitelistedDomains) {
      whitelistedDomains = [];
      for (var i = 0; i < drupalSettings.data.extlink.whitelistedDomains.length; i++) {
        whitelistedDomains.push(new RegExp('^https?:\\/\\/' + drupalSettings.data.extlink.whitelistedDomains[i].replace(/(\r\n|\n|\r)/gm,'') + '.*$', 'i'));
      }
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (drupalSettings.data.extlink.extInclude) {
      extInclude = new RegExp(drupalSettings.data.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (drupalSettings.data.extlink.extExclude) {
      extExclude = new RegExp(drupalSettings.data.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (drupalSettings.data.extlink.extCssExclude) {
      extCssExclude = drupalSettings.data.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (drupalSettings.data.extlink.extCssExplicit) {
      extCssExplicit = drupalSettings.data.extlink.extCssExplicit;
    }

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not([data-extlink]), area:not([data-extlink])', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!internal_link.test(url) && !(extExclude && extExclude.test(url))) || (extInclude && extInclude.test(url)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          var match = false;
          if (whitelistedDomains) {
            for (var i = 0; i < whitelistedDomains.length; i++) {
              if (whitelistedDomains[i].test(url)) {
                match = true;
                break;
              }
            }
          }
          if (!match) {
            external_links.push(this);
          }
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (drupalSettings.data.extlink.extClass !== '0' && drupalSettings.data.extlink.extClass !== '') {
      Drupal.extlink.applyClassAndSpan(external_links, drupalSettings.data.extlink.extClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.mailtoClass !== '0' && drupalSettings.data.extlink.mailtoClass !== '') {
      Drupal.extlink.applyClassAndSpan(mailto_links, drupalSettings.data.extlink.mailtoClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).filter(function () {
        // Filter out links with target set if option specified.
        return !(drupalSettings.data.extlink.extTargetNoOverride && $(this).is('a[target]'));
      }).attr({target: '_blank'});

      // Add noopener rel attribute to combat phishing.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the value noopener.
        if (val === null || typeof val === 'undefined') {
          return 'noopener';
        }
        // Check to see if rel contains noopener. Add what doesn't exist.
        if (val.indexOf('noopener') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          // Noopener exists. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener to val.
        else {
          return val + ' noopener';
        }
      });
    }

    if (drupalSettings.data.extlink.extNofollow) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'nofollow'.
        if (val === null || typeof val === 'undefined') {
          return 'nofollow';
        }
        var target = 'nofollow';
        // Change the target, if not overriding follow.
        if (drupalSettings.data.extlink.extFollowNoOverride) {
          target = 'follow';
        }
        if (val.indexOf(target) === -1) {
          return val + ' nofollow';
        }
        return val;
      });
    }

    if (drupalSettings.data.extlink.extNoreferrer) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'noreferrer'.
        if (val === null || typeof val === 'undefined') {
          return 'noreferrer';
        }
        if (val.indexOf('noreferrer') === -1) {
          return val + ' noreferrer';
        }
        return val;
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (drupalSettings.data.extlink.extAlert) {
        return confirm(drupalSettings.data.extlink.extAlertText);
      }
    };

    $(external_links).off("click.extlink");
    $(external_links).on("click.extlink", function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (drupalSettings.data.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img, svg').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }

    if (class_name !== '0') {
      $links_to_process.addClass(class_name);
    }

    // Add data-extlink attribute.
    $links_to_process.attr('data-extlink', '');

    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if (drupalSettings.data.extlink.extUseFontAwesome) {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaMailtoClasses + '" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '"></span></span>');
        }
        else {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaLinkClasses + '" aria-label="' + drupalSettings.data.extlink.extLabel + '"></span></span>');
        }
      }
      else {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.mailtoLabel + '</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, drupalSettings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, drupalSettings);
    }
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Behaviors for the Filter Accordion.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Setup and attach the Filter Accordion behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.accordion = {
    attach: function attach(context) {
      var self = this;
      var $accordions = $('.accordion', context);
      $accordions.each(function () {
        var $accordion = $(this); // Attach click handler for accordion.

        var $toggle = $accordion.find('.accordion__toggle');
        $toggle.on('click', function () {
          self.toggleClickEvent($accordion, $(this));
        });
      });
      var accordionObj = $('.accordions-container.faq');

      var _loop = function _loop() {
        var paragraphID = $(accordionObj[i]).data('paragraph-id');
        $('.' + paragraphID + ' .paragraph--type--accordion-item').slice(0, 3).show();
        $('#loadmore' + paragraphID).on('click', function (e) {
          e.preventDefault();
          $('.' + paragraphID + ' .paragraph--type--accordion-item:hidden').slice(0, 3).slideDown();

          if ($('.faqbox.' + paragraphID + ' .paragraph--type--accordion-item:hidden').length == 0) {
            $('#loadmore' + paragraphID).hide();
          }
        });
      };

      for (var i = 0; i < accordionObj.length; i++) {
        _loop();
      }
    },
    toggleClickEvent: function toggleClickEvent($accordion, $toggle) {
      // Identify the matching element.
      var $content = $accordion.find('#' + $toggle.attr('aria-controls'));

      if (!$accordion.hasClass('open')) {
        // Accordion does not have `.open`, so we are opening the accordion.
        $accordion.addClass('open'); // Toggle the `aria-expanded`.

        $toggle.attr('aria-expanded', 'true'); // Toggle the `aria-hidden` attribute on the content.

        $content.attr('aria-hidden', 'false');
      } else {
        // Same as the if, but in reverse.
        $accordion.removeClass('open');
        $toggle.attr('aria-expanded', 'false');
        $content.attr('aria-hidden', 'true');
      }
    }
  };
}(Drupal, jQuery);

;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   */

  Drupal.behaviors.mediaGrid = {
    attach: function attach(context) {
      // If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the mediaGrid library
      //    within the ifrc_theme.libraries.yml file.
      $(document).ready(function () {
        var galleryIds;

        function getGalleryIds() {
          var elements_goId = $('div.row.media-grid__gallery').data('galleryid');
          galleryIds = $('div.row.media-grid__gallery').map(function () {
            return $(this).data('galleryid');
          }).get();
        }

        getGalleryIds();

        for (var i = 0; i < galleryIds.length; i++) {
          var _lightGallery;

          lightGallery(document.getElementById('lightgallery-' + galleryIds[i]), (_lightGallery = {
            galleryId: galleryIds[i],
            plugins: [lgVideo, lgShare, lgHash],
            videojs: true,
            customSlideName: true,
            extraProps: ['linkedinTitle']
          }, _defineProperty(_lightGallery, "extraProps", ['linkedinShareUrl']), _defineProperty(_lightGallery, "additionalShareOptions", [{
            // Selector for the anchor tag inside share list item
            selector: '.lg-share-linkedin',
            // HTML to be appended to the share dropdown menu
            dropdownHTML: '<li class="lg-share-item-linkedin"><a class="lg-share-linkedin" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">Linkedin</span></a></li>',
            // Construct url
            generateLink: function generateLink(galleryItem) {
              var url = encodeURIComponent(galleryItem.linkedinShareUrl || window.location.href);
              var linkedinShareLink = "//www.linkedin.com/shareArticle?mini=true&url=".concat(url);
              return linkedinShareLink;
            }
          }]), _lightGallery));
        }
      });
    }
  };
}(document, Drupal, jQuery);

;
/**
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).lightGallery=e()}(this,(function(){"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};var e="lgAfterAppendSlide",i="lgInit",s="lgHasVideo",n="lgContainerResize",o="lgUpdateSlides",r="lgAfterAppendSubHtml",l="lgBeforeOpen",a="lgAfterOpen",d="lgSlideItemLoad",g="lgBeforeSlide",h="lgAfterSlide",c="lgPosterClick",u="lgDragStart",m="lgDragMove",p="lgDragEnd",f="lgBeforeNextSlide",y="lgBeforePrevSlide",v="lgBeforeClose",b="lgAfterClose",I={mode:"lg-slide",easing:"ease",speed:400,licenseKey:"0000-0000-000-0000",height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:300,container:"",startAnimationDuration:400,zoomFromOrigin:!0,hideBarsDelay:0,showBarsAfter:1e4,slideDelay:0,supportLegacyBrowser:!0,allowMediaOverlap:!1,videoMaxSize:"1280-720",loadYouTubePoster:!0,defaultCaptionHeight:0,ariaLabelledby:"",ariaDescribedby:"",resetScrollPosition:!0,hideScrollbar:!1,closable:!0,swipeToClose:!0,closeOnTap:!0,showCloseIcon:!0,showMaximizeIcon:!1,loop:!0,escKey:!0,keyPress:!0,trapFocus:!0,controls:!0,slideEndAnimation:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:2,numberOfSlideItemsInDom:10,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:0,iframeWidth:"100%",iframeHeight:"100%",iframeMaxWidth:"100%",iframeMaxHeight:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],extraProps:[],exThumbImage:"",isMobile:void 0,mobileSettings:{controls:!1,showCloseIcon:!1,download:!1},plugins:[],strings:{closeGallery:"Close gallery",toggleMaximize:"Toggle maximize",previousSlide:"Previous slide",nextSlide:"Next slide",download:"Download",playVideo:"Play video"}};var C=function(){function t(t){return this.cssVenderPrefixes=["TransitionDuration","TransitionTimingFunction","Transform","Transition"],this.selector=this._getSelector(t),this.firstElement=this._getFirstEl(),this}return t.generateUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},t.prototype._getSelector=function(t,e){return void 0===e&&(e=document),"string"!=typeof t?t:(e=e||document,"#"===t.substring(0,1)?e.querySelector(t):e.querySelectorAll(t))},t.prototype._each=function(t){return this.selector?(void 0!==this.selector.length?[].forEach.call(this.selector,t):t(this.selector,0),this):this},t.prototype._setCssVendorPrefix=function(t,e,i){var s=e.replace(/-([a-z])/gi,(function(t,e){return e.toUpperCase()}));-1!==this.cssVenderPrefixes.indexOf(s)?(t.style[s.charAt(0).toLowerCase()+s.slice(1)]=i,t.style["webkit"+s]=i,t.style["moz"+s]=i,t.style["ms"+s]=i,t.style["o"+s]=i):t.style[s]=i},t.prototype._getFirstEl=function(){return this.selector&&void 0!==this.selector.length?this.selector[0]:this.selector},t.prototype.isEventMatched=function(t,e){var i=e.split(".");return t.split(".").filter((function(t){return t})).every((function(t){return-1!==i.indexOf(t)}))},t.prototype.attr=function(t,e){return void 0===e?this.firstElement?this.firstElement.getAttribute(t):"":(this._each((function(i){i.setAttribute(t,e)})),this)},t.prototype.find=function(t){return x(this._getSelector(t,this.selector))},t.prototype.first=function(){return this.selector&&void 0!==this.selector.length?x(this.selector[0]):x(this.selector)},t.prototype.eq=function(t){return x(this.selector[t])},t.prototype.parent=function(){return x(this.selector.parentElement)},t.prototype.get=function(){return this._getFirstEl()},t.prototype.removeAttr=function(t){var e=t.split(" ");return this._each((function(t){e.forEach((function(e){return t.removeAttribute(e)}))})),this},t.prototype.wrap=function(t){if(!this.firstElement)return this;var e=document.createElement("div");return e.className=t,this.firstElement.parentNode.insertBefore(e,this.firstElement),this.firstElement.parentNode.removeChild(this.firstElement),e.appendChild(this.firstElement),this},t.prototype.addClass=function(t){return void 0===t&&(t=""),this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.add(t)}))})),this},t.prototype.removeClass=function(t){return this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.remove(t)}))})),this},t.prototype.hasClass=function(t){return!!this.firstElement&&this.firstElement.classList.contains(t)},t.prototype.hasAttribute=function(t){return!!this.firstElement&&this.firstElement.hasAttribute(t)},t.prototype.toggleClass=function(t){return this.firstElement?(this.hasClass(t)?this.removeClass(t):this.addClass(t),this):this},t.prototype.css=function(t,e){var i=this;return this._each((function(s){i._setCssVendorPrefix(s,t,e)})),this},t.prototype.on=function(e,i){var s=this;return this.selector?(e.split(" ").forEach((function(e){Array.isArray(t.eventListeners[e])||(t.eventListeners[e]=[]),t.eventListeners[e].push(i),s.selector.addEventListener(e.split(".")[0],i)})),this):this},t.prototype.once=function(t,e){var i=this;return this.on(t,(function(){i.off(t),e(t)})),this},t.prototype.off=function(e){var i=this;return this.selector?(Object.keys(t.eventListeners).forEach((function(s){i.isEventMatched(e,s)&&(t.eventListeners[s].forEach((function(t){i.selector.removeEventListener(s.split(".")[0],t)})),t.eventListeners[s]=[])})),this):this},t.prototype.trigger=function(t,e){if(!this.firstElement)return this;var i=new CustomEvent(t.split(".")[0],{detail:e||null});return this.firstElement.dispatchEvent(i),this},t.prototype.load=function(t){var e=this;return fetch(t).then((function(t){return t.text()})).then((function(t){e.selector.innerHTML=t})),this},t.prototype.html=function(t){return void 0===t?this.firstElement?this.firstElement.innerHTML:"":(this._each((function(e){e.innerHTML=t})),this)},t.prototype.append=function(t){return this._each((function(e){"string"==typeof t?e.insertAdjacentHTML("beforeend",t):e.appendChild(t)})),this},t.prototype.prepend=function(t){return this._each((function(e){e.insertAdjacentHTML("afterbegin",t)})),this},t.prototype.remove=function(){return this._each((function(t){t.parentNode.removeChild(t)})),this},t.prototype.empty=function(){return this._each((function(t){t.innerHTML=""})),this},t.prototype.scrollTop=function(t){return void 0!==t?(document.body.scrollTop=t,document.documentElement.scrollTop=t,this):window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},t.prototype.scrollLeft=function(t){return void 0!==t?(document.body.scrollLeft=t,document.documentElement.scrollLeft=t,this):window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0},t.prototype.offset=function(){if(!this.firstElement)return{left:0,top:0};var t=this.firstElement.getBoundingClientRect(),e=x("body").style().marginLeft;return{left:t.left-parseFloat(e)+this.scrollLeft(),top:t.top+this.scrollTop()}},t.prototype.style=function(){return this.firstElement?this.firstElement.currentStyle||window.getComputedStyle(this.firstElement):{}},t.prototype.width=function(){var t=this.style();return this.firstElement.clientWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)},t.prototype.height=function(){var t=this.style();return this.firstElement.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)},t.eventListeners={},t}();function x(t){return function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),new C(t)}var w=["src","sources","subHtml","subHtmlUrl","html","video","poster","slideName","responsive","srcset","sizes","iframe","downloadUrl","download","width","facebookShareUrl","tweetText","iframeTitle","twitterShareUrl","pinterestShareUrl","pinterestText","fbHtml","disqusIdentifier","disqusUrl"];function S(t){return"href"===t?"src":t=(t=(t=t.replace("data-","")).charAt(0).toLowerCase()+t.slice(1)).replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))}var T=function(t,e,i,s){void 0===i&&(i=0);var n=x(t).attr("data-lg-size")||s;if(n){var o=n.split(",");if(o[1])for(var r=window.innerWidth,l=0;l<o.length;l++){var a=o[l];if(parseInt(a.split("-")[2],10)>r){n=a;break}l===o.length-1&&(n=a)}var d=n.split("-"),g=parseInt(d[0],10),h=parseInt(d[1],10),c=e.width(),u=e.height()-i,m=Math.min(c,g),p=Math.min(u,h),f=Math.min(m/g,p/h);return{width:g*f,height:h*f}}},E=function(t,e,i,s,n){if(n){var o=x(t).find("img").first();if(o.get()){var r=e.get().getBoundingClientRect(),l=r.width,a=e.height()-(i+s),d=o.width(),g=o.height(),h=o.style(),c=(l-d)/2-o.offset().left+(parseFloat(h.paddingLeft)||0)+(parseFloat(h.borderLeft)||0)+x(window).scrollLeft()+r.left,u=(a-g)/2-o.offset().top+(parseFloat(h.paddingTop)||0)+(parseFloat(h.borderTop)||0)+x(window).scrollTop()+i;return"translate3d("+(c*=-1)+"px, "+(u*=-1)+"px, 0) scale3d("+d/n.width+", "+g/n.height+", 1)"}}},O=function(t,e,i,s,n,o){return'<div class="lg-video-cont lg-has-iframe" style="width:'+t+"; max-width:"+i+"; height: "+e+"; max-height:"+s+'">\n                    <iframe class="lg-object" frameborder="0" '+(o?'title="'+o+'"':"")+' src="'+n+'"  allowfullscreen="true"></iframe>\n                </div>'},D=function(t,e,i,s,n,o){var r="<img "+i+" "+(s?'srcset="'+s+'"':"")+"  "+(n?'sizes="'+n+'"':"")+' class="lg-object lg-image" data-index="'+t+'" src="'+e+'" />',l="";o&&(l=("string"==typeof o?JSON.parse(o):o).map((function(t){var e="";return Object.keys(t).forEach((function(i){e+=" "+i+'="'+t[i]+'"'})),"<source "+e+"></source>"})));return""+l+r},L=function(t){for(var e=[],i=[],s="",n=0;n<t.length;n++){var o=t[n].split(" ");""===o[0]&&o.splice(0,1),i.push(o[0]),e.push(o[1])}for(var r=window.innerWidth,l=0;l<e.length;l++)if(parseInt(e[l],10)>r){s=i[l];break}return s},z=function(t){return!!t&&(!!t.complete&&0!==t.naturalWidth)},M=function(t,e,i,s,n){return'<div class="lg-video-cont '+(n&&n.youtube?"lg-has-youtube":n&&n.vimeo?"lg-has-vimeo":"lg-has-html5")+'" style="'+i+'">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="'+s+'"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>'+s+'</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            '+(e||"")+'\n            <img class="lg-object lg-video-poster" src="'+t+'" />\n        </div>'},G=function(t){var e=t.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');return[].filter.call(e,(function(t){var e=window.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility}))},k=function(t,e,i,s){var n=[],o=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var s=Array(t),n=0;for(e=0;e<i;e++)for(var o=arguments[e],r=0,l=o.length;r<l;r++,n++)s[n]=o[r];return s}(w,e);return[].forEach.call(t,(function(t){for(var e={},r=0;r<t.attributes.length;r++){var l=t.attributes[r];if(l.specified){var a=S(l.name),d="";o.indexOf(a)>-1&&(d=a),d&&(e[d]=l.value)}}var g=x(t),h=g.find("img").first().attr("alt"),c=g.attr("title"),u=s?g.attr(s):g.find("img").first().attr("src");e.thumb=u,i&&!e.subHtml&&(e.subHtml=c||h||""),e.alt=h||c||"",n.push(e)})),n},A=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},P=function(t,e,i){if(!t)return e?{html5:!0}:void console.error("lightGallery :- data-src is not provided on slide item "+(i+1)+". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");var s=t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i),n=t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i),o=t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);return s?{youtube:s}:n?{vimeo:n}:o?{wistia:o}:void 0},B=0,F=function(){function w(t,e){if(this.lgOpened=!1,this.index=0,this.plugins=[],this.lGalleryOn=!1,this.lgBusy=!1,this.currentItemsInDom=[],this.prevScrollTop=0,this.bodyPaddingRight=0,this.isDummyImageRemoved=!1,this.dragOrSwipeEnabled=!1,this.mediaContainerPosition={top:0,bottom:0},!t)return this;if(B++,this.lgId=B,this.el=t,this.LGel=x(t),this.generateSettings(e),this.buildModules(),this.settings.dynamic&&void 0!==this.settings.dynamicEl&&!Array.isArray(this.settings.dynamicEl))throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.galleryItems=this.getItems(),this.normalizeSettings(),this.init(),this.validateLicense(),this}return w.prototype.generateSettings=function(e){if(this.settings=t(t({},I),e),this.settings.isMobile&&"function"==typeof this.settings.isMobile?this.settings.isMobile():A()){var i=t(t({},this.settings.mobileSettings),this.settings.mobileSettings);this.settings=t(t({},this.settings),i)}},w.prototype.normalizeSettings=function(){this.settings.slideEndAnimation&&(this.settings.hideControlOnEnd=!1),this.settings.closable||(this.settings.swipeToClose=!1),this.zoomFromOrigin=this.settings.zoomFromOrigin,this.settings.dynamic&&(this.zoomFromOrigin=!1),this.settings.container||(this.settings.container=document.body),this.settings.preload=Math.min(this.settings.preload,this.galleryItems.length)},w.prototype.init=function(){var t=this;this.addSlideVideoInfo(this.galleryItems),this.buildStructure(),this.LGel.trigger(i,{instance:this}),this.settings.keyPress&&this.keyPress(),setTimeout((function(){t.enableDrag(),t.enableSwipe(),t.triggerPosterClick()}),50),this.arrow(),this.settings.mousewheel&&this.mousewheel(),this.settings.dynamic||this.openGalleryOnItemClick()},w.prototype.openGalleryOnItemClick=function(){for(var t=this,e=function(e){var s=i.items[e],n=x(s),o=C.generateUUID();n.attr("data-lg-id",o).on("click.lgcustom-item-"+o,(function(i){i.preventDefault();var n=t.settings.index||e;t.openGallery(n,s)}))},i=this,s=0;s<this.items.length;s++)e(s)},w.prototype.buildModules=function(){var t=this;this.settings.plugins.forEach((function(e){t.plugins.push(new e(t,x))}))},w.prototype.validateLicense=function(){this.settings.licenseKey?"0000-0000-000-0000"===this.settings.licenseKey&&console.warn("lightGallery: "+this.settings.licenseKey+" license key is not valid for production use"):console.error("Please provide a valid license key")},w.prototype.getSlideItem=function(t){return x(this.getSlideItemId(t))},w.prototype.getSlideItemId=function(t){return"#lg-item-"+this.lgId+"-"+t},w.prototype.getIdName=function(t){return t+"-"+this.lgId},w.prototype.getElementById=function(t){return x("#"+this.getIdName(t))},w.prototype.manageSingleSlideClassName=function(){this.galleryItems.length<2?this.outer.addClass("lg-single-item"):this.outer.removeClass("lg-single-item")},w.prototype.buildStructure=function(){var t=this;if(!(this.$container&&this.$container.get())){var e="",i="";this.settings.controls&&(e='<button type="button" id="'+this.getIdName("lg-prev")+'" aria-label="'+this.settings.strings.previousSlide+'" class="lg-prev lg-icon"> '+this.settings.prevHtml+' </button>\n                <button type="button" id="'+this.getIdName("lg-next")+'" aria-label="'+this.settings.strings.nextSlide+'" class="lg-next lg-icon"> '+this.settings.nextHtml+" </button>"),".lg-item"!==this.settings.appendSubHtmlTo&&(i='<div class="lg-sub-html" role="status" aria-live="polite"></div>');var s="";this.settings.allowMediaOverlap&&(s+="lg-media-overlap ");var n=this.settings.ariaLabelledby?'aria-labelledby="'+this.settings.ariaLabelledby+'"':"",o=this.settings.ariaDescribedby?'aria-describedby="'+this.settings.ariaDescribedby+'"':"",r="lg-container "+this.settings.addClass+" "+(document.body!==this.settings.container?"lg-inline":""),l=this.settings.closable&&this.settings.showCloseIcon?'<button type="button" aria-label="'+this.settings.strings.closeGallery+'" id="'+this.getIdName("lg-close")+'" class="lg-close lg-icon"></button>':"",a=this.settings.showMaximizeIcon?'<button type="button" aria-label="'+this.settings.strings.toggleMaximize+'" id="'+this.getIdName("lg-maximize")+'" class="lg-maximize lg-icon"></button>':"",d='\n        <div class="'+r+'" id="'+this.getIdName("lg-container")+'" tabindex="-1" aria-modal="true" '+n+" "+o+' role="dialog"\n        >\n            <div id="'+this.getIdName("lg-backdrop")+'" class="lg-backdrop"></div>\n\n            <div id="'+this.getIdName("lg-outer")+'" class="lg-outer lg-use-css3 lg-css3 lg-hide-items '+s+' ">\n\n              <div id="'+this.getIdName("lg-content")+'" class="lg-content">\n                <div id="'+this.getIdName("lg-inner")+'" class="lg-inner">\n                </div>\n                '+e+'\n              </div>\n                <div id="'+this.getIdName("lg-toolbar")+'" class="lg-toolbar lg-group">\n                    '+a+"\n                    "+l+"\n                    </div>\n                    "+(".lg-outer"===this.settings.appendSubHtmlTo?i:"")+'\n                <div id="'+this.getIdName("lg-components")+'" class="lg-components">\n                    '+(".lg-sub-html"===this.settings.appendSubHtmlTo?i:"")+"\n                </div>\n            </div>\n        </div>\n        ";x(this.settings.container).append(d),document.body!==this.settings.container&&x(this.settings.container).css("position","relative"),this.outer=this.getElementById("lg-outer"),this.$lgComponents=this.getElementById("lg-components"),this.$backdrop=this.getElementById("lg-backdrop"),this.$container=this.getElementById("lg-container"),this.$inner=this.getElementById("lg-inner"),this.$content=this.getElementById("lg-content"),this.$toolbar=this.getElementById("lg-toolbar"),this.$backdrop.css("transition-duration",this.settings.backdropDuration+"ms");var g=this.settings.mode+" ";this.manageSingleSlideClassName(),this.settings.enableDrag&&(g+="lg-grab "),this.outer.addClass(g),this.$inner.css("transition-timing-function",this.settings.easing),this.$inner.css("transition-duration",this.settings.speed+"ms"),this.settings.download&&this.$toolbar.append('<a id="'+this.getIdName("lg-download")+'" target="_blank" rel="noopener" aria-label="'+this.settings.strings.download+'" download class="lg-download lg-icon"></a>'),this.counter(),x(window).on("resize.lg.global"+this.lgId+" orientationchange.lg.global"+this.lgId,(function(){t.refreshOnResize()})),this.hideBars(),this.manageCloseGallery(),this.toggleMaximize(),this.initModules()}},w.prototype.refreshOnResize=function(){if(this.lgOpened){var t=this.galleryItems[this.index].__slideVideoInfo;this.mediaContainerPosition=this.getMediaContainerPosition();var e=this.mediaContainerPosition,i=e.top,s=e.bottom;if(this.currentImageSize=T(this.items[this.index],this.outer,i+s,t&&this.settings.videoMaxSize),t&&this.resizeVideoSlide(this.index,this.currentImageSize),this.zoomFromOrigin&&!this.isDummyImageRemoved){var o=this.getDummyImgStyles(this.currentImageSize);this.outer.find(".lg-current .lg-dummy-img").first().attr("style",o)}this.LGel.trigger(n)}},w.prototype.resizeVideoSlide=function(t,e){var i=this.getVideoContStyle(e);this.getSlideItem(t).find(".lg-video-cont").attr("style",i)},w.prototype.updateSlides=function(t,e){if(this.index>t.length-1&&(this.index=t.length-1),1===t.length&&(this.index=0),t.length){var i=this.galleryItems[e].src;this.galleryItems=t,this.updateControls(),this.$inner.empty(),this.currentItemsInDom=[];var s=0;this.galleryItems.some((function(t,e){return t.src===i&&(s=e,!0)})),this.currentItemsInDom=this.organizeSlideItems(s,-1),this.loadContent(s,!0),this.getSlideItem(s).addClass("lg-current"),this.index=s,this.updateCurrentCounter(s),this.LGel.trigger(o)}else this.closeGallery()},w.prototype.getItems=function(){if(this.items=[],this.settings.dynamic)return this.settings.dynamicEl||[];if("this"===this.settings.selector)this.items.push(this.el);else if(this.settings.selector)if("string"==typeof this.settings.selector)if(this.settings.selectWithin){var t=x(this.settings.selectWithin);this.items=t.find(this.settings.selector).get()}else this.items=this.el.querySelectorAll(this.settings.selector);else this.items=this.settings.selector;else this.items=this.el.children;return k(this.items,this.settings.extraProps,this.settings.getCaptionFromTitleOrAlt,this.settings.exThumbImage)},w.prototype.shouldHideScrollbar=function(){return this.settings.hideScrollbar&&document.body===this.settings.container},w.prototype.hideScrollbar=function(){if(this.shouldHideScrollbar()){this.bodyPaddingRight=parseFloat(x("body").style().paddingRight);var t=document.documentElement.getBoundingClientRect(),e=window.innerWidth-t.width;x(document.body).css("padding-right",e+this.bodyPaddingRight+"px"),x(document.body).addClass("lg-overlay-open")}},w.prototype.resetScrollBar=function(){this.shouldHideScrollbar()&&(x(document.body).css("padding-right",this.bodyPaddingRight+"px"),x(document.body).removeClass("lg-overlay-open"))},w.prototype.openGallery=function(t,e){var i=this;if(void 0===t&&(t=this.settings.index),!this.lgOpened){this.lgOpened=!0,this.outer.removeClass("lg-hide-items"),this.hideScrollbar(),this.$container.addClass("lg-show");var s=this.getItemsToBeInsertedToDom(t,t);this.currentItemsInDom=s;var n="";s.forEach((function(t){n=n+'<div id="'+t+'" class="lg-item"></div>'})),this.$inner.append(n),this.addHtml(t);var o="";this.mediaContainerPosition=this.getMediaContainerPosition();var r=this.mediaContainerPosition,d=r.top,g=r.bottom;this.settings.allowMediaOverlap||this.setMediaContainerPosition(d,g);var h=this.galleryItems[t].__slideVideoInfo;this.zoomFromOrigin&&e&&(this.currentImageSize=T(e,this.outer,d+g,h&&this.settings.videoMaxSize),o=E(e,this.outer,d,g,this.currentImageSize)),this.zoomFromOrigin&&o||(this.outer.addClass(this.settings.startClass),this.getSlideItem(t).removeClass("lg-complete"));var c=this.settings.zoomFromOrigin?100:this.settings.backdropDuration;setTimeout((function(){i.outer.addClass("lg-components-open")}),c),this.index=t,this.LGel.trigger(l),this.getSlideItem(t).addClass("lg-current"),this.lGalleryOn=!1,this.prevScrollTop=x(window).scrollTop(),setTimeout((function(){if(i.zoomFromOrigin&&o){var e=i.getSlideItem(t);e.css("transform",o),setTimeout((function(){e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration",i.settings.startAnimationDuration+"ms"),i.outer.addClass("lg-zoom-from-image")})),setTimeout((function(){e.css("transform","translate3d(0, 0, 0)")}),100)}setTimeout((function(){i.$backdrop.addClass("in"),i.$container.addClass("lg-show-in")}),10),setTimeout((function(){i.settings.trapFocus&&document.body===i.settings.container&&i.trapFocus()}),i.settings.backdropDuration+50),i.zoomFromOrigin&&o||setTimeout((function(){i.outer.addClass("lg-visible")}),i.settings.backdropDuration),i.slide(t,!1,!1,!1),i.LGel.trigger(a)})),document.body===this.settings.container&&x("html").addClass("lg-on")}},w.prototype.getMediaContainerPosition=function(){if(this.settings.allowMediaOverlap)return{top:0,bottom:0};var t=this.$toolbar.get().clientHeight||0,e=this.outer.find(".lg-components .lg-sub-html").get(),i=this.settings.defaultCaptionHeight||e&&e.clientHeight||0,s=this.outer.find(".lg-thumb-outer").get();return{top:t,bottom:(s?s.clientHeight:0)+i}},w.prototype.setMediaContainerPosition=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.$content.css("top",t+"px").css("bottom",e+"px")},w.prototype.hideBars=function(){var t=this;setTimeout((function(){t.outer.removeClass("lg-hide-items"),t.settings.hideBarsDelay>0&&(t.outer.on("mousemove.lg click.lg touchstart.lg",(function(){t.outer.removeClass("lg-hide-items"),clearTimeout(t.hideBarTimeout),t.hideBarTimeout=setTimeout((function(){t.outer.addClass("lg-hide-items")}),t.settings.hideBarsDelay)})),t.outer.trigger("mousemove.lg"))}),this.settings.showBarsAfter)},w.prototype.initPictureFill=function(t){if(this.settings.supportLegacyBrowser)try{picturefill({elements:[t.get()]})}catch(t){console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")}},w.prototype.counter=function(){if(this.settings.counter){var t='<div class="lg-counter" role="status" aria-live="polite">\n                <span id="'+this.getIdName("lg-counter-current")+'" class="lg-counter-current">'+(this.index+1)+' </span> /\n                <span id="'+this.getIdName("lg-counter-all")+'" class="lg-counter-all">'+this.galleryItems.length+" </span></div>";this.outer.find(this.settings.appendCounterTo).append(t)}},w.prototype.addHtml=function(t){var e,i;if(this.galleryItems[t].subHtmlUrl?i=this.galleryItems[t].subHtmlUrl:e=this.galleryItems[t].subHtml,!i)if(e){var s=e.substring(0,1);"."!==s&&"#"!==s||(e=this.settings.subHtmlSelectorRelative&&!this.settings.dynamic?x(this.items).eq(t).find(e).first().html():x(e).first().html())}else e="";if(".lg-item"!==this.settings.appendSubHtmlTo)i?this.outer.find(".lg-sub-html").load(i):this.outer.find(".lg-sub-html").html(e);else{var n=x(this.getSlideItemId(t));i?n.load(i):n.append('<div class="lg-sub-html">'+e+"</div>")}null!=e&&(""===e?this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"):this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")),this.LGel.trigger(r,{index:t})},w.prototype.preload=function(t){for(var e=1;e<=this.settings.preload&&!(e>=this.galleryItems.length-t);e++)this.loadContent(t+e,!1);for(var i=1;i<=this.settings.preload&&!(t-i<0);i++)this.loadContent(t-i,!1)},w.prototype.getDummyImgStyles=function(t){return t?"width:"+t.width+"px;\n                margin-left: -"+t.width/2+"px;\n                margin-top: -"+t.height/2+"px;\n                height:"+t.height+"px":""},w.prototype.getVideoContStyle=function(t){return t?"width:"+t.width+"px;\n                height:"+t.height+"px":""},w.prototype.getDummyImageContent=function(t,e,i){var s;if(this.settings.dynamic||(s=x(this.items).eq(e)),s){var n=void 0;if(!(n=this.settings.exThumbImage?s.attr(this.settings.exThumbImage):s.find("img").first().attr("src")))return"";var o="<img "+i+' style="'+this.getDummyImgStyles(this.currentImageSize)+'" class="lg-dummy-img" src="'+n+'" />';return t.addClass("lg-first-slide"),this.outer.addClass("lg-first-slide-loading"),o}return""},w.prototype.setImgMarkup=function(t,e,i){var s=this.galleryItems[i],n=s.alt,o=s.srcset,r=s.sizes,l=s.sources,a=n?'alt="'+n+'"':"",d='<picture class="lg-img-wrap"> '+(this.isFirstSlideWithZoomAnimation()?this.getDummyImageContent(e,i,a):D(i,t,a,o,r,l))+"</picture>";e.prepend(d)},w.prototype.onSlideObjectLoad=function(t,e,i,s){var n=t.find(".lg-object").first();z(n.get())||e?i():(n.on("load.lg error.lg",(function(){i&&i()})),n.on("error.lg",(function(){s&&s()})))},w.prototype.onLgObjectLoad=function(t,e,i,s,n,o){var r=this;this.onSlideObjectLoad(t,o,(function(){r.triggerSlideItemLoad(t,e,i,s,n)}),(function(){t.addClass("lg-complete lg-complete_"),t.html('<span class="lg-error-msg">Oops... Failed to load content...</span>')}))},w.prototype.triggerSlideItemLoad=function(t,e,i,s,n){var o=this,r=this.galleryItems[e],l=n&&"video"===this.getSlideType(r)&&!r.poster?s:0;setTimeout((function(){t.addClass("lg-complete lg-complete_"),o.LGel.trigger(d,{index:e,delay:i||0,isFirstSlide:n})}),l)},w.prototype.isFirstSlideWithZoomAnimation=function(){return!(this.lGalleryOn||!this.zoomFromOrigin||!this.currentImageSize)},w.prototype.addSlideVideoInfo=function(t){var e=this;t.forEach((function(t,i){t.__slideVideoInfo=P(t.src,!!t.video,i),t.__slideVideoInfo&&e.settings.loadYouTubePoster&&!t.poster&&t.__slideVideoInfo.youtube&&(t.poster="//img.youtube.com/vi/"+t.__slideVideoInfo.youtube[1]+"/maxresdefault.jpg")}))},w.prototype.loadContent=function(t,i){var n=this,o=this.galleryItems[t],r=x(this.getSlideItemId(t)),l=o.poster,a=o.srcset,d=o.sizes,g=o.sources,h=o.src,c=o.video,u=c&&"string"==typeof c?JSON.parse(c):c;if(o.responsive){var m=o.responsive.split(",");h=L(m)||h}var p=o.__slideVideoInfo,f="",y=!!o.iframe,v=!this.lGalleryOn,b=0;if(v&&(b=this.zoomFromOrigin&&this.currentImageSize?this.settings.startAnimationDuration+10:this.settings.backdropDuration+10),!r.hasClass("lg-loaded")){if(p){var I=this.mediaContainerPosition,C=I.top,w=I.bottom,S=T(this.items[t],this.outer,C+w,p&&this.settings.videoMaxSize);f=this.getVideoContStyle(S)}if(y){var E=O(this.settings.iframeWidth,this.settings.iframeHeight,this.settings.iframeMaxWidth,this.settings.iframeMaxHeight,h,o.iframeTitle);r.prepend(E)}else if(l){var z="";v&&this.zoomFromOrigin&&this.currentImageSize&&(z=this.getDummyImageContent(r,t,""));E=M(l,z||"",f,this.settings.strings.playVideo,p);r.prepend(E)}else if(p){E='<div class="lg-video-cont " style="'+f+'"></div>';r.prepend(E)}else if(this.setImgMarkup(h,r,t),a||g){var G=r.find(".lg-object");this.initPictureFill(G)}(l||p)&&this.LGel.trigger(s,{index:t,src:h,html5Video:u,hasPoster:!!l}),this.LGel.trigger(e,{index:t}),this.lGalleryOn&&".lg-item"===this.settings.appendSubHtmlTo&&this.addHtml(t)}var k=0;b&&!x(document.body).hasClass("lg-from-hash")&&(k=b),this.isFirstSlideWithZoomAnimation()&&(setTimeout((function(){r.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")}),this.settings.startAnimationDuration+100),r.hasClass("lg-loaded")||setTimeout((function(){if("image"===n.getSlideType(o)){var e=o.alt,i=e?'alt="'+e+'"':"";if(r.find(".lg-img-wrap").append(D(t,h,i,a,d,o.sources)),a||g){var s=r.find(".lg-object");n.initPictureFill(s)}}("image"===n.getSlideType(o)||"video"===n.getSlideType(o)&&l)&&(n.onLgObjectLoad(r,t,b,k,!0,!1),n.onSlideObjectLoad(r,!(!p||!p.html5||l),(function(){n.loadContentOnFirstSlideLoad(t,r,k)}),(function(){n.loadContentOnFirstSlideLoad(t,r,k)})))}),this.settings.startAnimationDuration+100)),r.addClass("lg-loaded"),this.isFirstSlideWithZoomAnimation()&&("video"!==this.getSlideType(o)||l)||this.onLgObjectLoad(r,t,b,k,v,!(!p||!p.html5||l)),this.zoomFromOrigin&&this.currentImageSize||!r.hasClass("lg-complete_")||this.lGalleryOn||setTimeout((function(){r.addClass("lg-complete")}),this.settings.backdropDuration),this.lGalleryOn=!0,!0===i&&(r.hasClass("lg-complete_")?this.preload(t):r.find(".lg-object").first().on("load.lg error.lg",(function(){n.preload(t)})))},w.prototype.loadContentOnFirstSlideLoad=function(t,e,i){var s=this;setTimeout((function(){e.find(".lg-dummy-img").remove(),e.removeClass("lg-first-slide"),s.outer.removeClass("lg-first-slide-loading"),s.isDummyImageRemoved=!0,s.preload(t)}),i+300)},w.prototype.getItemsToBeInsertedToDom=function(t,e,i){var s=this;void 0===i&&(i=0);var n=[],o=Math.max(i,3);o=Math.min(o,this.galleryItems.length);var r="lg-item-"+this.lgId+"-"+e;if(this.galleryItems.length<=3)return this.galleryItems.forEach((function(t,e){n.push("lg-item-"+s.lgId+"-"+e)})),n;if(t<(this.galleryItems.length-1)/2){for(var l=t;l>t-o/2&&l>=0;l--)n.push("lg-item-"+this.lgId+"-"+l);var a=n.length;for(l=0;l<o-a;l++)n.push("lg-item-"+this.lgId+"-"+(t+l+1))}else{for(l=t;l<=this.galleryItems.length-1&&l<t+o/2;l++)n.push("lg-item-"+this.lgId+"-"+l);for(a=n.length,l=0;l<o-a;l++)n.push("lg-item-"+this.lgId+"-"+(t-l-1))}return this.settings.loop&&(t===this.galleryItems.length-1?n.push("lg-item-"+this.lgId+"-0"):0===t&&n.push("lg-item-"+this.lgId+"-"+(this.galleryItems.length-1))),-1===n.indexOf(r)&&n.push("lg-item-"+this.lgId+"-"+e),n},w.prototype.organizeSlideItems=function(t,e){var i=this,s=this.getItemsToBeInsertedToDom(t,e,this.settings.numberOfSlideItemsInDom);return s.forEach((function(t){-1===i.currentItemsInDom.indexOf(t)&&i.$inner.append('<div id="'+t+'" class="lg-item"></div>')})),this.currentItemsInDom.forEach((function(t){-1===s.indexOf(t)&&x("#"+t).remove()})),s},w.prototype.getPreviousSlideIndex=function(){var t=0;try{var e=this.outer.find(".lg-current").first().attr("id");t=parseInt(e.split("-")[3])||0}catch(e){t=0}return t},w.prototype.setDownloadValue=function(t){if(this.settings.download){var e=this.galleryItems[t];if(!1===e.downloadUrl||"false"===e.downloadUrl)this.outer.addClass("lg-hide-download");else{var i=this.getElementById("lg-download");this.outer.removeClass("lg-hide-download"),i.attr("href",e.downloadUrl||e.src),e.download&&i.attr("download",e.download)}}},w.prototype.makeSlideAnimation=function(t,e,i){var s=this;this.lGalleryOn&&i.addClass("lg-slide-progress"),setTimeout((function(){s.outer.addClass("lg-no-trans"),s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"),"prev"===t?(e.addClass("lg-prev-slide"),i.addClass("lg-next-slide")):(e.addClass("lg-next-slide"),i.addClass("lg-prev-slide")),setTimeout((function(){s.outer.find(".lg-item").removeClass("lg-current"),e.addClass("lg-current"),s.outer.removeClass("lg-no-trans")}),50)}),this.lGalleryOn?this.settings.slideDelay:0)},w.prototype.slide=function(t,e,i,s){var n=this,o=this.getPreviousSlideIndex();if(this.currentItemsInDom=this.organizeSlideItems(t,o),!this.lGalleryOn||o!==t){var r=this.galleryItems.length;if(!this.lgBusy){this.settings.counter&&this.updateCurrentCounter(t);var l=this.getSlideItem(t),a=this.getSlideItem(o),d=this.galleryItems[t],c=d.__slideVideoInfo;if(this.outer.attr("data-lg-slide-type",this.getSlideType(d)),this.setDownloadValue(t),c){var u=this.mediaContainerPosition,m=u.top,p=u.bottom,f=T(this.items[t],this.outer,m+p,c&&this.settings.videoMaxSize);this.resizeVideoSlide(t,f)}if(this.LGel.trigger(g,{prevIndex:o,index:t,fromTouch:!!e,fromThumb:!!i}),this.lgBusy=!0,clearTimeout(this.hideBarTimeout),this.arrowDisable(t),s||(t<o?s="prev":t>o&&(s="next")),e){this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");var y=void 0,v=void 0;r>2?(y=t-1,v=t+1,(0===t&&o===r-1||t===r-1&&0===o)&&(v=0,y=r-1)):(y=0,v=1),"prev"===s?this.getSlideItem(v).addClass("lg-next-slide"):this.getSlideItem(y).addClass("lg-prev-slide"),l.addClass("lg-current")}else this.makeSlideAnimation(s,l,a);this.lGalleryOn?setTimeout((function(){n.loadContent(t,!0),".lg-item"!==n.settings.appendSubHtmlTo&&n.addHtml(t)}),this.settings.speed+50+(e?0:this.settings.slideDelay)):this.loadContent(t,!0),setTimeout((function(){n.lgBusy=!1,a.removeClass("lg-slide-progress"),n.LGel.trigger(h,{prevIndex:o,index:t,fromTouch:e,fromThumb:i})}),(this.lGalleryOn?this.settings.speed+100:100)+(e?0:this.settings.slideDelay))}this.index=t}},w.prototype.updateCurrentCounter=function(t){this.getElementById("lg-counter-current").html(t+1+"")},w.prototype.updateCounterTotal=function(){this.getElementById("lg-counter-all").html(this.galleryItems.length+"")},w.prototype.getSlideType=function(t){return t.__slideVideoInfo?"video":t.iframe?"iframe":"image"},w.prototype.touchMove=function(t,e,i){var s=e.pageX-t.pageX,n=e.pageY-t.pageY,o=!1;if(this.swipeDirection?o=!0:Math.abs(s)>15?(this.swipeDirection="horizontal",o=!0):Math.abs(n)>15&&(this.swipeDirection="vertical",o=!0),o){var r=this.getSlideItem(this.index);if("horizontal"===this.swipeDirection){null==i||i.preventDefault(),this.outer.addClass("lg-dragging"),this.setTranslate(r,s,0);var l=r.get().offsetWidth,a=15*l/100-Math.abs(10*s/100);this.setTranslate(this.outer.find(".lg-prev-slide").first(),-l+s-a,0),this.setTranslate(this.outer.find(".lg-next-slide").first(),l+s+a,0)}else if("vertical"===this.swipeDirection&&this.settings.swipeToClose){null==i||i.preventDefault(),this.$container.addClass("lg-dragging-vertical");var d=1-Math.abs(n)/window.innerHeight;this.$backdrop.css("opacity",d);var g=1-Math.abs(n)/(2*window.innerWidth);this.setTranslate(r,0,n,g,g),Math.abs(n)>100&&this.outer.addClass("lg-hide-items").removeClass("lg-components-open")}}},w.prototype.touchEnd=function(t,e,i){var s,n=this;"lg-slide"!==this.settings.mode&&this.outer.addClass("lg-slide"),setTimeout((function(){n.$container.removeClass("lg-dragging-vertical"),n.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");var o=!0;if("horizontal"===n.swipeDirection){s=t.pageX-e.pageX;var r=Math.abs(t.pageX-e.pageX);s<0&&r>n.settings.swipeThreshold?(n.goToNextSlide(!0),o=!1):s>0&&r>n.settings.swipeThreshold&&(n.goToPrevSlide(!0),o=!1)}else if("vertical"===n.swipeDirection){if(s=Math.abs(t.pageY-e.pageY),n.settings.closable&&n.settings.swipeToClose&&s>100)return void n.closeGallery();n.$backdrop.css("opacity",1)}if(n.outer.find(".lg-item").removeAttr("style"),o&&Math.abs(t.pageX-e.pageX)<5){var l=x(i.target);n.isPosterElement(l)&&n.LGel.trigger(c)}n.swipeDirection=void 0})),setTimeout((function(){n.outer.hasClass("lg-dragging")||"lg-slide"===n.settings.mode||n.outer.removeClass("lg-slide")}),this.settings.speed+100)},w.prototype.enableSwipe=function(){var t=this,e={},i={},s=!1,n=!1;this.settings.enableSwipe&&(this.$inner.on("touchstart.lg",(function(i){t.dragOrSwipeEnabled=!0;var s=t.getSlideItem(t.index);!x(i.target).hasClass("lg-item")&&!s.get().contains(i.target)||t.outer.hasClass("lg-zoomed")||t.lgBusy||1!==i.targetTouches.length||(n=!0,t.touchAction="swipe",t.manageSwipeClass(),e={pageX:i.targetTouches[0].pageX,pageY:i.targetTouches[0].pageY})})),this.$inner.on("touchmove.lg",(function(o){n&&"swipe"===t.touchAction&&1===o.targetTouches.length&&(i={pageX:o.targetTouches[0].pageX,pageY:o.targetTouches[0].pageY},t.touchMove(e,i,o),s=!0)})),this.$inner.on("touchend.lg",(function(o){if("swipe"===t.touchAction){if(s)s=!1,t.touchEnd(i,e,o);else if(n){var r=x(o.target);t.isPosterElement(r)&&t.LGel.trigger(c)}t.touchAction=void 0,n=!1}})))},w.prototype.enableDrag=function(){var t=this,e={},i={},s=!1,n=!1;this.settings.enableDrag&&(this.outer.on("mousedown.lg",(function(i){t.dragOrSwipeEnabled=!0;var n=t.getSlideItem(t.index);(x(i.target).hasClass("lg-item")||n.get().contains(i.target))&&(t.outer.hasClass("lg-zoomed")||t.lgBusy||(i.preventDefault(),t.lgBusy||(t.manageSwipeClass(),e={pageX:i.pageX,pageY:i.pageY},s=!0,t.outer.get().scrollLeft+=1,t.outer.get().scrollLeft-=1,t.outer.removeClass("lg-grab").addClass("lg-grabbing"),t.LGel.trigger(u))))})),x(window).on("mousemove.lg.global"+this.lgId,(function(o){s&&t.lgOpened&&(n=!0,i={pageX:o.pageX,pageY:o.pageY},t.touchMove(e,i),t.LGel.trigger(m))})),x(window).on("mouseup.lg.global"+this.lgId,(function(o){if(t.lgOpened){var r=x(o.target);n?(n=!1,t.touchEnd(i,e,o),t.LGel.trigger(p)):t.isPosterElement(r)&&t.LGel.trigger(c),s&&(s=!1,t.outer.removeClass("lg-grabbing").addClass("lg-grab"))}})))},w.prototype.triggerPosterClick=function(){var t=this;this.$inner.on("click.lg",(function(e){!t.dragOrSwipeEnabled&&t.isPosterElement(x(e.target))&&t.LGel.trigger(c)}))},w.prototype.manageSwipeClass=function(){var t=this.index+1,e=this.index-1;this.settings.loop&&this.galleryItems.length>2&&(0===this.index?e=this.galleryItems.length-1:this.index===this.galleryItems.length-1&&(t=0)),this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"),e>-1&&this.getSlideItem(e).addClass("lg-prev-slide"),this.getSlideItem(t).addClass("lg-next-slide")},w.prototype.goToNextSlide=function(t){var e=this,i=this.settings.loop;t&&this.galleryItems.length<3&&(i=!1),this.lgBusy||(this.index+1<this.galleryItems.length?(this.index++,this.LGel.trigger(f,{index:this.index}),this.slide(this.index,!!t,!1,"next")):i?(this.index=0,this.LGel.trigger(f,{index:this.index}),this.slide(this.index,!!t,!1,"next")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-right-end"),setTimeout((function(){e.outer.removeClass("lg-right-end")}),400)))},w.prototype.goToPrevSlide=function(t){var e=this,i=this.settings.loop;t&&this.galleryItems.length<3&&(i=!1),this.lgBusy||(this.index>0?(this.index--,this.LGel.trigger(y,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):i?(this.index=this.galleryItems.length-1,this.LGel.trigger(y,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-left-end"),setTimeout((function(){e.outer.removeClass("lg-left-end")}),400)))},w.prototype.keyPress=function(){var t=this;x(window).on("keydown.lg.global"+this.lgId,(function(e){t.lgOpened&&!0===t.settings.escKey&&27===e.keyCode&&(e.preventDefault(),t.settings.allowMediaOverlap&&t.outer.hasClass("lg-can-toggle")&&t.outer.hasClass("lg-components-open")?t.outer.removeClass("lg-components-open"):t.closeGallery()),t.lgOpened&&t.galleryItems.length>1&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}))},w.prototype.arrow=function(){var t=this;this.getElementById("lg-prev").on("click.lg",(function(){t.goToPrevSlide()})),this.getElementById("lg-next").on("click.lg",(function(){t.goToNextSlide()}))},w.prototype.arrowDisable=function(t){if(!this.settings.loop&&this.settings.hideControlOnEnd){var e=this.getElementById("lg-prev"),i=this.getElementById("lg-next");t+1===this.galleryItems.length?i.attr("disabled","disabled").addClass("disabled"):i.removeAttr("disabled").removeClass("disabled"),0===t?e.attr("disabled","disabled").addClass("disabled"):e.removeAttr("disabled").removeClass("disabled")}},w.prototype.setTranslate=function(t,e,i,s,n){void 0===s&&(s=1),void 0===n&&(n=1),t.css("transform","translate3d("+e+"px, "+i+"px, 0px) scale3d("+s+", "+n+", 1)")},w.prototype.mousewheel=function(){var t=this,e=0;this.outer.on("wheel.lg",(function(i){if(i.deltaY&&!(t.galleryItems.length<2)){i.preventDefault();var s=(new Date).getTime();s-e<1e3||(e=s,i.deltaY>0?t.goToNextSlide():i.deltaY<0&&t.goToPrevSlide())}}))},w.prototype.isSlideElement=function(t){return t.hasClass("lg-outer")||t.hasClass("lg-item")||t.hasClass("lg-img-wrap")},w.prototype.isPosterElement=function(t){var e=this.getSlideItem(this.index).find(".lg-video-play-button").get();return t.hasClass("lg-video-poster")||t.hasClass("lg-video-play-button")||e&&e.contains(t.get())},w.prototype.toggleMaximize=function(){var t=this;this.getElementById("lg-maximize").on("click.lg",(function(){t.$container.toggleClass("lg-inline"),t.refreshOnResize()}))},w.prototype.invalidateItems=function(){for(var t=0;t<this.items.length;t++){var e=x(this.items[t]);e.off("click.lgcustom-item-"+e.attr("data-lg-id"))}},w.prototype.trapFocus=function(){var t=this;this.$container.get().focus({preventScroll:!0}),x(window).on("keydown.lg.global"+this.lgId,(function(e){if(t.lgOpened&&("Tab"===e.key||9===e.keyCode)){var i=G(t.$container.get()),s=i[0],n=i[i.length-1];e.shiftKey?document.activeElement===s&&(n.focus(),e.preventDefault()):document.activeElement===n&&(s.focus(),e.preventDefault())}}))},w.prototype.manageCloseGallery=function(){var t=this;if(this.settings.closable){var e=!1;this.getElementById("lg-close").on("click.lg",(function(){t.closeGallery()})),this.settings.closeOnTap&&(this.outer.on("mousedown.lg",(function(i){var s=x(i.target);e=!!t.isSlideElement(s)})),this.outer.on("mousemove.lg",(function(){e=!1})),this.outer.on("mouseup.lg",(function(i){var s=x(i.target);t.isSlideElement(s)&&e&&(t.outer.hasClass("lg-dragging")||t.closeGallery())})))}},w.prototype.closeGallery=function(t){var e=this;if(!this.lgOpened||!this.settings.closable&&!t)return 0;this.LGel.trigger(v),this.settings.resetScrollPosition&&!this.settings.hideScrollbar&&x(window).scrollTop(this.prevScrollTop);var i,s=this.items[this.index];if(this.zoomFromOrigin&&s){var n=this.mediaContainerPosition,o=n.top,r=n.bottom,l=this.galleryItems[this.index],a=l.__slideVideoInfo,d=l.poster,g=T(s,this.outer,o+r,a&&d&&this.settings.videoMaxSize);i=E(s,this.outer,o,r,g)}this.zoomFromOrigin&&i?(this.outer.addClass("lg-closing lg-zoom-from-image"),this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration",this.settings.startAnimationDuration+"ms").css("transform",i)):(this.outer.addClass("lg-hide-items"),this.outer.removeClass("lg-zoom-from-image")),this.destroyModules(),this.lGalleryOn=!1,this.isDummyImageRemoved=!1,this.zoomFromOrigin=this.settings.zoomFromOrigin,clearTimeout(this.hideBarTimeout),this.hideBarTimeout=!1,x("html").removeClass("lg-on"),this.outer.removeClass("lg-visible lg-components-open"),this.$backdrop.removeClass("in").css("opacity",0);var h=this.zoomFromOrigin&&i?Math.max(this.settings.startAnimationDuration,this.settings.backdropDuration):this.settings.backdropDuration;return this.$container.removeClass("lg-show-in"),setTimeout((function(){e.zoomFromOrigin&&i&&e.outer.removeClass("lg-zoom-from-image"),e.$container.removeClass("lg-show"),e.resetScrollBar(),e.$backdrop.removeAttr("style").css("transition-duration",e.settings.backdropDuration+"ms"),e.outer.removeClass("lg-closing "+e.settings.startClass),e.getSlideItem(e.index).removeClass("lg-start-end-progress"),e.$inner.empty(),e.lgOpened&&e.LGel.trigger(b,{instance:e}),e.$container.get()&&e.$container.get().blur(),e.lgOpened=!1}),h+100),h+100},w.prototype.initModules=function(){this.plugins.forEach((function(t){try{t.init()}catch(t){console.warn("lightGallery:- make sure lightGallery module is properly initiated")}}))},w.prototype.destroyModules=function(t){this.plugins.forEach((function(e){try{t?e.destroy():e.closeGallery&&e.closeGallery()}catch(t){console.warn("lightGallery:- make sure lightGallery module is properly destroyed")}}))},w.prototype.refresh=function(t){this.settings.dynamic||this.invalidateItems(),this.galleryItems=t||this.getItems(),this.updateControls(),this.openGalleryOnItemClick(),this.LGel.trigger(o)},w.prototype.updateControls=function(){this.addSlideVideoInfo(this.galleryItems),this.updateCounterTotal(),this.manageSingleSlideClassName()},w.prototype.destroy=function(){var t=this,e=this.closeGallery(!0);return setTimeout((function(){t.destroyModules(!0),t.settings.dynamic||t.invalidateItems(),x(window).off(".lg.global"+t.lgId),t.LGel.off(".lg"),t.$container.remove()}),e),e},w}();return function(t,e){return new F(t,e)}}));
;
/**
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).lgVideo=o()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var o,i=1,t=arguments.length;i<t;i++)for(var s in o=arguments[i])Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);return e}).apply(this,arguments)},o={autoplayFirstVideo:!0,youTubePlayerParams:!1,vimeoPlayerParams:!1,wistiaPlayerParams:!1,gotoNextSlideOnVideoEnd:!0,autoplayVideoOnSlide:!1,videojs:!1,videojsTheme:"",videojsOptions:{}},i="lgHasVideo",t="lgSlideItemLoad",s="lgBeforeSlide",n="lgAfterSlide",l="lgPosterClick",r=function(e){return Object.keys(e).map((function(o){return encodeURIComponent(o)+"="+encodeURIComponent(e[o])})).join("&")};return function(){function d(i){return this.core=i,this.settings=e(e({},o),this.core.settings),this}return d.prototype.init=function(){var e=this;this.core.LGel.on(i+".video",this.onHasVideo.bind(this)),this.core.LGel.on(l+".video",(function(){var o=e.core.getSlideItem(e.core.index);e.loadVideoOnPosterClick(o)})),this.core.LGel.on(t+".video",this.onSlideItemLoad.bind(this)),this.core.LGel.on(s+".video",this.onBeforeSlide.bind(this)),this.core.LGel.on(n+".video",this.onAfterSlide.bind(this))},d.prototype.onSlideItemLoad=function(e){var o=this,i=e.detail,t=i.isFirstSlide,s=i.index;this.settings.autoplayFirstVideo&&t&&s===this.core.index&&setTimeout((function(){o.loadAndPlayVideo(s)}),200),!t&&this.settings.autoplayVideoOnSlide&&s===this.core.index&&this.loadAndPlayVideo(s)},d.prototype.onHasVideo=function(e){var o=e.detail,i=o.index,t=o.src,s=o.html5Video;o.hasPoster||(this.appendVideos(this.core.getSlideItem(i),{src:t,addClass:"lg-object",index:i,html5Video:s}),this.gotoNextSlideOnVideoEnd(t,i))},d.prototype.onBeforeSlide=function(e){if(this.core.lGalleryOn){var o=e.detail.prevIndex;this.pauseVideo(o)}},d.prototype.onAfterSlide=function(e){var o=this,i=e.detail,t=i.index,s=i.prevIndex,n=this.core.getSlideItem(t);this.settings.autoplayVideoOnSlide&&t!==s&&n.hasClass("lg-complete")&&setTimeout((function(){o.loadAndPlayVideo(t)}),100)},d.prototype.loadAndPlayVideo=function(e){var o=this.core.getSlideItem(e);this.core.galleryItems[e].poster?this.loadVideoOnPosterClick(o,!0):this.playVideo(e)},d.prototype.playVideo=function(e){this.controlVideo(e,"play")},d.prototype.pauseVideo=function(e){this.controlVideo(e,"pause")},d.prototype.getVideoHtml=function(e,o,i,t){var s="",n=this.core.galleryItems[i].__slideVideoInfo||{},l=this.core.galleryItems[i],d=l.title||l.alt;d=d?'title="'+d+'"':"";var a='allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';if(n.youtube){var c="lg-youtube"+i,u="?"+(n.youtube[2]?n.youtube[2]+"&":"")+"wmode=opaque&autoplay=0&mute=1&enablejsapi=1"+(this.settings.youTubePlayerParams?"&"+r(this.settings.youTubePlayerParams):"");s='<iframe allow="autoplay" id='+c+' class="lg-video-object lg-youtube '+o+'" '+d+' src="//www.youtube.com/embed/'+(n.youtube[1]+u)+'" '+a+"></iframe>"}else if(n.vimeo){c="lg-vimeo"+i,u=function(e,o){if(!o||!o.vimeo)return"";var i=o.vimeo[2]||"",t=e&&0!==Object.keys(e).length?"&"+r(e):"",s=((o.vimeo[0].split("/").pop()||"").split("?")[0]||"").split("#")[0],n=o.vimeo[1]!==s;return n&&(i=i.replace("/"+s,"")),"?autoplay=0&muted=1"+(n?"&h="+s:"")+t+("?"==i[0]?"&"+i.slice(1):i||"")}(this.settings.vimeoPlayerParams,n);s='<iframe allow="autoplay" id='+c+' class="lg-video-object lg-vimeo '+o+'" '+d+' src="//player.vimeo.com/video/'+(n.vimeo[1]+u)+'" '+a+"></iframe>"}else if(n.wistia){var h="lg-wistia"+i;u=(u=r(this.settings.wistiaPlayerParams))?"?"+u:"",s='<iframe allow="autoplay" id="'+h+'" src="//fast.wistia.net/embed/iframe/'+(n.wistia[4]+u)+'" '+d+' class="wistia_embed lg-video-object lg-wistia '+o+'" name="wistia_embed" '+a+"></iframe>"}else if(n.html5){for(var f="",g=0;g<t.source.length;g++)f+='<source src="'+t.source[g].src+'" type="'+t.source[g].type+'">';if(t.tracks){var y=function(e){var o="",i=t.tracks[e];Object.keys(i||{}).forEach((function(e){o+=e+'="'+i[e]+'" '})),f+="<track "+o+">"};for(g=0;g<t.tracks.length;g++)y(g)}var p="",v=t.attributes||{};Object.keys(v||{}).forEach((function(e){p+=e+'="'+v[e]+'" '})),s='<video class="lg-video-object lg-html5 '+(this.settings.videojs&&this.settings.videojsTheme?this.settings.videojsTheme+" ":"")+" "+(this.settings.videojs?" video-js":"")+'" '+p+">\n                "+f+"\n                Your browser does not support HTML5 video.\n            </video>"}return s},d.prototype.appendVideos=function(e,o){var i,t=this.getVideoHtml(o.src,o.addClass,o.index,o.html5Video);e.find(".lg-video-cont").append(t);var s=e.find(".lg-video-object").first();if(o.html5Video&&s.on("mousedown.lg.video",(function(e){e.stopPropagation()})),this.settings.videojs&&(null===(i=this.core.galleryItems[o.index].__slideVideoInfo)||void 0===i?void 0:i.html5))try{return videojs(s.get(),this.settings.videojsOptions)}catch(e){console.error("lightGallery:- Make sure you have included videojs")}},d.prototype.gotoNextSlideOnVideoEnd=function(e,o){var i=this,t=this.core.getSlideItem(o).find(".lg-video-object").first(),s=this.core.galleryItems[o].__slideVideoInfo||{};if(this.settings.gotoNextSlideOnVideoEnd)if(s.html5)t.on("ended",(function(){i.core.goToNextSlide()}));else if(s.vimeo)try{new Vimeo.Player(t.get()).on("ended",(function(){i.core.goToNextSlide()}))}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(s.wistia)try{window._wq=window._wq||[],window._wq.push({id:t.attr("id"),onReady:function(e){e.bind("end",(function(){i.core.goToNextSlide()}))}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},d.prototype.controlVideo=function(e,o){var i=this.core.getSlideItem(e).find(".lg-video-object").first(),t=this.core.galleryItems[e].__slideVideoInfo||{};if(i.get())if(t.youtube)try{i.get().contentWindow.postMessage('{"event":"command","func":"'+o+'Video","args":""}',"*")}catch(e){console.error("lightGallery:- "+e)}else if(t.vimeo)try{new Vimeo.Player(i.get())[o]()}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(t.html5)if(this.settings.videojs)try{videojs(i.get())[o]()}catch(e){console.error("lightGallery:- Make sure you have included videojs")}else i.get()[o]();else if(t.wistia)try{window._wq=window._wq||[],window._wq.push({id:i.attr("id"),onReady:function(e){e[o]()}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},d.prototype.loadVideoOnPosterClick=function(e,o){var i=this;if(e.hasClass("lg-video-loaded"))o&&this.playVideo(this.core.index);else if(e.hasClass("lg-has-video"))this.playVideo(this.core.index);else{e.addClass("lg-has-video");var t=void 0,s=this.core.galleryItems[this.core.index].src,n=this.core.galleryItems[this.core.index].video;n&&(t="string"==typeof n?JSON.parse(n):n);var l=this.appendVideos(e,{src:s,addClass:"",index:this.core.index,html5Video:t});this.gotoNextSlideOnVideoEnd(s,this.core.index);var r=e.find(".lg-object").first().get();e.find(".lg-video-cont").first().append(r),e.addClass("lg-video-loading"),l&&l.ready((function(){l.on("loadedmetadata",(function(){i.onVideoLoadAfterPosterClick(e,i.core.index)}))})),e.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg",(function(){setTimeout((function(){i.onVideoLoadAfterPosterClick(e,i.core.index)}),50)}))}},d.prototype.onVideoLoadAfterPosterClick=function(e,o){e.addClass("lg-video-loaded"),this.playVideo(o)},d.prototype.destroy=function(){this.core.LGel.off(".lg.video"),this.core.LGel.off(".video")},d}()}));
;
/**
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).lgShare=e()}(this,(function(){"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function e(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<r;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,n++)o[n]=i[s];return o}var r={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",pinterest:!0,pinterestDropdownText:"Pinterest",additionalShareOptions:[],sharePluginStrings:{share:"Share"}};function o(t){return"//www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t.facebookShareUrl||window.location.href)}function n(t){var e=encodeURIComponent(t.twitterShareUrl||window.location.href);return"//twitter.com/intent/tweet?text="+t.tweetText+"&url="+e}function i(t){var e=t.pinterestText,r=encodeURIComponent(t.src);return"http://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(t.pinterestShareUrl||window.location.href)+"&media="+r+"&description="+e}var s="lgAfterSlide";return function(){function a(e){return this.shareOptions=[],this.core=e,this.settings=t(t({},r),this.core.settings),this}return a.prototype.init=function(){this.settings.share&&(this.shareOptions=e(this.getDefaultShareOptions(),this.settings.additionalShareOptions),this.setLgShareMarkup(),this.core.outer.find(".lg-share .lg-dropdown").append(this.getShareListHtml()),this.core.LGel.on(s+".share",this.onAfterSlide.bind(this)))},a.prototype.getShareListHtml=function(){var t="";return this.shareOptions.forEach((function(e){t+=e.dropdownHTML})),t},a.prototype.setLgShareMarkup=function(){var t=this;this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.sharePluginStrings.share+'" aria-haspopup="true" aria-expanded="false" class="lg-share lg-icon">\n                <ul class="lg-dropdown" style="position: absolute;"></ul></button>'),this.core.outer.append('<div class="lg-dropdown-overlay"></div>'),this.core.outer.find(".lg-share").first().on("click.lg",(function(){t.core.outer.toggleClass("lg-dropdown-active"),t.core.outer.hasClass("lg-dropdown-active")?t.core.outer.attr("aria-expanded",!0):t.core.outer.attr("aria-expanded",!1)})),this.core.outer.find(".lg-dropdown-overlay").first().on("click.lg",(function(){t.core.outer.removeClass("lg-dropdown-active"),t.core.outer.attr("aria-expanded",!1)}))},a.prototype.onAfterSlide=function(t){var e=this,r=t.detail.index,o=this.core.galleryItems[r];setTimeout((function(){e.shareOptions.forEach((function(t){var r=t.selector;e.core.outer.find(r).attr("href",t.generateLink(o))}))}),100)},a.prototype.getShareListItemHTML=function(t,e){return'<li><a class="lg-share-'+t+'" rel="noopener" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+e+"</span></a></li>"},a.prototype.getDefaultShareOptions=function(){return e(this.settings.facebook?[{type:"facebook",generateLink:o,dropdownHTML:this.getShareListItemHTML("facebook",this.settings.facebookDropdownText),selector:".lg-share-facebook"}]:[],this.settings.twitter?[{type:"twitter",generateLink:n,dropdownHTML:this.getShareListItemHTML("twitter",this.settings.twitterDropdownText),selector:".lg-share-twitter"}]:[],this.settings.pinterest?[{type:"pinterest",generateLink:i,dropdownHTML:this.getShareListItemHTML("pinterest",this.settings.pinterestDropdownText),selector:".lg-share-pinterest"}]:[])},a.prototype.destroy=function(){this.core.outer.find(".lg-dropdown-overlay").remove(),this.core.outer.find(".lg-share").remove(),this.core.LGel.off(".lg.share"),this.core.LGel.off(".share")},a}()}));
;
/**
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).lgHash=e()}(this,(function(){"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},e="lgAfterSlide",i="lgAfterClose",o={hash:!0,galleryId:"1",customSlideName:!1};return function(){function s(e,i){return this.core=e,this.$LG=i,this.settings=t(t({},o),this.core.settings),this}return s.prototype.init=function(){var t=this;this.settings.hash&&(this.oldHash=window.location.hash,setTimeout((function(){t.buildFromHash()}),100),this.core.LGel.on(e+".hash",this.onAfterSlide.bind(this)),this.core.LGel.on(i+".hash",this.onCloseAfter.bind(this)),this.$LG(window).on("hashchange.lg.hash.global"+this.core.lgId,this.onHashchange.bind(this)))},s.prototype.onAfterSlide=function(t){var e=this.core.galleryItems[t.detail.index].slideName;e=this.settings.customSlideName&&e||t.detail.index,history.replaceState?history.replaceState(null,"",window.location.pathname+window.location.search+"#lg="+this.settings.galleryId+"&slide="+e):window.location.hash="lg="+this.settings.galleryId+"&slide="+e},s.prototype.getIndexFromUrl=function(t){void 0===t&&(t=window.location.hash);var e=t.split("&slide=")[1],i=0;if(this.settings.customSlideName)for(var o=0;o<this.core.galleryItems.length;o++){if(this.core.galleryItems[o].slideName===e){i=o;break}}else i=parseInt(e,10);return isNaN(i)?0:i},s.prototype.buildFromHash=function(){var t=window.location.hash;if(t.indexOf("lg="+this.settings.galleryId)>0){this.$LG(document.body).addClass("lg-from-hash");var e=this.getIndexFromUrl(t);return this.core.openGallery(e),!0}},s.prototype.onCloseAfter=function(){this.oldHash&&this.oldHash.indexOf("lg="+this.settings.galleryId)<0?history.replaceState?history.replaceState(null,"",this.oldHash):window.location.hash=this.oldHash:history.replaceState?history.replaceState(null,document.title,window.location.pathname+window.location.search):window.location.hash=""},s.prototype.onHashchange=function(){if(this.core.lgOpened){var t=window.location.hash,e=this.getIndexFromUrl(t);t.indexOf("lg="+this.settings.galleryId)>-1?this.core.slide(e,!1,!1):this.core.lGalleryOn&&this.core.closeGallery()}},s.prototype.closeGallery=function(){this.settings.hash&&this.$LG(document.body).removeClass("lg-from-hash")},s.prototype.destroy=function(){this.core.LGel.off(".lg.hash"),this.core.LGel.off(".hash"),this.$LG(window).off("hashchange.lg.hash.global"+this.core.lgId)},s}()}));
;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   */

  Drupal.behaviors.iconBlocksCollection = {
    attach: function attach(context) {
      // If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the iconBlocksCollection library
      //    within the ifrc_theme.libraries.yml file.
      $(document).ready(function () {
        var selectedDrawer;
        var expandedDrawer = false;
        var open = $('.drawer-links');
        open.click(function (e) {
          e.preventDefault();
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
          var t = this.id;
          var mobileMode;
          var targetPrfix;
          var resetPrfix;
          var drawerContent = $('#drawer-hidden-content-' + t).html();
          var $this = $(this);
          var speed = 500;
          mobileMode = viewportWidth < 960 ? true : false;
          targetPrfix = mobileMode ? '#icon-block-drawer-' : '#desktop-icon-block-drawer.desktop.';
          resetPrfix = !mobileMode ? '#icon-block-drawer-' : '#desktop-icon-block-drawer.desktop.';
          $(targetPrfix + t).html(drawerContent);

          if (mobileMode) {
            if (!$(targetPrfix + t).hasClass('active')) {
              $(targetPrfix + t).slideDown(speed);
              $(targetPrfix + t).addClass('active');
            } else {
              $(targetPrfix + t).slideUp(speed);
              $(targetPrfix + t).removeClass('active');
            }
          } else {
            if (!expandedDrawer) {
              $(targetPrfix + t).slideDown(speed);
              expandedDrawer = true;
            } else if (selectedDrawer != t) {
              $(targetPrfix + selectedDrawer).slideUp(speed);
              $(targetPrfix + t).delay(speed).slideDown(speed);
              expandedDrawer = true;
            } else if (selectedDrawer == t) {
              $(targetPrfix + t).slideUp(speed);
              expandedDrawer = false;
            }

            selectedDrawer = t;
          }

          $(resetPrfix + 'id1').css('display', 'none');
          $(resetPrfix + 'id2').css('display', 'none');
        });
      });
    }
  };
}(document, Drupal, jQuery);

;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   */

  Drupal.behaviors.emergencyStats = {
    attach: function attach() {
      // If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the emergencyStats library
      //    within the ifrc_theme.libraries.yml file.
      var statblock = document.querySelector('.go-data');
      var appealKeys = ['num_beneficiaries', 'amount_requested', 'amount_funded'];
      var appealLabels = ['People targeted', statblock.dataset.funding, statblock.dataset.funded];

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      } // Create elements for go platform stats


      function createElement(item) {
        var label;
        var val;
        var fundingIcon;
        var fundedIcon;

        try {
          label = item.label;
          val = item.val;
          fundingIcon = '<div class="emergency-stats__stat-block">' + '<div class="emergency-stats__stat-icon">' + '<img src="/themes/custom/ifrc_theme/dist/images/funding.svg" />' + '</div><div class="emergency-stats__figures"><div class="emergency-stats__stat-number">' + val + '</div><div class="emergency-stats__stat-title">' + label + '</div></div></div>';
          fundedIcon = '<div class="emergency-stats__stat-block">' + '<div class="emergency-stats__stat-icon">' + '<img src="/themes/custom/ifrc_theme/dist/images/helping-hands.svg" />' + '</div><div class="emergency-stats__stat-number">' + val + '</div><div class="emergency-stats__stat-title">' + label + '</div></div>';

          if (label === statblock.dataset.funding) {
            return fundingIcon;
          }

          if (label === statblock.dataset.funded) {
            return fundedIcon;
          }
        } catch (err) {
          console.log('Something went wrong... ', err);
        }
      }

      function onSuccess(data) {
        var arFields = [];
        var appeal = data.appeals[0];
        var appealID = data.appeals[0]['id'];
        var goID = data.id; //assume field report is always present

        if (appeal) {
          for (var i = 0; i < appealKeys.length; i++) {
            if (appeal[appealKeys[i]]) {
              arFields.push({
                label: appealLabels[i],
                val: numberWithCommas(Math.round(appeal[appealKeys[i]]))
              });
            }
          }
        }

        var html = Array.from(arFields).map(function (x) {
          return createElement(x, arFields.length);
        }).join('');
        $('.go-data-' + goID).html(html);
      }

      function getFeed(url) {
        $.ajax({
          type: 'GET',
          url: url,
          cache: true,
          success: onSuccess,
          error: function error(XMLHttpRequest, textStatus, errorThrown) {
            console.log('Status: ' + textStatus);
            console.log('Error: ' + errorThrown);
          }
        });
      } // Ops update functions


      var goIds;

      function getGoIds() {
        var elements_goId = $('div.emergency-stats').data('goid');
        goIds = $('div.emergency-stats').map(function () {
          return $(this).data('goid');
        }).get();
      }

      getGoIds();

      for (var i = 0; i < goIds.length; i++) {
        getFeed('https://prddsgocdnapi.azureedge.net/api/v2/event/' + goIds[i] + '/');
      }
    }
  };
}(document, Drupal, jQuery);

;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Setup and attach the Share link behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.shareButton = {
    attach: function attach(context) {
      var self = this;
      var $sharelinks = $('.share-button', context);
      $sharelinks.each(function () {
        var $sharelinks = $(this); // Attach click handler for share links.

        var $toggle = $sharelinks.find('.share-button--button');
        $toggle.on('click', function () {
          self.toggleClickEvent($sharelinks, $(this));
        });
      });
    },
    toggleClickEvent: function toggleClickEvent($sharelinks, $toggle) {
      // Identify the matching element.
      var $content = $sharelinks.find('#' + $toggle.attr('aria-controls'));

      if (!$sharelinks.hasClass('open')) {
        // Accordion does not have `.open`, so we are opening the accordion.
        $sharelinks.addClass('open'); // Toggle the `aria-expanded`.

        $toggle.attr('aria-expanded', 'true'); // Toggle the `aria-hidden` attribute on the content.

        $content.attr('aria-hidden', 'false');
      } else {
        // Same as the if, but in reverse.
        $sharelinks.removeClass('open');
        $toggle.attr('aria-expanded', 'false');
        $content.attr('aria-hidden', 'true');
      }
    }
  };
}(document, Drupal, jQuery);

;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   */

  Drupal.behaviors.emergencySlide = {
    attach: function attach(context) {// If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the emergencySlide library
      //    within the ifrc_theme.libraries.yml file.
    }
  };
}(document, Drupal, jQuery);

;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   */

  Drupal.behaviors.emergencySlider = {
    attach: function attach(context) {
      // If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the slider library
      //    within the ifrc_theme.libraries.yml file.
      $(document).ready(function () {
        var $window = $(window);
        var $emergencySlider = $('.slider-emergency-slider');
        var settings = {
          dots: true,
          customPaging: function customPaging(slider, i) {
            return '<div class="ifrcui"><span class="icon-slider-indicator"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div><div class="ifrcui"><span class="icon-slider-indicator-active"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>';
          },
          prevArrow: '<div class="ifrcui previous"><span class="icon-arrow-large" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>',
          nextArrow: '<div class="ifrcui next"><span class="icon-arrow-large" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          cssEase: 'linear',
          responsive: [{
            breakpoint: 1144,
            settings: 'unslick'
          }]
        };
        var isArabic = $('.slider-emergency-slider').data('arabic-emergency-slider');
        isArabic ? settings.rtl = true : settings.ltr = true;
        $emergencySlider.slick(settings);
        $window.on('resize', function () {
          if ($window.width() < 1144) {
            if ($emergencySlider.hasClass('slick-initialized')) {
              return $emergencySlider.slick('unslick');
            }
          }

          if (!$emergencySlider.hasClass('slick-initialized')) {
            return $emergencySlider.slick(settings);
          }
        });
        $('.slickSlider').show();
      });
    }
  };
}(document, Drupal, jQuery);

;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   */

  Drupal.behaviors.nationalSocietySlider = {
    attach: function attach(context) {
      // If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the dosDontsCollection library
      //    within the ifrc_theme.libraries.yml file.
      $(document).ready(function () {
        var $window = $(window);
        var $nsSlider = $('.slider-national-society-slider');
        var settings = {
          dots: false,
          customPaging: function customPaging(slider, i) {
            return '<div class="ifrcui"><span class="icon-slider-indicator"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div><div class="ifrcui"><span class="icon-slider-indicator-active"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>';
          },
          prevArrow: '<div class="ifrcui previous"><span class="icon-arrow-large" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>',
          nextArrow: '<div class="ifrcui next"><span class="icon-arrow-large" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>',
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          responsive: [{
            breakpoint: 605,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }]
        };
        var isArabic = $('.national-society-slider').data('arabic-ns-slider');
        isArabic ? settings.rtl = true : settings.ltr = true;
        $nsSlider.slick(settings);
        $window.on('resize', function () {
          if (!$nsSlider.hasClass('slick-initialized')) {
            return $nsSlider.slick(settings);
          }
        });
        $('.slickSlider').show();
      });
    }
  };
}(document, Drupal, jQuery);

;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   */

  Drupal.behaviors.slider = {
    attach: function attach(context) {
      // If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the slider library
      //    within the ifrc_theme.libraries.yml file.
      $(document).ready(function () {
        var $window = $(window);
        var $latestSlider = $('.slider-latest-slider');
        var settings = {
          dots: true,
          customPaging: function customPaging(slider, i) {
            return '<div class="ifrcui"><span class="icon-slider-indicator"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div><div class="ifrcui"><span class="icon-slider-indicator-active"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>';
          },
          prevArrow: '<div class="ifrcui previous"><span class="icon-arrow-large" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>',
          nextArrow: '<div class="ifrcui next"><span class="icon-arrow-large" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          cssEase: 'linear',
          responsive: [{
            breakpoint: 960,
            settings: 'unslick'
          }]
        };
        var isArabic = $('.slider-latest-slider').data('arabic-latest-slider');
        isArabic ? settings.rtl = true : settings.ltr = true;
        $latestSlider.slick(settings);
        $window.on('resize', function () {
          if ($window.width() < 960) {
            if ($latestSlider.hasClass('slick-initialized')) {
              return $latestSlider.slick('unslick');
            }
          }

          if (!$latestSlider.hasClass('slick-initialized')) {
            return $latestSlider.slick(settings);
          }
        });
        $('.slickSlider').show();
      });
    }
  };
}(document, Drupal, jQuery);

;
(function ($) {

  "use strict";

  $.fn.mobileMenu = function (options) {
    var settings = $.extend({
      targetWrapper: '.navbar-we-mega-menu',
      accordionMenu: 'true',
      toggledClass: 'toggled',
      pageSelector: 'body'
    }, options);

    if ($(window).width() <= 991) {
      $(settings.targetWrapper).addClass('mobile-main-menu');
    }

    var toggleButton = this;

    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $(settings.targetWrapper).addClass('mobile-main-menu');
      } else {
        $(settings.targetWrapper).removeClass('mobile-main-menu');
        $('body').css('overflow', '');
        $('body').css('height', '');
        $('body').css('position', '');
        $(settings.pageSelector).removeClass(settings.toggledClass);
        $(settings.pageSelector).find('.overlay').remove();
        $(settings.pageSelector).css('position', '');
        item.removeClass('open');
        item.find('ul').css('display', '');
      }
    });

    function _weMegaMenuClear() {
      var wrapper = $(settings.pageSelector);
      var overlay = wrapper.find('.overlay');
      overlay.remove();
      wrapper.css({
        'width': '',
        'position': ''
      });
      wrapper.removeClass(settings.toggledClass);
      wrapper.find('div.region-we-mega-menu nav').removeClass('we-mobile-megamenu-active');

      if (overlay.length > 0) {
        wrapper.find('.btn-close').remove();
        overlay.remove();
        $('body').css('overflow', '');
        $('body').css('height', '');
        $('body').css('position', '');
      }
    }

    this.off('click.mobileMenu');
    this.on('click.mobileMenu', function (e) {
      var targetWrapper = $(this).closest('div.region-we-mega-menu').find('nav.navbar-we-mega-menu');
      var wrapper = $(settings.pageSelector);
      if (!wrapper.hasClass(settings.toggledClass)) {
        wrapper.addClass(settings.toggledClass).css('position', 'relative');
        $(settings.targetWrapper).addClass('mobile-main-menu');
        targetWrapper.addClass('we-mobile-megamenu-active');
        if (wrapper.find('.overlay').length == 0) {
          var overlay = $('<div class="overlay"></div>');
          overlay.prependTo(wrapper);
          overlay.click(function () {
            _weMegaMenuClear();
          });
          $('body').css('overflow', 'hidden');
          $('body').css('btn-close', 'hidden');
          $('body').css('height', '100%');
          $('body').css('position', 'relative');
        }
        if (wrapper.find('.btn-close').length == 0) {
          var btnClose = $('<span class="btn-close"></span>');
          btnClose.prependTo(wrapper);

          $('.btn-close').on('click', function (e) {
            _weMegaMenuClear();
            e.preventDefault();
            return false;
          });
        }

      } else {
        _weMegaMenuClear();
      }
      e.preventDefault();
      e.stopPropagation();
    });

    if (settings.accordionMenu == 'true') {
      var targetWrapper = $(this).closest('div.region-we-mega-menu').find('nav.navbar-we-mega-menu');
      var menu = $(targetWrapper).find('ul.we-mega-menu-ul').first();
      var item = menu.find('> li[data-submenu=1]');
      var item_active = menu.find('> li[data-submenu=1].active');
      if ($(window).width() <= 991) {
        item_active.addClass('open');
        item_active.find('> ul').css('display', 'block');
      }
      item.click(function (e) {
        if ($(window).width() <= 991) {
          var $this = $(this);
          var $sub_menu_inner = $this.find('> .we-mega-menu-submenu');
          if (!$this.hasClass('open')) {
            $(item).not($this).removeClass('open');
            item.find('> .we-mega-menu-submenu').slideUp();
            $this.toggleClass('open');
            if ($this.hasClass('open')) {
              $sub_menu_inner.slideDown();
              setTimeout(function () {
                $(targetWrapper).animate({
                  scrollTop: $this.offset().top
                }, 700);
              }, 500);

            } else {
              $sub_menu_inner.slideUp();
            }
            return false;
          }
        }
      });
    }
  }

}(jQuery));;
Drupal.WeMegaMenuFrontEnd = Drupal.WeMegaMenuFrontEnd || {};
Drupal.WeMegaMenuFrontEnd.mobileThreadHold = 1024;
Drupal.WeMegaMenuFrontEnd.megamenuActivated = false;

(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.kMegaMenuFrontEndAction = {
    attach: function (context) {
      $(window).on('load', function() {
        Drupal.WeMegaMenuFrontEnd.init();
        Drupal.WeMegaMenuFrontEnd.mobileMenu();
      })
    }
  };

  Drupal.WeMegaMenuFrontEnd.init = function() {
    if(Drupal.WeMegaMenuFrontEnd.megamenuActivated) {
      return;
    }
    Drupal.WeMegaMenuFrontEnd.megamenuActivated = true;
  	var megamenu = $('nav.navbar-we-mega-menu');
  	if(megamenu.hasClass('click-action')) {
  	  megamenu.find('ul li.dropdown-menu > a').click(function() {
  	  	var li = $(this).closest("li");

  	  	if(li.hasClass("clicked")) {
          li.closest('ul').find('li').removeClass('clicked');
          li.closest('.we-mega-menu-row').find('li').removeClass('clicked');
  	  	  li.removeClass("clicked");
          megamenu.removeClass("has-clicked");
  	  	} else {
          li.closest('ul').find('li').removeClass('clicked');
          li.closest('.we-mega-menu-row').find('li').removeClass('clicked');
	  	    li.closest("ul").children("li.dropdown-menu").removeClass("clicked");
  		    li.addClass("clicked");
          megamenu.addClass("has-clicked");
  	  	}
        if($(window).outerWidth() > Drupal.WeMegaMenuFrontEnd.mobileThreadHold) {
          return false;
        }
  	  });
  	  megamenu.find('ul li.dropdown-menu > a').dblclick(function() {
        if($(window).outerWidth() > Drupal.WeMegaMenuFrontEnd.mobileThreadHold) {
    	  	window.location.href = $(this).attr("href");
        }
  	  });
      megamenu.click(function(event) {
        event.stopPropagation();
      })
      $("body").click(function() {
        megamenu.find("ul li.dropdown-menu.clicked").removeClass('clicked');
        megamenu.removeClass("has-clicked");
      });
  	}
  };

  Drupal.WeMegaMenuFrontEnd.mobileMenu = function() {
    $('div.region-we-mega-menu a.navbar-toggle').mobileMenu();
    
    // $('div.region-we-mega-menu a.navbar-toggle').mobileMenu({
      // pageSelector: 'body',
      // targetWrapper: '.navbar-we-mega-menu'
    // });

    // $('#menu-toggle-wemegamenu').mobileMenu();
  };
})(jQuery, Drupal, drupalSettings);;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Overrides script for the Drupal mega menu module to:
   *
   * Initializing the mmenu.js plugin to create mobile version of the nav
   * Moves Drupal block elements into the menu panels
   * Event handlers for clicks on menu and outside the menu (close menu)
   * Adds css classes accordingly
   */

  Drupal.behaviors.megamenuFrontend = {
    attach: function attach(context) {
      /**
      $('.megamenu ul.topLvl > .megamenu-li.mmenu-item').mouseover(function() {
        $(this)
          .find('> .megamenu-sub')
          .addClass('active');
      });
      $('.megamenu ul.topLvl > .megamenu-li.mmenu-item').mouseout(function() {
        $(this)
          .find('> .megamenu-sub')
          .removeClass('active');
      });**/

      /** on click behavior, if used needs css update (not done)**/
      var closeTimer;
      var selectedNav = null;
      var timerCreated = false;
      
      /**
       ** copy custom blocks in the navigation
       **/


      $('.megamenu ul.topLvl > li:not(".temp_block2del") > ul.megamenu-sub').append('<li class="megamenu-li mmenu-item block target"></li>');
      $('.megamenu ul.topLvl > li:not(".temp_block2del") > ul.megamenu-sub > li').addClass('mm-opened mm-listitem_opened');
      var topnodes = $('.megamenu ul.topLvl > li:not(".temp_block2del") > ul.megamenu-sub');
      var covers = $('.megamenu ul.topLvl > li.temp_block2del');

      for (var i = 0; i < topnodes.length; i++) {
        $(covers[i]).find('.blockcontent').appendTo($(topnodes[i]).find('.target'));
      }
      /**
       ** Remove copied blocks
       **/


      $('li.temp_block2del').remove();
      /**
       ** get language switcher code and add to bottom of mobile menu
       **/

      var currLanguage = drupalSettings.path.currentLanguage;
      var lngLabels = {
        en: 'English',
        fr: 'Français',
        es: 'Español',
        ar: 'العربية'
      };
      var languagesMenu = $('.dropdown-language-item.dropbutton').find('a');
      var arLinks = [];
      var ulLang = '<option selected>' + lngLabels[currLanguage] + '</option>';
      languagesMenu.map(function (lngItem) {
        /**
        arLinks.push(
          '<a class=\'lnglnk\' href=\'' +
            languagesMenu[lngItem].href +
            '\'>' +
            languagesMenu[lngItem].innerText +
            '</a>'
        );
        **/
        ulLang = ulLang + '<option value=\'' + languagesMenu[lngItem].href + '\'>' + languagesMenu[lngItem].innerText + '</option>';
      });
      ulLang = '<select class="lSelect" onchange="window.location=this.value">' + ulLang + '</select>';
      /**
       ** initializing the mmenu.js for mobiles
       **/

      var lngSearchLabels = {
        en: 'search',
        fr: 'rechercher',
        es: 'buscar',
        ar: 'بحث'
      };
      var txtPlaceholder = lngSearchLabels[currLanguage];
      var pathLngSearch = currLanguage.replace('en', '');
      var menu = new Mmenu('#mainNavigation', {
        slidingSubmenus: false,
        title: 'IFRC',
        extensions: {
          all: ['multiline', 'position-front'],
          '(max-width: 550px)': ['fullscreen']
        },
        navbars: [{
          position: 'top',
          content: ['<form action="' + (pathLngSearch == '' ? '' : '/' + pathLngSearch) + '/search" method="get"><input data-drupal-selector="edit-fulltext" type="text" name="fulltext" value="" size="30" maxlength="128" placeholder="' + txtPlaceholder + '..." class="form-text"></form>']
        }, {
          position: 'bottom',
          content: [ulLang]
        }]
      }, {
        // configuration
        panelNodetype: ['div', 'ul'],
        offCanvas: {
          clone: true
        }
      }); //var drupalSearch = $('views-exposed-form-elastic-global-search-page');
      // this section ensures only one top node is expanded

      var api = menu.API;
      var openedPanel;
      api.bind('openPanel:start', function (panel) {
        if (openedPanel != undefined && openedPanel != panel) {
          api.closePanel(openedPanel);
        }

        openedPanel = panel;
      }); // open on label click and not only arrows icon

      var mmTopLinks = $('.topLvl > .megamenu-li > a:first-child[href="#"].mmaLink.mm-listitem__text');

      for (var i = 0; i < mmTopLinks.length; i++) {
        $(mmTopLinks[i])[0].href = $(mmTopLinks[i]).next()[0].hash;
      }

      $('.mm-panel').removeClass('mm-hidden');
      /** finally remove # from desktop menu to avoid search issues **/

      $('.megamenu ul.topLvl > .megamenu-li.mmenu-item a[href="#"]').removeAttr('href');
    }
  };
}(document, Drupal, jQuery);

;
/**
 * @file
 * better_exposed_filters.js
 *
 * Provides some client-side functionality for the Better Exposed Filters module.
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.betterExposedFilters = {
    attach: function (context, settings) {
      // Add highlight class to checked checkboxes for better theming.
      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
        // Highlight newly selected checkboxes.
        .change(function () {
          _bef_highlight(this, context);
        })
        .filter(':checked').closest('.form-item', context).addClass('highlight');
    }
  };

  /*
   * Helper functions
   */

  /**
   * Adds/Removes the highlight class from the form-item div as appropriate.
   */
  function _bef_highlight(elem, context) {
    $elem = $(elem, context);
    $elem.attr('checked')
      ? $elem.closest('.form-item', context).addClass('highlight')
      : $elem.closest('.form-item', context).removeClass('highlight');
  }

})(jQuery, Drupal, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, _ref) {
  var isTabbable = _ref.isTabbable;
  $.extend($.expr[':'], {
    tabbable: function tabbable(element) {
      Drupal.deprecationError({
        message: 'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 10.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'
      });

      if (element.tagName === 'SUMMARY' || element.tagName === 'DETAILS') {
        var tabIndex = element.getAttribute('tabIndex');

        if (tabIndex === null || tabIndex < 0) {
          return false;
        }
      }

      return isTabbable(element);
    }
  });
})(jQuery, Drupal, window.tabbable);;
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);;
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.jqueryUiDatepickerLocale = {
    attach: function attach(context, settings) {
      $.datepicker.regional['drupal-locale'] = $.extend({
        closeText: Drupal.t('Done'),
        prevText: Drupal.t('Prev'),
        nextText: Drupal.t('Next'),
        currentText: Drupal.t('Today'),
        monthNames: [Drupal.t('January', {}, { context: 'Long month name' }), Drupal.t('February', {}, { context: 'Long month name' }), Drupal.t('March', {}, { context: 'Long month name' }), Drupal.t('April', {}, { context: 'Long month name' }), Drupal.t('May', {}, { context: 'Long month name' }), Drupal.t('June', {}, { context: 'Long month name' }), Drupal.t('July', {}, { context: 'Long month name' }), Drupal.t('August', {}, { context: 'Long month name' }), Drupal.t('September', {}, { context: 'Long month name' }), Drupal.t('October', {}, { context: 'Long month name' }), Drupal.t('November', {}, { context: 'Long month name' }), Drupal.t('December', {}, { context: 'Long month name' })],
        monthNamesShort: [Drupal.t('Jan'), Drupal.t('Feb'), Drupal.t('Mar'), Drupal.t('Apr'), Drupal.t('May'), Drupal.t('Jun'), Drupal.t('Jul'), Drupal.t('Aug'), Drupal.t('Sep'), Drupal.t('Oct'), Drupal.t('Nov'), Drupal.t('Dec')],
        dayNames: [Drupal.t('Sunday'), Drupal.t('Monday'), Drupal.t('Tuesday'), Drupal.t('Wednesday'), Drupal.t('Thursday'), Drupal.t('Friday'), Drupal.t('Saturday')],
        dayNamesShort: [Drupal.t('Sun'), Drupal.t('Mon'), Drupal.t('Tue'), Drupal.t('Wed'), Drupal.t('Thu'), Drupal.t('Fri'), Drupal.t('Sat')],
        dayNamesMin: [Drupal.t('Su'), Drupal.t('Mo'), Drupal.t('Tu'), Drupal.t('We'), Drupal.t('Th'), Drupal.t('Fr'), Drupal.t('Sa')],
        dateFormat: Drupal.t('mm/dd/yy'),
        firstDay: 0,
        isRTL: 0
      }, drupalSettings.jquery.ui.datepicker);
      $.datepicker.setDefaults($.datepicker.regional['drupal-locale']);
    }
  };
})(jQuery, Drupal, drupalSettings);
;
/*!
 * jQuery UI Datepicker 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../keycode"],e):e(jQuery)}(function(V){"use strict";var n;function e(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",selectMonthLabel:"Select month",selectYearLabel:"Select year"},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,onUpdateDatepicker:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},V.extend(this._defaults,this.regional[""]),this.regional.en=V.extend(!0,{},this.regional[""]),this.regional["en-US"]=V.extend(!0,{},this.regional.en),this.dpDiv=a(V("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",t,function(){V(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&V(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&V(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",t,d)}function d(){V.datepicker._isDisabledDatepicker((n.inline?n.dpDiv.parent():n.input)[0])||(V(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),V(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&V(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&V(this).addClass("ui-datepicker-next-hover"))}function c(e,t){for(var a in V.extend(e,t),t)null==t[a]&&(e[a]=t[a]);return e}return V.extend(V.ui,{datepicker:{version:"1.13.0"}}),V.extend(e.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return c(this._defaults,e||{}),this},_attachDatepicker:function(e,t){var a,i=e.nodeName.toLowerCase(),s="div"===i||"span"===i;e.id||(this.uuid+=1,e.id="dp"+this.uuid),(a=this._newInst(V(e),s)).settings=V.extend({},t||{}),"input"===i?this._connectDatepicker(e,a):s&&this._inlineDatepicker(e,a)},_newInst:function(e,t){return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?a(V("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,t){var a=V(e);t.append=V([]),t.trigger=V([]),a.hasClass(this.markerClassName)||(this._attachments(a,t),a.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(t),V.data(e,"datepicker",t),t.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,t){var a,i=this._get(t,"appendText"),s=this._get(t,"isRTL");t.append&&t.append.remove(),i&&(t.append=V("<span>").addClass(this._appendClass).text(i),e[s?"before":"after"](t.append)),e.off("focus",this._showDatepicker),t.trigger&&t.trigger.remove(),"focus"!==(a=this._get(t,"showOn"))&&"both"!==a||e.on("focus",this._showDatepicker),"button"!==a&&"both"!==a||(i=this._get(t,"buttonText"),a=this._get(t,"buttonImage"),this._get(t,"buttonImageOnly")?t.trigger=V("<img>").addClass(this._triggerClass).attr({src:a,alt:i,title:i}):(t.trigger=V("<button type='button'>").addClass(this._triggerClass),a?t.trigger.html(V("<img>").attr({src:a,alt:i,title:i})):t.trigger.text(i)),e[s?"before":"after"](t.trigger),t.trigger.on("click",function(){return V.datepicker._datepickerShowing&&V.datepicker._lastInput===e[0]?V.datepicker._hideDatepicker():(V.datepicker._datepickerShowing&&V.datepicker._lastInput!==e[0]&&V.datepicker._hideDatepicker(),V.datepicker._showDatepicker(e[0])),!1}))},_autoSize:function(e){var t,a,i,s,r,n;this._get(e,"autoSize")&&!e.inline&&(r=new Date(2009,11,20),(n=this._get(e,"dateFormat")).match(/[DM]/)&&(t=function(e){for(s=i=a=0;s<e.length;s++)e[s].length>a&&(a=e[s].length,i=s);return i},r.setMonth(t(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),r.setDate(t(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-r.getDay())),e.input.attr("size",this._formatDate(e,r).length))},_inlineDatepicker:function(e,t){var a=V(e);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(t.dpDiv),V.data(e,"datepicker",t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block"))},_dialogDatepicker:function(e,t,a,i,s){var r,n=this._dialogInst;return n||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=V("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),V("body").append(this._dialogInput),(n=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},V.data(this._dialogInput[0],"datepicker",n)),c(n.settings,i||{}),t=t&&t.constructor===Date?this._formatDate(n,t):t,this._dialogInput.val(t),this._pos=s?s.length?s:[s.pageX,s.pageY]:null,this._pos||(r=document.documentElement.clientWidth,i=document.documentElement.clientHeight,t=document.documentElement.scrollLeft||document.body.scrollLeft,s=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[r/2-100+t,i/2-150+s]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),V.blockUI&&V.blockUI(this.dpDiv),V.data(this._dialogInput[0],"datepicker",n),this},_destroyDatepicker:function(e){var t,a=V(e),i=V.data(e,"datepicker");a.hasClass(this.markerClassName)&&(t=e.nodeName.toLowerCase(),V.removeData(e,"datepicker"),"input"===t?(i.append.remove(),i.trigger.remove(),a.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==t&&"span"!==t||a.removeClass(this.markerClassName).empty(),n===i&&(n=null,this._curInst=null))},_enableDatepicker:function(t){var e,a=V(t),i=V.data(t,"datepicker");a.hasClass(this.markerClassName)&&("input"===(e=t.nodeName.toLowerCase())?(t.disabled=!1,i.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==e&&"span"!==e||((a=a.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=V.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var e,a=V(t),i=V.data(t,"datepicker");a.hasClass(this.markerClassName)&&("input"===(e=t.nodeName.toLowerCase())?(t.disabled=!0,i.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==e&&"span"!==e||((a=a.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=V.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(e){try{return V.data(e,"datepicker")}catch(e){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,a){var i,s,r=this._getInst(e);if(2===arguments.length&&"string"==typeof t)return"defaults"===t?V.extend({},V.datepicker._defaults):r?"all"===t?V.extend({},r.settings):this._get(r,t):null;i=t||{},"string"==typeof t&&((i={})[t]=a),r&&(this._curInst===r&&this._hideDatepicker(),s=this._getDateDatepicker(e,!0),t=this._getMinMaxDate(r,"min"),a=this._getMinMaxDate(r,"max"),c(r.settings,i),null!==t&&void 0!==i.dateFormat&&void 0===i.minDate&&(r.settings.minDate=this._formatDate(r,t)),null!==a&&void 0!==i.dateFormat&&void 0===i.maxDate&&(r.settings.maxDate=this._formatDate(r,a)),"disabled"in i&&(i.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(V(e),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r))},_changeDatepicker:function(e,t,a){this._optionDatepicker(e,t,a)},_refreshDatepicker:function(e){e=this._getInst(e);e&&this._updateDatepicker(e)},_setDateDatepicker:function(e,t){e=this._getInst(e);e&&(this._setDate(e,t),this._updateDatepicker(e),this._updateAlternate(e))},_getDateDatepicker:function(e,t){e=this._getInst(e);return e&&!e.inline&&this._setDateFromField(e,t),e?this._getDate(e):null},_doKeyDown:function(e){var t,a,i=V.datepicker._getInst(e.target),s=!0,r=i.dpDiv.is(".ui-datepicker-rtl");if(i._keyEvent=!0,V.datepicker._datepickerShowing)switch(e.keyCode){case 9:V.datepicker._hideDatepicker(),s=!1;break;case 13:return(a=V("td."+V.datepicker._dayOverClass+":not(."+V.datepicker._currentClass+")",i.dpDiv))[0]&&V.datepicker._selectDay(e.target,i.selectedMonth,i.selectedYear,a[0]),(t=V.datepicker._get(i,"onSelect"))?(a=V.datepicker._formatDate(i),t.apply(i.input?i.input[0]:null,[a,i])):V.datepicker._hideDatepicker(),!1;case 27:V.datepicker._hideDatepicker();break;case 33:V.datepicker._adjustDate(e.target,e.ctrlKey?-V.datepicker._get(i,"stepBigMonths"):-V.datepicker._get(i,"stepMonths"),"M");break;case 34:V.datepicker._adjustDate(e.target,e.ctrlKey?+V.datepicker._get(i,"stepBigMonths"):+V.datepicker._get(i,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&V.datepicker._clearDate(e.target),s=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&V.datepicker._gotoToday(e.target),s=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&V.datepicker._adjustDate(e.target,r?1:-1,"D"),s=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&V.datepicker._adjustDate(e.target,e.ctrlKey?-V.datepicker._get(i,"stepBigMonths"):-V.datepicker._get(i,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&V.datepicker._adjustDate(e.target,-7,"D"),s=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&V.datepicker._adjustDate(e.target,r?-1:1,"D"),s=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&V.datepicker._adjustDate(e.target,e.ctrlKey?+V.datepicker._get(i,"stepBigMonths"):+V.datepicker._get(i,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&V.datepicker._adjustDate(e.target,7,"D"),s=e.ctrlKey||e.metaKey;break;default:s=!1}else 36===e.keyCode&&e.ctrlKey?V.datepicker._showDatepicker(this):s=!1;s&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t,a=V.datepicker._getInst(e.target);if(V.datepicker._get(a,"constrainInput"))return t=V.datepicker._possibleChars(V.datepicker._get(a,"dateFormat")),a=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||a<" "||!t||-1<t.indexOf(a)},_doKeyUp:function(e){var t=V.datepicker._getInst(e.target);if(t.input.val()!==t.lastVal)try{V.datepicker.parseDate(V.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,V.datepicker._getFormatConfig(t))&&(V.datepicker._setDateFromField(t),V.datepicker._updateAlternate(t),V.datepicker._updateDatepicker(t))}catch(e){}return!0},_showDatepicker:function(e){var t,a,i,s;"input"!==(e=e.target||e).nodeName.toLowerCase()&&(e=V("input",e.parentNode)[0]),V.datepicker._isDisabledDatepicker(e)||V.datepicker._lastInput===e||(s=V.datepicker._getInst(e),V.datepicker._curInst&&V.datepicker._curInst!==s&&(V.datepicker._curInst.dpDiv.stop(!0,!0),s&&V.datepicker._datepickerShowing&&V.datepicker._hideDatepicker(V.datepicker._curInst.input[0])),!1!==(a=(i=V.datepicker._get(s,"beforeShow"))?i.apply(e,[e,s]):{})&&(c(s.settings,a),s.lastVal=null,V.datepicker._lastInput=e,V.datepicker._setDateFromField(s),V.datepicker._inDialog&&(e.value=""),V.datepicker._pos||(V.datepicker._pos=V.datepicker._findPos(e),V.datepicker._pos[1]+=e.offsetHeight),t=!1,V(e).parents().each(function(){return!(t|="fixed"===V(this).css("position"))}),i={left:V.datepicker._pos[0],top:V.datepicker._pos[1]},V.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),V.datepicker._updateDatepicker(s),i=V.datepicker._checkOffset(s,i,t),s.dpDiv.css({position:V.datepicker._inDialog&&V.blockUI?"static":t?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),s.inline||(a=V.datepicker._get(s,"showAnim"),i=V.datepicker._get(s,"duration"),s.dpDiv.css("z-index",function(e){for(var t,a;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(a=parseInt(e.css("zIndex"),10),!isNaN(a)&&0!==a))return a;e=e.parent()}return 0}(V(e))+1),V.datepicker._datepickerShowing=!0,V.effects&&V.effects.effect[a]?s.dpDiv.show(a,V.datepicker._get(s,"showOptions"),i):s.dpDiv[a||"show"](a?i:null),V.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),V.datepicker._curInst=s)))},_updateDatepicker:function(e){this.maxRows=4,(n=e).dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var t,a=this._getNumberOfMonths(e),i=a[1],s=e.dpDiv.find("."+this._dayOverClass+" a"),r=V.datepicker._get(e,"onUpdateDatepicker");0<s.length&&d.apply(s.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),1<i&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",17*i+"em"),e.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===V.datepicker._curInst&&V.datepicker._datepickerShowing&&V.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(t=e.yearshtml,setTimeout(function(){t===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year").first().replaceWith(e.yearshtml),t=e.yearshtml=null},0)),r&&r.apply(e.input?e.input[0]:null,[e])},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(e,t,a){var i=e.dpDiv.outerWidth(),s=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,n=e.input?e.input.outerHeight():0,d=document.documentElement.clientWidth+(a?0:V(document).scrollLeft()),c=document.documentElement.clientHeight+(a?0:V(document).scrollTop());return t.left-=this._get(e,"isRTL")?i-r:0,t.left-=a&&t.left===e.input.offset().left?V(document).scrollLeft():0,t.top-=a&&t.top===e.input.offset().top+n?V(document).scrollTop():0,t.left-=Math.min(t.left,t.left+i>d&&i<d?Math.abs(t.left+i-d):0),t.top-=Math.min(t.top,t.top+s>c&&s<c?Math.abs(s+n):0),t},_findPos:function(e){for(var t=this._getInst(e),a=this._get(t,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||V.expr.pseudos.hidden(e));)e=e[a?"previousSibling":"nextSibling"];return[(t=V(e).offset()).left,t.top]},_hideDatepicker:function(e){var t,a,i=this._curInst;!i||e&&i!==V.data(e,"datepicker")||this._datepickerShowing&&(t=this._get(i,"showAnim"),a=this._get(i,"duration"),e=function(){V.datepicker._tidyDialog(i)},V.effects&&(V.effects.effect[t]||V.effects[t])?i.dpDiv.hide(t,V.datepicker._get(i,"showOptions"),a,e):i.dpDiv["slideDown"===t?"slideUp":"fadeIn"===t?"fadeOut":"hide"](t?a:null,e),t||e(),this._datepickerShowing=!1,(e=this._get(i,"onClose"))&&e.apply(i.input?i.input[0]:null,[i.input?i.input.val():"",i]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),V.blockUI&&(V.unblockUI(),V("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){var t;V.datepicker._curInst&&(t=V(e.target),e=V.datepicker._getInst(t[0]),(t[0].id===V.datepicker._mainDivId||0!==t.parents("#"+V.datepicker._mainDivId).length||t.hasClass(V.datepicker.markerClassName)||t.closest("."+V.datepicker._triggerClass).length||!V.datepicker._datepickerShowing||V.datepicker._inDialog&&V.blockUI)&&(!t.hasClass(V.datepicker.markerClassName)||V.datepicker._curInst===e)||V.datepicker._hideDatepicker())},_adjustDate:function(e,t,a){var i=V(e),e=this._getInst(i[0]);this._isDisabledDatepicker(i[0])||(this._adjustInstDate(e,t,a),this._updateDatepicker(e))},_gotoToday:function(e){var t=V(e),a=this._getInst(t[0]);this._get(a,"gotoCurrent")&&a.currentDay?(a.selectedDay=a.currentDay,a.drawMonth=a.selectedMonth=a.currentMonth,a.drawYear=a.selectedYear=a.currentYear):(e=new Date,a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear()),this._notifyChange(a),this._adjustDate(t)},_selectMonthYear:function(e,t,a){var i=V(e),e=this._getInst(i[0]);e["selected"+("M"===a?"Month":"Year")]=e["draw"+("M"===a?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(i)},_selectDay:function(e,t,a,i){var s=V(e);V(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(s[0])||((s=this._getInst(s[0])).selectedDay=s.currentDay=parseInt(V("a",i).attr("data-date")),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=a,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear)))},_clearDate:function(e){e=V(e);this._selectDate(e,"")},_selectDate:function(e,t){var a=V(e),e=this._getInst(a[0]);t=null!=t?t:this._formatDate(e),e.input&&e.input.val(t),this._updateAlternate(e),(a=this._get(e,"onSelect"))?a.apply(e.input?e.input[0]:null,[t,e]):e.input&&e.input.trigger("change"),e.inline?this._updateDatepicker(e):(this._hideDatepicker(),this._lastInput=e.input[0],"object"!=typeof e.input[0]&&e.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var t,a,i=this._get(e,"altField");i&&(t=this._get(e,"altFormat")||this._get(e,"dateFormat"),a=this._getDate(e),e=this.formatDate(t,a,this._getFormatConfig(e)),V(document).find(i).val(e))},noWeekends:function(e){e=e.getDay();return[0<e&&e<6,""]},iso8601Week:function(e){var t=new Date(e.getTime());return t.setDate(t.getDate()+4-(t.getDay()||7)),e=t.getTime(),t.setMonth(0),t.setDate(1),Math.floor(Math.round((e-t)/864e5)/7)+1},parseDate:function(t,s,e){if(null==t||null==s)throw"Invalid arguments";if(""===(s="object"==typeof s?s.toString():s+""))return null;for(var a,i,r,n=0,d=(e?e.shortYearCutoff:null)||this._defaults.shortYearCutoff,d="string"!=typeof d?d:(new Date).getFullYear()%100+parseInt(d,10),c=(e?e.dayNamesShort:null)||this._defaults.dayNamesShort,o=(e?e.dayNames:null)||this._defaults.dayNames,l=(e?e.monthNamesShort:null)||this._defaults.monthNamesShort,h=(e?e.monthNames:null)||this._defaults.monthNames,u=-1,p=-1,g=-1,_=-1,f=!1,k=function(e){e=v+1<t.length&&t.charAt(v+1)===e;return e&&v++,e},D=function(e){var t=k(e),t="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,t=new RegExp("^\\d{"+("y"===e?t:1)+","+t+"}"),t=s.substring(n).match(t);if(!t)throw"Missing number at position "+n;return n+=t[0].length,parseInt(t[0],10)},m=function(e,t,a){var i=-1,t=V.map(k(e)?a:t,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(V.each(t,function(e,t){var a=t[1];if(s.substr(n,a.length).toLowerCase()===a.toLowerCase())return i=t[0],n+=a.length,!1}),-1!==i)return i+1;throw"Unknown name at position "+n},y=function(){if(s.charAt(n)!==t.charAt(v))throw"Unexpected literal at position "+n;n++},v=0;v<t.length;v++)if(f)"'"!==t.charAt(v)||k("'")?y():f=!1;else switch(t.charAt(v)){case"d":g=D("d");break;case"D":m("D",c,o);break;case"o":_=D("o");break;case"m":p=D("m");break;case"M":p=m("M",l,h);break;case"y":u=D("y");break;case"@":u=(r=new Date(D("@"))).getFullYear(),p=r.getMonth()+1,g=r.getDate();break;case"!":u=(r=new Date((D("!")-this._ticksTo1970)/1e4)).getFullYear(),p=r.getMonth()+1,g=r.getDate();break;case"'":k("'")?y():f=!0;break;default:y()}if(n<s.length&&(i=s.substr(n),!/^\s+/.test(i)))throw"Extra/unparsed characters found in date: "+i;if(-1===u?u=(new Date).getFullYear():u<100&&(u+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u<=d?0:-100)),-1<_)for(p=1,g=_;;){if(g<=(a=this._getDaysInMonth(u,p-1)))break;p++,g-=a}if((r=this._daylightSavingAdjust(new Date(u,p-1,g))).getFullYear()!==u||r.getMonth()+1!==p||r.getDate()!==g)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(t,e,a){if(!e)return"";function s(e){return(e=n+1<t.length&&t.charAt(n+1)===e)&&n++,e}function i(e,t,a){var i=""+t;if(s(e))for(;i.length<a;)i="0"+i;return i}function r(e,t,a,i){return(s(e)?i:a)[t]}var n,d=(a?a.dayNamesShort:null)||this._defaults.dayNamesShort,c=(a?a.dayNames:null)||this._defaults.dayNames,o=(a?a.monthNamesShort:null)||this._defaults.monthNamesShort,l=(a?a.monthNames:null)||this._defaults.monthNames,h="",u=!1;if(e)for(n=0;n<t.length;n++)if(u)"'"!==t.charAt(n)||s("'")?h+=t.charAt(n):u=!1;else switch(t.charAt(n)){case"d":h+=i("d",e.getDate(),2);break;case"D":h+=r("D",e.getDay(),d,c);break;case"o":h+=i("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":h+=i("m",e.getMonth()+1,2);break;case"M":h+=r("M",e.getMonth(),o,l);break;case"y":h+=s("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":h+=e.getTime();break;case"!":h+=1e4*e.getTime()+this._ticksTo1970;break;case"'":s("'")?h+="'":u=!0;break;default:h+=t.charAt(n)}return h},_possibleChars:function(t){for(var e="",a=!1,i=function(e){e=s+1<t.length&&t.charAt(s+1)===e;return e&&s++,e},s=0;s<t.length;s++)if(a)"'"!==t.charAt(s)||i("'")?e+=t.charAt(s):a=!1;else switch(t.charAt(s)){case"d":case"m":case"y":case"@":e+="0123456789";break;case"D":case"M":return null;case"'":i("'")?e+="'":a=!0;break;default:e+=t.charAt(s)}return e},_get:function(e,t){return(void 0!==e.settings[t]?e.settings:this._defaults)[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var a=this._get(e,"dateFormat"),i=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),r=s,n=this._getFormatConfig(e);try{r=this.parseDate(a,i,n)||s}catch(e){i=t?"":i}e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),e.currentDay=i?r.getDate():0,e.currentMonth=i?r.getMonth():0,e.currentYear=i?r.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(d,e,t){var a,i,e=null==e||""===e?t:"string"==typeof e?function(e){try{return V.datepicker.parseDate(V.datepicker._get(d,"dateFormat"),e,V.datepicker._getFormatConfig(d))}catch(e){}for(var t=(e.toLowerCase().match(/^c/)?V.datepicker._getDate(d):null)||new Date,a=t.getFullYear(),i=t.getMonth(),s=t.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,n=r.exec(e);n;){switch(n[2]||"d"){case"d":case"D":s+=parseInt(n[1],10);break;case"w":case"W":s+=7*parseInt(n[1],10);break;case"m":case"M":i+=parseInt(n[1],10),s=Math.min(s,V.datepicker._getDaysInMonth(a,i));break;case"y":case"Y":a+=parseInt(n[1],10),s=Math.min(s,V.datepicker._getDaysInMonth(a,i))}n=r.exec(e)}return new Date(a,i,s)}(e):"number"==typeof e?isNaN(e)?t:(a=e,(i=new Date).setDate(i.getDate()+a),i):new Date(e.getTime());return(e=e&&"Invalid Date"===e.toString()?t:e)&&(e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0)),this._daylightSavingAdjust(e)},_daylightSavingAdjust:function(e){return e?(e.setHours(12<e.getHours()?e.getHours()+2:0),e):null},_setDate:function(e,t,a){var i=!t,s=e.selectedMonth,r=e.selectedYear,t=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=t.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=t.getMonth(),e.drawYear=e.selectedYear=e.currentYear=t.getFullYear(),s===e.selectedMonth&&r===e.selectedYear||a||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(i?"":this._formatDate(e))},_getDate:function(e){return!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),a="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){V.datepicker._adjustDate(a,-t,"M")},next:function(){V.datepicker._adjustDate(a,+t,"M")},hide:function(){V.datepicker._hideDatepicker()},today:function(){V.datepicker._gotoToday(a)},selectDay:function(){return V.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return V.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return V.datepicker._selectMonthYear(a,this,"Y"),!1}};V(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,a,i,s,r,n,d,c,o,l,h,u,p,g,_,f,k,D,m,y,v,M,b,w,C,I,x,Y,S,F,N,T,A=new Date,K=this._daylightSavingAdjust(new Date(A.getFullYear(),A.getMonth(),A.getDate())),j=this._get(e,"isRTL"),O=this._get(e,"showButtonPanel"),L=this._get(e,"hideIfNoPrevNext"),R=this._get(e,"navigationAsDateFormat"),H=this._getNumberOfMonths(e),W=this._get(e,"showCurrentAtPos"),A=this._get(e,"stepMonths"),E=1!==H[0]||1!==H[1],U=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),P=this._getMinMaxDate(e,"min"),z=this._getMinMaxDate(e,"max"),B=e.drawMonth-W,J=e.drawYear;if(B<0&&(B+=12,J--),z)for(t=this._daylightSavingAdjust(new Date(z.getFullYear(),z.getMonth()-H[0]*H[1]+1,z.getDate())),t=P&&t<P?P:t;this._daylightSavingAdjust(new Date(J,B,1))>t;)--B<0&&(B=11,J--);for(e.drawMonth=B,e.drawYear=J,W=this._get(e,"prevText"),W=R?this.formatDate(W,this._daylightSavingAdjust(new Date(J,B-A,1)),this._getFormatConfig(e)):W,a=this._canAdjustMonth(e,-1,J,B)?V("<a>").attr({class:"ui-datepicker-prev ui-corner-all","data-handler":"prev","data-event":"click",title:W}).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(j?"e":"w")).text(W))[0].outerHTML:L?"":V("<a>").attr({class:"ui-datepicker-prev ui-corner-all ui-state-disabled",title:W}).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(j?"e":"w")).text(W))[0].outerHTML,W=this._get(e,"nextText"),W=R?this.formatDate(W,this._daylightSavingAdjust(new Date(J,B+A,1)),this._getFormatConfig(e)):W,i=this._canAdjustMonth(e,1,J,B)?V("<a>").attr({class:"ui-datepicker-next ui-corner-all","data-handler":"next","data-event":"click",title:W}).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(j?"w":"e")).text(W))[0].outerHTML:L?"":V("<a>").attr({class:"ui-datepicker-next ui-corner-all ui-state-disabled",title:W}).append(V("<span>").attr("class","ui-icon ui-icon-circle-triangle-"+(j?"w":"e")).text(W))[0].outerHTML,A=this._get(e,"currentText"),L=this._get(e,"gotoCurrent")&&e.currentDay?U:K,A=R?this.formatDate(A,L,this._getFormatConfig(e)):A,W="",e.inline||(W=V("<button>").attr({type:"button",class:"ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all","data-handler":"hide","data-event":"click"}).text(this._get(e,"closeText"))[0].outerHTML),R="",O&&(R=V("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(j?W:"").append(this._isInRange(e,L)?V("<button>").attr({type:"button",class:"ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all","data-handler":"today","data-event":"click"}).text(A):"").append(j?"":W)[0].outerHTML),s=parseInt(this._get(e,"firstDay"),10),s=isNaN(s)?0:s,r=this._get(e,"showWeek"),n=this._get(e,"dayNames"),d=this._get(e,"dayNamesMin"),c=this._get(e,"monthNames"),o=this._get(e,"monthNamesShort"),l=this._get(e,"beforeShowDay"),h=this._get(e,"showOtherMonths"),u=this._get(e,"selectOtherMonths"),p=this._getDefaultDate(e),g="",f=0;f<H[0];f++){for(k="",this.maxRows=4,D=0;D<H[1];D++){if(m=this._daylightSavingAdjust(new Date(J,B,e.selectedDay)),y=" ui-corner-all",v="",E){if(v+="<div class='ui-datepicker-group",1<H[1])switch(D){case 0:v+=" ui-datepicker-group-first",y=" ui-corner-"+(j?"right":"left");break;case H[1]-1:v+=" ui-datepicker-group-last",y=" ui-corner-"+(j?"left":"right");break;default:v+=" ui-datepicker-group-middle",y=""}v+="'>"}for(v+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+y+"'>"+(/all|left/.test(y)&&0===f?j?i:a:"")+(/all|right/.test(y)&&0===f?j?a:i:"")+this._generateMonthYearHeader(e,B,J,P,z,0<f||0<D,c,o)+"</div><table class='ui-datepicker-calendar'><thead><tr>",M=r?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",_=0;_<7;_++)M+="<th scope='col'"+(5<=(_+s+6)%7?" class='ui-datepicker-week-end'":"")+"><span title='"+n[b=(_+s)%7]+"'>"+d[b]+"</span></th>";for(v+=M+"</tr></thead><tbody>",C=this._getDaysInMonth(J,B),J===e.selectedYear&&B===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,C)),w=(this._getFirstDayOfMonth(J,B)-s+7)%7,C=Math.ceil((w+C)/7),I=E&&this.maxRows>C?this.maxRows:C,this.maxRows=I,x=this._daylightSavingAdjust(new Date(J,B,1-w)),Y=0;Y<I;Y++){for(v+="<tr>",S=r?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(x)+"</td>":"",_=0;_<7;_++)F=l?l.apply(e.input?e.input[0]:null,[x]):[!0,""],T=(N=x.getMonth()!==B)&&!u||!F[0]||P&&x<P||z&&z<x,S+="<td class='"+(5<=(_+s+6)%7?" ui-datepicker-week-end":"")+(N?" ui-datepicker-other-month":"")+(x.getTime()===m.getTime()&&B===e.selectedMonth&&e._keyEvent||p.getTime()===x.getTime()&&p.getTime()===m.getTime()?" "+this._dayOverClass:"")+(T?" "+this._unselectableClass+" ui-state-disabled":"")+(N&&!h?"":" "+F[1]+(x.getTime()===U.getTime()?" "+this._currentClass:"")+(x.getTime()===K.getTime()?" ui-datepicker-today":""))+"'"+(N&&!h||!F[2]?"":" title='"+F[2].replace(/'/g,"&#39;")+"'")+(T?"":" data-handler='selectDay' data-event='click' data-month='"+x.getMonth()+"' data-year='"+x.getFullYear()+"'")+">"+(N&&!h?"&#xa0;":T?"<span class='ui-state-default'>"+x.getDate()+"</span>":"<a class='ui-state-default"+(x.getTime()===K.getTime()?" ui-state-highlight":"")+(x.getTime()===U.getTime()?" ui-state-active":"")+(N?" ui-priority-secondary":"")+"' href='#' aria-current='"+(x.getTime()===U.getTime()?"true":"false")+"' data-date='"+x.getDate()+"'>"+x.getDate()+"</a>")+"</td>",x.setDate(x.getDate()+1),x=this._daylightSavingAdjust(x);v+=S+"</tr>"}11<++B&&(B=0,J++),k+=v+="</tbody></table>"+(E?"</div>"+(0<H[0]&&D===H[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}g+=k}return g+=R,e._keyEvent=!1,g},_generateMonthYearHeader:function(e,t,a,i,s,r,n,d){var c,o,l,h,u,p,g=this._get(e,"changeMonth"),_=this._get(e,"changeYear"),f=this._get(e,"showMonthAfterYear"),k=this._get(e,"selectMonthLabel"),D=this._get(e,"selectYearLabel"),m="<div class='ui-datepicker-title'>",y="";if(r||!g)y+="<span class='ui-datepicker-month'>"+n[t]+"</span>";else{for(c=i&&i.getFullYear()===a,o=s&&s.getFullYear()===a,y+="<select class='ui-datepicker-month' aria-label='"+k+"' data-handler='selectMonth' data-event='change'>",l=0;l<12;l++)(!c||l>=i.getMonth())&&(!o||l<=s.getMonth())&&(y+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+d[l]+"</option>");y+="</select>"}if(f||(m+=y+(!r&&g&&_?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",r||!_)m+="<span class='ui-datepicker-year'>"+a+"</span>";else{for(n=this._get(e,"yearRange").split(":"),h=(new Date).getFullYear(),u=(k=function(e){e=e.match(/c[+\-].*/)?a+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);return isNaN(e)?h:e})(n[0]),p=Math.max(u,k(n[1]||"")),u=i?Math.max(u,i.getFullYear()):u,p=s?Math.min(p,s.getFullYear()):p,e.yearshtml+="<select class='ui-datepicker-year' aria-label='"+D+"' data-handler='selectYear' data-event='change'>";u<=p;u++)e.yearshtml+="<option value='"+u+"'"+(u===a?" selected='selected'":"")+">"+u+"</option>";e.yearshtml+="</select>",m+=e.yearshtml,e.yearshtml=null}return m+=this._get(e,"yearSuffix"),f&&(m+=(!r&&g&&_?"":"&#xa0;")+y),m+="</div>"},_adjustInstDate:function(e,t,a){var i=e.selectedYear+("Y"===a?t:0),s=e.selectedMonth+("M"===a?t:0),t=Math.min(e.selectedDay,this._getDaysInMonth(i,s))+("D"===a?t:0),t=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(i,s,t)));e.selectedDay=t.getDate(),e.drawMonth=e.selectedMonth=t.getMonth(),e.drawYear=e.selectedYear=t.getFullYear(),"M"!==a&&"Y"!==a||this._notifyChange(e)},_restrictMinMax:function(e,t){var a=this._getMinMaxDate(e,"min"),e=this._getMinMaxDate(e,"max"),t=a&&t<a?a:t;return e&&e<t?e:t},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){e=this._get(e,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,a,i){var s=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(a,i+(t<0?t:s[0]*s[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var a=this._getMinMaxDate(e,"min"),i=this._getMinMaxDate(e,"max"),s=null,r=null,n=this._get(e,"yearRange");return n&&(e=n.split(":"),n=(new Date).getFullYear(),s=parseInt(e[0],10),r=parseInt(e[1],10),e[0].match(/[+\-].*/)&&(s+=n),e[1].match(/[+\-].*/)&&(r+=n)),(!a||t.getTime()>=a.getTime())&&(!i||t.getTime()<=i.getTime())&&(!s||t.getFullYear()>=s)&&(!r||t.getFullYear()<=r)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return{shortYearCutoff:t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,a,i){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);t=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(i,a,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),t,this._getFormatConfig(e))}}),V.fn.datepicker=function(e){if(!this.length)return this;V.datepicker.initialized||(V(document).on("mousedown",V.datepicker._checkExternalClick),V.datepicker.initialized=!0),0===V("#"+V.datepicker._mainDivId).length&&V("body").append(V.datepicker.dpDiv);var t=Array.prototype.slice.call(arguments,1);return"string"==typeof e&&("isDisabled"===e||"getDate"===e||"widget"===e)||"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?V.datepicker["_"+e+"Datepicker"].apply(V.datepicker,[this[0]].concat(t)):this.each(function(){"string"==typeof e?V.datepicker["_"+e+"Datepicker"].apply(V.datepicker,[this].concat(t)):V.datepicker._attachDatepicker(this,e)})},V.datepicker=new e,V.datepicker.initialized=!1,V.datepicker.uuid=(new Date).getTime(),V.datepicker.version="1.13.0",V.datepicker});
;
/**
 * @file
 * bef_datepickers.js
 *
 * Provides jQueryUI Datepicker integration with Better Exposed Filters.
 */

(function ($, Drupal, drupalSettings) {
  /*
   * Helper functions
   */

  Drupal.behaviors.betterExposedFiltersDatePickers = {
    attach: function (context, settings) {

      // Check for and initialize datepickers.
      var befSettings = drupalSettings.better_exposed_filters;
      if (befSettings && befSettings.datepicker && befSettings.datepicker_options && $.fn.datepicker) {
        var opt = [];
        $.each(befSettings.datepicker_options, function (key, val) {
          if (key && val) {
            opt[key] = JSON.parse(val);
          }
        });
        $('.bef-datepicker').datepicker(opt);
      }

    }
  };
})(jQuery, Drupal, drupalSettings);
;
/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));
;
!function (document, Drupal, $) {
  'use strict';
  /**
   * Use this to describe what your behavior does.
   * js-form-item form-item js-form-type-search-api-autocomplete form-type-search-api-autocomplete js-form-item-fulltext form-item-fulltext"
   */

  Drupal.behaviors.selectField = {
    attach: function attach(context) {
      var bSearchDisplayed = false;
      var bHeaderMode = $('#headerSearchBox').find('.js-form-item-fulltext').length > 0;

      if (bHeaderMode) {
        $('#searchTrigger').unbind().click(function () {
          if (bSearchDisplayed) {
            $('#headerSearchBox').removeClass('active');
            bSearchDisplayed = false;
          } else {
            $('#headerSearchBox').addClass('active');
            bSearchDisplayed = true;
            $('input[name=\'fulltext\']').focus();
          }
        });
      } else {
        bSearchDisplayed = true;
        $('#searchTrigger').unbind().click(searchToggle); // $('.closeSearch').unbind().click(searchToggle);
      }

      function searchToggle() {
        if (bSearchDisplayed) {
          $('.js-form-item-fulltext').addClass('hidden');
          $('.closeSearch').addClass('hidden');
          $('.formArea').removeClass('active');
          bSearchDisplayed = false;
        } else {
          $('.js-form-item-fulltext').removeClass('hidden');
          $('.closeSearch').removeClass('hidden');
          $('.formArea').addClass('active');
          bSearchDisplayed = true;
          $('input[name=\'fulltext\']').focus();
        }
      }

      $('.js-form-item-fulltext').keydown(function (event) {
        if (bSearchDisplayed && event.key == 'Escape') {
          $('#headerSearchBox').removeClass('active');
          bSearchDisplayed = false;
        }
      }); //Scroll bar hide mobile

      var lastScrollTop = 0;
      $(window).scroll(function () {
        var st = $(this).scrollTop();

        if (st < lastScrollTop || st <= 0) {
          $('body').removeClass('down');
        } else {
          $('body').addClass('down');
        }

        lastScrollTop = st;
      });
    }
  };
}(document, Drupal, jQuery);

;
/**
 * @file
 * Dropdown language selector js.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.dropdownLanguagesSelector = {
    attach: function (context, settings) {
      $('.dropdown-language-item .active-language', context).once('dropdown-language-selector')
        .click(function (e) {
          var $wrapper = $(this).closest('.dropbutton-wrapper');
          if ($wrapper.length > 0) {
            e.preventDefault();
            e.stopPropagation();
            $wrapper.toggleClass('open');
          }
        });
    }
  };

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function DropButton(dropbutton, settings) {
    var options = $.extend({
      title: Drupal.t('List additional actions')
    }, settings);
    var $dropbutton = $(dropbutton);
    this.$dropbutton = $dropbutton;
    this.$list = $dropbutton.find('.dropbutton');
    this.$actions = this.$list.find('li').addClass('dropbutton-action');

    if (this.$actions.length > 1) {
      var $primary = this.$actions.slice(0, 1);
      var $secondary = this.$actions.slice(1);
      $secondary.addClass('secondary-action');
      $primary.after(Drupal.theme('dropbuttonToggle', options));
      this.$dropbutton.addClass('dropbutton-multiple').on({
        'mouseleave.dropbutton': $.proxy(this.hoverOut, this),
        'mouseenter.dropbutton': $.proxy(this.hoverIn, this),
        'focusout.dropbutton': $.proxy(this.focusOut, this),
        'focusin.dropbutton': $.proxy(this.focusIn, this)
      });
    } else {
      this.$dropbutton.addClass('dropbutton-single');
    }
  }

  function dropbuttonClickHandler(e) {
    e.preventDefault();
    $(e.target).closest('.dropbutton-wrapper').toggleClass('open');
  }

  Drupal.behaviors.dropButton = {
    attach: function attach(context, settings) {
      var dropbuttons = once('dropbutton', '.dropbutton-wrapper', context);

      if (dropbuttons.length) {
        var body = once('dropbutton-click', 'body');

        if (body.length) {
          $(body).on('click', '.dropbutton-toggle', dropbuttonClickHandler);
        }

        dropbuttons.forEach(function (dropbutton) {
          DropButton.dropbuttons.push(new DropButton(dropbutton, settings.dropbutton));
        });
      }
    }
  };
  $.extend(DropButton, {
    dropbuttons: []
  });
  $.extend(DropButton.prototype, {
    toggle: function toggle(show) {
      var isBool = typeof show === 'boolean';
      show = isBool ? show : !this.$dropbutton.hasClass('open');
      this.$dropbutton.toggleClass('open', show);
    },
    hoverIn: function hoverIn() {
      if (this.timerID) {
        window.clearTimeout(this.timerID);
      }
    },
    hoverOut: function hoverOut() {
      this.timerID = window.setTimeout($.proxy(this, 'close'), 500);
    },
    open: function open() {
      this.toggle(true);
    },
    close: function close() {
      this.toggle(false);
    },
    focusOut: function focusOut(e) {
      this.hoverOut.call(this, e);
    },
    focusIn: function focusIn(e) {
      this.hoverIn.call(this, e);
    }
  });
  $.extend(Drupal.theme, {
    dropbuttonToggle: function dropbuttonToggle(options) {
      return "<li class=\"dropbutton-toggle\"><button type=\"button\"><span class=\"dropbutton-arrow\"><span class=\"visually-hidden\">".concat(options.title, "</span></span></button></li>");
    }
  });
  Drupal.DropButton = DropButton;
})(jQuery, Drupal);;
