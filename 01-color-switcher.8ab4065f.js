const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");d.disabled=!0,t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,timerId=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(()=>{clearInterval(timerId),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.8ab4065f.js.map
