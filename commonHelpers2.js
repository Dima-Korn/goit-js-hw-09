import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const m=document.querySelector(".feedback-form"),a=m.querySelector('input[name="email"]'),t=m.querySelector('textarea[name="message"]');function r(){const e={email:a.value.trim(),message:t.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}function s(){const e=localStorage.getItem("feedback-form-state");if(e){const o=JSON.parse(e);a.value=o.email,t.value=o.message}}s();m.addEventListener("input",r);m.addEventListener("submit",function(e){if(e.preventDefault(),a.value.trim()!==""&&t.value.trim()!==""){const o={email:a.value.trim(),message:t.value.trim()};console.log(o),localStorage.removeItem("feedback-form-state"),a.value="",t.value=""}});
//# sourceMappingURL=commonHelpers2.js.map