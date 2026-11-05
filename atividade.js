//Crie um programa que receba o usuário e a senha em variáveis. Exiba a mensagem "Acesso permitido" apenas se o usuário for exatamente "admin" e a senha for "1234"

// var usuario = "admin"
// var senha = "123"

// if (usuario == "admin" && senha == "123"){
//     console.log("Acesso permitido");

// }else {
//     console.log("Acesso negado");

// }

// //Crie um programa que leia a idade de uma pessoa. O porque dá entrada gratuita se a pessoa tiver menos de 6 anos ou tiver 60 anos ou.  Exiba se a pessoa pega ou entra de graça.

// var  idade = 100

// if( idade ==6 || idade >=60 ){
//     console.log("Entraga Gratuita");

// }else{
//     console.log("A Pessoa paga");

// }

// //Crie um programa que tenha uma variável booleana lampadaAcesa. Use o operador de negação para inverter o estado da lêampada e exiba no console o novo estado (se estava true, vire false e vice-versa.)

// var lampadaAcesa = "false"
//     console.log(!lampadaAcesa == "false");

//Crie uma função que receba a idade de uma pessoa e uma variável booleana temCarteira. A função deve retornar true apenas se a idade for maior ou igual a 18 e temCarteira for true


    // var idade = 19
    // var temCarteira = true

    // if (idade >= 18 && temCarteira == true ) {
    //     console.log("Tem Carteira");
        
    // }else {
    //     console.log("Não tem carteira")
        
    // }


//O Cinema dá desconto se o dia da semana for "quarta-feira" ou se o cliente for "estudante". Crie um programa que receba o dia e a condição de estudante (true/false) e informe se ele tem direito ao desconto.

// var semana = "segunda-feira"
// var cliente = "estudante"

// if(semana == "quarta-feira" || cliente == "estudante"){
//  console.log("Cliente tem desconto");
// } else {
//     console.log("Sem desconto");
    
// }
   
//Um sitema de alarme deve disparar se a portaAverta for true ou se a janelaAberta for true. Escreva uma estritura de condição que exiva "Alarme Disparado" quando qualquer uma das duas estiver aberta

// var portaAberta = "false"
// var janelaAberta = "false"

// if (portaAberta == "true" || janelaAberta == "true"){
//     console.log("Alarme Disparado!");
    
// } else{
//     console.log(" Tudo Seguro!");
    
// }

//Escreva um programa que receba um número e verifique se ele está no intervalo entre 10 e 20 (inclusive). Exiba no console se o número está ou não no intervalo.

// var numero = 30

// if ( numero > 10 && numero < 20 ){
//     console.log("O número está entre 10 e 20");
    
// } else {
//     console.log(" O número não está entre 10 e 20 ");
    
// }

//Um aluno é aprovado se tiver nota maior ou igual a 7 e frequencia maior ou igual a 75%. Porém, se ele tiver nota menor que 7, mas tiver o trabalhoExtra como true e frequencia maior ou igual a 75%, ele também é aprovado. Crie a lógica para verificar a situação do aluno.

// var nota = 7
// var frequencia = 75
// var trabalhoExtra = true

// if( nota >= 7 && frequencia >= 75 || nota < 7 && trabalhoExtra == true && frequencia >= 75){
//     console.log("Aluno aprovado");
    
// }else{
//     console.log("Aluno reprovado");
    
// }

//09.Para entrar em um brinquedo do parque, a pessoa precisa ter altura maior ou igual a 1.50m e idade maior ou igual a 12 anos. Porém, se a pessoa tiver problemaCardiaco igual a true, ela não pode andar de jeito nenhum.

// var altura = 1.50
// var idade = 12
// var problemaCardiaco = true

// if (altura <= 1.50 && idade <= 12 && !problemaCardiaco ){
//     console.log("Pode andar no brinquedo");
    
// }else{
//     console.log("Não pode de jeito nenhum ir no brinquedo");
    
// }

//10.Uma loja online oferece frete grátis se o valorCompra foi maior que $100 ou se o cliente for membroVIP. No entanto, o frete frátis não se aplica se a entrega for para zonaRura. Crie o programa que retorne se o cliente tem direito ao frete grátis

var valorCompra = 101
var menbroVIP = true
var zonaRural = true

if(valorCompra >100 && membroVIP == true || !zonaRural){
    console.log("o frete grátis não se aplica");
    
} else{
    console.log("não tem frete");
    
}