import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector, stateSelector } from '../../utils/redux';
import { routes, steps } from '../../utils/constants';
import MainTemplate from '../MainTemplate/MainTemplate';
import { StyledWrapper } from './LoginTemplate-styles';

const LoginTemplate = ({ children }) => {
	const { user } = useSelector(userSelector);
	const { step } = useSelector(stateSelector);
	const [redirect, setRedirect] = useState(null);

	useEffect(() => {
		if (user && step) {
			if (step === steps.name) {
				setRedirect(routes.start);
			} else if (step === steps.mood) {
				setRedirect(routes.home);
			} else {
				setRedirect(routes.calendar);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, step]);

	return (
		<MainTemplate>
			<StyledWrapper>{children}</StyledWrapper>
			{redirect && <Redirect to={redirect} />}
		</MainTemplate>
	);
};

export default LoginTemplate;
