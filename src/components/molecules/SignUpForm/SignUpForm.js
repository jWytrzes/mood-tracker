import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import routes from '../../../utils/routes';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import FormGroup from '../../atoms/FormGroup';
import Label from '../../atoms/Label';
import FormError from '../../atoms/FormError';
import { StyledWrapper } from './styles';

const SignUpForm = () => {
	const handleSubmit = () => {
		console.log('submit');
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
		} else if (values.password.length < 8) {
			errors.password = 'Password must be at least 8 characters';
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Repeated password is required';
		} else if (values.password !== values.confirmPassword) {
			errors.confirmPassword = 'Passwords need to match';
		}

		return errors;
	};

	return (
		<StyledWrapper>
			<Formik
				initialValues={{
					email: '',
					password: '',
					confirmPassword: '',
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
							<Input as={Field} id="password" name="password" type="password" />
						</FormGroup>
						<FormGroup>
							<Label htmlFor="confirmPassword"> Repeat password </Label>
							{errors.confirmPassword && touched.confirmPassword && (
								<FormError> {errors.confirmPassword} </FormError>
							)}
							<Input
								as={Field}
								id="confirmPassword"
								name="confirmPassword"
								type="password"
							/>
						</FormGroup>
						<Button type="submit"> Sign up </Button>
					</Form>
				)}
			</Formik>
			<Button tertiary={1} as={Link} to={routes.login}>
				Already have an account? &nbsp; <b> Log in </b>
			</Button>
		</StyledWrapper>
	);
};

export default SignUpForm;
