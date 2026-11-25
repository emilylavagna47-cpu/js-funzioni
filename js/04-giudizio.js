// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaGiudizio
  Di quali dati ha bisogno? voti e media
  Deve restituire qualcosa? giudizio scritto
  Di che tipo? stringa

  STEPS
  1 -
  2 -
  3 -
*/

// # La funzione

let media = 5.5

function calcolaMediaPonderata(votoScritto, votoOrale){
return ((votoScritto*2) + votoOrale)/3;
}


function trovaGiudizio(media){
  if(media < 1 || media > 10){
    return 'Voto non valido'
  } else if(media < 5){
    return 'Gravemente insufficiente'
  }else if (media < 6){
    return 'Insufficiente'
  }else if(media < 7){
    return 'Sufficiente'
  } else if (media < 8 ){
    return 'Buono'
  } else {
    return 'Ottimo'
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaGiudizio(calcolaMediaPonderata(6,9)));