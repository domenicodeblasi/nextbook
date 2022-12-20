import setFavicon from "./setFavicon.js";
setFavicon();

import "../scss/styles.scss";
import getLogo from "../imgs/logo/logo.js";

const container = document.querySelector(".container");
const logoContainer = document.querySelector(".logo-container");
const heading = document.querySelector(".heading");
const form = document.querySelector("#form");
const searchBarLabel = document.querySelector(".search-bar-label");
const searchBar = document.querySelector(".search-bar");
const submitBtn = document.querySelector(".submitBtn");

logoContainer.prepend(getLogo());