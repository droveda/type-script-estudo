import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {

    private negociacoes: Array<Negociacao> = [];

    //private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // lista(): ReadonlyArray<Negociacao> {
    //     return this.negociacoes;
    // }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes);
    }

    public ehIgual(outras: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(outras.lista());
    }

}

// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     console.log(n);
// });