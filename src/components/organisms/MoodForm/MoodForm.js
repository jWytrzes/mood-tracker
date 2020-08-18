import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { auth, db } from '../../../firebase';
import { endpoints, routes } from '../../../utils/constants';
import { getFormattedDate, updateUserDataInStore } from '../../../utils';
import MoodCards from '../../molecules/MoodCards/MoodCards';
import H2 from '../../atoms/H2';
import Button from '../../atoms/Button';
import {
	StyledWrapper,
	StyledForm,
	StyledCard,
	StyledTextarea,
} from './styles';

const MoodForm = () => {
	const history = useHistory();

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
				history.push(routes.calendar);
			});
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
							<Button type="submit"> Save mood </Button>
						</StyledCard>
					</StyledWrapper>
				</StyledForm>
			)}
		</Formik>
	);
};

export default MoodForm;
