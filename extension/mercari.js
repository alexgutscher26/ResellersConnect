(()=>{var e=document.createElement("script");e.src=chrome.runtime.getURL("mercariPage.js"),e.onload=function(){this.remove()},(document.head||document.documentElement).appendChild(e);const t="CREATE:CREATE_LISTING_MERCARI",r="RETURN:DELIST_LISTING_MERCARI";function n(e,t,r=(()=>{})){if(!e||!e.data)return;const{source:n,payload:o}=e.data;n&&null!=t&&n===t&&r(o)}function o(e,t={},r=5e5,o=0,s=(()=>{})){return e=`${e}_EXTENSION`,o&&(r+=o),new Promise(((c,a)=>{setTimeout((()=>{((e,t={})=>{t.message=e,window.postMessage({source:"contentScriptEvent",payload:t},"*")})(e,t)}),o);const i=setTimeout((()=>{a(new Error(`Failed to recieve response from extension after ${r} msecs`))}),r);window.addEventListener("message",(t=>n(t,e,(e=>{e&&"success"===e.type?(clearTimeout(i),s(e),c(e)):e&&"failed"===e.type?(clearTimeout(i),s(e),a(e)):(clearTimeout(i),s(e),a({errorMessage:"An error occurred"})),window.removeEventListener("message",n,!0)}))),!0)}))}chrome.runtime.onMessage.addListener((function(e,n,s){const{message:c,payload:a}=e;if(c==t){try{o(t,a,5e5,0,(e=>{s(e)}))}catch(e){}return!0}if(c==r){try{o(r,a,5e5,0,(e=>{s(e)}))}catch(e){}return!0}}))})();
//# sourceMappingURL=mercari.js.map