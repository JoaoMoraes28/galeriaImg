'use strict'

const imagens = [
    {
        nome: 'Imagem 1',
        url: './img/natureza1.jpg'
    },

    {
        nome: 'Imagem 2',
        url: './img/natureza2.jpg'
    },

    {
        nome: 'Imagem 3',
        url: './img/natureza3.jpg'
    },

    {
        nome: 'Imagem 4',
        url: './img/natureza4.jpg'
    },

    {
        nome: 'Imagem 5',
        url: './img/natureza5.jpg'
    },

    {
        nome: 'Imagem 6',
        url: './img/natureza6.jpg'
    },

    {
        nome: 'Imagem 7',
        url: './img/natureza7.jpg'
    },

    {
        nome: 'Imagem 8',
        url: './img/natureza8.jpg'
    }
]

function criarImagem(srcImagem) {
    const galeria = document.getElementById('galeria')
    const div = document.createElement('div')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    galeria.appendChild(div)
    imagem.style.marginBottom = '0px'
    imagem.style.marginLeft = '0'
    imagem.style.backgroundColor = 'black'
    imagem.style.color = 'white'
    imagem.style.content = 'ahhhhhhh'
    div.appendChild(imagem)
}

function carregarImagem() {
    const galeria = document.getElementById('galeria')

    // let i = 0
    // while (i < imagens.length) {
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens[i]

    //     galeria.appendChild(imagem)
    //     i++
    // }

    imagens.forEach(criarImagem)
}

carregarImagem()