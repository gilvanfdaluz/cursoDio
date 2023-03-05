/*
  O IMC - Indice de Massa Corporal é um cretério da Organização Mundial de     
   Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

   Fromula do IMC:
   IMC = peso / (altura * altura)

   Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua       
   condição de acordo com a tabela abaixo.

   IMC em adultos Condição:

   - Abaixo de 18.5 abaixo do peso;
   - Entre 18.5 e 25 peso normal;
   - Entre 25 e 30 Acima do peso;
   - Entre 30 e 40 Obeso;
   - Acima de 40 Obesidade Grave;
*/

let peso = 68;
let altura= 1.72;
const imc = peso / Math.pow(altura, 2);
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
