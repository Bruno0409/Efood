import React from 'react'
import Card from '../../components/Card'
import { Container, Lista } from './styles'
import Footer from '../../components/Footer'

import italianaImg from '../../assets/imagens/italiana.png'
import japonesaImg from '../../assets/imagens/japonesa.png'

const Restaurante = () => {
  return (
    <Container>
      <Lista>
        <Card
          imagem={italianaImg}
          tags={['Destaque da semana', 'Massas']}
          titulo="La Dolce Vita Trattoria"
          nota="4.9"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Card
          imagem={japonesaImg}
          tags={['Japonesa']}
          titulo="Hioki Sushi "
          nota="4.7"
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <Card
          imagem={japonesaImg}
          tags={['Japonesa']}
          titulo="Hioki Sushi "
          nota="4.7"
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <Card
          imagem={italianaImg}
          tags={['Italiana']}
          titulo="La Dolce Vita Trattoria"
          nota="4.9"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Card
          imagem={italianaImg}
          tags={['Italiana']}
          titulo="La Dolce Vita Trattoria"
          nota="4.9"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Card
          imagem={japonesaImg}
          tags={['Japonesa']}
          titulo="Hioki Sushi "
          nota="4.7"
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
      </Lista>
    </Container>
  )
}

export default Restaurante
