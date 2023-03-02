import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {

    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {

    }

    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }

    // get quantidade() {
    //     return this._quantidade;
    // }

    // get valor() {
    //     return this._valor;
    // }

    get volume() {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: String, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        let valor = parseFloat(valorString);

        return new Negociacao(
            date,
            quantidade,
            valor
        );
    }

    public paraTexto(): string {
        return `
            data: ${this.data}
            quantidade: ${this.quantidade}
            valor: ${this.valor}
        `;
    }

    public ehIgual(outra: Negociacao) {
        return this.data.getDate() === outra.data.getDate()
            && this.data.getMonth() === outra.data.getMonth()
            && this.data.getFullYear() === outra.data.getFullYear();
    }

}