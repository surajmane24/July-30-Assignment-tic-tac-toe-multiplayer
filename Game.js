
import {Board} from './Board.js';
import {Player} from './Player.js';


class Game{
    constructor(board, player1, player2){
        this.board = board
        this.player1 = player1
        this.player2 = player2
        this.turn = 0
        this.gameOver = false
    }
    static newGame(nameofPlayer1, nameofPlayer2){
        if(typeof nameofPlayer1 != "string" || typeof nameofPlayer2 != "string"){
            let printOut = console.log("Name must be a String...");
            return printOut // Validating Name
        }
        this.board = new Board()
        this.player1 = new Player(nameofPlayer1,"X")
        this.player2 = new Player(nameofPlayer2,"O")

        return new Game(this.board, this.player1, this.player2)
    }

    play(cellNumber){
        if(typeof cellNumber !== "number"){
            return "Enter Number Input"
        }
        if(cellNumber > 8 || cellNumber < 0){
            return "Cell Number must be in between 0 to 8" // Validating Cell Number
        }
        if(this.gameOver || this.turn > 8){
            if(this.turn > 8){
                return "=====   Game Over {Draw}   ====="
            }
            return "=====   Game Over   ====="
        }

        let currentPlayer
        if(!this.board.isEmpty(cellNumber)){
            return "This cell alredy filled..."
        }
        if(this.turn%2 == 0){
            currentPlayer = this.player1
        }else{
            currentPlayer = this.player2
        }
        currentPlayer.markCell(this.board.cells[cellNumber])
        this.turn++
        
        // console.log(currentPlayer.symbol);
        console.log(this.board.boardGrid(this.board.cells)); // Printing Board

        let [winnerSymbol, gameState] = this.board.analyse(currentPlayer.symbol)
        if(gameState == ""){
            return "Continue..."
        }
        if(gameState == "win"){
            if(winnerSymbol == "X"){
                this.gameOver = true
                return "Congratulation ==> "+ this.player1.name + " you win the GAME..."
            }
            this.gameOver = true
            return "Congratulation ==> "+ this.player2.name + " you win the GAME..."
        }
        if(gameState == "draw"){
            this.gameOver = true
            return "Game is draw"
        }
        

    }
}

const g1 = Game.newGame("Harry", "Jhon")
// const g2 = Game.startGame("ply2", "ply3")
console.log(g1.play(0));
console.log(g1.play(3));
console.log(g1.play(1));
console.log(g1.play(4));
console.log(g1.play(2));
console.log(g1.play(5));
console.log(g1.play(6));
console.log(g1.play(7));
console.log(g1.play(8));
console.log(g1.play(0));
console.log(g1.play(3));
