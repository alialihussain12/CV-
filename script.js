// 100x Professional JavaScript for Interactive Portfolio 🚀🔥

// Dark/Light Mode Toggle with Smooth Transition
document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Apply Stored Theme Preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(event) {
      event.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      let targetPosition = document.getElementById(targetId).offsetTop;
      window.scrollTo({ top: targetPosition - 50, behavior: "smooth" });
  });
});

// Scroll Animation with Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("active");
      }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

// Active Menu Highlight on Scroll with Better Accuracy
window.addEventListener("scroll", function() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section, index) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 200;
      let height = section.offsetHeight;

      if (top >= offset && top < offset + height) {
          navLinks.forEach(link => link.classList.remove("active"));
          navLinks[index].classList.add("active");
      }
  });
});

// Contact Form Validation with Live Feedback
document.getElementById("contact-form").addEventListener("submit", function(event) {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let errorMessage = "";

  if (name.value.trim() === "") {
      errorMessage += "⚠️ نام ضروری ہے!\n";
      name.style.border = "2px solid red";
  } else {
      name.style.border = "2px solid green";
  }

  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errorMessage += "⚠️ درست ای میل درج کریں!\n";
      email.style.border = "2px solid red";
  } else {
      email.style.border = "2px solid green";
  }

  if (message.value.trim() === "") {
      errorMessage += "⚠️ پیغام لازمی ہے!\n";
      message.style.border = "2px solid red";
  } else {
      message.style.border = "2px solid green";
  }

  if (errorMessage !== "") {
      alert(errorMessage);
      event.preventDefault();
  }
});

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "⬆";
backToTop.id = "back-to-top";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.fontSize = "24px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
      backToTop.style.display = "block";
  } else {
      backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});