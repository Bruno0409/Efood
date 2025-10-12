import React from 'react'
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalBody,
  ProductImage,
  TextContent,
  Title,
  Description,
  Button
} from './styles' // Aqui você importa os componentes de estilo

export default function Modal({ onClose, children }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}
