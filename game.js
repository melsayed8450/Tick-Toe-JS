var columns;
var rows;
var target;
var turn = 'X';

document.addEventListener('DOMContentLoaded', function() {
    columns = parseInt(localStorage.getItem('columns'));
    rows = parseInt(localStorage.getItem('rows'));
    target = parseInt(localStorage.getItem('target'));

    createGrid();

    var targetState = document.getElementById('targetState');
    var gameState = document.getElementById('gameState');
    targetState.textContent = `Target to win: ${target}`;

    function createGrid() {
    var grid = document.getElementById("grid");
    console.log(rows, columns);
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          var div = document.createElement("div");
          div.className = "grid-item";
          div.id = i * 10 + j;
          grid.appendChild(div);
        }
      }
      var gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 100px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 100px)`;
    }

    var gridArray = new Array(4 * rows);
    for (var i = -2*rows; i < 3 * rows; i++) {
      gridArray[i] = new Array(columns);
      for (var j = 0; j < columns; j++) {
        gridArray[i][j] = "";
      }
    }

    function play(id){
        var element = document.getElementById(id);
        if(gameState.textContent == "Game in progress" && element.textContent == ""){
            element.textContent = turn;
            gridArray[parseInt(id/10)][parseInt(id%10)] = turn;
            checkWin();
            toggleTurn();
        }  
    }
    function toggleTurn(){
        turn = turn == "X" ? "O" : "X";
    }
    
    for (let i = 0; i <rows; i++){
        for(let j = 0; j < columns; j++) {
            var element = document.getElementById(i * 10 + j);
            element.addEventListener("click", function(){
                play(`${i * 10 + j}`);
            });
        }
    }


    function checkWin(){
        for(let i = 0; i < rows; i++){
            var ans = 0;
            for(let j = 0; j < columns; j++){
                if(gridArray[i][j] == turn){
                    ans++;
                    if(ans == target){
                        gameState.textContent = `${turn} Won`;
                        return;
                    }
                }else ans = 0;

            }
            
        }
        for(let i = 0; i < columns; i++){
            var ans = 0;
            for(let j = 0; j < rows; j++){
                if(gridArray[j][i] == turn){
                    ans++;
                    if(ans == target){
                        gameState.textContent = `${turn} Won`;
                        return;
                    }
                }else ans = 0;

            }
            
        }
        for(let i = - rows; i < 2*rows; i++){
            var ans = 0;
            var i2 = i;
            for(let j = 0; j < columns; j++){
                if(gridArray[i2][j] == turn){
                    ans++;
                    if(ans == target){
                        gameState.textContent = `${turn} Won`;
                        return;
                    }
                }else ans = 0;
                i2++;
            }
            var ans2 = 0;
            i2 = i;
            for(let j = columns -1; j >= 0; j--){
                if(gridArray[i2][j] == turn){
                    ans2++;
                    if(ans2 == target){
                        gameState.textContent = `${turn} Won`;
                        return;
                    }
                }else ans2 = 0;
                i2++;
            }
        }
       
    }

    


    var restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", restartButtonClick);
    
    function restartButtonClick() {
        gameState.textContent = "Game in progress";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                var element = document.getElementById(i*10 + j);
                element.textContent= "";
              gridArray[i][j] = "";
            }
          }
    }


  });













