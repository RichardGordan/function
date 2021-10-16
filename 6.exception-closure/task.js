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
           return parseCount(value);
        }catch(err){
            return err
        }
    }
    class Triangle{
        constructor(a,b,c){
            if(a + b < c || a + c < b || b + c < a){
                throw new Error('Треугольник с такими сторонами не существует.');
            }
            this.a = a;
            this.b = b;
            this.c = c;
        }
        getPerimetr(P){
           this.P = this.a + this.b + this.c;
            return this.P
        }
        getArea(S){
            let p = this.getPerimetr / 2;
             this.S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
             return this.S


        }
        }
    function getTriangle (a,b,c){
        try {
            return Triangle
        }catch(err){
            const missingTringle = {};
            missingTringle.getArea = () => {return "Ошибка! Треугольник не существует"};
            missingTringle.getPerimetr = () => {return "Ошибка! Треугольник не существует"};
            return missingTringle
           
        }

    }