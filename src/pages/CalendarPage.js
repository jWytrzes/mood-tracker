import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../utils/redux';
import { routes } from '../utils/constants';
import { genereateRandomData } from '../utils';
import CalendarHeader from '../components/molecules/CalendarHeader/CalendarHeader';
import CalendarBox from '../components/organisms/CalendarBox/CalendarBox';
import Button from '../components/atoms/Button';

const StyledWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		max-height: 677px;
		min-height: unset;
		height: 100%;
	}
`;

const StyledButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 15px 0 30px;
`;

const CalendarPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useSelector(userSelector);

	useEffect(() => {
		setIsLoading(false);
	}, [user.moodData]);

	return (
		<StyledWrapper>
			<CalendarHeader />
			<CalendarBox />
			<StyledButtonsWrapper>
				<Button small secondary onClick={genereateRandomData}>
					Generate random data
				</Button>
				<Button small={1} as={Link} to={routes.stats}>
					See stats
				</Button>
			</StyledButtonsWrapper>
		</StyledWrapper>
	);
};

export default CalendarPage;
