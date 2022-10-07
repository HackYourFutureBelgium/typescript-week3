import {Board, Cell, Player, Symbol, GameEvent} from "./types";

export class HumanPlayer implements Player {

    move: number;

    constructor() {
        this.move = 1;
    }

    getMove(board: Board): number {
        return this.move;
    }

    getSymbol(): Symbol {
        return Symbol.X;
    }

    notify(event: GameEvent): void {
        this.move = event.cellNumber;
    }

    getName(): string {
        return "HUMAN";
    }

}

export class RandomAIPlayer implements Player {

    getMove(board: Board): number {
        let emptyCells: Cell[] = [];
        board.grid.forEach((row) => {
            row.forEach((cell) => {
                if (!(cell.value in Symbol)) {
                    emptyCells.push(cell);
                }
            });
        });

        const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (!cell) {
            throw new Error(`Can't find an available move`);
        }

        return cell.y * board.columns() + (cell.x + 1);
    }

    getSymbol(): Symbol {
        return Symbol.O;
    }

    notify(event: GameEvent): void {
        // nothing to do
    }

    getName(): string {
        return "COMPUTER";
    }

}