const toggleButton = document.querySelector(".toggle");
const toggleIcon = document.querySelector(".toggle i");
const dropdown = document.querySelector(".dropdown");

toggleButton.onclick = () => {
  dropdown.classList.toggle("open");
  const isOpen = dropdown.classList.contains("open");
  toggleIcon.classList === isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
