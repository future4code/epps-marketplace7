import React from "react";
import styled from "styled-components";
import "../../Fonts/SourceSans/SourceSansPro_Light.css";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  margin: 0px 10px;
  @media (max-width: 414px) {
    margin: 60px 0px;
    height: 400px;
  }
`;

const DivImage = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.p`
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 56px;
  width: 400px;
  text-align: center;
  @media (max-width: 414px) {
    font-size: 36px;
    margin-top: 10px;
  }
`;
const Subtitle = styled.p`
  width: 400px;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  color: #575757;
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  text-align: center;
  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export default class Card1 extends React.Component {
  state = {};

  render() {
    return (
      <DivContent>
        <DivImage>
          <Image src={this.props.image} />
        </DivImage>
        <MainTitle>{this.props.title}</MainTitle>
        <Subtitle>{this.props.subtitle}</Subtitle>
      </DivContent>
    );
  }
}
