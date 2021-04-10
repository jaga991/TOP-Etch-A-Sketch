//global variable
let myLibrary = [];
let titleInput = document.getElementById('title-input');
let authorInput = document.getElementById('author-input');
let totalPagesInput = document.getElementById('total-pages-input');
let pagesReadInput = document.getElementById('pages-read-input');
let addBtn = document.getElementById('add-btn');
let deleteBtnArr = [...document.getElementsByClassName('deleteBtn')];

//error handler
function inputErrorHandler(){
    let errorCase;
    errorCase = [];
    if(titleInput.value == ""){
        errorCase.push("Title empty");
        if(titleInput.parentElement.children[0].children.length == 0){
            let titleEmptyErrorElement = document.createElement('span');
            let titleEmptyErrorText = document.createTextNode("Title cannot be left empty");
            titleEmptyErrorElement.appendChild(titleEmptyErrorText);
            titleInput.parentElement.children[0].appendChild(titleEmptyErrorElement);
            setTimeout(() => {titleEmptyErrorElement.remove()}, 3000);
        }
    }else{
        for(let i = 0; i < myLibrary.length; i++){
            if(myLibrary[i].title == titleInput.value && myLibrary[i].author == authorInput.value){
                errorCase.push("Book already exist");
                if( titleInput.parentElement.children[0].children.length == 0){
                    let titleExistErrorElement = document.createElement('span');
                    let titleExistErrorText = document.createTextNode("This book already exist in the library");
                    titleExistErrorElement.appendChild(titleExistErrorText);
                    titleInput.parentElement.children[0].appendChild(titleExistErrorElement);
                    setTimeout(() => {titleExistErrorElement.remove()}, 3000);
                }
            }
        }
    }
    if(authorInput.value == ""){
        errorCase.push("Author empty")
        if(authorInput.parentElement.children[0].children.length == 0){
            let authorEmptyErrorElement = document.createElement('span');
            let authorEmptyErrorText = document.createTextNode("Author cannot be left empty");
            authorEmptyErrorElement.appendChild(authorEmptyErrorText);
            authorInput.parentElement.children[0].appendChild(authorEmptyErrorElement);
            setTimeout(() => {authorEmptyErrorElement.remove()}, 3000);
        }
    }
    if(totalPagesInput.value < pagesReadInput.value){
        errorCase.push("total pages less than pages read");
        if(totalPagesInput.parentElement.children[0].children.length == 0){
            let pagesErrorElement = document.createElement('span');
            let pagesErrorText = document.createTextNode("Pages of book cannot be less than pages read");
            pagesErrorElement.appendChild(pagesErrorText);
            totalPagesInput.parentElement.children[0].appendChild(pagesErrorElement);
            setTimeout(() => {pagesErrorElement.remove()}, 3000);
        }
    }

    if(errorCase.length == 0){
        console.log("no error");
        return false;
    }else{
        return true;
    }
};

// constructor function to create said book
function BookCard(title, author, totalPages, pagesRead) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
};

function updateLibrary(targetTitle) {
    let updatedList = []
    for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].title != targetTitle){
            updatedList.push(myLibrary[i]);
        }
    }

    myLibrary = [...updatedList];
    localStorage.setItem("library", JSON.stringify(myLibrary));
};

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
};

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
};
function main(){
    console.log(localStorage);
    //get myLibrary form LocalStorage and go through addBookToLibrary() once
    if(localStorage.getItem("library")){
        myLibrary = JSON.parse(localStorage.getItem("library"));
        addBookToLibrary();
        createDeleteBtn();
    }

    document.getElementById('add-btn').addEventListener('click', (e) => {
        //if(running through error handling function, no error,)
        if(!inputErrorHandler()){
            document.getElementById('library-container').innerHTML = "";
            myLibrary.push(new BookCard(titleInput.value, authorInput.value, totalPagesInput.value, pagesReadInput.value));
            addBookToLibrary();
            createDeleteBtn();      
        }
    })
};

main();

