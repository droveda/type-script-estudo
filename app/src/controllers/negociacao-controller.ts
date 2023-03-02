import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView", true);
    private mensagemView = new MensagemView("#mensagemView");
    private negociacoesService: NegociacoesService = new NegociacoesService();

    constructor() {
        // this.inputData = <HTMLInputElement>document.querySelector('#data');
        // this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        // this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoDeExecucao()
    public adiciona(): void {

    let negociacao = Negociacao.criaDe(
        this.inputData.value, 
        this.inputQuantidade.value, 
        this.inputValor.value
    );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são possíveis!');    
            return;       
        } 

        // console.log(negociacao);
        this.negociacoes.adiciona(negociacao);
        // console.log(this.negociacoes.lista());
        this.limparFormulario();
        this.atualizaView();
        
        imprimir(negociacao, this.negociacoes);
    }

    importaDados(): void {
        const dados = this.negociacoesService.obterNegociacoes();
        dados
        .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(deHoje => {
                return !this.negociacoes
                    .lista()
                    .some(negociacao => negociacao.ehIgual(deHoje));
            });
        })
        .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDate() < DiasDaSemana.SABADO;
    }


    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }

}