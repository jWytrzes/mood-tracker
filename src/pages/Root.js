import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from '../utils/routes';
import theme from '../utils/theme';
import GlobalStyle from '../utils/GlobalStyles';
import PhoneFrame from '../templates/PhoneFrame/PhoneFrame';
import Homepage from './Homepage';
import StartPage from './StartPage';
import CalendardPage from './CalendardPage';

const Root = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<PhoneFrame>
			<Router>
				<Switch>
					<Route exact path={routes.home}>
						<Homepage />
					</Route>
					<Route path={routes.start}>
						<StartPage />
					</Route>
					<Route path={routes.calendar}>
						<CalendardPage />
					</Route>
				</Switch>
			</Router>
		</PhoneFrame>
	</ThemeProvider>
);

export default Root;
