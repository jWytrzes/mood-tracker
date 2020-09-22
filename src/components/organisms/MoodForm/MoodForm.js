import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { auth, db } from '../../../firebase';
import { endpoints, routes } from '../../../utils/constants';
import { setInfoDate } from '../../../utils/redux';
import { getFormattedDate, updateUserDataInStore } from '../../../utils';
import MoodCards from '../../molecules/MoodCards/MoodCards';
import H2 from '../../atoms/H2';
import Button from '../../atoms/Button/Button';
import {
	StyledWrapper,
	StyledForm,
	StyledCard,
	StyledTextarea,
	StyledButtons,
} from './MoodForm-styles';

const MoodForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSubmit = (values) => {
		const userId = auth.currentUser.uid;
		const today = getFormattedDate();
		db.ref(`${endpoints.users}${userId}${endpoints.moodData}/${today}`)
			.set({
				mood: values.pickedMood.toLowerCase(),
				note: values.note,
			})
			.then((res) => {
				updateUserDataInStore(userId);
				dispatch(setInfoDate(today));
				history.push(routes.calendar);
			});
	};

	const handleSkipClick = () => {
		history.push(routes.calendar);
	};

	const validate = (values) => {
		const errors = {};

		if (!values.pickedMood.length) {
			errors.pickedMood = 'Choose mood';
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{ pickedMood: '', note: '' }}
			onSubmit={handleSubmit}
			validate={validate}
		>
			{({ values }) => (
				<StyledForm>
					<StyledWrapper>
						<MoodCards values={values} />
						<StyledCard>
							<H2> Have some toughts? </H2>
							<Field
								as={StyledTextarea}
								name="note"
								id="note"
								placeholder="It was an awesome day!"
								rows="3"
							></Field>
							<StyledButtons>
								<Button type="submit"> Save mood </Button>
								<Button type="button" tertiary onClick={handleSkipClick}>
									Skip for now
								</Button>
							</StyledButtons>
						</StyledCard>
					</StyledWrapper>
				</StyledForm>
			)}
		</Formik>
	);
};

export default MoodForm;
