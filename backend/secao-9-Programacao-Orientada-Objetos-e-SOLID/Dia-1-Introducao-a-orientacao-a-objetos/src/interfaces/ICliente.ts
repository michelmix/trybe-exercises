export default class ICliente {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newValue: string) {
        this._name = newValue;
    }
}
