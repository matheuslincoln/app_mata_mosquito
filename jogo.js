var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarMosquitoTempo = 1000

var nivel = window.location.search
nivel.replace('?', '')

if(nivel === 'normal') {
    //1500
    criarMosquitoTempo = 1000
} else if(nivel === 'dificil') {
    //900
    criarMosquitoTempo = 900
} else if(nivel === 'chucknorris') {
    //750
    criarMosquitoTempo = 750
}
function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()

//criação do cronometro
var cronometro = setInterval(function() {
    
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }
    
    document.getElementById('cronometro').innerHTML = tempo

}, 1000 )

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio () {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito01'
        case 1:
            return 'mosquito02'
        case 2:
            return 'mosquito03'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
