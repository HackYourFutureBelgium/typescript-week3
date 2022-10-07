import {Board, Cell, Symbol} from "./types";

export class ClassicBoard implements Board {
    grid: Cell[][]

    constructor(rows: number, columns: number) {
        this.grid = [];
        let index = 1;
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                if (!this.grid[row]) {
                    this.grid[row] = [];
                }

                this.grid[row][column] = {
                    x: column,
                    y: row,
                    value: index.toString()
                }

                index++;
            }
        }
    }

    place(x: number, y: number, value: Symbol) {
        if (this.grid[y][x].value in Symbol) {
            throw new Error(`Place ${x}:${y} is occupied.`);
        }

        this.grid[y][x] = {
            x,
            y,
            value: value
        };
    }

    clear() {
        this.grid.forEach((row) => {
            row.forEach((cell) => {
                cell.value = ' ';
            });
        });
    }

    columns(): number {
        return this.grid[0].length;
    }

    rows(): number {
        return this.grid.length;
    }
}