let scoreHome = 0;
let scoreGuest = 0;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function addOne(){
    scoreHome += 1;
    homeScore.textContent = scoreHome;
}

function addOneGuest(){
    scoreGuest += 1;
    guestScore.textContent = scoreGuest;
}

function addTwo(){
    scoreHome += 2;
    homeScore.textContent = scoreHome;
}

function addTwoGuest(){
    scoreGuest += 2;
    guestScore.textContent = scoreGuest;
}

function addThree(){
    scoreHome += 3;
    homeScore.textContent = scoreHome;
}

function addThreeGuest(){
    scoreGuest += 3;
    guestScore.textContent = scoreGuest;
}


// function reset(){
//     if (scoreGuest > 0 && scoreHome > 0){
//         return guestScore.textContent = 0, homeScore.textContent = 0;
//     }
//     scoreHome = 0;
//     scoreGuest = 0;
// }