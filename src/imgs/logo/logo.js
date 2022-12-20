import logoSVG from "./logo.svg";
import "./styles.css";

export default function getLogo() {
    const image = new Image();
    image.src = logoSVG;
    image.classList.add("logo");
    return image;
}