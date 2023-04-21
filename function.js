

var container = document.querySelector('#section')
var boxes = document.querySelector('section .box')
var text = document.querySelector('div .text')
var box0 =document.querySelector('.box0')
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var result = document.querySelector('#result')

var playerX = 'X'
var playerO = 'O'
var turn = 'X'

container.addEventListener('click', function(event){
    boxClicked = event.target
    if(turn === playerX) {
        boxClicked.textContent = playerX
        turn = playerO
        //Is this a winning condtition
    } else {
        boxClicked.textContent = playerO
        turn = playerX
    
    }

    if (box0 === playerX && box1 === playerX&& box2 === X){
                result.textContent = 'Player playerX Won' 
         } else if (box1 === playerX&& box4 === playerX&& box7 === X){
                result.textContent = 'Player playerX Won'
        } else if (box1 === playerX&& box5 === playerX&& box9 === X){
                result.textContent = 'Player playerX Won'
        } else if (box2 === playerX&& box5 === playerX&& box8 === X){
                result.textContent = 'Player playerX Won'
        } else if (box3 === playerX&& box6 === playerX&& box9 === X){
                result.textContent = 'Player playerX Won'
        } else if (box4 === playerX&& box5 === playerX&& box6 === X){
                result.textContent = 'Player playerX Won'
        } else if (box7 === playerX&& box5 === playerX&& box3 === X){
                result.textContent = 'Player playerX Won'
        } else if (box7 === playerX&& box8 === playerX&& box9 === X){
                result.textContent = 'Player playerX Won'
        } else if (box1 ===playerO&& box2 ===playerO&& box3 ===O){
            document.querplayerOSelector('#result').textContent = 'PlayerO won' 
        } else if (box1 ===playerO&& box4 ===playerO&& box7 ===O){
            document.querplayerOSelector('#result').textContent = 'Player O won'
        } else if (box1 ===playerO&& box5 ===playerO&& box9 ===O){
            document.querplayerOSelector('#result').textContent = 'PlayerO won'
        } else if (box2 ===playerO&& box5 ===playerO&& box8 ===O){
            document.querplayerOSelector('#result').textContent = 'Player O won'
        } else if (box3 ===playerO&& box6 ===playerO&& box9 ===O){
            document.querplayerOSelector('#result').textContent = 'PlayerO won'
        } else if (box4 ===playerO&& box5 ===playerO&& box6 ===O){
            document.querplayerOSelector('#result').textContent = 'Player O won'
        } else if (box7 ===playerO&& box5 ===playerO&& box3 ===O){
            document.querplayerOSelector('#result').textContent = 'Player O won'
        } else if (box7 ===playerO&& box8 ===playerO&& box9 ===O){
            document.querplayerOSelector('#result').textContent = 'Player YWon'
} else if ((box0 == playerO || box0 == playerX) && (box1 == playerO || box1 == playerX) && (box2 == playerO || box2 == playerX) && (box3 == playerO || box3 == playerX) && (box4 == playerO || box4 == playerX) && (box5 == playerO || box5 == playerX) && (box6 == playerO || box6 == playerX) && (box7 == playerO || box7 == playerX) && (box8 == playerO || box8 == playerX)){
            document.querySelector('#result').textContent = 'It was a draw'
        }
    

});






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



    



// var userChoice = [img1, img2]
 
// if (playerChoice === img1) {
//     document.left1.appendChild(img1);
// }



// var left1 = document.querySelector('.left1')
// left1.addEventListener('click', function(){
//     var img1 = document.querySelector('.img1')
//     img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/U%2B2179.svg/1200px-U%2B2179.svg.png"  
//     img1.style.border = '2px'
//     img1.style.width = '60px'
//     img1.style.height = '60px'
//     img1.style.marginLeft = '20px'
//     img1.style.marginTop = '10px'
//     document.left1.appendChild(img1);

    
//     var img2 = document.querySelector('.img2')
//     img2.src = "https://images.unsplash.com/photo-1613905392914-2ca5fbab0923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//     img2.style.border = '2px'
//     img2.style.width = '60px'
//     img2.style.height = '60px'
//     img2.style.marginLeft = '20px'
//     img2.style.marginTop = '10px'
//     document.left1.appendChild(img2);

//     left1.toggle(img2)
    
// })

// var img1 = document.querySelector('.img1')

// img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/U%2B2179.svg/1200px-U%2B2179.svg.png" 
// img1.style.border = '2px'
//     img1.style.width = '60px'
//     img1.style.height = '60px'
//     img1.style.marginLeft = '20px'
//     img1.style.marginTop = '10px' 
// var img2 = document.querySelector('.img2')
// img2.src = "https://images.unsplash.com/photo-1613905392914-2ca5fbab0923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"