import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ContainerHome from './components/ContainerHome'

function App() {

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

	return (
		<div>
			<CssBaseline />
			<ThemeProvider theme={NinjaTheme}>
				<ContainerHome />
			</ThemeProvider>
		</div>
	)
}

export default App
