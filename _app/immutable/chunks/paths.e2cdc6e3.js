import{n as b,s as h}from"./scheduler.7a274a43.js";const t=[];function d(n,l=b){let i;const o=new Set;function r(e){if(h(n,e)&&(n=e,i)){const c=!t.length;for(const s of o)s[1](),t.push(s,n);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(n))}function _(e,c=b){const s=[e,c];return o.add(s),o.size===1&&(i=l(r,f)||b),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_cex3kh)==null?void 0:u.base)??"";var a;const k=((a=globalThis.__sveltekit_cex3kh)==null?void 0:a.assets)??p;export{k as a,p as b,d as w};
