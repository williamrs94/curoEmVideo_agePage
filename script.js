function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Erro. Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                /* criança */
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) {
                /* jovem */
                img.setAttribute('src', 'jovemHomem.png')
            } else if (idade < 50) {
                /* adulto */
                img.setAttribute('src', 'HomemAdulto.png')
            } else {
                /* idoso */
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                /* criança */
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) {
                /* jovem */
                img.setAttribute('src', 'jovemMulher.png')
            } else if (idade < 50) {
                /* adulto */
                img.setAttribute('src', 'mulherAdulta.png')
            } else {
                /* idoso */
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}