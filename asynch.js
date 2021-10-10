"use strict";

const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("transcript.sqlite", (err) => {
  if (err) throw err;
});

let sql =
  "SELECT * FROM course LEFT JOIN score ON course.code = score.coursecode";
db.all(sql, [], (err, rows) => {
  if (err) throw err;
  for (let row of rows) console.log(row);
});

let sql2 =
  "SELECT * FROM course LEFT JOIN score ON course.code = score.coursecode WHERE code=?";
db.get(sql2, ["01NYHOV"], (err, row) => {
  console.log(row);
});

getRepoInfo
  .then((repo) => getIssue(repo))
  .then((issue) => getOwner(issue.ownerId))
  .then((owner) => sendEmail(owner.email, "Some text"))
  .catch((e) => {
    // just log the error
    console.error(e);
  })
  .finally((_) => logAction());
