import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ContainerHome from "./components/ContainerHome";

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
    <div>
      <CssBaseline />
      <ThemeProvider theme={NinjaTheme}>
        <ContainerHome />
      </ThemeProvider>
    </div>
  );
  }
}
