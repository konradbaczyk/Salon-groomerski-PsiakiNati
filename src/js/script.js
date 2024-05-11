const navigationBottomBar = document.querySelector(".nav-bottom");
const mobileNavBtn = document.querySelector(".burger-btn");
const mobileNavItems = document.querySelector(".nav-bottom__items");

const cookieBox = document.querySelector(".cookie-box");
const cookieBtnReject = document.querySelector(".cookie-box__btn--reject");
const cookieBtnAccept = document.querySelector(".cookie-box__btn--accept");
const mapSection = document.querySelector(".map");

const showMobileNav = () => {
	mobileNavItems.classList.toggle("nav-bottom__items--active");
};

const showCookie = () => {
	const cookieAccept = localStorage.getItem("cookie-accept");
	if (cookieAccept) {
		cookieBox.classList.add("display-none");
	} else {
		cookieBox.classList.remove("display-none");
	}
};

const acceptCookie = () => {
	localStorage.setItem("cookie-accept", "accept");
	cookieBox.classList.add("display-none");
	localStorage.removeItem("cookie-reject");
};

const rejectCookie = () => {
	localStorage.setItem("cookie-reject", "reject");
	cookieBox.classList.add("display-none");
	mapSection.classList.add("display-none");
};

const checkCookies = () => {
	if (localStorage.getItem("cookie-reject")) {
		mapSection.classList.add("display-none");
		cookieBox.classList.add("display-none");
	}
};

mobileNavBtn.addEventListener("click", showMobileNav);
cookieBtnAccept.addEventListener("click", acceptCookie);
cookieBtnReject.addEventListener("click", rejectCookie);
showCookie();
checkCookies();
