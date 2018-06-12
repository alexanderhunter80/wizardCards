module.exports = class SpellCard {
    constructor(name, text, elements, effect) {
        this.name = name;
        this.text = text;  // text of spell effect
        this.elements = elements;  // is an array of elements, in one way or another
        this.effect = effect;  // is a function that fires when card is played
    }

    // method(){}
}