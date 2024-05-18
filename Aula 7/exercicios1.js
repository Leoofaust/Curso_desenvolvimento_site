var rendaCidadao = 1000;
var imposto = 85528

if (rendaCidadao <= imposto) {
  imposto = (rendaCidadao * 18 / 100) - 556;
  console.log(imposto); 
} 

else {
  if (rendaCidadao > imposto) {
    restante = (rendaCidadao - imposto)
    imposto = (restante * 32 / 100 + 14839)
    console.log(imposto); 
  }
} 
