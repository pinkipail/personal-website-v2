(this["webpackJsonpbubble-animation"]=this["webpackJsonpbubble-animation"]||[]).push([[3],{63:function(e,t,r){e.exports={canvasWrap:"Background_canvasWrap__2aV-7",overlay:"Background_overlay__3_1TZ"}},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){e.exports={block:"MainBlock_block__1XNC_",blockContent:"MainBlock_blockContent__1hI58",title:"MainBlock_title__QTnAx",titleOutline:"MainBlock_titleOutline__20NVo",textWrapper:"MainBlock_textWrapper__23upF",titleWrap:"MainBlock_titleWrap__2qyvb",subtitle:"MainBlock_subtitle__wvDm0",description:"MainBlock_description__1UB-3",scrollText:"MainBlock_scrollText__Dptsm"}},68:function(e,t,r){e.exports={container:"ScrollMessage_container__2rdK-",text:"ScrollMessage_text__1qw6C",textHidden:"ScrollMessage_textHidden__1F675"}},69:function(e,t,r){},70:function(e,t,r){e.exports={footer:"Footer_footer__37mTB",title:"Footer_title__15S2Y",contactsItem:"Footer_contactsItem__3Llj2",link:"Footer_link__dvKUD",spliter:"Footer_spliter__2YBJ8",version:"Footer_version__2ecCs",copyright:"Footer_copyright__35c-W"}},71:function(e,t,r){e.exports={container:"ParallaxScrolling_container__2PPb_"}},72:function(e,t,r){e.exports={container:"BlockContainer_container__BSxjr",content:"BlockContainer_content__2aLZ2"}},73:function(e,t,r){e.exports={wrap:"TextSurfacing_wrap__2DF00",container:"TextSurfacing_container__2eDWv"}},74:function(e,t,r){e.exports={image:"BlockImage_image__1KjvJ"}},75:function(e,t,r){e.exports={container:"BlockNumber_container__2bsNJ",wrap:"BlockNumber_wrap__eEXKs",number:"BlockNumber_number__1YWCf"}},76:function(e,t,r){e.exports={title:"BlockTitle_title__3NWKA"}},77:function(e,t,r){e.exports={container:"AboutJS_container__3AZqM",title:"AboutJS_title__1HY-O",description:"AboutJS_description__1oEar",image:"AboutJS_image__3KY2M",number:"AboutJS_number__3Kozx"}},78:function(e,t,r){e.exports={container:"AboutMe_container__2p1lp",content:"AboutMe_content__3Lile",description:"AboutMe_description__36ViD",number:"AboutMe_number__2W9Ja"}},79:function(e,t,r){e.exports={wrap:"Skills_wrap__mF_2S",title:"Skills_title__3IqNm",number:"Skills_number__31LcC",bullets:"Skills_bullets__37H58",text:"Skills_text__3cCLl",bulletsItem:"Skills_bulletsItem__1xCvt",footer:"Skills_footer__12lxD",textCircle:"Skills_textCircle__3Ppor"}},80:function(e,t,r){e.exports={title:"Projects_title__2IlYl",blockNumber:"Projects_blockNumber__TaKS9",textWrap:"Projects_textWrap__ehYOV",project:"Projects_project__2uoPu",projectUnderline:"Projects_projectUnderline__2wcif",projectDate:"Projects_projectDate__2WIP1",projectDescription:"Projects_projectDescription__1V6CY",projectDescriptionTitle:"Projects_projectDescriptionTitle__1jQ-2",projectDescriptionText:"Projects_projectDescriptionText__3D3re",projectLocation:"Projects_projectLocation__2H_kl",line:"Projects_line__1r8f2"}},81:function(e,t,r){e.exports={container:"RunningLine_container__24jrF"}},82:function(e,t,r){e.exports={container:"Hobby_container__1YkW4",title:"Hobby_title__34cOH",descriptionWrap:"Hobby_descriptionWrap__3Heoq",text:"Hobby_text__1Avio",description:"Hobby_description__jX7WU",image:"Hobby_image__3GcNz",blockNumber:"Hobby_blockNumber__1VYBO"}},88:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Te}));var c=r(8),n=r(1),i=r(38),a=r(2),s=r(27),o=r(29),l=r(30),u=r(39),j=r(87),b=r(89);function d(){var e=Object(n.useState)(),t=Object(c.a)(e,2),r=t[0],i=t[1],a=Object(b.a)().y;return Object(n.useEffect)((function(){var e=+(a/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100).toFixed(3);i(e)}),[a]),r||0}var f=r(0),x=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.call(this,{uniforms:{iTime:{type:"f",value:0},iResolution:{type:"f",value:1.5},iScrollPos:{type:"f",value:0},iTexture:{type:"t",value:null},iColorTheme:{type:"f",value:1}},fragmentShader:"\n// #extension GL_OES_standard_derivatives : enable\nuniform sampler2D iTexture;      \nuniform float iResolution;          \nuniform float iScrollPos;          \nuniform float iTime;          \nuniform float iMouse;          \nuniform float iColorTheme;          \n\nvec4 BS_A = vec4(3.0, -6.0, 0.0, 4.0) / 6.0;\nvec4 BS_B = vec4(-1.0, 6.0,-12.0, 8.0) / 6.0;\n\nvec4 powers(float x) { \n    return vec4(x*x*x, x*x, x, 1.0);\n}\n\nvec4 spline(float x, vec4 c0, vec4 c1, vec4 c2, vec4 c3) {\n    vec4 result;\n    result += c0*dot(BS_B, powers(x + 1.0));\n    result += c1*dot(BS_A, powers(x));\n    result += c2*dot(BS_A, powers(1.0 - x));\n    result += c3*dot(BS_B, powers(2.0 - x));\n    return result;\n}\n\n#define SAM(a,b) texture2D(iTexture, (i+vec2(a,b))/res)\nvec4 texture_Bicubic(vec2 t) {\n    vec2 res = vec2(512, 512);\n    vec2 p = res*t;\n    vec2 f = fract(p);\n    vec2 i = floor(p);\n    \n    return spline(\n        f.y,\n        spline(f.x, SAM(-1,-1), SAM(0,-1), SAM(1,-1), SAM(2,-1)),\n        spline(f.x, SAM(-1, 0), SAM(0, 0), SAM(1, 0), SAM(2, 0)),\n        spline(f.x, SAM(-1, 1), SAM(0, 1), SAM(1, 1), SAM(2, 1)),\n        spline(f.x, SAM(-1, 2), SAM(0, 2), SAM(1, 2), SAM(2, 2))\n    );\n}\n\nfloat eval(vec2 uv, float time) {\n    return cos(iTime * 0.05) + 11.0*texture_Bicubic(vec2(1., time) + uv).x;\n}\n\nfloat isoline(float val, float lg, float ref, float pas, float tickness) {\n    float v = abs(mod(val-ref+pas*0.5, pas)-pas*0.5)/lg - 0.1*tickness + 0.3;\n    return smoothstep(0.0,1.0, v);\n}\n\nvoid main() {\n    float time = iScrollPos * 0.001;\n    vec2 uv = gl_FragCoord.xy / iResolution * 0.0001;\n    float val = eval(uv, time);\n    float lg = 2.*length(vec2(dFdx(val), dFdy(val)));\n    float ref = 1.0;\n    \n    float k1 = isoline(val, lg, ref, 0.5, 1.0);\n    float k2 = isoline(val, lg, ref, 2.0, 3.0);\n    float k3 = isoline(val, lg, ref, 4.0, 10.0);\n\n    vec3 col = vec3(1.); \n    col *= k1 * k2 * k3;\n    if (iColorTheme > 0.5) {\n        col = vec3(iColorTheme) - col;\n        col *= vec3(130.0, 137.0, 143.0) / 255.0 * 0.7; // TODO: remove\n    } else {\n        col = vec3(iColorTheme) + col;\n        col *= col * 0.5; // TODO: remove\n    }\n    gl_FragColor = vec4(col,1);\n}\n"})}return r}(u.ShaderMaterial);Object(i.b)({PatternMaterial:x});var v=function(e){var t=e.darkTheme,r=Object(n.useRef)(),c=Object(j.a)("/img/texture.jpg"),a=d();return Object(n.useEffect)((function(){!function(){var e=t?1:0;r.current.material.uniforms.iColorTheme.value=e}()}),[t]),Object(n.useLayoutEffect)((function(){c.wrapS=u.RepeatWrapping,c.wrapT=u.RepeatWrapping,r.current.material.uniforms.iTexture.value=c}),[]),Object(i.c)((function(e){!function(e){r.current.material.uniforms.iTime.value=e.elapsedTime}(e.clock),r.current.material.uniforms.iScrollPos.value=u.MathUtils.damp(r.current.material.uniforms.iScrollPos.value,-a,.2,.7)})),Object(f.jsxs)("mesh",{ref:r,scale:7,children:[Object(f.jsx)("planeBufferGeometry",{}),Object(f.jsx)("patternMaterial",{})]})},m=r(63),p=r.n(m),O={powerPreference:"high-performance",alpha:!1,antialias:!1,stencil:!1,depth:!1};var _=function(e){var t=e.darkTheme,r=e.children,s=Object(n.useRef)(),o=Object(n.useState)(t),l=Object(c.a)(o,2),u=l[0],j=l[1];return Object(n.useEffect)((function(){!function(e,t,r){var c=t?"#000000":"#808080",n=a.w.timeline();n.to(e,{autoAlpha:"0",duration:0}),n.fromTo(e,{background:c,autoAlpha:"0"},{background:c,autoAlpha:"100%",duration:.4,ease:"power2.inOut"}),n.call(r),n.fromTo(e,{background:c,autoAlpha:"100%"},{background:c,autoAlpha:"0%",duration:.4,ease:"power2.inOut"})}(s.current,t,(function(){return j(t)}))}),[t]),Object(f.jsxs)("div",{className:p.a.canvasWrap,children:[Object(f.jsx)(i.a,{style:{position:"fixed",zIndex:0},gl:O,camera:{position:[0,0,1]},children:Object(f.jsx)(n.Suspense,{fallback:null,children:Object(f.jsx)(v,{darkTheme:u})})}),Object(f.jsx)("div",{ref:s,className:p.a.overlay}),r]})};r(64);r(65);var g={ease:.1,current:0,previous:0,rounded:0},h=function(e){var t=e.children,r=function(){var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(n.useState)(e),r=Object(c.a)(t,2),i=r[0],a=r[1];return Object(n.useEffect)((function(){var t=function(){a(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}(),i=Object(n.useRef)();function a(){g.current=window.scrollY,g.previous+=(g.current-g.previous)*g.ease,Math.abs(g.current-g.previous)>1&&(i.current.style.transform="translateY(-".concat(Math.round(g.previous),"px)")),requestAnimationFrame((function(){return a()}))}return Object(n.useEffect)((function(){!function(){var e=i.current.getBoundingClientRect().height;document.body.style.height="".concat(e,"px")}()}),[r.height]),Object(n.useEffect)((function(){requestAnimationFrame((function(){return a()}))}),[]),Object(f.jsx)("div",{className:"parent",children:Object(f.jsx)("div",{ref:i,children:t})})};function N(e){var t=e.url,r=e.size;return Object(f.jsx)("div",{children:Object(f.jsx)("object",{className:"logo",type:"image/svg+xml",data:t,"aria-label":"logo",style:{height:r}})})}r(66);function C(){var e=1.25*d();return Object(f.jsxs)("svg",{className:"spinner",viewBox:"0 0 50 50",children:[Object(f.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"#ffffff",strokeWidth:"5",strokeDasharray:"".concat(e,", 125")}),Object(f.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"#ffffff59",strokeWidth:"5",strokeDasharray:"125"})]})}var S=r(43),w=r(67),k=r.n(w),T=r(28),y=r(68),A=r.n(y);var M=function(){var e=Object(n.useRef)({}),t=Object(n.useRef)(),r="scroll";return Object(n.useEffect)((function(){!function(e,t){var r={repeat:-1,duration:1.5,repeatDelay:1,ease:"power2.inOut"};a.w.fromTo(e,{y:"-200%"},Object(T.a)({y:"0%"},r)),a.w.fromTo(t,{y:"0%"},Object(T.a)({y:"200%"},r))}(e.current,t.current)}),[]),Object(f.jsxs)("div",{className:A.a.container,children:[Object(f.jsx)("span",{className:A.a.text,ref:e,children:r}),Object(f.jsx)("span",{className:A.a.text,ref:t,children:r}),Object(f.jsx)("span",{className:A.a.textHidden,children:r})]})};function E(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useRef)(),s=Object(n.useRef)();return Object(n.useEffect)((function(){var c;a.w.registerPlugin(S.a),B(e.current,0),B(t.current,0),B(r.current,.5,"-100%"),c=s.current,a.w.fromTo(c,{autoAlpha:1},{scrollTrigger:{trigger:c,start:"top center",toggleActions:"play none none reset"},autoAlpha:0,duration:.5}),function(e,t){a.w.fromTo(e,{scale:1},{scrollTrigger:{trigger:t,toggleActions:"none restart",end:"bottom top",start:"center center",scrub:.5},scale:10,duration:.5,ease:"power1.inOut"})}(i.current,i.current)}),[]),Object(f.jsx)("div",{className:k.a.block,children:Object(f.jsxs)("div",{className:k.a.blockContent,children:[Object(f.jsxs)("div",{className:k.a.textWrapper,ref:i,children:[Object(f.jsx)("div",{className:k.a.titleWrap,children:Object(f.jsx)("div",{ref:e,className:k.a.titleOutline,children:"FRONTEND-"})}),Object(f.jsx)("div",{className:k.a.titleWrap,children:Object(f.jsx)("div",{ref:t,className:k.a.title,children:"DEVELOPER"})}),Object(f.jsx)("div",{className:k.a.titleWrap,ref:c,children:Object(f.jsx)("div",{ref:r,className:k.a.subtitle,children:"\u0424\u0415\u0414\u041e\u0420\u041e\u0412 \u0412\u0410\u0421\u0418\u041b\u0418\u0419"})})]}),Object(f.jsx)("span",{ref:s,children:Object(f.jsx)(M,{})})]})})}function B(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"100%";a.w.from(e,{y:r,duration:.5,delay:1+t,ease:"power1.out"})}r(69);function P(e){var t=e.toggle;return Object(f.jsxs)("div",{className:"toggle__wrap",children:[Object(f.jsx)("input",{id:"toggle-on",className:"toggle toggle-left",name:"toggle",value:"true",type:"radio",defaultChecked:!0,onChange:function(){return t(!0)}}),Object(f.jsx)("label",{htmlFor:"toggle-on",className:"toggle__btn cursor-anumation",children:"dark"}),Object(f.jsx)("input",{id:"toggle-off",className:"toggle toggle-right",name:"toggle",value:"false",type:"radio",onChange:function(){return t(!1)}}),Object(f.jsx)("label",{htmlFor:"toggle-off",className:"toggle__btn cursor-anumation",children:"light"})]})}var W=r(70),L=r.n(W);function R(){return Object(f.jsxs)("div",{className:L.a.footer,children:[Object(f.jsxs)("div",{className:L.a.title,children:["\u0421\u0432\u044f\u0437\u044f\u0442\u044c\u0441\u044f ",Object(f.jsx)("br",{}),"\u0441\u043e \u043c\u043d\u043e\u0439:"]}),Object(f.jsx)("div",{className:L.a.spliter}),Object(f.jsxs)("div",{className:L.a.contacts,children:[Object(f.jsxs)("div",{className:L.a.contactsItem,children:[Object(f.jsx)("svg",{width:"32",height:"24",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M32 19.9999C32 20.7014 31.8027 21.3517 31.4866 21.9239L21.3829 10.6193L31.377 1.87531C31.7658 2.49228 32 3.21701 32 4.00017V19.9999ZM16 12.6719L29.9066 0.503995C29.3359 0.191587 28.6933 0 28.0001 0H3.99998C3.30591 0 2.66309 0.191587 2.09473 0.503995L16 12.6719ZM19.8771 11.9358L16.6581 14.7541C16.4698 14.9181 16.2353 15 16 15C15.7646 15 15.5301 14.9181 15.3418 14.7541L12.1221 11.9356L1.89061 23.3847C2.50388 23.7695 3.22261 24 3.99991 24H28.0001C28.7773 24 29.4963 23.7695 30.1094 23.3847L19.8771 11.9358ZM0.623102 1.87524C0.234389 2.49221 0 3.21694 0 4.00017V19.9999C0 20.7015 0.196401 21.3518 0.51369 21.924L10.6162 10.6174L0.623102 1.87524Z",fill:"white"})}),Object(f.jsx)("div",{className:L.a.link,children:"info@vasiliy-fedorov.ru"})]}),Object(f.jsxs)("div",{className:L.a.contactsItem,children:[Object(f.jsx)("svg",{width:"27",height:"32",viewBox:"0 0 27 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M19.0778 24.3784C19.0707 25.0329 19.0637 25.6874 19.0637 26.3418C19.0637 28.1012 19.0567 29.8536 19.0707 31.6129C19.0707 31.8874 19.0215 32 18.7118 32C16.1361 31.9859 13.5604 31.9859 10.9846 32C10.6891 32 10.6117 31.9085 10.6187 31.62C10.6328 30.4729 10.6257 29.3257 10.6187 28.1786C10.6187 28.059 10.7031 27.8831 10.485 27.8408C9.80234 27.9042 9.12674 28.066 8.43003 28.0379C6.07246 27.9464 4.24271 26.9541 3.173 24.8147C2.59593 23.6606 1.92033 22.5838 1.12509 21.5774C0.906925 21.303 0.569125 21.1904 0.315775 20.9652C0.238362 20.8948 0.146874 20.8385 0.0835366 20.7541C-0.0783261 20.5218 -0.000913564 20.3459 0.280587 20.3177C1.58253 20.184 2.65927 20.6133 3.53192 21.5915C3.97528 22.0912 4.24974 22.7034 4.67903 23.2172C5.54465 24.2517 6.64954 24.8147 7.98666 24.9695C8.79598 25.061 9.56307 24.9062 10.3302 24.674C10.485 24.6317 10.5483 24.5332 10.5624 24.3713C10.6117 23.6465 10.7594 22.9427 11.0409 22.2671C11.1676 21.9645 11.3717 21.7112 11.5265 21.4015C10.8017 21.2185 10.0698 21.1622 9.38009 20.9511C7.47292 20.374 5.798 19.431 4.58051 17.8053C3.99639 17.0312 3.58822 16.1656 3.35598 15.2366C3.2293 14.7299 3.08152 14.2232 3.08855 13.6884C3.09559 12.7524 3.05337 11.8094 3.10967 10.8734C3.173 9.69109 3.32783 8.51582 3.75712 7.41093C4.02454 6.7283 4.41161 6.10196 4.96053 5.58822C5.12943 5.42636 5.19277 5.29968 5.08721 5.03225C4.56643 3.64586 4.51717 2.23132 4.96053 0.809747C4.97461 0.767522 4.98165 0.71826 4.98868 0.668997C5.14351 -0.0558669 5.30537 -0.126242 5.99505 0.148221C7.34625 0.676034 8.33854 1.6261 9.18304 2.77321C9.42232 3.09694 9.37305 3.23769 9.88679 2.90693C10.5694 2.4706 11.3647 2.33689 12.1529 2.25244C13.5674 2.10465 14.989 2.14687 16.4035 2.17502C17.4099 2.19614 18.4092 2.32985 19.3593 2.68173C19.5774 2.75914 19.7815 2.87878 19.9715 3.01953C20.1193 3.13213 20.2249 3.13213 20.3656 2.94211C21.0061 2.04131 21.738 1.22496 22.688 0.647884C23.1525 0.366384 23.6311 0.105996 24.1941 0.0426582C24.4263 0.0145082 24.5248 0.0919208 24.5882 0.274896C25.1723 1.88649 25.2567 3.49104 24.5741 5.09559C24.4896 5.29264 24.5178 5.41932 24.6656 5.55303C25.7916 6.60866 26.1997 7.98097 26.4109 9.45885C26.5868 10.7045 26.6361 11.9572 26.6009 13.2098C26.5446 15.4055 25.7986 17.3198 24.18 18.8469C23.2299 19.7407 22.0898 20.3318 20.8653 20.7822C19.9927 21.1059 19.0707 21.1904 18.1559 21.4156C18.2474 21.6337 18.4163 21.7956 18.4585 22.0138L18.5711 22.1756C18.5781 22.2179 18.5992 22.2953 18.5992 22.2953L18.7752 22.6753C18.8104 22.8301 18.8455 22.992 18.8737 23.1468L18.9863 23.4494C18.9863 23.4916 18.9933 23.5339 18.9933 23.5831L19.0707 24.0054C19.0707 24.1039 19.0778 24.2447 19.0778 24.3784Z",fill:"white"})}),Object(f.jsx)("div",{className:L.a.link,children:"github.com/pinkipail"})]})]}),Object(f.jsx)("div",{className:L.a.version,children:"v0.1.2"}),Object(f.jsxs)("div",{className:L.a.copyright,children:["Copyright ",(new Date).getFullYear()," by Fedorov Vasiliy. All rights reserved."]})]})}var D=r(26),F=r(71),H=r.n(F);function I(e){var t=e.children,r=e.deltaStart,c=void 0===r?100:r,i=e.deltaEnd,a=void 0===i?-100:i,s=Object(n.useRef)();return Object(n.useEffect)((function(){D.b.registerPlugin(S.a),function(e,t,r){D.b.fromTo(e,{y:t},{y:r,scrollTrigger:{trigger:e,scrub:.5}})}(s.current,c,a)}),[]),Object(f.jsx)("span",{ref:s,className:H.a.container,children:t})}var J=r(72),Y=r.n(J);function V(e){var t=e.children;return Object(f.jsx)("div",{className:Y.a.container,children:Object(f.jsx)("div",{className:Y.a.content,children:t})})}var U=r(45),z={toggleActions:"none play none reset",start:"-100% 125%",end:"-100% 90%"},K=r(73),Z=r.n(K),q=["children"];var G=function(e){var t=e.children,r=Object(U.a)(e,q),c=Object(n.useRef)();return Object(n.useEffect)((function(){a.w.registerPlugin(S.a),function(e,t){a.w.fromTo(e,{y:t.reverse?"-100%":"100%"},{scrollTrigger:Object(T.a)({trigger:e},z),y:0,duration:.8,ease:"power3.inOut"})}(c.current,r)}),[]),Object(f.jsx)("span",{className:Z.a.wrap,children:Object(f.jsx)("span",{className:Z.a.container,ref:c,children:t})})};var X=r(74),Q=r.n(X);function $(e){var t=e.src,r=e.height,c=t.split("/").pop();return Object(f.jsx)("div",{style:{overflow:"hidden"},children:Object(f.jsx)(I,{deltaStart:50,deltaEnd:-50,children:Object(f.jsx)(G,{children:Object(f.jsx)("img",{className:Q.a.image,src:t,alt:c,height:r})})})})}var ee=r(75),te=r.n(ee);function re(e){var t=e.value,r=Object(n.useRef)([]);return Object(n.useEffect)((function(){D.b.registerPlugin(S.a),r.current.forEach((function(e){var t;t=e,D.b.from(t,{x:"-100%",scrollTrigger:Object(T.a)(Object(T.a)({trigger:t},z),{},{start:"0% 125%",end:"0% 90%"}),duration:1,ease:"power2.inOut"})}))}),[]),Object(f.jsxs)("div",{className:te.a.container,children:[Object(f.jsx)("div",{className:te.a.wrap,children:Object(f.jsx)("div",{ref:function(e){r.current[0]=e},className:te.a.value,children:"0"})}),Object(f.jsx)("div",{className:te.a.wrap,children:Object(f.jsx)("div",{ref:function(e){r.current[1]=e},className:te.a.value,children:t})})]})}var ce=r(76),ne=r.n(ce);function ie(e){var t=e.title;return Object(f.jsx)("div",{className:ne.a.title,children:Object(f.jsx)(G,{children:t})})}var ae=r(77),se=r.n(ae);function oe(){return Object(f.jsxs)(V,{children:[Object(f.jsx)("div",{className:se.a.title,children:Object(f.jsx)(ie,{title:"\u041e \u0420\u0410\u0411\u041e\u0422\u0415:"})}),Object(f.jsxs)("div",{className:se.a.container,children:[Object(f.jsx)("div",{className:se.a.description,children:Object(f.jsx)(I,{children:"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 WEB- \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441 \u0430\u043a\u0446\u0435\u043d\u0442\u043e\u043c \u043d\u0430 \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e\u0441\u0442\u044c. \u041b\u044e\u0431\u043b\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438: ES6+, Typescript, angular \u0438 REACT."})}),Object(f.jsx)("div",{className:se.a.image,children:Object(f.jsx)($,{src:"img/js-logo.svg",height:"575px"})})]}),Object(f.jsx)("div",{className:se.a.number,children:Object(f.jsx)(re,{value:"3"})})]})}var le=r(78),ue=r.n(le);function je(){return Object(f.jsxs)(V,{children:[Object(f.jsx)("div",{className:ue.a.title,children:Object(f.jsx)(ie,{title:"\u041e\u0411\u041e \u041c\u041d\u0415:"})}),Object(f.jsxs)("div",{className:ue.a.description,children:["\u041f\u0440\u0438\u0432\u0435\u0442\ufe0f, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0412\u0430\u0441\u0438\u043b\u0438\u0439. \u041c\u043d\u0435 22 \u0433\u043e\u0434\u0430. ",Object(f.jsx)("br",{}),"\u042f \u0432\u044b\u0440\u043e\u0441 \u0432 \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u0435\u0440\u0435\u0432\u043d\u0438 ",Object(f.jsx)("br",{}),"\u041d\u043e\u0432\u043e\u0435\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a\u043e\u0435, \u0447\u0442\u043e \u0432 \u0410\u043b\u0442\u0430\u0439\u0441\u043a\u043e\u043c \u043a\u0440\u0430\u0435. \u0418 ",Object(f.jsx)("br",{}),"\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c. \u041d\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u043c ",Object(f.jsx)("br",{}),"\u043a\u0443\u0440\u0441\u0435 \u0431\u0440\u043e\u0441\u0438\u043b \u0443\u043d\u0438\u0432\u0435\u0440 \u0438  \u0443\u0435\u0445\u0430\u043b \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u0437 ",Object(f.jsx)("br",{}),"\u0420\u043e\u0441\u0441\u0438\u0438(\u043d\u0435\u0434\u0430\u043b\u0435\u043a\u043e \u043f\u0440\u0430\u0432\u0434\u0430)",Object(f.jsx)("br",{})]}),Object(f.jsx)($,{src:"img/photo-me.svg",height:"475px"}),Object(f.jsx)("div",{className:ue.a.number,children:Object(f.jsx)(re,{value:"1"})})]})}var be=function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){var t;D.a.registerPlugin(S.a),t=e.current,D.a.to(t,{rotation:150,scrollTrigger:{trigger:t,scrub:.75},ease:"none"})}),[]),Object(f.jsx)("img",{ref:e,src:"/img/circle.svg",alt:"skill"})};var de=r(79),fe=r.n(de);var xe=["HTML","CSS","JavaScript","ES6+","W3C","Babel","Webpack","npm","yarn","Angular","TypeScript","RxJS","React ","Redux ","Next ","PWA ","UI/UX ","Photoshop ","Illustrator ","SASS ","BEM ","ESLint ","THREE.js","GSAP","WEBGL","Git ","CI/CD","Docker","Linux","SVG-animation"],ve=function(){return Object(f.jsx)(V,{children:Object(f.jsxs)("div",{className:fe.a.wrap,children:[Object(f.jsx)("div",{className:fe.a.title,children:Object(f.jsx)(ie,{title:"\u0422\u0415\u0425\u041d\u041e\u041b\u041e\u0413\u0418\u0418:"})}),Object(f.jsx)("div",{className:fe.a.bullets,children:xe.map((function(e){return Object(f.jsx)("span",{className:fe.a.bulletsItem,children:e},e)}))}),Object(f.jsxs)("div",{className:fe.a.footer,children:[Object(f.jsx)("div",{className:fe.a.textCircle,children:Object(f.jsx)(be,{})}),Object(f.jsx)("div",{className:fe.a.number,children:Object(f.jsx)(re,{value:"4"})})]})]})})},me=r(80),pe=r.n(me);var Oe=[{dateStart:"12.2019",dateEnd:"05.2020",name:"\u0424\u0420\u0418\u041b\u0410\u041d\u0421",description:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438 \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u043e\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 SPA \u043d\u0430 React.",location:"\u0443\u0434\u0430\u043b\u0435\u043d\u043a\u0430"},{dateStart:"06.2020",dateEnd:"05.2021",name:"\u0420\u0422\u0418",description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0430 Angular, \u043c\u043d\u043e\u0433\u043e \u0447\u0435\u0433\u043e \u0434\u0435\u043b\u0430\u043b, \u0438 \u0435\u0449\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u0447\u0443\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0442\u0435\u043a\u0441\u0442\u0430",location:"\u043a\u0430\u043b\u0443\u0433\u0430"},{dateStart:"06.2021",dateEnd:"\u043f\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",name:"SENLA",description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0430 Angula \u0438 React",location:"\u0433\u0440\u043e\u0434\u043d\u043e"}],_e=.7;var ge=function(){var e=Object(n.useRef)([]),t=Object(n.useRef)([]);return Object(n.useEffect)((function(){a.w.registerPlugin(S.a),t.current.forEach((function(e){var t;t=e,a.w.from(t,{scrollTrigger:Object(T.a)({trigger:t},z),autoAlpha:0,duration:0,delay:_e})})),e.current.forEach((function(e){var t;t=e,a.w.fromTo(t,{right:"100%"},{scrollTrigger:Object(T.a)({trigger:t},z),right:"0%",duration:_e,ease:"power1.inOut"}),a.w.fromTo(t,{left:"0%"},{scrollTrigger:Object(T.a)({trigger:t},z),left:"100%",duration:_e,delay:_e,ease:"power1.inOut"})}))}),[]),Object(f.jsxs)(V,{children:[Object(f.jsx)("div",{className:pe.a.title,children:Object(f.jsx)(ie,{title:"\u041f\u0420\u041e\u0415\u041a\u0422\u042b:"})}),Oe.map((function(r,c){return Object(f.jsxs)("div",{className:pe.a.project,children:[Object(f.jsxs)("div",{className:pe.a.textWrap,ref:function(e){t.current[c]=e},children:[Object(f.jsxs)("div",{className:pe.a.projectDate,children:[r.dateStart," \u2014 ",Object(f.jsx)("br",{}),r.dateEnd]}),Object(f.jsxs)("div",{className:pe.a.projectDescription,children:[Object(f.jsx)("div",{className:pe.a.projectDescriptionTitle,children:r.name}),Object(f.jsx)("div",{className:pe.a.projectDescriptionText,children:r.description})]}),Object(f.jsx)("div",{className:pe.a.projectLocation,children:r.location})]}),Object(f.jsx)("div",{className:pe.a.projectUnderline}),Object(f.jsx)("div",{className:pe.a.line,ref:function(t){e.current[c]=t}})]},r.name)})),Object(f.jsx)("div",{className:pe.a.blockNumber,children:Object(f.jsx)(re,{value:"5"})})]})},he=r(81),Ne=r.n(he);var Ce=function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){var t;a.w.registerPlugin(S.a),t=e.current,a.w.fromTo(t,{x:"100%"},{x:"-20%",ease:"power1.out",scrollTrigger:{trigger:t,scrub:1,start:"top 85%"}})}),[]),Object(f.jsx)("div",{className:Ne.a.container,ref:e,children:"\xab\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u2022 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f\xbb"})},Se=r(82),we=r.n(Se);var ke=function(){return Object(f.jsx)("div",{className:we.a.container,children:Object(f.jsxs)("div",{className:we.a.descriptionWrap,children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{className:we.a.title,children:Object(f.jsx)(ie,{title:"\u0445\u043e\u0431\u0431\u0438:"})}),Object(f.jsxs)("div",{className:we.a.text,children:["\u041b\u044e\u0431\u043b\u044e \u0445\u043e\u0440\u043e\u0448\u0438\u0435 ",Object(f.jsx)("br",{}),"\u0432\u0435\u0449\u0438"]}),Object(f.jsxs)("div",{className:we.a.description,children:["\u041b\u044e\u0431\u043b\u044e \u0432 \u043f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0433\u043e\u0434\u0430 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f",Object(f.jsx)("br",{}),"\u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u043e\u043b\u043a\u0438 \u043f\u043e \u0432\u0435\u0447\u0435\u0440\u0430\u043c \u0432 \u0445\u043e\u0440\u043e\u0448\u0435\u0439",Object(f.jsx)("br",{}),"\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u0430 \ufe0f\u043b\u0435\u0442\u043e\u043c \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0443.",Object(f.jsx)("br",{}),"\u041b\u044e\u0431\u043b\u044e \u043f\u043e\u0441\u0438\u0434\u0435\u043b\u043a\u0438 \u0432 \u0431\u0430\u0440\u0435. \u041b\u044e\u0431\u043b\u044e \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u044b\u0439",Object(f.jsx)("br",{}),"\u0442\u0435\u043d\u0438\u0441 \u0438 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u0435 \u0441\u044e\u0436\u0435\u0442\u043d\u044b\u0435 \u0432\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u044b.",Object(f.jsx)("br",{})]}),Object(f.jsx)("img",{className:we.a.image,src:"/img/ping-pong.gif",alt:"ping-pong",height:"358px"}),Object(f.jsx)("div",{className:we.a.blockNumber,children:Object(f.jsx)(re,{value:"2"})})]})})};function Te(e){var t=e.onLoading,r=Object(n.useState)(!0),i=Object(c.a)(r,2),a=i[0],s=i[1];return Object(n.useEffect)((function(){t()}),[]),Object(f.jsxs)(_,{darkTheme:a,children:[Object(f.jsxs)("header",{children:[Object(f.jsx)(N,{url:"img/logo.svg",size:"5.2rem"}),Object(f.jsx)(N,{url:"img/logo1.svg",size:"5.55rem"})]}),Object(f.jsxs)("footer",{children:[Object(f.jsx)(P,{toggle:function(e){s(e)}}),Object(f.jsx)(C,{})]}),Object(f.jsxs)(h,{children:[Object(f.jsx)(E,{}),Object(f.jsx)(Ce,{}),Object(f.jsx)(je,{}),Object(f.jsx)(ke,{}),Object(f.jsx)(oe,{}),Object(f.jsx)(ve,{}),Object(f.jsx)(ge,{}),Object(f.jsx)(R,{})]})]})}}}]);
//# sourceMappingURL=3.b52cff5e.chunk.js.map