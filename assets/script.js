const sections = document.querySelectorAll('section');
const sidebarItems = document.querySelectorAll('#sidebar li')

window.addEventListener('scroll', () => {
	let currentSection = '';

	sections.forEach(section => {
		const rect = section.getBoundingClientRect();
		if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
			currentSection = section.id;
		}
	});

	sidebarItems.forEach(item => {
		item.classList.remove('active');
		if (item.dataset.section === currentSection) {
			item.classList.add('active');
		}
	});
});