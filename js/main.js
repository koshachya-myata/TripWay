let prevBg = document.getElementById('prev-bg');
let nextBg = document.getElementById('next-bg');
let header = document.getElementById('header');
let slideCounter = 2
console.log(prevBg);
console.log(nextBg);
console.log(header);
prevBg.onclick = sliderLeft;
nextBg.onclick = sliderRight;

function sliderLeft(){
	slideCounter--;
	slideCounter = (slideCounter == 0) ? 3 : slideCounter;
	header.style.backgroundImage ="url(img/golden-gate-" +slideCounter+".jpg)";
}
function sliderRight(){
	slideCounter++;
	slideCounter = (slideCounter == 4) ? 1 : slideCounter;
	header.style.backgroundImage ="url(img/golden-gate-" +slideCounter+".jpg)";
}