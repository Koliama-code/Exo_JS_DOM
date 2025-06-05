// DOM

// les selecteurrs et utilsation de la méthode click

const containe = document.querySelector(".container");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reponse = document.querySelector("h3");

containe.addEventListener("click", () => {
  containe.classList.toggle("box");
});

btn1.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "red";
});
btn2.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "green";
});

// utilisation de mouse Events

const mousemove = document.querySelector(".mousemove");

//focntionnel lors du mouvement de la souris
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  console.log("mouse !!! ");
});

//utilisation lors du cliquer de la souris

window.addEventListener("mousedown", () => {
  mousemove.style.transform =
    "scale(2) translate(-25%,-25%)"; /*on remet translate pour rappeler notre style 
    du départ sinon ca devrait casser notre translate du départ faites en css*/
});

//le contraire de mousedown est mouseup, lorsqu'on relache la souris

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "solid 2px teal";
});

reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(2deg)";
});

/* nous avons aussi mousenter, quand la souris entrer dans un élément, un peu comme hover
 mais celle-ci reste même lorsqu'on quitte l'élément et son contraire c'est mouseout 
 Nous aussi mouseover qui fonctionne lorsqu'on survole un élément */

// Maintenant nous allons voir l'utilisation de l'événement sur les keypress;

const keypresscont = document.querySelector(".keypress");
const key = document.getElementById("key");

//on use avec document parceque c'est considéré comme un html lui-même...

//keypress lorsqu'on clique sur le clavier
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "k") {
    keypresscont.style.backgroundColor = "pink";
  } else {
    keypresscont.style.backgroundColor = "";
  }
});

// maintenant l'événement scroll Events

const nav = document.querySelector("nav");
// pour le scroll on use window
window.addEventListener("scroll", () => {
  // console.log(window.scrollY); la valeur du scroll sur l'axe des y

  // sachant qu'on avait caché notre nav en faisant -50px; voici comment on peu
  // jouer avec lorsqu'on défile la souris

  if (window.scrollY > 30) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// EVENEMENT sur un formulaire

const inputname = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputname.addEventListener("input", (e) => {
  //console.log(e.target.value); permet de prendre c'est qui est tapé dans mon input et e.target permet de
  // voir toute les fonctionnalités possibles que peut avoir un événement
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // bloque le changement de page après avoir valider

  // maintenant Obligéons la le cochage du checkbox
  /*t pour le checkbox, on a pas forcement besoin de déclarer la variable, c'est connu par JS il suffit de respecte la 
  synthaxe en mentionnant #cgv# askip idem pour le button */

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h4>Pseudo: ${pseudo}</h4>
    <h4>Language de programmation: ${language}</h4>
    `;
    /* en ecrivant form > div on selectionne le div qui suit juste le formulaire
    en la différence entre un #textcontent# et  #innerHTML# est que textecontent considère tout 
    les contenus comme un texte tandisqu' avec InnerHTML ca comprend les balises html */
  } else {
    alert("Veillez cocher le CGV");
  }
});

// Autre événement qui peut être important c'est #load# use lors du chargement de la page
window.addEventListener("load", () => {
  // console.log(" Un événement lors du chargement");
});

// autre pour selectionner plusieurs élément à la fois comme les classes, comme foreach (pour chaucun d'eux)

const Mesboxes = document.querySelectorAll(".box");
//console.log(Mesboxes);
Mesboxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    //console.log(e.target);
    e.target.style.transform = "scale(0.7)";
  });
});

// on peut aussi use #onclick# à la place de #addEventlistener# mais addEventListener est plus souhaitable que onclick
/* avec Onclik on peut le use directement dans la balise html
for ex: <div onclick="()=>{}> ou encore appeller directelent une fonction <div onclick="mafonction()"> */

/*
document.body.onclick =function(){
    mes instrucions
};
ou encore
document.body.onclick =()=>{
    mes instrucions;
};
*/
/*Autre blem avec onclick est que si on le use sur plusieurs éléments cela annuler les instructions précédentes*/

// Autre astuce très important qu'on va mentionner sur le privilege d'intruction avec #bublbing# et #usecapture#

// Bullbing
document.body.addEventListener(
  "click",
  () => {
    //première instruction
  },
  false
); // normalement c'est toujours en false

//Usecapture
document.body.addEventListener(
  "click",
  () => {
    //deuxième instruction
  },
  true
); // ici comme on a mis true c'est la deuxième instruction qui est prioritaire, donc c'est l'intruction qui sera éxecuté avant la première

// Autre méthode qu'on pourrait avoir connaissance c'est #e.stopPropagation()#
// Et pour annuler l'événément d'un Eventlistener on use #removeEventListener à la place#

//part BOM

window.open("http://www.google.com", "height=300,width=300"); // for open window of the google
//window.close(); // for close window of the google

//confirm
btn2.addEventListener("click", () => {
  confirm("Etes vous vraiment sûre?");
});

//prompt
btn1.addEventListener("click", () => {
  let reponse1 = prompt("Entrer votre nom !");

  containe.innerHTML += "<h3>Bravo" + reponse1 + "</h3>";
});

//setTimeout
//comment ca fonctionne
//voici sa synthaxe
setTimeout(() => {
  // les instructions;
}, "ici on met le temps avant l'éxecution de notre éxecution en millisecond");

//setInterval
//la syntaxx est idem mais le fonctionne ici est que le code se répète à millisecond//

let Moninterval = setInterval(() => {
  // les instructions;
}, "ici on met le temps avant l'éxecution de notre éxecution en millisecond");

//Et pour l'arrêter on use la méthode clearIntervall(Moninterval)

//location

// console.log("location.href");
// console.log("location.host");
// console.log("location.pathname");
// console.log("location.search");

// //navigator
// console.log("navigator.userAgent");

//history
//console.log(history);
//window.history.back(); retour en arrière de ma page
//history.go(-2); retour en arrière de 2 pages
