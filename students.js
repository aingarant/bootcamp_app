const { Pool } = require("pg");

const pool = new Pool({
  user: "thirunai",
  password: "",
  host: "localhost",
  database: "bootcampx",
});

// pool
//   .query(
//     `
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `
//   )
//   .then((res) => {
//     console.log(res.rows);
//   })
//   .catch((err) => console.error("query error", err.stack));

// pool
//   .query(
//     `
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `
//   )
//   .then((res) => {
//     res.rows.forEach((user) => {
//       console.log(
//         `${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`
//       );
//     });
//   });

// pool
//   .query(
//     `
// SELECT students.id, students.name, cohort_id, cohorts.name AS cohort_name
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `
//   )
//   .then((res) => {
//     res.rows.forEach((user) => {
//       console.log(
//         `${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`
//       );
//     });
//   });

const cohortName = process.argv.slice(2)[0];
const limit = process.argv.slice(2)[1];


pool
  .query(
    `
SELECT students.id, students.name, cohort_id, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE  '%${cohortName}%'
LIMIT ${limit} ;
`
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`
      );
    });
  });

