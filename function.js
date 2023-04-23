

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

var winning_sequence = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [7, 5, 3]
]
var clickedBoxes = [] //boxes clicked....record
var user_1_value = [] //1 lae k click garyo
var user_2_value = [] //2 ''''''

function clickBox(event,boxLocation){
    if(clickedBoxes.indexOf(boxLocation) >= 0 || hasWon){ //click garna milxa
        return; //tala ko function chalaena
    }
    if(isPlayer1){
        user_1_value.push(boxLocation);
        event.target.textContent = "X";
    }else{
        user_2_value.push(boxLocation);
        event.target.textContent = "0";
    }
    clickedBoxes.push(boxLocation)
    checkWinner()
}

function checkWinner(){
    var winningSequence = 0; //jitna ko lagi 3hunu parxa
    var userValue = []

    if (isPlayer1){
        userValue = user_1_value;
    }else{
        userValue = user_2_value;
    }
    for(var i = 0; i < winning_sequence.length; i++){
        if(winningSequence != 3){
            winningSequence = 0; //2 bata 3 janxa
            for(var j = 0; j<userValue.length; j++){ //user lae k k click garyo
                if(winning_sequence[i].indexOf(userValue[j]) >= 0){
                    winningSequence = winningSequence+1;
                }
            }
        }
    }
    
    if(winningSequence === 3){
        hasWon = true;
        if(isPlayer1){
            result.textContent = "Player 1 has won";
        }else{
            result.textContent = "Player 2 has won";
        }
        
    }

    if (clickedBoxes.length === 9 && hasWon !== true && clickedBoxes.length !== ''){
        result.textContent = 'Draw'
    }
    isPlayer1 = !isPlayer1 //swap
}

button.addEventListener('click', function(event){
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



