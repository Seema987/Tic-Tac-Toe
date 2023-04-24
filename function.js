

var container = document.querySelector('#section')
var boxes = document.querySelector('section .box')
var text = document.querySelector('div .text')
var box0 =document.querySelector('#box0')
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')
var box3 = document.querySelector('#box3')
var box4 = document.querySelector('#box4')
var box5 = document.querySelector('#box5')
var box6 = document.querySelector('#box6')
var box7 = document.querySelector('#box7')
var box8 = document.querySelector('#box8')
var result = document.querySelector('#result')
var button = document.querySelector('.reset')

var isPlayer1 = true //switch turn
var hasWon = false; //to see if game is over or not

var winning_sequence = [ //all possible wins!
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [7, 5, 3]
]
var clickedBoxes = [] //record of all boxes clicked
var user_1_value = [] //record of all boxes clicked by player1
var user_2_value = [] //record of all boxes clicked by player2

function clickBox(event,boxLocation){
    if(clickedBoxes.indexOf(boxLocation) >= 0 || hasWon){ //function clickbox is targetig each box location.
        return; //Stops  us from double cliking and discontinue after the game has been won.
    } 
    if(isPlayer1){
        user_1_value.push(boxLocation); //index of button clicked is stored in user1 array
        event.target.textContent = "X"; //button clicked gets textContent of X
    }else{
        user_2_value.push(boxLocation); //index of button clicked is stored in user2 array
        event.target.textContent = "0"; //button clicked gets textContent of O
    }
    clickedBoxes.push(boxLocation) //All the boxes clicked will also be stored in clickedBoxes array.
    checkWinner()
}

function checkWinner(){ //this function checks the winner
    var winningSequence = 0; //current value is 0 but to win the value has to be 3 
    var userValue = []

    if (isPlayer1){
        userValue = user_1_value; //userValue changes as the player switch
    }else{
        userValue = user_2_value;
    }
    for(var i = 0; i < winning_sequence.length; i++){ //1st loop checks the length of winning sequence's length which is defined above. 
        if(winningSequence != 3){
            winningSequence = 0; 
            for(var j = 0; j<userValue.length; j++){ //2nd loop checks the length of userValue.
                if(winning_sequence[i].indexOf(userValue[j]) >= 0){
                    winningSequence = winningSequence+1; //if the index of userValue in the winning_sequence is greater than 0, 1 is added to the winning sequence. Meaning if player1, his X is recorded is he captures one place in that winning sequence. 
                }
            }
        }
    }
    
    if(winningSequence === 3){  //giving winning message
        hasWon = true;
        if(isPlayer1){
            result.textContent = "Player X has won";
        }else{
            result.textContent = "Player O has won";
        }
        
    }

    if (clickedBoxes.length === 9 && hasWon !== true && clickedBoxes.length !== ''){
        result.textContent = 'Draw' //giving draw message
    }
    isPlayer1 = !isPlayer1 //swap
}

button.addEventListener('click', function(event){  //game reset
    user_1_value = [];
    user_2_value = [];
    clickedBoxes = [];
    result.textContent = "";
    box0.textContent = "";
    box1.textContent = "";
    box2.textContent = "";
    box3.textContent = "";
    box4.textContent = "";
    box5.textContent = "";
    box6.textContent = "";
    box7.textContent = "";
    box8.textContent = "";
    hasWon = false;
})

//givving event listener to each boxes of game board
document.querySelector("#box0").addEventListener('click', function(event){
    clickBox(event, 1)
})
document.querySelector("#box1").addEventListener('click', function(event){
    clickBox(event, 2)
})
document.querySelector("#box2").addEventListener('click', function(event){
    clickBox(event, 3)
})
document.querySelector("#box3").addEventListener('click', function(event){
    clickBox(event, 4)
})
document.querySelector("#box4").addEventListener('click', function(event){
    clickBox(event, 5)
})
document.querySelector("#box5").addEventListener('click', function(event){
    clickBox(event, 6)
})
document.querySelector("#box6").addEventListener('click', function(event){
    clickBox(event, 7)
})
document.querySelector("#box7").addEventListener('click', function(event){
    clickBox(event, 8)
})
document.querySelector("#box8").addEventListener('click', function(event){
    clickBox(event, 9)
})



