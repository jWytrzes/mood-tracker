import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../utils/routes';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import FormGroup from '../../atoms/FormGroup';
import Label from '../../atoms/Label';
import { StyledWrapper } from './styles';

const SignUpForm = () => {
	return (
		<StyledWrapper>
			<FormGroup>
				<Label htmlFor="email"> E-mail </Label>
				<Input placeholder="e.g. anna.kowalska@email.com" id="email" />
			</FormGroup>
			<FormGroup>
				<Label htmlFor="password"> Password </Label>
				<Input id="password" type="password" />
			</FormGroup>
			<FormGroup>
				<Label htmlFor="repeatPassword"> Repeat password </Label>
				<Input id="repeatPassword" type="password" />
			</FormGroup>
			<Button> Sign up </Button>
			<Button tertiary={1} as={Link} to={routes.login}>
				Already have an account? &nbsp; <b> Log in </b>
			</Button>
		</StyledWrapper>
	);
};

export default SignUpForm;
