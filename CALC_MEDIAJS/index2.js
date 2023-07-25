function StorageManager(){
    var media = document.getElementByld('media')
    var br1 = document.getElementByld('barra1')
    var br2 = document.getElementByld('barra2')
    var br3 = document.getElementByld('barra3')
    var br1 = Number(br1.value)
    var br2 = Number(br2.value)
    var br3 = Number(br3.value)
    var valor = (br1 * 2 + br2 * 3 * 5)/10
    document.getElementByld('media').innerHTML = valor
    var resultado = (valor>=60 ? 'Você atingiu a média!':'Você não atingiu a média!')
    document.getElementByld('aprovado-reprovado').innerHTML = resultado
    if(valor>=60){
    document.getElementByld('média').style.color='green'
    document.getElementbyld('aprovado-reprovado').style.color='green'
}
    else{
        document.getElementByld('media').style.color = 'red'
        document.getElementByld('Aprovado-Reprovado').style.color = 'green'
    }

}