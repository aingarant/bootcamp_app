const { Pool } = require("pg");

const pool = new Pool({
  user: "thirunai",
  password: "",
  host: "localhost",
  database: "bootcampx",
});

const cohort = process.argv.slice(2)[0];

const queryString = `SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id =  teachers.id
JOIN students ON  student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1`;
const values = [`%${cohort}%`];

pool.query(queryString, values).then((res) => {
  res.rows.forEach((teacher) => {
    console.log(`${cohort}: ${teacher.teacher}`);
  });
});
