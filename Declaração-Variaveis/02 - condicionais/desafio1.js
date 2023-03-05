//Faça um programa para calcular o valor de uma viagem.

// Voce terá 5 variaveis, sendo elas:

// 1-Preço do etanol;
// 2-Preço gasolina;
// 3-O tipo de combustivel que está no seu carro;
// 4-Gasto médio de combustivel do carro por KM;
// 5-Distancia em KM da viagem

// Imprima no console o valor que será gasto de combustivel para realizar a viagem;

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Etanol";
const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}