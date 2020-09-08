const NUMERO_FOTO = 7;
const RITARDO = 2700;
const LINK_CATALOGO = "index catalogo 01.html";
var galleria = [];
var indiceFoto = 0;
var automatico = true;
var nodoAvanti;
var nodoIndietro;
var nodoFoto;
var nodoLinkFoto;

function gestoreLoad () {
	try{
		gestoreIcone ();
		nodoIcona_home = document.getElementById("Icona_home");
        nodoIcona_home.onclick = gestoreIcona_home;
        //***************************************************************************************************** */
		nodoAvanti = document.getElementById("avanti");
		nodoIndietro = document.getElementById("indietro");
		nodoFoto = document.getElementById("foto");
		nodoLinkFoto = document.getElementById("link_foto");
		nodoAvanti.onclick = gestoreClickAvanti; //gestoreClick (nodoAvanti.value);
		nodoIndietro.onclick = gestoreClickIndietro;
		nodoLinkFoto.onclick = function () {nodoLinkFoto.setAttribute("href", LINK_CATALOGO)} ;

		// popola galleria con i nomi delle mie foto nella cartella
		for (var i = 0; i < NUMERO_FOTO; i++) {
			var nomeFoto = "img/slides/foto" +i + ".jpg";
			galleria.push(nomeFoto);
			}
		cambiaFoto(-1);
		cambiaFotoInAutomatico();
		gestoreColoreMenu();
		} catch (e) {
			alert("gestoreLoad " + e);
			}
	}
window.onload = gestoreLoad;

//********	CODICE DI ALLST.JS**************************************rivedere se cambio altre cose dopo***************************************************************** */

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

    for (var i = 0; i < links.length; i++){
        if (res[res.length-1] == links[i].getAttribute("href")){
            links[i].style.backgroundColor = "#994d00";
        }
    } 

}

function gestoreIcone () {
	try{
        var links = document.getElementsByTagName("link");
        
        if (links.length != 0) {
            for (var i=0; i< links.length; i++){
                if (document.getElementsByTagName("link")[i].getAttribute("rel") == "icon"){
                   // j.push(document.getElementsByTagName("link")[i])
                   document.getElementsByTagName("link")[i].setAttribute("href", "img/logo.png");
                }
            }
        }

        var logoh = document.getElementById("logo").setAttribute("src", "img/logo.png")
        gestoreFooter();

		} catch (e) {
			alert("gestoreLoad " + e);
			}
	}

    function gestoreFooter(){
        var info = document.getElementById("info");
        var p = document.createElement("p");

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
//***************************************************************************************************************** */

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