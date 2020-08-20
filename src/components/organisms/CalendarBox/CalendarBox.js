import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../utils/redux';
import { getFormattedDate } from '../../../utils';
import { StyledWrapper, StyledCalendar } from './styles';
import prevArrow from '../../../assets/leftArrow.svg';
import nextArrow from '../../../assets/rightArrow.svg';

const CalendarBox = () => {
	const [date] = useState(new Date());
	const { user } = useSelector(userSelector);

	const handleDayClick = (value) => {
		console.log(getFormattedDate(value));
	};

	return (
		<StyledWrapper>
			<StyledCalendar
				value={date}
				tileClassName={({ date }) => {
					const data = user.moodData[getFormattedDate(date)];
					return data && [data.mood, 'picked'];
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
