let numberOne = prompt('Insira o primeiro numero: ')
let numberTwo = prompt('Insira o segundo número: ')

alert(`A soma de ${numberOne} e ${numberTwo} é: ${Number(numberOne) + Number(numberTwo)}`)
alert(`A subtração de ${numberOne} e ${numberTwo} é: ${Number(numberOne) - Number(numberTwo)}`)
alert(`A multiplicação de ${numberOne} e ${numberTwo} é: ${Number(numberOne) * Number(numberTwo)}`)
alert(`A divisão de ${numberOne} e ${numberTwo} é: ${Number(numberOne) / Number(numberTwo)}`)
alert(`O Resto da divisão de ${numberOne} e ${numberTwo} é: ${Number(numberOne) % Number(numberTwo)}`)

if((numberOne + numberTwo) % 2 == 0){
    alert('A soma dos numeros é par')
    if(numberOne == numberTwo){
        alert("Os numeros são iguais")
    }
    else{
        alert("Os numeros são diferentes")
    }
}
else{
    alert('A soma dos numeros é impar')
    if(numberOne == numberTwo){
        alert("Os numeros são iguais")
    }
    else{
        alert("Os numeros são diferentes")
    } 
}