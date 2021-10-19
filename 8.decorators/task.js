function cachingDecoratorNew(func) {
  let cashe = [];
  function wrapper(...args){
    const hash = args.join(',');
    let idx = cashe.findIndex((id) => hash.id === id);
    if(idx !== -1){
      cashe[hash] = result;
      console.log(`Из кэша ${result} `);
      return result

    }
  }
    let result = func(...args);
    cashe.push(args);
      if(cashe.length > 5 ){
        cashe.shift(0);
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
      }
      return wrapper

}





function debounceDecoratorNew(func) {
  let timeOut;
  func(...rest);
  let flag = true;
return function (...rest){
  clearTimeout(timeOut);
  timeOut = setTimeout(() =>{
    if(!flag){
      func.call(this,...rest)
      flag = true
    }
  },ms )
};
}

function debounceDecorator2(func) {
  let count = 0;
  function wrapper(...args){
    wrapper.history.push(args);
    return func.call(this,...args); 

  }
}
