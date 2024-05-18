const cidades = ["Manaus", "São Paulo", "Guarulhos", "Fortaleza", "Natal", "João Pessoa", "Recife", "Maceió", "Salvador", "Rio de Janeiro", "Brasília", "Goiânia", "Campo Grande", "Uberlândia", "Belo Horizonte", "Contagem", "Curitiba", "Porto Alegre", "São Luís", "Belém", "Teresina", "Campinas", "São Bernardo do Campo", "Santo André", "Osasco", "Sorocaba", "Jaboatão dos Guararapes", "Duque de Caxias", "Nova Iguaçu"];
const filtro = 'N'

const cidadesFiltradas = cidades.filter (cidade => cidade.startsWith(filtro))
console.log (cidadesFiltradas)

console.log (cidades[0].toLowerCase())