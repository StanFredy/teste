function getInteiroAleatorioEntre(min, max){

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 1 
while(opcao != -1){
    opcao = getInteiroAleatorioEntre
    console. log('Opção escolhida foi ${opcao}.')

}
console.log('Até mais!!!')
