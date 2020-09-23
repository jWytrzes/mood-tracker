import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector, stateSelector } from '../utils/redux';
import { routes, steps } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H1';
import NameForm from '../components/molecules/NameForm/NameForm';
import Loader from '../components/atoms/Loader/Loader';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;

	@media (min-width: 768px) {
		max-width: 500px;
		margin: auto;
		width: 100%;
	}
`;

const StartPage = () => {
	const { user } = useSelector(userSelector);
	const { step } = useSelector(stateSelector);
	const [isLoading, setIsLoading] = useState(true);
	const [redirect, setRedirect] = useState(null);

	useEffect(() => {
		if (user && step) {
			if (step === steps.mood) {
				setRedirect(routes.home);
			} else if (step === steps.done) {
				setRedirect(routes.calendar);
			}
			setIsLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, step]);

	return isLoading ? (
		<Loader />
	) : (
		<MainTemplate>
			<StyledWrapper>
				<H1>
					<b> Hello! </b>
				</H1>
				<NameForm />
			</StyledWrapper>
			{redirect && <Redirect to={redirect} />}
		</MainTemplate>
	);
};

export default StartPage;
