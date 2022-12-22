import resetContent from './removeChild';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/square-instagram.svg';


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

	const renderAboutSection = () => {
		const aboutContainer = document.createElement('div');
		aboutContainer.classList.add('about-container');
		container.appendChild(aboutContainer);

		const h2 = document.createElement('h2');
		h2.textContent = 'About Us';
		h2.style.color = '#2b2b2b';
		aboutContainer.appendChild(h2);

		const p = document.createElement('p');
		p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula pellentesque varius. Praesent pulvinar semper interdum. Etiam malesuada gravida nisi quis volutpat. Phasellus sit amet pretium libero. Nam erat magna, eleifend non tortor ut, auctor hendrerit odio."
		aboutContainer.appendChild(p);

		const socialContainer = document.createElement('div');
		aboutContainer.appendChild(socialContainer);

		const socialTitle = document.createElement('p');
		socialTitle.textContent = 'follow us on';
		socialTitle.style.textTransform = 'uppercase';
		socialTitle.style.textAlign = 'center';
		socialContainer.appendChild(socialTitle);

		const socials = document.createElement('div');
		socials.classList.add('socials');
		socialContainer.appendChild(socials)

		const facebookIcon = document.createElement('img');
		facebookIcon.classList.add('icon');
		facebookIcon.src = facebook;

		const twitterIcon = document.createElement('img');
		twitterIcon.classList.add('icon');
		twitterIcon.src = twitter;

		const instagramIcon = document.createElement('img');
		instagramIcon.classList.add('icon');
		instagramIcon.src = instagram;

		socials.appendChild(facebookIcon);
		socials.appendChild(twitterIcon);
		socials.appendChild(instagramIcon);		


	}

	const render = () => {
		console.log("CLicked!")
		resetContent();
		renderHeroSection();
		renderAboutSection();
	}

	return {
		render
	}
})();

export default home.render
