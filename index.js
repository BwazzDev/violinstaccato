for (let i = 0; i < document.querySelectorAll(".violin").length; i++) {
    document.querySelectorAll(".violin")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    playSound(event.key);

    buttonAnimation(event.key);
});

document.addEventListener("keypress", function (event) {

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
        case "demo":
            playDemo(130);
            console.log("demo activated");
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

function demoPlaySound(key, delay) {
    setTimeout(function () {
        playSound(key);
        buttonAnimation(key);
    }, delay);
}

function playDemo(bpm) {
    let demoButton = document.querySelector(".demo");
    if (!demoButton.classList.contains("pressed")) {
        bpm = 1000 / bpm * 10;
        document.querySelector(".demo").classList.add("pressed");
        demoPlaySound("f", 0 * bpm);
        demoPlaySound("f", 4.5 * bpm);
        demoPlaySound("h", 9 * bpm);

        demoPlaySound("f", 24 * bpm);
        demoPlaySound("f", 28.5 * bpm);
        demoPlaySound("d", 33 * bpm);

        demoPlaySound("f", 48 * bpm);
        demoPlaySound("f", 52.5 * bpm);
        demoPlaySound("h", 57 * bpm);
        demoPlaySound("h", 66 * bpm);

        demoPlaySound("g", 72 * bpm);
        demoPlaySound("g", 76.5 * bpm);
        demoPlaySound("d", 81 * bpm);
        setTimeout(function () {
            document.querySelector(".demo").classList.remove("pressed");
        }, 83 * bpm);
    }

}

