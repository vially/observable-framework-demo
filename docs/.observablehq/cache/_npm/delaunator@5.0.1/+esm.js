/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/delaunator@5.0.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{orient2d as t}from"../robust-predicates@3.0.2/+esm.js";const s=Math.pow(2,-52),i=new Uint32Array(512);class e{static from(t,s=o,i=_){const h=t.length,n=new Float64Array(2*h);for(let e=0;e<h;e++){const h=t[e];n[2*e]=s(h),n[2*e+1]=i(h)}return new e(n)}constructor(t){const s=t.length>>1;if(s>0&&"number"!=typeof t[0])throw new Error("Expected coords to contain numbers.");this.coords=t;const i=Math.max(2*s-5,0);this._triangles=new Uint32Array(3*i),this._halfedges=new Int32Array(3*i),this._hashSize=Math.ceil(Math.sqrt(s)),this._hullPrev=new Uint32Array(s),this._hullNext=new Uint32Array(s),this._hullTri=new Uint32Array(s),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(s),this._dists=new Float64Array(s),this.update()}update(){const{coords:i,_hullPrev:e,_hullNext:n,_hullTri:a,_hullHash:o}=this,_=i.length>>1;let c=1/0,f=1/0,u=-1/0,d=-1/0;for(let t=0;t<_;t++){const s=i[2*t],e=i[2*t+1];s<c&&(c=s),e<f&&(f=e),s>u&&(u=s),e>d&&(d=e),this._ids[t]=t}const g=(c+u)/2,y=(f+d)/2;let w,b,A;for(let t=0,s=1/0;t<_;t++){const e=h(g,y,i[2*t],i[2*t+1]);e<s&&(w=t,s=e)}const k=i[2*w],S=i[2*w+1];for(let t=0,s=1/0;t<_;t++){if(t===w)continue;const e=h(k,S,i[2*t],i[2*t+1]);e<s&&e>0&&(b=t,s=e)}let x=i[2*b],z=i[2*b+1],U=1/0;for(let t=0;t<_;t++){if(t===w||t===b)continue;const s=r(k,S,x,z,i[2*t],i[2*t+1]);s<U&&(A=t,U=s)}let p=i[2*A],M=i[2*A+1];if(U===1/0){for(let t=0;t<_;t++)this._dists[t]=i[2*t]-i[0]||i[2*t+1]-i[1];l(this._ids,this._dists,0,_-1);const t=new Uint32Array(_);let s=0;for(let i=0,e=-1/0;i<_;i++){const h=this._ids[i],n=this._dists[h];n>e&&(t[s++]=h,e=n)}return this.hull=t.subarray(0,s),this.triangles=new Uint32Array(0),void(this.halfedges=new Uint32Array(0))}if(t(k,S,x,z,p,M)<0){const t=b,s=x,i=z;b=A,x=p,z=M,A=t,p=s,M=i}const T=function(t,s,i,e,h,n){const r=i-t,l=e-s,a=h-t,o=n-s,_=r*r+l*l,c=a*a+o*o,f=.5/(r*o-l*a);return{x:t+(o*_-l*c)*f,y:s+(r*c-a*_)*f}}(k,S,x,z,p,M);this._cx=T.x,this._cy=T.y;for(let t=0;t<_;t++)this._dists[t]=h(i[2*t],i[2*t+1],T.x,T.y);l(this._ids,this._dists,0,_-1),this._hullStart=w;let m=3;n[w]=e[A]=b,n[b]=e[w]=A,n[A]=e[b]=w,a[w]=0,a[b]=1,a[A]=2,o.fill(-1),o[this._hashKey(k,S)]=w,o[this._hashKey(x,z)]=b,o[this._hashKey(p,M)]=A,this.trianglesLen=0,this._addTriangle(w,b,A,-1,-1,-1);for(let h,r,l=0;l<this._ids.length;l++){const _=this._ids[l],c=i[2*_],f=i[2*_+1];if(l>0&&Math.abs(c-h)<=s&&Math.abs(f-r)<=s)continue;if(h=c,r=f,_===w||_===b||_===A)continue;let u=0;for(let t=0,s=this._hashKey(c,f);t<this._hashSize&&(u=o[(s+t)%this._hashSize],-1===u||u===n[u]);t++);u=e[u];let d,g=u;for(;d=n[g],t(c,f,i[2*g],i[2*g+1],i[2*d],i[2*d+1])>=0;)if(g=d,g===u){g=-1;break}if(-1===g)continue;let y=this._addTriangle(g,_,n[g],-1,-1,a[g]);a[_]=this._legalize(y+2),a[g]=y,m++;let k=n[g];for(;d=n[k],t(c,f,i[2*k],i[2*k+1],i[2*d],i[2*d+1])<0;)y=this._addTriangle(k,_,d,a[_],-1,a[k]),a[_]=this._legalize(y+2),n[k]=k,m--,k=d;if(g===u)for(;d=e[g],t(c,f,i[2*d],i[2*d+1],i[2*g],i[2*g+1])<0;)y=this._addTriangle(d,_,g,-1,a[g],a[d]),this._legalize(y+2),a[d]=y,n[g]=g,m--,g=d;this._hullStart=e[_]=g,n[g]=e[k]=_,n[_]=k,o[this._hashKey(c,f)]=_,o[this._hashKey(i[2*g],i[2*g+1])]=g}this.hull=new Uint32Array(m);for(let t=0,s=this._hullStart;t<m;t++)this.hull[t]=s,s=n[s];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,s){return Math.floor(function(t,s){const i=t/(Math.abs(t)+Math.abs(s));return(s>0?3-i:1+i)/4}(t-this._cx,s-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:s,_halfedges:e,coords:h}=this;let r=0,l=0;for(;;){const a=e[t],o=t-t%3;if(l=o+(t+2)%3,-1===a){if(0===r)break;t=i[--r];continue}const _=a-a%3,c=o+(t+1)%3,f=_+(a+2)%3,u=s[l],d=s[t],g=s[c],y=s[f];if(n(h[2*u],h[2*u+1],h[2*d],h[2*d+1],h[2*g],h[2*g+1],h[2*y],h[2*y+1])){s[t]=y,s[a]=u;const h=e[f];if(-1===h){let s=this._hullStart;do{if(this._hullTri[s]===f){this._hullTri[s]=t;break}s=this._hullPrev[s]}while(s!==this._hullStart)}this._link(t,h),this._link(a,e[l]),this._link(l,f);const n=_+(a+1)%3;r<i.length&&(i[r++]=n)}else{if(0===r)break;t=i[--r]}}return l}_link(t,s){this._halfedges[t]=s,-1!==s&&(this._halfedges[s]=t)}_addTriangle(t,s,i,e,h,n){const r=this.trianglesLen;return this._triangles[r]=t,this._triangles[r+1]=s,this._triangles[r+2]=i,this._link(r,e),this._link(r+1,h),this._link(r+2,n),this.trianglesLen+=3,r}}function h(t,s,i,e){const h=t-i,n=s-e;return h*h+n*n}function n(t,s,i,e,h,n,r,l){const a=t-r,o=s-l,_=i-r,c=e-l,f=h-r,u=n-l,d=_*_+c*c,g=f*f+u*u;return a*(c*g-d*u)-o*(_*g-d*f)+(a*a+o*o)*(_*u-c*f)<0}function r(t,s,i,e,h,n){const r=i-t,l=e-s,a=h-t,o=n-s,_=r*r+l*l,c=a*a+o*o,f=.5/(r*o-l*a),u=(o*_-l*c)*f,d=(r*c-a*_)*f;return u*u+d*d}function l(t,s,i,e){if(e-i<=20)for(let h=i+1;h<=e;h++){const e=t[h],n=s[e];let r=h-1;for(;r>=i&&s[t[r]]>n;)t[r+1]=t[r--];t[r+1]=e}else{let h=i+1,n=e;a(t,i+e>>1,h),s[t[i]]>s[t[e]]&&a(t,i,e),s[t[h]]>s[t[e]]&&a(t,h,e),s[t[i]]>s[t[h]]&&a(t,i,h);const r=t[h],o=s[r];for(;;){do{h++}while(s[t[h]]<o);do{n--}while(s[t[n]]>o);if(n<h)break;a(t,h,n)}t[i+1]=t[n],t[n]=r,e-h+1>=n-i?(l(t,s,h,e),l(t,s,i,n-1)):(l(t,s,i,n-1),l(t,s,h,e))}}function a(t,s,i){const e=t[s];t[s]=t[i],t[i]=e}function o(t){return t[0]}function _(t){return t[1]}export{e as default};
