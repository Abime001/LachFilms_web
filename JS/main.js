var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperVid = new Swiper(".mySwiperVid", {
    loop:true,
    followFinger: true,
    preventClicks:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    keyboard: {
       enabled: true,
       onlyInViewport: false,
    },
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
