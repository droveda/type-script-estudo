export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        let valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    paraTexto() {
        return `
            data: ${this.data}
            quantidade: ${this.quantidade}
            valor: ${this.valor}
        `;
    }
    ehIgual(outra) {
        return this.data.getDate() === outra.data.getDate()
            && this.data.getMonth() === outra.data.getMonth()
            && this.data.getFullYear() === outra.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map