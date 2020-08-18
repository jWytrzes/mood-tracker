import React from 'react';
import { Formik } from 'formik';
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
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<Formik
			initialValues={{ pickedMood: '', note: '' }}
			onSubmit={handleSubmit}
		>
			{({ values }) => (
				<StyledForm>
					<StyledWrapper>
						<MoodCards values={values} />
						<StyledCard>
							<H2> Have some toughts? </H2>
							<StyledTextarea
								as="textarea"
								name="note"
								id="note"
								placeholder="It was an awesome day!"
								rows="3"
							></StyledTextarea>
							<Button type="submit"> Save mood </Button>
						</StyledCard>
					</StyledWrapper>
				</StyledForm>
			)}
		</Formik>
	);
};

export default MoodForm;
