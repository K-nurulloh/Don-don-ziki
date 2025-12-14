import { elGameZone, elHands, elRefreshGameButton, elResultZone, elRobot, elUser } from "./html-elements.js";

// Robot choose
function robotChoose() {
    const hands = ["rock", "paper", "scissors"];
    const randomIndex = Math.trunc(Math.random() * hands.length);
    return hands [randomIndex];
}

// Change zone
function swapZone(boolean) {
    if (boolean) {
        elGameZone.style.display = "none";
        elResultZone.style.display = "flex";
    } else {
        elGameZone.style.display = "flex";
        elResultZone.style.display = "none";
    }
}

// find winner
function checkWinner(user, robot) {
    if (user === robot) {
        return "TIE";
    } else if (user === "paper" && robot === "scissors") {
        return "ROBOT";
    } else if (user === "scissors" && robot === "rock") {
        return "ROBOT";
    } else if (user === "rock" && robot === "paper") {
        return "ROBOT";
    } else {
        return "USER";
    }
}

// Hands
elHands.forEach((elHands) => {
    elHands.addEventListener("click", (evt) => {
         swapZone(true);

        const user = evt.target.alt;
        const robot = robotChoose();

        elUser.src = evt.target.src;
        elRobot.src = "./img/choosing.svg";      
        
        setTimeout(() => {
            elRobot.src = './img/${robot}.svg';
            const winner = checkWinner(user, robot);
            
            alert(winner);
        }, 1000);
    });
});


// Refresh game
elRefreshGameButton.addEventListener("click", (evt) => {
    swapZone(false);
});