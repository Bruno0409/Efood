import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/modal'
import CartDrawer from '../../components/Carrinho'
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
import cardImg1 from '../../assets/imagens/image 3.png'
import cardImg2 from '../../assets/imagens/image 3.png'
import cardImg3 from '../../assets/imagens/image 3.png'
import cardImg4 from '../../assets/imagens/image 3.png'
import cardImg5 from '../../assets/imagens/image 3.png'
import cardImg6 from '../../assets/imagens/image 3.png'

interface Product {
  id: number
  img: string
  title: string
  description: string
  price: number
  customText?: string
}

const cardsData: Product[] = [
  {
    id: 1,
    img: cardImg1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 2,
    img: cardImg2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 3,
    img: cardImg3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 4,
    img: cardImg4,
    title: 'Produto 4',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 5,
    img: cardImg5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 6,
    img: cardImg6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  }
]

const Perfil = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [enderecoOpen, setEnderecoOpen] = useState(false)
  const [pagamentoOpen, setPagamentoOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])

  const handleAddClick = (product: Product) => {
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

  const [confirmacaoOpen, setConfirmacaoOpen] = useState(false)
  const [orderId] = useState('12345ABC')

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
      </HeroContainer>

      <HeroApresentacao>
        <HeroImageSecundario
          src={heroImagemMassa}
          alt="Imagem do fundo perfil"
        />
        <HeroTitle>Italiana</HeroTitle>
        <HeroSubtitle>La Dolce Vita Trattoria</HeroSubtitle>
      </HeroApresentacao>

      <CardsSection>
        <CardsGrid>
          {cardsData.map(({ id, img, title, description, price }) => (
            <Card key={id}>
              <CardImage src={img} alt={title} />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              <AddButton
                onClick={() =>
                  handleAddClick({
                    id,
                    img,
                    title,
                    description,
                    price,
                    customText: 'Texto especial para o modal'
                  })
                }
              >
                Adicionar ao carrinho
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
              <p>Serve: de 2 a 3 pessoas</p>
              <Button
                onClick={() => {
                  if (selectedProduct) {
                    setCartItems((prev) => [...prev, { ...selectedProduct }])
                    setModalOpen(false)
                    setCartOpen(true)
                  }
                }}
              >
                Adicionar ao Carrinho - R$: {selectedProduct.price.toFixed(2)}
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
        total={cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      />

      <ConfirmacaoPedidoDrawer
        isOpen={confirmacaoOpen}
        onClose={() => setConfirmacaoOpen(false)}
        orderId={orderId}
        onConcluir={() => {
          setConfirmacaoOpen(false)

          setCartItems([])
        }}
      />
    </>
  )
}

export default Perfil
