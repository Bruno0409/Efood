import { createGlobalStyle } from 'styled-components'

export const cores = {
  corDoTexto: '#E66767',
  corDoCard: '#FFF',
  corDoFundoClaro: '#FFF8F2',
  corDoFundoBege: '#FFEBD9',
  overlayColor: 'rgba(0, 0, 0, 0.8)'
}

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fonte global */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff; /* Ajuste se quiser */
    color: #000; /* Ajuste a cor do texto padrão */
  }
`
