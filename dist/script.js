"use strict";
// const test: string = "Hello World";
// console.log(test);
const Ilet1 = document.getElementById("ilet_1");
const Ilet2 = document.getElementById("ilet_2");
const Ilet3 = document.getElementById("ilet_3");
const Ilet4 = document.getElementById("ilet_4");
const Ilet5 = document.getElementById("ilet_5");
const Ilet6 = document.getElementById("ilet_6");
// ___ écouteur d'évenemt => si User click s/ un ilet alors fait ça... 
// if (Ilet1) {
//     Ilet1.addEventListener("click", function () {
//     console.log("ilet1 cliqué");
//     })
// }
// if (Ilet2) {
//     Ilet2.addEventListener("click", function () {
//     console.log("ilet2 cliqué");
//     })
// }
// if (Ilet3) {
//     Ilet3.addEventListener("click", function () {
//     console.log("ilet3 cliqué");
//     })
// }
// if (Ilet4) {
//     Ilet4.addEventListener("click", function () {
//     console.log("ilet4 cliqué");
//     })
// }
// if (Ilet5) {
//     Ilet5.addEventListener("click", function () {
//     console.log("ilet5 cliqué");
//     })
// }
// if (Ilet6) {
//     Ilet6.addEventListener("click", function () {
//     console.log("ilet6 cliqué");
//     })
// }
const ilets = [];
if (Ilet1 && Ilet2 && Ilet3 && Ilet4 && Ilet5 && Ilet6) { //on verifie q tous les ilets existent ds le DOM avt de les ajouter ds tableau
    ilets.push(Ilet1, Ilet2, Ilet3, Ilet4, Ilet5, Ilet6); //.push va les ajouter au fur à mesure à la fin du tableau ds l'ordre de saisie
}
//variante plus "souple" même si un élément manquant selon GPT: 
//const ilets: HTMLElement[] = [];
// if (Ilet1) ilets.push(Ilet1);
// if (Ilet2) ilets.push(Ilet2);
// if (Ilet3) ilets.push(Ilet3);
// if (Ilet4) ilets.push(Ilet4);
// if (Ilet5) ilets.push(Ilet5);
// if (Ilet6) ilets.push(Ilet6);
//___
// const ilets: = [Ilet1, Ilet2, Ilet3]; /* tableau pour les images aléatoires coco */
//___ score ____
//création d'un boite/variable 
let score = 0; /* le score start à 0*/
/* mettre les images Ilets (sable) en dispay none */
function resetIlets() {
    ilets.forEach(ilet => {
        ilet.style.backgroundImage = "url('./picture/ilesable_pix_GPT.png')"; // ou remet l'image de base si tu veux
        // @ts-ignore
        if (ilet._handler) {
            // @ts-ignore
            ilet.removeEventListener("click", ilet._handler);
            // @ts-ignore
            delete ilet._handler;
        }
    });
}
/* pour faire apparaître une noix de coco aléatoirement */
function coconutaleatoire() {
    /* !!!!!! ilet disparait ds toutes les cases !!  */
    resetIlets(); // on enlève l'img coco et remets img sable => appelle la focntion du dessus "display none"
    const randomIndex = Math.floor(Math.random() * ilets.length);
    const iletChoisi = ilets[randomIndex];
    // iletChoisi.style.backgroundImage = 'url("./picture/ilet_sable_coco.png")';
    if (iletChoisi) {
        iletChoisi.style.backgroundImage = 'url("./picture/coco_pix.png")';
        iletChoisi.style.backgroundSize = "cover";
        iletChoisi.style.backgroundPosition = "center";
        const gestionnaire = () => auClickSurCoconut(iletChoisi);
        // @ts-ignore : on ignore l'erreur TS sur propriété custom
        iletChoisi._handler = gestionnaire;
        iletChoisi.addEventListener("click", gestionnaire);
    }
    // iletChoisi.style.backgroundImage = 'url("./picture/coco_pix.png")';
    // iletChoisi.style.backgroundSize = "cover";
    // iletChoisi.style.backgroundPosition = "center";
}
function scoreIncrement() {
    ++score; /* Opérateur : x++ (incrémentera la valeur et renverra la valeur avant l'incrément) ou ++x ( l'operateur incrémentera la valeur et renverra la valeur après l'incrément) */
    /* je rattache mon id (html) avec le TS => DOM
     */
    const affichScore = document.getElementById("scorenbr");
    if (affichScore) {
        affichScore.textContent = score.toString();
        /* textContent pr afficher le score dans la page */
        /* score.toString() convertir le nbr en texte, car textContent attend une chaîne de caractères. */
    }
}
function auClickSurCoconut(iletChoisi) {
    iletChoisi.style.backgroundImage = 'url("./picture/ilecoco_pix_GPT.png")';
    console.log("cocoNut");
    scoreIncrement();
}
// Répéter toutes les 3 secondes
setInterval(coconutaleatoire, 3000);
//probleme :
//il comprend quil faut mettre un tree à partir du moment où je click s/ case ds laquelle un cocoN est déjà apparu au moins un fois
// si click sur cocoN => + 1 à +5 
// si click sur sabl => +
//question :
// Score => le nbr qui apparait ds ma console 
