const Gameboard = require('./classes/gameboard.js');
const Deck = require('./classes/deck.js'); 


let deck = new Deck();
deck.initializeAsElementDeck();
console.log(deck);

let gameboard = new Gameboard(deck);
gameboard.printState();