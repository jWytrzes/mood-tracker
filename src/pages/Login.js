import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../utils/redux';
import { routes } from '../utils/constants';
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
	const { user } = useSelector(userSelector);

	useEffect(() => {
		if (user) {
			history.push(routes.home);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

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
