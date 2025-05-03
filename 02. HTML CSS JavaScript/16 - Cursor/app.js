const cursor = document.querySelector(".cursor");

let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animateCursor() {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    requestAnimationFrame(animateCursor);
}

animateCursor();
