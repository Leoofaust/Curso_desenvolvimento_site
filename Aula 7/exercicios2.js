const nome = 'Albert'
const altura = 1.80;
const peso = 130;
const imc = peso / (altura * altura);
const arr = imc.toFixed(2);

console.log(`Seu IMC é igual a: ${arr}`)

if (imc < 18.5) {
    console.log(`${nome} , você se encontra abaixo do peso`)
}

else if (imc >= 18.5 && imc < 24.9) {
    console.log(`${nome} , você se encontra com peso normal`)
}

else if (imc >= 25 && imc < 29.9) {

    console.log(`${nome} , você se encontra com sobrepeso`)
}

else if (imc >= 30 && imc < 34.9) {
    console.log(`${nome} , você se encontra com Obesidade Grau I`)
}

else if (imc >= 35 && imc < 39.9) {
    console.log(`${nome} , você se encontra com Obesidade Grau II (severa)`)
}

else {
    console.log(`${nome} , você se encontra com Obesidade Grau III (mórbida)`)
}