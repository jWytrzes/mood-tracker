import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { auth } from '../../../firebase';
import { routes, CURRENT_USER } from '../../../utils/constants';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import FormGroup from '../../atoms/FormGroup';
import Label from '../../atoms/Label';
import FormError from '../../atoms/FormError';
import { StyledWrapper } from './styles';

const LoginForm = () => {
	const handleSubmit = (values) => {
		auth
			.signInWithEmailAndPassword(values.email, values.password)
			.then(({ user }) => {
				console.log(user);
				if (user) {
					localStorage.setItem(CURRENT_USER, user.uid);
				} else {
					localStorage.removeItem(CURRENT_USER);
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<StyledWrapper>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={handleSubmit}
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
