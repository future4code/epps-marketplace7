import React, { Component } from 'react'
import styled from 'styled-components'
import logo from "../../components/images/logo.png";


const Body = styled.div`
  display: flex;
  height: 81.7vh ;

  .logoStyled {
    min-width: 40%;
    height: 65%;
    padding: 5% 10% 0 0;
  }

  justify-content: space-around;
  align-items: stretch;
  margin: 3% 0 50px 5%;
  align-content: stretch;

  h2 {
      margin: 5%;
      padding: 0 15% 0 0;
  }
`



export default class BoxUs extends React.Component {
  render() {
    return (
      <div>
        <Body>
            <h2>
            Bem-vindo ao Future Ninjas, sua fonte número um para tod@s so que procuram um Job. <br /> <br />
            Estamos empenhados em fornecer a você o melhor de um ambiente para freelas, com ênfase em 
            ligar freela a empregador, 
            processo ágil, sem burocracia. <br /> <br />
            Se você tiver alguma dúvida ou comentário, não hesite em nos contatar.
            </h2>

            <img src={logo} className="logoStyled"/>
        </Body>
      </div>
    );
  }
}