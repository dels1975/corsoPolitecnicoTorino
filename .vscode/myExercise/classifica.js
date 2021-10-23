"use strict"

function Squadra(name, pt, pg, v, n, p) {
    this.name = name;
    this.pt = pt;
    this.pg = pg;
    this.v = v;
    this.n = n;
    this.p = p;
}

function Classifica() {
    this.list =  [];

    this.init = () => {
        this.list.push(
            new Squadra('Napoli', 24, 8, 8, 0, 0 ),
            new Squadra('Milan', 22, 8, 7, 1, 0 ),
            new Squadra('Inter', 17, 8, 5, 2, 1 )
        )
    } 

    this.getAll = () => {
        return this.list;
    }
}

/* 
<tr>
          <td>Milan</td>
          <td>24</td>
          <td>8</td>
          <td>8</td>
          <td>0</td>
          <td>0</td>
        </tr>
*/
const squadra = new Squadra();
const classificaSquadra = new Classifica();
/* function createClassificaRiga(squadra) {
    return `<tr>
          <td>${squadra.name}</td>
          <td>${squadra.pt}</td>
          <td>${squadra.pg}</td>
          <td>${squadra.v}</td>
          <td>${squadra.n}</td>
          <td>${squadra.p}</td>
        </tr>`
} */

console.log(classificaSquadra.init());
console.log(classificaSquadra.getAll());