export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes);
    }
    ehIgual(outras) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(outras.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map