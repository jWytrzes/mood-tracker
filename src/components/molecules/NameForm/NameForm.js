import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { USER_NAME } from '../../../utils/constants';
import routes from '../../../utils/routes';
import H2 from '../../atoms/H2';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const NameForm = () => {
	const [name, setName] = useState('');
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const userName = localStorage.getItem(USER_NAME);
		if (userName) {
			setRedirect(true);
		}
	}, []);

	const handleInput = (e) => {
		setName(e.target.value);
	};

	const handleButtonClick = () => {
		if (name.length) {
			localStorage.setItem(USER_NAME, name);
			setRedirect(true);
		}
	};

	return (
		<div>
			<H2> What's your name? </H2>
			<Input
				type="text"
				placeholder="Type it here"
				value={name}
				onChange={handleInput}
			/>
			<Button onClick={handleButtonClick}> Let's go </Button>
			{redirect && <Redirect push to={routes.home} />}
		</div>
	);
};

export default NameForm;
