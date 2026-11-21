// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

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
function trovaStatoSpedizione(codiceStato){
    if (codiceStato===1){
      return "In elaborazione"
    } 
    else if (codiceStato===2) {
      return "Spedito"
    }
    else if (codiceStato===3) {
      return "Consegnato"
    }
    else{
      return "Stato sconosciuto"
    }
  
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaStatoSpedizione(1));
console.log(trovaStatoSpedizione(2));
console.log(trovaStatoSpedizione(3));
console.log(trovaStatoSpedizione(4));