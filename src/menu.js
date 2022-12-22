import resetContent from './removeChild';

const menu = (() => {
	
	const container = document.querySelector('#content');

	const renderMenuSection = () => {
		console.log("Menu Section");
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


