//define variables 
const startBtn = document.getElementById("start-game")
const resetBtn = document.getElementById("reset-game")
const doubleBtn = document.getElementById("double-btn")
const message = document.getElementById("message")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const points1 = document.getElementById("points1")
const points2 = document.getElementById("points2")
let player1Score= 0
let player2Score= 0
let player1Turn = true

// let randomNum2 = Math.floor(Math.random()*12 + 1)

//event listeners
startBtn.addEventListener("click",function(){
    
    rollDice()
})
doubleBtn.addEventListener("click", double)

resetBtn.addEventListener("click",function(){
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = ""
    player2Scoreboard.textContent = ""
    player1Dice.textContent="-"
    player2Dice.textContent="-"
    message.textContent = "Player one's turn"
    resetBtn.style.display = "none"
    startBtn.style.display ="block"
    doubleBtn.style.display = "block"
    player1Turn = true


    
    

})


function winner(){
    if (player1Score >= 20){
        message.textContent = "Player one has won!!"
        points1.textContent+= "I"
        showReset()
    } else if (player2Score >=20){
        message.textContent = "Player two has won!!"
        points2.textContent+="I"
        showReset()
    }
}

function showReset(){
    startBtn.style.display ="none"
    doubleBtn.style.display = "none"
    resetBtn.style.display ="block"

}
//roll dice function
function rollDice(){
    //create random number for dice
    const randomNum = Math.floor(Math.random()*6 + 1)

    if (player1Turn){
        message.textContent = "Player two's Turn"
        // update score
        player1Score += randomNum
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent =randomNum
        //change players
        player1Turn =false
        player2Dice.textContent ="-"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
    } else {
        message.textContent = "Player one's Turn"
        // update score
        player2Score += randomNum
        player2Dice.textContent =randomNum
        player1Dice.textContent ="-"
        player2Scoreboard.textContent =player2Score
        //change players
        player1Turn =true
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")

    }
// show winner message
    // if (player1Score >= 20){
    //     message.textContent = "Player one has won!!"
    //     showReset()
    // } else if (player2Score >=20){
    //     message.textContent = "Player two has won!!"
    //     showReset()
    // }
    winner()

}

//double or nothing feature: odds = score reset, evens = double
function double(){
    const randomNum1 = Math.floor(Math.random()*7 + 6)
    if (randomNum1 % 2 === 0){
        if (player1Turn){
            message.textContent = "Player two's Turn"
            // update score
            player1Score += randomNum1
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent =randomNum1
            //change players
            player1Turn =false
            player2Dice.textContent ="-"
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
        } else {
            message.textContent = "Player one's Turn"
            // update score
            player2Score += randomNum1
            player2Dice.textContent =randomNum1
            player1Dice.textContent ="-"
            player2Scoreboard.textContent =player2Score
            //change players
            player1Turn =true
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
    
        }
    } else{
        if(player1Turn){
            player1Score= 0
            player1Scoreboard.textContent =""
            player1Dice.textContent ="-"
            message.textContent = "Uhoh no more points for you!!"
            player1Turn = false
    
        }else{
            player2Score= 0
            player2Scoreboard.textContent =""
            player2Dice.textContent ="-"
            message.textContent = "Uhoh no more points for you!!"
            player2Turn = false
            
        

        }
    }
   winner()
}