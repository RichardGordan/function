function parseCount(value) {
const number = Number.parseInt(value,10);
if(number){
    return number
}else if(isNaN(number) === true){
    throw new Error('Невалидное значение');
}
}
parseCount(123);
function validateCount(value){
    try{
        return parseCount
    }catch(err){
        console.log('Ошибка');
    }
}