
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU AFTER CLICKING A LINK

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name +
    "! Your message form is working. Email sending needs to be connected.");

    contactForm.reset();

});
