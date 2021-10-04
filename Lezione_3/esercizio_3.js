"use strict";

// importazione del modulo dayjs per gestire le date
const dayjs = require("dayjs");

/* 
let dataCorrente = dayjs();
console.log(dataCorrente);
 */

// creo la funzione costruttrice dell'oggetto Exam
// di default la loude = false in quanto questa condizione si verifica sempre per valori di score tra 18 a 29
// la laude = true solo in alcuni casi dove score = 30
function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = date;
  this.score = score;
  this.laude = laude;
}

// creo la funzione costruttrice dell'oggetto ExamList
function ExamList() {
  this.list = [];

  // add
  this.add = (exam) => {
    this.list.push(exam);
  };

  //find
  this.find = (code) => {
    for (const c of this.list) {
      if (c.code === code);
      return c;
    }
    return undefined;
  };

  //listByDate
  this.listByDate = () => {
    // creiamo una copia della list con l'operatore di spread [...this.list]
    return [...this.list].sort((a, b) => (a.date.isAfter(b.date) ? 1 : -1));
  };
}

// istanza aw1 dell'oggetto Exam
const aw1 = new Exam(
  "01abc",
  "Applicazioni Web I",
  6,
  dayjs("2021-07-01", "YYYY-MM-DD"),
  30,
  true
);

// istanza sw dell'oggetto Exam
const sw = new Exam(
  "02aaa",
  "Ingegneria del Software",
  6,
  dayjs("2021-06-15", "YYYY-MM-DD"),
  28
);
// console.log(aw1);

const exams = new ExamList();
exams.add(aw1);
exams.add(sw);
// exams.find("01abc");
// console.log(exams);
//console.log(exams.find("01abc"));
// console.log(exams.find("x1abc"));

const orderList = exams.listByDate();
console.log(orderList);
