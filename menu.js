function toggleHeaderScrollClass() {
  const header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 0);
}

window.addEventListener("scroll", toggleHeaderScrollClass);

function getActiveSection() {
  const sections = document.querySelectorAll("section");

  let activeSection = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      activeSection = section.id;
    }
  });

  return activeSection;
}

window.addEventListener("scroll", () => {
  const activeSectionId = getActiveSection();
  const menuLinks = document.querySelectorAll(".menu-desktop ul li a");

  menuLinks.forEach(link => {
    const href = link.getAttribute("href").substring(1);
    link.parentElement.classList.toggle("active", href === activeSectionId);
  });

  const sections = document.querySelectorAll("section"); 

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = (rect.top < window.innerHeight && rect.bottom >= 0);

    section.classList.toggle("active", isVisible);
  });
});
