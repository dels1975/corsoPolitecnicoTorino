"use strict";

const persona = {
    nome: "Salvatore",
    cognome: "De Luca",
    eta: 45
}

const teacher = {
    scuola: "A. Gentili",
    materia: "informatica"
}

// restituisce un nuovo oggetto con le proprietà di persona e di teacher
let professione = Object.assign({}, persona, teacher);
console.log(professione)