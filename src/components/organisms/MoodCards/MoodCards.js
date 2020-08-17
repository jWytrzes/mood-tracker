import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { db } from '../../../firebase';
import MoodInput from '../../molecules/MoodInput/MoodInput';
import { StyledWrapper } from './styles';

const MoodCards = () => {
	const [moods, setMoods] = useState([]);

	useEffect(() => {
		db.ref('/moods/')
			.once('value')
			.then((snapshot) => {
				let moodsArr = [];
				Object.entries(snapshot.val()).map(([id, mood]) =>
					moodsArr.push({ id, ...mood }),
				);
				setMoods(moodsArr);
			});
	}, []);

	return (
		<Formik initialValues={{ pickedMood: '' }}>
			{({ values }) => (
				<Form>
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
				</Form>
			)}
		</Formik>
	);
};

export default MoodCards;
