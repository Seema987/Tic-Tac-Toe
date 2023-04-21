

var container = document.querySelector('#section')

var reset = document.querySelector('.reset');


var square = ['','','','','','','','',''];
var player1 = 'O';
var player2  = 'X';
var currentPlayer = player1;
var gameOver = false;
var turn = 'X'

var swapTurn = function(turn){
    if (turn === X){
        return "0";
    } else {
        return "X";
    }
}


var winner = ()=>{

}


//game logic 

var boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    var text = document.querySelector('.text')
    element.addEventListener('click', ()=>{
        if(text.innerText === ''){
            text.innerText = turn;
            swapTurn();
            winner();
            document.getElementsByClassName(turn)[0].innerText = 'Turn for' + turn
        }
    })
})
