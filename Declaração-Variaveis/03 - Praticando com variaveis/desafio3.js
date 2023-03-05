/* Elabore um algoritmo que calcula o que deve ser pago por um produto, considerendo o prço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

Código condição de pagamento:
- A vista débito, recebe 10% de desconto;
- A vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiqueta = 100;
const formaDepagamento = 4;

if(formaDepagamento === 1){
  console.log(precoEtiqueta - 
  (precoEtiqueta * 0.1));
}else if (formaDepagamento  === 2){
  console.log(precoEtiqueta - 
  (precoEtiqueta * 0.15));
}else if (formaDepagamento  === 3){
  console.log(precoEtiqueta);
}else{
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}