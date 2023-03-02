export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.element = document.querySelector(seletor);
        }
        else {
            throw Error(`Seletor ${seletor} nao existe no DOM, verifique!`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<scrpit>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map