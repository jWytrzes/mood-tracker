import React from 'react';
import styled from 'styled-components';
import CalendarHeader from '../components/molecules/CalendarHeader/CalendarHeader';
import CalendarBox from '../components/organisms/CalendarBox/CalendarBox';

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

const CalendarPage = () => {
	return (
		<StyledWrapper>
			<CalendarHeader />
			<CalendarBox />
		</StyledWrapper>
	);
};

export default CalendarPage;
