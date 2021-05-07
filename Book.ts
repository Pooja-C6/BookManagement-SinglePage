export class Book{
    id : number;
    title : string;
    author : string;
    ratings : number;
    price : number;
    constructor(id : number, title : string, author : string, ratings : number, price : number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.ratings = ratings;
        this.price = price;
    }

    setId(id:number){
        this.id = id;
    }

    setTitle(title:string){
        this.title = title;
    }

    setAuthor(author:string){
        this.author = author;
    }

    setRatings(ratings:number){
        this.ratings = ratings;
    }

    setPrice(price:number){
        this.price = price;
    }

    getId(){
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    getAuthor(){
        return this.author
    }

    getRatings(){
        return this.ratings;
    }

    getPrice(){
        return this.price;
    }
}
