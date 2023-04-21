let currentPlayer = "X";
currentPlayer = "X" ? "O" : "X";
let gameBoard = {
    //array for the game board
    "gameBoardArray":["-","-","-","-","-","-","-","-"],
    "boardSquares":document.querySelectorAll(".board-item")
     ,"incrementCscore":function(){
        let cscore = document.querySelector('#cscore').value;
        a = Number(document.querySelector('#cscore').value);
        cscore = a++;

     },
    "incrementPscore":function(){
        let pscore = document.querySelector('#cscore').value;
        b = Number(document.querySelector('#cscore').value);
        pscore = b++;
    }
    
}
/*function a()
console.log(document.querySelectorAll("input"))
document.querySelectorAll("input").forEach(box => {
    box.addEventListener("click", 
    () => box.setAttribute("disabled", ""))
});*/

