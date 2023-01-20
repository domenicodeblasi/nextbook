<style>
    .light-pink {
        color: rgb(226, 121, 121);
    }

    .dark-pink {
       color: rgb(164, 102, 102);
    }

    .center {
        text-align: center;
    }

    .button {
        background-color: rgb(240, 240, 240);
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        color: rgb(69, 68, 151);
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1.5px;
        cursor: pointer;
    }

    .item {
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: space-evenly;
        color: #323330;
        font-family: monospace;
        font-weight: 600;
        font-size: 12px;
        border: none;
        cursor: pointer;
        margin-top: 5px
    }

    .logo {
        margin-right: 10px;
        width: 15px;
    }

    .html {
        background-color: #ea9b67;
    }

    .sass {
        background-color: #dc9bd6;
    }

    .javascript {
        background-color: #f0db4f;
    }

    .lodash {
        background-color: #e3e3e3;
    }

    .webpack {
        background-color: #6fa1c5;
    }
</style>

<p class="center"><img alt="logo" src="./src/imgs/README/logo.png" style="width: 100px"></p>

# next<span class="dark-pink">book</span> {#identifier .light-pink .center}

### 👀 Overview
*nextbook* is an easy to use web application. It is designed to help you find the next book to add to your collection. Your book can be found by **category** or **subject**, the operation is very simple:
- the user types keywords in the textbox and presses the *search* button,
- all the books belonging to that category are shown to the user, who will have to choose a title to display,
- in the third section of the website it is possible to see the book cover and the description (if available).

<p class="center"><img src="./src/imgs/README/webapp.gif" alt="web app" width="200px"></p>

### 🛠️ Built with
* <button class="item html" href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img class="logo" src="./src/imgs/README/html-logo.png" alt="html logo">HTML</button>
* <button class="item sass" href="https://sass-lang.com/"><img class="logo" src="./src/imgs/README/sass-logo.png" alt="sass logo">Sass</button>
* <button class="item javascript" href="https://www.javascript.com/"><img class="logo" src="./src/imgs/README/js-logo.png" alt="js logo">JavaScript</button>
* <button class="item lodash" href="https://lodash.com/"><img class="logo" src="./src/imgs/README/lodash-logo.png" alt="lodash logo">Lodash</button>
* <button class="item webpack" href="https://webpack.js.org/"><img class="logo" src="./src/imgs/README/webpack-logo.png" alt="webpack logo">Webpack</button>

### 🚀 Quick Link
Click the button below to try the web application:
<p class="center"><button class="button" href="https://nextbookjs.netlify.app">try</button></p>

### 📖 Features
- **Dinamic Placeholder**: a little *hint* to help you choose a category,
- **Pagination**: after requesting data from the Open Library service - a third-party API - which will provide the user with a list of books related to the selected category, the books are displayed in pages of up to *4 books per page*,
- **Carousel**: it shows *two* book cover (if available),
- **Responsive Design**: optimized for desktops and smaller screen devices.


### ⚠️ License
*nextbook* is MIT licensed, see `LICENSE.md` for more information.

