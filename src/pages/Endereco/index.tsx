import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import InputMask from 'react-input-mask' // Importando o InputMask
import {
  DrawerContainer,
  ItemsContainer,
  InputGroup,
  Label,
  Input,
  Row,
  CheckoutButton,
  SecondaryButton
} from '../../components/Endereco/styles'

const EnderecoPage = () => {
  const navigate = useNavigate()

  // States para armazenar os dados do formulário
  const [receiver, setReceiver] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  // Função chamada ao clicar em "Continuar"
  const handleContinue = async () => {
    // Dados do carrinho (exemplo, você deve pegar os dados reais do carrinho)
    const cartItems = [
      { id: 1, price: 10.0 },
      { id: 2, price: 20.0 }
    ]

    // Dados de entrega
    const deliveryData = {
      receiver: receiver,
      address: {
        description: address,
        city: city,
        zipCode: zipCode,
        number: number,
        complement: complement
      }
    }

    // Dados de pagamento (se você tiver dados de pagamento no formulário, adicione-os aqui)
    const paymentData = {
      card: {
        name: 'Nome no Cartão',
        number: '1234567812345678',
        code: 123,
        expires: {
          month: 12,
          year: 2025
        }
      }
    }

    const pedidoData = {
      products: cartItems, // Produtos do carrinho
      delivery: deliveryData,
      payment: paymentData
    }

    try {
      // Envia o pedido para a API
      const response = await axios.post(
        'https://api-ebac.vercel.app/api/efood/checkout',
        pedidoData
      )

      // Recupera o orderId da resposta
      const orderId = response.data.orderId

      // Redireciona para a página de confirmação e passa o orderId
      navigate('/confirmacao', { state: { orderId } })
    } catch (error) {
      console.error('Erro ao enviar pedido:', error)
      // Lidar com erros, talvez mostrar uma mensagem para o usuário
    }
  }

  return (
    <DrawerContainer>
      <ItemsContainer>
        <h3>Entrega</h3>

        <InputGroup>
          <Label>Quem irá receber</Label>
          <Input
            placeholder="Nome completo"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label>Endereço</Label>
          <Input
            placeholder="Rua ou Av"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label>Cidade</Label>
          <Input
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </InputGroup>

        <Row>
          <InputGroup style={{ flex: 1 }}>
            <Label>CEP</Label>
            <InputMask
              mask="99999-999" // Máscara para o CEP
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            >
              {(inputProps: any) => (
                <Input {...inputProps} placeholder="00000-000" />
              )}
            </InputMask>
          </InputGroup>

          <InputGroup style={{ width: '80px' }}>
            <Label>Número</Label>
            <Input
              placeholder="123"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label>Complemento (opcional)</Label>
          <Input
            placeholder="Apartamento, bloco, etc."
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
        </InputGroup>
      </ItemsContainer>

      <CheckoutButton onClick={handleContinue}>
        Continuar com o pagamento
      </CheckoutButton>

      <SecondaryButton onClick={() => navigate('/carrinho')}>
        Voltar ao carrinho
      </SecondaryButton>
    </DrawerContainer>
  )
}

export default EnderecoPage
