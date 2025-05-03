const btn = document.getElementById("btn");
const hex = document.getElementById("hexCode");
const copiedText = document.getElementById("copiedText");

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
    return color;
}

btn.addEventListener("click", () => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    hex.textContent = color;
    copiedText.style.opacity = 0;
});

hex.addEventListener("click", () => {
    navigator.clipboard.writeText(hex.textContent);
    copiedText.style.opacity = 1;
    setTimeout(() => {
    copiedText.style.opacity = 0;
    }, 1000);
});
