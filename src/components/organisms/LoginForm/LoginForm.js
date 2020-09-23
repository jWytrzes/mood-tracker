import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { auth } from '../../../firebase';
import { routes } from '../../../utils/constants';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button/Button';
import FormGroup from '../../atoms/FormGroup';
import Label from '../../atoms/Label';
import FormError from '../../atoms/FormError';
import { StyledWrapper } from './LoginForm-styles';

const LoginForm = () => {
	const handleSubmit = (values) => {
		auth
			.signInWithEmailAndPassword(values.email, values.password)
			.catch((error) => alert(error.message));
	};

	const validate = (values) => {
		const errors = {};

		if (!values.email) {
			errors.email = 'E-mail is required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}

		if (!values.password) {
			errors.password = 'Password is required';
		}

		return errors;
	};

	return (
		<StyledWrapper>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={handleSubmit}
				validate={validate}
			>
				{({ errors, touched }) => (
					<Form>
						<FormGroup>
							<Label htmlFor="email"> E-mail </Label>
							{errors.email && touched.email && (
								<FormError> {errors.email} </FormError>
							)}
							<Input
								as={Field}
								placeholder="e.g. anna.kowalska@email.com"
								id="email"
								name="email"
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="password"> Password </Label>
							{errors.password && touched.password && (
								<FormError> {errors.password} </FormError>
							)}
							<Input as={Field} id="password" type="password" name="password" />
						</FormGroup>
						<Button type="submit"> Log in </Button>
					</Form>
				)}
			</Formik>
			<Button tertiary={1} as={Link} to={routes.signup}>
				Don't have an account? &nbsp; <b> Sign up</b>
			</Button>
		</StyledWrapper>
	);
};

export default LoginForm;
