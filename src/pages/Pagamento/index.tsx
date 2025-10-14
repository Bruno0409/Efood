import {
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
} from '../../components/Pagamento/styles'
import { useNavigate } from 'react-router-dom'

const PagamentoPage = () => {
  const navigate = useNavigate()
  const total = '120.00'

  const handleFinish = () => {
    navigate('/confirmacao')
  }

  const handleBack = () => {
    navigate('/endereco')
  }

  return (
    <DrawerContainer>
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

      <CheckoutButton onClick={handleFinish}>Finalizar pedido</CheckoutButton>
      <SecondaryButton onClick={handleBack}>
        Voltar para endereço
      </SecondaryButton>
    </DrawerContainer>
  )
}

export default PagamentoPage
