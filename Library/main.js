//global variable
let myLibrary = [];
let titleInput = document.getElementById('title-input');
let authorInput = document.getElementById('author-input');
let totalPagesInput = document.getElementById('total-pages-input');
let pagesReadInput = document.getElementById('total-pages-input');
let addBtn = document.getElementById('add-btn');

// constructor function to create said book
function BookCard(title, author, totalPages, pagesRead) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
}

function addBookToLibrary() {
    for(let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div')
        card.className += "book-card";

        let cardTitleSubcontainer = document.createElement('div');
        let cardTitle = document.createElement('h1');
        cardTitle.innerText = "TITLE"
        let cardTitleAns = document.createElement('p');
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

        document.getElementById('library-container').appendChild(card);
    }
}
function main(){
    //get myLibrary form LocalStorage and go through addBookToLibrary() once 

    document.getElementById('add-btn').addEventListener('click', (e) => {
        //if(running through error handling function, no error,)
        document.getElementById('library-container').innerHTML = "";
        myLibrary.push(new BookCard(titleInput.value, authorInput.value, totalPagesInput.value, pagesReadInput.value));
        addBookToLibrary();


        //store myLibrary in localstorage somehow
    })
}

main();

