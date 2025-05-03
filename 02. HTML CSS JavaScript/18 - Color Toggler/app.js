const toggle = document.getElementById("switch");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});