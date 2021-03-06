import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 15px
    }
  }

  body {
    transition: all .5s linear;
    background-color: ${(props) => props.theme.colors.secondary50};
  }

  body,
  input,
  button,
  textarea {
    font: 500 1rem Inter, sans-serif;
    color: ${(props) => props.theme.colors.secondary500};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${(props) => props.theme.colors.secondary800};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`
