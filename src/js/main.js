const accordion = document.querySelector('.accordions')
const accordionBtns = document.querySelectorAll('.accordion_content')

// accordion

function openAccordion() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
		this.classList.remove('open_accordion')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('active')
		this.classList.toggle('open_accordion')
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.accordion_text')
	allActiveItems.forEach(item => {
		item.classList.remove('active')
		item.previousElementSibling.classList.remove('open_accordion')
	})
}

const clickOutside = e => {
	if (e.target.classList.contains('accordion_content') || e.target.classList.contains('accordion_text')) return
	closeAccordionItems()
}

// year

const setCurrentDate = () => {
	const spanYear = document.querySelector('.year')
	const date = new Date()
	const year = date.getFullYear()
	spanYear.textContent = year
}

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

// revals

const handleReval = () => {
	const revalSection = document.querySelectorAll('.reval-section')
	revalSection.forEach(sec => {
		if (sec.offsetTop - window.scrollY < window.innerHeight - 50) {
			sec.classList.add('reval')
		}
	})
}

// scrollSpy

const handleScrollSpy = () => {
	let sectionArr = []

	const sections = document.querySelectorAll('[data-section]')
	const menuItems = document.querySelectorAll('.dnav-item-a')

	sections.forEach(sec => {
		if (window.scrollY <= sec.offsetTop + sec.offsetHeight - 71) {
			sectionArr.push(sec)
			const currentSec = document.querySelector(`[href*="${sectionArr[0].dataset.section}"]`)
			menuItems.forEach(item => item.classList.remove('spy'))
			if (sectionArr[0].dataset.section === 'aboutus') {
				currentSec.classList.add('spy')
			}
			currentSec.classList.add('spy')
		}
	})
}

window.addEventListener('scroll', handleScrollSpy)

window.addEventListener('scroll', handleReval)

setCurrentDate()
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordion))

window.addEventListener('click', clickOutside)
