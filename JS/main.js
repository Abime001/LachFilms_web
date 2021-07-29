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