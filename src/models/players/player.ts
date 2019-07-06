export class Player {
    _name: string;
    _color: string;
    _number: number;

    constructor(color: string) {
        this._color = color;
        this.setPlayerInfo();
    }

    get name(): string {
        return this._name;
    }

    get color(): string {
        return this._color;
    }

    setPlayerInfo() {
        if(this.color == "red"){
            this._name = "Player 1";
            this._number = 1;
        }
        else{
            this._name = "Player 2";
            this._number = -1;
        }
    }
}
