import {Cell} from './Cell.js';
export class Board{
    constructor(){
        this.isGameOver = false
        this.cells = [
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell()
        ]
    }
    isEmpty(cellNumber){
        return this.cells[cellNumber].isEmpty()
    }
    boardGrid(cells){
        console.log(cells[0],cells[1],cells[2]);
        console.log(cells[3],cells[4],cells[5]);
        console.log(cells[6],cells[7],cells[8]);
    }
    analyse(symbol){
        this.logicGame(symbol) + this.isGameOve
        if(this.isGameOver == false){  
            return ["",""]
        }
        if(this.isGameOver){
            return [symbol,"win"]
        }
        return ["","draw"]
    }

    logicGame(symbol){
        if (this.cells[0].mark == symbol && this.cells[1].mark == symbol && this.cells[2].mark == symbol) {
            this.isGameOver = true;
        } else if (this.cells[2] == symbol && this.cells[5] == symbol && this.cells[8] == symbol) {
            this.isGameOver = true;
        } else if (this.cells[6] == symbol && this.cells[7] == symbol && this.cells[8] == symbol) {
            this.isGameOver = true;
        } else if (this.cells[0] == symbol && this.cells[3] == symbol && this.cells[6] == symbol) {
            this.isGameOver = true;
        } else if (this.cells[1] == symbol && this.cells[4] == symbol && this.cells[7] == symbol) {
            this.isGameOver = true;
        } else if (this.cells[3] == symbol && this.cells[4] == symbol && this.cells[5] == symbol) {
            this.isGameOver = true;
        } else if (this.cells[0] == symbol && this.cells[4] == symbol && this.cells[8] == symbol) {
            this.isGameOver = true;
        } else if (this.cells[2] == symbol && this.cells[4] == symbol && this.cells[6] == symbol) {
            this.isGameOver = true;
        }
      };    
}
