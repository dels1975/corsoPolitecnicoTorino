"use strict";

function Squadra(name, pt, pg, v, n, p) {
  this.name = name;
  this.pt = pt;
  this.pg = pg;
  this.v = v;
  this.n = n;
  this.p = p;
}

function Classifica() {
  this.list = [];

  this.init = () => {
    this.list.push(
      new Squadra("Napoli", 24, 8, 8, 0, 0),
      new Squadra("Milan", 22, 8, 7, 1, 0),
      new Squadra("Inter", 17, 8, 5, 2, 1)
    );
  };

  this.getAll = () => {
    return this.list;
  };

  this.getFirst = () => {
    return Math.max.apply(
      null,
      this.list.map((firstPos) => firstPos.pt)
    );
  };
}

//RIEMPIRE LA TABELLA CON LE SQUADRE - DOM MANIPULATION
function writeRow(el) {
  return `<tr>
    <td>${el.name}</td>
    <td>${el.pt}</td>
    <td>${el.pg}</td>
    <td>${el.v}</td>
    <td>${el.n}</td>
    <td>${el.p}</td>
    </tr>`;
}

function fillClassificaTable(squadre) {
  const classificaTable = document.getElementById("squadra");
  for (const el of squadre) {
    // creare la riga
    const elSquadra = writeRow(el);
    // aggiungere la riga
    classificaTable.insertAdjacentHTML("afterbegin", elSquadra);
  }
}

// console.log(squadre);

// MAIN
const classificaSerieA = new Classifica();
classificaSerieA.init();
const squadre = classificaSerieA.getAll();
fillClassificaTable(squadre);

const primaClassifica = classificaSerieA.getFirst();

console.log(squadre);
console.log(primaClassifica);
