const dataNamoro = new Date('2024-09-02T21:39:00');
const diasElemento = document.getElementById('dias');
const horasElemento = document.getElementById('horas');
const minutosElemento = document.getElementById('minutos');
const segundosElemento = document.getElementById('segundos');

function atualizarContador() {
	const dataAtual = new Date();
	const diferenca = dataAtual.getTime() - dataNamoro.getTime();
	const segundos = Math.floor(diferenca / 1000);
	const minutos = Math.floor(segundos / 60);
	const horas = Math.floor(minutos / 60);
	const dias = Math.floor(horas / 24);

	diasElemento.innerText = dias;
	horasElemento.innerText = horas % 24;
	minutosElemento.innerText = minutos % 60;
	segundosElemento.innerText = segundos % 60;
}

atualizarContador();
setInterval(atualizarContador, 1000);

const horas = Math.floor(minutos / 60);
	const dias = Math.floor(horas / 24);

	document.getElementById('dias').innerText = dias;
	document.getElementById('horas').innerText = horas % 24;
	document.getElementById('minutos').innerText = minutos % 60;
	document.getElementById('segundos').innerText = segundos % 60;
	tempoDecorrido += 1000; // incrementa o tempo em 1 segundo


setInterval(calcularTempo, 1000); // atualiza a cada segundo
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 






