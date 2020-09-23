import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector, stateSelector } from '../utils/redux';
import { routes, steps } from '../utils/constants';
import { genereateRandomData } from '../utils';
import CalendarHeader from '../components/molecules/CalendarHeader/CalendarHeader';
import CalendarBox from '../components/organisms/CalendarBox/CalendarBox';
import Button from '../components/atoms/Button/Button';
import Loader from '../components/atoms/Loader/Loader';

const StyledWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		margin: auto;
		min-height: unset;
		height: 100%;
		width: 100%;
	}
`;

const StyledButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 15px 0 30px;

	@media (min-width: 768px) {
		margin: 30px auto;
		max-width: 500px;
		width: 100%;

		a,
		button {
			margin: 10px 0;
		}
	}
`;

const CalendarPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [redirect, setRedirect] = useState(null);
	const { user } = useSelector(userSelector);
	const { step } = useSelector(stateSelector);

	useEffect(() => {
		user.moodData ? setIsLoading(false) : setIsLoading(true);
	}, [user.moodData]);

	useEffect(() => {
		if (step) {
			if (step === steps.name) {
				setRedirect(routes.start);
			}
			setIsLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [step]);

	const handleRandomClick = () => {
		setIsLoading(true);
		genereateRandomData();
	};

	return (
		<StyledWrapper>
			{isLoading && <Loader />}
			<CalendarHeader />
			<CalendarBox />
			<StyledButtonsWrapper>
				<Button small secondary onClick={handleRandomClick}>
					Generate random data
				</Button>
				<Button small={1} as={Link} to={routes.stats}>
					See stats
				</Button>
			</StyledButtonsWrapper>
			{redirect && <Redirect to={redirect} />}
		</StyledWrapper>
	);
};

export default CalendarPage;
