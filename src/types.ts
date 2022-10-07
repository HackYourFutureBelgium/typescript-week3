export enum Symbol {
    X = 'X',
    O = 'O'
}

export type Cell = {
    x: number,
    y: number,
    value: Symbol | string
}

export type GameEvent = {
    action: string,
    cellNumber: number
}

export interface Player {
    getName(): string

    getMove(board: Board): number

    getSymbol(): Symbol

    notify(inputEvent: GameEvent): void;
}

export interface Board {
    grid: Cell[][];

    place(x: number, y: number, value: Symbol): void;

    clear(): void;

    columns(): number;

    rows(): number;
}

export interface BoardGame {
    render(): void;

    loop(events: GameEvent[]): void;
}

export interface Engine {
    players: Player[];

    compute(board: Board): Player | boolean;

    outOfMoves(board: Board): boolean;

    isWinner(x: number, y: number, player: Player, board: Board): boolean;

    handle(event: GameEvent): void;
}

export interface Renderer {
    visualize(board: Board): void;
}