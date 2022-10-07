const readline = require('readline');

import { game } from "./src/tictactoe";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

game.render();

rl.prompt();

rl.on('line', (line: string) => {
    if (line.toLowerCase() === "exit") {
        process.exit(0);        
    }

    game.loop([{
        action: 'human_move',
        cellNumber: parseInt(line.trim())
    }]);
    game.render();


    rl.prompt();
}).on('close', () => {
    console.log('Bye!');
    process.exit(0);
});