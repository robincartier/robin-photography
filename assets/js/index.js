let maxWidth = 0;
let maxHeight = 0;
let ratio;

function init() {
    const images = document.querySelectorAll(".focus-on-click");
    maxWidth = Math.floor(window.innerWidth * .8);
    maxHeight = Math.floor(window.innerHeight * .8);
    ratio = maxWidth / maxHeight;

    for (let i = 0 ; i < images.length; i++) {
        const image = images[i];

        image.style.transition = ".8s opacity";
        image.style.cursor = "pointer";

        image.addEventListener("click", onClick);
    }
}

window.addEventListener("load", function () {
    init();
});

function onClick () {
    const div = document.createElement("div");		// max allowable parent
    div.className = "focused-image";

    div.addEventListener("click", function () {
        this.remove();
    });

    const img = document.createElement("img");

    img.src = this.src;

    const imageRatio = this.width / this.height;

    let width;
    let height;
    if (imageRatio < ratio) {
        height = maxHeight;
        width = maxHeight * imageRatio;
    } else {
        height = maxWidth / imageRatio;;
        width = maxWidth;
    }

    img.style.width = width + "px";
    img.style.height = height + "px";

    div.appendChild(img);
    const body = document.querySelector("body");
    body.appendChild(div);
};
