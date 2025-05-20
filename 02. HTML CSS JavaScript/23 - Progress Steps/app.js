const progress = document.querySelector("#progress")
const circles = document.querySelectorAll(".circle")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

let activeIndex = 1

nextBtn.addEventListener("click", () => {
    activeIndex++
    if (activeIndex > circles.length) activeIndex = circles.length
    updateUI()
})

prevBtn.addEventListener("click", () => {
    activeIndex--
    if (activeIndex < 1) activeIndex = 1
    updateUI()
})

function updateUI() {
    circles.forEach((circle, index) => {
        circle.classList.toggle("active", index < activeIndex)
    })
    const newWidth = ((activeIndex - 1) / (circles.length - 1)) * 100
    gsap.to(progress, {
        width: `${newWidth}%`,
        duration: 0.5,
        ease: "power2.out"
    })
    prevBtn.disabled = activeIndex === 1
    nextBtn.disabled = activeIndex === circles.length
}

updateUI()
