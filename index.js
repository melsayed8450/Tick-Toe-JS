

document.addEventListener('DOMContentLoaded', function() {
  var startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", startGameButtonClick);

var rowsInput = document.getElementById("rowsInput");
  var columnsInput = document.getElementById("columnsInput");
  var targetInput = document.getElementById("targetInput");
  rowsInput.addEventListener('input', function(){
    targetInput.max = Math.max(rowsInput.value, columnsInput.value);
  });
  columnsInput.addEventListener('input', function(){
    targetInput.max = Math.max(rowsInput.value, columnsInput.value);
  });
function startGameButtonClick() {
  var rowsInput = document.getElementById("rowsInput");
  var columnsInput = document.getElementById("columnsInput");
  var targetInput = document.getElementById("targetInput");
  localStorage.setItem('rows', rowsInput.value);
  localStorage.setItem('columns', columnsInput.value);
  localStorage.setItem('target', targetInput.value);
  window.location.href = "game.html";
}
});

