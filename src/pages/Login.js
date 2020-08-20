import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../utils/redux';
import { routes } from '../utils/constants';
import { getFormattedDate } from '../utils';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H2';
import LoginForm from '../components/molecules/LoginForm/LoginForm';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;
`;

const Login = () => {
	const { user } = useSelector(userSelector);
	const [redirect, setRedirect] = useState(null);

	useEffect(() => {
		if (user && user.name && user.name.length) {
			if (user.moodData && user.moodData[getFormattedDate()]) {
				setRedirect(routes.calendar);
			} else {
				setRedirect(routes.home);
			}
		} else if (user) {
			setRedirect(routes.start);
		} else {
			setRedirect(null);
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
			{redirect && <Redirect to={redirect} />}
		</MainTemplate>
	);
};

export default Login;
