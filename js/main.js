$(document).ready(function() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Burger -> Active
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linksIn 3s`;
      }
    });

    // Burger becoms X
    burger.classList.toggle("toggle");
  });

  nav.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  $('nav a[href*="#"]').on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 30
      },
      1000
    );
  });

  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1200,
    once: true
  });
});
