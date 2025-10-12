import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/modal'
import CartDrawer from '../../components/Carrinho/carrinho'
import EnderecoDrawer from '../../components/Endereco'

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
    description: 'A clássica Marguerita...',
    price: 60.9
  },
  {
    id: 2,
    img: cardImg2,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita...',
    price: 60.9
  },
  {
    id: 3,
    img: cardImg3,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita...',
    price: 60.9
  },
  {
    id: 4,
    img: cardImg4,
    title: 'Produto 4',
    description: 'A clássica Marguerita...',
    price: 60.9
  },
  {
    id: 5,
    img: cardImg5,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita...',
    price: 60.9
  },
  {
    id: 6,
    img: cardImg6,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita...',
    price: 60.9
  }
]

const Perfil = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])

  const handleAddClick = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }
  const [enderecoOpen, setEnderecoOpen] = useState(false)

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

      {/* Modal de produto */}
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

      {/* Carrinho Lateral */}
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

      {/* Drawer de Endereço */}
      <EnderecoDrawer
        isOpen={enderecoOpen}
        onClose={() => setEnderecoOpen(false)}
        onContinue={() => {
          setEnderecoOpen(false)
          // Redirecionar para pagamento ou próxima etapa
        }}
      />
    </>
  )
}

export default Perfil
