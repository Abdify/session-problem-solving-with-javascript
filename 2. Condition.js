let mark = 25;
if(mark > 40){
  console.log("Mark is greater than 10");
} else if(mark > 20){
  console.log("Mark is greater than 20");
} else if(mark > 30){
  console.log("Mark is greater than 30");
}


// wrong solution
let a = 3,
  b = 2,
  c = 4;

if (a > b) {
  if (a > c) {
    console.log("a is largest");
  }
} else if (c > b) {
  console.log("c is largest");
} else {
  console.log("b is largest");
}
console.log("finished");
