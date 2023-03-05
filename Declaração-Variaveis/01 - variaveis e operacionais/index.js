//Faça um programa para calcular o valor de uma viagem.

// Faça um programa para calcualar o valor gasto de combustivel.

// Voce terá 3 variaveis. Sendo ela:
// -1 preço do combustivel;
// -2 Valor médio de gasto do carro;
// -3 Distancia e quilometro da viagem;

// Imprima no console o valor que será gasto de combustivel para realizar a viagem;

const precoComb = 5.98;
const media = 2;
const kmRodado = 500;

const litrosCons = kmRodado / media;
const gasto = litrosCons * precoComb;

console.log(gasto.toFixed(2));