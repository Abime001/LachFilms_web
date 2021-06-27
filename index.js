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