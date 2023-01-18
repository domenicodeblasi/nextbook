"use strict";

import "../scss/styles.scss";
import getLogo from "../imgs/logo/logo.js";
import {placeholderArray, randomPlaceholderIndex} from "./dinamicPlaceholder.js";
import {formStartLoading, formStopLoading} from "./loading.js";
import _ from "lodash";

// DOM elements
const logoContainer = document.querySelector(".logo-container");
const form = document.querySelector("#form");
const searchBar = document.querySelector(".search-bar");
const searchResultsCloseBtn = document.querySelector("#search-results-section > button");
const searchResultsContainer = document.querySelector(".results-container");
const bookContainer = document.querySelector(".book-container");
const bookSectionCloseBtn = document.querySelector("#book-section > button");
let windowHeight = window.innerHeight;
let arrayResults;
let numberOfPages;
let indexContainer;
let index;
let indexBtns;
let page;
let arrayResultsChunks;
let currentPage = 1;
let card;
let authors;
let authorsArray;
let bookKey;
let bookJson;
let bookObject;

// let's set the height of the window on resize event
window.addEventListener("resize", () => {
    windowHeight = window.innerHeight;
});


// colors
const blue = "rgb(69, 68, 151)";

logoContainer.prepend(getLogo());

// focus event on search-bar
searchBar.addEventListener("focus", (e) => {
    e.preventDefault();
    e.target.focus({
        preventScroll: true
    })
    searchBar.style.outline = `2px solid ${blue}`;
});
searchBar.addEventListener("blur", () => {
    searchBar.style.outline = "none";
})

// the placeholder changes every 3 seconds, to suggest new subjects to the user
function changePlaceholder() {
searchBar.placeholder = `${placeholderArray[randomPlaceholderIndex()]}`;
}
setInterval(changePlaceholder, 3000);

// fetch subject api - "submit" event listener
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await getAndDisplayResults();
    await getAndDisplayBook();
})

async function getAndDisplayResults() {
    window.scrollTo(0,0);
    formStartLoading();                     // imported
    await getArrayResults();
    await setBtns();
    await displayFirstPage();
    await scrollToSearchResults();
    setTimeout(formStopLoading, 1000);       // imported
}

async function getAndDisplayBook() {
    page.addEventListener("click", async (e) => {
        card = e.target.closest(".card");
        let h2 = e.target.closest("h2");
        let h4 = e.target.closest("h4");
        if (e.target == card || e.target == h2 || e.target == h4) {
            await scrollToBookSection();          
            await getBookJson();
            console.log(bookJson);
            await createBookObject()
            await displayBook();
        }
    }, true);
}

async function getArrayResults() {
    function getUrlFromInputValue() {
        const inputValue = searchBar.value.toLowerCase();
        const array = inputValue.split(" ");
        const urlFriendlyString = array.join("_");
        return urlFriendlyString;
    }
    const path = await getUrlFromInputValue();
    const URL = `https://openlibrary.org/subjects/${path}.json`;
    const response = await fetch(URL);
    const json = await response.json();
    arrayResults = json.works;
}

async function setBtns() {
    // 4 cards per page
    numberOfPages = Math.ceil(arrayResults.length/4);

    indexContainer = document.createElement("div");
    indexContainer.classList.add("index-container");
    searchResultsContainer.append(indexContainer);

    // let's create a btn for every possible result page
    for (let i = 1; i <= numberOfPages; i++) {
        index = document.createElement("span");
        index.classList.add("index");
        index.innerHTML = `${i}`;
        indexContainer.append(index);
    }

    // all the index btns, the first one is '.selected' by default
    indexBtns = Array.from(document.querySelectorAll(".index-container > *"));
    try {
        if (indexBtns[0]) {
            indexBtns[0].classList.add("selected");
        } else {
            throw new Error("No results! try to write something different");
        }
    } catch(err) {
        alert(err.message);
    }

    // let's change the selection between btns, the possibility to switch from one to another one
    for (let btn of indexBtns) {
        btn.addEventListener("click", () => {
            indexBtns.forEach(button => {
                button.classList.remove("selected");
            }) 
            btn.classList.add("selected");
            currentPage = btn.textContent;
            try {
                displayResults();
            } catch(err) {
                alert(err.message);
            }
        })
    }
}
    
async function createResultsPage() {
    page = document.createElement("div");
    page.classList.add("page");
    searchResultsContainer.prepend(page);
}

