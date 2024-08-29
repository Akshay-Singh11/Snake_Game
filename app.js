// Part -1 
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50 ; 
// let boardwidth = 1200;
// let boardheight = 800;
// let snakecells = [[0,0,] , [ 50 , 0] , [100,0]];

// function draw(){}

// function update(){}

// setInterval(function(){
//     update();
//     draw();

// },200)

// -----------------------------
// part 2 && part 3
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;

// function draw(){
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX = headX + cellSize;
//     let newHeadY = headY;
//     snakeCells.push([newHeadX , newHeadY]);
//     snakeCells.shift()
// }

// setInterval(function(){
//     update()
//     draw()
// } , 200)


// --------------------------------------
// part - 4 && part 5

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';

// document.addEventListener('keydown' ,(event)=>{
//     if(event.key === 'ArrowUp'){ direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// });

// function draw(){
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX ;
//     let newHeadY ;
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//     }

//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY  ;
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY ;
//     }

//     snakeCells.push([newHeadX , newHeadY]);
//     snakeCells.shift()
// }

// setInterval(function(){
//     update()
//     draw()
// } , 200)

// ------------------------
// part -6

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';
// let gameover = false;

// document.addEventListener('keydown' ,(event)=>{
//     if(event.key === 'ArrowUp'){ direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// });

// function draw(){
//     // gameover
//     if(gameover === true){
//         clearInterval(id);
//         return;
//     }
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX ;
//     let newHeadY ;
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//         if(newHeadY < 0 ){
//             gameover = true;
//         }
//     }

//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//         if(newHeadY === boardHeight){
//             gameover = true;
//         }
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY  ;
//         if(newHeadX < 0 ){
//             gameover = true;
//         }
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY ;
//         if(newHeadX === boardWidth){
//             gameover = true;
//         }
//     }

//     snakeCells.push([newHeadX , newHeadY]);
//     snakeCells.shift()
// }

// let id = setInterval(function(){
//     update()
//     draw()
// } , 100)


// ---------------------------
// PART -7

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';
// let gameover = false;

// let foodcells = generateRandomfood();

// document.addEventListener('keydown' ,(event)=>{
//     if(event.key === 'ArrowUp'){ direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// });

// function draw(){
//     // gameover
//     if(gameover === true){
//         clearInterval(id);
//         return;
//     }
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw snake 
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
//     // draw food
//     ctx.fillStyle = "orange"
//     ctx.fillRect(foodcells[0] ,foodcells[1],cellSize,cellSize );

// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX ;
//     let newHeadY ;
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//         if(newHeadY < 0 ){
//             gameover = true;
//         }
//     }

//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//         if(newHeadY === boardHeight){
//             gameover = true;
//         }
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY  ;
//         if(newHeadX < 0 ){
//             gameover = true;
//         }
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY ;
//         if(newHeadX === boardWidth){
//             gameover = true;
//         }
//     }

//     snakeCells.push([newHeadX , newHeadY]);
//     snakeCells.shift()
// }

// function generateRandomfood(){
//     return[
//         Math.round(Math.random()*(boardWidth - cellSize)/cellSize)*cellSize, // x
//         Math.round(Math.random()*(boardHeight - cellSize)/cellSize)*cellSize //y
//     ]
// }

// let id = setInterval(function(){
//     update()
//     draw()
// } , 100)


// part -8
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';
// let gameover = false;


// let foodcells = generateRandomfood();

// document.addEventListener('keydown' ,(event)=>{
//     if(event.key === 'ArrowUp'){ direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// });

// function draw(){
//     // gameover
//     if(gameover === true){
//         clearInterval(id);
//         return;
//     }
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw snake 
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
//     // draw food
//     ctx.fillStyle = "orange"
//     ctx.fillRect(foodcells[0] ,foodcells[1],cellSize,cellSize );

// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX ;
//     let newHeadY ;
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//         if(newHeadY < 0 ){
//             gameover = true;
//         }
//     }

//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//         if(newHeadY === boardHeight){
//             gameover = true;
//         }
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY  ;
//         if(newHeadX < 0 ){
//             gameover = true;
//         }
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY ;
//         if(newHeadX === boardWidth){
//             gameover = true;
//         }
//     }

//     snakeCells.push([newHeadX , newHeadY]);
//     if(newHeadX === foodcells[0] && newHeadY === foodcells[1]){
//         foodcells = generateRandomfood();
//     }
//     else{
//         snakeCells.shift();
//     }  
// }

// function generateRandomfood(){
//     return[
//         Math.round(Math.random()*(boardWidth - cellSize)/cellSize)*cellSize, // x
//         Math.round(Math.random()*(boardHeight - cellSize)/cellSize)*cellSize //y
//     ]
// }

// let id = setInterval(function(){
//     update()
//     draw()
// } , 100)

// part -9

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';
// let gameover = false;

// let foodcells = generateRandomfood();
// let score = 0 ;

// document.addEventListener('keydown' ,(event)=>{
//     if(event.key === 'ArrowUp'){ direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// });

