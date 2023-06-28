import { ContaDio } from "./ContaDio";

export class contaCompania extends ContaDio{

    constructor(nome: string, contaNumero:number){

        super(nome,contaNumero)
    }

    emprestimo = () =>{

        console.log('Emprestimo contratado');
    }
    deposito = (valor:number):number =>{        
        
        if(this.validaStatus()){
            
          return valor += this.saldo;         
        }
        throw new Error('Deposito não efetuado')
    
    }
}

