// pages/Pagamento/index.tsx
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import PagamentoDrawer from '../../components/Pagamento'

const PagamentoPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems, deliveryData } = location.state || {}

  const [paymentData, setPaymentData] = useState<any>(null)

  // Função chamada quando o pagamento é finalizado
  const handleFinishPayment = (paymentData: any) => {
    // Adicionando os dados de pagamento ao estado
    setPaymentData(paymentData)

    // Construindo o pedido com os dados de pagamento, carrinho e entrega
    const pedidoData = {
      products: cartItems,
      delivery: deliveryData,
      payment: paymentData // Passa os dados de pagamento
    }

    // Envia os dados para a API (ou qualquer outra lógica de backend)
    axios
      .post('https://api-ebac.vercel.app/api/efood/checkout', pedidoData)
      .then((response) => {
        const orderId = response.data.orderId

        // Redireciona para a página de confirmação com os dados necessários
        navigate('/confirmacao', {
          state: { orderId, cartItems, deliveryData, paymentData }
        })
      })
      .catch((error) => {
        console.error('Erro ao processar o pagamento:', error)
        alert('Erro ao processar o pagamento. Tente novamente.')
      })
  }

  const total = cartItems
    ? cartItems
        .reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    : '0.00'

  return (
    <div>
      <h2>Pagamento</h2>
      <h3>Total: R${total}</h3>

      {/* Passando a função onFinish para o PagamentoDrawer */}
      <PagamentoDrawer
        isOpen={true}
        onClose={() => console.log('Fechar o pagamento')}
        onVoltarParaEndereco={() => navigate('/endereco')}
        onFinish={handleFinishPayment} // Passando a função para o Drawer
        total={total}
      />
    </div>
  )
}

export default PagamentoPage
