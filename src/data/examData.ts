export interface Question {
  id: number;
  question: string;
  code?: string;
  language?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const examQuestions: Question[] = [
  {
  id: 1,
  question: "Which SQL statement is used to select all columns from the table employees?",
  code: ``,
  language: "",
  options: [
    "SELECT ALL FROM employees;",
    "SELECT * FROM employees;",
    "SELECT employees;",
    "SELECT # FROM employees;"
  ],
  correctAnswer: 1,
  explanation: "The correct syntax to select all columns is SELECT * FROM table_name."
},
{
  id: 2,
  question: "Which query selects employees with a salary greater than 5000?",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE salary = 5000;",
    "SELECT * FROM employees WHERE salary > 5000;",
    "SELECT * FROM employees IF salary > 5000;",
    "SELECT * FROM employees HAVING salary > 5000;"
  ],
  correctAnswer: 1,
  explanation: "The WHERE clause is used to filter rows based on conditions like salary > 5000."
},
{
  id: 3,
  question: "How do you sort employees by name in ascending order?",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees ORDER BY name ASC;",
    "SELECT * FROM employees SORT BY name;",
    "SELECT * FROM employees ORDER name ASC;",
    "SELECT * FROM employees GROUP BY name ASC;"
  ],
  correctAnswer: 0,
  explanation: "ORDER BY column ASC sorts the result in ascending order."
},
{
  id: 4,
  question: "What does the DISTINCT keyword do?",
  code: ``,
  language: "",
  options: [
    "Returns all rows including duplicates",
    "Returns only unique rows",
    "Deletes duplicate rows",
    "Groups rows"
  ],
  correctAnswer: 1,
  explanation: "DISTINCT ensures only unique rows are returned."
},
{
  id: 5,
  question: "Which function calculates the average salary?",
  code: ``,
  language: "",
  options: [
    "SUM(salary)",
    "AVG(salary)",
    "MAX(salary)",
    "COUNT(salary)"
  ],
  correctAnswer: 1,
  explanation: "AVG() function returns the average of the specified column."
},
{
  id: 6,
  question: "To find the number of employees in each department:",
  code: ``,
  language: "",
  options: [
    "SELECT department, COUNT() FROM employees;",
    "SELECT department, COUNT() FROM employees GROUP BY department;",
    "SELECT COUNT() FROM employees GROUP BY department;",
    "SELECT department, COUNT() GROUP BY employees;"
  ],
  correctAnswer: 1,
  explanation: "GROUP BY groups rows and COUNT() counts rows in each group."
},
{
  id: 7,
  question: "Which query finds departments with more than 10 employees?",
  code: ``,
  language: "",
  options: [
    "SELECT department, COUNT() FROM employees WHERE COUNT() > 10;",
    "SELECT department, COUNT() FROM employees HAVING COUNT() > 10 GROUP BY department;",
    "SELECT department, COUNT() FROM employees GROUP BY department HAVING COUNT() > 10;",
    "SELECT department, COUNT() FROM employees GROUP BY department WHERE COUNT() > 10;"
  ],
  correctAnswer: 2,
  explanation: "HAVING is used with GROUP BY to filter groups based on aggregate conditions."
},
{
  id: 8,
  question: "Which is correct to add a new employee?",
  code: ``,
  language: "",
  options: [
    "INSERT INTO employees VALUES (101, 'Ali', 3000);",
    "ADD INTO employees VALUES (101, 'Ali', 3000);",
    "INSERT employees VALUES (101, 'Ali', 3000);",
    "CREATE INTO employees VALUES (101, 'Ali', 3000);"
  ],
  correctAnswer: 0,
  explanation: "The correct syntax is INSERT INTO table_name VALUES (...)."
},
{
  id: 9,
  question: "How to increase all salaries by 10%?",
  code: ``,
  language: "",
  options: [
    "UPDATE employees SET salary = salary * 1.1;",
    "UPDATE employees ADD salary * 0.1;",
    "MODIFY employees SET salary = salary + 10%;",
    "UPDATE employees SET salary += 10%;"
  ],
  correctAnswer: 0,
  explanation: "Multiplying salary by 1.1 increases it by 10%."
},
{
  id: 10,
  question: "Delete all employees in department 5:",
  code: ``,
  language: "",
  options: [
    "DELETE employees WHERE department = 5;",
    "DELETE FROM employees WHERE department = 5;",
    "REMOVE FROM employees WHERE department = 5;",
    "DELETE * FROM employees WHERE department = 5;"
  ],
  correctAnswer: 1,
  explanation: "DELETE FROM table WHERE condition deletes rows matching the condition."
},
{
  id: 11,
  question: "Which query selects employees and their department names?",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees JOIN departments ON employees.dep_id = departments.id;",
    "SELECT * FROM employees INNER JOIN departments;",
    "SELECT * FROM employees CROSS JOIN departments;",
    "SELECT * FROM employees FULL JOIN departments;"
  ],
  correctAnswer: 0,
  explanation: "JOIN with ON condition matches employees with their departments."
},
{
  id: 12,
  question: "Returns all employees and department names (NULL if no department):",
  code: ``,
  language: "",
  options: [
    "LEFT JOIN",
    "RIGHT JOIN",
    "INNER JOIN",
    "CROSS JOIN"
  ],
  correctAnswer: 0,
  explanation: "LEFT JOIN returns all rows from the left table and matching rows from the right."
},
{
  id: 13,
  question: "Select employees earning more than the average salary:",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE salary > SELECT AVG(salary) FROM employees;",
    "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
    "SELECT * FROM employees WHERE salary > AVG(salary);",
    "SELECT * FROM employees WHERE salary > SUM(salary)/COUNT(*);"
  ],
  correctAnswer: 1,
  explanation: "A subquery in parentheses is required for comparing with AVG()."
},
{
  id: 14,
  question: "Select employees whose name starts with ‘A’:",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE name LIKE 'A%';",
    "SELECT * FROM employees WHERE name LIKE '%A';",
    "SELECT * FROM employees WHERE name LIKE '%A%';",
    "SELECT * FROM employees WHERE name = 'A%';"
  ],
  correctAnswer: 0,
  explanation: "LIKE 'A%' matches names beginning with A."
},
{
  id: 15,
  question: "Select employees in departments 1, 2, or 3:",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE department IN (1,2,3);",
    "SELECT * FROM employees WHERE department = (1,2,3);",
    "SELECT * FROM employees WHERE department = IN (1,2,3);",
    "SELECT * FROM employees WHERE department BETWEEN 1 AND 3;"
  ],
  correctAnswer: 0,
  explanation: "IN (1,2,3) matches any of the listed values."
},
{
  id: 16,
  question: "Select employees NOT in departments 1 and 2:",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE department NOT IN (1,2);",
    "SELECT * FROM employees WHERE department != IN (1,2);",
    "SELECT * FROM employees WHERE department <> (1,2);",
    "SELECT * FROM employees WHERE department NOT = (1,2);"
  ],
  correctAnswer: 0,
  explanation: "NOT IN excludes the specified values."
},
{
  id: 17,
  question: "Select employees with salary between 2000 and 5000:",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE salary >= 2000 AND salary <= 5000;",
    "SELECT * FROM employees WHERE salary BETWEEN 2000 AND 5000;",
    "SELECT * FROM employees WHERE salary = 2000 TO 5000;",
    "Both a & b"
  ],
  correctAnswer: 3,
  explanation: "Both salary BETWEEN and explicit >= and <= conditions are valid."
},
{
  id: 18,
  question: "Select employees with no department assigned:",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE department = NULL;",
    "SELECT * FROM employees WHERE department IS NULL;",
    "SELECT * FROM employees WHERE department = 'NULL';",
    "SELECT * FROM employees WHERE department IS EMPTY;"
  ],
  correctAnswer: 1,
  explanation: "IS NULL is the correct way to check for NULL values."
},
{
  id: 19,
  question: "Select employees with a department:",
  code: ``,
  language: "",
  options: [
    "SELECT * FROM employees WHERE department IS NOT NULL;",
    "SELECT * FROM employees WHERE department != NULL;",
    "SELECT * FROM employees WHERE department <> NULL;",
    "SELECT * FROM employees WHERE department = NOT NULL;"
  ],
  correctAnswer: 0,
  explanation: "IS NOT NULL checks for values that are not NULL."
},
{
  id: 20,
  question: "Which query gives emp_name as an alias for name?",
  code: ``,
  language: "",
  options: [
    "SELECT name AS emp_name FROM employees;",
    "SELECT name TO emp_name FROM employees;",
    "SELECT name emp_name FROM employees;",
    "SELECT name ALIAS emp_name FROM employees;"
  ],
  correctAnswer: 0,
  explanation: "AS keyword assigns an alias to a column."
},
{
  id: 21,
  question: "Which column ensures unique values and no NULLs?",
  code: ``,
  language: "",
  options: [
    "FOREIGN KEY",
    "PRIMARY KEY",
    "UNIQUE",
    "CHECK"
  ],
  correctAnswer: 1,
  explanation: "PRIMARY KEY enforces uniqueness and not null constraint."
},
{
  id: 22,
  question: "Which defines a link to another table?",
  code: ``,
  language: "",
  options: [
    "PRIMARY KEY",
    "FOREIGN KEY",
    "UNIQUE",
    "DEFAULT"
  ],
  correctAnswer: 1,
  explanation: "FOREIGN KEY establishes a relationship between two tables."
},
{
  id: 23,
  question: "Which ensures column values are unique but allows NULLs?",
  code: ``,
  language: "",
  options: [
    "PRIMARY KEY",
    "FOREIGN KEY",
    "UNIQUE",
    "CHECK"
  ],
  correctAnswer: 2,
  explanation: "UNIQUE ensures all values are different but permits NULLs."
},
{
  id: 24,
  question: "Which ensures salary > 0?",
  code: ``,
  language: "",
  options: [
    "CHECK(salary > 0)",
    "CONSTRAINT(salary > 0)",
    "UNIQUE(salary > 0)",
    "VALIDATE(salary > 0)"
  ],
  correctAnswer: 0,
  explanation: "CHECK enforces conditions on column values."
},
{
  id: 25,
  question: "Set default salary to 3000:",
  code: ``,
  language: "",
  options: [
    "salary DEFAULT 3000",
    "salary SET 3000",
    "salary ASSIGN 3000",
    "salary INIT 3000"
  ],
  correctAnswer: 0,
  explanation: "DEFAULT sets a default value when none is provided."
},
{
  id: 26,
  question: "Which returns the number of rows?",
  code: ``,
  language: "",
  options: [
    "SUM()",
    "AVG()",
    "COUNT()",
    "MAX()"
  ],
  correctAnswer: 2,
  explanation: "COUNT() function returns the number of rows."
},
{
  id: 27,
  question: "Concatenate first and last name:",
  code: ``,
  language: "",
  options: [
    "SELECT first_name + last_name FROM employees;",
    "SELECT CONCAT(first_name, last_name) FROM employees;",
    "SELECT first_name & last_name FROM employees;",
    "SELECT MERGE(first_name, last_name) FROM employees;"
  ],
  correctAnswer: 1,
  explanation: "CONCAT() joins multiple strings together."
},
{
  id: 28,
  question: "Which is correct single-line comment?",
  code: ``,
  language: "",
  options: [
    "-- This is a comment",
    "/* This is a comment */",
    "# This is a comment",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "SQL supports --, /* */, and # for comments."
},
{
  id: 29,
  question: "% in LIKE represents:",
  code: ``,
  language: "",
  options: [
    "Single character",
    "Any number of characters",
    "Only digits",
    "Nothing"
  ],
  correctAnswer: 1,
  explanation: "In LIKE, % matches zero or more characters."
},
{
  id: 30,
  question: "Which method prevents SQL injection?",
  code: ``,
  language: "",
  options: [
    "Use parameterized queries",
    "Use string concatenation",
    "Use dynamic SQL",
    "Allow direct user input"
  ],
  correctAnswer: 0,
  explanation: "Parameterized queries safely handle user input to prevent SQL injection."
}

];

export const examConfig = {
  title: "  SQL  ",
  duration: 30, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};