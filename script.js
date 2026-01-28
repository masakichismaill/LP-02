const targets = document.querySelectorAll(".fade-in, .fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show"); // ←ここが重要
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

targets.forEach((el) => observer.observe(el));