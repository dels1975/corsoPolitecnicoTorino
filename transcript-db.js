"use strict";

// importazione delle librerie: modulo dayjs per gestire le date e sqlite3 per il db
const dayjs = require("dayjs");
const sqlite3 = require("sqlite3");

// creo la funzione costruttrice dell'oggetto Exam
// di default la loude = false in quanto questa condizione si verifica sempre per valori di score tra 18 a 29
// la laude = true solo in alcuni casi dove score = 30
function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = dayjs(date);
  this.score = score;
  this.laude = laude;
  this.toString = () => {
    return `${this.code} - ${this.name}: ${this.score} \n`;
  };
}

// creo la funzione costruttrice dell'oggetto ExamList
function ExamList() {
  const db = new sqlite3.Database("exams.sqlite", (err) => {
    if (err) throw err;
  });

  // add - il metodo add deve essere gestito in modo asincrono per cui il metodo deve ritornare una promise
  // se non gestiremmo il metodo in modo asincrono, metodi successivi come getAll() potrebbero visualizzare
  // i risultati prima che i metodi db.run() ultimerebbero il loro inserimento

  this.add = (exam) => {
    return new Promise((resolve, reject) => {
      // query sql
      const sql =
        "INSERT INTO score(coursecode, score, laude, datepassed) VALUES (?, ?, ?, DATE(?))";

      db.run(
        sql,
        [exam.code, exam.score, exam.laude, exam.date.format("YYYY-MM-DD")],
        // se dovessimo usare una Arrow Function non sarebbe possibile ottenere il lastID
        // in quanto le Arrow Fuction ridefiniscono il this localmente e non riferito al db.run
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  };

  // get.All
  this.getAll = () => {
    return new Promise((resolve, reject) => {
      // query sql
      const sql =
        "SELECT * FROM course JOIN score ON course.code = score.coursecode";

      db.all(sql, [], (err, rows) => {
        if (err) reject(err);
        else {
          const exams = rows.map(
            (row) =>
              new Exam(
                row.code,
                row.name,
                row.CFU,
                row.datepassed,
                row.score,
                row.laude == 1
              )
          );
          resolve(exams);
        }
      });
    });
  };

  // find
  this.find = (code) => {};

  // afterDate
  this.afterDate = (date) => {};

  // getWorst
  this.getWorst = (num) => {};
}

/* Trattamento con ASYNC / AWAIT */

const main = async () => {
  const aw1 = new Exam(
    "01TXYOV",
    "Applicazioni Web I",
    6,
    "2021-07-01",
    30,
    true
  );

  // istanza sw dell'oggetto Exam
  const ds = new Exam(
    "02aaa",
    "Data Science and Database Technology",
    6,
    "2021-06-15",
    28
  );
  // console.log(aw1);

  const exams = new ExamList();
  try {
    // const id = await exams.add(aw1);
    // console.log(id);

    const myExams = await exams.getAll();
    // console.log(myExams); così non funziona il metodo this.toString che utilizza i template literals - per farlo funzionare
    console.log(`${myExams}`);
  } catch (error) {
    console.log(error);
  }
};

main();

/* Trattamento con le PROMISE */

/* 
// istanza aw1 dell'oggetto Exam
const aw1 = new Exam(
  "01TXYOV",
  "Applicazioni Web I",
  6,
  "2021-07-01",
  30,
  true
);

// istanza sw dell'oggetto Exam
const ds = new Exam(
  "02aaa",
  "Data Science and Database Technology",
  6,
  "2021-06-15",
  28
);
// console.log(aw1);

const exams = new ExamList();

// con il then ci assicuriamo che il metodo add restituisce una promise fulfilled, solo allora sarà eseguito il metodo getAll()
exams
  .add(aw1)
  .then((id) => {
    console.log(id);
    exams.getAll().then((exams) => console.log(exams));
  })
  .catch((err) => console.log(err));
// exams.add(ds);
 */
