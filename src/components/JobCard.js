import React from "react";
import axios from "axios";
import { Card } from "./Styled";
import styled from "styled-components";
import DetailsIcon from "@material-ui/icons/Details";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { baseUrl } from "./Parameters";

const StyledAddIcon = styled(AddBoxIcon)`
  position: absolute;
  right: 0;
  top: 5px;
  color: #494949;
  cursor: pointer;
  &:hover {
    color: #f5f3fc;
  }
`;
export class JobCard extends React.Component {
  state = { details: false };

  toggleDetails = () => {
    this.setState({ details: !this.state.details });
  };

  addJob = () => {
    if (
      window.confirm(
        `Tem certeza que deseja contratar o serviço ${this.props.title}?`
      )
    ) {
      axios.put(`${baseUrl}/${this.props.id}/take`);
      alert("Serviço contratado!")
    }
  };

  render() {
    let StyledDetailsIcon = "";
    if (this.state.details) {
      StyledDetailsIcon = styled(DetailsIcon)`
        position: absolute;
        right: 0;
        bottom: 0;
        color: #a98fde;
        cursor: pointer;
        transform: rotate(180deg);
        &:hover {
          color: #f5f3fc;
        }
      `;
    } else {
      StyledDetailsIcon = styled(DetailsIcon)`
        position: absolute;
        right: 0;
        bottom: 0;
        color: #a98fde;
        cursor: pointer;
        &:hover {
          color: #f5f3fc;
        }
      `;
    }
    return (
      <div>
        <Card>
          <StyledAddIcon onClick={this.addJob} />
          <h3>{this.props.title}</h3>
          <p className="description">
            <span>Descrição: </span>
            {this.props.description}
          </p>
          <p>
            <span>Valor: </span>
            R$ {Number(this.props.value).toFixed(2)}
          </p>
          <StyledDetailsIcon onClick={this.toggleDetails} />
          {this.state.details && (
            <div>
              <p>
                <span>Pagamento: </span>
                {this.props.paymentMethods.map((payment) => {
                  return <p>{payment}</p>;
                })}
              </p>
              <p>
                <span>Prazo: </span>
                {this.props.dueDate} dias
              </p>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
