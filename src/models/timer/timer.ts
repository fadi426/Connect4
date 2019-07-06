export class Timer {
    _time: number;
    _timeLeft: number;
    _timeString: string;

    constructor(time:number) {
        this._time = time +1;
        this._timeLeft = time;
    }

    tick(){
        this._timeLeft -= 1;

        this._timeString = this._timeLeft.toString();
    }

    reset(){
        this._timeLeft = this._time;
    }

    get timeString(): string {
        return this._timeString;
    }

}
