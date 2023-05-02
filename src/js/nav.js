//NAWKA
const nav = document.querySelector('nav')
const navContact = document.querySelector('.nav-contact')

document.addEventListener('scroll', () => {
	nav.classList.toggle('nav-offset', window.scrollY > 0)
})
//BURGER
const burgerIcon = document.querySelector('.burger-icon')
const navMenu = document.querySelector('.nav-menu')

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active')
	navMenu.classList.toggle('active')
	nav.classList.toggle('visible')
})

const closeNav = () => {
	navMenu.classList.remove('active')
	burgerIcon.classList.remove('active')
	if (nav.classList.contains('visible')) {
		nav.classList.remove('visible')
	}
}

const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(el => {
	el.addEventListener('click', closeNav)
})
