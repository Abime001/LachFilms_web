var arrow_s = document.getElementById("arrow_s");
var arrow_p = document.getElementById("arrow_p");
var arrow_a = document.getElementById("arrow_a");
var arrow_t = document.getElementById("arrow_t");

var social = document.getElementById("social");
var btn_social = document.getElementById("btn-social");

var producto = document.getElementById("producto");
var btn_producto = document.getElementById("btn-producto");

var aereo = document.getElementById("aereo");
var btn_aereo = document.getElementById("btn-aereo");

var turismo = document.getElementById("turismo");
var btn_turismo = document.getElementById("btn-turismo");

arrow_s.addEventListener("click", function () {
    social.style.display = "none";
    social.style.opacity = 0;
});

arrow_p.addEventListener("click", function () {
    producto.style.display = "none";
    producto.style.opacity = 0;
});

arrow_a.addEventListener("click", function () {
    aereo.style.display = "none";
    aereo.style.opacity = 0;
});

arrow_t.addEventListener("click", function () {
    turismo.style.display = "none";
    turismo.style.opacity = 0;
});

btn_social.addEventListener("click", function () {
    social.style.display = "block";
    social.style.opacity = 1;

    turismo.style.display = "none";
    turismo.style.opacity = 0;

    aereo.style.display = "none";
    aereo.style.opacity = 0;

    producto.style.display = "none";
    producto.style.opacity = 0;
});

btn_producto.addEventListener("click", function () {
    social.style.display = "none";
    social.style.opacity = 0;

    turismo.style.display = "none";
    turismo.style.opacity = 0;

    aereo.style.display = "none";
    aereo.style.opacity = 0;

    producto.style.display = "block";
    producto.style.opacity = 1;
});

btn_aereo.addEventListener("click", function () {
    aereo.style.display = "block";
    aereo.style.opacity = 1;

    social.style.display = "none";
    social.style.opacity = 0;

    turismo.style.display = "none";
    turismo.style.opacity = 0;

    producto.style.display = "none";
    producto.style.opacity = 0;
});

btn_turismo.addEventListener("click", function () {
    aereo.style.display = "none";
    aereo.style.opacity = 0;

    social.style.display = "none";
    social.style.opacity = 0;

    turismo.style.display = "block";
    turismo.style.opacity = 1;

    producto.style.display = "none";
    producto.style.opacity = 0;
});

btn__menu_nav.addEventListener( "click", function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});

var x = document.getElementById("go__up");

window.onscroll = function () {
    "use strict";
    
    if (window.pageYOffset >= 200) {
        
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

x.onclick = function () {
    "use strict";
    window.scrollTo(0, 0);
};

<<<<<<< HEAD

=======
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});
>>>>>>> 4ec89ced25f4959841fac986ab3770139606f90f
