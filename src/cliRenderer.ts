import {Board, Renderer} from "./types";

export class CliRenderer implements Renderer {
    private firstRender: boolean;

    visualize(board: Board) {
        if (this.firstRender) {
            console.log('Choose a cell numbered from 1 to 9 as below and play\n');
            this.firstRender = false;
        }

        let blob = '';
        board.grid.forEach((row, x) => {
            row.forEach((cell, y) => {
                blob += cell.value;
                if (row.length - 1 !== y) {
                    blob += '|';
                }
            });
            blob += '\n';

            if (board.grid.length - 1 !== x) {
                blob += '-----';
                blob += '\n';
            }
        });

        console.log(blob);
        console.log('-    -    -    -    -    -    -    -    -    -');
    }

}