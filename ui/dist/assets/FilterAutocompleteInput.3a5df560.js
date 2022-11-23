import{S as ie,i as re,s as se,e as oe,f as ae,g as ue,y as _,o as le,I as ce,J as fe,K as de,L as he,C as L,M as ge}from"./index.1b1668d9.js";import{C as I,E as x,a as C,h as pe,b as ye,c as me,d as be,e as ke,s as Ke,f as xe,g as Ce,i as qe,r as we,j as Se,k as Le,l as Ie,m as Ee,n as Re,o as Ae,p as ve,q as Be,t as z,S as _e}from"./index.fb0a7680.js";function Me(e){Q(e,"start");var i={},t=e.languageData||{},h=!1;for(var g in e)if(g!=t&&e.hasOwnProperty(g))for(var d=i[g]=[],o=e[g],s=0;s<o.length;s++){var u=o[s];d.push(new He(u,e)),(u.indent||u.dedent)&&(h=!0)}return{name:t.name,startState:function(){return{state:"start",pending:null,indent:h?[]:null}},copyState:function(a){var y={state:a.state,pending:a.pending,indent:a.indent&&a.indent.slice(0)};return a.stack&&(y.stack=a.stack.slice(0)),y},token:Fe(i),indent:Te(i,t),languageData:t}}function Q(e,i){if(!e.hasOwnProperty(i))throw new Error("Undefined state "+i+" in simple mode")}function Oe(e,i){if(!e)return/(?:)/;var t="";return e instanceof RegExp?(e.ignoreCase&&(t="i"),e=e.source):e=String(e),new RegExp((i===!1?"":"^")+"(?:"+e+")",t)}function De(e){if(!e)return null;if(e.apply)return e;if(typeof e=="string")return e.replace(/\./g," ");for(var i=[],t=0;t<e.length;t++)i.push(e[t]&&e[t].replace(/\./g," "));return i}function He(e,i){(e.next||e.push)&&Q(i,e.next||e.push),this.regex=Oe(e.regex),this.token=De(e.token),this.data=e}function Fe(e){return function(i,t){if(t.pending){var h=t.pending.shift();return t.pending.length==0&&(t.pending=null),i.pos+=h.text.length,h.token}for(var g=e[t.state],d=0;d<g.length;d++){var o=g[d],s=(!o.data.sol||i.sol())&&i.match(o.regex);if(s){o.data.next?t.state=o.data.next:o.data.push?((t.stack||(t.stack=[])).push(t.state),t.state=o.data.push):o.data.pop&&t.stack&&t.stack.length&&(t.state=t.stack.pop()),o.data.indent&&t.indent.push(i.indentation()+i.indentUnit),o.data.dedent&&t.indent.pop();var u=o.token;if(u&&u.apply&&(u=u(s)),s.length>2&&o.token&&typeof o.token!="string"){t.pending=[];for(var a=2;a<s.length;a++)s[a]&&t.pending.push({text:s[a],token:o.token[a-1]});return i.backUp(s[0].length-(s[1]?s[1].length:0)),u[0]}else return u&&u.join?u[0]:u}}return i.next(),null}}function Te(e,i){return function(t,h){if(t.indent==null||i.dontIndentStates&&i.doneIndentState.indexOf(t.state)>-1)return null;var g=t.indent.length-1,d=e[t.state];e:for(;;){for(var o=0;o<d.length;o++){var s=d[o];if(s.data.dedent&&s.data.dedentIfLineStart!==!1){var u=s.regex.exec(h);if(u&&u[0]){g--,(s.next||s.push)&&(d=e[s.next||s.push]),h=h.slice(u[0].length);continue e}}}break}return g<0?0:t.indent[g]}}function Ue(e){let i;return{c(){i=oe("div"),ae(i,"class","code-editor")},m(t,h){ue(t,i,h),e[15](i)},p:_,i:_,o:_,d(t){t&&le(i),e[15](null)}}}function We(e){return JSON.stringify([e==null?void 0:e.name,e==null?void 0:e.type,e==null?void 0:e.schema])}function Ne(e,i,t){let h;ce(e,fe,n=>t(21,h=n));const g=de();let{id:d=""}=i,{value:o=""}=i,{disabled:s=!1}=i,{placeholder:u=""}=i,{baseCollection:a=null}=i,{singleLine:y=!1}=i,{extraAutocompleteKeys:E=[]}=i,{disableRequestKeys:k=!1}=i,{disableIndirectCollectionsKeys:K=!1}=i,f,m,R=s,M=new I,O=new I,D=new I,H=new I,q=[],F=[],T=[],U=[],w="",A="";function v(){f==null||f.focus()}let B=null;function X(){clearTimeout(B),B=setTimeout(()=>{q=Y(h),U=Z(),F=k?[]:j(),T=K?[]:$()},300)}function Y(n){let r=n.slice();return a&&L.pushOrReplaceByKey(r,a,"id"),r}function W(){m==null||m.dispatchEvent(new CustomEvent("change",{detail:{value:o},bubbles:!0}))}function N(){if(!d)return;const n=document.querySelectorAll('[for="'+d+'"]');for(let r of n)r.removeEventListener("click",v)}function V(){if(!d)return;N();const n=document.querySelectorAll('[for="'+d+'"]');for(let r of n)r.addEventListener("click",v)}function S(n,r="",l=0){let p=q.find(b=>b.name==n||b.id==n);if(!p||l>=4)return[];let c=[r+"id",r+"created",r+"updated"];p.isAuth&&(c.push(r+"username"),c.push(r+"email"),c.push(r+"emailVisibility"),c.push(r+"verified"));for(const b of p.schema){const P=r+b.name;if(c.push(P),b.type==="relation"&&b.options.collectionId){const G=S(b.options.collectionId,P+".",l+1);G.length&&(c=c.concat(G))}}return c}function Z(){return S(a==null?void 0:a.name)}function j(){const n=[];n.push("@request.method"),n.push("@request.query."),n.push("@request.data."),n.push("@request.auth."),n.push("@request.auth.id"),n.push("@request.auth.collectionId"),n.push("@request.auth.collectionName"),n.push("@request.auth.verified"),n.push("@request.auth.username"),n.push("@request.auth.email"),n.push("@request.auth.emailVisibility"),n.push("@request.auth.created"),n.push("@request.auth.updated");const r=q.filter(l=>l.isAuth);for(const l of r){const p=S(l.id,"@request.auth.");for(const c of p)L.pushUnique(n,c)}return n}function $(){const n=[];for(const r of q){const l="@collection."+r.name+".",p=S(r.name,l);for(const c of p)n.push(c)}return n}function ee(n=!0,r=!0){let l=[].concat(E);return l=l.concat(U||[]),n&&(l=l.concat(F||[])),r&&(l=l.concat(T||[])),l.sort(function(p,c){return c.length-p.length}),l}function te(n){let r=n.matchBefore(/[\'\"\@\w\.]*/);if(r&&r.from==r.to&&!n.explicit)return null;let l=[{label:"false"},{label:"true"},{label:"@now"}];K||l.push({label:"@collection.*",apply:"@collection."});const p=ee(!k,!k&&r.text.startsWith("@c"));for(const c of p)l.push({label:c.endsWith(".")?c+"*":c,apply:c});return{from:r.from,options:l}}function J(){return _e.define(Me({start:[{regex:/true|false|null/,token:"atom"},{regex:/"(?:[^\\]|\\.)*?(?:"|$)/,token:"string"},{regex:/'(?:[^\\]|\\.)*?(?:'|$)/,token:"string"},{regex:/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,token:"number"},{regex:/\&\&|\|\||\=|\!\=|\~|\!\~|\>|\<|\>\=|\<\=/,token:"operator"},{regex:/[\{\[\(]/,indent:!0},{regex:/[\}\]\)]/,dedent:!0},{regex:/\w+[\w\.]*\w+/,token:"keyword"},{regex:L.escapeRegExp("@now"),token:"keyword"},{regex:L.escapeRegExp("@request.method"),token:"keyword"}]}))}he(()=>{const n={key:"Enter",run:r=>{y&&g("submit",o)}};return V(),t(11,f=new x({parent:m,state:C.create({doc:o,extensions:[pe(),ye(),me(),be(),ke(),C.allowMultipleSelections.of(!0),Ke(xe,{fallback:!0}),Ce(),qe(),we(),Se(),Le.of([n,...Ie,...Ee,Re.find(r=>r.key==="Mod-d"),...Ae,...ve]),x.lineWrapping,Be({override:[te],icons:!1}),H.of(z(u)),O.of(x.editable.of(!s)),D.of(C.readOnly.of(s)),M.of(J()),C.transactionFilter.of(r=>y&&r.newDoc.lines>1?[]:r),x.updateListener.of(r=>{!r.docChanged||s||(t(1,o=r.state.doc.toString()),W())})]})})),()=>{clearTimeout(B),N(),f==null||f.destroy()}});function ne(n){ge[n?"unshift":"push"](()=>{m=n,t(0,m)})}return e.$$set=n=>{"id"in n&&t(2,d=n.id),"value"in n&&t(1,o=n.value),"disabled"in n&&t(3,s=n.disabled),"placeholder"in n&&t(4,u=n.placeholder),"baseCollection"in n&&t(5,a=n.baseCollection),"singleLine"in n&&t(6,y=n.singleLine),"extraAutocompleteKeys"in n&&t(7,E=n.extraAutocompleteKeys),"disableRequestKeys"in n&&t(8,k=n.disableRequestKeys),"disableIndirectCollectionsKeys"in n&&t(9,K=n.disableIndirectCollectionsKeys)},e.$$.update=()=>{e.$$.dirty[0]&32&&t(13,w=We(a)),e.$$.dirty[0]&25352&&!s&&(A!=w||k!==-1||K!==-1)&&(t(14,A=w),X()),e.$$.dirty[0]&4&&d&&V(),e.$$.dirty[0]&2080&&f&&(a==null?void 0:a.schema)&&f.dispatch({effects:[M.reconfigure(J())]}),e.$$.dirty[0]&6152&&f&&R!=s&&(f.dispatch({effects:[O.reconfigure(x.editable.of(!s)),D.reconfigure(C.readOnly.of(s))]}),t(12,R=s),W()),e.$$.dirty[0]&2050&&f&&o!=f.state.doc.toString()&&f.dispatch({changes:{from:0,to:f.state.doc.length,insert:o}}),e.$$.dirty[0]&2064&&f&&typeof u<"u"&&f.dispatch({effects:[H.reconfigure(z(u))]})},[m,o,d,s,u,a,y,E,k,K,v,f,R,w,A,ne]}class Pe extends ie{constructor(i){super(),re(this,i,Ne,Ue,se,{id:2,value:1,disabled:3,placeholder:4,baseCollection:5,singleLine:6,extraAutocompleteKeys:7,disableRequestKeys:8,disableIndirectCollectionsKeys:9,focus:10},null,[-1,-1])}get focus(){return this.$$.ctx[10]}}export{Pe as default};
