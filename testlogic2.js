const Gameboard = require('./classes/gameboard.js');
const Deck = require('./classes/deck.js'); 
const Player = require('./classes/player.js');

const express = require('express');
const app = express();
const server = app.listen(8000);
const bodyParser = require('body-parser');

const io = require('socket.io');


// socket event handling


// game state logic

let elementDeck = new Deck();
elementDeck.initializeAsElementDeck();
console.log(elementDeck);

let gameboard = new Gameboard(elementDeck);
gameboard.printState();