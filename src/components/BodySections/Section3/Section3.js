import React from 'react'
import styled from 'styled-components'
import '../../Fonts/SourceSans/SourceSansPro_Light.css'
import Card1 from './card1'

const DivContainer = styled.div`
display: flex;
width: 100vw;
height: 700px;
align-items: center;
justify-content: center;
`

const DivContent = styled.div`
display: flex;
flex-direction: column;
width: 2500px;
align-items: center;
justify-content: center;
`

const MainTitle = styled.p`
font-family: 'Source Sans Pro',Helvetica,Arial,sans-serif;
font-size: 48px;
line-height: 56px;
width: 800px;
margin: 5px;
text-align: center;
`
const Subtitle = styled.p`
    width: 800px;
    font-family: 'Source Sans Pro',Helvetica,Arial,sans-serif;
    color: #575757;
    font-size: 24px;
    font-weight: 800;
    margin: 10px;
    line-height: 32px;
    text-align: center;
`

const DivMargin = styled.div`
margin: 20px 10px;
`

const DivCard = styled.div`
display: flex;
`

export default class Section2 extends React.Component {

  render() {
    return (
      <DivContainer>
        <DivContent>
          <DivMargin>
            <MainTitle>
              O que é o GetNinjas?
            </MainTitle>
            <Subtitle>
              GetNinjas é a maior plataforma de contratação de serviços do Brasil.
              Conectamos Profissionais de todo o Brasil com pessoas solicitando serviço, atendendo com qualidade, facilidade e rapidez todos os tipos de necessidade.
            </Subtitle>
          </DivMargin>
          <DivCard>
            <Card1
              image="https://wallpapercave.com/wp/wp6690890.jpg"
              title="Faça o seu pedido"
              subtitle="Fale o que você precisa. É rápido e de graça!" />
            <Card1
              image="https://wallpapercave.com/wp/wp6690890.jpg"
              title="Faça o seu pedido"
              subtitle="Fale o que você precisa. É rápido e de graça!" />
            <Card1
              image="https://wallpapercave.com/wp/wp6690890.jpg"
              title="Faça o seu pedido"
              subtitle="Fale o que você precisa. É rápido e de graça!" />
          </DivCard>
        </DivContent>
      </DivContainer>
    )
  }
}