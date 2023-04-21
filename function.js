

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
        }
    })
})




// var playerX; 
// var playerY;

// var container = document.querySelector('#section')
// var box = Array.from(document.querySelectorAll('.box'))
// var cross = document.querySelector('.cross')
// var circle = document.querySelector('.zero')
// var p1 = document.querySelector('.p1')
// var p2 = document.querySelector('.p2')
// var player1 = document.querySelector('.player1')
// var player2 = document.querySelector('.player2')
// var result = document.querySelector('#result')

// container.addEventListener('click', e)
    
    


// container.addEventListener('click', function (event){
//     containerClick = event.target
//     if (player1 === cross){
//         container.textContent  = 'X';
//     }
// })

// function myClick(X, Y){ 
//     if (box1 ===X && box2 === X && box3 === X){
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