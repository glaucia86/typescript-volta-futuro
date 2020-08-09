/**
 * arquivo: index.ts
 * Data: 12/09/2020
 * Autora: Glaucia Lemos
 * Descrição: Exemplo de como usar o optional chaining no Typescript
 * Optional Chaining Doc: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
 */

interface Evento {
  nomeEvento?: string;
  palestrante?: Palestrante
}

interface Palestrante {
  nomePalestrante?: string;
}

//==> Simulando uma base de dados:
const palestrante_1: Evento = {
  nomeEvento: 'CodeCon 2020',
  palestrante: {
    nomePalestrante: 'Glaucia Lemos'
  }
};

//==> Simulando uma base de dados:
const palestrante_2: Evento = {
  nomeEvento: 'CodeCon 2020'
};

/*if (palestrante_2 && palestrante_2.palestrante && palestrante_2.palestrante.nomePalestrante) {
  console.log(palestrante_2.palestrante.nomePalestrante)
}*/

// ==> Optional Chaining
//if (palestrante_1 && palestrante_1.palestrante && palestrante_1.palestrante.nomePalestrante) {
  console.log(palestrante_1?.palestrante?.nomePalestrante ?? 'Erick Wendel')
//}








