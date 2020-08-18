import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { endpoints } from '../../../utils/constants';
import MoodInput from '../../atoms/MoodInput/MoodInput';
import { StyledWrapper } from './styles';

const MoodCards = ({ values }) => {
	const [moods, setMoods] = useState([]);

	useEffect(() => {
		let isMounted = false;

		db.ref(endpoints.moods)
			.once('value')
			.then((snapshot) => {
				let moodsArr = [];
				Object.entries(snapshot.val()).map(([id, mood]) =>
					moodsArr.push({ id, ...mood }),
				);
				if (!isMounted) {
					setMoods(moodsArr);
				}
			});

		return () => {
			isMounted = true;
		};
	}, []);

	return (
		<StyledWrapper>
			{moods.map((mood) => {
				return (
					<MoodInput
						name={mood.name}
						icon={mood.icon}
						key={mood.id}
						checked={values.pickedMood === mood.name.toLowerCase()}
					/>
				);
			})}
		</StyledWrapper>
	);
};

export default MoodCards;
