const { Pool } = require("pg");

const pool = new Pool({
  user: "thirunai",
  password: "",
  host: "localhost",
  database: "bootcampx",
});

const cohortName = process.argv.slice(2)[0];
const limit = process.argv.slice(2)[1];

const queryString = `SELECT students.id, students.name, cohort_id, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE  $1
LIMIT $2 `;

const values = [`%${cohortName}%`, limit];

pool.query(queryString, values).then((res) => {
  res.rows.forEach((user) => {
    console.log(
      `${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`
    );
  });
});
