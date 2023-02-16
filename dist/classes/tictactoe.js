"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * class tictactoe
 * constrcutor board
 * functions: display board, whoStarts, make a move, winner
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
class TicTacToe {
    constructor() {
        (this.playerX = "X"), (this.playerO = "O");
        this.board = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"],
        ];
    }
    display() {
        console.log(this.board);
        console.log(this.board[1][1]);
        /**
         * iterate over the board and display it using a for loop?
         */
    }
    startGame() {
        const getRandom = () => {
            const randomNumber = Math.round(Math.random());
            return randomNumber;
        };
        if (getRandom() == 0) {
            console.log(this.playerX);
            return this.playerX;
        }
        else if (getRandom() == 1) {
            console.log(this.playerO);
            return this.playerO;
        }
    }
    makeAMove(row, column, symbol) {
        /**
         * Input: row, colum, symbol
         * row can be 0, 1 or 2. colum van be 0-2 symbol = X or 0
         */
        if (row < 0 || (row > 2 && column < 1) || column > 2) {
            console.log("Move is invalid. Please try again.");
            return;
        }
        if (this.board[row][column] != "-") {
            console.log("Spot is already taken. Please try another position.");
            return;
        }
        this.board[row][column] = symbol;
        console.log(this.board);
    }
    decideWinner() {
        for (let i = 0; i < 2; i++) {
            if (this.board[i][0] != "-" && this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]) {
                console.log(`${this.board[0][0]} is the winner`);
            }
            else if (this.board[0][i] != "-" && this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]) {
                console.log(`${this.board[0][0]} is the winner`);
            }
            // check if all values are the same in the third column
            else if (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) {
                console.log(`${this.board[0][0]} is the winner`);
            }
            // check if all values are the same in the third column
            else if (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]) {
                console.log(`${this.board[0][0]} is the winner`);
            }
        }
        // // check if all values are the same in the first row
        // if (this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2]) {
        //   console.log(`${this.board[0][0]} is the winner`);
        // }
        // // check if all values are the same in the second row
        // else if (this.board[1][0] == this.board[1][1] && this.board[1][0] == this.board[1][2]) {
        //   console.log(`${this.board[0][0]} is the winner`);
        // }
        // // check if all values are the same in the second row
        // else if (this.board[2][0] == this.board[2][1] && this.board[2][0] == this.board[2][2]) {
        //   console.log(`${this.board[0][0]} is the winner`);
        // }
        // // check if all values are the same in the first column
        // else if (this.board[0][0] == this.board[1][0] && this.board[0][0] == this.board[2][0]) {
        //   console.log(`${this.board[0][0]} is the winner`);
        // }
        // // check if all values are the same in the second column
        // else if (this.board[0][1] == this.board[1][1] && this.board[2][1] == this.board[2][0]) {
        //   console.log(`${this.board[0][0]} is the winner`);
        // }
        // // check if all values are the same in the third column
        // else if (this.board[0][2] == this.board[1][2] && this.board[2][2] == this.board[2][0]) {
        //   console.log(`${this.board[0][0]} is the winner`);
        // }
    }
}
exports.TicTacToe = TicTacToe;
const game = new TicTacToe();
// game.display();
game.makeAMove(0, 0, "X");
game.decideWinner();
game.makeAMove(0, 1, "X");
game.makeAMove(0, 2, "X");
