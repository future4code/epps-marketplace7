import React from "react";
import { Card } from "../Styled";
import { StyledDetailsIcon } from "./../Styled";

export class JobCard extends React.Component {
  state = { details: false };

  toggleDetails = () => {
    this.setState({ details: !this.state.details });
  };

  render() {
    Date.prototype.formatDDMMYY = function () {
      return (
        this.getDate() + "/" + this.getMonth() + 1 + "/" + this.getYear()
      );
    };
    return (
      <div>
        <Card>
          <h3>{this.props.title}</h3>
          <p className="description">
            <span>Descrição: </span>
            {this.props.description}
          </p>
          <p>
            <span>Valor: </span>
            R$ {this.props.value.toFixed(2)}
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
                {Date(this.props.dueDate)}
              </p>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
