//COSTO BIGLIETTO TRENO

//INPUT
//Chiedere a utente di unserire chilometri da percorrere e età
const kmtogo = parseInt( prompt( "Inserire km da percorrere" ) );
const ageUser = parseInt( prompt( "Inserire età del passeggero" ) );
console.log("Km da percorrere:", kmtogo, "Età passeggero:", ageUser );

//ELABORAZIONE
//verificare i dati in entrata se sono corretti
if ( Number.isNaN(kmtogo) || Number.isNaN(ageUser) ) {
    alert( "Reinserire i dati,ricaricare la pagina" );
}
//calcolare prezzo totale del biglietto 0.21£*km da percorrere
let priceTiket = kmtogo * (0.21) ;
console.log("prezzo intero:", priceTiket );
//se minori di 18 anni il rezzo totale del biglietto va scontato del 20%
if ( ageUser < 18 ) {
    priceTiket = priceTiket - ( ( priceTiket * 20 ) / 100 );
    priceTiket = priceTiket.toFixed(2);//Trasformare il prezzo del biglietto in forma umana(massimo due decimali)
    console.log( "prezzo ridotto per minorenni:", priceTiket);//output console
    //se maggiori di 65 anni il prezzo totale del biglietto va scontato del 40%
} else if ( ageUser >= 65 ) {
    priceTiket = priceTiket - ( (priceTiket * 40 ) / 100 );
    priceTiket = priceTiket.toFixed(2);//Trasformare il prezzo del biglietto in forma umana(massimo due decimali)
    console.log( "prezzo ridotto per gli over 65:", priceTiket);//output console
}




//OUTPUT