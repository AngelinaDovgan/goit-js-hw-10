import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const c=document.querySelector("button"),u=document.getElementById("datetime-picker"),v=document.querySelector(".timer");c.disabled=!0;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<Date.now()?f.success({title:"Error",message:"Please choose a date in the future",closeOnEscape:!0,color:"red",position:"topRight"}):c.disabled=!1}};h(u,T);class p{constructor({onTick:t}){this.onTick=t,this.interval=null}start(t){this.interval=setInterval(()=>{const o=Date.now()-t,n=this.convertMs(o);this.onTick(n)},1e3)}stop(){clearInterval(this.interval);const t=this.convertMs(0);this.onTick(t)}convertMs(t){const i=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:a,minutes:l,seconds:m}}}const y=new p({onTick:k});function s(e){return String(e).padStart(2,"0")}function k({days:e,hours:t,minutes:r,seconds:o}){const n=s(e),d=s(t),i=s(r),a=s(o);v.textContent=`${n}:${d}:${i}:${a}`}c.addEventListener("click",()=>{const e=new Date(u.value).getTime();y.start(e),c.disabled=!0,u.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map