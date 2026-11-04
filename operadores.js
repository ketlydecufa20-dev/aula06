//1.Crie um programa que leia três números e determine qual é o maior.

//and && = tudo tem que ser verdadeiro 

var valor1 = 10
var valor2 = 85
var valor3 = 15

if (valor1 > valor2 && valor1 > valor3) {
    console.log("O valor 1 é o maior: ", valor1)

}

if (valor2 > valor1 && valor2 > valor3) {
    console.log("O valor 2 é o maior: ", valor1)

}

if (valor3 > valor1 && valor3 > valor2) {
    console.log("O valor 3 é o maior: ", valor1)

}

//2.Faça um programa que leia um número e verifique se ele está entre 1 e 100.

var numero = 42
if (numero >= 1 && numero <= 100) {
    console.log("O numero escolhido esta entre 1 e 100")
} else {
    console.log("O numero escolhido esta entre 1 e 100")

}

//3.Crie um programa que leia uma letra e retorne se é vogal ou consoante
// || or =  uma das informações que for verdadeiro vai ser valido

var letra = "b"
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log(" A letra escolhida é VOGAL!");

} else {
    console.log(" A letra escolhida é CONSOANTE!");

}

//4.Faça um programa que leia um número e verifique se ele está fora do range de 1 a 20.

var numero = 4

if (numero < 1 || numero > 20) {
    console.log("você esta fora do range");
} else {
    console.log("você esta dentro do range");

}

//not ! = vai trazer sempre o valor negativo do valor 

var numero = 4

if (!(numero < 1 || numero > 20)) {
    console.log("você esta fora do range");
} else {
    console.log("você esta dentro do range");

}

