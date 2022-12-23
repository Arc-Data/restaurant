import resetContent from './removeChild';
import phone from './assets/phone-solid.svg';
import location from './assets/location-pin-solid.svg';
import clock from './assets/clock-solid.svg';

const contact = (() => {
	const container = document.querySelector('#content');
	
	const renderContactSection = () => {
		const contactContainer = document.createElement('div');
		contactContainer.classList.add('contact-container');
		container.appendChild(contactContainer);

		const h2 = document.createElement('h2');
		h2.textContent = 'Contact Us';
		h2.classList.add('contact-title');
		contactContainer.appendChild(h2);

		const contactCard = document.createElement('div');
		contactCard.classList.add('contact-card');
		contactContainer.appendChild(contactCard);

		const phoneImg = document.createElement('img');
		phoneImg.src = phone;
		phoneImg.classList.add('icon');
		contactCard.appendChild(phoneImg);

		const phoneText = document.createElement('p')
		phoneText.textContent = '0999-999-9999';
		contactCard.appendChild(phoneText);

		const locationImg = document.createElement('img');
		locationImg.src = location;
		locationImg.classList.add('icon');
		contactCard.appendChild(locationImg);

		const locationText = document.createElement('p')
		locationText.textContent = '123 Somewhere St., Unkown City, Country'
		contactCard.appendChild(locationText);

		const timeImg = document.createElement('img');
		timeImg.src = clock;
		timeImg.classList.add('icon');
		contactCard.appendChild(timeImg);

		const timeText = document.createElement('p')
		timeText.textContent = 'Open 24/7'
		contactCard.appendChild(timeText);
	}

	const render = () => {
		resetContent();
		renderContactSection();
	}

	return {
		render,
	};
})()

export default contact.render;