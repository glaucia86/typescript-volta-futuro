/**
 * arquivo: index.ts
 * Data: 12/09/2020
 * Autora: Glaucia Lemos
 * Descrição: Exemplo de como usar o optional chaining no Typescript
 * Optional Chaining Doc: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
 * Video: https://www.youtube.com/watch?v=RJ9G_KshJ9s
 */
var _a, _b;
//==> Simulando uma base de dados:
const palestrante_1 = {
    nomeEvento: 'CodeCon 2020',
    palestrante: {
        nomePalestrante: 'Glaucia Lemos'
    }
};
//==> Simulando uma base de dados:
const palestrante_2 = {
    nomeEvento: 'CodeCon 2020'
};
/*if (palestrante_2 && palestrante_2.palestrante && palestrante_2.palestrante.nomePalestrante) {
  console.log(palestrante_2.palestrante.nomePalestrante)
}*/
// ==> Optional Chaining
//if (palestrante_1 && palestrante_1.palestrante && palestrante_1.palestrante.nomePalestrante) {
console.log((_b = (_a = palestrante_1 === null || palestrante_1 === void 0 ? void 0 : palestrante_1.palestrante) === null || _a === void 0 ? void 0 : _a.nomePalestrante) !== null && _b !== void 0 ? _b : 'Erick Wendel');
//}
