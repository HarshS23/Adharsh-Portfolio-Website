function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("./assets/Aboutme.txt")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load Aboutme.txt");
      return res.text();
    })
    .then(text => {
      const p = document.getElementById("about-text");
      if (p) p.textContent = text;
    })
    .catch(err => console.error(err));
});
