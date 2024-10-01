/*let mode = "dark";
let color;
if (mode==="dark") {
    color = "black";
} else {
    color = "white";
}*/


// let mode = "pink";
// let color;

// if ( mode === "dark" ) {
//     color = "black";
// } else if (mode === "blue" ) {
//     color = "blue";
// } else if (mode === "white" ) {
//     color = "white";
// } else {
//     color ="red"
// }
// console.log(color)
// let age = 18;
// let result = age >= 18 ? "adult" :"not adult";
// console.log(result);
// let num = prompt("enter a number");
// if (num % 5 ===0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not mutiple of 5");
// }

let score =prompt("enter your score (0-100):");
let grade;
if (score >=90 && score <= 100) {
    grade = "A"
} else if (score >= 70 && score <= 89) {
    grade = "B"
} else if (score >= 60 && score <= 69) {
    grade ="C"
} else if (score >= 50 && score <= 59) {
    grade ="D"
} else if (score >= 0 && score <= 49) {
    grade ="F"
}
console.log(grade)