//global variable
let myLibrary = [];
let titleInput = document.getElementById('title-input');
let authorInput = document.getElementById('author-input');
let totalPagesInput = document.getElementById('total-pages-input');
let pagesReadInput = document.getElementById('total-pages-input');
let addBtn = document.getElementById('add-btn');
let deleteBtnArr = [...document.getElementsByClassName('deleteBtn')];

// constructor function to create said book
function BookCard(title, author, totalPages, pagesRead) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
}

function updateLibrary(targetTitle) {
    let updatedList = []
    for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].title != targetTitle){
            updatedList.push(myLibrary[i]);
        }
    }

    myLibrary = [...updatedList];
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

function addBookToLibrary() {
    for(let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.className += "book-card";

        let deleteBtn = document.createElement('button');
        deleteBtn.type = "button"
        deleteBtn.className += "deleteBtn";
        deleteBtn.innerText = "X";

        let cardTitleSubcontainer = document.createElement('div');
        cardTitleSubcontainer.className += "card-title-subcontainer";
        let cardTitle = document.createElement('h1');
        cardTitle.innerText = "TITLE"
        let cardTitleAns = document.createElement('p');
        cardTitleAns.className += "card-title-ans"
        cardTitleAns.innerText = myLibrary[i].title;
        cardTitleSubcontainer.appendChild(cardTitle);
        cardTitleSubcontainer.appendChild(cardTitleAns);

        let cardAuthorSubcontainer = document.createElement('div');
        let cardAuthor = document.createElement('h1');
        cardAuthor.innerText = "AUTHOR"
        let cardAuthorAns = document.createElement('p');
        cardAuthorAns.innerText = myLibrary[i].author;
        cardAuthorSubcontainer.appendChild(cardAuthor);
        cardAuthorSubcontainer.appendChild(cardAuthorAns);

        let cardTotalPagesSubcontainer = document.createElement('div');
        let cardTotalPages = document.createElement('h1');
        cardTotalPages.innerText = "TOTAL PAGES"
        let cardTotalPagesAns = document.createElement('p');
        cardTotalPagesAns.innerText = myLibrary[i].totalPages;
        cardTotalPagesSubcontainer.appendChild(cardTotalPages);
        cardTotalPagesSubcontainer.appendChild(cardTotalPagesAns);

        let cardPagesReadSubcontainer = document.createElement('div');
        let cardPagesRead = document.createElement('h1');
        cardPagesRead.innerText = "PAGES READ"
        let cardPagesReadAns = document.createElement('p');
        cardPagesReadAns.innerText = myLibrary[i].pagesRead;
        cardPagesReadSubcontainer.appendChild(cardPagesRead);
        cardPagesReadSubcontainer.appendChild(cardPagesReadAns);

        card.appendChild(cardTitleSubcontainer);
        card.appendChild(cardAuthorSubcontainer);
        card.appendChild(cardTotalPagesSubcontainer);
        card.appendChild(cardPagesReadSubcontainer);

        card.appendChild(deleteBtn);

        document.getElementById('library-container').appendChild(card);
        localStorage.setItem("library", JSON.stringify(myLibrary));
    }
}

function createDeleteBtn(){
    deleteBtnArr = [...document.getElementsByClassName('deleteBtn')];
    deleteBtnArr.forEach(function(element){
        element.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("deleteBtn Clicked");
            console.log(e.target.parentNode.getElementsByClassName('card-title-ans')[0].innerText);
            updateLibrary(e.target.parentNode.getElementsByClassName('card-title-ans')[0].innerText);
            e.target.parentNode.remove();
        })
    })
}
function main(){
    console.log(localStorage);
    //get myLibrary form LocalStorage and go through addBookToLibrary() once
    if(localStorage.getItem("library")){
        myLibrary = JSON.parse(localStorage.getItem("library"));
        addBookToLibrary();
        createDeleteBtn();
    }
    // let test = [{"title": "lorem"}, {"title": "ipsum"}, {"title": "parvic"}]
    // localStorage.removeItem("library");
    // console.log(JSON.parse(localStorage.getItem("library"))); 

    document.getElementById('add-btn').addEventListener('click', (e) => {
        //if(running through error handling function, no error,)
        document.getElementById('library-container').innerHTML = "";
        myLibrary.push(new BookCard(titleInput.value, authorInput.value, totalPagesInput.value, pagesReadInput.value));
        addBookToLibrary();
        console.log(myLibrary);

        createDeleteBtn();
    })
}

main();

