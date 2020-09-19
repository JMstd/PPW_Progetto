/*
La funzione che gestisce la mappa ("Immagine interattiva scalabile") 
è stata copiata dalle dispense del corso "Programmazione in JavaScript" fatte dal Prof. 
Vincenzo Ambriola ( http://pages.di.unipi.it/ambriola/PW/radice.htm ) 
e modificata a seconda delle esigenze.
*/

const LOGO_ICON = "img/logo.png";
var nodoIcona_home;
var nodoLinksMenu;
var nodoLinks;
//****************************** fine parte relativa ad allst.js *********************** */
const LARGHEZZZA_FOTO = 1080;
var nodoMappa;
var nodoMessaggio;
var nodiArea;
var coordinateAree;
var dimensioneFoto;
var simboliNascosti = [
    "Polo Fibonacci ",
];

function gestoreLoad() {
    try {
        nodoIcona_home = document.getElementById("Icona_home");   /* "Icona Home" --> sto usando uno schermo piccolo */
        nodoIcona_home.onclick = gestoreIcona_home;
        nodoLinksMenu = document.getElementById("links_menu").getElementsByTagName("a");
        nodoLinks = document.getElementsByTagName("link");
        /* inizio gestoreMappa */
        nodiArea = document.getElementsByTagName("area");
        nodoMappa = document.getElementById("mappa");
        nodoMessaggio = document.getElementById("messaggio");
        /* fine gestoreMappa */

        //****************************************** inizio gestione icona logo *************************************************** */
        var links = nodoLinks;

        if (links.length != 0) {
            for (var i = 0; i < links.length; i++) {
                if (document.getElementsByTagName("link")[i].getAttribute("rel") == "icon") {
                    document.getElementsByTagName("link")[i].setAttribute("href", LOGO_ICON);
                }
            }
        }

        document.getElementById("logo").setAttribute("src", LOGO_ICON);
        //****************************************** fine gestione icona logo ***************************************************** */
        gestoreColoreMenu();
        //******************************************* fine parte relativa a allst.js********** */
        gestoreMappa();

    } catch (e) {
        alert("gestoreLoad " + e);
    }
}

window.onload = gestoreLoad;

function gestoreIcona_home() {
    try {

        var controllo = "";

        var links = nodoLinksMenu;

        if (links[0].style.display == "block") {
            controllo = "none";
        } else {
            controllo = "block";
        }

        for (var i = 0; i < links.length; i++) {
            links[i].style.display = controllo;
        }

    } catch (e) {
        alert("gestoreLoad " + e);
    }

}

function gestoreColoreMenu() {
    try {

        var href_corrente = window.location.href;

        var res = href_corrente.split("/");

        var links = nodoLinksMenu;

        for (var i = 0; i < links.length; i++) {
            if (res[res.length - 1] == links[i].getAttribute("href")) {
                links[i].style.backgroundColor = "#994d00";
            }
        }

    } catch (e) {
        alert("gestoreLoad " + e);
    }

}

/* inizio gestoreMappa */

function gestoreMappa() {
    try {

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

function scriviMessaggio(nodo, messaggio) {
    var nodoTesto = document.createTextNode(messaggio);
    nodo.replaceChild(nodoTesto, nodo.firstChild);
}

function gestoreResize() {
    try {
        var attualeDimensioneFoto = nodoMappa.width;
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
        /* fine gestoreMappa */
