import{n as b,s as h}from"./scheduler.1a2ab97c.js";const e=[];function g(n,l=b){let i;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(i=l(r,f)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const d=((u=globalThis.__sveltekit_1hd9tvc)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_1hd9tvc)==null?void 0:a.assets)??d;export{q as a,d as b,g as w};
