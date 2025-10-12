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
  SecondaryButton
} from '../Endereco/styles'

interface EnderecoDrawerProps {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
}

const EnderecoDrawer: React.FC<EnderecoDrawerProps> = ({
  isOpen,
  onClose,
  onContinue
}) => {
  if (!isOpen) return null

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          <h3>Entrega</h3>

          <InputGroup>
            <Label>Quem irá receber</Label>
            <Input placeholder="Nome completo" />
          </InputGroup>

          <InputGroup>
            <Label>Endereço</Label>
            <Input placeholder="Rua ou Av" />
          </InputGroup>

          <InputGroup>
            <Label>Cidade</Label>
            <Input placeholder="Cidade" />
          </InputGroup>

          <Row>
            <InputGroup style={{ flex: 1 }}>
              <Label>CEP</Label>
              <Input placeholder="00000-000" />
            </InputGroup>

            <InputGroup style={{ width: '80px' }}>
              <Label>Número</Label>
              <Input placeholder="123" />
            </InputGroup>
          </Row>

          <InputGroup>
            <Label>Complemento (opcional)</Label>
            <Input placeholder="Apartamento, bloco, etc." />
          </InputGroup>
        </ItemsContainer>

        <CheckoutButton onClick={onContinue}>
          Continuar com o pagamento
        </CheckoutButton>
        <SecondaryButton onClick={onClose}>Voltar ao carrinho</SecondaryButton>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default EnderecoDrawer
