(this["webpackJsonppersonal-website-v2"]=this["webpackJsonppersonal-website-v2"]||[]).push([[3],{62:function(e,t,r){e.exports={canvasWrap:"Background_canvasWrap__2aV-7"}},63:function(e,t,r){e.exports={header:"MainPage_header__1nT_C",footer:"MainPage_footer__3_iEd"}},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){e.exports={block:"MainBlock_block__1XNC_",blockContent:"MainBlock_blockContent__1hI58",title:"MainBlock_title__QTnAx",textWrapper:"MainBlock_textWrapper__23upF",titleWrap:"MainBlock_titleWrap__2qyvb",subtitle:"MainBlock_subtitle__wvDm0",description:"MainBlock_description__1UB-3",scrollText:"MainBlock_scrollText__Dptsm"}},67:function(e,t,r){e.exports={container:"ScrollMessage_container__2rdK-",text:"ScrollMessage_text__1qw6C",textHidden:"ScrollMessage_textHidden__1F675"}},68:function(e,t,r){e.exports={container:"ScrollChangeText_container__2hZMA",text:"ScrollChangeText_text__3Q_qc",textHidden:"ScrollChangeText_textHidden__1BLw2",FRAMEWORK:"ScrollChangeText_FRAMEWORK__3rp_W",ANGULAR:"ScrollChangeText_ANGULAR__2zW7R",REACT:"ScrollChangeText_REACT__2NmW5",WEB:"ScrollChangeText_WEB__1gN0s",HTML:"ScrollChangeText_HTML__308JS",JAVASCRIPT:"ScrollChangeText_JAVASCRIPT__xpKzz",CONSOLE:"ScrollChangeText_CONSOLE__N_I6u",STACKOVERFLOW:"ScrollChangeText_STACKOVERFLOW__3477X"}},69:function(e,t,r){},70:function(e,t,r){e.exports={wrap:"SurfacingText_wrap__2FGmd"}},71:function(e,t,r){e.exports={project:"RevealAnimation_project__IpUxC",line:"RevealAnimation_line__139IB",textWrap:"RevealAnimation_textWrap__2GRZy"}},72:function(e,t,r){e.exports={container:"ContactLink_container__1gjbC",linkWrap:"ContactLink_linkWrap__25Tym",underline:"ContactLink_underline__1Jldd",link:"ContactLink_link__3-hjj",icon:"ContactLink_icon__15RW8"}},73:function(e,t,r){e.exports={container:"TextWave_container__2lL_j",word:"TextWave_word__gJHK6",char:"TextWave_char__18sWh",textHidden:"TextWave_textHidden__2i1uE"}},74:function(e,t,r){e.exports={wrap:"Footer_wrap__1vLly",container:"Footer_container__2iIMA",footer:"Footer_footer__37mTB",footerItem:"Footer_footerItem__1cQ7L",footerBlock:"Footer_footerBlock__15Ax1",title:"Footer_title__15S2Y",contacts:"Footer_contacts__1SFOj",spliter:"Footer_spliter__2YBJ8",copyright:"Footer_copyright__35c-W"}},75:function(e,t,r){e.exports={container:"BlockContainer_container__BSxjr",content:"BlockContainer_content__2aLZ2"}},76:function(e,t,r){e.exports={container:"ParallaxScrolling_container__2PPb_"}},77:function(e,t,r){e.exports={description:"BlockDescription_description__19FmQ"}},78:function(e,t,r){e.exports={wrap:"BlockImage_wrap__19Clx",container:"BlockImage_container__hOKJI",image:"BlockImage_image__1KjvJ"}},79:function(e,t,r){e.exports={container:"BlockNumber_container__2bsNJ",wrap:"BlockNumber_wrap__eEXKs",number:"BlockNumber_number__1YWCf"}},80:function(e,t,r){e.exports={title:"BlockTitle_title__3NWKA"}},81:function(e,t,r){e.exports={container:"AboutJS_container__3AZqM",title:"AboutJS_title__1HY-O",description:"AboutJS_description__1oEar",image:"AboutJS_image__3KY2M",number:"AboutJS_number__3Kozx"}},82:function(e,t,r){e.exports={container:"AboutMe_container__2p1lp",content:"AboutMe_content__3Lile",description:"AboutMe_description__36ViD",number:"AboutMe_number__2W9Ja",title:"AboutMe_title__nbP03"}},83:function(e,t,r){e.exports={wrap:"Skills_wrap__mF_2S",title:"Skills_title__3IqNm",number:"Skills_number__31LcC",bullets:"Skills_bullets__37H58",text:"Skills_text__3cCLl",bulletsItem:"Skills_bulletsItem__1xCvt",footer:"Skills_footer__12lxD",textCircle:"Skills_textCircle__3Ppor"}},84:function(e,t,r){e.exports={title:"Projects_title__2IlYl",blockNumber:"Projects_blockNumber__TaKS9",textWrap:"Projects_textWrap__ehYOV",project:"Projects_project__2uoPu",projectUnderline:"Projects_projectUnderline__2wcif",projectDate:"Projects_projectDate__2WIP1",projectDescription:"Projects_projectDescription__1V6CY",projectDescriptionTitle:"Projects_projectDescriptionTitle__1jQ-2",projectDescriptionText:"Projects_projectDescriptionText__3D3re",projectLocation:"Projects_projectLocation__2H_kl"}},85:function(e,t,r){e.exports={container:"RunningLine_container__24jrF"}},86:function(e,t,r){e.exports={container:"Hobby_container__1YkW4",title:"Hobby_title__34cOH",descriptionWrap:"Hobby_descriptionWrap__3Heoq",text:"Hobby_text__1Avio",description:"Hobby_description__jX7WU",image:"Hobby_image__3GcNz",blockNumber:"Hobby_blockNumber__1VYBO"}},92:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ze}));var n=r(8),c=r(1),a=r(38),i=r(28),s=r(29),o=r(30),l=r(39),j=(r(91),r(93));function u(){var e=Object(c.useState)(),t=Object(n.a)(e,2),r=t[0],a=t[1],i=Object(j.a)().y;return Object(c.useEffect)((function(){var e=+(i/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100).toFixed(3);a(e)}),[i]),r||0}var d=r(0),b=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(){return Object(i.a)(this,r),t.call(this,{uniforms:{iTime:{type:"f",value:0},iResolution:{type:"f",value:1.5},iScrollPos:{type:"f",value:0},iTexture:{type:"t",value:null},iColorTheme:{type:"f",value:1}},fragmentShader:"\n// #extension GL_OES_standard_derivatives : enable\nuniform sampler2D iTexture;      \nuniform float iResolution;          \nuniform float iScrollPos;          \nuniform float iTime;          \nuniform float iMouse;          \nuniform float iColorTheme;          \n\nvec4 BS_A = vec4(3.0, -6.0, 0.0, 4.0) / 6.0;\nvec4 BS_B = vec4(-1.0, 6.0,-12.0, 8.0) / 6.0;\n\nvec4 powers(float x) { \n    return vec4(x*x*x, x*x, x, 1.0);\n}\n\nvec4 spline(float x, vec4 c0, vec4 c1, vec4 c2, vec4 c3) {\n    vec4 result;\n    result += c0*dot(BS_B, powers(x + 1.0));\n    result += c1*dot(BS_A, powers(x));\n    result += c2*dot(BS_A, powers(1.0 - x));\n    result += c3*dot(BS_B, powers(2.0 - x));\n    return result;\n}\n\n#define SAM(a,b) texture2D(iTexture, (i+vec2(a,b))/res)\nvec4 texture_Bicubic(vec2 t) {\n    vec2 res = vec2(512, 512);\n    vec2 p = res*t;\n    vec2 f = fract(p);\n    vec2 i = floor(p);\n    \n    return spline(\n        f.y,\n        spline(f.x, SAM(-1,-1), SAM(0,-1), SAM(1,-1), SAM(2,-1)),\n        spline(f.x, SAM(-1, 0), SAM(0, 0), SAM(1, 0), SAM(2, 0)),\n        spline(f.x, SAM(-1, 1), SAM(0, 1), SAM(1, 1), SAM(2, 1)),\n        spline(f.x, SAM(-1, 2), SAM(0, 2), SAM(1, 2), SAM(2, 2))\n    );\n}\n\nfloat eval(vec2 uv, float time) {\n    return cos(iTime * 0.05) + 11.0*texture_Bicubic(vec2(1., time) + uv).x;\n}\n\nfloat isoline(float val, float lg, float ref, float pas, float tickness) {\n    float v = abs(mod(val-ref+pas*0.5, pas)-pas*0.5)/lg - 0.1*tickness + 0.3;\n    return smoothstep(0.0,1.0, v);\n}\n\nvoid main() {\n    float time = iScrollPos * 0.001;\n    vec2 uv = gl_FragCoord.xy / iResolution * 0.0001;\n    float val = eval(uv, time);\n    float lg = 2.*length(vec2(dFdx(val), dFdy(val)));\n    float ref = 1.0;\n    \n    float k1 = isoline(val, lg, ref, 0.5, 1.0);\n    float k2 = isoline(val, lg, ref, 2.0, 3.0);\n    float k3 = isoline(val, lg, ref, 4.0, 10.0);\n\n    vec3 col = vec3(1.); \n    col *= k1 * k2 * k3;\n    if (iColorTheme > 0.5) {\n        col = vec3(iColorTheme) - col;\n        col *= vec3(130.0, 137.0, 143.0) / 255.0 * 0.7; // TODO: remove\n    } else {\n        col = vec3(iColorTheme) + col;\n        col *= col * 0.5; // TODO: remove\n    }\n    gl_FragColor = vec4(col,1);\n}\n"})}return r}(l.ShaderMaterial);Object(a.b)({PatternMaterial:b});var f=r(62),_=r.n(f),x={powerPreference:"high-performance",alpha:!1,antialias:!1,stencil:!1,depth:!1};var O=function(e){var t=e.children;return Object(d.jsxs)("div",{className:_.a.canvasWrap,children:[Object(d.jsx)(a.a,{style:{position:"fixed",zIndex:0},gl:x,camera:{position:[0,0,1]},children:Object(d.jsx)(c.Suspense,{fallback:null})}),t]})},m=r(63),v=r.n(m),p=r(26);function h(e,t){p.b.to(e,{filter:"invert(".concat(+!t,")"),duration:1,ease:"power2.inOut"})}var g=r(43);r(64);var N={ease:.1,current:0,previous:0,rounded:0},S=function(e){var t=e.children;!function(){var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(c.useState)(e),r=Object(n.a)(t,2),a=r[0],i=r[1];Object(c.useEffect)((function(){var t=function(){i(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[])}();var r=Object(c.useRef)();function a(){var e=r.current.getBoundingClientRect().height;document.body.style.height="".concat(e,"px"),g.a.refresh(!0)}function i(){N.current=window.scrollY,N.previous+=(N.current-N.previous)*N.ease,Math.abs(N.current-N.previous)>1&&(r.current.style.transform="translateY(-".concat(Math.round(N.previous),"px)")),requestAnimationFrame((function(){return i()}))}return Object(c.useEffect)((function(){setTimeout((function(){a()}),1e3),a()})),Object(c.useEffect)((function(){requestAnimationFrame((function(){return i()}))}),[]),Object(d.jsx)("div",{className:"parent",children:Object(d.jsx)("div",{ref:r,children:t})})};function y(e){var t=e.url,r=e.height,n=e.width;return Object(d.jsx)("img",{src:t,style:{height:r,width:n},alt:"logo"})}r(65);function T(){var e=1.25*u();return Object(d.jsxs)("svg",{className:"spinner",viewBox:"0 0 50 50",children:[Object(d.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"#ffffff",strokeWidth:"5",strokeDasharray:"".concat(e,", 125")}),Object(d.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"#ffffff59",strokeWidth:"5",strokeDasharray:"125"})]})}var A=r(2),k=r(66),E=r.n(k),w=r(27),C=r(67),R=r.n(C);var W=function(){var e=Object(c.useRef)({}),t=Object(c.useRef)(),r="scroll";return Object(c.useEffect)((function(){!function(e,t){var r={repeat:-1,duration:1.5,repeatDelay:1,ease:"power2.inOut"};A.w.fromTo(e,{y:"-200%"},Object(w.a)({y:"0%"},r)),A.w.fromTo(t,{y:"0%"},Object(w.a)({y:"200%"},r))}(e.current,t.current)}),[]),Object(d.jsxs)("div",{className:R.a.container,children:[Object(d.jsx)("span",{className:R.a.text,ref:e,children:r}),Object(d.jsx)("span",{className:R.a.text,ref:t,children:r}),Object(d.jsx)("span",{className:R.a.textHidden,children:r})]})};var M=r(68),B=r.n(M);var L=[{value:"FRAMEWORK-",className:"FRAMEWORK"},{value:"ANGULAR-",className:"ANGULAR"},{value:"REACT-",className:"REACT"},{value:"WEB-",className:"WEB"},{value:"HTML-CSS-JS-",className:"HTML"},{value:"JAVASCRIPT-",className:"JAVASCRIPT"},{value:"CONSOLE.LOG-",className:"CONSOLE"},{value:"STACKOVERFLOW-",className:"STACKOVERFLOW"}];var P=function(){var e=Object(c.useRef)({}),t=Object(c.useRef)(),r=Object(c.useRef)(0),a=Object(c.useState)(L[0]),i=Object(n.a)(a,2),s=i[0],o=i[1],l=Object(c.useRef)(A.w.timeline({paused:!0,repeat:-1,repeatDelay:10,onRepeat:function(){o(j)}}));function j(){r.current=r.current<L.length-1?r.current+1:0;var e=r.current;return L[e]}return Object(c.useEffect)((function(){var r,n;r=e.current,n=t.current,A.w.from(r,{y:"100%",duration:.5,delay:1,ease:"power1.out"}),A.w.to(n,{y:"100%",duration:0});var c=setTimeout((function(){!function(e,t,r){var n={duration:1.5,ease:"power2.inOut"};r.fromTo(e,{y:"0%"},Object(w.a)({y:"-200%"},n),0),r.fromTo(t,{y:"200%"},Object(w.a)({y:"0%"},n),0),r.fromTo(e,{y:"-200%"},Object(w.a)(Object(w.a)({y:"0%"},n),{},{delay:3}),1),r.fromTo(t,{y:"0%"},Object(w.a)({y:"200%",delay:3},n),1)}(e.current,t.current,l.current),l.current.play()}),1e4);return function(){clearTimeout(c)}}),[]),Object(d.jsxs)("div",{className:B.a.container,children:[Object(d.jsx)("span",{className:B.a.text,ref:e,children:"FRONTEND-"}),Object(d.jsx)("span",{className:"".concat(B.a.text," ").concat(B.a[s.className]),ref:t,children:s.value}),Object(d.jsx)("span",{className:B.a.textHidden,children:"FRONTEND-"})]})};function F(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useRef)();return Object(c.useEffect)((function(){var r;A.w.registerPlugin(g.a),D(e.current,0),D(t.current,.5,"-100%"),r=a.current,A.w.fromTo(r,{autoAlpha:1},{scrollTrigger:{trigger:r,start:"top center",toggleActions:"play none none reset"},autoAlpha:0,duration:.5}),function(e,t){A.w.fromTo(e,{scale:1},{scrollTrigger:{trigger:t,toggleActions:"none restart",end:"bottom top",start:"center center",scrub:.5},scale:10,duration:.5,ease:"power1.inOut"})}(n.current,n.current)}),[]),Object(d.jsx)("div",{className:E.a.block,children:Object(d.jsxs)("div",{className:E.a.blockContent,children:[Object(d.jsxs)("div",{className:E.a.textWrapper,ref:n,children:[Object(d.jsx)(P,{}),Object(d.jsx)("div",{className:E.a.titleWrap,children:Object(d.jsx)("div",{ref:e,className:E.a.title,children:"DEVELOPER"})}),Object(d.jsx)("div",{className:E.a.titleWrap,ref:r,children:Object(d.jsx)("div",{ref:t,className:E.a.subtitle,children:"\u0424\u0415\u0414\u041e\u0420\u041e\u0412 \u0412\u0410\u0421\u0418\u041b\u0418\u0419"})})]}),Object(d.jsx)("span",{ref:a,children:Object(d.jsx)(W,{})})]})})}function D(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"100%";A.w.from(e,{y:r,duration:.5,delay:1+t,ease:"power1.out"})}var H="theme";var I=function(){var e=localStorage.getItem(H);return JSON.parse(e)}();function J(){var e=Object(c.useState)(I),t=Object(n.a)(e,2)[1];return[I,function(e){I=e,function(e){var t=JSON.stringify(e);localStorage.setItem(H,t)}(e),t(e)}]}r(69);function K(e){var t=e.toggle,r=J(),c=Object(n.a)(r,1)[0];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"toggle__wrap",children:[Object(d.jsx)("input",{id:"toggle-on",className:"toggle toggle-left",name:"toggle",value:"true",type:"radio",defaultChecked:c,onChange:function(){return t(!0)}}),Object(d.jsx)("label",{htmlFor:"toggle-on",className:"toggle__btn cursor-anumation",children:"dark"}),Object(d.jsx)("input",{id:"toggle-off",className:"toggle toggle-right",name:"toggle",value:"false",type:"radio",defaultChecked:!c,onChange:function(){return t(!1)}}),Object(d.jsx)("label",{htmlFor:"toggle-off",className:"toggle__btn cursor-anumation",children:"light"})]})})}var V={toggleActions:"none play none reset",start:"-100% 125%",end:"-100% 90%"},G=r(70),q=r.n(G);var U=function(e){var t=e.children,r=e.reverse,a=e.sequence,i=void 0===a||a,s=Object(c.useRef)([]),o=Object(c.useRef)(),l=Object(c.useState)([]),j=Object(n.a)(l,2),u=j[0],b=j[1],f={reverse:r,sequence:i};return Object(c.useEffect)((function(){p.b.registerPlugin(g.a),function(){var e;r=t,Array.isArray(r)&&(e=t.filter((function(e){return Y(e)})));var r;Y(t)&&(e=[t]);b(e)}()}),[]),Object(c.useEffect)((function(){s.current.forEach((function(e,t){!function(e,t,r,n){p.b.fromTo(e,{y:r.reverse?"-100%":"100%"},{scrollTrigger:Object(w.a)(Object(w.a)({trigger:t},V),{},{start:"0% 125%",end:"-0% 90%"}),y:0,duration:.7,delay:r.sequence?.1*n:0,ease:"power2.inOut"})}(e,o.current,f,t)}))}),[u]),Object(d.jsx)("div",{ref:o,children:u.map((function(e,t){return Object(d.jsx)("div",{className:q.a.wrap,children:Object(d.jsx)("div",{ref:function(e){s.current[t]=e},children:e})},e)}))})};function Y(e){return"string"===typeof e}var z=r(71),Q=r.n(z);var X=.7;var Z=function(e){var t=e.children,r=Object(c.useRef)(),n=Object(c.useRef)();return Object(c.useEffect)((function(){var e;p.b.registerPlugin(g.a),e=n.current,p.b.from(e,{scrollTrigger:Object(w.a)(Object(w.a)({trigger:e},V),{},{start:"0% 125%",end:"0% 90%"}),autoAlpha:0,duration:0,delay:X,marker:!0}),function(e){p.b.fromTo(e,{right:"100%"},{scrollTrigger:Object(w.a)(Object(w.a)({trigger:e},V),{},{start:"0% 125%",end:"0% 90%"}),right:"0%",duration:X,ease:"power1.inOut"}),p.b.fromTo(e,{left:"0%"},{scrollTrigger:Object(w.a)(Object(w.a)({trigger:e},V),{},{start:"0% 125%",end:"0% 90%"}),left:"100%",duration:X,delay:X,ease:"power1.inOut"})}(r.current)}),[]),Object(d.jsxs)("div",{className:Q.a.project,children:[Object(d.jsx)("div",{className:Q.a.textWrap,ref:n,children:t}),Object(d.jsx)("div",{className:Q.a.line,ref:r})]})},$=r(72),ee=r.n($);var te=function(e){var t=e.text,r=e.icon,n=e.href;return Object(d.jsx)(Z,{children:Object(d.jsxs)("div",{className:"".concat(ee.a.container," cursor-anumation"),children:[Object(d.jsx)("img",{className:ee.a.icon,src:r,alt:"icon"}),Object(d.jsxs)("div",{className:ee.a.linkWrap,children:[Object(d.jsx)("a",{className:"".concat(ee.a.link," cursor-anumation"),href:n,target:"_blank",rel:"noreferrer",children:t}),Object(d.jsx)("div",{className:ee.a.underline})]})]})})},re=r(73),ne=r.n(re);var ce="\u041a\u041e\u041d\u0415\u0426",ae=["#111111","#333333","#666666","#999999","#EEEEEE"];var ie=function(){var e=Object(c.useRef)(A.w.timeline({paused:!0})),t=Object(c.useRef)(new Array(ae.length).fill(0).map((function(){return[]})));return Object(c.useEffect)((function(){ae.forEach((function(r,n){ce.split("").forEach((function(r,c){!function(e,t,r,n){e.fromTo(t,{x:"".concat(-.7*r,"rem"),y:"-55%"},{yoyo:!0,x:"".concat(-.7*r,"rem"),y:"55%",duration:.8,delay:-.03*r+.2*n,repeat:-1,repeatDelay:.1,ease:"power1.inOut"},0)}(e.current,t.current[n][c],n,c)}))})),e.current.play()}),[]),Object(d.jsxs)("span",{className:ne.a.container,children:[ae.map((function(e,r){return Object(d.jsx)("span",{className:ne.a.word,style:{color:e},children:ce.split("").map((function(e,n){return Object(d.jsx)("span",{className:ne.a.char,ref:function(e){t.current[r][n]=e},children:e},n)}))},r)})),Object(d.jsx)("span",{className:ne.a.textHidden,children:ce})]})},se=r(74),oe=r.n(se);var le=function(){return Object(d.jsxs)("div",{className:oe.a.wrap,children:[Object(d.jsx)("div",{className:oe.a.container,children:Object(d.jsx)(ie,{})}),Object(d.jsxs)("div",{className:oe.a.footer,children:[Object(d.jsx)("div",{className:oe.a.footerBlock,children:Object(d.jsx)("div",{className:oe.a.title,children:Object(d.jsxs)(U,{sequence:!1,children:["\u0421\u0432\u044f\u0437\u044f\u0442\u044c\u0441\u044f ",Object(d.jsx)("br",{}),"\u0441\u043e \u043c\u043d\u043e\u0439:"]})})}),Object(d.jsx)("div",{className:oe.a.spliter}),Object(d.jsx)("div",{className:oe.a.footerItem,children:Object(d.jsxs)("div",{className:oe.a.contacts,children:[Object(d.jsx)(te,{text:"fyodorov_vasya@list.ru",icon:"img/icons/mail.svg",href:"mailto:fyodorov_vasya@list.ru"}),Object(d.jsx)(te,{text:"@twenty_seventh",icon:"img/icons/telegram.svg",href:"https://t.me/twenty_seventh"}),Object(d.jsx)(te,{text:"github.com/pinkipail",icon:"img/icons/github.svg",href:"https://github.com/pinkipail"})]})}),Object(d.jsx)("div",{className:oe.a.copyright,children:"Copyright 2021 by Fedorov Vasiliy. All rights reserved."})]})]})},je=r(75),ue=r.n(je);function de(e){var t=e.children;return Object(d.jsx)("div",{className:ue.a.container,children:Object(d.jsx)("div",{className:ue.a.content,children:t})})}var be=r(76),fe=r.n(be);function _e(e){var t=e.children,r=e.deltaStart,n=void 0===r?"7rem":r,a=e.deltaEnd,i=void 0===a?"-7rem":a,s=Object(c.useRef)();return Object(c.useEffect)((function(){p.b.registerPlugin(g.a),function(e,t,r){p.b.fromTo(e,{y:t},{y:r,scrollTrigger:{trigger:e,scrub:.5}})}(s.current,n,i)}),[]),Object(d.jsx)("span",{ref:s,className:fe.a.container,children:t})}var xe=r(77),Oe=r.n(xe);function me(e){var t=e.children,r=e.deltaStart,n=e.deltaEnd;return Object(d.jsx)("div",{className:Oe.a.description,children:Object(d.jsx)(_e,{deltaStart:r,deltaEnd:n,children:Object(d.jsx)(U,{children:t})})})}var ve=r(78),pe=r.n(ve);function he(e){var t=e.src,r=e.invert,a=e.style,i=t.split("/").pop(),s=Object(c.useRef)(),o=J(),l=Object(n.a)(o,1)[0];return Object(c.useEffect)((function(){r&&h(s.current,l)}),[l]),Object(d.jsx)("div",{className:pe.a.wrap,children:Object(d.jsx)(_e,{deltaStart:"5rem",deltaEnd:"-5rem",children:Object(d.jsx)("span",{className:pe.a.container,children:Object(d.jsx)("img",{ref:s,className:pe.a.image,src:t,alt:i,style:a})})})})}var ge=r(79),Ne=r.n(ge);function Se(e){var t=e.value,r=Object(c.useRef)([]);return Object(c.useEffect)((function(){p.b.registerPlugin(g.a),r.current.forEach((function(e){var t;t=e,p.b.from(t,{x:"-100%",scrollTrigger:Object(w.a)(Object(w.a)({trigger:t},V),{},{start:"0% 125%",end:"0% 90%"}),duration:1,ease:"power2.inOut"})}))}),[]),Object(d.jsx)(_e,{deltaStart:"5rem",deltaEnd:"-5rem",children:Object(d.jsxs)("div",{className:Ne.a.container,children:[Object(d.jsx)("div",{className:Ne.a.wrap,children:Object(d.jsx)("div",{ref:function(e){r.current[0]=e},className:Ne.a.value,children:"0"})}),Object(d.jsx)("div",{className:Ne.a.wrap,children:Object(d.jsx)("div",{ref:function(e){r.current[1]=e},className:Ne.a.value,children:t})})]})})}var ye=r(80),Te=r.n(ye);function Ae(e){var t=e.title;return Object(d.jsx)("div",{className:Te.a.title,children:t})}var ke=r(81),Ee=r.n(ke);function we(){return Object(d.jsxs)(de,{children:[Object(d.jsx)("div",{className:Ee.a.title,children:Object(d.jsx)(Ae,{title:"\u041e \u0420\u0410\u0411\u041e\u0422\u0415:"})}),Object(d.jsxs)("div",{className:Ee.a.container,children:[Object(d.jsx)("div",{className:Ee.a.description,children:Object(d.jsxs)(me,{children:["\u0421\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c.",Object(d.jsx)("br",{}),"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0432\u0435\u0431-",Object(d.jsx)("br",{}),"\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441 \u0430\u043a\u0446\u0435\u043d\u0442\u043e\u043c \u043d\u0430 \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439",Object(d.jsx)("br",{}),"\u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e\u0441\u0442\u044c",Object(d.jsx)("br",{}),"\u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439.",Object(d.jsx)("br",{})]})}),Object(d.jsx)("div",{className:Ee.a.image,children:Object(d.jsx)(he,{src:"img/js-logo.png",style:{height:"57.5rem",width:"57.5rem",opacity:"0.2"}})})]}),Object(d.jsx)("div",{className:Ee.a.number,children:Object(d.jsx)(Se,{value:"3"})})]})}var Ce=r(82),Re=r.n(Ce);function We(){return Object(d.jsxs)(de,{children:[Object(d.jsx)("div",{className:Re.a.title,children:Object(d.jsx)(Ae,{title:"\u041e\u0411\u041e \u041c\u041d\u0415:"})}),Object(d.jsx)("div",{className:Re.a.description,children:Object(d.jsxs)(me,{children:["\u041f\u0440\u0438\u0432\u0435\u0442\ufe0f, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0412\u0430\u0441\u0438\u043b\u0438\u0439. \u041c\u043d\u0435 22 \u0433\u043e\u0434\u0430.",Object(d.jsx)("br",{}),"\u0412\u044b\u0440\u043e\u0441 \u0432 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u0435\u0440\u0435\u0432\u043d\u0438 \u041d\u043e\u0432\u043e\u0435\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a\u043e\u0435,",Object(d.jsx)("br",{}),"\u0447\u0442\u043e \u0432 \u0410\u043b\u0442\u0430\u0439\u0441\u043a\u043e\u043c \u043a\u0440\u0430\u0435, \u043d\u0430 \u0437\u0430\u0434\u0432\u043e\u0440\u043a\u0430\u0445 \u0420\u043e\u0441\u0441\u0438\u0438.",Object(d.jsx)("br",{}),"\u0412 \u0432\u0443\u0437\u0435 \u0443\u0447\u0438\u043b\u0441\u044f \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \xab\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f",Object(d.jsx)("br",{}),"\u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f\xbb, \u043d\u043e \u043d\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u043c \u043a\u0443\u0440\u0441\u0435 \u0431\u0440\u043e\u0441\u0438\u043b \u0443\u043d\u0438\u0432\u0435\u0440",Object(d.jsx)("br",{}),"\u0438 \u043f\u0435\u0440\u0435\u0435\u0445\u0430\u043b \u043d\u0430 \u0437\u0430\u043f\u0430\u0434 \u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0438, \u0432 \u0413\u0440\u043e\u0434\u043d\u043e.",Object(d.jsx)("br",{})]})}),Object(d.jsx)(he,{src:"img/photo-me.jpg",style:{height:"47.5rem",width:"72.2rem",opacity:.7},invert:!0}),Object(d.jsx)("div",{className:Re.a.number,children:Object(d.jsx)(Se,{value:"1"})})]})}var Me=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t;p.a.registerPlugin(g.a),t=e.current,p.a.to(t,{rotation:150,scrollTrigger:{trigger:t,scrub:.75},ease:"none"})}),[]),Object(d.jsx)("img",{ref:e,src:"img/circle.svg",alt:"skill",style:{height:"20rem",width:"20rem"}})};var Be=r(83),Le=r.n(Be);var Pe=["HTML","CSS","JavaScript","ES6+","W3C","Babel","Webpack","npm","yarn","Angular","TypeScript","RxJS","React ","Redux ","Next ","PWA ","UI/UX ","Photoshop ","Illustrator ","SASS ","BEM ","ESLint ","THREE.js","GSAP","WEBGL","Git ","CI/CD","Docker","Linux","SVG-animation"],Fe=function(){return Object(d.jsx)(de,{children:Object(d.jsxs)("div",{className:Le.a.wrap,children:[Object(d.jsx)("div",{className:Le.a.title,children:Object(d.jsx)(Ae,{title:"\u0422\u0415\u0425\u041d\u041e\u041b\u041e\u0413\u0418\u0418:"})}),Object(d.jsx)("div",{className:Le.a.bullets,children:Pe.map((function(e){return Object(d.jsx)("span",{className:Le.a.bulletsItem,children:e},e)}))}),Object(d.jsxs)("div",{className:Le.a.footer,children:[Object(d.jsx)("div",{className:Le.a.textCircle,children:Object(d.jsx)(Me,{})}),Object(d.jsx)("div",{className:Le.a.number,children:Object(d.jsx)(Se,{value:"4"})})]})]})})},De=r(84),He=r.n(De);var Ie=[{dateStart:"12.2019",dateEnd:"05.2020",name:"\u0424\u0420\u0418\u041b\u0410\u041d\u0421",description:"\u0414\u0438\u0437\u0430\u0439\u043d \u0438 \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u043e\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 React.",location:"\u0443\u0434\u0430\u043b\u0435\u043d\u043a\u0430"},{dateStart:"06.2020",dateEnd:"05.2021",name:"\u0420\u0422\u0418",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0430 \u0430\u0443\u0442\u0441\u043e\u0440\u0441 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 Angular.",location:"\u043a\u0430\u043b\u0443\u0433\u0430"},{dateStart:"06.2021",dateEnd:"\u043f\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",name:"SENLA",description:"\u0410\u0443\u0442\u0441\u0442\u0430\u0444\u0444\u0438\u043d\u0433. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 Angular \u0438 React.",location:"\u0433\u0440\u043e\u0434\u043d\u043e"}],Je=function(){return Object(d.jsxs)(de,{children:[Object(d.jsx)("div",{className:He.a.title,children:Object(d.jsx)(Ae,{title:"\u041f\u0420\u041e\u0415\u041a\u0422\u042b:"})}),Ie.map((function(e){return Object(d.jsx)("div",{className:He.a.project,children:Object(d.jsxs)(Z,{children:[Object(d.jsxs)("div",{className:He.a.textWrap,children:[Object(d.jsxs)("div",{className:He.a.projectDate,children:[e.dateStart," \u2014 ",Object(d.jsx)("br",{}),e.dateEnd]}),Object(d.jsxs)("div",{className:He.a.projectDescription,children:[Object(d.jsx)("div",{className:He.a.projectDescriptionTitle,children:e.name}),Object(d.jsx)("div",{className:He.a.projectDescriptionText,children:e.description})]}),Object(d.jsx)("div",{className:He.a.projectLocation,children:e.location})]}),Object(d.jsx)("div",{className:He.a.projectUnderline})]})},e.name)})),Object(d.jsx)("div",{className:He.a.blockNumber,children:Object(d.jsx)(Se,{value:"5"})})]})},Ke=r(85),Ve=r.n(Ke);var Ge=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t;A.w.registerPlugin(g.a),t=e.current,A.w.fromTo(t,{x:"100%"},{x:"-20%",ease:"power1.out",scrollTrigger:{trigger:t,scrub:1,start:"top 85%"}})}),[]),Object(d.jsx)("div",{className:Ve.a.container,ref:e,children:"\xab\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u2022 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f\xbb"})},qe=r(86),Ue=r.n(qe);var Ye=function(){return Object(d.jsx)("div",{className:Ue.a.container,children:Object(d.jsxs)("div",{className:Ue.a.descriptionWrap,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{className:Ue.a.title,children:Object(d.jsx)(_e,{deltaStart:"0",deltaEnd:"5rem",children:Object(d.jsx)(Ae,{title:"\u0445\u043e\u0431\u0431\u0438:"})})}),Object(d.jsx)("div",{className:Ue.a.text,children:Object(d.jsx)(_e,{deltaStart:"4rem",deltaEnd:"0",children:"\u0442\u043e \u0447\u0442\u043e \u043c\u0435\u043d\u044f \u0443\u0432\u043b\u0435\u043a\u0430\u0435\u0442"})}),Object(d.jsx)("div",{className:Ue.a.description,children:Object(d.jsxs)(me,{deltaStart:"4rem",deltaEnd:"0",children:["\u041b\u044e\u0431\u043b\u044e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438, \u043b\u0435\u0442\u043e\u043c",Object(d.jsx)("br",{}),"\u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0443, \u0430 \u0432 \u043f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",Object(d.jsx)("br",{}),"\u0433\u043e\u0434\u0430 \u043f\u043e \u0432\u0435\u0447\u0435\u0440\u0430\u043c \u0437\u0430\u0432\u0438\u0441\u0430\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u043e\u043b\u043a\u0438 \u0438\u043b\u0438",Object(d.jsx)("br",{}),"\u0441\u0438\u0434\u0435\u0442\u044c \u0432 \u0431\u0430\u0440\u0435. \u041b\u044e\u0431\u043b\u044e \u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u0432\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u044b",Object(d.jsx)("br",{}),"\u0441 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u043c \u0441\u044e\u0436\u0435\u0442\u043e\u043c. \u041b\u044e\u0431\u043b\u044e \u0432 \u043f\u0435\u0440\u0435\u0440\u044b\u0432\u0430\u0445",Object(d.jsx)("br",{}),"\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u0438\u043d\u0443\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u0442\u0435\u0435\u0447\u043a\u043e\u0439 \u0432 \u043d\u0430\u0441-",Object(d.jsx)("br",{}),"\u0442\u043e\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043d\u0438\u0441. \u041b\u044e\u0431\u043b\u044e \u043f\u043e\u043a\u0443\u0448\u0430\u0442\u044c \u0438 \u043f\u043e\u0441\u043f\u0430\u0442\u044c.",Object(d.jsx)("br",{})]})}),Object(d.jsx)("img",{className:Ue.a.image,src:"img/ping-pong.gif",alt:"ping-pong",style:{height:"36rem",width:"36rem"}}),Object(d.jsx)("div",{className:Ue.a.blockNumber,children:Object(d.jsx)(Se,{value:"2"})})]})})};function ze(e){var t=e.onLoading,r=J(),a=Object(n.a)(r,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){t()}),[]),Object(c.useEffect)((function(){h(document.documentElement,i)}),[i]),Object(d.jsxs)(O,{children:[Object(d.jsxs)("div",{className:v.a.header,children:[Object(d.jsx)(y,{url:"img/logo.svg",height:"5.2rem",width:"9.66rem"}),Object(d.jsx)(y,{url:"img/logo1.svg",height:"5.55rem",width:"14rem"})]}),Object(d.jsxs)("div",{className:v.a.footer,children:[Object(d.jsx)(K,{toggle:function(e){s(e)}}),Object(d.jsx)(T,{})]}),Object(d.jsx)(c.Suspense,{children:Object(d.jsxs)(S,{children:[Object(d.jsx)(F,{}),Object(d.jsx)(Ge,{}),Object(d.jsx)(We,{}),Object(d.jsx)(Ye,{}),Object(d.jsx)(we,{}),Object(d.jsx)(Fe,{}),Object(d.jsx)(Je,{}),Object(d.jsx)(le,{})]})})]})}}}]);
//# sourceMappingURL=3.f76cb1b8.chunk.js.map