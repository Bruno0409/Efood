// src/pages/Confirmacao/index.tsx

import React from 'react'
import {
  DrawerContainer,
  ItemsContainer,
  Title,
  Paragraph,
  ConcluirButton
} from '../../components/Confirmacao/styles'
import { useNavigate } from 'react-router-dom'

const ConfirmacaoPage = () => {
  const navigate = useNavigate()
  const orderId = '12345ABC'

  const handleConcluir = () => {
    navigate('/')
  }

  return (
    <DrawerContainer>
      <ItemsContainer>
        <Title>Pedido realizado - {orderId}</Title>
        <Paragraph>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </Paragraph>
        <Paragraph>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </Paragraph>
        <Paragraph>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </Paragraph>
        <Paragraph>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Paragraph>
      </ItemsContainer>

      <ConcluirButton onClick={handleConcluir}>Concluir</ConcluirButton>
    </DrawerContainer>
  )
}

export default ConfirmacaoPage
