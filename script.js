let myLibrary = [];
// Get the button that opens the modal
let addBook = document.getElementById("addBook");
let formSubmit=document.getElementById("submit");
let getData=document.getElementById('getData');


function Book(name, author, page) {
    this.name = name;
    this.author = author;
    this.page = page;
}

function addBookToLibrary() {
    let name=document.getElementById('bookName').value;
    let authorName=document.getElementById('bookName').value;
    let page=document.getElementById('page').value;
    const book = new Book(name, authorName, page);
    myLibrary.push(book);
}

function displayBooks() {
   

    console.log(myLibrary);

}
let modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
let span = document.getElementById("close");

// When the user clicks the button, open the modal 
addBook.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
console.log(span);
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


getData.onclick=function(){
    span.click();
    addBookToLibrary();
console.log(myLibrary);
}