import React from 'react'
import { Link } from 'react-router-dom'

import {
  HeroContainer,
  HeroImage,
  Logo,
  HeaderRow,
  LeftText,
  RightText,
  HeroApresentacao,
  HeroImageSecundario,
  HeroTitle,
  HeroSubtitle,
  CardsSection, // importando a nova seção
  CardsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  AddButton
} from './styles'

import heroImagePerfil from '../../assets/imagens/fundo_menor.png'
import logoImage from '../../assets/imagens/logo.png'
import heroImagemMassa from '../../assets/imagens/fundoMassa.png'

// imagens dos cards (use suas próprias imagens)
import cardImg1 from '../../assets/imagens/image 3.png'
import cardImg2 from '../../assets/imagens/image 3.png'
import cardImg3 from '../../assets/imagens/image 3.png'
import cardImg4 from '../../assets/imagens/image 3.png'
import cardImg5 from '../../assets/imagens/image 3.png'
import cardImg6 from '../../assets/imagens/image 3.png'

const cardsData = [
  {
    id: 1,
    img: cardImg1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    img: cardImg2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    img: cardImg3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    img: cardImg4,
    title: 'Produto 4',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    img: cardImg5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    img: cardImg6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => {
  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImagePerfil} alt="Imagem do fundo perfil" />
        <HeaderRow>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LeftText>Restaurantes</LeftText>
          </Link>
          <Logo src={logoImage} alt="Logo" />
          <RightText>0 produto(s) no carrinho</RightText>
        </HeaderRow>
      </HeroContainer>

      <HeroApresentacao>
        <HeroImageSecundario
          src={heroImagemMassa}
          alt="Imagem do fundo perfil"
        />
        <HeroTitle>Italiana</HeroTitle>
        <HeroSubtitle>La Dolce Vita Trattoria</HeroSubtitle>
      </HeroApresentacao>

      {/* Nova seção de cards */}
      <CardsSection>
        <CardsGrid>
          {cardsData.map(({ id, img, title, description }) => (
            <Card key={id}>
              <CardImage src={img} alt={title} />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              <AddButton>Adicionar ao carrinho</AddButton>
            </Card>
          ))}
        </CardsGrid>
      </CardsSection>
    </>
  )
}

export default Perfil
