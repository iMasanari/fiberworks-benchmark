const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};f();const I="PLACEMENT_MUTATION",T="REORDER_MUTATION",g="UPDATE_MUTATION",a="DELETION_MUTATION",E="#TEXT",d=new Map;let l=0;const i=(e,n,r)=>{n in e&&n!=="list"?e[n]=r:r==null||r===!1?e.removeAttribute(n):e.setAttribute(n,r)},y=(e,n)=>{if(e.nodeType===E){const t=document.createTextNode(e.props.nodeValue);return d.set(e.domId,t),t}const r=document.createElement(e.nodeType);d.set(e.domId,r),r.dataset.domId=e.domId+"";for(const t in e.props)i(r,t,e.props[t]);for(const t in e.events){const s=new Function("a",`return(${e.events[t]})(a)`),o=c=>{n.postMessage({type:"event",domId:e.domId,event:t,payload:s(c),workingId:++l})};r.addEventListener(t,o,!1)}return r},u=(e,n)=>{if(e.type===I){const r=e.siblingId!=null?d.get(e.siblingId):null;d.get(e.parentId).insertBefore(y(e,n),r)}else if(e.type===g){const r=d.get(e.domId);for(const t in e.props)i(r,t,e.props[t])}else if(e.type===T){const r=d.get(e.domId),t=e.siblingId!=null?d.get(e.siblingId):null;d.get(e.parentId).insertBefore(r,t)}else if(e.type===a){const r=d.get(e.domId);r.parentNode.removeChild(r),d.delete(e.domId),e.children.forEach(t=>d.delete(t))}},A=(e,n)=>{const r=typeof e=="string"?new Worker(e):e;let t=[];return d.set(0,n),r.addEventListener("message",({data:s})=>{t.push(s.mutations),s.workingId===l&&(t.forEach(o=>o.forEach(c=>u(c,r))),t=[])}),{render:s=>{r.postMessage({type:"render",payload:s})}}};const N=new Worker("/fiberworks-benchmark/assets/worker.0722ac75.js",{type:"module"}),p=A(N,document.getElementById("root"));p.render({dataSetRepeat:1});globalThis.setDataSetRepeatSize=e=>{p.render({dataSetRepeat:e})};
