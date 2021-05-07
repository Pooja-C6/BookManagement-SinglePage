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
var book1 = new Book(1, "The Piligrims Progress", "John Buyan", 3, 500);
var book2 = new Book(2, "Robinson Crusoe", "Daniel Defoe", 3.5, 600);
var book3 = new Book(3, "Gullivers Travel's", "Johnathan", 4, 400);
var book4 = new Book(4, "Clarissa", "Samuel Richardson", 5, 200);
var book5 = new Book(5, "The Book thief", "Markus Zusak", 3.8, 100);
var book = [book1, book2, book3, book4, book5];
var input = document.getElementById('searchBooks');
var btn = document.getElementById(' btn');
var table = document.getElementById('table');
var selection = document.getElementById('selection');
var count = 0;
var store = /** @class */ (function () {
    function store() {
    }
    store.clearFields = function () {
        table.innerText = "";
        // table = null;
    };
    store.removeBooks = function (v) {
        var books = store.getBooks();
        books.forEach(function (a, index) {
            if (a.id === v) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('booksStore', JSON.stringify(books));
    };
    store.getBooks = function () {
        var books; //bookstore-key,   
        if (localStorage.getItem('booksStore') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('booksStore'));
        }
        return books;
    };
    store.localAdd = function (bk) {
        var books = store.getBooks();
        books.push(bk);
        localStorage.setItem('booksStore', JSON.stringify(books));
    };
    store["delete"] = function (el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
        store.print("Book deleted Successfully");
    };
    store.clearInput = function () {
        document.getElementById('id').innerHTML = '';
        document.getElementById('title').innerHTML = '';
        document.getElementById('author').innerHTML = '';
        document.getElementById('ratings').innerHTML = '';
        document.getElementById('cost').innerHTML = '';
    };
    store.print = function (message) {
        var h3 = document.createElement('h3');
        h3.className = 'mes';
        h3.appendChild(document.createTextNode(message));
        var a = document.getElementById('button');
        var body = document.querySelector('body');
        var form = document.querySelector('#addBookForm');
        body.insertBefore(h3, form);
        setTimeout(function () { return document.querySelector('.mes').remove(); }, 2000);
    };
    return store;
}());
function search() {
    var options = selection.value;
    console.log(selection.value);
    count++;
    var books = store.getBooks(); 
    if (options == "id") {
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var i = books_1[_i];
            console.log(i.id + ' ' + i.author);
            if (parseInt(input.value) == i.id) {
                var row = "<tr>\n                    <th>Id</th>\n                    <th>Title</th>\n                    <th>Author</th>\n                    <th>Ratings</th>\n                    <th>Actions</th>";
                table.innerHTML += row;
                var row = "<tr>\n                    <td>" + i.id + "</td>\n                    <td>" + i.title + "</td>\n                    <td>" + i.author + "</td>\n                    <td>" + i.ratings + "</td>\n                    <td>" + i.cost + "</td>\n                    </tr>";
                table.innerHTML += row;
            }
            if (count > 0) {
                count = 0;
                store.clearFields();
            }
        }
    }
    else if (options == "title") {
        for (var _a = 0, book_1 = book; _a < book_1.length; _a++) {
            var i = book_1[_a];
            if (input.value === i.title) {
                var row = "<tr>\n                    <th>Id</th>\n                    <th>Title</th>\n                    <th>Author</th>\n                    <th>Ratings</th>\n                    <th>Actions</th>";
                table.innerHTML += row;
                var row = "<tr>\n                    <td>" + i.id + "</td>\n                    <td>" + i.title + "</td>\n                    <td>" + i.author + "</td>\n                    <td>" + i.ratings + "</td>\n                    <td>" + i.cost + "</td>\n                    </tr>";
                table.innerHTML += row;
            }
            if (count > 0) {
                count = 0;
                store.clearFields();
            }
        }
    }
    else if (options == "author") {
        for (var _b = 0, book_2 = book; _b < book_2.length; _b++) {
            var i = book_2[_b];
            if (input.value == i.author) {
                var row = "<tr>\n                    <th>Id</th>\n                    <th>Title</th>\n                    <th>Author</th>\n                    <th>Ratings</th>\n                    <th>Actions</th>";
                table.innerHTML += row;
                var row = "<tr>\n                    <td>" + i.id + "</td>\n                    <td>" + i.title + "</td>\n                    <td>" + i.author + "</td>\n                    <td>" + i.ratings + "</td>\n                    <td>" + i.cost + "</td>\n                    </tr>";
                table.innerHTML += row;
            }
            if (count > 0) {
                count = 0;
                store.clearFields();
            }
        }
    }
    else if (options == "ratings") {
        for (var _c = 0, book_3 = book; _c < book_3.length; _c++) {
            var i = book_3[_c];
            if (parseInt(input.value) >= i.ratings) {
                var row = "<tr>\n                    <th>Id</th>\n                    <th>Title</th>\n                    <th>Author</th>\n                    <th>Ratings</th>\n                    <th>Actions</th>";
                table.innerHTML += row;
                var row = "<tr>\n                    <td>" + i.id + "</td>\n                    <td>" + i.title + "</td>\n                    <td>" + i.author + "</td>\n                    <td>" + i.ratings + "</td>\n                    <td>" + i.cost + "</td>\n                    </tr>";
                table.innerHTML += row;
            }
            if (count > 0) {
                count = 0;
                store.clearFields();
            }
        }
    }
    else if (options == "cost") {
        var input_1 = document.createElement('input');
        input_1.setAttribute("id", "inpt2");
        input_1.setAttribute("type", "number");
        var inpt2 = document.getElementById('inpt2');
        document.body.prepend(input_1);
        for (var _d = 0, book_4 = book; _d < book_4.length; _d++) {
            var i = book_4[_d];
            if (parseInt(input_1.value) >= i.cost && parseInt(inpt2.value) <= i.cost) {
                var row = "<tr>\n                        <th>Id</th>\n                        <th>Title</th>\n                        <th>Author</th>\n                        <th>Ratings</th>\n                        <th>Actions</th>";
                table.innerHTML += row;
                var row = "<tr>\n                        <td>" + i.id + "</td>\n                        <td>" + i.title + "</td>\n                        <td>" + i.author + "</td>\n                        <td>" + i.ratings + "</td>\n                        <td>" + i.cost + "</td>\n                        </tr>";
                table.innerHTML += row;
            }
            if (count > 0) {
                count = 0;
                store.clearFields();
            }
        }
    }
}
// ************************************addbooks*******************************************
var id1 = document.getElementById('id');
var title = document.getElementById('title');
var author = document.getElementById('author');
var ratings = document.getElementById('ratings');
var cost = document.getElementById('cost');
var h3 = document.getElementById('h3');
var mainTable = document.getElementById('mainTable');
var table1 = document.getElementById('table');
var form = document.getElementById('addBookForm');
table1.addEventListener('click', function (e) {
    console.log(e.target);
    store["delete"](e.target);
    var v = e.target.parentElement.parentElement.children[0].textContent;
    console.log(v);
    store.removeBooks(v);
});
function addBooks() {
    var bk = new Book(parseInt(id1.value), title.value, author.value, parseInt(ratings.value), parseInt(cost.value));
    book.push(bk);
    console.log(book);
    var row = "<tr>\n    <td>" + id1.value + "</td>\n    <td>" + title.value + "</td>\n    <td>" + author.value + "</td>\n    <td>" + ratings.value + "</td>\n    <td>" + cost.value + "</td>\n    <td> <a href=\"#\" class=\"delete\" style=\"color: red;\">&Cross;</a></td>\n    </tr>";
    table1.innerHTML += row;
    store.print("Book added successfully");
    store.localAdd(bk);
    store.clearInput();
    
}

