
import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/Tomate.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import batata from '../../assets/frutas/Batata.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cesta = {
    topo: {
        titulo: "Detalhe da Cesta",
    },
    detalhes: {
        nome: 'Cesta de verduras',
        logoFazenda: logo,
        nomeFazenda: 'Jenny Jack Farm',
        descricao: 'Uma Cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha',
        preco: 'R$ 20,00',
        botao: 'Comprar'
    },
    itens: {
        titulo: 'Itens da cesta',
        lista: [
            {
                nome: 'Tomate',
                imagem: tomate
            },
            {
                nome: 'Brócolis',
                imagem: brocolis
            },
            {
                nome: 'Batata',
                imagem: batata
            },
            {
                nome: 'Pepino',
                imagem: pepino
            },
            {
                nome: 'Abobora',
                imagem: abobora
            },
        ]
    }
}

export default cesta;