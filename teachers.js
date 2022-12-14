const { Pool } = require("pg");

const pool = new Pool({
  user: "thirunai",
  password: "",
  host: "localhost",
  database: "bootcampx",
});

const cohort = process.argv.slice(2)[0];

const query = `SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id =  teachers.id
JOIN students ON students.id = student_id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = '${cohort}'`;

pool.query(query).then((res) => {
  res.rows.forEach((teacher) => {
    console.log(`${cohort}: ${teacher.teacher}`);
  });
});
