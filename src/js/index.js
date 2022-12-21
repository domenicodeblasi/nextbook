import setFavicon from "./setFavicon.js";
setFavicon();

import "../scss/styles.scss";
import getLogo from "../imgs/logo/logo.js";
import {placeholderArray, randomPlaceholderIndex} from "./placeholderArray.js";

// DOM elements
const container = document.querySelector(".container");
const logoContainer = document.querySelector(".logo-container");
const heading = document.querySelector(".heading");
const form = document.querySelector("#form");
const searchBarLabel = document.querySelector(".search-bar-label");
const searchBar = document.querySelector(".search-bar");
const submitBtn = document.querySelector(".submitBtn");

// colors
const lightColor = "rgb(240, 240, 240)";
const darkColor = "";
const blue = "rgb(69, 68, 151)";
const lightPink = "rgb(226, 121, 121)";
const darkPink = "rgb(164, 102, 102)";

logoContainer.prepend(getLogo());

// focus event on search-bar
searchBar.addEventListener("focus", (e) => {
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