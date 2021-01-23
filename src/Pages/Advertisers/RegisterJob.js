import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import axios from 'axios'

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
height: 4vh;
border-radius: 3px;
background-color: #F5F3FC;
padding: 5px;
border: none;
&:focus {
    outline: none;
}
`

const Text = styled.textarea`
width: 45vw;
height: 13vh;
border-radius: 3px;
border: none;
padding: 5px;
resize: none;
&:focus {
    outline: none;
}
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
    state = {
        inputTitle: '',
        inputDescription: '',
        inputValue: '',
        inputPayment: [],
        inputDueDate: ''
    }
    handleInputTitle = (e) => {
        this.setState({ inputTitle: e.target.value })
      }

      handleInputDescription = (e) => {
        this.setState({ inputDescription: e.target.value })
      }
      
      handleInputValue = (e) => {
        this.setState({ inputValue: Number(e.target.value) })
      }
      
      handleinputPayment = (e) => {
        this.setState({ inputPayment: [e.target.value] })
      }
      
      handleInputDueDate = (e) => {
        this.setState({ inputDueDate: Number(e.target.value) })
      }

      createNeWJob = () => {
          const body = {
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            value: this.state.inputValue,
            paymentMethods: this.state.inputPayment,
            dueDate: this.state.inputDueDate
          }

          axios.post("https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs", body)
          .then((resposta) => {
              alert('Proposta de trabalho criada com sucesso :)')
              this.setState({ inputTitle: ''})
              this.setState({ inputDescription: ''})
              this.setState({ inputValue: ''})
              this.setState({ inputPayment: [] })
              this.setState({ inputDueDate: ''})
              
          })
          .catch((erro) => {
            alert('Não foi possivel criar proposta de trabalho :(')
          })
      }


    render() {
        return (
            <ContainerForm>
                <Title>Cadastre um novo Trabalho</Title>
                <Label>Titulo</Label>
                <Input value={this.state.inputTitle} onChange={this.handleInputTitle} />
                <Label>Descrição</Label>
                <Text rows="4" cols="50" value={this.state.inputDescription} onChange={this.handleInputDescription} />
                <Label>Valor da remuneração</Label>
                <Input value={this.state.inputValue} onChange={this.handleInputValue} />
                <Label>Método(s) de pagamento oferecidos</Label>
                <Input value={this.state.inputPayment} onChange={this.handleinputPayment} />
                <Label>Prazo</Label>
                <Input value={this.state.inputDueDate} onChange={this.handleInputDueDate} />
                <StyledButton variant="contained"  disableElevation onClick={this.createNeWJob}>
                    Cadastrar Trabalho
                </StyledButton>
            </ContainerForm>
        )
    }
}
