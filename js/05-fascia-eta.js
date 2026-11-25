// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaFasciaEta
  Di quali dati ha bisogno? età
  Deve restituire qualcosa? la fascia d'età
  Di che tipo? stringa

  STEPS
  1 -
  2 -
  3 -
*/

// # La funzione
let eta = 28

function trovaFasciaEta(eta){
  if( eta < 0){
    return 'Età non valida'
  } else if (eta < 18){
    return 'Minorenne'
  } else if (eta <= 35 ){
    return 'Giovane Adulto'
  } else if(eta <= 60){
    return 'Adulto'
  } else{
    return 'Senior'
  }
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaFasciaEta(eta));