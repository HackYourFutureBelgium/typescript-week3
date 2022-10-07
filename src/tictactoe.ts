import {ClassicEngine} from "./classicEngine";
import {CliRenderer} from "./cliRenderer";
import {HumanPlayer, RandomAIPlayer} from "./players";
import {ClassicBoard} from "./classicBoard";
import {Board, Engine, BoardGame, Renderer, GameEvent} from "./types";

class TicTacToeGame implements BoardGame {

    board: Board
    renderer: Renderer
    engine: Engine

    constructor(board: Board, engine: Engine, renderer: Renderer) {
        this.board = board;
        this.engine = engine;
        this.renderer = renderer;
    }

    render() {
        this.renderer.visualize(this.board);
    }

    loop(events: GameEvent[]) {
        events.forEach((event) => this.engine.handle(event));
        const result = this.engine.compute(this.board);

        if (result === true) {
            // continue;
        } else if (result === false) {
            console.log('GAME OVER');
        } else {
            console.log('WINNER');
        }
    }
}

const game = new TicTacToeGame(
    new ClassicBoard(3, 3),
    new ClassicEngine(
        [
            new HumanPlayer(),
            new RandomAIPlayer()
        ]
    ),
    new CliRenderer()
);

export {game};