// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

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
function calcolaDollariRicevuti (importoEuro, tassoDiCambio, commissione){
  if (importoEuro  <= commissione) return 0;
  return (importoEuro - commissione) * tassoDiCambio;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

