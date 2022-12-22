import resetContent from './removeChild'

const contact = (() => {
	
	const renderContactSection = () => {
		console.log("Contact Section");
	}

	const render = () => {
		resetContent();
		renderContactSection();
	}

	return {
		render,
	}
})()

export default contact.render;