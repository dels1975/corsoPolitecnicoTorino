"use strict";

// esercizio LEZIONE 3
// definisci un array con tutti i voti degli esemi sostenuti
// elimina i due voti più bassi
// aggiungi due nuovi voti, alla fine, uguali alla media arrotondata dei voti
// stampa entrambi gli array e mostrane la media in entrambi i casi

// definizione array voti esami
const score = [19, 22, 30, 27, 24, 18, 26, 29];

//definizione dell'array migliorato - copio l'array di partenza
const betterScore = [...score];

/* 
// soluzione 1 - soluzione dei minimi

// il metodo Math.min() non accetta un array ma dei valori
// li passiamo con il metodo spread
let minScore = Math.min(...betterScore);
//recupera l'indice di posizione del valore min
let index = betterScore.indexOf(minScore);
//elimino un elemento dall'array
betterScore.splice(index, 1);

// ripeto due volte per eliminare i due voti più bassi - non riassegno con let le variabili già definite: ritornerebbe errore!
minScore = Math.min(...betterScore);
index = betterScore.indexOf(minScore);
betterScore.splice(index, 1);

 */

// la sort ordina di default in modo alfabetico
// ordinamento numerico richiede una funzione
score.sort((a, b) => a - b);
betterScore.sort((a, b) => a - b);

console.log(betterScore);
