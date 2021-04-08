var Book = /** @class */ (function () {
    function Book(id, title, author, ratings, cost) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ratings = ratings;
        this.cost = cost;
    }
    Book.prototype.setId = function (id) {
        this.id = id;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setRatings = function (ratings) {
        this.ratings = ratings;
    };
    Book.prototype.setPrice = function (cost) {
        this.cost = cost;
    };
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getRatings = function () {
        return this.ratings;
    };
    Book.prototype.getPrice = function () {
        return this.cost;
    };
    return Book;
}());

let book = [];


var input = document.getElementById('searchBooks') ;
var btn = document.getElementById('btn');
var mainTable2 = document.getElementById('mainTable2');
let selection = document.getElementById('selection');

let count = 0;

class store{
    static clearFields(){
        mainTable2.innerText = "";
        // table = null;
    }

    static removeBooks(v){
        const books = store.getBooks();
        // books.splice(1);
        // console.log(books.splice(1));
        books.forEach((a, index) => {
            console.log(a,v);
            console.log(v + ' ' + a.id);
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
        // store.print("Book deleted Successfully");
    }

    static clearInput(){
        document.getElementById('id').innerHTML = '';
        document.getElementById('title').innerHTML = '';
        document.getElementById('author').innerHTML = '';
        document.getElementById('ratings').innerHTML = '';
        document.getElementById('cost').innerHTML = '';
    }

    // static print(message){
    //     const h3 = document.createElement('h3');
    //     h3.className = 'mes';
    //     h3.appendChild(document.createTextNode(message));
    //     const a = document.getElementById('button');
    //     const body = document.querySelector('body');
    //     const form = document.querySelector('#addBookForm');
    //     body.insertBefore(h3, form);
    //     setTimeout(() => document.querySelector('.mes').remove(), 2000);
    // }

    // static addTableData(i : any, table: HTMLTableElement){
    //     console.log(12);
    //     var row = `<tr>
    //     <th>Id</th>
    //     <th>Title</th>
    //     <th>Author</th>
    //     <th>Ratings</th>
    //     <th>Cost</th>`
    //     table.innerHTML += row;

    //     var row = `<tr>
    //     <td>${i.id}</td>
    //     <td>${i.title}</td>
    //     <td>${i.author}</td>
    //     <td>${i.ratings}</td>
    //     <td>${i.price}</td>
    //     </tr>`
    //     table.innerHTML += row;
    // }
    
    // static isBookPresent(book : Book[], options:any, value :any) {
    //     return book.filter(b => value == b[options]);
    // }
}
document.querySelector('.submit').addEventListener('click', (e)=> {
    e.preventDefault();
    console.log(12345);
    let options = selection.value;
    console.log(options);
        count++;
        const books=store.getBooks(); 
        // console.log(books);    
            if(options == "id"){
                for(let i of books){
                    // console.log(i.id+' '+i.author)
                    if(parseInt(input.value) == i.id){
                        // var row = `<tr>
                        // <th>Id</th>
                        // <th>Title</th>
                        // <th>Author</th>
                        // <th>Ratings</th>
                        // <th>Actions</th>`
                        // table2.innerHTML += row;
            
                        var row = `<tr>
                        <td>${i.id}</td>
                        <td>${i.title}</td>
                        <td>${i.author}</td>
                        <td>${i.ratings}</td>
                        <td>${i.cost}</td>
                        </tr>`
                        mainTable2.innerHTML += row;
                    }
                    if(count > 0){
                        count = 0;
                        mainTable2.innerHTML = '';
                       
                    }
                }
                input.value = '';            
            }
            
            else if(options == "title"){
                console.log(input.value)
                console.log(options);
                for(let i of books){
                    if(input.value === i.title){
                        console.log(input.value)
                        // var row = `<tr>
                        // <th>Id</th>
                        // <th>Title</th>
                        // <th>Author</th>
                        // <th>Ratings</th>
                        // <th>Actions</th>`
                        // mainTable.innerHTML += row;
            
                        var row = `<tr>
                        <td>${i.id}</td>
                        <td>${i.title}</td>
                        <td>${i.author}</td>
                        <td>${i.ratings}</td>
                        <td>${i.cost}</td>
                        </tr>`
                        mainTable2.innerHTML += row;
                    }
                    if(count > 0){
                        count = 0;
                        mainTable2.innerHTML = '';
                    }
                }
                input.value = '';
            }
    
            else if(options == "author"){
                for(let i of books){
                    if(input.value == i.author){
                        // var row = `<tr>
                        // <th>Id</th>
                        // <th>Title</th>
                        // <th>Author</th>
                        // <th>Ratings</th>
                        // <th>Actions</th>`
                        // table.innerHTML += row;
            
                        var row = `<tr>
                        <td>${i.id}</td>
                        <td>${i.title}</td>
                        <td>${i.author}</td>
                        <td>${i.ratings}</td>
                        <td>${i.cost}</td>
                        </tr>`
                        mainTable2.innerHTML += row;
                    }
                    if(count > 0){
                        count = 0;
                        mainTable2.innerHTML = '';
                    }
                }
                input.value = '';    
            }
    
            else if(options == "ratings"){
                for(let i of books){
                    if(parseInt(input.value) >= i.ratings){
                        // var row = `<tr>
                        // <th>Id</th>
                        // <th>Title</th>
                        // <th>Author</th>
                        // <th>Ratings</th>
                        // <th>Actions</th>`
                        // table.innerHTML += row;
            
                        var row = `<tr>
                        <td>${i.id}</td>
                        <td>${i.title}</td>
                        <td>${i.author}</td>
                        <td>${i.ratings}</td>
                        <td>${i.cost}</td>
                        </tr>`
                        mainTable2.innerHTML += row;
                    }
                    if(count > 0){
                        count = 0;
                        mainTable2.innerHTML = '';
                    }
                }
                input.value = '';
            }
            
    
            else if(options == "cost"){
                let input = document.createElement('input');
                input.setAttribute("id", "inpt2");
                input.setAttribute("type","number");
                let inpt2 = document.getElementById('inpt2');
                document.body.prepend(input);
                for(let i of books){
                    if(parseInt(input.value) >= i.cost && parseInt(inpt2.value)<=i.cost){
                            // var row = `<tr>
                            // <th>Id</th>
                            // <th>Title</th>
                            // <th>Author</th>
                            // <th>Ratings</th>
                            // <th>Actions</th>`
                            // table.innerHTML += row;
                
                            var row = `<tr>
                            <td>${i.id}</td>
                            <td>${i.title}</td>
                            <td>${i.author}</td>
                            <td>${i.ratings}</td>
                            <td>${i.cost}</td>
                            </tr>`
                            mainTable2.innerHTML += row;
                        }
                        if(count > 0){
                            count = 0;
                            mainTable2.innerHTML = '';
                        }
                    }
                    input.value = '';
                }
})


// ************************************addbooks*******************************************

let id1 = document.getElementById('id');
let title = document.getElementById('title');
let author = document.getElementById('author');
let ratings = document.getElementById('ratings');
let cost = document.getElementById('cost');
let h3 = document.getElementById('h3');
let mainTable1 = document.getElementById('mainTable1');
// let table1 = document.getElementById('table');
let form = document.getElementById('addBookForm');
// let input1 = getElementsByTagName('input');
// var tbodyRef = document.getElementById('mainTable');
// const row = document.createElement('tr') as HTMLTableRowElement;
// const form = document.getElementById('addBookForm') as HTMLFormElement;
// function handler(event){
//     event.preventDefault()
// }
// form.addEventListener('sbmit', handler);
mainTable1.addEventListener('click', (e) => {
    console.log(e.target);
    store.delete(e.target);
    const v = e.target.parentElement.parentElement.children[0].textContent;
    console.log(v);
    store.removeBooks(v);
})

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
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

    mainTable1.innerHTML += row;
    // store.print("Book added successfully");
    store.localAdd(bk);
    // location.href="index.html";
    form.reset();
    store.clearInput();
})

    // console.log(mainTable);
    // console.log(id1.value);
    
  
    // store.clearInput();
    // mainTable.appendChild(row);
    // mainTable.append(row)
    // console.log(row);
    // console.log(mainTable.innerHTML);
   
    // console.log(mainTable.innerHTML);


   

    // var row = `<tr>
    // <td>${id1.value}</td>
    // <td>${title.value}</td>
    // <td>${author.value}</td>
    // <td>${ratings.value}</td>
    // <td>${cost.value}</td> </tr>`
    // console.log(row.value);
    // mainTable.innerHTML += row;
    // mainTable.appendChild(row);
    // book.push(bk);
    // console.log(book)
    // h3.innerHTML = "Successfully added";




   

