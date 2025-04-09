// Smooth section display on navbar click
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const id = this.getAttribute("href").substring(1);
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Animate visible section
document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("animate");
});
