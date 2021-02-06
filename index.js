for (let i = 0; i < document.querySelectorAll(".violin").length; i++) {
    document.querySelectorAll(".violin")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    playSound(event.key);

    buttonAnimation(event.key);
});

function playSound(key) {
    switch (key) {
        case "q":
            let q = new Audio("sounds/staccato-c.mp3");
            q.play();
            break;
        case "w":
            let w = new Audio("sounds/staccato-d.mp3");
            w.play();
            break;
        case "e":
            let e = new Audio("sounds/staccato-e.mp3");
            e.play();
            break;
        case "r":
            let r = new Audio("sounds/staccato-f.mp3");
            r.play();
            break;
        case "t":
            let t = new Audio("sounds/staccato-g.mp3");
            t.play();
            break;
        case "y":
            let y = new Audio("sounds/staccato-a.mp3");
            y.play();
            break;
        case "u":
            let u = new Audio("sounds/staccato-b.mp3");
            u.play();
            break;
        case "i":
            let i = new Audio("sounds/staccato-c2.mp3");
            i.play();
            break
        case "d":
            let d = new Audio("sounds/chord-d.mp3");
            d.play();
            break
        case "f":
            let f = new Audio("sounds/chord-f.mp3");
            f.play();
            break
        case "g":
            let g = new Audio("sounds/chord-g.mp3");
            g.play();
            break
        case "h":
            let h = new Audio("sounds/chord-h.mp3");
            h.play();
            break
        default:
            console.log("default was triggered");
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);

}

