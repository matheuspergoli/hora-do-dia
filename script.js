var hora = new Date()
var horario = hora.getHours()

var text = window.document.getElementById('text')
var image = window.document.getElementById('image')
var bgColor = window.document.getElementById('background')

if (horario >= 1 && horario <= 5) {
    text.innerHTML = `Agora são <strong>${horario} horas</strong> da madrugada`
    image.style.backgroundImage = 'url(imagens/madrugada.jpg)'
    bgColor.style.backgroundColor = '#0A3D62'
} else if (horario >= 6 && horario <= 11) {
    text.innerHTML = `Agora são <strong>${horario} horas</strong> da manhã`
    image.style.backgroundImage = 'url(imagens/manha.jpg)'
    bgColor.style.backgroundColor = '#FDCB6E'
} else if (horario >= 12 && horario <= 16) {
    text.innerHTML = `Agora são <strong>${horario} horas</strong> da tarde`
    image.style.backgroundImage = 'url(imagens/tarde.jpg)'
    bgColor.style.backgroundColor = '#F8C291'
} else {
    text.innerHTML = `Agora são <strong>${horario} horas</strong> da noite`
    image.style.backgroundImage = 'url(imagens/noite.jpg)'
    bgColor.style.backgroundColor = '#0A3D62'
}