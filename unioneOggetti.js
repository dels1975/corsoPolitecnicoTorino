"use strict";

const persona = {
  nome: "Salvatore",
  cognome: "De Luca",
  eta: 45,
};

const teacher = {
  scuola: "A. Gentili",
  materia: "informatica",
};

// restituisce un nuovo oggetto con le proprietà di persona e di teacher
let professione = Object.assign({}, persona, teacher);
console.log(professione);

// PROGRAMMAZIONE FUNZIONALE con uso di Callbacks sincrone
const oggettoCorsi = {
  corso1: "Web Application I",
  corso2: "Computer Architectures",
};

// dichiaro ed inizializzo vuoto il nuovo array di valori che conterrà il risultato finale
//let risultato = [];

// dichiaro ed inizializzo vuoto la stringa che conterrà il risultato finale
let str = "";

// l'oggetto non è iterabile in quanto collezione non ordinata di proprietà e metodi.
// per tale motivo trasformare prima l'oggetto in array attraverso il metodo Object.values()

let corsi = Object.values(oggettoCorsi) // crea un array ['Web Application I', 'Computer Architectures']

  .join(" ") // array to string concatenando gli elementi con spazio " " => "Web Application I Computer Architectures"

  .split(" ") // string to array con separatore elementi identificato da " " => ['Web', 'Application', 'I', 'Computer', 'Architectures']

  .forEach((el) => (str += el[0]));
// oppure passando il risultato ad un array dichiarato all'inizio vuoto risultato = [];:
//risultato.push(el[0]));
// itera elementi dell'array e prende, per ogni elemento iterato, l'indice [0] e lo inserisce in un nuovo array: risultato  => ['W', 'A', 'I', 'C', 'A']
// e successiva conversione in stringa: let acronimo = risultato.join(""); // array to string concatenando gli elementi senza spazio

// oppure con il metodo .map() che rimappa l'array di partenza e restituisce il risultato ad un array o variabile stringa dichiarate all'inizio:
// .map((el) => risultato.push(el[0])); or
// .map((el) => (str += el[0]));

// oppure con il metodo .reduce() che torna direttamento un valore di tipo stringa e NOT AN ARRAY - non occorre la conversione successiva a stringa:
// .reduce((acc, el) => risultato.push(el[0]), 0); => "W,A,I,C,A" - occorre però eliminare successivamente le "," dalla stringa per esempio con il metodo
// .replace(/\,/g, ""); che utilizza le Regular Expression

console.log(`direttamente una stringa: ${str}`);

// Altro esempio su array - filter() crea un nuovo array con tutti gli elementi per i quali il risultato della callbacks ritorna true
const market = [
  { name: "Google", score: 9.0 },
  { name: "Lenovo", score: 5.5 },
  { name: "Amazon", score: 8.5 },
  { name: "Microsoft", score: 7.5 },
];

const bestMarket = market.filter((el) => el.score > 6.0);

console.log(bestMarket);
