// Переключатель темы
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const icon = toggleButton.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

// Год в футере
document.getElementById("footer-year").textContent = new Date().getFullYear();
