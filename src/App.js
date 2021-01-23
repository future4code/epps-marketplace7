import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home";
import ClientsPage from "./Pages/Clients/ClientsPage";
import AdvertisersPage from "./Pages/Advertisers/AdvertisersPage";
import AboutUs from "./Pages/AboutUs/AboutUs.js";

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
  onclickAboutUs = () => {
    this.setState({ tela: "AboutUs" });
  };
  render() {
    const TelaAtual = () => {
      switch (this.state.tela) {
        case "Home":
          return (
            <Home
              onClickHome={this.onClickSair}
              onClickClient={this.onClickClient}
              onClickSeller={this.onClickSeller}
              onclickAboutUs={this.onclickAboutUs}
            />
          );
        case "Client":
          return <ClientsPage onClickSair={this.onClickSair} />;
        case "Seller":
          return <AdvertisersPage onClickSair={this.onClickSair} />;
        case "AboutUs":
          return (
            <AboutUs
              onClickHome={this.onClickSair}
              onClickClient={this.onClickClient}
              onClickSeller={this.onClickSeller}
              onclickAboutUs={this.onclickAboutUs}
            />
          );
        default:
          return "";
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
