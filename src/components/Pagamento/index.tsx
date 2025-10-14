import React from 'react'
import {
  DrawerOverlay,
  DrawerContainer,
  ItemsContainer,
  InputGroup,
  Label,
  Input,
  Row,
  CheckoutButton,
  SecondaryButton,
  TitleRow,
  Title,
  TotalText
} from './styles'

interface PagamentoDrawerProps {
  isOpen: boolean
  onClose: () => void
  onVoltarParaEndereco: () => void
  onFinish: () => void
  total: string
}

const PagamentoDrawer: React.FC<PagamentoDrawerProps> = ({
  isOpen,
  onClose,
  onVoltarParaEndereco,
  onFinish,
  total
}) => {
  if (!isOpen) return null

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          <TitleRow>
            <Title>Pagamento</Title>
            <TotalText>Valor a pagar: R$ {total}</TotalText>
          </TitleRow>

          <InputGroup>
            <Label>Nome no cartão</Label>
            <Input placeholder="Digite o nome como está no cartão" />
          </InputGroup>

          <InputGroup>
            <Label>Número do cartão</Label>
            <Input placeholder="0000 0000 0000 0000" />
          </InputGroup>

          <Row>
            <InputGroup style={{ flex: 1 }}>
              <Label>Validade</Label>
              <Input placeholder="MM/AA" />
            </InputGroup>

            <InputGroup style={{ width: '80px' }}>
              <Label>CVV</Label>
              <Input placeholder="000" />
            </InputGroup>
          </Row>
        </ItemsContainer>

        <CheckoutButton onClick={onFinish}>Finalizar pedido</CheckoutButton>
        <SecondaryButton onClick={onVoltarParaEndereco}>
          Voltar para endereço
        </SecondaryButton>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default PagamentoDrawer
