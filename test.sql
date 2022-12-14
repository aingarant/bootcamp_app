-- Active: 1670863685890@@127.0.0.1@5432@bootcampx@public
SELECT students.id, students.name, cohort_id, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'FEB12'
LIMIT 5;

SELECT * FROM students;
select * from cohorts;


SELECT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'