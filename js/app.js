/*==========================================
TOSBİK Elektrik & Otomasyon
app.js
==========================================*/

/*=============================
NAVBAR
=============================*/

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

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

if (topBtn) {

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

}

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

".service-card,.gallery-box,.comment-card,.faq-item,.stat-box,.about-card,.contact-box,.reference-card"

).forEach(el => {

    observer.observe(el);

});

/*=============================
WHATSAPP BUTONU
=============================*/

const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

    setInterval(() => {

        whatsapp.animate([

            { transform: "scale(1)" },

            { transform: "scale(1.12)" },

            { transform: "scale(1)" }

        ], {

            duration: 1200

        });

    }, 5000);

}

/*=============================
SAYAÇLAR
=============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.dataset.target);

        let count = 0;

        const speed = Math.max(1, Math.ceil(target / 80));

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=============================
FOOTER YILI
=============================*/

const year = document.getElementById("year");

if (year) {

    year.innerText = new Date().getFullYear();

}
