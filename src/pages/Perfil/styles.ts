import styled from 'styled-components'
import { cores } from '../../styles/globalStyles'

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const HeaderRow = styled.div`
  position: absolute;
  top: 20px; // ajuste conforme necessário para o seu layout
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1040px; // ou a largura do seu container
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 100px;
`

export const LeftText = styled.span`
  color: ${cores.corDoTexto};
  font-size: 16px;
  font-weight: 600;
  flex: 1;
  text-align: left;
  padding-left: 20px;
`

export const Logo = styled.img`
  height: 50px; // ajuste a altura do logo como quiser
  object-fit: contain;
`

export const RightText = styled.span`
  color: ${cores.corDoTexto};
  font-size: 16px;
  font-weight: 600;
  flex: 1;
  text-align: right;
  padding-right: 20px;
`
