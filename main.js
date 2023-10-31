//document.addEventListener('mousemove', e => {
//	Object.assign(document.documentElement, {
//		style: `
//		--move-x: ${(e.clientX - window.innerWidth / 2) * -.03}deg;
//		--move-y: ${(e.clientY - window.innerWidth / 2) * -.05}deg;
//		`
//	})
//})

document.querySelectorAll('.sneaker-container').forEach(container => {
	container.addEventListener('mousemove', e => {
	  const card = container.querySelector('.sneaker');
	  const cardRect = card.getBoundingClientRect();
	  const centerX = cardRect.left + cardRect.width / 2;
	  const centerY = cardRect.top + cardRect.height / 2;
  
	  const moveX = ((e.clientX - centerX) / cardRect.width) * 50;
	  const moveY = ((e.clientY - centerY) / cardRect.height) * -50;
  
	  card.style.setProperty('--move-x', moveX + 'deg');
	  card.style.setProperty('--move-y', moveY + 'deg');
	});
  });