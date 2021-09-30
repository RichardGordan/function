function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((numbers) => numbers === arr2.every(numbers));

  // 

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter((numbers) => numbers >= 0 && numbers % 3 === 0).map((numbers) => numbers * 10); 

  

  return resultArr; // array
}
