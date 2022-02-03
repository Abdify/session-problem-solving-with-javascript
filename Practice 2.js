// Count numbers divisible by 3 from 1 - 20;

function countNumbersDivisibleByThree() {
  for (let i = 1; i <= 20; i++) {
    let count = 0;
    if (i % 3 == 0) {
      count = count + 1;
    }
  }
  return count;
}

let result = countNumbersDivisibleByThree();

console.log(result);
