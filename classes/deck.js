const ElementCard = require('./element.js');

module.exports = class Deck {
    constructor() {
        this.cards = [];
    }

    initializeAsElementDeck(){
        // create and push 11 copies of each standard element plus 8 copies of 'aether', then shuffle
        console.log('setting up element deck');
        for(let i = 0; i < 11; i++){
            this.cards.push(new ElementCard('air'));
            this.cards.push(new ElementCard('earth'));
            this.cards.push(new ElementCard('fire'));
            this.cards.push(new ElementCard('water'));
        }
        for(let i = 0; i < 8; i++){
            this.cards.push(new ElementCard('aether'));
        };
        this.shuffle([]);
        console.log('finished initializing');
    };

    initializeAsSpellDeck(){
        // a bunch of mongodb queries here
        // access all spell cards in db, create (copies_per_deck) copies of each card 
    };

    topCard(){
        return this.cards.pop();
    };

    shuffle(discards){ 
        // pass in cards from discard deck
        while(discards[0] != null){
            this.push(discards.pop());
        };

        // shuffle everything together
        let m = this.cards.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = this.cards[m];
          this.cards[m] = this.cards[i];
          this.cards[i] = t;
        }
    };

}