import React from 'react'
import {
  DrawerOverlay,
  DrawerContainer,
  ItemsContainer,
  Title,
  Paragraph,
  ConcluirButton
} from './styles'

interface ConfirmacaoPedidoDrawerProps {
  isOpen: boolean
  onClose: () => void
  orderId: string
  onConcluir: () => void
}

const ConfirmacaoPedidoDrawer: React.FC<ConfirmacaoPedidoDrawerProps> = ({
  isOpen,
  onClose,
  orderId,
  onConcluir
}) => {
  if (!isOpen) return null

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          <Title>Pedido realizado - {orderId}</Title>
          <Paragraph>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </Paragraph>
          <Paragraph>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </Paragraph>
          <Paragraph>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </Paragraph>
          <Paragraph>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Paragraph>
        </ItemsContainer>

        <ConcluirButton onClick={onConcluir}>Concluir</ConcluirButton>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default ConfirmacaoPedidoDrawer
