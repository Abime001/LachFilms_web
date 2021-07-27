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

//ANIMACIÓN ENTRE PÁGINAS
barba.init({
    transitions: [
        {
            name: "page",
            leave: function (data) {
                var done = this.async();
                document.body.classList.add("loading");
                setTimeout(function () {
                    done();
                }, 900);
            },
            enter: function (data) {
                var done = this.async();
                document.body.classList.add("loading");
                setTimeout(function () {
                    done();
                }, 900);
            },
        },
    ],
});


//SLIDER
const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});