
	const parentContainer = document.querySelectorAll('.read-more-container');
	parentContainer.addEventListener('click',event=>{
		const current = event.target;
		const isReadMoreBtn = current.className.includes('read-more-btn');
		if(!isactive) return;
		const current = event.target.parentNode.querySelector('.read-more-text');
		currentText.classlist.toggle('read-more-text--show');
		current.textContent = current.textContent.includes('Read More') ? 
		"Read Less" : "Read More";
	})