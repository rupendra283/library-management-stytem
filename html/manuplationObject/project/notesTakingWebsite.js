console.log("welcome to notes");
showNotes()

// if you add note  add its on local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes()
})
//Function to show notes

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    //this is not working why?
    //  notesObj.foreach(function(element,index) {

    notesObj.forEach(function (element, index) {
        html += `
         <div class=" noteCard card my-2 mx-2" style="width: 18rem;">
    
         <div class="card-body">
             <h5 class="card-title">Note ${index + 1}</h5>
             <p class="card-text">${element}</p>
             <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
         </div>
     </div> `;

    });


    let notesElm = document.getElementById("notes");
    if (notes.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = "nothing to show"
    }
}

function deleteNote(index) {
    console.log("i am deleteing", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById("searchNotes");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log(inputVal);
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        
        // console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";

        } else {
            element.style.display = "none";
        }
        // console.log(cardTxt);

    });
})