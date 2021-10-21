function cachingDecoratorNew(func) {
  let cashe = {};
  function wrapper(...args){
    const hash = args.join(',');
    if(hash in cashe){
      return 'Из кэша ' + cashe[hash];
    }else if(Odject.keys(cashe).length === 5){
     delete cashe[Object.keys(cashe)[0]]; 
     cashe[hash] = func(...args);
     return 'Вычисляем' + cashe[hash]
    }else{

    cahs[hash] = func(...args);
    return 'Вычисляем' + cashe[hash]
    

    }
  };
  return wrapper
    

}



function debounceDecoratorNew(func) {
  let flag = true;
return function (){
  if(flag){
    return
  }
  func();
    flag = true;
    setTimeout(() => {
      flag = false;
    }, ms);
};
}

function debounceDecorator2(func) {
  let count = 0;
  function wrapper(...args){
    wrapper.history.push(args);
    return func.call(this,...args); 

  }
}
