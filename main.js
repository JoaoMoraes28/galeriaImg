'use strict'

const imagens = [
    {
        nome: 'Imagem 1',
        url: './img/natureza1.jpg',
        text: 'Névoa na floresta'
    },

    {
        nome: 'Imagem 2',
        url: './img/natureza2.jpg',
        text: 'Prados verdosos'
    },

    {
        nome: 'Imagem 3',
        url: './img/natureza3.jpg',
        text: 'Sapinho na folhinha'
    },

    {
        nome: 'Imagem 4',
        url: './img/natureza4.jpg',
        text: 'Campos ao nascer do sol'
    },

    {
        nome: 'Imagem 5',
        url: './img/natureza5.jpg',
        text: 'Cachoeira nas pedras musgosas'
    },

    {
        nome: 'Imagem 6',
        url: './img/natureza6.jpg',
        text: 'Cachoeira nas rochas'
    },

    {
        nome: 'Imagem 7',
        url: './img/natureza7.webp',
        text: 'Esquilo procurando nozes'
    },

    {
        nome: 'Imagem 8',
        url: './img/natureza8.jpg',
        text: 'Vegetação na floresta'
    }
]

function criarImagem(srcImagem) {
    const galeria = document.getElementById('galeria')
    const div = document.createElement('div')
    const imagem = document.createElement('img')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('teste')
    div.classList.add('divImg')
    imagem.src = srcImagem.url
    paragrafo.textContent = srcImagem.text
    galeria.appendChild(div)
    div.appendChild(paragrafo)
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