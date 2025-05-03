const heartContainer = document.querySelector(".heart-container");
const grayHeart = document.querySelector(".gray-heart");
const redHeart = document.querySelector(".red-heart");

let liked = false;

heartContainer.addEventListener("click", () => {
    liked = !liked;
    redHeart.style.animation = 'none';
    grayHeart.style.animation = 'none';
    void redHeart.offsetWidth; 
    if (liked) {
        redHeart.style.visibility = "visible";
        redHeart.style.opacity = "1";
        redHeart.style.animation = "heartPop 0.6s cubic-bezier(0.17, 0.89, 0.32, 1.49) forwards";
        grayHeart.style.opacity = "0";
        grayHeart.style.transform = "rotate(-45deg) scale(0.8)";
    } else {
        redHeart.style.animation = "heartShrink 0.4s ease-out forwards";
        grayHeart.style.opacity = "1";
        grayHeart.style.animation = "grayRevive 0.5s ease-out forwards";
    }
    heartContainer.style.animation = "none";
    void heartContainer.offsetWidth;
    heartContainer.style.animation = "pulse 0.3s ease";
});


