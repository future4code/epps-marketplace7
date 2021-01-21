import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import  ContainerHome  from "./components/ContainerHome";
import ClientsPage from "./components/PageAnunciante/ClientsPage";
import SellersPage from './components/PageAnunciante/SellersPage';

const NinjaTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#8661B6",
    },
    secondary: {
      main: "#F5F3FC",
    },
  },
});

export default class App extends React.Component {
  state = {
    tela: "Home",
  };
  onClickSair = () => {
    this.setState({ tela: "Home" });
  };
  onClickClient = () => {
	this.setState({ tela: "Client" });
  };
  onClickSeller = () => {
    this.setState({ tela: "Seller" });
  };
  render() {
	  console.log(this.state.tela)
    const TelaAtual = () => {
      switch (this.state.tela) {
        case "Home":
          return (
            <ContainerHome
              onClickClient={this.onClickClient}
              onClickSeller={this.onClickSeller}
            />
          );
        case "Client":
          return <ClientsPage onClickSair={this.onClickSair} />;
        case "Seller":
          return <SellersPage onClickSair={this.onClickSair} />;
      }
    };

    return (
      <div>
        <CssBaseline />
        <ThemeProvider theme={NinjaTheme}>
          {TelaAtual()}
        </ThemeProvider>
      </div>
    );
  }
}
