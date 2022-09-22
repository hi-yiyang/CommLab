const cg = document.getElementById("cg")
const bg = document.getElementById("bg-img")

cg.addEventListener("mouseover", () => {
	bg.style.filter = "blur(5px) brightness(80%)"
})

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1
		const slides = button
		  .closest("[data-carousel]")
		  .querySelector("[data-slides]")
	
		const activeSlide = slides.querySelector("[data-active]")
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.length - 1
		if (newIndex >= slides.children.length) newIndex = 0
	
		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})