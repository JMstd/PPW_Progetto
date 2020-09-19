const LOGO_ICON = "img/logo.png";
var nodoIcona_home;
var nodoLinksMenu;
var nodoLinks;

function gestoreLoad() {
    try {
        nodoIcona_home = document.getElementById("Icona_home");   /* "Icona Home" --> sto usando uno schermo piccolo */
        nodoIcona_home.onclick = gestoreIcona_home;
        nodoLinksMenu = document.getElementById("links_menu").getElementsByTagName("a");

        //****************************************** inizio gestione icona logo *************************************************** */
        nodoLinks = document.getElementsByTagName("link");

        if (nodoLinks.length != 0) {
            for (var i = 0; i < nodoLinks.length; i++) {
                if (document.getElementsByTagName("link")[i].getAttribute("rel") == "icon") {
                    document.getElementsByTagName("link")[i].setAttribute("href", LOGO_ICON);
                }
            }
        }

        document.getElementById("logo").setAttribute("src", LOGO_ICON);

        //****************************************** fine gestione icona logo ***************************************************** */
        gestoreColoreMenu();

    } catch (e) {
        alert("gestoreLoad " + e);
    }
}

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

window.onload = gestoreLoad;
