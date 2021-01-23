import React from "react";
import styled from "styled-components";
import "../../Fonts/SourceSans/SourceSansPro_Light.css";

const DivContainer = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  justify-content: center;
  @media (max-width: 414px) {
    flex-wrap: wrap;
    height: 1000px;
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 600px;
  margin: 5px;
  @media (max-width: 414px) {
    width: 100%;
    font-size: 48px;
    text-align: center;
  }
`;
const Subtitle = styled.p`
  width: 600px;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  color: #575757;
  font-size: 24px;
  font-weight: 800;
  margin: 5px;
  line-height: 32px;
  @media (max-width: 414px) {
    width: 100%;
    text-align: center;
    margin: auto;
  }
`;

const DivMargin = styled.div`
  margin: 20px 10px;
`;

const DivImage = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  @media (max-width: 414px) {
    width: 100%;
    height: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default class Section2 extends React.Component {
  render() {
    return (
      <DivContainer>
        <DivContent>
          <DivMargin>
            <MainTitle>2.800.000</MainTitle>
            <Subtitle>
              Serviços solicitados por ano, de Arquiteto à Professor de Francês.
            </Subtitle>
          </DivMargin>
          <DivMargin>
            <MainTitle>240.000</MainTitle>
            <Subtitle>
              Clientes felizes por mês, com serviços contratados pelo Future
              Ninjas.
            </Subtitle>
          </DivMargin>
          <DivMargin>
            <MainTitle>R$ 450.000.000</MainTitle>
            <Subtitle>
              Valor em serviços por ano, no bolso dos nossos profissionais.
            </Subtitle>
          </DivMargin>
        </DivContent>
        <DivImage>
          <Image src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573496799515-eebbb63814f2%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax" />
        </DivImage>
      </DivContainer>
    );
  }
}
