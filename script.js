let boxes = document.querySelectorAll(".common");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let video = document.getElementById("bgVideo");
let body = document.querySelector("body");

//  Preload audio
let looseAudio = new Audio("loose.mp3");
let winAudio = new Audio("win.mp3");

looseAudio.preload = "auto";
winAudio.preload = "auto";

let comp = 0;
let user = 0;

let n = Math.floor((Math.random() * 3));

//  ADD THIS FUNCTION (VERY IMPORTANT)
function stopAllAudio() {
    winAudio.pause();
    winAudio.currentTime = 0;

    looseAudio.pause();
    looseAudio.currentTime = 0;
}

// ---------------- DRAW ----------------
const drawFunction = () => {
    stopAllAudio(); 
    video.classList.add("hide");
};

// ---------------- LOOSE ----------------
const looseFunction = () => {

    stopAllAudio(); //  FIX

    looseAudio.currentTime = 0;
    looseAudio.play();

    setTimeout(() => {
        video.classList.add("hide");

        if (video) {
            video.currentTime = 0;
            video.play();
        }
    }, 50);
};

// ---------------- WIN ----------------
const winFunction = () => {

    stopAllAudio();

    // play sound first
    winAudio.currentTime = 0;
    winAudio.play();

    // show video
    video.classList.remove("hide");

    //  wait before playing (important fix)
    setTimeout(() => {

        if (video) {
            video.currentTime = 0;

            let playPromise = video.play();

            // handle browser autoplay issue
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }

            setTimeout(() => {
                video.pause();
                video.currentTime = 0;
            }, 4000);
        }

    }, 100); 
};

// ---------------- RESET ----------------
const resetGame = () => {

    stopAllAudio(); 

    comp = 0;
    user = 0;
    userScore.innerText = "0";
    compScore.innerText = "0";
    msg.innerText = "Play Your Move!";
    msg.style.color = "#D2BDCD";
    video.classList.add("hide");
    body.style.backgroundColor = "#4B1D3F";
};

// ---------------- GAME LOGIC ----------------
boxes.forEach((button) => {
    button.addEventListener("click", () => {

        n = Math.floor((Math.random() * 3));
        body.style.backgroundColor = "#4B1D3F";

        if (button === boxes[0]) {
            if (n === 0) {
                msg.innerText = "It was Draw.";
                msg.style.color = "#3c83a7ff";
                drawFunction();
            }
            else if (n === 1) {
                msg.innerText = "You Lost! Paper Beats Rock.";
                msg.style.color = "#915281ff";
                body.style.backgroundColor = "#d13b2aff";
                comp++;
                looseFunction();
            }
            else {
                msg.innerText = "Congratulations! You Won.";
                msg.style.color = "#5fdef5ff";
                user++;
                winFunction();
            }
        }

        if (button === boxes[1]) {
            if (n === 1) {
                msg.innerText = "It was Draw.";
                msg.style.color = "#3c83a7ff";
                drawFunction();
            }
            else if (n === 2) {
                msg.innerText = "You Lost! Scissors Beats Paper.";
                msg.style.color = "#915252ff";
                body.style.backgroundColor = "#d13b2aff";
                comp++;
                looseFunction();
            }
            else {
                msg.innerText = "Congratulations! You Won.";
                msg.style.color = "#5fdef5ff";
                user++;
                winFunction();
            }
        }

        if (button === boxes[2]) {
            if (n === 2) {
                msg.innerText = "It was Draw.";
                msg.style.color = "#3c83a7ff";
                drawFunction();
            }
            else if (n === 0) {
                msg.innerText = "You Lost! Rock Beats Scissors.";
                msg.style.color = "#915252ff";
                body.style.backgroundColor = "#d13b2aff";
                comp++;
                looseFunction();
            }
            else {
                msg.innerText = "Congratulations! You Won.";
                msg.style.color = "#5fdef5ff";
                user++;
                winFunction();
            }
        }

        userScore.innerText = user;
        compScore.innerText = comp;
    });
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
