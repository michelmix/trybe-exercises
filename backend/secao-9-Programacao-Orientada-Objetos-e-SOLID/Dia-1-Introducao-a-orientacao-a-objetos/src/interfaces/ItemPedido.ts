export default class IItemPedido {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(newValue: string) {
        this._name = newValue
    }

    get price(): number {
        return this._price
    }

    set price(newValue: number) {
        this._price = newValue
    }
}