/*==========================================
TOSBİK Elektrik & Otomasyon
app.js
==========================================*/

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.padding = "8px 0";
        navbar.style.background = "rgba(2,6,23,.98)";

    } else {

        navbar.style.padding = "15px 0";
        navbar.style.background = "rgba(15,23,42,.92)";

    }

});

/*=============================
YUKARI ÇIK BUTONU
=============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=============================
SCROLL ANİMASYONU
=============================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".service-card,.gallery-box,.comment-card,.faq-item,.stat,.about,.contact"

).forEach(el => {

    observer.observe(el);

});

/*=============================
WHATSAPP BUTONU
=============================*/

const whatsapp = document.querySelector(".floating-whatsapp");

setInterval(() => {

    whatsapp.animate([

        { transform: "scale(1)" },

        { transform: "scale(1.12)" },

        { transform: "scale(1)" }

    ], {

        duration: 1200

    });

}, 5000);

/*=============================
SAYAÇ ANİMASYONU
=============================*/

document.querySelectorAll(".stat h2").forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text);

    if (isNaN(number)) return;

    let count = 0;

    const speed = Math
