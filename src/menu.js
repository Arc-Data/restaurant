import resetContent from './removeChild';
import steak from './assets/steak.jpg';
import salad from './assets/salad.jpg';

const menu = (() => {
	
	const container = document.querySelector('#content');

	const steakSelection = menuContainer => {

		const steakContainer = document.createElement('div');
		steakContainer.classList.add('menu-item-container');
		menuContainer.appendChild(steakContainer);

		const steakImg = document.createElement('img');
		steakImg.src = steak;
		steakImg.classList.add('menu-img');
		steakContainer.appendChild(steakImg);

		const steakSelection = document.createElement('div');
		steakSelection.classList.add('menu-list');
		steakContainer.appendChild(steakSelection);

		const steakTitle = document.createElement('p');
		steakTitle.classList.add('menu-selection-title');
		steakTitle.textContent = 'Steak';
		steakSelection.appendChild(steakTitle);

		const steakItem1 = document.createElement('p');
		steakItem1.textContent = 'Striploin';
		steakSelection.appendChild(steakItem1);

		const steakItem2 = document.createElement('p');
		steakItem2.textContent = 'Tenderloin';
		steakSelection.appendChild(steakItem2);

		const steakItem3 = document.createElement('p');
		steakItem3.textContent = 'Ribeye';
		steakSelection.appendChild(steakItem3);

		const steakItem4 = document.createElement('p');
		steakItem4.textContent = 'T-Bone';
		steakSelection.appendChild(steakItem4);
	}

	const saladSelection = menuContainer => {
		const saladContainer = document.createElement('div');
		saladContainer.classList.add('menu-item-container');
		menuContainer.appendChild(saladContainer);

		const saladImg = document.createElement('img');
		saladImg.src = salad;
		saladImg.classList.add('menu-img');
		saladContainer.appendChild(saladImg);

		const saladSelection = document.createElement('div');
		saladSelection.classList.add('menu-list');
		saladContainer.appendChild(saladSelection);

		const saladTitle = document.createElement('p');
		saladTitle.classList.add('menu-selection-title');
		saladTitle.textContent = 'Salad';
		saladSelection.appendChild(saladTitle);

		const saladItem1 = document.createElement('p');
		saladItem1.textContent = 'Caesar Salad';
		saladSelection.appendChild(saladItem1);

		const saladItem2 = document.createElement('p');
		saladItem2.textContent = 'Greek Salad';
		saladSelection.appendChild(saladItem2);

		const saladItem3 = document.createElement('p');
		saladItem3.textContent = 'Sweet Potato Salad';
		saladSelection.appendChild(saladItem3);

		const saladItem4 = document.createElement('p');
		saladItem4.textContent = 'Fish Caesar';
		saladSelection.appendChild(saladItem4);
	}

	const renderMenuSection = () => {
		const menuContainer = document.createElement('div');
		menuContainer.classList.add('menu-container');
		container.appendChild(menuContainer);

		const h2 = document.createElement('h2');
		h2.textContent = 'Our Menu';
		h2.classList.add('menu-title');
		menuContainer.appendChild(h2);

		steakSelection(menuContainer);
		saladSelection(menuContainer);
	};

	const render = () => {
		resetContent();
		renderMenuSection();
	};

	return {
		render,
	};
})()

export default menu.render


