 export class Cell{
    constructor(){
        this.mark = " "
    }
    isEmpty(){
        return this.mark == " "
    }
    markCell(symbol){
        this.mark = symbol
    }
}
