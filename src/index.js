import "./style.css"
import imgSmall from "./img/img_640w.jpg"
import imgBig from "./img/img_1280w.jpg"


const myImage = document.querySelector("img.myImg")
myImage.srcset = `${imgSmall} 640w, ${imgBig} 1280w`
