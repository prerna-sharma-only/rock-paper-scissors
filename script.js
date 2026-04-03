let boxes = document.querySelectorAll(".common");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let video = document.getElementById("bgVideo");
let looseAudio = new Audio("loose.mp3");
let winAudio = new Audio("win.mp3");
let body = document.querySelector("body");


let comp = 0;
let user = 0;


let n = Math.floor((Math.random()*3));//to generate computer score
// console.log(boxes[n]);



const drawFunction = ()=>{
    video.classList.add("hide");
    if (video) {
        video.pause();          // stop current playback
        video.currentTime = 0;  // rewind to start
        video.play();           // play again
    }
}


const looseFunction = ()=>{
    video.classList.add("hide");
    if (video) {
        video.pause();          // stop current playback
        video.currentTime = 0;  // rewind to start
        video.play();           // play again
    }
    // Play audio only from 5s to 7s
    looseAudio.currentTime = 1; // start from 5 seconds
    looseAudio.play();

    setTimeout(() => {
        looseAudio.pause();
        looseAudio.currentTime = 0; // reset to start
    }, 2000); // play only for 2 seconds
}


const winFunction = ()=>{
    video.classList.remove("hide");
    playTrimmedAudio();//calling this function
    if (video) {
        video.currentTime = 0; // restart from beginning
        video.play();          // play again
        setTimeout(() => {
            video.pause();     
            video.currentTime = 0; // rewind to start (ready for next time)
        }, 4000);
    }
    // Play audio only from 5s to 10s
    function playTrimmedAudio() {
        winAudio.currentTime = 5; // start from 5 seconds
        winAudio.play();

        setTimeout(() => {
            winAudio.pause();
            winAudio.currentTime = 0; // reset to start
        }, 1000); // play only for 1 second
    }
}


const resetGame = ()=>{
    comp = 0;
    user = 0;
    userScore.innerText = "0";
    compScore.innerText = "0";
    msg.innerText = "Play Your Move!"
    msg.style.color = "#D2BDCD";
    video.classList.add("hide");
    body.style.backgroundColor="#4B1D3F"
    //Restart video when new game starts
    if (video) {
        video.pause();          // stop current playback
        video.currentTime = 0;  // rewind to start
        video.play();           // play again
    }
}


boxes.forEach((button)=>{
    button.addEventListener("click",()=>{

        n = Math.floor((Math.random()*3));//to play comp again and again
        body.style.backgroundColor="#4B1D3F";
        if(button === boxes[0]) {
            if(n === 0){
                msg.innerText = "It was Draw."
                msg.style.color = "#3c83a7ff";
                body.style.backgroundColor="#4B1D3F";
                drawFunction();
            }
            else if(n === 1){
                msg.innerText = "You Lost! Paper Beats Rock."
                msg.style.color = "#915281ff";
                body.style.backgroundColor="#d13b2aff"
                comp = comp + 1;
                looseFunction();//calling this function
            }
            else{
                msg.innerText = "Congratulations! You Won."
                msg.style.color = "#5fdef5ff";
                user = user + 1;
                winFunction();
            }
        }
        if(button === boxes[1]) {
            if(n === 1){
                msg.innerText = "It was Draw."
                msg.style.color = "#3c83a7ff";
                body.style.backgroundColor="#4B1D3F";
                drawFunction();
            }
            else if(n === 2){
                msg.innerText = "You Lost! Scissors Beats Paper."
                msg.style.color = "#915252ff";
                body.style.backgroundColor="#d13b2aff"
                comp = comp + 1;
                looseFunction();
            }
            else{
                msg.innerText = "Congratulations! You Won."
                msg.style.color = "#5fdef5ff";
                user = user + 1;
                winFunction();
            }
        }
        if(button === boxes[2]) {
            if(n === 2){
                msg.innerText = "It was Draw."
                msg.style.color = "#3c83a7ff";
                body.style.backgroundColor="#4B1D3F";
                drawFunction();
            }
            else if(n === 0){
                msg.innerText = "You Lost! Rock Beats Scissors."
                msg.style.color = "#915252ff";
                body.style.backgroundColor="#d13b2aff"
                comp = comp + 1;
                looseFunction();
            }
            else{
                msg.innerText = "Congratulations! You Won."
                msg.style.color = "#5fdef5ff";
                user = user + 1;
                winFunction();
            
            }
        }
        console.log(n);
        console.log(button);
        userScore.innerText = user;
        compScore.innerText = comp;
    });
})

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);