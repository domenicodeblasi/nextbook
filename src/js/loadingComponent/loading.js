import "./loading.scss";

function startLoading() {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    form.lastElementChild.replaceWith(loader);
}

function stopLoading() {
    const btn = document.createElement("button");
    btn.classList.add("submit-btn");
    btn.type = "submit";
    form.lastElementChild.replaceWith(btn);
    btn.innerHTML = "Search";
}

export {startLoading, stopLoading}