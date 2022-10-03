"use strict";

const alunni = [
  { nome: "Giorgio", cognome: "Rossi", sesso: "M", età: 25 },
  { nome: "Maurizio", cognome: "Verdi", sesso: "M", età: 22 },
  { nome: "Franco", cognome: "Bianchi", sesso: "M", età: 27 },
  { nome: "Alessia", cognome: "Zanelli", sesso: "F", età: 27 },
  { nome: "Martina", cognome: "Colombari", sesso: "F", età: 33 },
];

const etaMediaDonne = alunni
  .filter((el) => el.sesso === "F")
  .map((el) => el.età)
  .reduce((somma, età, i, array) => (somma + età) / array.length);

console.log(etaMediaDonne);
