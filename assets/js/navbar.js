const burger = document.querySelector(".navMobile__burger");
const mobileNavWrapper = document.querySelector(".navMobile__wrapper");
const mobileNavOverlay = document.querySelector(".navMobile__overlay");

burger.addEventListener("click", () => {
	mobileNavWrapper.classList.toggle("hide");
	mobileNavOverlay.classList.toggle("hide");
});
