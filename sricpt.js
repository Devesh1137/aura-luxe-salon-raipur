// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ===============================
// BOOKING FORM → WHATSAPP
// ===============================



const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!name || !phone || !service || !date || !time) {
            alert("Please fill all the details.");
            return;
        }

        // Salon WhatsApp number
        const whatsappNumber = "919876543210";

        const message =
            `Hello Aurelia Beauty Studio!%0A%0A` +
            `I would like to request an appointment.%0A%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Service: ${service}%0A` +
            `Date: ${date}%0A` +
            `Time: ${time}%0A%0A` +
            `Please confirm my appointment.`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${message}`;

        window.location.href = whatsappURL;

    });
}


// ===============================
// SET CURRENT YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===============================
// PREVENT PAST DATES
// ===============================

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const todayDate = `${year}-${month}-${day}`;

    dateInput.min = todayDate;
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".service-card, .price-card, .transformation-card, .gallery-item, .testimonial-card, .about-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});