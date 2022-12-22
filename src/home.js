const home = (() => {
	const container = document.querySelector('#content');

	const renderHeroSection = () => {
		const heroContainer = document.createElement('div');
		heroContainer.classList.add('hero-container');
		container.appendChild(heroContainer);

		const heroContent = document.createElement('div');
		heroContent.classList.add('hero-content');

		const h1 = document.createElement('h1');
		h1.textContent = 'Resto Brand';
		heroContent.appendChild(h1);
		
		const p = document.createElement('p');
		p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula pellentesque varius. Praesent pulvinar semper interdum. Etiam malesuada gravida nisi quis volutpat. Phasellus sit amet pretium libero. Nam erat magna, eleifend non tortor ut, auctor hendrerit odio."
		heroContent.appendChild(p);

		heroContainer.appendChild(heroContent);
	}	

	const render = () => {
		renderHeroSection();
	}

	return {
		render
	}
})();

export default home.render
