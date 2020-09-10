/*
La gestione della galleria è stata copiata dalle dispense del corso "Programmazione in JavaScript" fatte dal Prof. 
Vincenzo Ambriola ( http://pages.di.unipi.it/ambriola/PW/radice.htm ) 
e modificata a seconda delle esigenze.
Su quella parte copiata si basa il gestoreLoad e lo stile delle altre funzioni usate nel sito
*/

const NUMERO_FOTO = 7;
const RITARDO = 2700;
const LINK_CATALOGO = "catalogo.html";
const LOGO_ICON = "img/logo.png";
var galleria = [];
var indiceFoto = 0;
var automatico = true;
var nodoAvanti;
var nodoIndietro;
var nodoFoto;
var nodoLinkFoto;

function gestoreLoad() {
	try {
		nodoIcona_home = document.getElementById("Icona_home");   /* "Icona Home" --> sto usando uno schermo piccolo */
		nodoIcona_home.onclick = gestoreIcona_home;
		//************************************** serve a gestire la galleria *************************************************** */
		nodoAvanti = document.getElementById("avanti");
		nodoIndietro = document.getElementById("indietro");
		nodoFoto = document.getElementById("foto");
		nodoLinkFoto = document.getElementById("link_foto");
		nodoAvanti.onclick = gestoreClickAvanti;
		nodoIndietro.onclick = gestoreClickIndietro;
		nodoLinkFoto.onclick = function () { nodoLinkFoto.setAttribute("href", LINK_CATALOGO) };

		// popola galleria con i nomi delle mie foto nella cartella
		for (var i = 0; i < NUMERO_FOTO; i++) {
			var nomeFoto = "img/slides/foto" + i + ".jpg";
			galleria.push(nomeFoto);
		}

		gestoreIcone();
		cambiaFoto(-1);
		cambiaFotoInAutomatico();
		gestoreColoreMenu();

	} catch (e) {
		alert("gestoreLoad " + e);
	}
}

window.onload = gestoreLoad;

//*********************************************** Inizio codice di allst.js ****************************************************** */

function gestoreIcona_home() {

	var controllo = "";

	var anchor = document.getElementById("menu").getElementsByTagName("a");

	if (anchor[0].style.display == "block") {
		controllo = "none";
	} else {
		controllo = "block";
	}

	for (var i = 0; i < anchor.length; i++) {
		anchor[i].style.display = controllo;
	}

}

function gestoreColoreMenu() {

	var href_corrente = window.location.href;

	var res = href_corrente.split("/");

	menu = document.getElementById("links_menu");

	links = menu.getElementsByTagName("a");

	for (var i = 0; i < links.length; i++) {
		if (res[res.length - 1] == links[i].getAttribute("href")) {
			links[i].style.backgroundColor = "#994d00";
		}
	}

}

function gestoreIcone() {
	var links = document.getElementsByTagName("link");

	if (links.length != 0) {
		for (var i = 0; i < links.length; i++) {
			if (document.getElementsByTagName("link")[i].getAttribute("rel") == "icon") {
				// j.push(document.getElementsByTagName("link")[i])
				document.getElementsByTagName("link")[i].setAttribute("href", LOGO_ICON);
			}
		}
	}

	var logoh = document.getElementById("logo").setAttribute("src", LOGO_ICON)
	gestoreFooter();

}

function gestoreFooter() {
	var info = document.getElementById("info");

	var indirizzo = "Via Filippo Buonarroti 1, Pisa";
	var tel = " +39 388 436 00924";
	var mail_pasticceria = "maniinpasta@gmail.com";

	var autore = "Jurgen Memaj";
	var mail_autore = "j.memaj@studenti.unipi.it";
	var matricola = "533203";

	info.innerHTML =

		"<p>" + indirizzo + "<br />" + tel + "<br />" + "email: " + "<a href=mailto:" + mail_pasticceria + ">" + mail_pasticceria + "</a><br /></p>" +
		"<p>" + autore + "<br />" + "matricola: " + matricola + "<br />" + "email: " + "<a href=mailto:" + mail_autore + ">" + mail_autore + "</a><br /></p>";
}

//***************************************************** Fine codice di allst.js ************************************************************ */

// vengono gestiti i click sulle frecce del gestore immagini sulla home

function gestoreClickAvanti() {
	try {
		cambiaFoto(+1);

	} catch (e) {
		alert("gestoreClickAvanti " + e);
	}
}

function gestoreClickIndietro() {
	try {
		cambiaFoto(-1);

	} catch (e) {
		alert("gestoreClickIndietro " + e);
	}
}

function cambiaFoto(x) {
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

function cambiaFotoInAutomatico() {
	if (automatico) {
		cambiaFoto(+1);
		setTimeout(cambiaFotoInAutomatico, RITARDO);
	}
}