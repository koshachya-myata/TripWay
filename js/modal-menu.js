let modal_open_button = document.querySelector('#modal-open-button');
let modal_close_button = document.querySelector('#modal-close-button');
let modal_menu = document.querySelector('#modal-menu');
let body = document.querySelector('#body');
window.onresize = function(e){
	 modalMenuOff();
}

modal_open_button.addEventListener('click', function(){
	modal_menu.classList.add('modal-menu_active');
	body.classList.add('stop-scroll');
});

modal_close_button.addEventListener('click', function(){
	 modalMenuOff();
});

function modalMenuOff(){
	modal_menu.classList.remove('modal-menu_active');
	body.classList.remove('stop-scroll');
}

	$(document).mouseup(function (e){
		let menu = $("#modal-menu-content"); 
		if (!menu.is(e.target) && menu.has(e.target).length === 0) { 
			modalMenuOff(); 
		console.log('click')
		}
	});