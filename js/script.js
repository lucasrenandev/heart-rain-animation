"use strict";

function rain() {
    const heart = document.querySelector(".container .heart");
    const element = document.createElement("div");
    element.classList.add("drop");
    heart.appendChild(element);

    const left = Math.floor(Math.random() * 300);
    const duration = Math.random() * 1;
    element.style.left = left + "px";
    element.style.animationDuration = 1 + duration + "s";

    setTimeout(() => {
        heart.removeChild(element);
    }, 5000);
}
setInterval(rain, 50);