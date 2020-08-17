import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../utils/routes';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import FormGroup from '../../atoms/FormGroup';
import { StyledWrapper } from './styles';
import Label from '../../atoms/Label';

const LoginForm = () => {
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
			<Button> Log in </Button>
			<Button tertiary={1} as={Link} to={routes.signup}>
				Don't have an account? &nbsp; <b> Sign up</b>
			</Button>
		</StyledWrapper>
	);
};

export default LoginForm;
