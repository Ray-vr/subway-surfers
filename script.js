const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
let score = 0;
let isJumping = false;
let gameIsOver = false;

function jump() {
    if (isJumping || gameIsOver) return;
    isJumping = true;
    character.classList.add("jump");
    setTimeout(() => {
        character.classList.remove("jump");
        isJumping = false;
    }, 500);
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});

let checkCollision = setInterval(() => {
    if (gameIsOver) return;
    
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

    if (obstacleRight > 530 && obstacleRight < 580 && characterTop >= 150) {
        alert("Game Over! Score: " + score);
        gameIsOver = true;
        location.reload();
    }
}, 10);

let updateScore = setInterval(() => {
    if (gameIsOver) return;
    score++;
    scoreDisplay.innerText = score;
}, 100);
