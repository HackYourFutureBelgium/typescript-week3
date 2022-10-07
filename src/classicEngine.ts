import {Board, Engine, Player, GameEvent} from "./types";

export class ClassicEngine implements Engine {

    readonly players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    handle(event: GameEvent): void {
        this.players.forEach(player => player.notify(event));
    }

    compute(board: Board): Player | boolean {
        if (this.outOfMoves(board)) {
            return false;
        }

        for (const player of this.players) {
            if (this.outOfMoves(board)) {
                return false;
            }

            const move = player.getMove(board);
            console.log(`${player.getName()} has put a ${player.getSymbol()} in ${move}`)
            const y = Math.floor((move - 1) / board.columns());
            const x = (move - 1) % board.columns();
            board.place(x, y, player.getSymbol());

            if (this.isWinner(x, y, player, board)) {
                return player;
            }
        }

        return true;
    }

    outOfMoves(board: Board) {
        let over = true;
        board.grid.forEach((row) => {
            row.forEach((cell) => {
                if (!(cell.value in Symbol)) {
                    over = false;
                }
            });
        });

        return over;
    }

    isWinner(x: number, y: number, player: Player, board: Board): boolean {
        let col = 0;
        let row = 0;
        let diag = 0;
        let rdiag = 0;

        const requiredConsecutiveSymbols = board.columns();

        for (let i = 0; i < requiredConsecutiveSymbols; i++) {
            if (board.grid[y][i].value == player.getSymbol()) {
                col++;
            }

            if (board.grid[i][x].value == player.getSymbol()) {
                row++;
            }

            if (board.grid[i][i].value == player.getSymbol()) {
                diag++;
            }

            if (board.grid[i][requiredConsecutiveSymbols - i + 1]) {
                rdiag++;
            }
        }

        return row === requiredConsecutiveSymbols
            || col === requiredConsecutiveSymbols
            || diag === requiredConsecutiveSymbols
            || rdiag == requiredConsecutiveSymbols;
    }
}