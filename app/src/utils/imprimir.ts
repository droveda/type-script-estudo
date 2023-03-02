import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivel[] ) {

    objetos.forEach(objeto => {
        console.log(objeto.paraTexto());
    });

}