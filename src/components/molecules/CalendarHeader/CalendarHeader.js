import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../utils/redux';
import { getFormattedDate } from '../../../utils';
import {
	StyledWrapper,
	StyledCalendarCard,
	StyledDay,
	StyledTitle,
	StyledParagraph,
} from './styles';

const CalendarHeader = () => {
	const { user } = useSelector(userSelector);

	useEffect(() => {
		const today = getFormattedDate();
		if (user && user.moodData) {
			const todaysData = user.moodData[today];
			if (todaysData) {
			}
		}
	}, [user]);

	return (
		<StyledWrapper>
			<StyledCalendarCard>
				<StyledDay> 18 </StyledDay>
				<span> aug </span>
			</StyledCalendarCard>
			<div>
				<StyledTitle> Your today's note: </StyledTitle>
				<StyledParagraph>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut.
				</StyledParagraph>
			</div>
		</StyledWrapper>
	);
};

export default CalendarHeader;
