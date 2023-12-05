import{at as c,au as R}from"./common-1bc81878.js";var F={},L={},D={},g={};Object.defineProperty(g,"__esModule",{value:!0});function S(e,n){if(!e)throw new Error(n)}g.default=S;var j=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});const f=j(g);function N(e){f.default(Array.isArray(e.domains),"domains must be an array"),f.default(Array.isArray(e.topLevelDomains),"topLevelDomains must be an array"),f.default(Array.isArray(e.secondLevelDomains),"secondLevelDomains must be an array"),f.default(typeof e.distanceFunction=="function","distanceFunction must be a function")}D.default=N;var p={},A={};Object.defineProperty(A,"__esModule",{value:!0});function C(e){return encodeURI(e).replace(/%20/g," ").replace(/%25/g,"%").replace(/%5E/g,"^").replace(/%60/g,"`").replace(/%7B/g,"{").replace(/%7C/g,"|").replace(/%7D/g,"}")}A.default=C;var P={};Object.defineProperty(P,"__esModule",{value:!0});function k(e){const{domain:n,domains:t,distanceFunction:r,threshold:a}=e;let l,u=1/0,o=null;if(!(!n||!t)){for(let i=0;i<t.length;i++){if(n===t[i])return n;l=r(n,t[i]),l<u&&(u=l,o=t[i])}if(u<=a&&o!==null)return o}}P.default=k;var O={},T={};Object.defineProperty(T,"__esModule",{value:!0});const w=/\s/;function $(e){return e.trim?e.trim():z(G(e))}function G(e){return e.trimLeft?e.trimLeft():e.replace(/^\s\s*/,"")}function z(e){if(e.trimRight)return e.trimRight();let n=e.length;for(;w.test(e.charAt(--n)););return e.slice(0,n+1)}T.default=$;var x=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(O,"__esModule",{value:!0});const q=x(T),V=2;function B(e){const t=q.default(e).split("@");if(t.length<V)return!1;for(let o=0;o<t.length;o++)if(t[o]==="")return!1;let r="",a="";const l=t.pop(),u=l.split(".");if(u.length===0)return!1;if(u.length==1)a=u[0];else{r=u[0];for(let o=1;o<u.length;o++)a+=u[o]+".";a=a.substring(0,a.length-1)}return{topLevelDomain:a,secondLevelDomain:r,domain:l,address:t.join("@")}}O.default=B;var b=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(p,"__esModule",{value:!0});const H=b(A),v=b(P),W=b(O);function J(e){const n=H.default(e.email.toLowerCase()),t=W.default(n);if(!t)return;const{domains:r,domainThreshold:a,distanceFunction:l,secondLevelDomains:u,topLevelDomains:o}=e;if(u&&o&&u.indexOf(t.secondLevelDomain)!==-1&&o.indexOf(t.topLevelDomain)!==-1)return;let i=v.default({domain:t.domain,domains:r,distanceFunction:l,threshold:a});if(i)return i==t.domain?void 0:{address:t.address,domain:i,full:t.address+"@"+i};const m=v.default({domain:t.secondLevelDomain,domains:u,distanceFunction:l,threshold:e.secondLevelThreshold}),_=v.default({domain:t.topLevelDomain,domains:o,distanceFunction:l,threshold:e.topLevelThreshold});if(t.domain){i=t.domain;let h=!1;if(m&&m!=t.secondLevelDomain&&(i=i.replace(t.secondLevelDomain,m),h=!0),_&&_!=t.topLevelDomain&&t.secondLevelDomain!==""&&(i=i.replace(new RegExp(t.topLevelDomain+"$"),_),h=!0),h)return{address:t.address,domain:i,full:t.address+"@"+i}}}p.default=J;var y={},s={},M={};Object.defineProperty(M,"__esModule",{value:!0});function K(e,n){if(e==null||e.length===0)return n==null||n.length===0?0:n.length;if(n==null||n.length===0)return e.length;let t=0,r=0,a=0,l=0;const u=5;for(;t+r<e.length&&t+a<n.length;){if(e.charAt(t+r)==n.charAt(t+a))l++;else{r=0,a=0;for(let o=0;o<u;o++){if(t+o<e.length&&e.charAt(t+o)==n.charAt(t)){r=o;break}if(t+o<n.length&&e.charAt(t)==n.charAt(t+o)){a=o;break}}}t++}return(e.length+n.length)/2-l}M.default=K;var Q=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});s.POPULAR_TLDS=s.POPULAR_DOMAINS=s.DEFAULT_CONFIG=void 0;const X=Q(M),E=["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","optonline.net","sbcglobal.net","aol.com","aim.com","me.com","mailw.com","btinternet.com","charter.net","shaw.ca","hey.com","proton.me","pm.com","protonmail.com","zoho.com","yandex.com","titan.email"];s.POPULAR_DOMAINS=E;const I=["com","com.au","com.tw","co","ca","co.nz","co.uk","de","fr","it","ru","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","net","net.au","info","biz","mil","co.jp","sg","hu","uk","sk","ar","cf","cl","cn","ga","gq","ir","ml","mx","nu","nz","ph","pl","ro","tk","tw","ua","vg","ws","xn","za","app","au","ai","biz","br","blog","cloud","club","cc","de","dev","digital","fi","finance","id","in","io","me","mobi","network","pw","so","xyz","software","to","tech"];s.POPULAR_TLDS=I;const Y={domainThreshold:2,domains:E,secondLevelThreshold:2,secondLevelDomains:["yahoo","hotmail","mail","live","outlook"],topLevelThreshold:2,topLevelDomains:I,distanceFunction:X.default};s.DEFAULT_CONFIG=Y;Object.defineProperty(y,"__esModule",{value:!0});const d=s;function Z(e){return{email:e.email,domains:e.domains||d.DEFAULT_CONFIG.domains,topLevelDomains:e.topLevelDomains||d.DEFAULT_CONFIG.topLevelDomains,secondLevelDomains:e.secondLevelDomains||d.DEFAULT_CONFIG.secondLevelDomains,distanceFunction:e.distanceFunction||d.DEFAULT_CONFIG.distanceFunction,domainThreshold:e.domainThreshold||d.DEFAULT_CONFIG.domainThreshold,secondLevelThreshold:e.secondLevelThreshold||d.DEFAULT_CONFIG.secondLevelThreshold,topLevelThreshold:e.topLevelThreshold||d.DEFAULT_CONFIG.topLevelThreshold,suggested:e.suggested||void 0,empty:e.suggested||void 0}}y.default=Z;var U=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(L,"__esModule",{value:!0});const ee=U(D),te=U(p),ne=U(y);function oe(e){const n=ne.default(e);ee.default(n||{});const t=te.default(n);return!t&&e.empty&&e.empty(),t&&e.suggested&&e.suggested(t),t}L.default=oe;(function(e){var n=c&&c.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.POPULAR_TLDS=e.POPULAR_DOMAINS=e.run=void 0;const t=n(L);e.run=t.default;const r=s;Object.defineProperty(e,"POPULAR_DOMAINS",{enumerable:!0,get:function(){return r.POPULAR_DOMAINS}}),Object.defineProperty(e,"POPULAR_TLDS",{enumerable:!0,get:function(){return r.POPULAR_TLDS}});const a={run:t.default,POPULAR_DOMAINS:r.POPULAR_DOMAINS,POPULAR_TLDS:r.POPULAR_TLDS};e.default=a})(F);const ae=R(F);export{ae as e};