var phys = 9.5;
var chem = 9.5;
var biol = 8.5;
var math = 9.5;
var comp = 8.5;

var grade = ((phys + chem + biol + math + comp) / 50 ) * 100
console.log(grade);
if (grade >= 90) {
    console.log("Grade A");
}
else if (grade >= 80) {
    console.log("Grade B");
}
else if (grade >= 70) {
    console.log("Grade C");
}
else if (grade >= 60) {
    console.log("Grade D");
}
else if (grade >= 50) {
    console.log("Grade E");
}
else {
    console.log("Grade F");
}