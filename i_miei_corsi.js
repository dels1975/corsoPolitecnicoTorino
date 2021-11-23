"use strict";

// lista dei miei corsi
let listaCorsi = "Applicazioni Web I, Ingegneria del software, \
Dati di base";

// \ per andare a capo - oppure usare il backtick

// creare un array con un nome di corso per posizione
let corsi = listaCorsi.split(","); // restituisce un array

// togliere gli eventuali spazi bianchi prima e dopo ogni nome di corso
for (const [i, c] of corsi.entries()) {
  // i di indice - c di corsi
  // corsi.entries restituisce le coppie chiave/valore dell'array
  corsi[i] = c.trim();
}

// creare gli acronimi per i corsi
const acronimi = [];

for (const c of corsi) {
  const parole = c.split(" "); // array con le singole parole del nome del corso

  let acronimo = "";
  for (const p of parole) {
    acronimo += p[0].toLocaleUpperCase();
  }

  acronimi.push(acronimo);
}

// stampare acronimi e nomi allineati in ordine alfabetico
// AWI - Applicazioni Web I   etc..

const output = [];

for (const [i, a] of acronimi.entries()) {
  output.push(`${a} - ${corsi[i]}`);
}

// metodo per ordinamento alfabetico ascendente dell'array
output.sort();

console.log(output);
