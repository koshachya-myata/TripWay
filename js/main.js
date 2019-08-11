let prevBg = document.getElementById('prev-bg');
let nextBg = document.getElementById('next-bg');
let header = document.getElementById('header');
let sliderName = document.getElementById('slider-name');
let sliderText = document.getElementById('slider-text');
let sliderLink = document.getElementById('slider-link');
let slideCounter = 2;
prevBg.onclick = sliderLeft;
nextBg.onclick = sliderRight;
function changeSliderContext(c){
	switch (c) {
		case 1:
			sliderName.textContent="Kazan";
			sliderText.textContent="Kazan fermentum tortor non enim aliquet condimentum. Nam aliquam pretium sem feugiat. Duis sem est, viverra eu interdum.";
			sliderLink.setAttribute("href", "https://www.google.com"); 
			break;
		case 2:
			sliderName.textContent="San-Fracisco";
			sliderText.textContent="San-Fracisco fermentum tortor non enim aliquet condimentum. Nam aliquam pretium sem feugiat. Duis sem est, viverra eu interdum.";
			sliderLink.setAttribute("href", "https://mail.yandex.ru"); 
			break;
		case 3:
			sliderName.textContent="New York";
			sliderText.textContent="New York fermentum tortor non enim aliquet condimentum. Nam aliquam pretium sem feugiat. Duis sem est, viverra eu interdum.";
			sliderLink.setAttribute("href", "https://vk.com"); 
			break;
	}
}
let modal_open_button = document.querySelector('#modal-open-button');
let modal_close_button = document.querySelector('#modal-close-button');
let modal_menu = document.querySelector('#modal-menu');

let menu_categories_man_header = document.querySelector('#menu-categories-man-header');
let menu_categories_woman_header = document.querySelector('#menu-categories-woman-header');


modal_open_button.addEventListener('click', function(){
	modal_menu.classList.add('modal-menu_active');
});

modal_close_button.addEventListener('click', function(){
	modal_menu.classList.remove('modal-menu_active');
});
function sliderLeft(){
	slideCounter--;
	slideCounter = (slideCounter == 0) ? 3 : slideCounter;
	header.style.backgroundImage ="url(img/golden-gate-" +slideCounter+".jpg)";
	changeSliderContext(slideCounter);
}
function sliderRight(){
	slideCounter++;
	slideCounter = (slideCounter == 4) ? 1 : slideCounter;
	header.style.backgroundImage ="url(img/golden-gate-" +slideCounter+".jpg)";
	changeSliderContext(slideCounter);
}