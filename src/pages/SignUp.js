import React from 'react';
import H1 from '../components/atoms/H2';
import SignUpForm from '../components/organisms/SignUpForm/SignUpForm';
import LoginTemplate from '../templates/LoginTemplate/LoginTemplate';

const Login = () => {
	return (
		<LoginTemplate>
			<H1>
				<b>Sign up</b>
			</H1>
			<SignUpForm />
		</LoginTemplate>
	);
};

export default Login;
