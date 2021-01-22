import React from 'react';
import Styled from 'styled-components'
import RegisterJob from './RegisterJob'
import CardTravelIcon from '@material-ui/icons/CardTravel';
import CreateIcon from '@material-ui/icons/Create';

const MenuSide = Styled.div`
display: flex;
flex-direction: column;
width: 22vw;
border: solid 1px #8661B6;
background-color: #F5F3FC;
`
const ContainerPage = Styled.div`
display: flex;
margin: 10px;
width: 100vw;
`
const ContainerForm = Styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
width: 99vw;
`
const Options = Styled.h5`
display: flex;
color: #333;
align-items: center;
margin: 10px;
&: hover {
  color: #8661B6;
}
`
export default class Menu extends React.Component {
  render() {
    return (
      <ContainerPage>

        <MenuSide>

          <Options><CardTravelIcon /> Trabalhos Cadastrados</Options>
          <Options> <CreateIcon />Cadastrar novos trabalhos</Options>
        </MenuSide>
        <ContainerForm>
          <RegisterJob />
        </ContainerForm>

      </ContainerPage>

    )
  }
}

