import "../scss/loading.scss";

function formStartLoading() {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    form.lastElementChild.replaceWith(loader);
}

function formStopLoading() {
    const btn = document.createElement("button");
    btn.classList.add("submit-btn");
    btn.type = "submit";
    form.lastElementChild.replaceWith(btn);
    btn.innerHTML = "Search";
}

export {formStartLoading, formStopLoading}