import React from "react";
import styled from "styled-components";
import "../../Fonts/SourceSans/SourceSansPro_Light.css";
import Card1 from "./card1";

const DivContainer = styled.div`
  display: flex;
  height: 700px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  @media (max-width: 414px) {
    height: 2000px;
    margin: 10px 0px;
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 2500px;
  align-items: center;
  justify-content: center;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const MainTitle = styled.p`
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 48px;
  line-height: 56px;
  width: 800px;
  margin: 5px;
  text-align: center;
  @media (max-width: 414px) {
    width: 100%;
    margin: 0;
    margin-top: 50px;
  }
`;
const Subtitle = styled.p`
  width: 800px;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  color: #575757;
  font-size: 24px;
  font-weight: 800;
  margin: 10px;
  text-align: center;
  @media (max-width: 414px) {
    width: 90%;
    margin-left: 17px;
    font-size: 24px;
    line-height: 28px;
  }
`;

const DivMargin = styled.div`
  margin: 20px 10px;
  @media (max-width: 414px) {
    margin: 0;
  }
`;

const DivCard = styled.div`
  display: flex;
  @media (max-width: 414px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export default class Section2 extends React.Component {
  render() {
    return (
      <DivContainer>
        <DivContent>
          <DivMargin>
            <MainTitle>O que é o Future Ninjas?</MainTitle>
            <Subtitle>
              Future Ninjas é uma plataforma de contratação de serviços online.
              Conectamos Profissionais de todo o Brasil com pessoas solicitando
              serviço, atendendo com qualidade, facilidade e rapidez todos os
              tipos de necessidade.
            </Subtitle>
            <MainTitle>Como funciona?</MainTitle>
          </DivMargin>
          <DivCard>
            <Card1
              image="https://wallpapercave.com/wp/wp6690890.jpg"
              title="Faça o seu pedido"
              subtitle="Fale o que você precisa. É rápido e de graça!"
            />
            <Card1
              image="https://wallpapercave.com/wp/wp6690890.jpg"
              title="Faça o seu pedido"
              subtitle="Fale o que você precisa. É rápido e de graça!"
            />
            <Card1
              image="https://wallpapercave.com/wp/wp6690890.jpg"
              title="Faça o seu pedido"
              subtitle="Fale o que você precisa. É rápido e de graça!"
            />
          </DivCard>
        </DivContent>
      </DivContainer>
    );
  }
}
