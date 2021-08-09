(()=>{"use strict";var n={226:(n,r,e)=>{e.d(r,{Z:()=>I});var t=e(645),o=e.n(t),i=e(667),a=e.n(i),s=new URL(e(363),e.b),l=new URL(e(930),e.b),d=new URL(e(638),e.b),c=new URL(e(518),e.b),p=new URL(e(575),e.b),f=new URL(e(874),e.b),u=new URL(e(110),e.b),m=new URL(e(263),e.b),h=new URL(e(863),e.b),g=o()((function(n){return n[1]})),b=a()(s),x=a()(l),w=a()(d),y=a()(c),v=a()(p),k=a()(f),z=a()(u),E=a()(m),C=a()(h);g.push([n.id,"/* TIPOGRAFIAS */\r\n@font-face {\r\n    font-family: Gotham;\r\n    src: url("+b+");\r\n    font-display: swap;\r\n}\r\n@font-face {\r\n    font-family: Gotham-black;\r\n    src: url("+x+");\r\n    font-display: swap;\r\n}\r\n@font-face {\r\n    font-family: RobotoCondensed;\r\n    src: url("+w+");\r\n    src: url("+y+");\r\n    src: url("+v+");\r\n    font-display: swap;\r\n}\r\n\r\n/* SWIPER */\r\n.swiper-container {\r\n    width: 100%;\r\n    height: 498px;\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev{\r\n    z-index: 3;\r\n}\r\n\r\n.swiper-slide {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    background: #fff;\r\n    /* Center slide text vertically */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-justify-content: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    -webkit-align-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.swiper-slide a{\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n\r\n.swiper-slide img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.swiper-container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* FILTRO IMG */\r\n\r\n\r\n/* PAGE SECCTION PORTAFOLIO */\r\n\r\n.header {\r\n    background: #000000;\r\n}\r\n\r\n.btn-back {\r\n    position: fixed;\r\n    top: 50px;\r\n    left: 100px;\r\n}\r\n\r\n.container-img {\r\n    width: 100%;\r\n    height: fit-content;\r\n}\r\n\r\n.container-img h2 {\r\n    color: white;\r\n    font-size: 3rem;\r\n    padding-top: 50px;\r\n    text-align: center;\r\n    font-family: Gotham-black;\r\n    letter-spacing: 20px;\r\n    margin: 0;\r\n}\r\n\r\n.container-img span {\r\n    text-align: center;\r\n    color: #808080;\r\n    margin: 40px auto;\r\n    line-height: 30px;\r\n    font-size: 1.5rem;\r\n    display: block;\r\n}\r\n\r\n.container-img span a {\r\n    color: #ffff;\r\n    font-weight: 700;\r\n    font-family: RobotoCondensed;\r\n}\r\n\r\n.container-img hr {\r\n    width: 60%;\r\n    margin-top: 20px;\r\n}\r\n.container-img #anuncio >p{\r\n    color:rgba(255, 255, 255, 0.801);\r\n    size: 0.5rem;\r\n}\r\n.container-img #anuncio:hover{\r\n    color:#589bdf;\r\n}\r\n\r\n\r\n.m-video{\r\n    margin-top: 100px;\r\n    width: 100%;\r\n    height: fit-content;\r\n}\r\n\r\n.container-mosaico {\r\n    margin-top: 100px;\r\n    width: 100%;\r\n    height: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n.mosaico-row {\r\n    width: 100%;\r\n    height: 500px;\r\n    display:flex;\r\n    flex-direction:row;\r\n    justify-content:flex-start;\r\n    align-items:unset;\r\n    align-content:flex-start;\r\n}\r\n\r\n.f-m {\r\n    width: 50%;\r\n    height: inherit;\r\n}\r\n\r\n.mosaico-row div img {\r\n    width: 100%;\r\n    height: 500px;\r\n    object-fit: cover;\r\n}\r\n\r\n.f-m a{\r\n    position: relative;\r\n    height: fit-content;\r\n}\r\n\r\n.fm-img-m{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 2;\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\n.m{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n/* ANIMACION ENTRE PÁGINAS */\r\n.loading-screen {\r\n    position: relative;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    padding-top: 0;\r\n    background-color: #3d3d3d;\r\n    width: 0%;\r\n    height: 100%;\r\n}\r\n\r\n.load-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    z-index: 10;\r\n    pointer-events: none;\r\n}\r\n\r\n\r\n\r\n* {\r\n    font-family: Gotham;\r\n    box-sizing: border-box;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-family: Gotham-black;\r\n}\r\n\r\n.padre {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n}\r\n\r\n@keyframes aparecer {\r\n    0% {\r\n        transform: translateY(-100px);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        transform: translateY(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\nnav {\r\n    background: #d9dcdf;\r\n    padding: 0px 20px;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.item > a {\r\n    color: #3d3d3d;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.item > a:hover {\r\n    color: #5b9cdc;\r\n    border-bottom: 2px solid #5787b9;\r\n    transition: all 0.2s ease 0s;\r\n}\r\n\r\n.menu li {\r\n    font-size: 16px;\r\n    padding: 5px 10px;\r\n    white-space: nowrap;\r\n    margin: 0;\r\n}\r\n.toggle a {\r\n    font-size: 20px;\r\n    color: #3d3d3d;\r\n    text-decoration: none;\r\n}\r\n.form-modal {\r\n    background: rgb(42, 42, 42);\r\n    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.658);\r\n    position: fixed;\r\n    z-index: 10;\r\n    top: 40%;\r\n    text-align: center;\r\n    right: 30%;\r\n    padding: 50px;\r\n    border-radius: 10px;\r\n    animation: aparecer 0.5s ease-in-out;\r\n}\r\n\r\n/* Mobile menu */\r\n.menu {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n.toggle {\r\n    order: 1;\r\n}\r\n.item.lach {\r\n    order: 2;\r\n    color: #3d3d3d;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n}\r\n.item {\r\n    width: 100%;\r\n    text-align: center;\r\n    order: 3;\r\n    display: none;\r\n}\r\n.item.active {\r\n    display: block;\r\n}\r\n\r\n#go__up {\r\n    display: block;\r\n    width: 2em;\r\n    height: 2em;\r\n    /* Color queda a opinión */\r\n    background-color: #ffc107;\r\n    color: aliceblue;\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    display: none;\r\n    outline: none;\r\n    z-index: 8;\r\n    font-size: 20px;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n/* CARD */\r\n.card {\r\n    background: transparent;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    display: flex;\r\n    height: auto;\r\n    width: 400px;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 10%;\r\n    right: 0%;\r\n    margin-right: 5px;\r\n}\r\n.card-texto {\r\n    color: #589bdf;\r\n    text-align: right;\r\n    font-size: 2em;\r\n}\r\n\r\n.card-description {\r\n    color: #3d3d3d;\r\n    text-align: center;\r\n    line-height: 2;\r\n    margin-bottom: 2em;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    background-color: #c5c5c5d0;\r\n    font-weight: 900;\r\n}\r\n\r\na.animated-button.thar-three {\r\n    color: #589bdf;\r\n    cursor: pointer;\r\n    display: block;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    border: 2px solid #589bdf;\r\n    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1);\r\n    padding: 10px 20px 10px 20px;\r\n    text-decoration: none;\r\n}\r\na.animated-button.thar-three:hover {\r\n    color: rgb(255, 255, 255);\r\n    background-color: #232321;\r\n    border: 2px solid #232321;\r\n}\r\n/* FIN CARD */\r\n\r\n#h2-portafolio {\r\n    font-size: 2rem;\r\n    letter-spacing: 25px;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.5rem;\r\n    margin-top: 50px;\r\n    letter-spacing: 10px;\r\n    color: #ffff;\r\n}\r\n\r\n.p-portafolio {\r\n    letter-spacing: 1px;\r\n    line-height: 30px;\r\n    margin: 20px 0;\r\n    color: #ffff;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n/* SECCION TRAVEL */\r\n#travel {\r\n    margin-top: 45px;\r\n    width: 100%;\r\n    height: fit-content;\r\n}\r\n#travel h2 {\r\n    color: #ffff;\r\n}\r\n\r\n/* SECCIÓN TITLE */\r\n#portafolio h1 {\r\n    color: #3d3d3d;\r\n    font-size: 3em;\r\n}\r\n#p-t-1 {\r\n    color: #3d3d3dbb;\r\n    margin-top: 0;\r\n}\r\n#p-div-title {\r\n    text-align: center;\r\n    width: 1000px;\r\n    line-height: 1.5;\r\n    color: #3d3d3d;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.portafolio-info {\r\n    width: 50%;\r\n    text-align: center;\r\n}\r\n\r\n/* SECCION PORTAFOLIO */\r\n#portafolio {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 90px;\r\n    padding-top: 20px;\r\n}\r\n#portafolio h2 {\r\n    color: #3d3d3d;\r\n    padding-bottom: 5px;\r\n    border-bottom: 2px solid #747474;\r\n}\r\n\r\n.portafolio-container {\r\n    display: flex;\r\n}\r\n.portafolio-container .d-h {\r\n    width: 516px;\r\n    height: 541px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.portafolio-container .d-v {\r\n    position: relative;\r\n    width: 304px;\r\n    height: 541px;\r\n    background-size: cover;\r\n}\r\n.portafolio-container .d-social {\r\n    background-image: url("+k+");\r\n}\r\n.portafolio-container .d-producto {\r\n    background-image: url("+z+");\r\n    height: 50%;\r\n    position: relative;\r\n}\r\n.portafolio-container .d-aereo {\r\n    background-image: url("+E+");\r\n    height: 50%;\r\n    position: relative;\r\n}\r\n.portafolio-container .d-turismo {\r\n    background-image: url("+C+");\r\n}\r\n\r\n.filtro-aereo,\r\n.filtro-social,\r\n.filtro-producto,\r\n.filtro-turismo {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease-in-out;\r\n}\r\n\r\n.filtro-aereo:hover {\r\n    opacity: 1;\r\n}\r\n.filtro-social:hover {\r\n    opacity: 1;\r\n}\r\n.filtro-producto:hover {\r\n    opacity: 1;\r\n}\r\n.filtro-turismo:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.info {\r\n    width: 90%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    margin: auto;\r\n}\r\n\r\n/* SECCION DESPLEGABLE DEL PORTAFOLIO */\r\n.section {\r\n    text-align: center;\r\n}\r\n.section h3 {\r\n    color: #747474;\r\n    display: inline-block;\r\n    padding-bottom: 5px;\r\n    border-bottom: 2px solid #747474;\r\n}\r\n.section p {\r\n    color: #747474;\r\n}\r\n\r\n@-webkit-keyframes flotar {\r\n    0% {\r\n        transform: translateY(0px);\r\n    }\r\n    50% {\r\n        transform: translateY(-20px);\r\n    }\r\n    100% {\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n\r\n.section-arrow {\r\n    width: 80px;\r\n    cursor: pointer;\r\n    margin: 40px 0;\r\n    -webkit-animation: flotar 3s ease-in-out infinite;\r\n    animation: flotar 3s ease-in-out infinite;\r\n}\r\n\r\n#social {\r\n    opacity: 0;\r\n    display: none;\r\n    transition: all 0.5s ease-in-out;\r\n    transition-delay: 3s;\r\n}\r\n\r\n#producto {\r\n    opacity: 0;\r\n    display: none;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n#aereo {\r\n    opacity: 0;\r\n    display: none;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n#turismo {\r\n    opacity: 0;\r\n    display: none;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n/* FOOTER */\r\n\r\n.footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: black;\r\n}\r\n#f-u,\r\n#f-f,\r\n#f-s {\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n#f-u {\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n#map {\r\n    width: 200px;\r\n    height: auto;\r\n}\r\n\r\n#logo__img {\r\n    width: 5em;\r\n    height: 5em;\r\n}\r\n\r\n.footer__map {\r\n    display: flex;\r\n    margin-bottom: -2em;\r\n}\r\n.footer__span {\r\n    font-size: small;\r\n    line-height: 3;\r\n    color: gray;\r\n    font-style: italic;\r\n}\r\n.footer__item {\r\n    order: 0;\r\n    flex: 0 1 auto;\r\n    align-self: auto;\r\n    height: auto;\r\n    width: 14em;\r\n    color: #ffff;\r\n    text-align: center;\r\n    align-items: center;\r\n    margin: 0px 20px;\r\n    background: #000;\r\n}\r\n.about-us {\r\n    text-align: center;\r\n    width: 14em;\r\n    height: auto;\r\n}\r\n.about-us > p {\r\n    color: gray;\r\n    letter-spacing: 0;\r\n    line-height: 1.02;\r\n    font-family: Gotham;\r\n    font-size: small;\r\n    font-weight: 400;\r\n    text-align: justify;\r\n}\r\n.social-media {\r\n    margin-top: 1em;\r\n}\r\n.social-media a {\r\n    margin: 0 10px;\r\n}\r\n\r\n/* footer formulario */\r\n.formulario input,\r\n.formulario span,\r\n.formulario label,\r\n.formulario textarea {\r\n    font-family: Gotham;\r\n    display: inline-block;\r\n    border: none;\r\n    font-size: small;\r\n}\r\n.formulario textarea:focus,\r\n.formulario input:focus {\r\n    outline: 0;\r\n}\r\ninput.question,\r\ntextarea.question {\r\n    color: #ffff;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    border-radius: 2px;\r\n    margin: 0;\r\n    border: none;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, 0);\r\n    transition: padding-top 0.2s ease, margin-top 0.2s ease;\r\n    overflow-x: hidden;\r\n}\r\ntextarea.question {\r\n    font-size: 15px;\r\n}\r\ninput.question + label,\r\ntextarea.question + label {\r\n    display: block;\r\n    position: relative;\r\n    white-space: nowrap;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 10%;\r\n    border-top: 1px solid rgb(255, 174, 0);\r\n    transition: width 0.4s ease;\r\n    height: 0px;\r\n    margin-bottom: 1em;\r\n}\r\ninput.question:focus + label,\r\ntextarea.question:focus + label {\r\n    width: 100%;\r\n}\r\ninput.question:focus,\r\ninput.question:valid {\r\n    padding-top: 1px;\r\n}\r\ntextarea.question:valid,\r\ntextarea.question:focus {\r\n    margin-top: 10px;\r\n}\r\ninput.question:focus + label > span,\r\ninput.question:valid + label > span {\r\n    top: -30px;\r\n    font-size: 10px;\r\n    color: #333;\r\n    font-weight: 700;\r\n}\r\ntextarea.question:focus + label > span,\r\ntextarea.question:valid + label > span {\r\n    top: -50px;\r\n    font-size: 10px;\r\n    color: #333;\r\n    font-weight: 700;\r\n}\r\ninput.question:valid + label,\r\ntextarea.question:valid + label {\r\n    border-color: green;\r\n}\r\ninput.question:invalid,\r\ntextarea.question:invalid {\r\n    box-shadow: none;\r\n}\r\n\r\ninput.question + label > span,\r\ntextarea.question + label > span {\r\n    margin: 0;\r\n    position: absolute;\r\n    color: #ffff;\r\n    font-size: 15px;\r\n    top: -1.3em;\r\n    left: 0px;\r\n    transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;\r\n}\r\ntextarea.question + label > span {\r\n    top: -3em;\r\n}\r\n\r\nbutton {\r\n    transition: opacity 0.3s ease, background 0.3s ease;\r\n    display: block;\r\n    opacity: 1;\r\n    margin: 0;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    background-color: transparent;\r\n    color: #ffff;\r\n    border: 1px solid white;\r\n    border-radius: 3px;\r\n}\r\nbutton:hover {\r\n    background-color: #ffff;\r\n    color: #000;\r\n    font-weight: 600;\r\n}\r\n\r\n#create {\r\n    background-color: #d9dcdf;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n#create > label {\r\n    font-family: Gotham;\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n}\r\n\r\n/* PAGE NOSOTROS */\r\n#img-cover > img {\r\n    height: 100vh;\r\n    width: 100%;\r\n    /* position: absolute; */\r\n    z-index: -100;\r\n    margin-bottom: -10px;\r\n}\r\n.us-texto {\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 10%;\r\n    right: 0%;\r\n    color: #ffff;\r\n}\r\n#nosotros-titulo {\r\n    font-size: 2em;\r\n}\r\n",""]);const I=g},124:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n    margin: 0;\r\n    transition: all .3s;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n    display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n    background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n    display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n    display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n',""]);const i=o},673:(n,r,e)=>{e.d(r,{Z:()=>g});var t=e(645),o=e.n(t),i=e(667),a=e.n(i),s=new URL(e(821),e.b),l=new URL(e(816),e.b),d=new URL(e(660),e.b),c=new URL(e(160),e.b),p=o()((function(n){return n[1]})),f=a()(s),u=a()(l),m=a()(d),h=a()(c);p.push([n.id,"/* MEDIA QUERIES */\r\n\r\n/* RESPONSIVE */\r\n@media only screen and (min-width: 300px) and (max-width: 1200px) {\r\n\r\n    #travel {\r\n        background-size: unset;\r\n        background-repeat: no-repeat;\r\n    }\r\n\r\n    #portafolio h2 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .portafolio-container {\r\n        width: fit-content;\r\n        flex-wrap: wrap;\r\n        display: block;\r\n    }\r\n    .portafolio-container .d-h {\r\n        width: 340px;\r\n        height: 680px;\r\n        order: 3;\r\n    }\r\n\r\n    .portafolio-container .d-v {\r\n        position: relative;\r\n        width: 340px;\r\n        height: 340px;\r\n        background-size: cover;\r\n    }\r\n\r\n    .portafolio-container .d-social {\r\n        background-image: url("+f+");\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n    }\r\n    .portafolio-container .d-producto {\r\n        background-image: url("+u+");\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        position: relative;\r\n    }\r\n    .portafolio-container .d-aereo {\r\n        background-image: url("+m+");\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        position: relative;\r\n    }\r\n    .portafolio-container .d-turismo {\r\n        background-image: url("+h+");\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n    }\r\n\r\n    .filtro-aereo,\r\n    .filtro-social,\r\n    .filtro-producto,\r\n    .filtro-turismo {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        background: rgba(0, 0, 0, 0.5);\r\n        opacity: 1;\r\n    }\r\n    #p-div-title{\r\n        width: auto;\r\n        font-size: 1em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 768px) {\r\n    #portafolio h2 {\r\n        font-size: 2rem;\r\n        letter-spacing: 20px;\r\n    }\r\n    #p-div-title{\r\n        width: auto;\r\n        font-size: 1em;\r\n    }\r\n    .card{\r\n        width: 200px;\r\n        top: 10%;\r\n    }\r\n    .card-texto{\r\n        color: #589bdf;\r\n        text-align: right;\r\n        font-size: 1em;\r\n    }\r\n    \r\n    .card-description{\r\n        line-height: 1;\r\n        font-size: 10px;\r\n    }\r\n    \r\n    a.animated-button.thar-three {\r\n        padding: 10px 10px 10px 10px;\r\n        font-size: 10px;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 300px) and (max-width: 599px) {\r\n    .card{\r\n        display: none;\r\n    }\r\n    #portafolio {\r\n        padding-top: 10px;\r\n    }\r\n    #portafolio h2 {\r\n        font-size: 1rem;\r\n        letter-spacing: 20px;\r\n    }\r\n\r\n    #travel h2 {\r\n        color: #ffff;\r\n        letter-spacing: 30px;\r\n    }\r\n    #p-div-title{\r\n        width: auto;\r\n        font-size: 1em;\r\n    }\r\n}\r\n\r\n/* Tablet menu */\r\n@media all and (min-width: 600px) {\r\n    .menu {\r\n        justify-content: center;\r\n    }\r\n    .logo {\r\n        flex: 1;\r\n    }\r\n    .toggle {\r\n        flex: 1;\r\n        text-align: right;\r\n    }\r\n    .item.lach {\r\n        width: auto;\r\n        order: 1;\r\n        display: block;\r\n    }\r\n    .toggle {\r\n        order: 2;\r\n    }\r\n    #p-div-title{\r\n        width: auto;\r\n        font-size: 1em;\r\n    }\r\n\r\n}\r\n\r\n/* Desktop menu */\r\n@media all and (min-width: 900px) {\r\n    .item {\r\n        display: block;\r\n        width: auto;\r\n    }\r\n    .toggle {\r\n        display: none;\r\n    }\r\n    .logo {\r\n        order: 0;\r\n    }\r\n    .item {\r\n        order: 1;\r\n    }\r\n    .lach {\r\n        order: 2;\r\n    }\r\n    .menu li {\r\n        padding: 0px 10px;\r\n    }\r\n}\r\n\r\n",""]);const g=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],d=t.base?l[0]+t.base:l[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var f=e(p),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(r[f].references++,r[f].updater(u)):r.push({identifier:p,updater:o(u,t),references:1}),a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var l=t(n,o),d=0;d<i.length;d++){var c=e(i[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=l}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},930:(n,r,e)=>{n.exports=e.p+"baf91e98ccf3c25ac253.otf"},363:(n,r,e)=>{n.exports=e.p+"df38f0bfbbd796768b84.otf"},638:(n,r,e)=>{n.exports=e.p+"89a396525c0de98da365.ttf"},518:(n,r,e)=>{n.exports=e.p+"4a217d1dfaa205c5c5cd.ttf"},575:(n,r,e)=>{n.exports=e.p+"db6d916952fb988edac1.ttf"},263:(n,r,e)=>{n.exports=e.p+"cd678d6fcd7ad40cc18d.png"},660:(n,r,e)=>{n.exports=e.p+"b8d9c80d06ebd86318a0.png"},874:(n,r,e)=>{n.exports=e.p+"29e764b3b5a5587871b3.png"},863:(n,r,e)=>{n.exports=e.p+"6a4b10eb4eea289249e7.png"},110:(n,r,e)=>{n.exports=e.p+"6d19878392142a0957a7.png"},816:(n,r,e)=>{n.exports=e.p+"485cd0285db66b155392.png"},821:(n,r,e)=>{n.exports=e.p+"9252817d63ec3deded45.png"},160:(n,r,e)=>{n.exports=e.p+"a8514f402a171b5395fe.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),s=e(565),l=e.n(s),d=e(216),c=e.n(d),p=e(589),f=e.n(p),u=e(226),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),r()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var h=e(124),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b=e(673),x={};x.styleTagTransform=f(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=c(),r()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".swiperVid",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"},effect:"fade",fadeEffect:{crossFade:!0},keyboard:{enabled:!0,onlyInViewport:!1},followFinger:!0}),btn__menu_nav.addEventListener("click",(function(){$(".toggle").on("click",(function(){$(".item").hasClass("active")?($(".item").removeClass("active"),$(this).find("a").html("<i class='fas fa-bars'></i>")):($(".item").addClass("active"),$(this).find("a").html("<i class='fas fa-times'></i>"))}))}));var w=document.getElementById("go__up");function y(){gsap.timeline().from(".animate-this",{duration:1,y:30,opacity:0,stagger:.4,delay:.2})}window.onscroll=function(){window.pageYOffset>=200?w.style.display="block":w.style.display="none"},w.onclick=function(){window.scrollTo(0,0)},$((function(){barba.init({sync:!0,transitions:[{async leave(n){const r=this.async();var e,t;(e=gsap.timeline()).to(".loading-screen",{duration:1.2,width:"100%",left:"0%",ease:"Expo.easeInOut"}),e.to(".loading-screen",{duration:1,width:"100%",left:"100%",ease:"Expo.easeInOut",delay:.3}),e.set(".loading-screen",{left:"-100%"}),await(t=1e3,t=t||2e3,new Promise((n=>{setTimeout((()=>{n()}),t)}))),r()},async enter(n){y()},async once(n){y()}}]})}))})()})();