import React from 'react'
import { HeroContainer, HeroImage, Logo, HeroText } from './styles'

import heroImage from '../../assets/imagens/fundo.png'
import logoImage from '../../assets/imagens/logo.png'

const Home = () => {
  return (
    <HeroContainer>
      <HeroImage src={heroImage} alt="Imagem do fundo" />
      <Logo src={logoImage} alt="Logo" />
      <HeroText>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </HeroText>
    </HeroContainer>
  )
}

export default Home
