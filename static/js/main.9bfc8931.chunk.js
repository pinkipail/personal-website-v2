(this["webpackJsonppersonal-website-v2"]=this["webpackJsonppersonal-website-v2"]||[]).push([[1],{22:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),r=n(3),s=n.n(r),c=n(9),l=n(32),d=n(2),u=n(7),m=n.n(u),h=n(1),p=0;var b=function(e){var t=e.animation,n=Object(o.useRef)();return Object(o.useEffect)((function(){"entered"===t&&function(){e=n.current,a=setInterval((function(){p+=(100-p)/4,d.x.to(e,{width:"".concat(p,"%"),duration:1})}),1e3);var e}(),"exiting"===t&&function(){clearTimeout(a),e=n.current,d.x.fromTo(e,{autoAlpha:1},{autoAlpha:0,duration:.5,delay:.5,ease:"power1.in"}),function(e){d.x.to(e,{width:"100%",duration:.5})}(n.current);var e}()}),[t]),Object(h.jsx)("div",{className:m.a.line,children:Object(h.jsx)("div",{ref:n,className:m.a.lineInner})})};var f=n(4),g=n.n(f),v=(new Date).getFullYear();var w=function(e){var t=e.animation,n=Object(o.useRef)(),a=Object(o.useRef)();return Object(o.useEffect)((function(){"exiting"===t&&(j(n.current),j(a.current))}),[t]),Object(h.jsxs)("div",{ref:n,className:g.a.loader,children:[Object(h.jsxs)("div",{ref:a,className:g.a.loaderContent,children:["VASILIY FEDOROV",Object(h.jsx)("br",{}),"Copyright \u2014 ",v]}),Object(h.jsx)("div",{className:g.a.lineWrap,children:Object(h.jsx)(b,{animation:t})})]})};function j(e){d.x.fromTo(e,{autoAlpha:1},{autoAlpha:0,duration:.5,delay:.5,ease:"power1.in"})}n(22);var y=i.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(3)]).then(n.bind(null,112))})),k=i.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,113))}));function O(){var e=Object(o.useState)(!0),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.a,{in:n,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0,children:function(e){return Object(h.jsx)(w,{animation:e})}}),Object(h.jsx)(o.Suspense,{fallback:null,children:Object(h.jsx)(y,{onLoading:function(){a(!1)}})}),Object(h.jsx)(o.Suspense,{fallback:null,children:Object(h.jsx)(k,{})})]})}n(26);var I=n(8),x=n(29);I.a.use(x.e).init({resources:{ru:{translation:{"my name":"\u0412\u0410\u0421\u0418\u041b\u0418\u0419 \u0424\u0415\u0414\u041e\u0420\u041e\u0412","let's meet":"\xab\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u2022 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f\xbb","disclaimer title":{full:"\u0414\u0418\u0421\u041a\u041b\u0415\u0419\u041c\u0415\u0420:",first:"\u0414\u0418\u0421\u041a\u041b-",second:"\u0415\u0419\u041c\u0415\u0420:"},"disclaimer description":["\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0432 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043e\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u0440\u0435\u043c\u044f","\u0441 \u0446\u0435\u043b\u044c\u044e \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043e\u0442\u0442\u043e\u0447\u0438\u0442\u044c","\u0441\u0432\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u043c\u0443","\u0437\u0440\u0438\u0442\u0435\u043b\u044e. \u0417\u0434\u0435\u0441\u044c \u044f \u043f\u044b\u0442\u0430\u044e\u0441\u044c \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u043c\u043d\u043e\u0433\u043e","\u043e \u0441\u0435\u0431\u0435: \u043e \u0442\u043e\u043c \u043a\u0442\u043e \u044f \u0438 \u043e\u0442\u043a\u0443\u0434\u0430. \u041d\u0435\u043c\u043d\u043e\u0433\u043e \u043e \u0441\u0432\u043e\u0435\u0439","\u0440\u0430\u0431\u043e\u0442\u0435 \u0438 \u0443\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f\u0445. \u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430."],"about me:":"\u043e\u0431\u043e \u043c\u043d\u0435:","about me description":["\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0412\u0430\u0441\u0438\u043b\u0438\u0439. \u041c\u043d\u0435 22 \u0433\u043e\u0434\u0430.","\u0412\u044b\u0440\u043e\u0441 \u0432 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u0435\u0440\u0435\u0432\u043d\u0435 \u041d\u043e\u0432\u043e\u0435\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a\u043e\u0435,","\u0447\u0442\u043e \u0432 \u0410\u043b\u0442\u0430\u0439\u0441\u043a\u043e\u043c \u043a\u0440\u0430\u0435, \u043d\u0430 \u0437\u0430\u0434\u0432\u043e\u0440\u043a\u0430\u0445 \u0420\u043e\u0441\u0441\u0438\u0438.","\u041f\u043e\u0441\u043b\u0435 \u0448\u043a\u043e\u043b\u044b \u043f\u0435\u0440\u0435\u0435\u0445\u0430\u043b \u043f\u043e\u0431\u043b\u0438\u0436\u0435 \u043a \u0441\u0442\u043e\u043b\u0438\u0446\u0435,","\u043f\u043e\u0441\u0442\u0443\u043f\u0438\u043b \u0432 \u0411\u0430\u0443\u043c\u043e\u043d\u043a\u0443 \u043d\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c","\xab\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f\xbb. \u041d\u043e \u043d\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u043c ","\u043a\u0443\u0440\u0441\u0435 \u043c\u043d\u0435 \u0441\u0442\u0430\u043b\u043e \u0441\u043a\u0443\u0447\u043d\u043e, \u0431\u0440\u043e\u0441\u0438\u043b \u0443\u043d\u0438\u0432\u0435\u0440","\u0438 \u043f\u0435\u0440\u0435\u0435\u0445\u0430\u043b \u043d\u0430 \u0437\u0430\u043f\u0430\u0434 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438, \u0432 \u0413\u0440\u043e\u0434\u043d\u043e."],"about hobby:":"\u0445\u043e\u0431\u0431\u0438:","what fascinates me":"\u0442\u043e \u0447\u0442\u043e \u043c\u0435\u043d\u044f \u0443\u0432\u043b\u0435\u043a\u0430\u0435\u0442","hobby description":["\u041b\u044e\u0431\u043b\u044e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438, \u043b\u0435\u0442\u043e\u043c","\u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0443, \u0430 \u0432 \u043f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f","\u0433\u043e\u0434\u0430 \u043f\u043e \u0432\u0435\u0447\u0435\u0440\u0430\u043c \u0437\u0430\u0432\u0438\u0441\u0430\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u043e\u043b\u043a\u0438 \u0438\u043b\u0438","\u0441\u0438\u0434\u0435\u0442\u044c \u0432 \u0431\u0430\u0440\u0435. \u041b\u044e\u0431\u043b\u044e \u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u0432\u0438\u0434\u0435\u043e\u0438\u0433\u0440\u044b","\u0441 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u043c \u0441\u044e\u0436\u0435\u0442\u043e\u043c. \u041b\u044e\u0431\u043b\u044e \u0432 \u043f\u0435\u0440\u0435\u0440\u044b\u0432\u0430\u0445","\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u0438\u043d\u0443\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u0442\u0435\u0435\u0447\u043a\u043e\u0439 \u0432 \u043d\u0430\u0441-","\u0442\u043e\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043d\u043d\u0438\u0441. \u041b\u044e\u0431\u043b\u044e \u043f\u043e\u043a\u0443\u0448\u0430\u0442\u044c \u0438 \u043f\u043e\u0441\u043f\u0430\u0442\u044c."],"about work:":"\u043e \u0440\u0430\u0431\u043e\u0442\u0435:","about work description":["\u0421\u0435\u0439\u0447\u0430\u0441 \u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c.","\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0432\u0435\u0431-","\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441 \u0430\u043a\u0446\u0435\u043d\u0442\u043e\u043c \u043d\u0430 \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439","\u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e\u0441\u0442\u044c","\u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439."],"favorite quote":"\u043b\u044e\u0431\u0438\u043c\u0430\u044f \u0446\u0438\u0442\u0430\u0442\u0430","favorite quote description":["\xab\u041d\u0430 \u0441\u0432\u043e\u0451\u043c \u0432\u0435\u043a\u0443 \u044f \u043c\u043d\u043e\u0433\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043b \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u044b\u0445 \u043b\u044e\u0434\u0435\u0439.","\u042f \u0434\u043e\u043b\u0433\u043e \u0436\u0438\u043b \u0441\u0440\u0435\u0434\u0438 \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0445. \u042f \u0432\u0438\u0434\u0435\u043b \u0438\u0445 \u0441\u043e\u0432\u0441\u0435\u043c \u0431\u043b\u0438\u0437\u043a\u043e.","\u0418 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e, \u043f\u0440\u0438\u0437\u043d\u0430\u0442\u044c\u0441\u044f, \u043d\u0435 \u0441\u0442\u0430\u043b \u0434\u0443\u043c\u0430\u0442\u044c \u043e \u043d\u0438\u0445 \u043b\u0443\u0447\u0448\u0435\xbb"],"little prince":"\xab\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043f\u0440\u0438\u043d\u0446\xbb","little prince author":"\u0410\u043d\u0442\u0443\u0430\u043d \u0434\u0435 \u0421\u0435\u043d\u0442-\u042d\u043a\u0437\u044e\u043f\u0435\u0440\u0438","about projects:":"\u043f\u0440\u043e\u0435\u043a\u0442\u044b:","projects items":{0:{dateStart:"06.2021",dateEnd:"\u043f\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",name:"SENLA",description:"\u0410\u0443\u0442\u0441\u0442\u0430\u0444\u0444\u0438\u043d\u0433. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 Angular \u0438 React.",location:"\u0433\u0440\u043e\u0434\u043d\u043e"},1:{dateStart:"06.2020",dateEnd:"05.2021",name:"\u0420\u0422\u0418",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0430 \u0430\u0443\u0442\u0441\u043e\u0440\u0441 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 Angular.",location:"\u043a\u0430\u043b\u0443\u0433\u0430"},2:{dateStart:"12.2019",dateEnd:"05.2020",name:"\u0424\u0420\u0418\u041b\u0410\u041d\u0421",description:"\u0414\u0438\u0437\u0430\u0439\u043d \u0438 \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u043e\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 React.",location:"\u0443\u0434\u0430\u043b\u0435\u043d\u043a\u0430"}},"feedback write something":"\u043d\u0430\u043f\u0438\u0448\u0438 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c","feedback description":["\u0417\u0434\u0435\u0441\u044c \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0434\u0443\u043c\u0430\u0435\u0448\u044c \u043e \u0441\u0430\u0439\u0442\u0435,","\u0447\u0442\u043e \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f, \u0447\u0442\u043e \u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f, \u0430 \u0447\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c.","\u0418\u043b\u0438 \u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c\u0438 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f\u043c\u0438 :)"],"feedback send":"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",footer:{contact:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f",me:"\u0441\u043e \u043c\u043d\u043e\u0439:",end:"\u043a\u043e\u043d\u0435\u0446"},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"}},en:{translation:{"my name":"VASILIY FEDOROV","let's meet":"\xablet's meet \u2022 let's meet \u2022 let's meet\xbb","disclaimer title":{full:"DISCLAIMER:",first:"DISCL-",second:"AIMER"},"disclaimer description":["This site was created in free time in order","to try new technologies, hone show your skills","and demonstrate to an outside viewer. Here I`m","trying to tell you a little bit about myself:","about who I am and where I come from. A little","bit about my work and hobbies. Enjoy your viewing."],"about me:":"about me:","about me description":["Hi, my name is Vasiliy. I am 22 years old.","I grew up in the small village of Novoegoryevskoye,","in the Altai Territory, on the outskirts of Russia.","After school, I moved closer to the capital,","entered Baumanka for the specialty \xabSoftware","Engineering\xbb. But in the third year I got bored,","dropped out of university and moved","to the west of Belarus, to Grodno."],"about hobby:":"hobby:","what fascinates me":"what fascinates me","hobby description":["I like to spend time with friends, get out ","in nature in the summer, and in the cool time ","years of hanging out in the evenings at ","the board games or sitting in the bar. I like ","to play video games with an atmospheric plot. ","I like to play table tennis during breaks ","at work. I like to eat and sleep."],"favorite quote":"favorite quote","favorite quote description":["\xabIn the course of this life I have had a great many encounters","with a great many people who have been concerned with","matters of consequence. I have lived a great deal among","grown-ups. I have seen them intimately, close at hand.","And that hasn't much improved my opinion of them\xbb"],"little prince":"\xabThe Little Prince\xbb","little prince author":"Antoine de Saint Exupery","about work:":"about work:","about work description":["I am currently working as a frontend ","developer. I like to create interactive","web applications with an emphasis ","on animated content, performance and ","responsiveness using modern technologies."],"about projects:":"projects:","projects items":{0:{dateStart:"06.2021",dateEnd:"to the present",name:"SENLA",description:"Outstaffing. Application development in Angular and React.",location:"Grodno"},1:{dateStart:"06.2020",dateEnd:"05.2021",name:"RTI",description:"Work on outsourcing projects. Application development in Angular.",location:"Kaluga"},2:{dateStart:"12.2019",dateEnd:"05.2020",name:"FREELANCE",description:"Creating landing pages, application development on React.",location:"remote"}},"feedback write something":"write something","feedback description":["Here you can tell what you think about the site,","what you like, what you don't like, and what can","be improved. Or just share your impressions :)"],"feedback send":"send",footer:{contact:"Contact",me:"with me:",end:"the end"},placeholder:"Enter the text"}}},lng:"ru",fallbackLng:"ru"});I.a;s.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))},4:function(e,t,n){e.exports={loader:"LoaderPage_loader__2_AOM",loaderContent:"LoaderPage_loaderContent__1OP4s",lineWrap:"LoaderPage_lineWrap__1NlhW"}},7:function(e,t,n){e.exports={line:"LoadingLine_line__3aZgT",lineInner:"LoadingLine_lineInner__1q9Ze"}}},[[27,2,5]]]);
//# sourceMappingURL=main.9bfc8931.chunk.js.map