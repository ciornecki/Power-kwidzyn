const sliderContent = document.querySelector('.slider_content');
const carouselImages = document.querySelectorAll('.slider_image');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const slider = document.querySelector('.slider');

let carouselWidth;
const carouselSpeed = 9000;

let n = 0;

const handleCarousel = () => {
	n++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const changeImage = () => {
	carouselWidth = slider.offsetWidth;
	if (n > carouselImages.length - 1) {
		n = 0;
	} else if (n < 0) {
		n = carouselImages.length - 1;
	}

	sliderContent.style.transform = `translateX(${-n * carouselWidth}px)`;
};

const handleRightArrow = () => {
	n++;
	resetInterval();
};
const handleLeftArrow = () => {
	n--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
};

nextBtn.addEventListener('click', handleRightArrow);
prevBtn.addEventListener('click', handleLeftArrow);

// year

const setCurrentDate = () => {
	const spanYear = document.querySelector('.year');
	const date = new Date();
	const year = date.getFullYear();
	spanYear.textContent = year;
};

// revals

const handleFirstReval = () => {
	const revalSection = document.querySelector('.reval-section');

	if (revalSection.offsetTop - window.scrollY < window.innerHeight - 50) {
		revalSection.classList.add('reval');
	}
};
const handleReval = () => {
	const revalSection = document.querySelectorAll('.reval-section');
	revalSection.forEach((sec) => {
		if (sec.offsetTop - window.scrollY < window.innerHeight - 50) {
			sec.classList.add('reval');
		}
	});
};

// popup
const images = document.querySelectorAll('.card_img');
const popUp = document.querySelector('.pop-up');
const popUpImg = document.querySelector('.pop-up_img');
const closeBtn = document.querySelectorAll('.mark');
let objectBg;

const handlePopUp = (e) => {
	objectBg = e.target.classList[1];
	popUp.classList.add('show-pop-up');
	popUpImg.classList.add(`${objectBg}`);
	popUp.classList.remove('close-animation');
};

const handleClosePopUp = () => {
	popUp.classList.add('close-animation');
	setTimeout(() => {
		popUp.classList.remove('show-pop-up');
		popUpImg.classList.remove(`${objectBg}`);
	}, 300);
};
closeBtn.forEach((btn) => btn.addEventListener('click', handleClosePopUp));
images.forEach((el) => el.addEventListener('click', handlePopUp));

window.addEventListener('scroll', handleReval);
window.addEventListener('DOMContentLoaded', handleFirstReval);

setCurrentDate();
