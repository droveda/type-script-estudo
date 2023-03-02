export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor

) {

    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);

        if (typeof retorno === 'string') {
            console.log(`@escape em acao na classe 
                ${this.constructor.name} para o metodo ${propertyKey}`);
            retorno = retorno.replace(/<scrpit>[\s\S]*?<\/script>/, '')
        }

        return retorno;
    }

    return descriptor;

}