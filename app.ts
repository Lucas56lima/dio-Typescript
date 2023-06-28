import { contaCompania } from "./Class/ContaCompania";
import { contaEstudante } from "./Class/ContaEstudante";
import { contaPessoal } from "./Class/ContaPessoal";

const conta_Compania: contaCompania = new contaCompania('Dio',20)
conta_Compania.deposito(50);
const conta_Pessoal: contaPessoal = new contaPessoal(1,'Lucas',2)

const conta_Estudante:contaEstudante = new contaEstudante('Duda',21);

console.log(conta_Estudante);

conta_Estudante.depositoEstudante(200);
conta_Estudante.depositoEstudante(300);
conta_Estudante.depositoEstudante(1);
console.log(conta_Estudante.consultarSaldo());
