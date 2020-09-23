import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector, stateSelector } from '../utils/redux';
import { routes, steps } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H2';
import LoginForm from '../components/molecules/LoginForm/LoginForm';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;

	@media (min-width: 768px) {
		max-width: 500px;
		width: 500px;
		margin: auto;
	}
`;

const Login = () => {
	const history = useHistory();
	const { user } = useSelector(userSelector);
	const { step } = useSelector(stateSelector);

	useEffect(() => {
		if (user && step) {
			if (step === steps.name) {
				history.push(routes.start);
			} else if (step === steps.mood) {
				history.push(routes.home);
			} else {
				history.push(routes.calendar);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, step]);

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
