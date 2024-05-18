var nome = 'Leonardo Faustino';
var idade = 18;
var possuiAcompanhante = false; 

if (idade >= 18) {
    console.log(`Maior de idade, bem vindo ${nome}!`);

}

else if (idade < 18 && possuiAcompanhante) {
    console.log(`${nome}, Você é menor de idade mas possui acompanhante, então você pode entrar!`);
    
}

else {
    console.log(`${nome}, você não pode entrar, você não possui acompanhante!.`);
}
