const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params){
		for (let i = 0; i < animItems.length; i++) {
							const animItem = animItems[i];
							const animItemHeight = animItem.offsetHeight;
							const animItemOffset = offset(animItem).top;
							const animStart = 4;


							let animItemPoint = window.innerHeight - animItemHeight / animStart;

							if(animItemHeight > window.innerHeight){
								animItemPoint = window.innerHeight - window.innerHeight / animStart;
							}

							if((pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeight))){
								animItem.classList.add('_active');
							} else{
								animItem.classList.remove('_active');
							}
					}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	setTimeout(() =>animOnScroll(), 300)
	
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function changeClassMenu(x){
	x.classList.toggle("burger-clicked");

	document.getElementById("burger__line-1").classList.toggle("burger__line-1-clicked");
	document.getElementById("burger__line-2").classList.toggle("burger__line-2-clicked");
	document.getElementById("burger__line-3").classList.toggle("burger__line-3-clicked");
	document.getElementById("menu__list").classList.toggle("menu__list-clicked");
	document.getElementById("menu__list").classList.toggle("no-scroll");
	document.getElementById('body').classList.toggle('no-scroll');
}