async function displayResults() {
    arrayResultsChunks = _.chunk(arrayResults, 4);
    page.innerHTML = "";
    for (let i = 0; i < arrayResultsChunks[currentPage - 1].length; i++) {
        card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h2>${arrayResultsChunks[currentPage - 1][i].title}</h2>`;

        // let's create an array of authors for every book
        authors = arrayResultsChunks[currentPage - 1][i].authors;
        authorsArray = authors.map(author => author.name);
        card.innerHTML += `<h4>${authorsArray.join(", ")}</h4>`;

        bookKey = document.createElement("div");
        bookKey.setAttribute("style", "visibility:hidden; display:none");
        bookKey.textContent = `${arrayResultsChunks[currentPage - 1][i].key}`
        card.append(bookKey);

        page.append(card);
    }
}

async function displayFirstPage() {
    try {
        if (currentPage == 1) {
            await createResultsPage()
            await displayResults();
        } else {
            throw new Error("please refresh the page")
        }
    } catch(err) {
        alert(`${err.name}: ${err.message}`);
    }
}

async function scrollToSearchResults() {
    window.scrollTo({
        top: windowHeight,
        behavior: "smooth"
    });
}

// click event listener to the close btn to return home
searchResultsCloseBtn.addEventListener("click", () => {
    searchBar.value = "";
    searchResultsContainer.innerHTML = "";
    currentPage = 1;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

async function scrollToBookSection() {
    window.scrollTo({
        top: windowHeight * 2,
        behavior: "smooth"
    })
}

async function getBookJson() {
    const key = card.lastElementChild.textContent;
    const URL = `https://openlibrary.org${key}.json`;
    const response = await fetch(URL);
    bookJson = await response.json();
}

async function createBookObject() {
    class Book {
        get title() {
            return bookJson.title;
        }
        get description() {
            if (typeof bookJson.description == "object") {
                return bookJson.description.value;
            } else {
                return bookJson.description;
            }
        }
        get arrayCoverURL() {
            let array = [];
            if (bookJson.covers.length > 1) {
                for (let i = 0; i < 2; i++) {
                    let randomIndex = Math.floor(Math.random() * (bookJson.covers.length - 1));
                    let coverKey = bookJson.covers[randomIndex];
                    if (coverKey == -1) {
                        coverKey = bookJson.covers[randomIndex + 1];
                    }
                    const URL = `https://covers.openlibrary.org/b/id/${coverKey}-M.jpg`;
                    array.push(URL);
                }
                console.log(array)
            } else if (bookJson.covers.length == 1) {
                const coverKey = bookJson.covers[0];
                const URL = `https://covers.openlibrary.org/b/id/${coverKey}-M.jpg`;
                array.push(URL);
            } else {
                array = [];
            }
            return array;
        }
    }
    bookObject = new Book();
}

async function displayBook() {
    
    // cover container
    const coverContainer = document.createElement("div");
    coverContainer.classList.add("cover-container");
    bookContainer.append(coverContainer);

    // console.log(bookObject.arrayCoverURL);

    if (bookObject.arrayCoverURL.length == 2) {

        // carousel btn
        const button = document.createElement("button");
        button.classList.add("carousel-btn");
        button.textContent = ">";
        coverContainer.append(button);
    
        // cover 1
        const cover1 = document.createElement("img");
        cover1.classList.add("cover");
        cover1.style.animation = "none";
        cover1.setAttribute("src", bookObject.arrayCoverURL[0]);
        coverContainer.append(cover1);

        // cover 2
        const cover2 = document.createElement("img");
        cover2.classList.add("cover", "hidden");
        cover2.setAttribute("src", bookObject.arrayCoverURL[1]);
        coverContainer.append(cover2);

        button.addEventListener("click", () => {
            if (cover2.classList.contains("hidden")) {
                cover1.classList.add("hidden");
                cover1.style.animation = "slide-out ease 0.5s"
                cover2.classList.remove("hidden");
                cover2.style.animation = "slide-in ease 0.5s"
            } else if (cover1.classList.contains("hidden")) {
                cover2.classList.add("hidden");
                cover2.style.animation = "slide-out ease 0.5s"
                cover1.classList.remove("hidden");
                cover1.style.animation = "slide-in ease 0.5s"
            }
        })

    } else if (bookObject.arrayCoverURL.length == 1) {
        
        // cover 1
        const cover = document.createElement("img");
        cover.classList.add("cover");
        cover.setAttribute("src", bookObject.arrayCoverURL[0]);
        coverContainer.append(cover);

    } else {

        const noCover = document.createElement("div");
        noCover.classList.add("no-cover")
        noCover.textContent = "book cover not available";
        coverContainer.append(noCover);

    }
    
    // title
    const title = document.createElement("h1");
    title.classList.add("title")
    title.innerHTML = `${bookObject.title}`;
    bookContainer.append(title);

    // description
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `${bookObject.description}`
    bookContainer.append(description);
    console.log(bookObject.description);

}

bookSectionCloseBtn.addEventListener("click", () => {
    bookContainer.innerHTML = "";
    window.scrollTo({
        top: windowHeight,
        behavior: "smooth"
    });
})