import React from "react";
import styled from "styled-components";
import "../../Fonts/SourceSans/SourceSansPro_Light.css";
import Card1 from "./card1";

const DivContainer = styled.div`
  display: flex;
  height: 900px;
  background-color: #ffffff;
  @media (max-width: 414px) {
    height: 2150px;
    margin: 10px 0px;
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 2500px;
  align-items: center;
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
            <br />
            <br />
            <MainTitle>Como funciona?</MainTitle>
          </DivMargin>
          <DivCard>
            <Card1
              image="https://www.icontalent.com.br/wp-content/uploads//2020/08/Icon-The-One.svg"
              title="Publique uma vaga"
              subtitle="Publique uma vaga. Publique a sua vaga para milhares de profissionais, você irá receber propostas de freelancers talentosos em poucos minutos."
            />
            <Card1
              image="https://www.icontalent.com.br/wp-content/uploads//2020/08/Icon-Chegada.svg"
              title="Contrate"
              subtitle="Reveja o histórico de trabalho, feedback de clientes e portfólio para limitar os candidatos. Então faça uma entrevista pelo chat e escolha o melhor."
            />
            <Card1
              image="https://www.icontalent.com.br/wp-content/uploads//2020/08/Icon-Three.svg"
              title="Pague com segurança"
              subtitle="Com o pagamento seguro do 99Freelas, o pagamento será repassado para o freelancer somente quando o projeto estiver concluído."
            />
          </DivCard>
        </DivContent>
      </DivContainer>
    );
  }
}
