const NUMERO_FOTO = 4;
const RITARDO = 2000;
var galleria = [];
var indiceFoto = 0;
var automatico = true;
var nodoAvanti;
var nodoIndietro;
var nodoFoto;

function gestoreLoad () {
	try{
		nodoAvanti = document.getElementById("avanti");
		nodoIndietro = document.getElementById("indietro");
		nodoFoto = document.getElementById("foto");
		nodoAvanti.onclick = gestoreClickAvanti; //gestoreClick (nodoAvanti.value);
		nodoIndietro.onclick = gestoreClickIndietro;
		// popola galleria con i nomi delle mie foto nella cartella
		for (var i = 0; i < NUMERO_FOTO; i++) {
			var nomeFoto = "foto/foto" +i + ".jpg";
			galleria.push(nomeFoto);
			}
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
		cambiaFoto(+1);
		} catch (e) {
			alert("gestoreClickAvanti " + e);
			}
	}

function gestoreClickIndietro () {
	try {
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
	if (automatico) {
		cambiaFoto(+1);
		setTimeout(cambiaFotoInAutomatico, RITARDO);
		}
	}