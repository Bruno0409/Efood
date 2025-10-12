import React from 'react'
import Card from '../../components/Card'

import {
  HeroContainer,
  HeroImage,
  Logo,
  HeroText,
  SecaoCards,
  Container,
  Lista
} from './styles'

import heroImage from '../../assets/imagens/fundo.png'
import logoImage from '../../assets/imagens/logo.png'
import italianaImg from '../../assets/imagens/italiana.png'
import japonesaImg from '../../assets/imagens/japonesa.png'

const Home = () => {
  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImage} alt="Imagem do fundo" />
        <Logo src={logoImage} alt="Logo" />
        <HeroText>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </HeroText>
      </HeroContainer>

      <SecaoCards>
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
              titulo="Hioki Sushi"
              nota="4.7"
              descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
            />
            <Card
              imagem={italianaImg}
              tags={['Massas']}
              titulo="La Dolce Vita Trattoria"
              nota="4.9"
              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            />
            <Card
              imagem={japonesaImg}
              tags={['Japonesa']}
              titulo="Hioki Sushi"
              nota="4.7"
              descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
            />
            <Card
              imagem={italianaImg}
              tags={['Massas']}
              titulo="La Dolce Vita Trattoria"
              nota="4.9"
              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            />
            <Card
              imagem={japonesaImg}
              tags={['Japonesa']}
              titulo="Hioki Sushi"
              nota="4.7"
              descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
            />
          </Lista>
        </Container>
      </SecaoCards>
    </>
  )
}

export default Home
