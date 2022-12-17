let myLibrary = [];
// Get the button that opens the modal
let addBook = document.getElementById("addBook");
let formSubmit = document.getElementById("submit");
//ouput for display and getting data
let getData = document.getElementById('getData');
let output = document.getElementById('output');

/* book object to add informationa about book*/
function Book(name, author, page) {
  this.name = name;
  this.author = author;
  this.page = page;
}

/* to enable read status for books*/

Book.prototype.setRead=function(){

}

/* get info about book from form and then push into array*/
function addBookToLibrary() {
  let name = document.getElementById('bookName').value;
  let author = document.getElementById('authorName').value;
  let page = document.getElementById('page').value;
  const book = new Book(name, author, page);
  myLibrary.push(book);
}



function displayBooks() {

  /* this code prevents duplciation of already existing books by deleting everything from display div*/
  if (output != null) {
    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }
  }
  for (const i in myLibrary) {

    const content = document.createElement('div');
    const delButton = document.createElement('button');
    const statusButton = document.createElement('button');
    delButton.classList.add('delete');
    delButton.classList.add(i);
    content.classList.add('content');
    content.textContent = myLibrary[i].name + " " + myLibrary[i].author;
    delButton.textContent='Delete';
    
    statusButton.classList.add('statusButton');
    statusButton.classList.add(i);
    output.append(content, delButton, statusButton);
   
  }
deleteToggle();
}
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementById("close");

// When the user clicks the button, open the modal 
addBook.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


getData.onclick = function () {
  span.click();
 // event.preventDefault();
  addBookToLibrary();

  displayBooks();

}

function deleteBook(index){
  myLibrary.splice(index,1);
  displayBooks();
}

function deleteToggle(){
const buttons = document.querySelectorAll('button');
const checkbox=document.querySelectorAll('checkbox');
console.log(checkbox);
console.log(buttons);

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {



  // and for each one we add a 'click' listener
  if(output.contains(button)){
  button.addEventListener('click', () => {
    deleteBook(button.className.split(" ").pop());
  });


}
});

}


