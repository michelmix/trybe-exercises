export class Student {
    private _matricula: string;
    private _nome: string;
    private _notaProvas: number[];
    private _notaTrabalhos: number[];

    constructor(matricula: string, nome: string) {

        this._matricula = matricula;
        this._nome = nome;
        this._notaProvas = [];
        this._notaTrabalhos = [];
    }

    get matricula(): string {
        return this._matricula;
    }

    set matricula(value: string) {
        this._matricula = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        if (value.length < 3) {
            throw new Error ('O nome deve conter mais de 3 letras')
        }
        this._nome = value
    }

    get notaProvas(): number[] {
        return this._notaProvas;
    }

    set notaProvas(value: number[]) {
        if (value.length > 4) {
            throw new Error ('O aluno pode ter somente 4 notas')
        }
        this._notaProvas = value
    }

    get notaTrabalhos(): number[] {
        return this._notaTrabalhos;
    }

    set notaTrabalhos(newValue: number[]) {
        if (newValue.length > 3) {
            throw new Error ('Cada aluno só pode receber 2 notas de trabalho')
        }
        this._notaTrabalhos = newValue;
    }
}

const student1 = new Student('52252', 'Michel');

const student2 = new Student('ab52', 'Diego Augusto');


