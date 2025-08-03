/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here

var studentName = student.name.toLowerCase();
var studentRoll = student.roll;
var studentDepartment = student.department.toLowerCase();
var emailFormat = "@ph.ac.bd";

var email = studentName + studentRoll + "." + studentDepartment + emailFormat;

console.log(email);
