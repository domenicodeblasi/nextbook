import getLogo from "../imgs/logo/logo.js";

export default function setFavicon() {
    const head = document.head;
    const linkTag = document.createElement("link");
    head.append(linkTag);
    
    const href = getLogo().src;
    linkTag.setAttribute("rel", "icon");
    linkTag.setAttribute("href", href);
}
