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
