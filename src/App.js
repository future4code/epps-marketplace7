import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { AppContainer } from "./components/AppContainer";
import { JobsList } from "./components/JobsList";
import { MainContainer } from "./Styled";

	const NinjaTheme = createMuiTheme({
		palette: {
			primary: {
				main: '#8661B6',
			},
			secondary: {
				main: '#A98FDE',
			},
		},
	});

export default class App extends React.Component {
  render() {
	return (
    <MainContainer>

    </MainContainer>
  );
  }
}
