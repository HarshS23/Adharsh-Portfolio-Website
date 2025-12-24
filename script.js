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


function copyEmail() {
    const email = "Harsh.shokka@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email copied to clipboard");
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });
}
