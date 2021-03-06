// console.log("hfiuwfi");

//Constructor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

//display constructor
function Display() {

}

//add method to display prototype

Display.prototype.add = function (book) {
    console.log("adding ui");
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                <td> ${book.name} </td>
                <td> ${book.author} </td>
                <td> ${book.type} </td>
                        </tr>`;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();

}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById("message");
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message!</strong>${displaymessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`
    setTimeout(function () {
        message.innerHTML = ""

    }, 2000);

}


let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();

    // console.log("you have submited library form");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    // console.log(bookname);
    if (fiction.checked) {
        type = fiction.value
    } else if (programming.checked) {
        type = programming.value;

    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);

    console.log(book);
    let display = new Display();
    display.clear();

    if (display.validate(book)) {
        display.add(book);
        display.show('success', "your book has been suuccesful added")

    } else {
        display.show('danger', "sorry you can not add this no")

    }

}