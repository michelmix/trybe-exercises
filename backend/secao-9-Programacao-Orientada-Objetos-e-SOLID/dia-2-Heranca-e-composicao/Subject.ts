export default class Subject {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('name must have at least 3 caracters');
    }
    this._name = newValue;
  }
}

const math = new Subject('Matemática');
const history2 = new Subject('História')