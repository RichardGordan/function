class PrintEditionItem {
    constructor(name,relaseDate,pagesCount,state,type){
        this.name = name;
        this.relaseDate = relaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };
    fix (){
        return this.state * 1.5
    }
set state(number){
    if(number === 0){
        this.state = 0;
    }else if(number > 100){
        this.state = 100;
    }else{
        this.state = number;
    }
    get state(){
        return this.state;
    }
}
    }
class Magazine extends PrintEditionItem {
    constructor(){
        super(name);
        super(relaseDate);
        super(pagesCount);
        super(state);
        this.type = 'magazin';

    }
};
class Book extends PrintEditionItem {
    constructor(author){
        super(name);
        super(relaseDate);
        super(pagesCount);
        super(state);
        this.type = 'books';
        this.author = author;

    }
};
class NovelBook extends Book {
    constructor(){
        super(name);
        super(relaseDate);
        super(pagesCount);
        super(state);
        super(author)
        this.type = 'novel';

    }
};
class FantasticBook extends Book {
    constructor(){
        super(name);
        super(relaseDate);
        super(pagesCount);
        super(state);
        super(author)
        this.type = 'fantastic';

    }
};
class DetectiveBook extends Book {
    constructor(){
        super(name);
        super(relaseDate);
        super(pagesCount);
        super(state);
        super(author)
        this.type = 'detective';

    }
};
