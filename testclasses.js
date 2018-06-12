class ElementCard {
    constructor(/* args */) {
        // element, (associated suit), image path   
    }
}

class SpellCard {
    constructor(/* args */) {
        // name, elements, text 
    }
    // effect method
}


class Deck {
    constructor(type) {
        if(type=="element"){
            this.cards = this.initializeElements();
        }
        else if(type=="spell") {
            this.cards = this.initializeSpells();
        }
        else {
            throw "Not a valid deck type"
        }
    }

    initializeElements() {
        let deck = [];
        let suits = ['Air','Earth','Fire','Water','Aether'];
        // let cards = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        // suits.forEach(suit=>{
        //     cards.forEach((card, i)=>{
        //         let newCard = new Card(card, suit, i+1);
        //         deck.push(newCard);
        //     })
        // });
        // this.cards = deck;
        // this.shuffle();
        // console.log(this);
        // return deck;
    }

    initializeSpells() {

    }

    shuffle() {
        // for (let i = this.cards.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        // }
        // return this;
    }

    deal() {
        // let r = Math.floor(Math.random() * 52);
        // return this.cards.splice(r,1)[0];
    }

}

class Player {
    constructor(/* args */) {

    }

    draw(deck, handSize) {
        // for(let h=0; h < handSize; h++){
        //     this.hand.push(deck.deal());
        // }
        // return this;
    }

    discard(i) {
        // return this.hand.splice(i%this.hand.length,1)[0];
    }

}