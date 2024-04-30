let header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  header.classList.toggle("rolagem", window.scrollY > 0);
});
