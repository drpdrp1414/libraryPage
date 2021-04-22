var myLibrary = []





function Book(title, author, pages, have_read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;

    this.info = function(){
        var status = "";
        if(have_read == true){
            status = "already read"
        }else if(have_read == false){
            status = "not read yet"
        }
        return(title + " By " + author + ", " + pages + " pages, " + status)
    }
}

function addBookToLibrary(){
    var bookTable = document.querySelector("#book-list")
    //myLibrary.forEach((book) => )

    
}

hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
rings = new Book("The Lord of the Rings", "J.R.R. Tolkien", 382, false);

myLibrary.push(hobbit)

myLibrary.push(rings)
