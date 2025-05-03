const arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
    arrow.classList.add("fade-out");
} else {
    arrow.classList.remove("fade-out");
}
});
