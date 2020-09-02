const LARGHEZZZA_FOTO = 1080;
var nodoTuttomondo; // nodomappa
var nodoMessaggio;
var nodiArea;
var coordinateAree;
var dimensioneFoto;
function gestoreLoad () {
 try {
 nodiArea = document.getElementsByTagName("area");
 nodoTuttomondo = document.getElementById("mappa");
 nodoMessaggio = document.getElementById("messaggio");
 coordinateAree = [];
 for (var i = 0; i < nodiArea.length; i++){
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
 
 } catch ( e ) {
 alert("gestoreLoad " + e);
 }
}
window.onload = gestoreLoad;

function gestoreClickArea () {
 try {
 scriviMessaggio(nodoMessaggio, simboliNascosti[this.id]);
 } catch ( e ) {
 alert("gestoreClickArea " + e);
 }
}

var simboliNascosti = [
	"Polo Fibonacci ",
];

function scriviMessaggio (nodo, messaggio) {
	var nodoTesto = document.createTextNode(messaggio);
	nodo.replaceChild(nodoTesto, nodo.firstChild);
}

function gestoreResize () {
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
 } catch ( e ) {
 alert("gestoreResize " + e);
 }
}
function gestoreCursore () {
 try {
 this.style.cursor = "pointer";
 } catch ( e ) {
 alert("gestoreCursore " + e);
 }
}