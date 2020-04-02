var number = 3, number1 = "3", number2 = 5, result, result1, result2;
result = number == number1;
result1 = number != number2;
result2 = number === number1 //Affichera "False" car pas même type de variable
alert(result); //Affiche "TRUE" car ils sont égaux
alert(result1); //Affiche "TRUE" car ils sont bel est bien différent


var num = prompt("donne un nombre"), num2 = prompt("Un autre"),
num3 = prompt("encore un"), resu, resu2, resu3 = 8 > 3, resu4;
resu = num == num2 || num <= num3; // True si num = num2 _OU_ num <= num3
resu2 = num == num3 && num >= num3; // True si num = num3 _ET_ que num >= num3
resu3 = !resu3; // Devient l'inverse de resu3 donc False car resu3 est True
resu4 = resu && resu2; // True si resu et resu2 sont vraies



var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;

    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
    break;

    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
    break;

    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
    break;

    default:
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, 
        jusqu\'à preuve du contraire, les tiroirs négatifs n\'existent pas.");


var indvAge = parseInt(promt("Quelle est votre âge ?"))
if (  1 <= indvAge && indvAge <= 17) {
  alert("Vous n'êtes pas encore majeur.")
}

else if (  18 <= indvAge && indvAge <= 49) {
  alert("Vous êtes majeur.")
}

else if (  50 <= indvAge && indvAge <= 59) {
  alert("Vous êtes majeur et vous avez bien vécu.")
}

else if (  60 <= indvAge && indvAge <= 120) {
  alert("Vous êtes majeur, profiter de votre famille !")
}

  else {
  alert("Qu'est-ce donc !")
}

