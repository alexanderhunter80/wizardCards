module.exports = class Gameboard {
    constructor(elementDeck){
        this.cards = [[],[],[],[]];
        for(let y = 0; y < 4; y++){ // rows in grid
            for(let x = 0; x < 4; x++){ // columns in grid
                let drawnCard = elementDeck.topCard();
                console.log(drawnCard);
                if ((y == 1 || y == 2) && (x == 1 || x == 2)){ // if one of the four central grid positions, make card faceup by default
                    drawnCard.faceUp = true;
                }
                this.cards[y].push(drawnCard);
            }
        }
    }

    weave(y1,x1,y2,x2) {
        console.log('Weaving '+this.cards[y1][x1].elem+' at '+y1+', '+x1+' and '+this.cards[y2][x2].elem+' at '+y1+', '+x1+'...');
            // Weaving ELEMENT at y1, x1 and ELEMENT at y2, x2
        let temp = this.cards[y1][x1];
        this.cards[y1][x1] = this.cards[y2][x2];
        this.cards[y2][x2] = temp;
        console.log('*'.repeat(63));
        console.log('*'.repeat(25)+' AFTER WEAVING '+'*'.repeat('25'));
        this.printState();
    }

    obscure(y1,x1) {
        console.log('Obscuring '+this.cards[y1][x1].elem+' at '+y1+', '+x1+'...');
        this.cards[y1][x1].faceUp = false;
        console.log('*'.repeat(63));
        console.log('*'.repeat(25)+' AFTER OBSCURING '+'*'.repeat('25'));
        this.printState();
    }

    scry(y1,x1) {
        console.log('Scrying '+this.cards[y1][x1].elem+' at '+y1+', '+x1+'...');
        this.cards[y1][x1].faceUp = true;
        console.log('*'.repeat(63));
        console.log('*'.repeat(25)+' AFTER SCRYING '+'*'.repeat('25'));
        this.printState();
    }

    // print state of game to terminal in formatted ASCII
    // currently only prints element grid; ALLCAPS = face up
    printState(){
        let white = '            ';
        let printFormat = function(card) {
            let pstr = card.elem+white.slice(0,12-card.elem.length);
            if (card.faceUp == true){
                pstr = pstr.toUpperCase();
            }
            return pstr;
        }

        console.log('*'.repeat(61));
        console.log('');
        console.log('xxxx       '+printFormat(this.cards[0][0])+printFormat(this.cards[0][1])+printFormat(this.cards[0][2])+printFormat(this.cards[0][3])+'xxxx');
        console.log('');
        console.log('xxxx       '+printFormat(this.cards[1][0])+printFormat(this.cards[1][1])+printFormat(this.cards[1][2])+printFormat(this.cards[1][3])+'xxxx');
        console.log('');
        console.log('xxxx       '+printFormat(this.cards[2][0])+printFormat(this.cards[2][1])+printFormat(this.cards[2][2])+printFormat(this.cards[2][3])+'xxxx');
        console.log('');
        console.log('xxxx       '+printFormat(this.cards[3][0])+printFormat(this.cards[3][1])+printFormat(this.cards[3][2])+printFormat(this.cards[3][3])+'xxxx');
        console.log('');
        console.log('*'.repeat(61));
        console.log(this.cards);
    }


}