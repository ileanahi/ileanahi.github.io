!function(e){"use strict";e.className=e.className.replace(/\bno-js\b/g,"")+" js ";const t=anime.timeline({easing:"easeInOutCubic",duration:800,autoplay:!1}).add({targets:"#loader",opacity:0,duration:1e3,begin:function(e){window.scrollTo(0,0)}}).add({targets:"#preloader",opacity:0,complete:function(e){document.querySelector("#preloader").style.visibility="hidden",document.querySelector("#preloader").style.display="none"}}).add({targets:".s-header",translateY:[-100,0],opacity:[0,1]},"-=200").add({targets:[".s-intro .text-pretitle",".s-intro .text-huge-title"],translateX:[100,0],opacity:[0,1],delay:anime.stagger(400)}).add({targets:".circles span",keyframes:[{opacity:[0,.3]},{opacity:[.3,.1],delay:anime.stagger(100,{direction:"reverse"})}],delay:anime.stagger(100,{direction:"reverse"})}).add({targets:".intro-social li",translateX:[-50,0],opacity:[0,1],delay:anime.stagger(100,{direction:"reverse"})}).add({targets:".intro-scrolldown",translateY:[100,0],opacity:[0,1]},"-=800");document.querySelector("#preloader")&&window.addEventListener("load",function(){document.querySelector("html").classList.remove("ss-preload"),document.querySelector("html").classList.add("ss-loaded"),document.querySelectorAll(".ss-animated").forEach(function(e){e.classList.remove("ss-animated")}),t.play()}),function(){const e=document.querySelector(".mobile-menu-toggle"),t=document.querySelector(".main-nav-wrap"),n=document.querySelector("body");e&&t&&(e.addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("is-clicked"),n.classList.toggle("menu-is-open")}),t.querySelectorAll(".main-nav a").forEach(function(t){t.addEventListener("click",function(t){window.matchMedia("(max-width: 800px)").matches&&(e.classList.toggle("is-clicked"),n.classList.toggle("menu-is-open"))})}),window.addEventListener("resize",function(){window.matchMedia("(min-width: 801px)").matches&&(n.classList.contains("menu-is-open")&&n.classList.remove("menu-is-open"),e.classList.contains("is-clicked")&&e.classList.remove("is-clicked"))}))}(),function(){const e=document.querySelectorAll(".target-section");window.addEventListener("scroll",function(){let t=window.pageYOffset;e.forEach(function(e){const n=e.offsetHeight,i=e.offsetTop-50,a=e.getAttribute("id");t>i&&t<=i+n?document.querySelector(".main-nav a[href*="+a+"]").parentNode.classList.add("current"):document.querySelector(".main-nav a[href*="+a+"]").parentNode.classList.remove("current")})})}(),function(){const e=document.querySelectorAll("[data-animate-block]");window.addEventListener("scroll",function(){let t=window.pageYOffset;e.forEach(function(e){const n=window.innerHeight,i=e.offsetTop+.2*n-n,a=e.offsetHeight,o=i+a,s=t>i&&t<=o,c=e.classList.contains("ss-animated");s&&!c&&anime({targets:e.querySelectorAll("[data-animate-el]"),opacity:[0,1],translateY:[100,0],delay:anime.stagger(400,{start:200}),duration:800,easing:"easeInOutCubic",begin:function(t){e.classList.add("ss-animated")}})})})}(),new Swiper(".swiper-container",{slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{401:{slidesPerView:1,spaceBetween:20},801:{slidesPerView:2,spaceBetween:32},1201:{slidesPerView:2,spaceBetween:80}}}),function(){const e=document.querySelectorAll(".folio-list__item-link"),t=[];e.forEach(function(e){let n=e.getAttribute("href"),i=basicLightbox.create(document.querySelector(n),{onShow:function(e){document.addEventListener("keydown",function(t){27===(t=t||window.event).keyCode&&e.close()})}});t.push(i)}),e.forEach(function(e,n){e.addEventListener("click",function(e){e.preventDefault(),t[n].show()})})}(),document.querySelectorAll(".alert-box").forEach(function(e){e.addEventListener("click",function(t){t.target.matches(".alert-box__close")&&(t.stopPropagation(),t.target.parentElement.classList.add("hideit"),setTimeout(function(){e.style.display="none"},500))})}),function(){const e=document.querySelectorAll(".smoothscroll"),t=new MoveTo({tolerance:0,duration:1200,easing:"easeInOutCubic",container:window},{easeInQuad:function(e,t,n,i){return n*(e/=i)*e+t},easeOutQuad:function(e,t,n,i){return-n*(e/=i)*(e-2)+t},easeInOutQuad:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInOutCubic:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}});e.forEach(function(e){t.registerTrigger(e)})}()}(document.documentElement);