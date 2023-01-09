import "../scss/styles.scss";
import getLogo from "../imgs/logo/logo.js";
import {placeholderArray, randomPlaceholderIndex} from "./placeholderArray.js";
import {startLoading, stopLoading} from "./loadingComponent/loading.js";

// DOM elements
const logoContainer = document.querySelector(".logo-container");
const form = document.querySelector("#form");
const searchBar = document.querySelector(".search-bar");
const searchResultsCloseBtn = document.querySelector("#search-results-section > button");
const searchResultsContainer = document.querySelector(".results-container");
const windowHeight = document.documentElement.clientHeight;

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

// fetch subject api in the "submit" event listener
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    startLoading();                     // imported
    await subjectRequestAndDisplay();
    scrollToSearchResults();
    setTimeout(stopLoading, 1000);       // imported
})

async function subjectRequestAndDisplay() {
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
    const arrayResults = json.works;
    console.log(arrayResults);

    // 4 cards per page
    let numberOfPages = Math.ceil(arrayResults.length/4);

    function showResults() {
        let currentPage = 1;
        const indexContainer = document.createElement("div");
        indexContainer.classList.add("index-container");
        searchResultsContainer.append(indexContainer);

        // let's create an index btn for every possible result page
        for (let i = 1; i <= numberOfPages; i++) {
            const index = document.createElement("span");
            index.classList.add("index");
            index.innerHTML = `${i}`;
            indexContainer.append(index);
        }

        // all the index btns, the first one is '.selected' by default
        const indexBtns = Array.from(document.querySelectorAll(".index-container > *"));
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
                console.log("current page: " + currentPage);
                try {
                    createResultsPage();
                } catch(err) {
                    alert(err.message);
                }
            })
        }

        function createResultsPage() {
            if (currentPage == 1) {
                console.log("pagina 1");
            } else if (currentPage == 2) {
                console.log("pagina 2");
            } else if (currentPage == 3) {
                console.log("pagina 3");
            } else {
                throw new Error("an error occurred")
            }
        }
    }
    showResults();
}

function scrollToSearchResults() {
    window.scrollTo({
        top: document.documentElement.clientHeight,
        behavior: "smooth"
    });
}

// click event listener to the close btn to return home
searchResultsCloseBtn.addEventListener("click", (e) => {
    searchBar.value = "";
    searchResultsContainer.innerHTML = "";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})