import{n as c,s as h}from"./scheduler.1a2ab97c.js";const t=[];function d(n,l=c){let i;const o=new Set;function r(e){if(h(n,e)&&(n=e,i)){const b=!t.length;for(const s of o)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(n))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(i=l(r,f)||c),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1he31vj)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_1he31vj)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
