import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H2';
import LoginForm from '../components/molecules/LoginForm/LoginForm';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;
`;

const Login = () => {
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
