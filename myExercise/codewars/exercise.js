"use strict";

//  -- EXERCIZE:  dato un intero, trova tutti i divisori per cui il numero è divisibile, tranne 1 e se stesso e verifica se il numero è un numero primo
function divisors(integer) {
  let arrDiv = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arrDiv.push(i);
    }
  }
  // verifica se l'array ha una lunghezza > 0
  return arrDiv.length ? arrDiv : `${integer} is prime`;
}
console.log(divisors(1721453));

// -- EXERCIZE:  Controlla se una stringa ha la stessa quantità di "x" e "o"--

// Il metodo deve restituire un valore booleano e non fa distinzione tra maiuscole e minuscole.
// La stringa può contenere qualsiasi carattere.

// Il metodo replace() restituisce una nuova stringa con alcune o tutte le corrispondenze di un modello sostituite da una sostituzione.
// Il modello può essere una stringa o una RegExp e la sostituzione può essere una stringa o una funzione da chiamare per ogni corrispondenza.
// Se pattern è una stringa, verrà sostituita solo la prima occorrenza.

// g - corrispondenze globali. Ad esempio, /ab/g indica la corrispondenza di tutte le occorrenze del testo 'ab' mentre
// /ab/ indica la corrispondenza della prima occorrenza del testo 'ab'.
// i - corrispondenze senza distinzione tra maiuscole e minuscole.
// Ad esempio, /aB/i significa corrispondenza con 'ab', 'aB', 'Ab' e 'AB'.

function XO(str) {
  return str.replace(/o/gi, "").length == str.replace(/x/gi, "").length;
}

console.log(XO("Ciao mondo"));
