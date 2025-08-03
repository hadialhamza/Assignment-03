/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var divideArea = area / 2;

console.log(divideArea);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var i = 1; i <= lastDay; i++) {
  if (i % 3 == 0) {
    console.log(i + " - medicine");
  } else {
    console.log(i + " - rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

var newFileName = fileName.toLowerCase().split("");
// console.log(newFileName);

var newFileName2 = fileName.toLowerCase().split(".");
// console.log(newFileName2);

if (newFileName[0] === "#") {
  console.log("Store");
} else if (newFileName2[1] === "pdf" || newFileName2[1] === "docx") {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here

var studentName = student.name.toLowerCase();
var studentRoll = student.roll;
var studentDepartment = student.department.toLowerCase();
var emailFormat = "@ph.ac.bd";

var email = studentName + studentRoll + "." + studentDepartment + emailFormat;

console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var currentSalary = startingSalary;

for (var i = 1; i <= experience; i++) {
  currentSalary = currentSalary + (currentSalary * 5) / 100;
}

var incrementSalary = currentSalary.toFixed(2);
console.log(incrementSalary);
