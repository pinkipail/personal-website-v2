(this["webpackJsonppersonal-website-v2"]=this["webpackJsonppersonal-website-v2"]||[]).push([[3],{62:function(e,t,r){e.exports={canvasWrap:"Background_canvasWrap__3Qu-k",overlay:"Background_overlay__3X7A1"}},63:function(e,t,r){e.exports={header:"MainPage_header__20US7",footer:"MainPage_footer__25-pj"}},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){e.exports={block:"MainBlock_block__18Y5v",blockContent:"MainBlock_blockContent__UKSHX",title:"MainBlock_title__1ZzRK",textWrapper:"MainBlock_textWrapper__3YYPs",titleWrap:"MainBlock_titleWrap__2kB8y",subtitle:"MainBlock_subtitle__1dbgR",description:"MainBlock_description__rR-8i",scrollText:"MainBlock_scrollText__1UN0q"}},67:function(e,t,r){e.exports={container:"ScrollMessage_container__2TE7h",text:"ScrollMessage_text__2Hz8a",textHidden:"ScrollMessage_textHidden__Vxjmz"}},68:function(e,t,r){e.exports={container:"ScrollChangeText_container__1qVAo",text:"ScrollChangeText_text__3UedM",textHidden:"ScrollChangeText_textHidden__1XGAy"}},69:function(e,t,r){},70:function(e,t,r){e.exports={wrap:"SurfacingText_wrap__8f4Fe"}},71:function(e,t,r){e.exports={project:"RevealAnimation_project__1OzMN",line:"RevealAnimation_line__rYURf",textWrap:"RevealAnimation_textWrap__1wwdM"}},72:function(e,t,r){e.exports={container:"ContactLink_container__3fuuY",linkWrap:"ContactLink_linkWrap__3J_r_",underline:"ContactLink_underline__2Im7C",link:"ContactLink_link__zJWf0",icon:"ContactLink_icon__mRpfY"}},73:function(e,t,r){e.exports={container:"TextWave_container__1cDCm",word:"TextWave_word__3zYqh",char:"TextWave_char__3VqV6"}},74:function(e,t,r){e.exports={wrap:"Footer_wrap__fLB5z",container:"Footer_container__1ApKN",footer:"Footer_footer__9xAQZ",footerItem:"Footer_footerItem__yUdNY",footerBlock:"Footer_footerBlock__3nGmi",title:"Footer_title__b4HFR",contacts:"Footer_contacts__1sFoV",spliter:"Footer_spliter__2IP_P",copyright:"Footer_copyright__1Nwwv"}},75:function(e,t,r){e.exports={container:"BlockContainer_container__1_Vo1",content:"BlockContainer_content__HovkO"}},76:function(e,t,r){e.exports={container:"ParallaxScrolling_container__3MDWZ"}},77:function(e,t,r){e.exports={description:"BlockDescription_description__2p7ol"}},78:function(e,t,r){e.exports={wrap:"BlockImage_wrap__389Tn",container:"BlockImage_container__s3HJf",image:"BlockImage_image__204JK"}},79:function(e,t,r){e.exports={container:"BlockNumber_container__3jpMZ",wrap:"BlockNumber_wrap__jlfhw",number:"BlockNumber_number__8UDcz"}},80:function(e,t,r){e.exports={title:"BlockTitle_title__1SHhP"}},81:function(e,t,r){e.exports={container:"AboutJS_container__1j1Rd",title:"AboutJS_title__22HzC",description:"AboutJS_description__3DCIB",image:"AboutJS_image__3RFYv",number:"AboutJS_number__3rHcK"}},82:function(e,t,r){e.exports={container:"AboutMe_container__P6T3C",content:"AboutMe_content__2PcL4",description:"AboutMe_description__4SSUH",number:"AboutMe_number__1kond",title:"AboutMe_title__2jP81"}},83:function(e,t,r){e.exports={wrap:"Skills_wrap__5j0PO",title:"Skills_title__mYjRD",number:"Skills_number__iGg_c",bullets:"Skills_bullets__25tYH",text:"Skills_text__RYfzk",bulletsItem:"Skills_bulletsItem__1512w",footer:"Skills_footer__71qbt",textCircle:"Skills_textCircle__16ddK"}},84:function(e,t,r){e.exports={title:"Projects_title__3aDPD",blockNumber:"Projects_blockNumber__3ajTO",textWrap:"Projects_textWrap__3KnIy",project:"Projects_project___s7Fc",projectUnderline:"Projects_projectUnderline__2A146",projectDate:"Projects_projectDate__3YsC7",projectDescription:"Projects_projectDescription__1vowi",projectDescriptionTitle:"Projects_projectDescriptionTitle__3VuOv",projectDescriptionText:"Projects_projectDescriptionText__G1BL_",projectLocation:"Projects_projectLocation__2Qgbd"}},85:function(e,t,r){e.exports={container:"RunningLine_container__3PVGO"}},86:function(e,t,r){e.exports={container:"Hobby_container__18QBf",title:"Hobby_title__IGOxr",descriptionWrap:"Hobby_descriptionWrap__7vrC4",text:"Hobby_text__2yNiu",description:"Hobby_description__3ryc6",image:"Hobby_image__2v3vB",blockNumber:"Hobby_blockNumber__2wlGv"}},92:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Ve}));var n=r(8),c=r(1),a=r(38),i=r(2),s=r(28),o=r(29),l=r(30),u=r(39),j=r(91),b=r(93);function d(){var e=Object(c.useState)(),t=Object(n.a)(e,2),r=t[0],a=t[1],i=Object(b.a)().y;return Object(c.useEffect)((function(){var e=+(i/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100).toFixed(3);a(e)}),[i]),r||0}var f=r(0),m=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.call(this,{uniforms:{iTime:{type:"f",value:0},iResolution:{type:"f",value:1.5},iScrollPos:{type:"f",value:0},iTexture:{type:"t",value:null},iColorTheme:{type:"f",value:1}},fragmentShader:"\n// #extension GL_OES_standard_derivatives : enable\nuniform sampler2D iTexture;      \nuniform float iResolution;          \nuniform float iScrollPos;          \nuniform float iTime;          \nuniform float iMouse;          \nuniform float iColorTheme;          \n\nvec4 BS_A = vec4(3.0, -6.0, 0.0, 4.0) / 6.0;\nvec4 BS_B = vec4(-1.0, 6.0,-12.0, 8.0) / 6.0;\n\nvec4 powers(float x) { \n    return vec4(x*x*x, x*x, x, 1.0);\n}\n\nvec4 spline(float x, vec4 c0, vec4 c1, vec4 c2, vec4 c3) {\n    vec4 result;\n    result += c0*dot(BS_B, powers(x + 1.0));\n    result += c1*dot(BS_A, powers(x));\n    result += c2*dot(BS_A, powers(1.0 - x));\n    result += c3*dot(BS_B, powers(2.0 - x));\n    return result;\n}\n\n#define SAM(a,b) texture2D(iTexture, (i+vec2(a,b))/res)\nvec4 texture_Bicubic(vec2 t) {\n    vec2 res = vec2(512, 512);\n    vec2 p = res*t;\n    vec2 f = fract(p);\n    vec2 i = floor(p);\n    \n    return spline(\n        f.y,\n        spline(f.x, SAM(-1,-1), SAM(0,-1), SAM(1,-1), SAM(2,-1)),\n        spline(f.x, SAM(-1, 0), SAM(0, 0), SAM(1, 0), SAM(2, 0)),\n        spline(f.x, SAM(-1, 1), SAM(0, 1), SAM(1, 1), SAM(2, 1)),\n        spline(f.x, SAM(-1, 2), SAM(0, 2), SAM(1, 2), SAM(2, 2))\n    );\n}\n\nfloat eval(vec2 uv, float time) {\n    return cos(iTime * 0.05) + 11.0*texture_Bicubic(vec2(1., time) + uv).x;\n}\n\nfloat isoline(float val, float lg, float ref, float pas, float tickness) {\n    float v = abs(mod(val-ref+pas*0.5, pas)-pas*0.5)/lg - 0.1*tickness + 0.3;\n    return smoothstep(0.0,1.0, v);\n}\n\nvoid main() {\n    float time = iScrollPos * 0.001;\n    vec2 uv = gl_FragCoord.xy / iResolution * 0.0001;\n    float val = eval(uv, time);\n    float lg = 2.*length(vec2(dFdx(val), dFdy(val)));\n    float ref = 1.0;\n    \n    float k1 = isoline(val, lg, ref, 0.5, 1.0);\n    float k2 = isoline(val, lg, ref, 2.0, 3.0);\n    float k3 = isoline(val, lg, ref, 4.0, 10.0);\n\n    vec3 col = vec3(1.); \n    col *= k1 * k2 * k3;\n    if (iColorTheme > 0.5) {\n        col = vec3(iColorTheme) - col;\n        col *= vec3(130.0, 137.0, 143.0) / 255.0 * 0.7; // TODO: remove\n    } else {\n        col = vec3(iColorTheme) + col;\n        col *= col * 0.5; // TODO: remove\n    }\n    gl_FragColor = vec4(col,1);\n}\n"})}return r}(u.ShaderMaterial);Object(a.b)({PatternMaterial:m});var x=function(e){var t=e.darkTheme,r=Object(c.useRef)(),n=Object(j.a)("img/texture.jpg"),i=d();return Object(c.useEffect)((function(){!function(){var e=t?1:0;r.current.material.uniforms.iColorTheme.value=e}()}),[t]),Object(c.useLayoutEffect)((function(){n.wrapS=u.RepeatWrapping,n.wrapT=u.RepeatWrapping,r.current.material.uniforms.iTexture.value=n}),[]),Object(a.c)((function(e){!function(e){r.current.material.uniforms.iTime.value=e.elapsedTime}(e.clock),r.current.material.uniforms.iScrollPos.value=u.MathUtils.damp(r.current.material.uniforms.iScrollPos.value,-i,.2,.7)})),Object(f.jsxs)("mesh",{ref:r,scale:7,children:[Object(f.jsx)("planeBufferGeometry",{}),Object(f.jsx)("patternMaterial",{})]})},v=r(62),_=r.n(v),O={powerPreference:"high-performance",alpha:!1,antialias:!1,stencil:!1,depth:!1};var p=function(e){var t=e.darkTheme,r=e.children,s=Object(c.useRef)(),o=Object(c.useState)(t),l=Object(n.a)(o,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){!function(e,t,r){var n=t?"#000000":"#808080",c=i.w.timeline();c.to(e,{autoAlpha:"0",duration:0}),c.fromTo(e,{background:n,autoAlpha:"0"},{background:n,autoAlpha:"100%",duration:.4,ease:"power2.inOut"}),c.call(r),c.fromTo(e,{background:n,autoAlpha:"100%"},{background:n,autoAlpha:"0%",duration:.4,ease:"power2.inOut"})}(s.current,t,(function(){return j(t)}))}),[t]),Object(f.jsxs)("div",{className:_.a.canvasWrap,children:[Object(f.jsx)(a.a,{style:{position:"fixed",zIndex:0},gl:O,camera:{position:[0,0,1]},children:Object(f.jsx)(c.Suspense,{fallback:null,children:Object(f.jsx)(x,{darkTheme:u})})}),Object(f.jsx)("div",{ref:s,className:_.a.overlay}),r]})};var h=r(63),g=r.n(h);r(64);var N={ease:.1,current:0,previous:0,rounded:0},S=function(e){var t=e.children;!function(){var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(c.useState)(e),r=Object(n.a)(t,2),a=r[0],i=r[1];Object(c.useEffect)((function(){var t=function(){i(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[])}();var r=Object(c.useRef)();function a(){N.current=window.scrollY,N.previous+=(N.current-N.previous)*N.ease,Math.abs(N.current-N.previous)>1&&(r.current.style.transform="translateY(-".concat(Math.round(N.previous),"px)")),requestAnimationFrame((function(){return a()}))}return Object(c.useEffect)((function(){!function(){var e=r.current.getBoundingClientRect().height;document.body.style.height="".concat(e,"px")}()})),Object(c.useEffect)((function(){requestAnimationFrame((function(){return a()}))}),[]),Object(f.jsx)("div",{className:"parent",children:Object(f.jsx)("div",{ref:r,children:t})})};function y(e){var t=e.url,r=e.size;return Object(f.jsx)("img",{src:t,style:{height:r},alt:"logo"})}r(65);function k(){var e=1.25*d();return Object(f.jsxs)("svg",{className:"spinner",viewBox:"0 0 50 50",children:[Object(f.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"#ffffff",strokeWidth:"5",strokeDasharray:"".concat(e,", 125")}),Object(f.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"#ffffff59",strokeWidth:"5",strokeDasharray:"125"})]})}var w=r(43),T=r(66),A=r.n(T),E=r(27),R=r(67),M=r.n(R);var B=function(){var e=Object(c.useRef)({}),t=Object(c.useRef)(),r="scroll";return Object(c.useEffect)((function(){!function(e,t){var r={repeat:-1,duration:1.5,repeatDelay:1,ease:"power2.inOut"};i.w.fromTo(e,{y:"-200%"},Object(E.a)({y:"0%"},r)),i.w.fromTo(t,{y:"0%"},Object(E.a)({y:"200%"},r))}(e.current,t.current)}),[]),Object(f.jsxs)("div",{className:M.a.container,children:[Object(f.jsx)("span",{className:M.a.text,ref:e,children:r}),Object(f.jsx)("span",{className:M.a.text,ref:t,children:r}),Object(f.jsx)("span",{className:M.a.textHidden,children:r})]})};var C=r(68),P=r.n(C);var W=[{value:"FRAMEWORK-",fontSize:"18.5rem"},{value:"ANGULAR-",fontSize:"22rem"},{value:"REACT-",fontSize:"22rem"},{value:"WEB-",fontSize:"22rem"},{value:"HTML-CSS-JS-",fontSize:"18.5rem"},{value:"JAVASCRIPT-",fontSize:"20rem"},{value:"CONSOLE.LOG-",fontSize:"17rem"},{value:"STACKOVERFLOW-",fontSize:"13rem"}];var D=function(){var e=Object(c.useRef)({}),t=Object(c.useRef)(),r=Object(c.useRef)(0),a=Object(c.useState)(W[0]),s=Object(n.a)(a,2),o=s[0],l=s[1],u=Object(c.useRef)(i.w.timeline({paused:!0,repeat:-1,repeatDelay:10,onRepeat:function(){l(j)}}));function j(){r.current=r.current<W.length-1?r.current+1:0;var e=r.current;return W[e]}return Object(c.useEffect)((function(){var r,n;r=e.current,n=t.current,i.w.from(r,{y:"100%",duration:.5,delay:1,ease:"power1.out"}),i.w.to(n,{y:"100%",duration:0});var c=setTimeout((function(){!function(e,t,r){var n={duration:1.5,ease:"power2.inOut"};r.fromTo(e,{y:"0%"},Object(E.a)({y:"-200%"},n),0),r.fromTo(t,{y:"200%"},Object(E.a)({y:"0%"},n),0),r.fromTo(e,{y:"-200%"},Object(E.a)(Object(E.a)({y:"0%"},n),{},{delay:3}),1),r.fromTo(t,{y:"0%"},Object(E.a)({y:"200%",delay:3},n),1)}(e.current,t.current,u.current),u.current.play()}),1e4);return function(){clearTimeout(c)}}),[]),Object(f.jsxs)("div",{className:P.a.container,children:[Object(f.jsx)("span",{className:P.a.text,ref:e,children:"FRONTEND-"}),Object(f.jsx)("span",{className:P.a.text,ref:t,style:{fontSize:o.fontSize},children:o.value}),Object(f.jsx)("span",{className:P.a.textHidden,children:"DEVELOPER"})]})};function H(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useRef)();return Object(c.useEffect)((function(){var r;i.w.registerPlugin(w.a),L(e.current,0),L(t.current,.5,"-100%"),r=a.current,i.w.fromTo(r,{autoAlpha:1},{scrollTrigger:{trigger:r,start:"top center",toggleActions:"play none none reset"},autoAlpha:0,duration:.5}),function(e,t){i.w.fromTo(e,{scale:1},{scrollTrigger:{trigger:t,toggleActions:"none restart",end:"bottom top",start:"center center",scrub:.5},scale:10,duration:.5,ease:"power1.inOut"})}(n.current,n.current)}),[]),Object(f.jsx)("div",{className:A.a.block,children:Object(f.jsxs)("div",{className:A.a.blockContent,children:[Object(f.jsxs)("div",{className:A.a.textWrapper,ref:n,children:[Object(f.jsx)(D,{}),Object(f.jsx)("div",{className:A.a.titleWrap,children:Object(f.jsx)("div",{ref:e,className:A.a.title,children:"DEVELOPER"})}),Object(f.jsx)("div",{className:A.a.titleWrap,ref:r,children:Object(f.jsx)("div",{ref:t,className:A.a.subtitle,children:"\u0424\u0415\u0414\u041e\u0420\u041e\u0412 \u0412\u0410\u0421\u0418\u041b\u0418\u0419"})})]}),Object(f.jsx)("span",{ref:a,children:Object(f.jsx)(B,{})})]})})}function L(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"100%";i.w.from(e,{y:r,duration:.5,delay:1+t,ease:"power1.out"})}r(69);function F(e){var t=e.toggle;return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"toggle__wrap",children:[Object(f.jsx)("input",{id:"toggle-on",className:"toggle toggle-left",name:"toggle",value:"true",type:"radio",defaultChecked:!0,onChange:function(){return t(!0)}}),Object(f.jsx)("label",{htmlFor:"toggle-on",className:"toggle__btn cursor-anumation",children:"dark"}),Object(f.jsx)("input",{id:"toggle-off",className:"toggle toggle-right",name:"toggle",value:"false",type:"radio",onChange:function(){return t(!1)}}),Object(f.jsx)("label",{htmlFor:"toggle-off",className:"toggle__btn cursor-anumation",children:"light"})]})})}var z=r(26),I={toggleActions:"none play none reset",start:"-100% 125%",end:"-100% 90%"},G=r(70),J=r.n(G);var U=function(e){var t=e.children,r=e.reverse,a=e.sequence,i=void 0===a||a,s=Object(c.useRef)([]),o=Object(c.useRef)(),l=Object(c.useState)([]),u=Object(n.a)(l,2),j=u[0],b=u[1],d={reverse:r,sequence:i};return Object(c.useEffect)((function(){z.b.registerPlugin(w.a),function(){var e;r=t,Array.isArray(r)&&(e=t.filter((function(e){return Y(e)})));var r;Y(t)&&(e=[t]);b(e)}()}),[]),Object(c.useEffect)((function(){s.current.forEach((function(e,t){!function(e,t,r,n){z.b.fromTo(e,{y:r.reverse?"-100%":"100%"},{scrollTrigger:Object(E.a)(Object(E.a)({trigger:t},I),{},{start:"0% 125%",end:"-0% 90%"}),y:0,duration:.7,delay:r.sequence?.1*n:0,ease:"power2.inOut"})}(e,o.current,d,t)}))}),[j]),Object(f.jsx)("div",{ref:o,children:j.map((function(e,t){return Object(f.jsx)("div",{className:J.a.wrap,children:Object(f.jsx)("div",{ref:function(e){s.current[t]=e},children:e})},e)}))})};function Y(e){return"string"===typeof e}var V=r(71),q=r.n(V);var K=.7;var Q=function(e){var t=e.children,r=Object(c.useRef)(),n=Object(c.useRef)();return Object(c.useEffect)((function(){var e;z.b.registerPlugin(w.a),e=n.current,z.b.from(e,{scrollTrigger:Object(E.a)(Object(E.a)({trigger:e},I),{},{start:"0% 125%",end:"0% 90%"}),autoAlpha:0,duration:0,delay:K,marker:!0}),function(e){z.b.fromTo(e,{right:"100%"},{scrollTrigger:Object(E.a)(Object(E.a)({trigger:e},I),{},{start:"0% 125%",end:"0% 90%"}),right:"0%",duration:K,ease:"power1.inOut"}),z.b.fromTo(e,{left:"0%"},{scrollTrigger:Object(E.a)(Object(E.a)({trigger:e},I),{},{start:"0% 125%",end:"0% 90%"}),left:"100%",duration:K,delay:K,ease:"power1.inOut"})}(r.current)}),[]),Object(f.jsxs)("div",{className:q.a.project,children:[Object(f.jsx)("div",{className:q.a.textWrap,ref:n,children:t}),Object(f.jsx)("div",{className:q.a.line,ref:r})]})},X=r(72),Z=r.n(X);var $=function(e){var t=e.text,r=e.icon,n=e.href;return Object(f.jsx)(Q,{children:Object(f.jsxs)("div",{className:"".concat(Z.a.container," cursor-anumation"),children:[Object(f.jsx)("img",{className:Z.a.icon,src:r,alt:"icon"}),Object(f.jsxs)("div",{className:Z.a.linkWrap,children:[Object(f.jsx)("a",{className:"".concat(Z.a.link," cursor-anumation"),href:n,target:"_blank",rel:"noreferrer",children:t}),Object(f.jsx)("div",{className:Z.a.underline})]})]})})},ee=r(73),te=r.n(ee);var re="\u041a\u041e\u041d\u0415\u0426",ne=["#111111","#333333","#666666","#999999","#EEEEEE"];var ce=function(){var e=Object(c.useRef)(i.w.timeline({paused:!0})),t=Object(c.useRef)(new Array(ne.length).fill(0).map((function(){return[]})));return Object(c.useEffect)((function(){ne.forEach((function(r,n){re.split("").forEach((function(r,c){!function(e,t,r,n){e.fromTo(t,{x:"".concat(-.7*r,"rem"),y:"-55%"},{yoyo:!0,x:"".concat(-.7*r,"rem"),y:"55%",duration:.8,delay:-.03*r+.2*n,repeat:-1,repeatDelay:.1,ease:"power1.inOut"},0)}(e.current,t.current[n][c],n,c)}))})),e.current.play()}),[]),Object(f.jsx)("span",{className:te.a.container,children:ne.map((function(e,r){return Object(f.jsx)("span",{className:te.a.word,style:{color:e},children:re.split("").map((function(e,n){return Object(f.jsx)("span",{className:te.a.char,ref:function(e){t.current[r][n]=e},children:e},n)}))},r)}))})},ae=r(74),ie=r.n(ae);var se=function(){return Object(f.jsxs)("div",{className:ie.a.wrap,children:[Object(f.jsx)("div",{className:ie.a.container,children:Object(f.jsx)(ce,{})}),Object(f.jsxs)("div",{className:ie.a.footer,children:[Object(f.jsx)("div",{className:ie.a.footerBlock,children:Object(f.jsx)("div",{className:ie.a.title,children:Object(f.jsxs)(U,{sequence:!1,children:["\u0421\u0432\u044f\u0437\u044f\u0442\u044c\u0441\u044f ",Object(f.jsx)("br",{}),"\u0441\u043e \u043c\u043d\u043e\u0439:"]})})}),Object(f.jsx)("div",{className:ie.a.spliter}),Object(f.jsx)("div",{className:ie.a.footerItem,children:Object(f.jsxs)("div",{className:ie.a.contacts,children:[Object(f.jsx)($,{text:"fyodorov_vasya@list.ru",icon:"img/icons/mail.svg",href:"mailto:fyodorov_vasya@list.ru"}),Object(f.jsx)($,{text:"@twenty_seventh",icon:"img/icons/telegram.svg",href:"https://t.me/twenty_seventh"}),Object(f.jsx)($,{text:"github.com/pinkipail",icon:"img/icons/github.svg",href:"https://github.com/pinkipail"})]})}),Object(f.jsx)("div",{className:ie.a.copyright,children:"Copyright 2021 by Fedorov Vasiliy. All rights reserved."})]})]})},oe=r(75),le=r.n(oe);function ue(e){var t=e.children;return Object(f.jsx)("div",{className:le.a.container,children:Object(f.jsx)("div",{className:le.a.content,children:t})})}var je=r(76),be=r.n(je);function de(e){var t=e.children,r=e.deltaStart,n=void 0===r?"7rem":r,a=e.deltaEnd,i=void 0===a?"-7rem":a,s=Object(c.useRef)();return Object(c.useEffect)((function(){z.b.registerPlugin(w.a),function(e,t,r){z.b.fromTo(e,{y:t},{y:r,scrollTrigger:{trigger:e,scrub:.5}})}(s.current,n,i)}),[]),Object(f.jsx)("span",{ref:s,className:be.a.container,children:t})}var fe=r(77),me=r.n(fe);function xe(e){var t=e.children,r=e.deltaStart,n=e.deltaEnd;return Object(f.jsx)("div",{className:me.a.description,children:Object(f.jsx)(de,{deltaStart:r,deltaEnd:n,children:Object(f.jsx)(U,{children:t})})})}var ve=r(78),_e=r.n(ve);function Oe(e){var t=e.src,r=e.height,n=e.opacity,c=t.split("/").pop();return Object(f.jsx)("div",{className:_e.a.wrap,children:Object(f.jsx)(de,{deltaStart:"5rem",deltaEnd:"-5rem",children:Object(f.jsx)("span",{className:_e.a.container,children:Object(f.jsx)("img",{className:_e.a.image,src:t,alt:c,style:{height:r,opacity:n}})})})})}var pe=r(79),he=r.n(pe);function ge(e){var t=e.value,r=Object(c.useRef)([]);return Object(c.useEffect)((function(){z.b.registerPlugin(w.a),r.current.forEach((function(e){var t;t=e,z.b.from(t,{x:"-100%",scrollTrigger:Object(E.a)(Object(E.a)({trigger:t},I),{},{start:"0% 125%",end:"0% 90%"}),duration:1,ease:"power2.inOut"})}))}),[]),Object(f.jsx)(de,{deltaStart:"5rem",deltaEnd:"-5rem",children:Object(f.jsxs)("div",{className:he.a.container,children:[Object(f.jsx)("div",{className:he.a.wrap,children:Object(f.jsx)("div",{ref:function(e){r.current[0]=e},className:he.a.value,children:"0"})}),Object(f.jsx)("div",{className:he.a.wrap,children:Object(f.jsx)("div",{ref:function(e){r.current[1]=e},className:he.a.value,children:t})})]})})}var Ne=r(80),Se=r.n(Ne);function ye(e){var t=e.title;return Object(f.jsx)("div",{className:Se.a.title,children:t})}var ke=r(81),we=r.n(ke);function Te(){return Object(f.jsxs)(ue,{children:[Object(f.jsx)("div",{className:we.a.title,children:Object(f.jsx)(ye,{title:"\u041e \u0420\u0410\u0411\u041e\u0422\u0415:"})}),Object(f.jsxs)("div",{className:we.a.container,children:[Object(f.jsx)("div",{className:we.a.description,children:Object(f.jsxs)(xe,{children:["\u0421\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c.",Object(f.jsx)("br",{}),"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0432\u0435\u0431-",Object(f.jsx)("br",{}),"\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441 \u0430\u043a\u0446\u0435\u043d\u0442\u043e\u043c \u043d\u0430 \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439",Object(f.jsx)("br",{}),"\u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e\u0441\u0442\u044c",Object(f.jsx)("br",{}),"\u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439.",Object(f.jsx)("br",{})]})}),Object(f.jsx)("div",{className:we.a.image,children:Object(f.jsx)(Oe,{src:"img/js-logo.png",height:"57.5rem",opacity:"0.2"})})]}),Object(f.jsx)("div",{className:we.a.number,children:Object(f.jsx)(ge,{value:"3"})})]})}var Ae=r(82),Ee=r.n(Ae);function Re(){return Object(f.jsxs)(ue,{children:[Object(f.jsx)("div",{className:Ee.a.title,children:Object(f.jsx)(ye,{title:"\u041e\u0411\u041e \u041c\u041d\u0415:"})}),Object(f.jsx)("div",{className:Ee.a.description,children:Object(f.jsxs)(xe,{children:["\u041f\u0440\u0438\u0432\u0435\u0442\ufe0f, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0412\u0430\u0441\u0438\u043b\u0438\u0439. \u041c\u043d\u0435 22 \u0433\u043e\u0434\u0430.",Object(f.jsx)("br",{}),"\u0412\u044b\u0440\u043e\u0441 \u0432 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u0435\u0440\u0435\u0432\u043d\u0438 \u041d\u043e\u0432\u043e\u0435\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a\u043e\u0435,",Object(f.jsx)("br",{}),"\u0447\u0442\u043e \u0432 \u0410\u043b\u0442\u0430\u0439\u0441\u043a\u043e\u043c \u043a\u0440\u0430\u0435, \u043d\u0430 \u0437\u0430\u0434\u0432\u043e\u0440\u043a\u0430\u0445 \u0420\u043e\u0441\u0441\u0438\u0438.",Object(f.jsx)("br",{}),"\u0412 \u0432\u0443\u0437\u0435 \u0443\u0447\u0438\u043b\u0441\u044f \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \xab\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f",Object(f.jsx)("br",{}),"\u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f\xbb, \u043d\u043e \u043d\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u043c \u043a\u0443\u0440\u0441\u0435 \u0431\u0440\u043e\u0441\u0438\u043b \u0443\u043d\u0438\u0432\u0435\u0440",Object(f.jsx)("br",{}),"\u0438 \u043f\u0435\u0440\u0435\u0435\u0445\u0430\u043b \u043d\u0430 \u0437\u0430\u043f\u0430\u0434 \u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0438, \u0432 \u0413\u0440\u043e\u0434\u043d\u043e.",Object(f.jsx)("br",{})]})}),Object(f.jsx)(Oe,{src:"img/photo-me.jpg",height:"47.5rem"}),Object(f.jsx)("div",{className:Ee.a.number,children:Object(f.jsx)(ge,{value:"1"})})]})}var Me=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t;z.a.registerPlugin(w.a),t=e.current,z.a.to(t,{rotation:150,scrollTrigger:{trigger:t,scrub:.75},ease:"none"})}),[]),Object(f.jsx)("img",{ref:e,src:"img/circle.svg",alt:"skill",style:{height:"20rem"}})};var Be=r(83),Ce=r.n(Be);var Pe=["HTML","CSS","JavaScript","ES6+","W3C","Babel","Webpack","npm","yarn","Angular","TypeScript","RxJS","React ","Redux ","Next ","PWA ","UI/UX ","Photoshop ","Illustrator ","SASS ","BEM ","ESLint ","THREE.js","GSAP","WEBGL","Git ","CI/CD","Docker","Linux","SVG-animation"],We=function(){return Object(f.jsx)(ue,{children:Object(f.jsxs)("div",{className:Ce.a.wrap,children:[Object(f.jsx)("div",{className:Ce.a.title,children:Object(f.jsx)(ye,{title:"\u0422\u0415\u0425\u041d\u041e\u041b\u041e\u0413\u0418\u0418:"})}),Object(f.jsx)("div",{className:Ce.a.bullets,children:Pe.map((function(e){return Object(f.jsx)("span",{className:Ce.a.bulletsItem,children:e},e)}))}),Object(f.jsxs)("div",{className:Ce.a.footer,children:[Object(f.jsx)("div",{className:Ce.a.textCircle,children:Object(f.jsx)(Me,{})}),Object(f.jsx)("div",{className:Ce.a.number,children:Object(f.jsx)(ge,{value:"4"})})]})]})})},De=r(84),He=r.n(De);var Le=[{dateStart:"12.2019",dateEnd:"05.2020",name:"\u0424\u0420\u0418\u041b\u0410\u041d\u0421",description:"\u0414\u0438\u0437\u0430\u0439\u043d \u0438 \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u043e\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 React.",location:"\u0443\u0434\u0430\u043b\u0435\u043d\u043a\u0430"},{dateStart:"06.2020",dateEnd:"05.2021",name:"\u0420\u0422\u0418",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0430 \u0430\u0443\u0442\u0441\u043e\u0440\u0441 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 Angular.",location:"\u043a\u0430\u043b\u0443\u0433\u0430"},{dateStart:"06.2021",dateEnd:"\u043f\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",name:"SENLA",description:"\u0410\u0443\u0442\u0441\u0442\u0430\u0444\u0444\u0438\u043d\u0433. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 Angular \u0438 React.",location:"\u0433\u0440\u043e\u0434\u043d\u043e"}],Fe=function(){return Object(f.jsxs)(ue,{children:[Object(f.jsx)("div",{className:He.a.title,children:Object(f.jsx)(ye,{title:"\u041f\u0420\u041e\u0415\u041a\u0422\u042b:"})}),Le.map((function(e){return Object(f.jsx)("div",{className:He.a.project,children:Object(f.jsxs)(Q,{children:[Object(f.jsxs)("div",{className:He.a.textWrap,children:[Object(f.jsxs)("div",{className:He.a.projectDate,children:[e.dateStart," \u2014 ",Object(f.jsx)("br",{}),e.dateEnd]}),Object(f.jsxs)("div",{className:He.a.projectDescription,children:[Object(f.jsx)("div",{className:He.a.projectDescriptionTitle,children:e.name}),Object(f.jsx)("div",{className:He.a.projectDescriptionText,children:e.description})]}),Object(f.jsx)("div",{className:He.a.projectLocation,children:e.location})]}),Object(f.jsx)("div",{className:He.a.projectUnderline})]})},e.name)})),Object(f.jsx)("div",{className:He.a.blockNumber,children:Object(f.jsx)(ge,{value:"5"})})]})},ze=r(85),Ie=r.n(ze);var Ge=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t;i.w.registerPlugin(w.a),t=e.current,i.w.fromTo(t,{x:"100%"},{x:"-20%",ease:"power1.out",scrollTrigger:{trigger:t,scrub:1,start:"top 85%"}})}),[]),Object(f.jsx)("div",{className:Ie.a.container,ref:e,children:"\xab\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u2022 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f\xbb"})},Je=r(86),Ue=r.n(Je);var Ye=function(){return Object(f.jsx)("div",{className:Ue.a.container,children:Object(f.jsxs)("div",{className:Ue.a.descriptionWrap,children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{className:Ue.a.title,children:Object(f.jsx)(de,{deltaStart:"0",deltaEnd:"5rem",children:Object(f.jsx)(ye,{title:"\u0445\u043e\u0431\u0431\u0438:"})})}),Object(f.jsx)("div",{className:Ue.a.text,children:Object(f.jsx)(de,{deltaStart:"4rem",deltaEnd:"0",children:"\u0442\u043e \u0447\u0442\u043e \u043c\u0435\u043d\u044f \u0443\u0432\u043b\u0435\u043a\u0430\u0435\u0442"})}),Object(f.jsx)("div",{className:Ue.a.description,children:Object(f.jsxs)(xe,{deltaStart:"4rem",deltaEnd:"0",children:["\u041b\u044e\u0431\u043b\u044e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438, \u043b\u0435\u0442\u043e\u043c",Object(f.jsx)("br",{}),"\u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0443, \u0430 \u0432 \u043f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",Object(f.jsx)("br",{}),"\u0433\u043e\u0434\u0430 \u043f\u043e \u0432\u0435\u0447\u0435\u0440\u0430\u043c \u0437\u0430\u0432\u0438\u0441\u0430\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u043e\u043b\u043a\u0438 \u0438\u043b\u0438",Object(f.jsx)("br",{}),"\u0441\u0438\u0434\u0435\u0442\u044c \u0432 \u0431\u0430\u0440\u0435. \u041b\u044e\u0431\u043b\u044e \u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u0432\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u044b",Object(f.jsx)("br",{}),"\u0441 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u043c \u0441\u044e\u0436\u0435\u0442\u043e\u043c. \u041b\u044e\u0431\u043b\u044e \u0432 \u043f\u0435\u0440\u0435\u0440\u044b\u0432\u0430\u0445",Object(f.jsx)("br",{}),"\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u0438\u043d\u0443\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u0442\u0435\u0435\u0447\u043a\u043e\u0439 \u0432 \u043d\u0430\u0441-",Object(f.jsx)("br",{}),"\u0442\u043e\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043d\u0438\u0441. \u041b\u044e\u0431\u043b\u044e \u043f\u043e\u043a\u0443\u0448\u0430\u0442\u044c \u0438 \u043f\u043e\u0441\u043f\u0430\u0442\u044c.",Object(f.jsx)("br",{})]})}),Object(f.jsx)("img",{className:Ue.a.image,src:"img/ping-pong.gif",alt:"ping-pong",style:{height:"36rem"}}),Object(f.jsx)("div",{className:Ue.a.blockNumber,children:Object(f.jsx)(ge,{value:"2"})})]})})};function Ve(e){var t=e.onLoading,r=Object(c.useState)(!0),a=Object(n.a)(r,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){t()}),[]),Object(f.jsxs)(p,{darkTheme:i,children:[Object(f.jsxs)("div",{className:g.a.header,children:[Object(f.jsx)(y,{url:"img/logo.svg",size:"5.2rem"}),Object(f.jsx)(y,{url:"img/logo1.svg",size:"5.55rem"})]}),Object(f.jsxs)("div",{className:g.a.footer,children:[Object(f.jsx)(F,{toggle:function(e){s(e)}}),Object(f.jsx)(k,{})]}),Object(f.jsxs)(S,{children:[Object(f.jsx)(H,{}),Object(f.jsx)(Ge,{}),Object(f.jsx)(Re,{}),Object(f.jsx)(Ye,{}),Object(f.jsx)(Te,{}),Object(f.jsx)(We,{}),Object(f.jsx)(Fe,{}),Object(f.jsx)(se,{})]})]})}}}]);
//# sourceMappingURL=3.7e948dca.chunk.js.map