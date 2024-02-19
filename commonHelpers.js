import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const c=document.querySelector("[data-start]"),d=document.getElementById("datetime-picker"),v=document.querySelector(".timer");c.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<Date.now()?f.success({title:"Error",message:"Please choose a date in the future",closeOnEscape:!0,color:"red",position:"topRight"}):c.disabled=!1}};h(d,p);class T{constructor({onTick:t}){this.onTick=t,this.interval=null}start(t){this.interval=setInterval(()=>{const n=Date.now(),o=t-n;if(o<=0){this.stop();return}const s=this.convertMs(o);this.onTick(s)},1e3)}stop(){clearInterval(this.interval);const t=this.convertMs(0);this.onTick(t)}convertMs(t){const i=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:a,minutes:l,seconds:m}}}const y=new T({onTick:k});function r(e){return String(e).padStart(2,"0")}function k({days:e,hours:t,minutes:n,seconds:o}){const s=r(e),u=r(t),i=r(n),a=r(o);v.textContent=`${s}:${u}:${i}:${a}`}c.addEventListener("click",()=>{const e=new Date(d.value).getTime();y.start(e),c.disabled=!0,d.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map