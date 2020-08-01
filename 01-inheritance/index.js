/**
 * arquivo: index.ts
 * Data: 12/09/2020
 * Autora: Glaucia Lemos
 * Descrição: Exemplo de como usar herança no Typescript
 */
class Pessoa {
    /**
     * Construtor da Classe: 'Pessoa'
     */
    constructor(nome) {
        this.nome = nome;
    }
}
class Funcionario extends Pessoa {
    /**
     * Construtor da Classe: 'Funcionário'
     */
    constructor(nome, departamento) {
        super(nome);
        this.departamento = departamento;
    }
    /**
     * Método da Classe 'Funcionário':
     */
    apresentarNovoFuncionario() {
        console.log(`Olá. Meu nome é ${this.nome} e eu trabalho no departamento de ${this.departamento}`);
    }
}
let funcionario = new Funcionario('Glaucia Lemos', 'Engenharia e Desenvolvimento');
console.log(funcionario.apresentarNovoFuncionario());
//console.log(funcionario.nome) // descomentar --> Aqui dará erro pois a propriedade 'nome' está como 'private'
//# sourceMappingURL=index.js.map