let arr = [4, 2, 68, 100, 140];
let evenSum = 0;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evenSum += 1;
  }
}
// console.log(evenSum) -- Print number of True

if (evenSum === arr.length) {
  console.log("Yes");
} else {
  console.log("No");
}

// Print items that can be divided by 5
arr.forEach(myFunction);

function myFunction(item) {
  if (item % 5 == 0) {
    console.log(item);
  }
}
