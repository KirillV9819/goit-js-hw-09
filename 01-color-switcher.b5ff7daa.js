!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");n.disabled=!0;var a=null;e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b5ff7daa.js.map
