import styled from 'styled-components'
import { cores } from '../../styles/globalStyles'

export const CardContainer = styled.div`
  width: 384px; /* novo tamanho */
  border: 2px solid ${cores.corDoTexto};
  padding: 8px;
  background-color: #fff;
  margin-top: 20px;
`

export const Imagem = styled.img`
  width: calc(100% + 16px); // 100% + padding horizontal (8px de cada lado)
  margin: -8px -8px 0 -8px; // remove o padding das laterais e topo
  height: 217px;
  object-fit: cover;
  display: block;
`

export const TagsContainer = styled.div`
  position: relative;
  top: -210px;
  left: 0;
  display: flex;
  gap: 8px;
  padding: 16px;
  justify-content: flex-end;
`

export const Tag = styled.span`
  background-color: ${cores.corDoTexto};
  color: ${cores.corDoFundoClaro};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -32px;
  color: ${cores.corDoTexto};
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Nota = styled.span`
  font-size: 18px;
  font-weight: bold;

  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
    vertical-align: middle;
  }
`

export const Descricao = styled.p`
  font-weight: normal;
  font-size: 14px;
  margin: 16px 0;
  color: ${cores.corDoTexto};
`

export const Botao = styled.button`
  background-color: ${cores.corDoTexto};
  color: ${cores.corDoFundoClaro};
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`
