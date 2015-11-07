import V from './exportador';

console.log(V); // [Function: Veiculo]

let veiculo = new V();

console.log(veiculo); // Veiculo {rodas: 2, velocidadeMaxima: 350};
console.log(veiculo.rodas); // 2
console.log(veiculo.velocidadeMaxima); // 350
