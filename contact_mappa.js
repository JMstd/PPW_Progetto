const LOGO_ICON = "foto/logo.png";
const LOGO_HEADER = "foto/logo.png";

var nodoLogo_icon;
var nodoLogo_header;
var nodoIcona_home;

//******************************************* fine parte relativa a allst.js********** */
const LARGHEZZZA_FOTO = 1080;
var nodoTuttomondo; // nodomappa
var nodoMessaggio;
var nodiArea;
var coordinateAree;
var dimensioneFoto;

function gestoreLoad() {
    try {
        nodoIcona_home = document.getElementById("Icona_home");
        nodoIcona_home.onclick = gestoreIcona_home;
        //***************************************************************************************************** */
        var links = document.getElementsByTagName("link");

        if (links.length != 0) {
            for (var i = 0; i < links.length; i++) {
                if (document.getElementsByTagName("link")[i].getAttribute("rel") == "icon") {
                    // j.push(document.getElementsByTagName("link")[i])
                    document.getElementsByTagName("link")[i].setAttribute("href", "foto/logo.png");
                }
            }
        }

        var logoh = document.getElementById("logo").setAttribute("src", "foto/logo.png")
        //***************************************************************************************************** */
        gestoreFooter();
//******************************************* fine parte relativa a allst.js********** */
		gestoreMappa();

    } catch (e) {
        alert("gestoreLoad " + e);
    }
}

window.onload = gestoreLoad;

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

function gestoreFooter() {
    try {
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
    } catch (e) {
        alert("gestoreLoad " + e);
    }
}

function gestoreMappa() {
	try {
		nodiArea = document.getElementsByTagName("area");
		nodoTuttomondo = document.getElementById("mappa");
		nodoMessaggio = document.getElementById("messaggio");
		coordinateAree = [];
		for (var i = 0; i < nodiArea.length; i++) {
			var nodoArea = nodiArea[i];
			nodoArea.onclick = gestoreClickArea;
			nodoArea.onmouseover = gestoreCursore;
			coordinateAree[i] = nodoArea.coords.split(',');
		}
		dimensioneFoto = LARGHEZZZA_FOTO;
		var nodoTesto = document.createTextNode("");
		nodoMessaggio.appendChild(nodoTesto);
		window.onresize = gestoreResize;
		gestoreResize();

	} catch (e) {
		alert("gestoreLoad " + e);
	}
}

function gestoreClickArea() {
	try {
		scriviMessaggio(nodoMessaggio, simboliNascosti[this.id]);
	} catch (e) {
		alert("gestoreClickArea " + e);
	}
}

var simboliNascosti = [
	"Polo Fibonacci ",
];

function scriviMessaggio(nodo, messaggio) {
	var nodoTesto = document.createTextNode(messaggio);
	nodo.replaceChild(nodoTesto, nodo.firstChild);
}

function gestoreResize() {
	try {
		var attualeDimensioneFoto = nodoTuttomondo.width;
		var ratio = attualeDimensioneFoto / dimensioneFoto;
		for (var i = 0; i < nodiArea.length; i++) {
			for (var j = 0; j < coordinateAree[i].length; j++) {
				coordinateAree[i][j] *= ratio;
			}
			nodiArea[i].coords = coordinateAree[i].join(',');
		}
		dimensioneFoto = attualeDimensioneFoto;
	} catch (e) {
		alert("gestoreResize " + e);
	}
}
function gestoreCursore() {
	try {
		this.style.cursor = "pointer";
	} catch (e) {
		alert("gestoreCursore " + e);
	}
}