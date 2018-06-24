const Gameboard = require('./classes/gameboard.js');
const Deck = require('./classes/deck.js'); 

// prompt allows the terminal to wait for and accept CLI
var prompt = require('prompt');


let elementDeck = new Deck();
elementDeck.initializeAsElementDeck();
console.log(elementDeck);

let gameboard = new Gameboard(elementDeck);
gameboard.printState();

prompt.start();
runLoop = true;
prompt.get('action', function (err, result){

    // echo
    console.log('Input received: "'+result.action+'"');

    // weave - swap two cards, keep their faceUp as it was before
    if(result.action == 'weave') {
        console.log('Please input swap coordinates:');  
        console.log('(format as y1,x1,y2,x2 - origin at top left)');
        prompt.get('coords', function(err, result) {
            // handle err
            if(result.coords) {
                let co = result.coords.split(',');
                gameboard.weave(co[0],co[1],co[2],co[3]);
            }
        });
        // functionalize and recur
    }

    // obscure - set cards' faceUp to false
    if(result.action == 'obscure') {
        let doObscure = function() {
            console.log('Please input coordinates or "cancel":');
            console.log('(format as y,x - origin at top left)');
            prompt.get('coords', function(err, result) {
                // handle err
                if(result.coords == 'cancel'){
                    return result.coords; // in case of later use of global commands - could be null instead
                }
                else if(result.coords) {
                    let co = result.coords.split(',');
                    console.log(co);
                    gameboard.obscure(co[0],co[1]);
                    doObscure();
                }
            });
        }
        doObscure();
    }

    // scry - set card's faceUp to true
    if(result.action == 'scry') {
        let doScry = function() {
            console.log('Please input coordinates or "cancel":');
            console.log('(format as y,x - origin at top left)');
            prompt.get('coords', function(err, result) {
                // handle err
                if(result.coords == 'cancel'){
                    return result.coords; // in case of later use of global commands - could be null instead
                }
                else if(result.coords) {
                    let co = result.coords.split(',');
                    console.log(co);
                    gameboard.scry(co[0],co[1]);
                    doScry();
                }
            });
        }
        doScry();
    }

    // replace - discard one card and replace it
    if(result.action == 'replace') {
        let doReplace = function() {
            console.log('Please input coordinates or "cancel":');
            console.log('(format as y,x - origin at top left)');
            prompt.get('coords', function(err, result) {
                // handle err
                if(result.coords == 'cancel'){
                    return result.coords; // in case of later use of global commands - could be null instead
                }
                else if(result.coords) {
                    let co = result.coords.split(',');
                    console.log(co);
                    gameboard.replace(co[0],co[1]);
                    doReplace();
                }
            });
        }
        doReplace();
    }



    // quit
    if(result.action == 'quit' || result.action == 'exit') {
        runLoop = false;
    }

});

// get this whole "wait for instruction" thing to repeat after finishing the first instruction
