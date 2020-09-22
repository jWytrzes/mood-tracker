import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { auth } from '../firebase';
import { updateUserDataInStore } from '../utils';
import { routes } from '../utils/constants';
import store, { userSelector } from '../utils/redux';
import * as themes from '../utils/theme';
import GlobalStyle from '../utils/GlobalStyles';
import Homepage from './Homepage';
import StartPage from './StartPage';
import CalendarPage from './CalendarPage';
import Login from './Login';
import SignUp from './SignUp';
import Stats from './Stats';

const PrivateRoute = ({ children, ...props }) => {
	const authenticated = auth.currentUser;

	return (
		<Route
			{...props}
			render={() => (authenticated ? children : <Redirect to={routes.login} />)}
		/>
	);
};

const App = () => {
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				updateUserDataInStore(user.uid);
			} else {
				updateUserDataInStore(null);
			}
		});
	}, []);

	return (
		<ThemeProvider
			theme={themes[useSelector(userSelector).theme] || themes.happy}
		>
			<GlobalStyle />
			<Router>
				<Switch>
					<PrivateRoute exact path={routes.home}>
						<Homepage />
					</PrivateRoute>
					<PrivateRoute path={routes.start}>
						<StartPage />
					</PrivateRoute>
					<PrivateRoute path={routes.calendar}>
						<CalendarPage />
					</PrivateRoute>
					<Route path={routes.login}>
						<Login />
					</Route>
					<Route path={routes.signup}>
						<SignUp />
					</Route>
					<PrivateRoute path={routes.stats}>
						<Stats />
					</PrivateRoute>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

const Root = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default Root;
