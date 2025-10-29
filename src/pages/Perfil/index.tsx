import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Modal from '../../components/Modal/modal'
import CartDrawer, { Product as CartProduct } from '../../components/Carrinho'
import EnderecoDrawer from '../../components/Endereco'
import PagamentoDrawer from '../../components/Pagamento'
import ConfirmacaoPedidoDrawer from '../../components/Confirmacao'

import {
  ModalBody,
  ProductImage,
  TextContent,
  Title,
  Description,
  Button
} from '../../components/Modal/styles'

import {
  HeroContainer,
  HeroImage,
  Logo,
  HeaderRow,
  LeftText,
  RightText,
  HeroApresentacao,
  HeroImageSecundario,
  HeroTitle,
  HeroSubtitle,
  CardsSection,
  CardsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  AddButton
} from './styles'

import heroImagePerfil from '../../assets/imagens/fundo_menor.png'
import logoImage from '../../assets/imagens/logo.png'
import heroImagemMassa from '../../assets/imagens/fundoMassa.png'

interface Product {
  id: number
  img: string
  title: string
  description: string
  price: number
  customText?: string
}

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [products, setProducts] = useState<Product[]>([])
  const [restaurant, setRestaurant] = useState<any>(null)

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const [cartOpen, setCartOpen] = useState(false)
  const [enderecoOpen, setEnderecoOpen] = useState(false)
  const [pagamentoOpen, setPagamentoOpen] = useState(false)
  const [confirmacaoOpen, setConfirmacaoOpen] = useState(false)

  const [cartItems, setCartItems] = useState<CartProduct[]>([])

  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data)
        const pratos = data.cardapio.map((item: any) => {
          console.log(item)
          return {
            id: item.id,
            img: item.foto,
            title: item.nome,
            description: item.descricao,
            price: item.preco,
            customText: 'Serve de 2 a 3 pessoas'
          }
        })
        setProducts(pratos)
      })
      .catch((err) => {
        console.error('Erro ao carregar restaurante ou pratos:', err)
      })
  }, [id])

  const handleSaibaMaisClick = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleVoltarParaEndereco = () => {
    setPagamentoOpen(false)
    setEnderecoOpen(true)
  }

  const handleVoltarAoCarrinho = () => {
    setEnderecoOpen(false)
    setCartOpen(true)
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImagePerfil} alt="Imagem do fundo perfil" />
        <HeaderRow>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LeftText>Restaurantes</LeftText>
          </Link>
          <Logo src={logoImage} alt="Logo" />
          <RightText onClick={() => setCartOpen(true)}>
            {cartItems.length} produto(s) no carrinho
          </RightText>
        </HeaderRow>
        {restaurant && (
          <HeroApresentacao>
            <HeroImageSecundario
              src={restaurant.capa}
              alt="Imagem secundária"
            />
            <HeroTitle>{restaurant.titulo}</HeroTitle>
            <HeroSubtitle>{restaurant.tipo}</HeroSubtitle>
          </HeroApresentacao>
        )}
      </HeroContainer>

      <CardsSection>
        <CardsGrid>
          {products.map(({ id, img, title, description, price }) => (
            <Card key={id}>
              <CardImage src={img} alt={title} />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              <AddButton
                onClick={() =>
                  handleSaibaMaisClick({ id, img, title, description, price })
                }
              >
                Saiba mais
              </AddButton>
            </Card>
          ))}
        </CardsGrid>
      </CardsSection>

      {modalOpen && selectedProduct && (
        <Modal onClose={() => setModalOpen(false)}>
          <ModalBody>
            <ProductImage
              src={selectedProduct.img}
              alt={selectedProduct.title}
            />
            <TextContent>
              <Title>{selectedProduct.title}</Title>
              <Description>{selectedProduct.description}</Description>
              <p>{selectedProduct.customText}</p>
              <Button
                onClick={() => {
                  setCartItems((prev) => [...prev, { ...selectedProduct }])
                  setModalOpen(false)
                  setCartOpen(true)
                }}
              >
                Adicionar ao Carrinho - R$ {selectedProduct.price.toFixed(2)}
              </Button>
            </TextContent>
          </ModalBody>
        </Modal>
      )}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={(id) =>
          setCartItems((prev) => prev.filter((item) => item.id !== id))
        }
        onContinue={() => {
          setCartOpen(false)
          setEnderecoOpen(true)
        }}
        total={total}
      />

      <EnderecoDrawer
        isOpen={enderecoOpen}
        onClose={() => setEnderecoOpen(false)}
        onContinue={() => {
          setEnderecoOpen(false)
          setPagamentoOpen(true)
        }}
        onVoltarAoCarrinho={handleVoltarAoCarrinho}
      />

      <PagamentoDrawer
        isOpen={pagamentoOpen}
        onClose={() => setPagamentoOpen(false)}
        onVoltarParaEndereco={handleVoltarParaEndereco}
        onFinish={() => {
          setPagamentoOpen(false)
          setConfirmacaoOpen(true)
        }}
        total={total}
      />

      <ConfirmacaoPedidoDrawer
        isOpen={confirmacaoOpen}
        onClose={() => setConfirmacaoOpen(false)}
        orderId={orderId || ''}
        onConcluir={() => {
          setConfirmacaoOpen(false)
          setCartItems([])
        }}
      />
    </>
  )
}

export default Perfil
