let dadosPessoais = {
    nome: "Tayná",
    idade: 20,
    altura: 1.58
}
console.log(dadosPessoais);

dadosPessoais.cidade = "Araçatuba - SP"
console.log(dadosPessoais);

delete dadosPessoais.idade;
console.log(dadosPessoais);


let cadastro = [{
    nome: 'Tayna',
    idade: 20,
    telefone: 18988071968,
    amigos: ['Joãozinho', 'Maria', 'Carlos', 'Pedro']
}, {
    nome: 'Joãozinho',
    idade: 30,
    telefone: 36363636,
    amigos: ['Tayna', 'Maria', 'Carlos', 'Pedro']
}, {
    nome: 'Maria',
    idade: 40,
    telefone: 36363636,
    amigos: ['Joãozinho', 'Tayna', 'Carlos', 'Pedro']

}, {
    nome: 'Carlos',
    idade: 50,
    telefone: 36363636,
    amigos: ['Joãozinho', 'Tayna', 'Maria', 'Pedro']

}, {
    nome: 'Pedro',
    idade: 60,
    telefone: 36363636,
    amigos: ['Joãozinho', 'Tayna', 'Maria', 'Carlos']
}]

cadastro[0].nome = [0];
console.log(cadastro);