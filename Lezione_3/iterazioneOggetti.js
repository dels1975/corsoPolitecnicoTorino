"use strict";

const persona = {
  nome: "Salvatore",
  cognome: "De Luca",
  eta: 45,
};

// iterare le coppie nome:valore dell'oggetto

// 1° metodo "for in": applicabile sugli oggetti
for (let chiave in persona) {
  // console.log(persona.chiave); con la dot notation non funziona!!
  console.log(`${chiave}: ${persona[chiave]}`);
}

// 2° metodo "for of": applicabile sugli array
for (let [c, v] of Object.entries(persona)) {
  console.log(`${c}-> ${v}`);
}

// 2° metodo "for of": applicabile sugli array / con Object.Keys si iterano solo le chiavi
for (let c of Object.keys(persona)) {
  console.log(c);
}
