import React from 'react'
import trashIcon from '../../assets/imagens/Lixeira.png' // ajuste o caminho conforme sua pasta

import {
  DrawerOverlay,
  DrawerContainer,
  CartItem,
  CartImage,
  CartDetails,
  CartTitle,
  CartPrice,
  RemoveButton,
  CheckoutButton,
  ItemsContainer,
  CartFooter,
  TotalLabel,
  TotalValue,
  TotalRow
} from '../Carrinho/styles'

interface Product {
  id: number
  img: string
  title: string
  price: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  cartItems: Product[]
  onRemoveItem?: (id: number) => void
  onContinue?: () => void
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onContinue
}) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  if (!isOpen) return null

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartImage src={item.img} alt={item.title} />
              <CartDetails>
                <CartTitle>{item.title}</CartTitle>
                <CartPrice>R$ {item.price.toFixed(2)}</CartPrice>
              </CartDetails>
              <RemoveButton onClick={() => onRemoveItem?.(item.id)}>
                <img
                  src={trashIcon}
                  alt="Remover item"
                  style={{ width: 15, height: 15 }}
                />
              </RemoveButton>
            </CartItem>
          ))}
        </ItemsContainer>

        {/* Rodapé do carrinho */}
        <CartFooter>
          <TotalRow>
            <TotalLabel>Valor total:</TotalLabel>
            <TotalValue>R$ {total}</TotalValue>
          </TotalRow>
          <CheckoutButton onClick={onContinue}>
            Continuar com a entrega
          </CheckoutButton>
        </CartFooter>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default CartDrawer
