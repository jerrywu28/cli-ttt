const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.readFile('./gamestate.js', 'utf8', (err, data) => {
  let rowData = data.split(';');
  let cleanData = rowData.map(row => row.slice(-9));
})

let newGameStr = 'let row1 = [0, 0, 0];\nlet row2 = [0, 0, 0];let row3 = [0, 0, 0];';
let newGame = () => {
  fs.writeFile('./gamestate.js', newGameStr, 'utf8', (err, success) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Successful write: ', success);
    }
  })
}

rl.question('Start a new game? [Y/N]', (answer) => {
  if (answer.toUpperCase() === 'Y') {
    console.log('Ok, let\'s play.');
    console.log(`Here is your game board:\n
    \n
    1 | 2 | 3\n
    ---------\n
    4 | 5 | 6\n
    ---------\n
    7 | 8 | 9
    `)
    rl.question('Where do you want to put an X?', (answer) => {
      if (answer === '1') {
        console.log('Okay, good choice.');
      } else {
        console.log('You are a dummy.');
      }
    })
  } else if (answer.toUpperCase() === 'N') {
    console.log('Okay, whatever.');
  } else {
    console.log('Not sure what you want me to do here.');
  }
})