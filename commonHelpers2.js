import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const l=(e,o)=>new Promise((s,i)=>{setTimeout(()=>{o==="fulfilled"?s(`✅ Fulfilled promise in ${e}ms`):i(`❌ Rejected promise in ${e}ms`)},e)}),t=document.querySelector(".form");t.addEventListener("submit",e=>{e.preventDefault(),l(t.delay.value,t.state.value).then(o=>{r.success({message:o,title:"OK",titleColor:"#fff",position:"topRight",messageColor:"#fff",backgroundColor:"rgba(89, 161, 13, 1)"})}).catch(o=>{r.error({message:o,title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map