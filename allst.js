const LOGO_ICON = "foto/logo.png";
const LOGO_HEADER = "foto/logo.png";

var nodoLogo_icon;
var nodoLogo_header;

function gestoreIcone () {
	try{
//***************************************************************************************************** */
        var links = document.getElementsByTagName("link");
        
        if (links.length != 0) {
            for (var i=0; i< links.length; i++){
                if (document.getElementsByTagName("link")[i].getAttribute("rel") == "icon"){
                   // j.push(document.getElementsByTagName("link")[i])
                   document.getElementsByTagName("link")[i].setAttribute("href", "foto/logo.png");
                }
            }
        }

        var logoh = document.getElementById("logo").setAttribute("src", "foto/logo.png")
//***************************************************************************************************** */
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

    window.onload = gestoreIcone;


