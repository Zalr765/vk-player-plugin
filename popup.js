document.getElementById('clickMe').addEventListener('click', () => {
	console.log('sss');
	const header = document.querySelector('.vkitgetColorClass__colorTextPrimary--vmkYQ');
	console.log(header);
	if (header) {
		header.textContent = 'eba vishlo!';	
	}
});
