function getInteiroAleatorioEntre(min, max){

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 
do
{
    opcao = getInteiroAleatorioEntre
    console. log(`Opção escolhida foi ${opcao}.`)
 
} while(opcao != -1)
console.log('Até mais!!!')
