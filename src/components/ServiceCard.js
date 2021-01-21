import React from 'react';
import styled from 'styled-components';
import WifiIcon from '@material-ui/icons/Wifi';

const DivContainer = styled.div`
display:flex;
background-color: #8661B6;
height: 120px;
width: 650px;
margin: 10px;
border-radius: 15px;
`
const DivIcon = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
width: 100px;
margin-left: 10px;
margin-bottom: 5px;
`
const DivContent = styled.div`
display: flex;`

const DivTitle = styled.div`
display: flex;
font-size: 2.5rem;
height: 100%;
align-items:center;
justify-content: center;
margin-left: 20px;
`

const DivDescription = styled.div`
font-size: 1rem;
margin: 0px 10px;
`
const Price = styled.p`
width: 200px;
display: flex;
font-weight: bolder;
font-size: 2rem;
align-items:center;
justify-content: center;
margin: 0px 10px;
`

export default class ServiceCard extends React.Component {
  state = {

  }

  render() {
    return (
      <DivContainer>
        <DivIcon>
          {/* O icone ainda vou fazer a logica pra pegar icones diferentes de 
          acordo com o serviço */}
          <WifiIcon style={{ fontSize: 80 }} />
        </DivIcon>
        <DivContent>
          <DivTitle> {this.props.title}</DivTitle>
          <Price>{this.props.price}</Price>
        </DivContent>
      </DivContainer>
    )
  }
}