import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected element: HTMLElement;

    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);

        if (elemento) {
            this.element = document.querySelector(seletor) as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} nao existe no DOM, verifique!`);
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(mode: T): string;

    // @inspect
    // @logarTempoDeExecucao(true)
    update(model: T): void {
        let template = this.template(model);

        if (this.escapar) {
            template = template.replace(/<scrpit>[\s\S]*?<\/script>/, '')
        }

        this.element.innerHTML = template
    }

}