// function draw(){
//     // gameover
//     if(gameover === true){
//         clearInterval(id);
//         ctx.fillStyle = "red ";
//         ctx.font = "50px sans-serif";
//         ctx.fillText(' GAME OVER !!' , 430 ,400);
//         return;
//     }
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw snake 
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
//     // draw food
//     ctx.fillStyle = "orange"
//     ctx.fillRect(foodcells[0] ,foodcells[1],cellSize,cellSize );
//     // draw score
//     ctx.font = " 20px monospace"
//     ctx.fillText(`Score: ${score}` ,20,20);

// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX ;
//     let newHeadY ;
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//         if(newHeadY < 0 ){
//             gameover = true;
//         }
//     }

//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//         if(newHeadY === boardHeight){
//             gameover = true;
//         }
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY  ;
//         if(newHeadX < 0 ){
//             gameover = true;
//         }
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY ;
//         if(newHeadX === boardWidth){
//             gameover = true;
//         }
//     }

//     snakeCells.push([newHeadX , newHeadY]);
//     if(newHeadX === foodcells[0] && newHeadY === foodcells[1]){
//         foodcells = generateRandomfood();
//         score = 1;
//     }
//     else{
//         snakeCells.shift();
//     }  
// }

// function generateRandomfood(){
//     return[
//         Math.round(Math.random()*(boardWidth - cellSize)/cellSize)*cellSize, // x
//         Math.round(Math.random()*(boardHeight - cellSize)/cellSize)*cellSize //y
//     ]
// }

// let id = setInterval(function(){
//     update()
//     draw()
// } , 100)

// part -10

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let foodsound = new Audio('food.mp3');
let gameoverSound = new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
let musicSound = new Audio('music.mp3');

let cellSize = 50;
let boardWidth = 1400;
let boardHeight = 600;
let snakeCells = [[0,0] , [50,0]] ;

let direction = 'right';
let gameover = false;

let foodcells = generateRandomfood();
let score = 0 ;
let highestScore = 0;

document.addEventListener('keydown' ,(event)=>{
    if(event.key === 'ArrowUp'){ direction = "up"}
    else if(event.key === 'ArrowDown'){direction = "down"}
    else if(event.key === 'ArrowLeft'){direction = "left"}
    else if(event.key === 'ArrowRight'){direction = "right"}
});

function draw(){

    // gameover
    if(gameover === true){
        clearInterval(id);
        ctx.fillStyle = "red ";
        ctx.font = "50px sans-serif";
        ctx.fillText(' GAME OVER !!' , 430 ,400);
        return;
    }

    // eraser
    ctx.clearRect(0,0,1400,600)

    // draw snake 
    for(let cell of snakeCells){
        moveSound.play();
        ctx.fillStyle = "brown"
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
        ctx.strokeStyle = "golden"
        ctx.strokeRect(cell[0],cell[1],cellSize,cellSize )
    }

    // draw food

    ctx.fillStyle = "orange"
    ctx.fillRect(foodcells[0] ,foodcells[1],cellSize,cellSize );
    
    // draw score
    ctx.fillStyle = "white"
    ctx.font = " 20px monospace"
    ctx.fillText(`Score: ${score}` ,20,20);

    // draw highest score
    ctx.fillText(`Highest Score: ${highestScore}`, 20, 50);

}



function update() { 
    let headX = snakeCells[snakeCells.length - 1][0];
    let headY = snakeCells[snakeCells.length - 1][1];
    let newHeadX;
    let newHeadY;

    if (direction === 'up') {
        newHeadX = headX;
        newHeadY = headY - cellSize;

        // Wrap the headY to the bottom if it goes above the board
        if (newHeadY < 0) {
            newHeadY = boardHeight - cellSize;
        }
    } 
    else if (direction === 'down') {
        newHeadX = headX;
        newHeadY = headY + cellSize;

        // Wrap the headY to the top if it goes below the board
        if (newHeadY >= boardHeight) {
            newHeadY = 0;
        }
    } 
    else if (direction === 'left') {
        newHeadX = headX - cellSize;
        newHeadY = headY;

        // Wrap the headX to the right side if it goes left of the board
        if (newHeadX < 0) {
            newHeadX = boardWidth - cellSize;
        }
    } 
    else if (direction === 'right') {
        newHeadX = headX + cellSize;
        newHeadY = headY;

        // Wrap the headX to the left side if it goes right of the board
        if (newHeadX >= boardWidth) {
            newHeadX = 0;
        }
    }

    // Check for collisions with the snake's body
    if (ex(newHeadX, newHeadY)) {
        gameover = true;
    }

    snakeCells.push([newHeadX, newHeadY]);

    // Check if the snake eats the food
    if (newHeadX === foodcells[0] && newHeadY === foodcells[1]) {
        foodcells = generateRandomfood();
        score += 1;
        foodsound.play(); // Play food sound on eating

    // Update the highest score if the current score exceeds it
        if (score > highestScore) {
            highestScore = score;
        }
    } else {
        snakeCells.shift();
    }

}

function generateRandomfood(){
    return[
        Math.round(Math.random()*(boardWidth - cellSize)/cellSize)*cellSize, // x
        Math.round(Math.random()*(boardHeight - cellSize)/cellSize)*cellSize //y
    ]
}

function ex(newHeadX , newHeadY){
    for ( let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true;
        }
    }
    return false;
}

let id = setInterval(function(){
    update()
    draw()
} , 150)


