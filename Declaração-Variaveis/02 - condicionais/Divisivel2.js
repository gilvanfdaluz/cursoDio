//Variaveis Boolean

const numero = 0;
const numerodivisivel5 = (numero % 5) === 0;

if (numero === 0){
  console.log('O número é invalido');
}else if (numerodivisivel5){
  console.log('Sim');
}else{
    console.log('Não');
}