import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const ContainerFormulario = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 65vw;
background-color: #8661B6;
height: 75vh;
align-items: center;
border-radius: 5px;
padding: 15px;
border: 1px solid #333;

`
const Input = styled.input`
width: 45vw;
height: 3vh;
border-radius: 3px;
background-color: #F5F3FC;
padding: 5px;
border: none;
`

const Texto = styled.textarea`
width: 45vw;
height: 13vh;
border-radius: 3px;
border: none;
padding: 5px;
`
const Label = styled.label`
width: 45vw;
border: none;
color: #F5F3FC;

`
const Titulo = styled.h2`
padding: 0;
color: #333;
`
const StyledButton = styled(Button)`
background-color: red;
`



export default class CadastroJob extends React.Component {
    render() {
        return (
            <ContainerFormulario>
                <Titulo>Cadastre um novo Trabalho</Titulo>
                <Label>Titulo</Label>
                <Input />
                <Label>Descrição</Label>
                <Texto rows="4" cols="50" />
                <Label>Valor da remuneração</Label>
                <Input />
                <Label>Método(s) de pagamento oferecidos</Label>
                <Input />
                <Label>Prazo</Label>
                <Input />
                <StyledButton variant="contained" color='red'  disableElevation>
                    Cadastrar Trabalho
                </StyledButton>
            </ContainerFormulario>
        )
    }
}


/* #8661B6
#F5F3FC
#494949 */





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

