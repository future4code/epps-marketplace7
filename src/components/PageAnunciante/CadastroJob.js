import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const ContainerFormulario = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 65vw;
background-color: #333;
height: 75vh;
align-items: center;
color: #EEE;
border-radius: 10px;
padding: 15px;

`
const Input = styled.input`
width: 45vw;
height: 3vh;
border-radius: 4px;
border: none;
padding: 5px;
`

const Texto = styled.textarea`
width: 45vw;
height: 13vh;
border-radius: 4px;
border: none;
padding: 5px;
`
const Label = styled.label`
width: 45vw;
border: none;
`
const Titulo = styled.h2`
padding: 0;
`

export default class CadastroJob extends React.Component {
    render() {
        return (
            <ContainerFormulario>
                <Titulo>Cadastre um novo Trabalho</Titulo>
                    <Label>Titulo</Label>
                    <Input />
                    <Label>Descrição</Label>
                    <Texto rows="4" cols="50"/>
                    <Label>Valor da remuneração</Label>
                    <Input />
                    <Label>Método(s) de pagamento oferecidos</Label>
                    <Input />
                    <Label>Prazo</Label>
                    <Input />
                    <button>Cadastrar Trabalho</button>
            </ContainerFormulario>
        )
    }
}


/* - Título
- Descrição
- Valor da remuneração
- Método(s) de pagamento oferecidos
- Prazo
Botão */




/* import React from 'react'
import { AppContainer } from './components/AppContainer'
import Button from '@material-ui/core/Button';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                Ola
          </Button>
                </div>
        )
    }
}
 */

/*
logo

instagram: import InstagramIcon from '@material-ui/icons/Instagram';

twiter: import TwitterIcon from '@material-ui/icons/Twitter';

whatsapp: import WhatsAppIcon from '@material-ui/icons/WhatsApp';

termos de uso
fale conosco */