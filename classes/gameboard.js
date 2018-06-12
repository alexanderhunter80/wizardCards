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



    printState(){
        let white = '            ';
        console.log('*'.repeat(61));
        console.log('');
        console.log('xxx       '+this.cards[0][0].elem+white.slice(0,12-this.cards[0][0].elem.length)+this.cards[0][1].elem+white.slice(0,12-this.cards[0][1].elem.length)+this.cards[0][2].elem+white.slice(0,12-this.cards[0][2].elem.length)+this.cards[0][3].elem+white.slice(0,12-this.cards[0][3].elem.length)+'xxx');
        console.log('');
        console.log('xxx       '+this.cards[1][0].elem+white.slice(0,12-this.cards[1][0].elem.length)+this.cards[1][1].elem+white.slice(0,12-this.cards[1][1].elem.length)+this.cards[1][2].elem+white.slice(0,12-this.cards[1][2].elem.length)+this.cards[1][3].elem+white.slice(0,12-this.cards[1][3].elem.length)+'xxx');
        console.log('');
        console.log('xxx       '+this.cards[2][0].elem+white.slice(0,12-this.cards[2][0].elem.length)+this.cards[2][1].elem+white.slice(0,12-this.cards[2][1].elem.length)+this.cards[2][2].elem+white.slice(0,12-this.cards[2][2].elem.length)+this.cards[2][3].elem+white.slice(0,12-this.cards[2][3].elem.length)+'xxx');
        console.log('');
        console.log('xxx       '+this.cards[3][0].elem+white.slice(0,12-this.cards[3][0].elem.length)+this.cards[3][1].elem+white.slice(0,12-this.cards[3][1].elem.length)+this.cards[3][2].elem+white.slice(0,12-this.cards[3][2].elem.length)+this.cards[3][3].elem+white.slice(0,12-this.cards[3][3].elem.length)+'xxx');
        console.log('');
        console.log('*'.repeat(61));
        console.log(this.cards);
    }
}