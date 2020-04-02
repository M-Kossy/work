for (var i = 0, nicks = '', nick; true; i++) {
    nick = prompt('Entrez un prénom :');

    if (nick) {
        nicks += nick + ' ';
    } else {
        break;
    }
}

alert('Il y a ' + i + ' prénoms :\n\n' + nicks); //  \n = saut d'une ligne
// affiche le nombre de prénom qu'il y a et les prénoms qui ont été donné


var name = "", noms;
while (true) {
  noms = prompt("Donne les noms!");

  if (noms) {
    name += noms + " ";
  } else {
    break;
  }

}
