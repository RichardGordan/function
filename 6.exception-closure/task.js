function parseCount(value) {
    const number = Number.parseInt(value,10);
    if(number){
        return number
    }else {
        throw new Error('Невалидное значение');
    }
    }
    
    function validateCount(value){
        try{
           return parseCount(value);
        }catch(err){
            return err
        }
    }
    
    class Triangle {
        constructor(a, b, c) {
            if (((a + b) < c) || ((a + c) < b) || ((b + c < a))) {
                throw new Error('Треугольник с такими сторонами не существует');
            }
            this.leftRib = a;
            this.rigthtRib = b;
            this.basicRip = c;
        }
        getPerimeter() {
            return this.leftRib + this.rigthtRib + this.basicRip;
    
        }

        getArea() {
            const p = this.getPerimeter() / 2;
            return Number(Math.sqrt(p * (p - this.leftRib) * (p - this.rigthtRib) * (p - this.basicRip)).toFixed(3));
    
    
    
        }
    }
    
    function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c);
        } catch (err) {
            const missingTringle = new Object();
            missingTringle.getArea = function() {return "Ошибка! Треугольник не существует";};
            missingTringle.getPerimeter = function () {return "Ошибка! Треугольник не существует";};
            return missingTringle;
    
        }
    
    }