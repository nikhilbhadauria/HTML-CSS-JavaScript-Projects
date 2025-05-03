const btn = document.querySelector('.btn');
const trailerContainer = document.querySelector('.trailer-container');
const video = document.querySelector('video');
const closeIcon = document.querySelector('.close-icon');
btn.addEventListener('click', () => {
    trailerContainer.classList.remove('active');
    video.currentTime = 0;
    video.play();
});
closeIcon.addEventListener('click', () => {
    trailerContainer.classList.add('active');
    video.pause();
});
trailerContainer.addEventListener('click', (e) => {
    if (e.target === trailerContainer) {
        trailerContainer.classList.add('active');
        video.pause();
    }
});
video.addEventListener('ended', () => {
    trailerContainer.classList.add('active');
});