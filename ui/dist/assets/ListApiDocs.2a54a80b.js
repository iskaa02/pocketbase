import{S as Se,i as Ne,s as qe,e,b as s,E as De,f as o,g as u,u as Me,y as Fe,o as m,w as _,h as t,M as he,c as Yt,m as Zt,x as we,N as Le,O as He,k as Be,P as Ie,n as Ge,t as Bt,a as It,d as te,R as ze,C as _e,p as Ue,r as xe}from"./index.ae738267.js";import{S as je}from"./SdkTabs.52f7232a.js";function Je(d){let n,a,r;return{c(){n=e("span"),n.textContent="Show details",a=s(),r=e("i"),o(n,"class","txt"),o(r,"class","ri-arrow-down-s-line")},m(f,p){u(f,n,p),u(f,a,p),u(f,r,p)},d(f){f&&m(n),f&&m(a),f&&m(r)}}}function Ke(d){let n,a,r;return{c(){n=e("span"),n.textContent="Hide details",a=s(),r=e("i"),o(n,"class","txt"),o(r,"class","ri-arrow-up-s-line")},m(f,p){u(f,n,p),u(f,a,p),u(f,r,p)},d(f){f&&m(n),f&&m(a),f&&m(r)}}}function Ae(d){let n,a,r,f,p,b,x,$,h,w,c,V,bt,Gt,R,zt,q,it,F,W,ee,I,G,le,at,ht,X,xt,se,rt,ct,Y,O,Ut,wt,v,Z,_t,jt,$t,z,tt,Ct,Jt,kt,L,dt,gt,ne,ft,oe,M,yt,et,vt,U,pt,ie,D,Ft,lt,Lt,st,At,nt,j,E,Kt,Tt,Qt,Pt,C,J,H,ae,Rt,re,ut,ce,B,Ot,de,Et,Vt,St,Wt,A,mt,K,Q,S,Nt,fe,T,k,pe,N,y,ot,ue,P,qt,me,Mt,be,Dt,Xt,Ht;return{c(){n=e("p"),n.innerHTML=`The syntax basically follows the format
        <code><span class="txt-success">OPERAND</span> 
            <span class="txt-danger">OPERATOR</span> 
            <span class="txt-success">OPERAND</span></code>, where:`,a=s(),r=e("ul"),f=e("li"),f.innerHTML=`<code class="txt-success">OPERAND</code> - could be any of the above field literal, string (single
            or double quoted), number, null, true, false`,p=s(),b=e("li"),x=e("code"),x.textContent="OPERATOR",$=_(` - is one of:
            `),h=e("br"),w=s(),c=e("ul"),V=e("li"),bt=e("code"),bt.textContent="=",Gt=s(),R=e("span"),R.textContent="Equal",zt=s(),q=e("li"),it=e("code"),it.textContent="!=",F=s(),W=e("span"),W.textContent="NOT equal",ee=s(),I=e("li"),G=e("code"),G.textContent=">",le=s(),at=e("span"),at.textContent="Greater than",ht=s(),X=e("li"),xt=e("code"),xt.textContent=">=",se=s(),rt=e("span"),rt.textContent="Greater than or equal",ct=s(),Y=e("li"),O=e("code"),O.textContent="<",Ut=s(),wt=e("span"),wt.textContent="Less than or equal",v=s(),Z=e("li"),_t=e("code"),_t.textContent="<=",jt=s(),$t=e("span"),$t.textContent="Less than or equal",z=s(),tt=e("li"),Ct=e("code"),Ct.textContent="~",Jt=s(),kt=e("span"),kt.textContent=`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,L=s(),dt=e("li"),gt=e("code"),gt.textContent="!~",ne=s(),ft=e("span"),ft.textContent=`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,oe=s(),M=e("li"),yt=e("code"),yt.textContent="?=",et=s(),vt=e("em"),vt.textContent="Any/At least one of",U=s(),pt=e("span"),pt.textContent="Equal",ie=s(),D=e("li"),Ft=e("code"),Ft.textContent="?!=",lt=s(),Lt=e("em"),Lt.textContent="Any/At least one of",st=s(),At=e("span"),At.textContent="NOT equal",nt=s(),j=e("li"),E=e("code"),E.textContent="?>",Kt=s(),Tt=e("em"),Tt.textContent="Any/At least one of",Qt=s(),Pt=e("span"),Pt.textContent="Greater than",C=s(),J=e("li"),H=e("code"),H.textContent="?>=",ae=s(),Rt=e("em"),Rt.textContent="Any/At least one of",re=s(),ut=e("span"),ut.textContent="Greater than or equal",ce=s(),B=e("li"),Ot=e("code"),Ot.textContent="?<",de=s(),Et=e("em"),Et.textContent="Any/At least one of",Vt=s(),St=e("span"),St.textContent="Less than or equal",Wt=s(),A=e("li"),mt=e("code"),mt.textContent="?<=",K=s(),Q=e("em"),Q.textContent="Any/At least one of",S=s(),Nt=e("span"),Nt.textContent="Less than or equal",fe=s(),T=e("li"),k=e("code"),k.textContent="?~",pe=s(),N=e("em"),N.textContent="Any/At least one of",y=s(),ot=e("span"),ot.textContent=`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,ue=s(),P=e("li"),qt=e("code"),qt.textContent="?!~",me=s(),Mt=e("em"),Mt.textContent="Any/At least one of",be=s(),Dt=e("span"),Dt.textContent=`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,Xt=s(),Ht=e("p"),Ht.innerHTML=`To group and combine several expressions you could use brackets
        <code>(...)</code>, <code>&amp;&amp;</code> (AND) and <code>||</code> (OR) tokens.`,o(x,"class","txt-danger"),o(bt,"class","filter-op svelte-1w7s5nw"),o(R,"class","txt"),o(it,"class","filter-op svelte-1w7s5nw"),o(W,"class","txt"),o(G,"class","filter-op svelte-1w7s5nw"),o(at,"class","txt"),o(xt,"class","filter-op svelte-1w7s5nw"),o(rt,"class","txt"),o(O,"class","filter-op svelte-1w7s5nw"),o(wt,"class","txt"),o(_t,"class","filter-op svelte-1w7s5nw"),o($t,"class","txt"),o(Ct,"class","filter-op svelte-1w7s5nw"),o(kt,"class","txt"),o(gt,"class","filter-op svelte-1w7s5nw"),o(ft,"class","txt"),o(yt,"class","filter-op svelte-1w7s5nw"),o(vt,"class","txt-hint"),o(pt,"class","txt"),o(Ft,"class","filter-op svelte-1w7s5nw"),o(Lt,"class","txt-hint"),o(At,"class","txt"),o(E,"class","filter-op svelte-1w7s5nw"),o(Tt,"class","txt-hint"),o(Pt,"class","txt"),o(H,"class","filter-op svelte-1w7s5nw"),o(Rt,"class","txt-hint"),o(ut,"class","txt"),o(Ot,"class","filter-op svelte-1w7s5nw"),o(Et,"class","txt-hint"),o(St,"class","txt"),o(mt,"class","filter-op svelte-1w7s5nw"),o(Q,"class","txt-hint"),o(Nt,"class","txt"),o(k,"class","filter-op svelte-1w7s5nw"),o(N,"class","txt-hint"),o(ot,"class","txt"),o(qt,"class","filter-op svelte-1w7s5nw"),o(Mt,"class","txt-hint"),o(Dt,"class","txt")},m(l,i){u(l,n,i),u(l,a,i),u(l,r,i),t(r,f),t(r,p),t(r,b),t(b,x),t(b,$),t(b,h),t(b,w),t(b,c),t(c,V),t(V,bt),t(V,Gt),t(V,R),t(c,zt),t(c,q),t(q,it),t(q,F),t(q,W),t(c,ee),t(c,I),t(I,G),t(I,le),t(I,at),t(c,ht),t(c,X),t(X,xt),t(X,se),t(X,rt),t(c,ct),t(c,Y),t(Y,O),t(Y,Ut),t(Y,wt),t(c,v),t(c,Z),t(Z,_t),t(Z,jt),t(Z,$t),t(c,z),t(c,tt),t(tt,Ct),t(tt,Jt),t(tt,kt),t(c,L),t(c,dt),t(dt,gt),t(dt,ne),t(dt,ft),t(c,oe),t(c,M),t(M,yt),t(M,et),t(M,vt),t(M,U),t(M,pt),t(c,ie),t(c,D),t(D,Ft),t(D,lt),t(D,Lt),t(D,st),t(D,At),t(c,nt),t(c,j),t(j,E),t(j,Kt),t(j,Tt),t(j,Qt),t(j,Pt),t(c,C),t(c,J),t(J,H),t(J,ae),t(J,Rt),t(J,re),t(J,ut),t(c,ce),t(c,B),t(B,Ot),t(B,de),t(B,Et),t(B,Vt),t(B,St),t(c,Wt),t(c,A),t(A,mt),t(A,K),t(A,Q),t(A,S),t(A,Nt),t(c,fe),t(c,T),t(T,k),t(T,pe),t(T,N),t(T,y),t(T,ot),t(c,ue),t(c,P),t(P,qt),t(P,me),t(P,Mt),t(P,be),t(P,Dt),u(l,Xt,i),u(l,Ht,i)},d(l){l&&m(n),l&&m(a),l&&m(r),l&&m(Xt),l&&m(Ht)}}}function Qe(d){let n,a,r,f,p;function b(w,c){return w[0]?Ke:Je}let x=b(d),$=x(d),h=d[0]&&Ae();return{c(){n=e("button"),$.c(),a=s(),h&&h.c(),r=De(),o(n,"class","btn btn-sm btn-secondary m-t-5")},m(w,c){u(w,n,c),$.m(n,null),u(w,a,c),h&&h.m(w,c),u(w,r,c),f||(p=Me(n,"click",d[1]),f=!0)},p(w,[c]){x!==(x=b(w))&&($.d(1),$=x(w),$&&($.c(),$.m(n,null))),w[0]?h||(h=Ae(),h.c(),h.m(r.parentNode,r)):h&&(h.d(1),h=null)},i:Fe,o:Fe,d(w){w&&m(n),$.d(),w&&m(a),h&&h.d(w),w&&m(r),f=!1,p()}}}function Ve(d,n,a){let r=!1;function f(){a(0,r=!r)}return[r,f]}class We extends Se{constructor(n){super(),Ne(this,n,Ve,Qe,qe,{})}}function Te(d,n,a){const r=d.slice();return r[6]=n[a],r}function Pe(d,n,a){const r=d.slice();return r[6]=n[a],r}function Re(d){let n;return{c(){n=e("p"),n.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",o(n,"class","txt-hint txt-sm txt-right")},m(a,r){u(a,n,r)},d(a){a&&m(n)}}}function Oe(d,n){let a,r=n[6].code+"",f,p,b,x;function $(){return n[5](n[6])}return{key:d,first:null,c(){a=e("div"),f=_(r),p=s(),o(a,"class","tab-item"),xe(a,"active",n[2]===n[6].code),this.first=a},m(h,w){u(h,a,w),t(a,f),t(a,p),b||(x=Me(a,"click",$),b=!0)},p(h,w){n=h,w&20&&xe(a,"active",n[2]===n[6].code)},d(h){h&&m(a),b=!1,x()}}}function Ee(d,n){let a,r,f,p;return r=new he({props:{content:n[6].body}}),{key:d,first:null,c(){a=e("div"),Yt(r.$$.fragment),f=s(),o(a,"class","tab-item"),xe(a,"active",n[2]===n[6].code),this.first=a},m(b,x){u(b,a,x),Zt(r,a,null),t(a,f),p=!0},p(b,x){n=b,(!p||x&20)&&xe(a,"active",n[2]===n[6].code)},i(b){p||(Bt(r.$$.fragment,b),p=!0)},o(b){It(r.$$.fragment,b),p=!1},d(b){b&&m(a),te(r)}}}function Xe(d){var me,Mt,be,Dt,Xt,Ht;let n,a,r=d[0].name+"",f,p,b,x,$,h,w,c=d[0].name+"",V,bt,Gt,R,zt,q,it,F,W,ee,I,G,le,at,ht=d[0].name+"",X,xt,se,rt,ct,Y,O,Ut,wt,v,Z,_t,jt,$t,z,tt,Ct,Jt,kt,L,dt,gt,ne,ft,oe,M,yt,et,vt,U,pt,ie,D,Ft,lt,Lt,st,At,nt,j,E,Kt,Tt,Qt,Pt,C,J,H,ae,Rt,re,ut,ce,B,Ot,de,Et,Vt,St,Wt,A,mt,K,Q,S=[],Nt=new Map,fe,T,k=[],pe=new Map,N;R=new je({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${d[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(me=d[0])==null?void 0:me.name}').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(Mt=d[0])==null?void 0:Mt.name}').getFullList(200 /* batch size */, {
            sort: '-created',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(be=d[0])==null?void 0:be.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${d[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(Dt=d[0])==null?void 0:Dt.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(Xt=d[0])==null?void 0:Xt.name}').getFullList(
          batch: 200,
          sort: '-created',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(Ht=d[0])==null?void 0:Ht.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `}});let y=d[1]&&Re();et=new he({props:{content:`
                        // DESC by created and ASC by id
                        ?sort=-created,id
                    `}}),st=new he({props:{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `}}),nt=new We({}),H=new he({props:{content:"?expand=relField1,relField2.subRelField"}});let ot=d[4];const ue=l=>l[6].code;for(let l=0;l<ot.length;l+=1){let i=Pe(d,ot,l),g=ue(i);Nt.set(g,S[l]=Oe(g,i))}let P=d[4];const qt=l=>l[6].code;for(let l=0;l<P.length;l+=1){let i=Te(d,P,l),g=qt(i);pe.set(g,k[l]=Ee(g,i))}return{c(){n=e("h3"),a=_("List/Search ("),f=_(r),p=_(")"),b=s(),x=e("div"),$=e("p"),h=_("Fetch a paginated "),w=e("strong"),V=_(c),bt=_(" records list, supporting sorting and filtering."),Gt=s(),Yt(R.$$.fragment),zt=s(),q=e("h6"),q.textContent="API details",it=s(),F=e("div"),W=e("strong"),W.textContent="GET",ee=s(),I=e("div"),G=e("p"),le=_("/api/collections/"),at=e("strong"),X=_(ht),xt=_("/records"),se=s(),y&&y.c(),rt=s(),ct=e("div"),ct.textContent="Query parameters",Y=s(),O=e("table"),Ut=e("thead"),Ut.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,wt=s(),v=e("tbody"),Z=e("tr"),Z.innerHTML=`<td>page</td> 
            <td><span class="label">Number</span></td> 
            <td>The page (aka. offset) of the paginated list (default to 1).</td>`,_t=s(),jt=e("tr"),jt.innerHTML=`<td>perPage</td> 
            <td><span class="label">Number</span></td> 
            <td>Specify the max returned records per page (default to 30).</td>`,$t=s(),z=e("tr"),tt=e("td"),tt.textContent="sort",Ct=s(),Jt=e("td"),Jt.innerHTML='<span class="label">String</span>',kt=s(),L=e("td"),dt=_("Specify the records order attribute(s). "),gt=e("br"),ne=_(`
                Add `),ft=e("code"),ft.textContent="-",oe=_(" / "),M=e("code"),M.textContent="+",yt=_(` (default) in front of the attribute for DESC / ASC order.
                Ex.:
                `),Yt(et.$$.fragment),vt=s(),U=e("tr"),pt=e("td"),pt.textContent="filter",ie=s(),D=e("td"),D.innerHTML='<span class="label">String</span>',Ft=s(),lt=e("td"),Lt=_(`Filter the returned records. Ex.:
                `),Yt(st.$$.fragment),At=s(),Yt(nt.$$.fragment),j=s(),E=e("tr"),Kt=e("td"),Kt.textContent="expand",Tt=s(),Qt=e("td"),Qt.innerHTML='<span class="label">String</span>',Pt=s(),C=e("td"),J=_(`Auto expand record relations. Ex.:
                `),Yt(H.$$.fragment),ae=_(`
                Supports up to 6-levels depth nested relations expansion. `),Rt=e("br"),re=_(`
                The expanded relations will be appended to each individual record under the
                `),ut=e("code"),ut.textContent="expand",ce=_(" property (eg. "),B=e("code"),B.textContent='"expand": {"relField1": {...}, ...}',Ot=_(`).
                `),de=e("br"),Et=_(`
                Only the relations to which the request user has permissions to `),Vt=e("strong"),Vt.textContent="view",St=_(" will be expanded."),Wt=s(),A=e("div"),A.textContent="Responses",mt=s(),K=e("div"),Q=e("div");for(let l=0;l<S.length;l+=1)S[l].c();fe=s(),T=e("div");for(let l=0;l<k.length;l+=1)k[l].c();o(n,"class","m-b-sm"),o(x,"class","content txt-lg m-b-sm"),o(q,"class","m-b-xs"),o(W,"class","label label-primary"),o(I,"class","content"),o(F,"class","alert alert-info"),o(ct,"class","section-title"),o(O,"class","table-compact table-border m-b-base"),o(A,"class","section-title"),o(Q,"class","tabs-header compact left"),o(T,"class","tabs-content"),o(K,"class","tabs")},m(l,i){u(l,n,i),t(n,a),t(n,f),t(n,p),u(l,b,i),u(l,x,i),t(x,$),t($,h),t($,w),t(w,V),t($,bt),u(l,Gt,i),Zt(R,l,i),u(l,zt,i),u(l,q,i),u(l,it,i),u(l,F,i),t(F,W),t(F,ee),t(F,I),t(I,G),t(G,le),t(G,at),t(at,X),t(G,xt),t(F,se),y&&y.m(F,null),u(l,rt,i),u(l,ct,i),u(l,Y,i),u(l,O,i),t(O,Ut),t(O,wt),t(O,v),t(v,Z),t(v,_t),t(v,jt),t(v,$t),t(v,z),t(z,tt),t(z,Ct),t(z,Jt),t(z,kt),t(z,L),t(L,dt),t(L,gt),t(L,ne),t(L,ft),t(L,oe),t(L,M),t(L,yt),Zt(et,L,null),t(v,vt),t(v,U),t(U,pt),t(U,ie),t(U,D),t(U,Ft),t(U,lt),t(lt,Lt),Zt(st,lt,null),t(lt,At),Zt(nt,lt,null),t(v,j),t(v,E),t(E,Kt),t(E,Tt),t(E,Qt),t(E,Pt),t(E,C),t(C,J),Zt(H,C,null),t(C,ae),t(C,Rt),t(C,re),t(C,ut),t(C,ce),t(C,B),t(C,Ot),t(C,de),t(C,Et),t(C,Vt),t(C,St),u(l,Wt,i),u(l,A,i),u(l,mt,i),u(l,K,i),t(K,Q);for(let g=0;g<S.length;g+=1)S[g].m(Q,null);t(K,fe),t(K,T);for(let g=0;g<k.length;g+=1)k[g].m(T,null);N=!0},p(l,[i]){var $e,Ce,ke,ge,ye,ve;(!N||i&1)&&r!==(r=l[0].name+"")&&we(f,r),(!N||i&1)&&c!==(c=l[0].name+"")&&we(V,c);const g={};i&9&&(g.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${($e=l[0])==null?void 0:$e.name}').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(Ce=l[0])==null?void 0:Ce.name}').getFullList(200 /* batch size */, {
            sort: '-created',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(ke=l[0])==null?void 0:ke.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `),i&9&&(g.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(ge=l[0])==null?void 0:ge.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(ye=l[0])==null?void 0:ye.name}').getFullList(
          batch: 200,
          sort: '-created',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(ve=l[0])==null?void 0:ve.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `),R.$set(g),(!N||i&1)&&ht!==(ht=l[0].name+"")&&we(X,ht),l[1]?y||(y=Re(),y.c(),y.m(F,null)):y&&(y.d(1),y=null),i&20&&(ot=l[4],S=Le(S,i,ue,1,l,ot,Nt,Q,He,Oe,null,Pe)),i&20&&(P=l[4],Be(),k=Le(k,i,qt,1,l,P,pe,T,Ie,Ee,null,Te),Ge())},i(l){if(!N){Bt(R.$$.fragment,l),Bt(et.$$.fragment,l),Bt(st.$$.fragment,l),Bt(nt.$$.fragment,l),Bt(H.$$.fragment,l);for(let i=0;i<P.length;i+=1)Bt(k[i]);N=!0}},o(l){It(R.$$.fragment,l),It(et.$$.fragment,l),It(st.$$.fragment,l),It(nt.$$.fragment,l),It(H.$$.fragment,l);for(let i=0;i<k.length;i+=1)It(k[i]);N=!1},d(l){l&&m(n),l&&m(b),l&&m(x),l&&m(Gt),te(R,l),l&&m(zt),l&&m(q),l&&m(it),l&&m(F),y&&y.d(),l&&m(rt),l&&m(ct),l&&m(Y),l&&m(O),te(et),te(st),te(nt),te(H),l&&m(Wt),l&&m(A),l&&m(mt),l&&m(K);for(let i=0;i<S.length;i+=1)S[i].d();for(let i=0;i<k.length;i+=1)k[i].d()}}}function Ye(d,n,a){let r,f,{collection:p=new ze}=n,b=200,x=[];const $=h=>a(2,b=h.code);return d.$$set=h=>{"collection"in h&&a(0,p=h.collection)},d.$$.update=()=>{d.$$.dirty&1&&a(1,r=(p==null?void 0:p.listRule)===null),d.$$.dirty&3&&p!=null&&p.id&&(x.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[_e.dummyCollectionRecord(p),_e.dummyCollectionRecord(p)]},null,2)}),x.push({code:400,body:`
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),r&&x.push({code:403,body:`
                    {
                      "code": 403,
                      "message": "Only admins can access this action.",
                      "data": {}
                    }
                `}))},a(3,f=_e.getApiExampleUrl(Ue.baseUrl)),[p,r,b,f,x,$]}class el extends Se{constructor(n){super(),Ne(this,n,Ye,Xe,qe,{collection:0})}}export{el as default};
