// src/components/Footer/index.tsx
import React from 'react'
import { Container, Logo, Icones, Icone, Texto } from '../Footer/styles'
import logo from '../../assets/imagens/logo.png'
import facebook from '../../assets/imagens/Facebook.png'
import instagram from '../../assets/imagens/instagram.png'
import twitter from '../../assets/imagens/twitter.png'

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} alt="Efood logo" />
      <Icones>
        <Icone src={facebook} alt="Facebook" />
        <Icone src={instagram} alt="Instagram" />
        <Icone src={twitter} alt="Twitter" />
      </Icones>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Texto>
    </Container>
  )
}

export default Footer
