const imprimirResultado = function(nota){
    
    switch(Math.floor(nota)){
           case 10: 
           case 9:
            console.log('Quadro de Honra')
            break
           case 8: case 7:
            console.log('Aprovado')
            break
           case 6: case 5: case 4: 
             console.log('reprovado')
           default: 
             console.log('Numero inválido') 
    }
}
imprimirResultado(1)