function calcularImc(peso, altura){
  return peso / Math.pow(altura, 2);
}



let peso = 68;
let altura= 1.72;
const imc = (peso, altura);
console.log(imc);

if(imc < 18.5){
  console.log('Abaixo do Peso');
}else if(imc >= 18.5 && imc < 25){
  console.log('Peso Normal');
}else if(imc >= 25 && imc < 30){
  console.log('Acima do peso');
}else if (imc >= 30 && imc < 40){
  console.log('Obeso');
}else{
  console.log('Obesidade Grave')
}

