import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H2';
import SignUpForm from '../components/molecules/SignUpForm/SignUpForm';
import { userSelector } from '../utils/redux';

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

	useEffect(() => {
		if (user) {
			history.push(routes.start);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<MainTemplate>
			<StyledWrapper>
				<H1>
					<b>Sign up</b>
				</H1>
				<SignUpForm />
			</StyledWrapper>
		</MainTemplate>
	);
};

export default Login;
