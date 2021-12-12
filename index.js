let choixJoueur;
let ordiChoix = [];
let random = Math.floor(Math.random() * 3);
const btnPierre = document.getElementById("pierre");
const btnFeuille = document.getElementById("feuille");
const btnCiseaux = document.getElementById("ciseaux");
const resultat = document.getElementById("resultat");

ordiChoix = ["pierre", "feuille", "ciseaux"];

function combat(j, o) {
  if (j === 'pierre' &&  o === "ciseaux" || j ==="feuille" && o ==="pierre" || j ==="ciseaux" && o ==="feuille") {
    resultat.innerHTML = ` Joueur : ${choixJoueur} <br> IA : ${ordiChoix} <br> Vous avez gagné`;
  } else if (j === 'pierre' &&  o === "feuille" || j ==="feuille" && o ==="ciseaux" || j ==="ciseaux" && o ==="pierre") {
      resultat.innerHTML = ` Joueur : ${choixJoueur} <br> IA : ${ordiChoix} <br> Vous avez Perdu`;
} else {
      resultat.innerHTML = ` Joueur : ${choixJoueur} <br> IA : ${ordiChoix} <br> Égalité`;
  }
}
// Bouton pierre
btnPierre.addEventListener("click", function () {
  choixJoueur = "pierre";
  ordiChoix = ordiChoix[random];
  combat(choixJoueur, ordiChoix);
});
// Bouton feuille
btnFeuille.addEventListener("click", function () {
    choixJoueur = "feuille";
    ordiChoix = ordiChoix[random];
    combat(choixJoueur, ordiChoix);
  });
// Bouton pierre
btnCiseaux.addEventListener("click", function () {
    choixJoueur = "ciseaux";
    ordiChoix = ordiChoix[random];
    combat(choixJoueur, ordiChoix);
  });
    