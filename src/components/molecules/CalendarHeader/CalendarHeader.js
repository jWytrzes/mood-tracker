import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, changeTheme } from '../../../utils/redux';
import { months, routes } from '../../../utils/constants';
import { getFormattedDate } from '../../../utils';
import {
	StyledWrapper,
	StyledCalendarCard,
	StyledDay,
	StyledTitle,
	StyledParagraph,
	StyledMood,
} from './styles';
import Button from '../../atoms/Button';

const CalendarHeader = () => {
	const { user, infoDate } = useSelector(userSelector);
	const [today, setToday] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const date = infoDate || getFormattedDate();
		if (user && user.moodData) {
			const todaysData = user.moodData[date];
			if (todaysData) {
				const [d, m, y] = date.split('-');
				setToday({ ...todaysData, day: d, month: m, year: y });
				dispatch(changeTheme(todaysData.mood.replace(' ', '')));
			} else {
				setToday(null);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, infoDate]);

	return (
		<StyledWrapper>
			{today ? (
				<>
					<StyledCalendarCard>
						<StyledDay> {today.day} </StyledDay>
						<span> {months[today.month]} </span>
					</StyledCalendarCard>
					<div>
						{today && <StyledMood> {today.mood} </StyledMood>}
						<StyledTitle> Your today's note: </StyledTitle>

						<StyledParagraph>
							{today && today.note
								? today.note
								: "You didn't leave a note today"}
						</StyledParagraph>
					</div>
				</>
			) : (
				<>
					<StyledTitle> You didn't set today's mood. </StyledTitle>
					<Button as={Link} to={routes.home} small={1}>
						Do it now!
					</Button>
				</>
			)}
		</StyledWrapper>
	);
};

export default CalendarHeader;
