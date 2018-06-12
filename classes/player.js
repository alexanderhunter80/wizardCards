module.exports = class Player {
    constructor(id, socketid, name) {
        this.id = id;
        this.socketid = socketid;
        this.name = name;
        this.spells = [];
        this.health = 5;
        this.shields = 0;
        this.aptokens = 0;
        this.hptokens = 0;
        this.isGhost = false;
    }

    // method(params) {}
}