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

// var valorCompra = 100
// var menbroVIP = true
// var zonaRural = true

// if(valorCompra > 100 && (!(membroVIP)) || (!(zonaRural))){
//     console.log("o cliente tem direito ao frete grátis");
    
// } else{
//     console.log("o frete grátis não se aplica");
    
// }

//11. Crie um programa que receba a temperatura atual e uma informação se está chovendo ou não (true ou false) . 

// var temperatura = 16
// var oClimaHojeEstaChuvoso = true

// if (temperatura < 15 || oClimaHojeEstaChuvoso == true ) {
//     console.log("Leve um casaco");
    
// } else {
//     console.log("Vestuário livre");
    
// }

//12. Um clube só permite o uso da poscina se o sócio estiver vestindo traje adequado (tru/ false) e estiver com o exame médico em dia (true/false). Crie um programa que reveba essas duas informações e exiba se a entreda na poscina est[a permitida ou negada

// var oTrajeEstaAdequado = false
// var oExameMedicoEstaEmDia = true

// if (oTrajeEstaAdequado == true && oExameMedicoEstaEmDia == true ) {
//     console.log("Entrada na piscina está permitida");
    
// }else {
//     console.log("Entrada Negada!");
    
// }

//13. Uma loja funciona apenas de segunda a sexta-feira, no horário das 8:00 ás 18:00. Crie um programa que receba o dia da semana e a hora atual (número inteiro) e informe se a loja está averta ou fechada

// var dia = "segunda"
// var horario = 8

// if (dia == "segunda" && horario == 8) {
//     console.log("Loja está aberta");
    
// } else {
//  console.log("Loja está fechada");
 
//  } 

 //14. Um site exige que, para enviar um cadastro, o campo de e-mail não esteja vazio (diferente de "") e que usuário tenha marcado a opção de aceitar os termos de serviço (true). Crie uma função que receba o e-mail e a confirmação dos termos e retorne se o formulário é válido para envio.
//!= : valida tudo o que está escrito dentro das ""
// var email = "ketly@gmail.com"
// var usuarioAceitaOsTermos = true

// if ( email != "" && usuarioAceitaOsTermos == true) {
//     console.log("Formulário é valido para envio");
    
// } else {
//     console.log("Formulário não é valido");
    
// }

//15. Um shopping possui vagas resevadas. O motorista tem direto a estacionar nessa vaa se tiver 60 anos ou mais ou se possuir a credencial PNE ( Pessoa com Necessidade Especial). No entanto, existe uma regra geral do local: nenhum tipo de caminhão pode estacionar nessas vagas, independentemente da consição do motorista. Crie um programa que receba a idade do motorista, se ele possui a credencial (true/false) e o tipo de veículo, informado se a parada na vaga é permitida

// var veiculo = "carro"
// var idade = 60
// var possuiCredencialPne = true

// if ( idade >= 60 && possuiCredencialPne == true && veiculo == "carro" ){
//     console.log("Parada Permitida");
    
// } else {
//     console.log("Parada Negada");
    
// }
    