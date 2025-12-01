//COSTO BIGLIETTO TRENO

//INPUT
//Chiedere a utente di unserire chilometri da percorrere e età
const kmtogo = parseFloat( prompt( "Inserire km da percorrere" ) );// usato parseFloat perchè possiamo accettari valori in km  con la virgola
const ageUser = parseInt( prompt( "Inserire età del passeggero" ) );// usato parceInt perchè possiamo accettare solo vaoli interi di età
console.log("Km da percorrere:", kmtogo, "Età passeggero:", ageUser );
let priceTiketReduced = "Nessuna riduzione per la vostra età"
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
    priceTiketReduced = priceTiket - ( ( priceTiket * 20 ) / 100 );
    priceTiketReduced = priceTiketReduced.toFixed(2);//Trasformare il prezzo del biglietto in forma umana(massimo due decimali)
    console.log( "prezzo ridotto per minorenni:", priceTiketReduced);//output console
    //se maggiori di 65 anni il prezzo totale del biglietto va scontato del 40%
} else if ( ageUser >= 65 ) {
    priceTiketReduced = Math.round( ( priceTiket - ( (priceTiket * 40 ) / 100 ) ) *100 ) / 100; //Trasformare il prezzo del biglietto in forma umana(massimo due decimali)
    console.log( "prezzo ridotto per gli over 65:", priceTiketReduced);//output console
}

//OUTPUT
document.getElementById("priceTiket").innerHTML = priceTiket;
document.getElementById("priceTiketReduced").innerHTML = priceTiketReduced;
document.getElementById("kmtogo").innerHTML = kmtogo.toString();
document.getElementById("ageUser").innerHTML = ageUser.toString();