var fvar, dvar, tvar = 3; //Création de plusieur variable
fvar = dvar = 250; //Attribution valeur 250 aux deux variables
var text = "On m'a dit: \"Il est aussi beau qu'un poisson\""; //Indication d'un texte
alert(typeof tvar); //Indique le type de variable qu'il contient en locurence : un nombre


var number1 = 7, number2 = 3,
result, result2, result3, result4;  // sauter une ligne conserve la continuité
number1 -= 5 //rajoute -5 au nombre
result = number1 + number2;
result2 = number1 / number2; //Résultat de la division: 0.3333=2/3
result3 = number1 % number2; //Reste de la division: 2
result4 = number1 + "" + number2; //Les nombres s'assemblent : 23
alert(result); //affiche 5


var you = "Salut, ", me = " mon bro!", name = prompt("dis-moi ton prénom");
you = you + name + me;
you += " PTDR";
alert(you); //affiche "Salut (prénom indiquer par l'utilisateur), mon bro! PTDR"


var txt = "2546", nombre;
nombre = parseInt(txt);
alert(typeof nombre); //le mot "2546" est devenu le nombre 2546
