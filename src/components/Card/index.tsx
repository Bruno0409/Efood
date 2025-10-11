import React from 'react'
import {
  CardContainer,
  Imagem,
  TagsContainer,
  Tag,
  InfoContainer,
  Titulo,
  Nota,
  Descricao,
  Botao
} from './styles'

// Remova esta linha:
// import estrela from '../../assets/imagens/estrela.png'

type Props = {
  imagem: string
  tags: string[]
  titulo: string
  nota: string
  descricao: string
}

const Card: React.FC<Props> = ({ imagem, tags, titulo, nota, descricao }) => {
  return (
    <CardContainer>
      <Imagem src={imagem} alt={titulo} />
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
      <InfoContainer>
        <Titulo>{titulo}</Titulo>
        <Nota>{nota} ⭐️</Nota>
      </InfoContainer>
      <Descricao>{descricao}</Descricao>
      <Botao>Saiba mais</Botao>
    </CardContainer>
  )
}

export default Card
