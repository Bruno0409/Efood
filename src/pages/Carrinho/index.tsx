// src/pages/Carrinho/index.tsx

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartDrawer, { Product } from '../../components/Carrinho'

const CarrinhoPage = () => {
  const navigate = useNavigate()

  // Simulação inicial do carrinho
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      img: '/path/to/image1.png',
      title: 'Pizza Margherita',
      price: 60.9
    },
    {
      id: 2,
      img: '/path/to/image2.png',
      title: 'Sushi Combo',
      price: 48.0
    }
  ])

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleContinue = () => {
    // Futuramente: salvar no contexto, localStorage ou API
    navigate('/entrega')
  }

  return (
    <div>
      <h1>Seu Carrinho</h1>
      <CartDrawer
        isOpen={true}
        onClose={() => navigate('/')}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onContinue={handleContinue}
      />
    </div>
  )
}

export default CarrinhoPage
