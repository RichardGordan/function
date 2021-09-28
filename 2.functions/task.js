// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }else if(arr[i] < min){
      min = arr[i];
    }
    sum =+ arr[i];
  }
  
  avg = Number((sum / arr.length).toFixed(2));

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
for(let i = 0; i < arr.length; i++){
  sum += arr[i];
}
  

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = arrOfArr[0]];
  worker(arr, (arrOfArr[i] => 
    for(let i = 0; i < arrOfArr.length; i++){
      if(arrOfArr[i] > max ){
        max = arrOfArr[i];
      }
    }
  


  // Ваш кода
  // for ...
  
  return max
}
