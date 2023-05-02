const handleFirstReval = () => {
	const revalSection = document.querySelector('.reval-section');
	
		if (revalSection.offsetTop - window.scrollY < window.innerHeight - 50) {
			revalSection.classList.add('reval');
		}
	
}
const handleReval = () => {
	const revalSection = document.querySelectorAll('.reval-section');
	revalSection.forEach(sec => {
	
		if (sec.offsetTop - window.scrollY < window.innerHeight - 50) {
			sec.classList.add('reval');
		}
	})	
}

// year

const setCurrentDate = () => {
	const spanYear = document.querySelector('.year')
	const date = new Date()
	const year = date.getFullYear()
	spanYear.textContent = year
}

setCurrentDate();

window.addEventListener('scroll', handleReval);
window.addEventListener('DOMContentLoaded', handleFirstReval);