import React, { useEffect, useState } from 'react';
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
import Loader from '../components/atoms/Loader/Loader';

const PrivateRoute = ({ component: Component, authenticated, ...props }) => {
	return (
		<Route
			{...props}
			render={(routeProps) =>
				authenticated ? (
					<Component {...routeProps} />
				) : (
					<Redirect to={routes.login} />
				)
			}
		/>
	);
};

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				updateUserDataInStore(user.uid);
				setIsAuthenticated(true);
				setIsLoading(false);
			} else {
				updateUserDataInStore(null);
				setIsAuthenticated(false);
				setIsLoading(false);
			}
		});
	}, []);

	return (
		<ThemeProvider
			theme={themes[useSelector(userSelector).theme] || themes.happy}
		>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<GlobalStyle />
					<Router>
						<Switch>
							<PrivateRoute
								exact
								path={routes.home}
								component={Homepage}
								authenticated={isAuthenticated}
							/>
							<PrivateRoute
								path={routes.start}
								component={StartPage}
								authenticated={isAuthenticated}
							/>
							<PrivateRoute
								path={routes.calendar}
								component={CalendarPage}
								authenticated={isAuthenticated}
							/>
							<PrivateRoute
								path={routes.stats}
								component={Stats}
								authenticated={isAuthenticated}
							/>
							<Route path={routes.login}>
								<Login />
							</Route>
							<Route path={routes.signup}>
								<SignUp />
							</Route>
						</Switch>
					</Router>
				</>
			)}
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
