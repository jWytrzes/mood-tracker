import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { CURRENT_USER, routes } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H2';
import LoginForm from '../components/molecules/LoginForm/LoginForm';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;
`;

const Login = () => {
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			console.log(user);
			if (user) {
				localStorage.setItem(CURRENT_USER, user.uid);
				history.push(routes.start);
			} else {
				localStorage.removeItem(CURRENT_USER);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<MainTemplate>
			<StyledWrapper>
				<H1>
					<b>Login</b>
				</H1>
				<LoginForm />
			</StyledWrapper>
		</MainTemplate>
	);
};

export default Login;
