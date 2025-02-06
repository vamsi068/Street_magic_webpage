document.addEventListener("DOMContentLoaded", function () {
    // Slideshow Functionality
    let slideIndex = 0;
    function showSlides() {
      let slides = document.querySelectorAll(".mySlides");
      slides.forEach(slide => slide.style.display = "none");
  
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
  
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
  
    if (document.querySelector(".mySlides")) {
      showSlides();
    }
  
    // Reservation Form Submission
    const reservationForm = document.getElementById("reservation-form");
    if (reservationForm) {
      reservationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let message = document.getElementById("message").value;
  
        if (name && email && phone && date && time) {
          document.getElementById("reservation-status").innerText = "Reservation Successful!";
          document.getElementById("reservation-status").classList.remove("hidden");
          reservationForm.reset();
        } else {
          alert("Please fill in all required fields.");
        }
      });
    }
  
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a, .btn").forEach(anchor => {
      anchor.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
          event.preventDefault();
          let targetId = this.getAttribute("href").substring(1);
          let targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  
    // Contact Form Submission (Basic Validation)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      });
    }
  });
  