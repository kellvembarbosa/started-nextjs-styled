import type { NextPage } from 'next'
import styled from 'styled-components'
import { MainLayout } from '../components'
import Link from 'next/link'

const Wrapper = styled.div`
  display: flex; 
  width: 960px;
  flex-direction: column;
  align-items: center;

  & .containerInputs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    input {
      padding: 8px;
      border: 2px solid var(--primaryColor);
      outline: none;
      border-radius: 6px;
      margin: 0px 8px; 
      width: 50%;
      font-size: 16px;
    }

    button {
      background-color: var(--primaryColor);
      color: var(--primaryTextColor);
      padding: 12px;
      border-radius: 6px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: var(--secundaryColor);
      }
    }
  }

  & .links {
    margin: 24px 0px;
    
    span {
      padding: 0px 12px;
      cursor: pointer;
    }
  }
`

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Wrapper>
        <h1>Código Postal Online</h1>

        <div className="containerInputs">
          <input type="text" placeholder="Código Postal Online" />
          <button>BUSCAR</button>
        </div>

        <div className="links">
          <Link href="/" passHref>
            <span>Home</span>
          </Link>
          <Link href="/distritos" passHref>
            <span>Distritos</span>
          </Link>
          <Link href="/concelhos" passHref>
            <span>Concelhos</span>
          </Link>
          <Link href="/contato" passHref>
            <span>Contato</span>
          </Link>
        </div>
      </Wrapper>
    </MainLayout>
  )
}

export default Home
