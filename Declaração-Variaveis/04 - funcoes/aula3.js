function incrementarJuros(valor, percentualJuros){
  const valorDeacrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeacrecimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));