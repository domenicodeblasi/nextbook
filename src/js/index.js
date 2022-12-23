import "../scss/styles.scss";
import getLogo from "../imgs/logo/logo.js";
import {placeholderArray, randomPlaceholderIndex} from "./placeholderArray.js";

// DOM elements
const logoContainer = document.querySelector(".logo-container");
const form = document.querySelector("#form");
const searchBar = document.querySelector(".search-bar");
const searchResultsCloseBtn = document.querySelector("#search-results-section > button");
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    scrollToSearchResults();
    subjectRequest();
    // displayResults();

})

function scrollToSearchResults() {
    window.scrollTo({
        top: windowHeight,
        behavior: "smooth"
    });
}

async function subjectRequest() {
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
    console.log(json);
}

// click event listener to the close btn to return home
searchResultsCloseBtn.addEventListener("click", (e) => {
    searchBar.value = "";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})