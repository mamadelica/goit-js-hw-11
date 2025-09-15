import{a as m,S as y,i as a}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="52296397-de86b3c84befd39f908867df6";async function b(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(g,{params:r})).data}catch{throw new Error("Failed to fetch images")}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${p}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){l.innerHTML=""}function S(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const d=document.querySelector(".form"),P=d.elements["search-text"];d.addEventListener("submit",async s=>{s.preventDefault();const r=P.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}v(),S();try{const o=await b(r);if(c(),o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(o.hits)}catch(o){c(),a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}});
//# sourceMappingURL=index.js.map
