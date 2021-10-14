class PrintEditionItem {
    constructor(name,relaseDate,pagesCount,state,type){
        this.name = name;
        this.relaseDate = relaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };
    fix (){
         this.state  *= 1.5
    }
set state(number){
    if(number === 0){
        this._state = 0;
    }else if(number > 100){
        this._state = 100;
    }else{
        this._state = number;
    }
}
    get state(){
        return this._state;
    }

    }
class Magazine extends PrintEditionItem {
    constructor(name,relaseDate,pagesCount,state,type){
        super(name,relaseDate,pagesCount,state);
        this.type = 'magazin';

    }
};
class Book extends PrintEditionItem {
    constructor(author,name,relaseDate,state,pagesCount,type,){
        super(name,relaseDate,pagesCount,state);
        this.type = 'books';
        this.author = author;

    }
};
class NovelBook extends Book {
    constructor(author,name,relaseDate,pagesCount,state,type){
        super(author,name,relaseDate,pagesCount,state,);
        this.type = 'novel';

    }
};
class FantasticBook extends Book {
    constructor(author,name,relaseDate,pagesCount,state,type){
        super(name,relaseDate,pagesCount,state,author);
        this.type = 'fantastic';

    }
};
class DetectiveBook extends Book {
    constructor(author,name,relaseDate,pagesCount,state,type){
        super(name,relaseDate,pagesCount,state,author);
        this.type = 'detective';

    }
};

class Library{
    constructor(name,books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state >= 30){
            return this.books.push(book)
        }else{
            return false
        }
    }
    findBookBy(type, value){
        let resultSerach = this.books.find(book => book.type === value );
        return (typeof resultSerach === 'object') ? resultSerach : null
    }
    giveBookByName(bookName){
        let searchBook = this.books.find(book => book.name === bookName);
        if(typeof searchBook === 'object'){
            this.books.splice(this.books.indexOf(searchBook),1)
            return searchBook
      }else{
          return null
      }
    }
}


class Student{
    #storage;
    constructor(name){
        this.name = name;
        this.#storage = {};
    }
    }
    