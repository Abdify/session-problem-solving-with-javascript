// Calculate the average of all the numbers that is divisible by 3 from 1 - n;

function average(n){
  let sum = 0, count = 0;
  for(let i = 1; i < n; i++){
    if(i%3 == 0){
      sum = sum + i;
      count = count + 1;
    }
  }

  let avg = sum / count;
  return avg;
}

let result = average(100);

console.log(result)