const NUMERO_FOTO = 4;
const RITARDO = 2000;
var galleria;
var indiceFoto;
var automatico;
var start;
var nodoAvanti;
var nodoIndietro;
var nodoStartStop;
var nodoFoto;

function gestoreLoad () {
	try{
		nodoAvanti = document.getElementById("avanti");
		nodoIndietro = document.getElementById("indietro");
		nodoFoto = document.getElementById("foto");
		nodoAvanti.onclick = gestoreClickAvanti;
		nodoIndietro.onclick = gestoreClickIndietro;
		automatico = false;
		start = true;
		galleria = [];
		for (var i = 0; i < NUMERO_FOTO; i++) {
			var numeroFoto = "foto/foto" +i + ".jpg";
			galleria.push(numeroFoto);
			}
		indiceFoto = 0;
		cambiaFoto(0);
		cambiaFotoInAutomatico();
		} catch (e) {
			alert("gestoreLoad " + e);
			}
	}
window.onload = gestoreLoad;

// vengono gestiti i click sulle frecce del gestore immagini sulla home 
function gestoreClickAvanti () {
	try{
		if (automatico) {
			return;
			}
		cambiaFoto(+1);
		} catch (e) {
			alert("gestoreClickAvanti " + e);
			}
	}

function gestoreClickIndietro () {
	try {
		if (automatico) {
			return;
			}
		cambiaFoto(-1);
		} catch (e) {
			alert("gestoreClickIndietro " + e);
			}
	}
	
function cambiaFoto (x) {
	try {
		indiceFoto += x;
		if (indiceFoto == NUMERO_FOTO) {
			indiceFoto = 0;
			}
		if (indiceFoto < 0) {
			indiceFoto = NUMERO_FOTO - 1;
			}
		nodoFoto.setAttribute("src", galleria[indiceFoto]);
		} catch (e) {
			alert("cambiaFoto " + e);
			}
	}

function cambiaFotoInAutomatico () {
	if (start) {
		cambiaFoto(+1);
		setTimeout(cambiaFotoInAutomatico, RITARDO);
		}
	}