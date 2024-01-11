const IMG_SRC = "https://cdn0.iconfinder.com/data/icons/software-16/20/mouse_click-512.png"
const BORDER = 70;
let statistic = [];
let misses = 0;
window.onload = () => {
	let body = document.getElementById('playzone');
	
	timer = document.getElementById('timer')
	
	cntr = document.createElement('p')
	cntr.style.position = 'absolute'
	cntr.innerHTML = '-1';
	cntr.zIndex = '4';
	body.appendChild(cntr)

	img = document.createElement('img')
	img.width = '30';
	img.zIndex = '4';
	img.onclick = randomize;
	img.style.position = 'absolute'
	img.src = IMG_SRC;
	body.appendChild(img)
	
	randomize()
	
}
function second_pass(){
	let time = parseInt(timer.innerHTML)
	if(time < 1){
		end();
		timer.innerHTML = 60
		return;
	}
	timer.innerHTML = time-1
	setTimeout(second_pass, 1000)
}
function end(){
	menu = document.getElementById('menu')
	menu.style.visibility = 'visible';
	stats = document.createElement('p')
	d = new Date()
	//statistic.push()
	stats.style.color = 'white';
	stats.innerHTML = d.getDate()+"/"+d.getMonth()+"/"+d.getYear()+" --- "+cntr.innerHTML+" влучань --- "+misses+" промахів --- швидкість кликань "+((cntr.innerHTML*1 - misses) / 60)+"/сек";
	document.getElementById('menu').appendChild(stats)
}
function start(){
	document.getElementById('menu').style.visibility = 'hidden';
	setTimeout(second_pass, 1000)
}
function rand(min, max){
	let r = min + Math.random() * (max + 1 - min);
	return Math.floor(r);
}
function randomize(){
	let x = rand(BORDER, document.body.clientWidth - BORDER)
	let y = rand(BORDER, document.body.clientHeight - BORDER)

	img.style.left = x
	img.style.top = y
	
	cntr.style.left = x+10
	cntr.style.top = y+10
	
	cntr.innerHTML = (cntr.innerHTML*1)+1
}