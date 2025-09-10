// Alterna entre "Landing Page" e "Site Completo"
document.getElementById("toggleView").addEventListener("click", () => {
  document.body.classList.toggle("landing-only");

  if (document.body.classList.contains("landing-only")) {
    document.querySelectorAll("section:not(#hero)").forEach(sec => sec.style.display = "none");
    document.getElementById("toggleView").innerText = "Ver Site Completo";
  } else {
    document.querySelectorAll("section").forEach(sec => sec.style.display = "block");
    document.getElementById("toggleView").innerText = "Ver Landing Page";
  }
});
