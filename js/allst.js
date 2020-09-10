const LOGO_ICON = "img/logo.png";
var nodoIcona_home;

function gestoreIcone() {
    try {
        nodoIcona_home = document.getElementById("Icona_home");   /* "Icona Home" --> sto usando uno schermo piccolo */
        nodoIcona_home.onclick = gestoreIcona_home;

        //****************************************** inizio gestione icona logo *************************************************** */
        var links = document.getElementsByTagName("link");

        if (links.length != 0) {
            for (var i = 0; i < links.length; i++) {
                if (document.getElementsByTagName("link")[i].getAttribute("rel") == "icon") {
                    document.getElementsByTagName("link")[i].setAttribute("href", LOGO_ICON);
                }
            }
        }

        var logoh = document.getElementById("logo").setAttribute("src", "img/logo.png");

        //****************************************** fine gestione icona logo ***************************************************** */
        gestoreFooter();
        gestoreColoreMenu();

    } catch (e) {
        alert("gestoreLoad " + e);
    }
}

function gestoreFooter() {
    try {
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

    } catch (e) {
        alert("gestoreLoad " + e);
    }

}

function gestoreIcona_home() {
    try {

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

    } catch (e) {
        alert("gestoreLoad " + e);
    }

}

function gestoreColoreMenu() {
    try {

        var href_corrente = window.location.href;

        var res = href_corrente.split("/");

        menu = document.getElementById("links_menu");

        links = menu.getElementsByTagName("a");

        for (var i = 0; i < links.length; i++) {
            if (res[res.length - 1] == links[i].getAttribute("href")) {
                links[i].style.backgroundColor = "#994d00";
            }
        }

    } catch (e) {
        alert("gestoreLoad " + e);
    }

}

window.onload = gestoreIcone;
