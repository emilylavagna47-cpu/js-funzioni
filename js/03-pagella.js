// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  Di quali dati ha bisogno?
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 - 
  2 -
  3 -
*/

// # La funzione
let votoScritto = 8
let votoOrale = 6

function calcolaMediaPonderata(votoScritto, votoOrale){
return ((votoScritto*2) + votoOrale)/3;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaMediaPonderata(votoScritto,votoOrale));