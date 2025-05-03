let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100;
    indicator.style.width = `${scrolled}%`;
    if (scrolled >= 100) {
        indicator.style.transform = "scaleX(1.1)";
        setTimeout(() => {
            indicator.style.transform = "scaleX(1)";
        }, 300);
    }
});
