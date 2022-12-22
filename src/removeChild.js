function resetContent() {
	const container = document.querySelector('#content');
	while(container.firstChild) {
		container.removeChild(container.lastChild);
	}
}

export default resetContent