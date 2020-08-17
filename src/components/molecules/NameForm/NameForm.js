import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { USER_NAME, routes, CURRENT_USER } from '../../../utils/constants';
import H2 from '../../atoms/H2';
import Button from '../../atoms/Button';
import { StyledInput } from './styles';
import { db, auth } from '../../../firebase';

const NameForm = () => {
	const [name, setName] = useState('');
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const user = auth.currentUser;
		if (user && user.displayName) {
			setRedirect(true);
		}
	}, []);

	const handleInput = (e) => {
		setName(e.target.value);
	};

	const handleButtonClick = () => {
		if (name.length) {
			const currentUser = auth.currentUser;
			currentUser.updateProfile({
				displayName: name,
			});
			db.ref(`/users/${currentUser.uid}`).set({
				name,
			});
			setRedirect(true);
		}
	};

	return (
		<div>
			<H2> What's your name? </H2>
			<StyledInput
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
