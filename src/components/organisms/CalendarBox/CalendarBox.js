import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, changeTheme, setInfoDate } from '../../../utils/redux';
import { getFormattedDate } from '../../../utils';
import { StyledWrapper, StyledCalendar } from './styles';
import prevArrow from '../../../assets/leftArrow.svg';
import nextArrow from '../../../assets/rightArrow.svg';

const CalendarBox = () => {
	const [date] = useState(new Date());
	const { user } = useSelector(userSelector);
	const dispatch = useDispatch();

	const handleDayClick = (value) => {
		if (user && user.moodData) {
			const date = getFormattedDate(value);
			const dayData = user.moodData[date];
			if (dayData) {
				dispatch(changeTheme(dayData.mood.replace(' ', '')));
				dispatch(setInfoDate(date));
			} else {
				dispatch(setInfoDate(null));
				if (!user.moodData[getFormattedDate()]) {
					dispatch(changeTheme('happy'));
				}
			}
		}
	};

	return (
		<StyledWrapper>
			<StyledCalendar
				value={date}
				tileClassName={({ date }) => {
					if (user && user.moodData) {
						const data = user.moodData[getFormattedDate(date)];
						return data && [data.mood.replace(' ', ''), 'picked'];
					}
				}}
				prevLabel={<img src={prevArrow} alt="Previous month" />}
				nextLabel={<img src={nextArrow} alt="Next month" />}
				next2Label={null}
				prev2Label={null}
				formatShortWeekday={(locale, date) => date.toString().split(' ')[0][0]}
				onClickDay={handleDayClick}
			/>
		</StyledWrapper>
	);
};

export default CalendarBox;
