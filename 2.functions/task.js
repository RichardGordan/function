// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > i){
      max = arr[i];
    }else if(arr[i] < i){
      min = arr[i];
    };
    sum =+ arr[i];
    avg = sum / arr.length
  }

 

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}
