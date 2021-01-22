import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 60vw;
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

const Text = styled.textarea`
width: 45vw;
height: 13vh;
border-radius: 3px;
border: none;
padding: 5px;
resize: none;
`
const Label = styled.label`
width: 45vw;
border: none;
color: #F5F3FC;

`
const Title = styled.h2`
padding: 0;
color: #333;
`
const StyledButton = styled(Button)`
background-color: #333;
color: #F5F3FC;
&: hover{
background-color: #252525;
color: #8661B6;
}
`

export default class RegisterJob extends React.Component {
    render() {
        return (
            <ContainerForm>
                <Title>Cadastre um novo Trabalho</Title>
                <Label>Titulo</Label>
                <Input />
                <Label>Descrição</Label>
                <Text rows="4" cols="50" />
                <Label>Valor da remuneração</Label>
                <Input />
                <Label>Método(s) de pagamento oferecidos</Label>
                <Input />
                <Label>Prazo</Label>
                <Input />
                <StyledButton variant="contained" color='red'  disableElevation>
                    Cadastrar Trabalho
                </StyledButton>
            </ContainerForm>
        )
    }
}




