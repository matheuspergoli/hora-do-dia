let agora = new Date()
let horario = agora.getHours()
let imagem = window.document.getElementById('container-imagem')
let fundo = window.document.querySelector('body')

let hora = window.document.querySelector('#container > p')

if (horario <= 5) {
    hora.innerText = `Agora são ${horario} horas da madrugada`
    imagem.style.backgroundImage = 'url(imagens/madrugada.jpg)'
    imagem.style.backgroundPositionX = 'right'
    imagem.style.backgroundSize = 'cover'
    fundo.style.backgroundColor = '#0a3d62'
} else if (horario <= 11) {
    hora.innerText = `Agora são ${horario} horas da manhã`
    imagem.style.backgroundImage = 'url(imagens/manha.jpg)'
    imagem.style.backgroundSize = 'cover'
    fundo.style.backgroundColor = '#fdcb6e'
} else if (horario <= 18) {
    hora.innerText = `Agora são ${horario} horas da tarde`
    imagem.style.backgroundImage = 'url(imagens/tarde.jpg)'
    imagem.style.backgroundPositionX = 'right'
    imagem.style.backgroundSize = 'cover'
    fundo.style.backgroundColor = '#f8c291'
} else {
    hora.innerText = `Agora são ${horario} horas da noite`
    imagem.style.backgroundImage = 'url(imagens/noite.jpg)'
    imagem.style.backgroundSize = 'cover'
    fundo.style.backgroundColor = '#57606f'
} 