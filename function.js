

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

// container.addEventListener('click', function(event){
//     boxClicked = event.target
//     if(turn === playerX) {
//         boxClicked.textContent = playerX 
//         turn = playerO
//         //Is this a winning condtition
//     } else {
//         boxClicked.textContent = playerO
//         turn = playerX
    
//     }



//     function checkWinner(){

//     if (box0.textContent === playerX && box1.textContent === playerX && box2.textContent === playerX){
//         document.querySelector('#result').textContent = 'PlayerX Won' 
//          } else if (box1.textContent === playerX && box4.textContent === playerX && box7.textContent === X){
//                 result.textContent = 'PlayerX Won'
//         } else if (box1.textContent === playerX && box5.textContent === playerX && box9.textContent === X){
//                 result.textContent = 'PlayerX Won'
//         } else if (box2.textContent === playerX && box5.textContent === playerX && box8.textContent === X){
//                 result.textContent = 'PlayerX Won'
//         } else if (box3.textContent === playerX && box6.textContent === playerX && box9.textContent === X){
//                 result.textContent = 'PlayerX Won'
//         } else if (box4.textContent === playerX && box5.textContent === playerX && box6.textContent === X){
//                 result.textContent = 'PlayerX Won'
//         } else if (box7.textContent === playerX && box5.textContent === playerX && box3.textContent === X){
//                 result.textContent = 'PlayerX Won'
//         } else if (box7.textContent === playerX && box8.textContent === playerX && box9.textContent === X){
//                 result.textContent = 'PlayerX Won'
//         } else if (box1.textContent ===playerO && box2.textContent ===playerO && box3.textContent ===O){
//             result.textContent = 'PlayerO won' 
//         } else if (box1.textContent ===playerO && box4.textContent ===playerO && box7.textContent ===playerO){
//             result.textContent = 'PlayerO won'
//         } else if (box1.textContent ===playerO && box5.textContent ===playerO && box9.textContent ===O){
//             result.textContent = 'PlayerO won'
//         } else if (box2.textContent ===playerO && box5.textContent ===playerO && box8.textContent ===O){
//             result.textContent = 'Player O won'
//         } else if (box3.textContent ===playerO&& box6.textContent ===playerO&& box9.textContent ===playerO){
//             result.textContent = 'PlayerO won'
//         } else if (box4.textContent ===playerO&& box5.textContent ===playerO&& box6.textContent ===O){
//             result.textContent = 'PlayerO won'
//         } else if (box7.textContent ===playerO&& box5.textContent ===playerO&& box3.textContent === O){
//             result.textContent = 'PlayerO won'
//         } else if (box7.textContent ===playerO && box8.textContent === playerO && box9.textContent === playerO){
//             result.textContent = 'Player YWon'
//         } else if ((box0.textContent == playerO || box0.textContent == playerX) && (box1.textContent == playerO || box1 == playerX) && (box2.textContent == playerO || box2.textContent == playerX) && (box3.textContent == playerO || box3.textContent == playerX) && (box4.textContent == playerO || box4.textContent == playerX) && (box5.textContent == playerO || box5.textContent == playerX) && (box6.textContent == playerO || box6.textContent == playerX) && (box7.textContent == playerO || box7.textContent == playerX) && (box8.textContent == playerO || box8.textContent == playerX)){
//             result.textContent = 'It was a draw'
//         } else {
//             result.textContent = 'Game Over'
//         }
//     }
// });

// button.addEventListener('click', function(){
//     return;
// })






    // if(boxClicked.tagName === 'DIV'){
    //     boxClicked.textContent = X
    // } 

    // if (turn === )










// var

// var reset = document.querySelector('.reset');


// var square = ['','','','','','','','',''];
// var player1 = 'O';
// var player2  = 'X';
// var currentPlayer = player1;
// var gameOver = false;
// var turn = 'X'

// var swapTurn = function(turn){
//     if (turn === X){
//         return "0";
//     } else {
//         return "X";
//     }
// }


// var winner = ()=>{

// }


// //game logic 

// var boxes = document.getElementsByClassName('box');
// Array.from(boxes).forEach(element =>{
//     var text = document.querySelector('.text')
//     element.addEventListener('click', ()=>{
//         if(text.innerText === ''){
//             text.innerText = turn;
//             swapTurn();
//             winner();
//         }
//     })
// })




