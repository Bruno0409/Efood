import React from 'react'
import {
  HeroContainer,
  HeroImage,
  Logo,
  HeaderRow,
  LeftText,
  RightText
} from './styles'

import heroImagePerfil from '../../assets/imagens/fundo_menor.png'

import logoImage from '../../assets/imagens/logo.png'

const Perfil = () => {
  return (
    <HeroContainer>
      <HeroImage src={heroImagePerfil} alt="Imagem do fundo perfil" />
      <HeaderRow>
        <LeftText>Restaurantes</LeftText>
        <Logo src={logoImage} alt="Logo" />
        <RightText>0 produto(s) no carrinho</RightText>
      </HeaderRow>
    </HeroContainer>
  )
}

export default Perfil
