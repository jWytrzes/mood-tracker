import React from 'react';
import H1 from '../components/atoms/H2';
import LoginForm from '../components/organisms/LoginForm/LoginForm';
import LoginTemplate from '../templates/LoginTemplate/LoginTemplate';

const Login = () => {
	return (
		<LoginTemplate>
			<H1>
				<b>Login</b>
			</H1>
			<LoginForm />
		</LoginTemplate>
	);
};

export default Login;
