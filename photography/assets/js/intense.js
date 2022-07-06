window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();var Intense=function(){"use strict";function e(e,n){for(var t in n)t in e||(e[t]=n[t]);return e}function n(e,n){for(var t in n)e.style[t]=n[t]}function t(e){var n=window.innerHeight/e.h;if(e.w*n>window.innerWidth)return{w:e.w*n,h:e.h*n,fit:!0};var t=window.innerWidth/e.w;return{w:e.w*t,h:e.h*t,fit:!1}}function i(e){var n;if(e.length)for(n=0;n<e.length;n++)r(e[n]);else r(e)}function r(e){(e.getAttribute("data-image")||e.src||e.href)&&e.addEventListener("click",function(n){"A"===e.tagName&&n.preventDefault(),L||A(this)},!1)}function o(){s()}function a(){cancelRequestAnimFrame(D)}function s(){D=requestAnimFrame(s),x()}function c(){z=document.body.style.overflow,document.body.style.overflow="hidden"}function d(){document.body.style.overflow=z}function l(e,n){if(e)e.className=e.className.replace("intense--loading",""),e.className=e.className.replace("intense--viewing",""),e.className+=" "+n;else{var t=document.querySelectorAll(".intense--viewing");[].forEach.call(t,function(e){e.className=e.className.replace("intense--viewing","").trim()})}}function u(e,t){var i={backgroundColor:"rgba(0,0,0,0.8)",width:"100%",height:"100%",position:"fixed",top:"0px",left:"0px",overflow:"hidden",zIndex:"999999",margin:"0px",webkitTransition:"opacity 150ms cubic-bezier( 0, 0, .26, 1 )",MozTransition:"opacity 150ms cubic-bezier( 0, 0, .26, 1 )",transition:"opacity 150ms cubic-bezier( 0, 0, .26, 1 )",webkitBackfaceVisibility:"hidden",opacity:"0"};R=document.createElement("figure"),R.appendChild(E),n(R,i);var r={cursor:'url( "data:image/png;base64,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" ) 25 25, no-drop'};n(E,r);var o={fontFamily:'Georgia, Times, "Times New Roman", serif',position:"fixed",bottom:"0px",left:"0px",padding:"20px",color:"#fff",wordSpacing:"0.2px",webkitFontSmoothing:"antialiased",textShadow:"-1px 0px 1px rgba(0,0,0,0.4)"},a=document.createElement("figcaption");if(n(a,o),e){var s={margin:"0px",padding:"0px",fontWeight:"normal",fontSize:"40px",letterSpacing:"0.5px",lineHeight:"35px",textAlign:"left"},c=document.createElement("h1");n(c,s),c.innerHTML=e,a.appendChild(c)}if(t){var d={margin:"0px",padding:"0px",fontWeight:"normal",fontSize:"20px",letterSpacing:"0.1px",maxWidth:"500px",textAlign:"left",background:"none",marginTop:"5px"},l=document.createElement("h2");n(l,d),l.innerHTML=t,a.appendChild(l)}R.appendChild(a),w(),V.xCurr=V.xDest=window.innerWidth/2,V.yCurr=V.yDest=window.innerHeight/2,document.body.appendChild(R),setTimeout(function(){R.style.opacity="1"},10)}function m(){d(),p(),a(),document.body.removeChild(R),L=!1,l(!1)}function w(){var e=t(k);E.width=e.w,E.height=e.h,Y=e.fit,H={w:E.width,h:E.height},N={w:window.innerWidth,h:window.innerHeight},I={x:N.w-H.w,y:N.h-H.h}}function A(e){l(e,"intense--loading");var n=e.getAttribute("data-image")||e.src||e.href,t=e.getAttribute("data-title")||e.title,i=e.getAttribute("data-caption");T&&(T.onload=null),T=new Image,T.onload=function(){k={w:T.width,h:T.height},E=this,u(t,i),c(),f(),s(),l(e,"intense--viewing")},T.src=n}function f(){R.addEventListener("mousemove",h,!1),R.addEventListener("touchmove",v,!1),window.addEventListener("resize",w,!1),window.addEventListener("keyup",g,!1),E.addEventListener("click",m,!1)}function p(){R.removeEventListener("mousemove",h,!1),R.removeEventListener("touchmove",v,!1),window.removeEventListener("resize",w,!1),window.removeEventListener("keyup",g,!1),E.removeEventListener("click",m,!1)}function h(e){V.xDest=e.clientX,V.yDest=e.clientY}function v(e){e.preventDefault(),V.xDest=window.innerWidth-e.touches[0].clientX,V.yDest=window.innerHeight-e.touches[0].clientY}function g(e){e.preventDefault(),e.keyCode===B&&m()}function x(){function e(e,n){return q?(n-e)/n:e/n}if(V.xCurr+=.05*(V.xDest-V.xCurr),V.yCurr+=.05*(V.yDest-V.yCurr),Y===!0){if(F+=V.xCurr-F,V.xCurr!==C){var n=parseFloat(e(F,N.w));n=I.x*n,E.style.webkitTransform="translate("+n+"px, 0px)",E.style.MozTransform="translate("+n+"px, 0px)",E.style.msTransform="translate("+n+"px, 0px)",C=V.xCurr}}else if(Y===!1&&(F+=V.yCurr-F,V.yCurr!==C)){var n=parseFloat(e(F,N.h));n=I.y*n,E.style.webkitTransform="translate( 0px, "+n+"px)",E.style.MozTransform="translate( 0px, "+n+"px)",E.style.msTransform="translate( 0px, "+n+"px)",C=V.yCurr}}function y(e){"invertInteractionDirection"in e&&(q=e.invertInteractionDirection)}function b(e,n){if(!e)throw"You need to pass an element!";n&&y(n),i(e)}var D,T,C,k,E,R,z,B=27,V={xCurr:0,yCurr:0,xDest:0,yDest:0},Y=!0,q=!1,F=0,H={w:0,h:0},N={w:0,h:0},I={x:0,y:0},L=!1;return e(b,{resize:w,start:o,stop:a,config:y})}();"undefined"!=typeof module&&module.exports&&(module.exports=Intense);