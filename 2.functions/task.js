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
  let max = arrOfArr[0];
  
  for(let i = 0; i < arrOfArr.length;i++){
    const sum = func(arrOfArr[i]);
    if(sum > max){
      max = sum;
    }

  }

 return max
}

function worker2(arr){
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let res = max - min;
  if(res < 0){
    return false
  }
  return res
  
}
