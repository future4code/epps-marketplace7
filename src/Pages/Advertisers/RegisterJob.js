import React from "react";
import styled from "styled-components";
import axios from "axios";
import ContainedButtons from "../../components/MaterialUI/MaterialButton";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60vw;
  background-color: #8661b6;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #333;
  margin: auto;

  .pagamento-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    color: #494949;
    align-items: center;
    background-color: #f5f3fc;
    line-height: 4vh;
    border-radius: 3px;

    input {
        margin-right: 15px;
    }
  }
`;
const Input = styled.input`
  width: 100%;
  line-height: 4vh;
  border-radius: 3px;
  background-color: #f5f3fc;
  padding: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Text = styled.textarea`
  width: 100%;
  height: 13vh;
  border-radius: 3px;
  border: none;
  padding: 5px;
  resize: none;
  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
  width: 100%;
  border: none;
  color: #f5f3fc;
  margin-top: 20px;
`;
const Title = styled.h2`
  padding: 0;
  color: #F5F3FC;
`;

export default class RegisterJob extends React.Component {
  state = {
    inputTitle: "",
    inputDescription: "",
    inputValue: "",
    inputPayment: [],
    inputDueDate: "",
  };
  handleInputTitle = (e) => {
    this.setState({ inputTitle: e.target.value });
  };

  handleInputDescription = (e) => {
    this.setState({ inputDescription: e.target.value });
  };

  handleInputValue = (e) => {
    this.setState({ inputValue: Number(e.target.value) });
  };

  handleInputDueDate = (e) => {
    this.setState({ inputDueDate: Number(e.target.value) });
  };

  createNeWJob = () => {
    let paymentMethodsArr = [];
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < checkboxes.length; i++) {
      paymentMethodsArr.push(checkboxes[i].value);
    }

    const body = {
      title: this.state.inputTitle,
      description: this.state.inputDescription,
      value: this.state.inputValue,
      paymentMethods: paymentMethodsArr,
      dueDate: this.state.inputDueDate,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs",
        body
      )
      .then((resposta) => {
        alert("Proposta de trabalho criada com sucesso :)");
        this.setState({ inputTitle: "" });
        this.setState({ inputDescription: "" });
        this.setState({ inputValue: "" });
        this.setState({ inputPayment: [] });
        this.setState({ inputDueDate: "" });
      })
      .catch((erro) => {
        alert("Não foi possivel criar proposta de trabalho :(");
      });
  };

  render() {
    return (
      <ContainerForm>
        <Title>Cadastre um novo Job</Title>
        <Label>Titulo</Label>
        <Input value={this.state.inputTitle} onChange={this.handleInputTitle} />
        <Label>Descrição</Label>
        <Text
          rows="4"
          cols="50"
          value={this.state.inputDescription}
          onChange={this.handleInputDescription}
        />
        <Label>Valor da remuneração</Label>
        <Input
          type="number"
          value={this.state.inputValue}
          onChange={this.handleInputValue}
        />
        <Label>Método(s) de pagamento oferecidos (separar por vírgulas)</Label>
        <div className="pagamento-container">
          <label>
            Dinheiro <input type="checkbox" value="Dinheiro" />
          </label>
          <label>
            Crédito <input type="checkbox" value="Crédito" />
          </label>
          <label>
            Débito <input type="checkbox" value="Débito" />
          </label>
          <label>
            Boleto <input type="checkbox" value="Boleto" />
          </label>
          <label>
            Transferência <input type="checkbox" value="Transferência" />
          </label>
          <label>
            Pix <input type="checkbox" value="Pix" />
          </label>
        </div>
        <Label>Prazo (dias)</Label>
        <Input
          type="number"
          value={this.state.inputDueDate}
          onChange={this.handleInputDueDate}
        />
        <ContainedButtons
          client={"Cadastrar Job"}
          btnClient={this.createNeWJob}
        />
      </ContainerForm>
    );
  }
}
