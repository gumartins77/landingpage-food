const btn = document.getElementById("btn-menu");
const menu = document.getElementById("menu-mobile");

menu.addEventListener("click", animar);

function animar() {
  menu.classList.toggle("abrir-menu");
  btn.classList.toggle("ativar-menu");
}
