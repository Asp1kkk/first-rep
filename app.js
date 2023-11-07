const body = document.body;
const scrollWrap = document.querySelector('body');
const height = scrollWrap.getBoundingClientRect().height - 1
const speed = 0.1
let offset = 0;

body.style.height = Math.floor(height) + 'px'

const smoothScroll = () => {
	offset += (window.scrollY - offset) * speed
	let scroll = `translateY(-${offset}px) translateZ(0)`
	scrollWrap.style.transform = scroll
	requestAnimationFrame(smoothScroll)
}

smoothScroll()