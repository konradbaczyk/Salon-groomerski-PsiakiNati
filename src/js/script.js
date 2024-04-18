const navigationBottomBar = document.querySelector(".nav-bottom");
const mobileNavBtn = document.querySelector(".burger-btn");
const mobileNavItems = document.querySelector(".nav-bottom__items");

const showMobileNav = () => {
	mobileNavItems.classList.toggle("nav-bottom__items--active");
};

mobileNavBtn.addEventListener("click", showMobileNav);
