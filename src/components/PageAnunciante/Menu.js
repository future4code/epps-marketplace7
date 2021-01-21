import React from 'react';
import Styled from 'styled-components'
import CadastroJob from './CadastroJob'
import CardTravelIcon from '@material-ui/icons/CardTravel';
import CreateIcon from '@material-ui/icons/Create';

const MenuLateral = Styled.div`
display: flex;
flex-direction: column;
width: 22vw;
border: solid 1px #8661B6;
`
const ContainerPage = Styled.div`
display: flex;
margin: 10px;
width: 100vw;
`
const ContainerFormulario = Styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
width: 99vw;
`
const Opcoes = Styled.h5`
display: flex;
color: #333;
align-items: center;
margin: 10px;
&: hover {
  color: #8661B6;
}
`
export default function MiniDrawer() {
 return (
   <ContainerPage>
     
     <MenuLateral>
     
       <Opcoes><CardTravelIcon/> Trabalhos Cadastrados</Opcoes>
       <Opcoes> <CreateIcon />Cadastrar novos trabalhos</Opcoes>
     </MenuLateral>
     <ContainerFormulario>

     <CadastroJob />
     </ContainerFormulario>

   </ContainerPage>

 ) 
}

