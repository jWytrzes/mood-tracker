import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from '../utils/constants';
import store from '../utils/redux';
import theme from '../utils/theme';
import GlobalStyle from '../utils/GlobalStyles';
import PhoneFrame from '../templates/PhoneFrame/PhoneFrame';
import Homepage from './Homepage';
import StartPage from './StartPage';
import CalendardPage from './CalendardPage';
import Login from './Login';
import SignUp from './SignUp';

const Root = () => {
	return (
		<Provider store={store}>
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
							<Route path={routes.login}>
								<Login />
							</Route>
							<Route path={routes.signup}>
								<SignUp />
							</Route>
						</Switch>
					</Router>
				</PhoneFrame>
			</ThemeProvider>
		</Provider>
	);
};

export default Root;
