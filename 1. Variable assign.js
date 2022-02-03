let first = 4;
let second = 7;

first = second;

first = first + 5;
first *= 5;

console.log(first)



let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (element > largest) {
    // what this line means?
    largest = element;
  }

}

console.log(largest);
