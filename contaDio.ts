// Dio Banking

// Classe Para cadastro de usuario;
// nome, numeroConta;
// Depositar, Sacar;

 export abstract class ContaDio{

    private nome: string
    numeroConta:number
    saldo: number = 0
    private status: boolean = true

    constructor(nome: string,numeroConta:number){
        this.nome = nome
        this.numeroConta = numeroConta
    }

    depositoEstudante = (valor:number):number =>{
          
        let result = this.saldo += valor;
                
        if(this.validaStatus() && this.saldo <= 500){         
            return this.saldo = result;
        }
        throw new Error('Deposito não efetuado, limite de saldo excedido');
    }

    deposito = (valor:number):number =>{
          
        let result = this.saldo += valor;
                
        if(this.validaStatus()){         
            return this.saldo = result;
        }
        throw new Error('Deposito não efetuado');
    }

    saque = (valor:number):number =>{

        let saque = this.saldo -= valor;

        if(this.validaStatus() && this.saldo > 0){

            return saque;
        }
        throw new Error('Saque não realizado');
    }

    
    consultarSaldo = () =>{

        console.log(this.saldo);
    }
  
    setName = (nome:string):void =>{
        this.nome = nome;
        console.log('Nome alterado com sucesso');
    }

    getName = ():string =>{

        return this.nome;
    }

    validaStatus = ():boolean =>{

        if(this.status){
            return this.status
        }

        throw new Error('Conta inativa')
    }
 }