// // var playerX; 
// // var playerY;

// // var container = document.querySelector('#section')
// // var boplayerX= Array.from(document.querySelectorAll('.box'))
// // var cross = document.querySelector('.cross')
// // var circle = document.querySelector('.zero')
// // var p1 = document.querySelector('.p1')
// // var p2 = document.querySelector('.p2')
// // var player1 = document.querySelector('.player1')
// // var player2 = document.querySelector('.player2')
// // var result = document.querySelector('#result')

// // container.addEventListener('click', e)
    
    


// container.addEventListener('click', function (event){
//     containerClick = event.target
//     if (player1 === cross){
//         container.textContent  = 'X';
//     }
// })

// function myClick(X, Y){ 
//     if (box1 ===playerX&& box2 === playerX&& box3 === X){
//         document.querySelector('#result').textContent = 'Player X Won' 
//     } else if (box1 === X && box4 === X && box7 === X){
//         document.querySelector('#result').textContent = 'Player X Won'
//     } else if (box1 === X && box5 === X && box9 === X){
//         document.querySelector('#result').textContent = 'Player X Won'
//     } else if (box2 === X && box5 === X && box8 === X){
//         document.querySelector('#result').textContent = 'Player X Won'
//     } else if (box3 === X && box6 === X && box9 === X){
//         document.querySelector('#result').textContent = 'Player X Won'
//     } else if (box4 === X && box5 === X && box6 === X){
//         document.querySelector('#result').textContent = 'Player X Won'
//     } else if (box7 === X && box5 === X && box3 === X){
//         document.querySelector('#result').textContent = 'Player X Won'
//     } else if (box7 === X && box8 === X && box9 === X){
//         document.querySelector('#result').textContent = 'Player X Won'
// } else if (box1 ===Y&& box2 ===Y&& box3 ===O){
//     document.querySelector('#result').textContent = 'Player YWon' 
// } else if (box1 ===Y&& box4 ===Y&& box7 ===O){
//     document.querySelector('#result').textContent = 'PlayerYWon'
// } else if (box1 ===Y&& box5 ===Y&& box9 ===O){
//     document.querySelector('#result').textContent = 'Player YWon'
// } else if (box2 ===Y&& box5 ===Y&& box8 ===O){
//     document.querySelector('#result').textContent = 'PlayerYWon'
// } else if (box3 ===Y&& box6 ===Y&& box9 ===O){
//     document.querySelector('#result').textContent = 'Player YWon'
// } else if (box4 ===Y&& box5 ===Y&& box6 ===O){
//     document.querySelector('#result').textContent = 'PlayerYWon'
// } else if (box7 ===Y&& box5 ===Y&& box3 ===O){
//     document.querySelector('#result').textContent = 'PlayerYWon'
// } else if (box7 ===Y&& box8 ===Y&& box9 ===O){
//     document.querySelector('#result').textContent = 'Player YWon'
// } else {
//     document.querySelector('#result').textContent = 'It was a draw'
// }
// }



// function playerPick(text){
//     text.preventDefault()
//     document.querySelector('.player1').textContent = text
//     document.querySelector('.player2').textContent = text
// }
// }


// player1.addEventListener('click', function(){
//     if (flag === player1) {
//         p1.textContent = "It's player one's turn"
//     } else {
//         p1.textContent = "It's player two's turn"
//     }
// })
// }

//     p1.textContent = 
// }


// container.addEventListener('click', function(event){
//     var myClick = event.target
//     if (myClick.tagName === 'DIV') {
//     if () {
//     myClick.textContent = 'X'
//     }
// }
// })

// if (playerOne === cross) {
// section1.addEventListener('click', function(event){
//     var choices = event.target 
//     if (choices.tagName === 'ASIDE' ){
//         section2.classList.toggle('textSize1')
//         choices.textContent = 'X' 
//     }

// })


// section2.addEventListener('click', function(event){
//     var choices = event.target 
//     if (choices.tagName === 'ASIDE' ){
//         section2.classList.toggle('textSize2')
//         choices.textContent = 'X'
        
//     }
// })


// section3.addEventListener('click', function(event){
//     var choices = event.target 
//     if (choices.tagName === 'ASIDE' ){
//         section2.classList.toggle('textSize3')
//         choices.textContent = 'X'
        
//     }
// })



    



