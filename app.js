var myLibrary = []

var form = document.getElementById("book-form")
function handleForm(event) { event.preventDefault() } 
form.addEventListener('submit', handleForm)

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

function clearForm(){
    form.reset()
}

function createBook(){
    var title = document.getElementById('title').value
    var author = document.getElementById('author').value
    var pages = document.getElementById('pages').value
    if(document.getElementById('read-check').checked){
        var read = true
    }else{
        var read = false
    }
    if(title != "" && author != "" && pages != ""){

        var book = new Book(title, author, pages, read)
        myLibrary.push(book)
        addNewBookToLibrary(book)
        clearForm()
    }
}


function addNewBookToLibrary(book){
    var bookTable = document.querySelector("#book-list")
    var btn = document.createElement("button")
    btn.innerHTML = "X"
    btn.classList.add('btn', 'btn-danger')
    addOnClickToButton(btn)
    var row = bookTable.insertRow(0)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    cell1.innerHTML = `${book.title}`
    cell2.innerHTML = `${book.author}`
    cell3.innerHTML = `${book.pages}`
    cell4.innerHTML = `${book.have_read}`
    cell5.appendChild(btn)
    saveLocalStorage()
}

function addBookToLibrary(){
    var bookTable = document.querySelector("#book-list")
    myLibrary.forEach((book) => {
        var btn = document.createElement("button")
        btn.innerHTML = "X"
        btn.classList.add('btn', 'btn-danger')
        addOnClickToButton(btn)
        var row = bookTable.insertRow(0)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)
        cell1.innerHTML = `${book.title}`
        cell2.innerHTML = `${book.author}`
        cell3.innerHTML = `${book.pages}`
        cell4.innerHTML = `${book.have_read}`
        cell5.appendChild(btn)
    })
    saveLocalStorage()
}

function saveLocalStorage(){
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function getLocalStorage(){
    if(localStorage.getItem("myLibrary") === null){
        myLibrary = []
    }
    else{
        var recovered = localStorage.getItem("myLibrary")
        myLibrary = JSON.parse(recovered) 
    }
    addBookToLibrary()
}


function addOnClickToButton(btn){
    btn.onclick = function(){
        var bookTable = document.querySelector("#book-list")
        var td = this.parentElement
        var tr = td.parentElement
        var index = tr.rowIndex
        var tableLength = bookTable.rows.length
        index = tableLength - index
        myLibrary.splice(index, 1)
        tr.parentElement.removeChild(tr)
        saveLocalStorage()
    }
}


function populateArray(){
    if (myLibrary.length == 0){
    hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
    rings = new Book("The Lord of the Rings", "J.R.R. Tolkien", 382, true);
    myLibrary.push(hobbit)
    myLibrary.push(rings)
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }
}


//populateArray()

getLocalStorage()









