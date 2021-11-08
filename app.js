"use strict";

function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = dayjs(date);
  this.score = score;
  this.laude = laude;
}

function ExamList() {
  this.list = [];

  this.init = () => {
    this.list.push(
      new Exam(
        "02GOL",
        "Architetture dei sistemi di elaborazione",
        10,
        "2021-02-01",
        28
      ),
      new Exam(
        "01SQM",
        "Data Science e Tecnologie per le Basi di Dati",
        8,
        "2020-06-02",
        30,
        true
      ),
      new Exam("02KPN", "Tecnologie e servizi di rete", 6, "2020-02-15", 26)
    );

    this.getAll = () => {
      return this.list;
    };

    this.get2021 = () => {
      return this.list.filter((exam) => exam.date.isAfter("2021-01-01"));
    };
  };
}

/*
<tr>
    <td>01/02/2021</td>
    <td>Architetture dei sistemi di elaborazione</td>
    <td>10</td>
    <td>28</td>
    <td><button class="btn btn-danger">X</button></td>
</tr>
 */
/* DOM manipulation */
function createExamRow(exam) {
  return `<tr>
    <td>${exam.date.format("DD/MM/YYYY")}</td>
    <td>${exam.name}</td>
    <td>${exam.credits}</td>
    <td>${exam.score}${exam.laude ? "L" : ""}</td>
    <td><button id="${exam.code}" class="btn btn-danger">X</button></td>
</tr>`;
}

function fillExamTable(exams) {
  const examTable = document.getElementById("exam-table");
  for (const exam of exams) {
    // creare la riga della tabella
    const examEl = createExamRow(exam);
    // aggiungiamo la riga nella pagina
    examTable.insertAdjacentHTML("afterbegin", examEl);
  }
}

function initTable() {
  const examTable = document.getElementById("exam-table");
  examTable.innerHTML = `<td><input class="form-control" type="date"></td>
  <td><input class="form-control" type="text"></td>
  <td><input class="form-control" type="text" size="2"></td>
  <td><input class="form-control" type="text" size="3"></td>
  <td><button class="btn btn-success">+</button></td>`;
}

/* Event Listener & Handler */
document.querySelector("#filter-2021").addEventListener("click", (event) => {
  const exams = examList.get2021();
  initTable();
  fillExamTable(exams);
});

document.querySelector("#filter-all").addEventListener("click", (event) => {
  const exams = examList.getAll();
  initTable();
  fillExamTable(exams);
});

/* Main */
const examList = new ExamList();
examList.init();

// riempire la tabella degli esami
const exams = examList.getAll();
fillExamTable(exams);

/* document.querySelector("#02GOL").addEventListener("click", (event) => {
  console.log("cancello" + event.target.id);
}); */
