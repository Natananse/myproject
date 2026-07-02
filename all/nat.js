// ===== 1. TYPING ANIMATION =====
const texts = ["Web Developer", "UI/UX Designer", "JavaScript Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const typingContainer = document.querySelector(".typing-container");
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingContainer.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingContainer.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => isDeleting = true, 1500); // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // move to next text
  }

  setTimeout(type, isDeleting ? 80 : 120);
}
type(); // start the animation


// ===== 2. SMOOTH SCROLLING =====
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // update active link
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});


// ===== 3. SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".skill-card, .intro, .portrait").forEach(el => {
  observer.observe(el);
});