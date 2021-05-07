class Book{
    id : number;
    title : string;
    author : string;
    ratings : number;
    cost : number;
    constructor(id : number, title : string, author : string, ratings : number, cost : number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.ratings = ratings;
        this.cost = cost;
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

    setPrice(cost:number){
        this.cost = cost;
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
        return this.cost;
    }
}


let book1 = new Book(1, "The Piligrims Progress", "John Buyan", 3, 500);
let book2 = new Book(2, "Robinson Crusoe", "Daniel Defoe", 3.5, 600);
let book3 = new Book(3, "Gullivers Travel's", "Johnathan", 4, 400);
let book4 = new Book(4, "Clarissa", "Samuel Richardson", 5, 200);
let book5 = new Book(5, "The Book thief", "Markus Zusak", 3.8, 100);

let book = [book1, book2, book3, book4, book5];


var input = document.getElementById('searchBooks') as HTMLInputElement;
var btn = document.getElementById(' btn')  as HTMLButtonElement;
var table = document.getElementById('table') as HTMLTableElement;
let selection = document.getElementById('selection') as HTMLInputElement;

let count = 0;

class store{
    static clearFields(){
        table.innerText = "";
        // table = null;
    }

    static removeBooks(v){
        const books = store.getBooks();
        books.forEach((a, index) => {
            if(a.id === v){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('booksStore', JSON.stringify(books));
    }

    static getBooks(){
        let books;//bookstore-key,   
        if(localStorage.getItem('booksStore')===null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('booksStore'));
        }
        return books;
    }

    static localAdd(bk){
        const books = store.getBooks();
        books.push(bk);
        localStorage.setItem('booksStore', JSON.stringify(books));
    }

    static delete(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
            
        } 
        store.print("Book deleted Successfully");
    }

    static clearInput(){
        document.getElementById('id').innerHTML = '';
        document.getElementById('title').innerHTML = '';
        document.getElementById('author').innerHTML = '';
        document.getElementById('ratings').innerHTML = '';
        document.getElementById('cost').innerHTML = '';
    }

    static print(message){
        const h3 = document.createElement('h3');
        h3.className = 'mes';
        h3.appendChild(document.createTextNode(message));
        const a = document.getElementById('button');
        const body = document.querySelector('body');
        const form = document.querySelector('#addBookForm');
        body.insertBefore(h3, form);
        setTimeout(() => document.querySelector('.mes').remove(), 2000);
    }
}

function search(){
let options = selection.value;
console.log(selection.value);
    count++;
    const books=store.getBooks();     
        if(options == "id"){
            for(let i of books){
                console.log(i.id+' '+i.author)
                if(parseInt(input.value) == i.id){
                       
                    var row = `<tr>
                    <td>${i.id}</td>
                    <td>${i.title}</td>
                    <td>${i.author}</td>
                    <td>${i.ratings}</td>
                    <td>${i.cost}</td>
                    </tr>`
                    table.innerHTML += row;
                }
                if(count > 0){
                    count = 0;
                    store.clearFields();
                }
            }  
        }
        
        else if(options == "title"){
            for(let i of book){
                if(input.value === i.title){
                           
                    var row = `<tr>
                    <td>${i.id}</td>
                    <td>${i.title}</td>
                    <td>${i.author}</td>
                    <td>${i.ratings}</td>
                    <td>${i.cost}</td>
                    </tr>`
                    table.innerHTML += row;
                }
                if(count > 0){
                    count = 0;
                    store.clearFields();
                }
            }
            
        }

        else if(options == "author"){
            for(let i of book){
                if(input.value == i.author){
                           
                    var row = `<tr>
                    <td>${i.id}</td>
                    <td>${i.title}</td>
                    <td>${i.author}</td>
                    <td>${i.ratings}</td>
                    <td>${i.cost}</td>
                    </tr>`
                    table.innerHTML += row;
                }
                if(count > 0){
                    count = 0;
                    store.clearFields();
                }
            }    
        }

        else if(options == "ratings"){
            for(let i of book){
                if(parseInt(input.value) >= i.ratings){        
                    var row = `<tr>
                    <td>${i.id}</td>
                    <td>${i.title}</td>
                    <td>${i.author}</td>
                    <td>${i.ratings}</td>
                    <td>${i.cost}</td>
                    </tr>`
                    table.innerHTML += row;
                }
                if(count > 0){
                    count = 0;
                    store.clearFields();
                }
            }
        }
        

        else if(options == "cost"){
            let input = document.createElement('input');
            input.setAttribute("id", "inpt2");
            input.setAttribute("type","number");
            let inpt2 = document.getElementById('inpt2') as HTMLInputElement;
            document.body.prepend(input);
            for(let i of book){
                if(parseInt(input.value) >= i.cost && parseInt(inpt2.value)<=i.cost){           
                        var row = `<tr>
                        <td>${i.id}</td>
                        <td>${i.title}</td>
                        <td>${i.author}</td>
                        <td>${i.ratings}</td>
                        <td>${i.cost}</td>
                        </tr>`
                        table.innerHTML += row;
                    }
                    if(count > 0){
                        count = 0;
                        store.clearFields();
                    }
                }
            }
        }        

// ************************************addbooks*******************************************

let id1 = document.getElementById('id') as HTMLInputElement;
let title = document.getElementById('title') as HTMLInputElement;
let author = document.getElementById('author') as HTMLInputElement;
let ratings = document.getElementById('ratings') as HTMLInputElement;
let cost = document.getElementById('cost') as HTMLInputElement;
let h3 = document.getElementById('h3') as HTMLElement;
let mainTable = document.getElementById('mainTable')!;
let table1 = document.getElementById('table')!;
let form = document.getElementById('addBookForm')!;
table1.addEventListener('click', (e: Event) => {
    console.log(e.target);
    store.delete(e.target);
    const v = e.target.parentElement.parentElement.children[0].textContent;
    console.log(v);
    store.removeBooks(v);
})

function addBooks(){
    let bk = new Book(parseInt(id1.value),title.value,author.value,parseInt(ratings.value),parseInt(cost.value));
    book.push(bk);
    console.log(book);
    var row =  `<tr>
    <td>${id1.value}</td>
    <td>${title.value}</td>
    <td>${author.value}</td>
    <td>${ratings.value}</td>
    <td>${cost.value}</td>
    <td> <a href="#" class="delete" style="color: red;">&Cross;</a></td>
    </tr>`;

    table1.innerHTML += row;
    store.print("Book added successfully");
    store.localAdd(bk);
    store.clearInput();
}

   

