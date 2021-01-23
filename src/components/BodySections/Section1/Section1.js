import React from "react";
import styled from "styled-components";
import "../../Fonts/SourceSans/SourceSansPro_Light.css";
//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ButtonContinue from "./Button";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import GradeIcon from "@material-ui/icons/Grade";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const DivContainer = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  @media (max-width: 414px) {
    flex-wrap: wrap;
    height: 870px;
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.p`
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 48px;
  line-height: 56px;
  width: 55%;
  margin: 5px;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 32px;
    width: 100%;
  }
`;
const Subtitle = styled.p`
  width: 70%;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  color: #575757;
  font-size: 24px;
  font-weight: 800;
  margin: 5px;
  line-height: 32px;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const DivInputButton = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 414px) {
    width: 90%;
    margin: 8px 0px;
  }
`;

const InputMaterial = styled(TextField)`
  margin: 8px 0px;
  width: 100%;
`;

const DivFooterContents = styled.div`
  display: flex;
  padding: 10px 0px;
  @media (max-width: 414px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
  }
`;

const VerifiedUserIconPer = styled(VerifiedUserIcon)`
  width: 50px;
  @media (max-width: 414px) {
    margin-bottom: 5px;
  }
`;

const PSloganFooter = styled.p`
  margin: 0px 10px;
  font-size: 20px;
  color: #575757;
  @media (max-width: 414px) {
    width: 100%;
    text-align: center;
  }
`;

const DivRating = styled.div`
  display: flex;
  margin: 3px 10px;
  @media (max-width: 414px) {
    margin-top: 20px;
  }
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

export default class Section1 extends React.Component {
  render() {
    return (
      <DivContainer>
        <DivContent>
          <MainTitle>O jeito mais esperto de contratar um serviço</MainTitle>
          <Subtitle>
            Fale o que precisa, receba orçamentos e escolha o melhor.
          </Subtitle>
          <DivInputButton>
            <InputMaterial
              id="outlined-basic"
              label="Digite aqui o que você precisa"
              variant="outlined"
            />
            <ButtonContinue />
          </DivInputButton>
          <DivFooterContents>
            <>
              <VerifiedUserIconPer />
              <PSloganFooter>Orçamento gŕatis e seguro</PSloganFooter>
            </>
            <DivRating>
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
            </DivRating>
            <PSloganFooter>Profissionais avaliados</PSloganFooter>
          </DivFooterContents>
        </DivContent>
        <DivImage>
          <Image src="https://wallpapercave.com/wp/wp6690890.jpg" />
        </DivImage>
      </DivContainer>
    );
  }
}
