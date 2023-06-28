import { ContaDio } from "./ContaDio";

export class contaPessoal extends ContaDio{

    doc_id: number

    constructor(doc_id:number,nome:string,numeroConta:number,){

        super(nome,numeroConta)
        this.doc_id = doc_id;
    }
}


