function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
         img.src = 'img/morning1.png'
         document.body.style.background = '#c5dce4'
    }else if (hora >= 12 && hora < 18) {
         img.src = 'img/sunset.png'
         document.body.style.background = '#feb095'

    } else {
        img.src = 'img/night.png'
        document.body.style.background = '#0c1719'
    }
}