// Exercícios de interpretação de código

/*
Exercício 1
Resposta A:
10
50
Resposta B:
Como o valor dentro da função não foi colocado dentro do 'console.log' ele não exibiria na página da web.
*/

/*
Exercício 2
Resposta A:
Pede que o usuário digite um texto, posteriormente, dentro da função o texto altera é alterado para minúsculo
e o "programa" procura pela palavra 'cenoura', exibindo a resposta do usuário com as mudanças na página da web.
Resposta B:
I.
eu gosto de cenoura, true
II.
cenoura é bom pra vista, true
III.
cenouras crescem na terra, false
*/

// Exercícios de escrita de código

/*
Exercício 1 (Incompleto)
Resposta A:


let exercicioUsuario = () => {
    const nomeUsuario = prompt("Qual o seu nome?");
    const idadeUsuario = prompt("Qual a sua idade?");
    const enderecoUsuario = prompt("Qual é o seu endereço?");
    const profissaoUsuario = prompt("Qual a sua profissão?");
    const informacoesUsuario = `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${enderecoUsuario} e sou ${profissaoUsuario}`;
    
    console.log(informacoesUsuario);
}

exercicioUsuario()


Resposta B:

let exercicioUsuario = (nome, idade, endereco, profissao) => {
    const informacoesUsuario = "Eu sou Anderson, tenho 15 anos, moro em São Leopoldo e sou estudante.";
    
    console.log(informacoesUsuario);
}

exercicioUsuario()
*/

/*
Exercício 2
Resposta A:

let exercicioNumbers = (a, b) => {
    const soma = a + b;
    console.log(soma);
}

exercicioNumbers(25, 12)
*/

/*
Resposta B:

let numberVerificacaoResultado = (a, b) => {
    const verificacao = a > b;
    console.log(verificacao);
}
numberVerificacaoResultado(15, 10)
*/

/*
Resposta C

let numberVerificacaoTipo = (a, b) => {
    const verificacaoUm = a % 2;
    const verificacaoDois = b % 2;
    const verificacaoTres = verificacaoUm == 0;
    const verificacaoQuatro = verificacaoDois == 0;

    console.log(verificacaoTres);
    console.log(verificacaoQuatro);
}

numberVerificacaoTipo(10, 7)
*/

/*
Resposta D:

let textoQuantidade = (mensagem) => {
    const mensagemUsuario = mensagem;
    console.log(mensagemUsuario.length);
    const mensagemMinuscula = mensagemUsuario.toUpperCase();
    console.log(mensagemMinuscula);
}
textoQuantidade (prompt("Insira uma frase:"));
*/

/*
Exercício 3
Resposta:

let operacoesBasicas = (a, b) => {
    const soma = a + b;
    const subtracao = a - b;
    const multiplicacao = a * b;
    const divisao = a / b;

    console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`);
    console.log(`Soma: ${soma}`);
    console.log(`Diferença: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
}

const primeiroNumero = prompt("Digite um número: ");
const segundoNumero = prompt("Digite outro número: ");
operacoesBasicas(Number(primeiroNumero), Number(segundoNumero))
*/

/*
Desafio 1 (Incompleto)
Resposta:

let exercicioDesafioUm = (mensagem) => {
    const desafioUmFrase = perguntaDesafioUm;
    console.log(mensagem);
}
const perguntaDesafioUm = prompt("Digite uma mensagem: ");
const respostaDesafioUm = desafioUmFrase;
exercicioDesafioUm(respostaDesafioUm)
*/