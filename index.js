var items = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
];
var restartButton = document.getElementById("restartButton")
var gameState = document.getElementById('gameState');
var turn = "X";

function play(id){
    var element = document.getElementById(id);
    if(element.textContent === "" && gameState.textContent === "Game in progress"){
        element.textContent = turn;
        checkWin();
        toggleTurn();
    }
    
}
function toggleTurn(){
    turn = turn === "X" ? "O" : "X";
}

function checkWin(){
    if(
        (items[0].textContent == "X" && items[1].textContent == "X" && items[2].textContent == "X") ||
        (items[3].textContent == "X" && items[4].textContent == "X" && items[5].textContent == "X") ||
        (items[6].textContent == "X" && items[7].textContent == "X" && items[8].textContent == "X") ||
        (items[0].textContent == "X" && items[3].textContent == "X" && items[6].textContent == "X") ||
        (items[1].textContent == "X" && items[4].textContent == "X" && items[7].textContent == "X") ||
        (items[2].textContent == "X" && items[5].textContent == "X" && items[8].textContent == "X") ||
        (items[0].textContent == "X" && items[4].textContent == "X" && items[8].textContent == "X") ||
        (items[2].textContent == "X" && items[4].textContent == "X" && items[6].textContent == "X")
    ){
        gameState.textContent = "X Won";

    }else if(
        (items[0].textContent == "O" && items[1].textContent == "O" && items[2].textContent == "O") ||
        (items[3].textContent == "O" && items[4].textContent == "O" && items[5].textContent == "O") ||
        (items[6].textContent == "O" && items[7].textContent == "O" && items[8].textContent == "O") ||
        (items[0].textContent == "O" && items[3].textContent == "O" && items[6].textContent == "O") ||
        (items[1].textContent == "O" && items[4].textContent == "O" && items[7].textContent == "O") ||
        (items[2].textContent == "O" && items[5].textContent == "O" && items[8].textContent == "O") ||
        (items[0].textContent == "O" && items[4].textContent == "O" && items[8].textContent == "O") ||
        (items[2].textContent == "O" && items[4].textContent == "O" && items[6].textContent == "O")
    ){
        gameState.textContent = "O Won";
    }else if(
        items[0].textContent != "" && items[1].textContent !="" && items[2].textContent != ""&&
        items[3].textContent != "" && items[4].textContent !="" && items[5].textContent != ""&&
        items[6].textContent != "" && items[7].textContent !="" && items[8].textContent != ""&&
        gameState.textContent == "Game in progress"
    ){
        gameState.textContent = "Draw";
    }
}

function restartGame(){
    gameState.textContent = "Game in progress";
    for(var i = 0; i < items.length; i++){
       items[i].textContent = "";
    }

}

window.onload = function() {
    for(var i = 0; i < items.length; i++){
        items[i].addEventListener("click", function(){
            play(this.id);
        })
    }
    restartButton.addEventListener("click", function(){
        restartGame()
    });
  };
