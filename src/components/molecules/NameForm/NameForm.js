import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../utils/redux';
import { routes, endpoints } from '../../../utils/constants';
import { db, auth } from '../../../firebase';
import H2 from '../../atoms/H2';
import Button from '../../atoms/Button';
import { StyledInput } from './styles';

const NameForm = () => {
	const [name, setName] = useState('');
	const [redirect, setRedirect] = useState(false);
	const dispatch = useDispatch();

	const handleInput = (e) => {
		setName(e.target.value);
	};

	const handleButtonClick = () => {
		if (name.length) {
			const currentUser = auth.currentUser;
			currentUser.updateProfile({
				displayName: name,
			});
			db.ref(`${endpoints.users}${currentUser.uid}`).set({
				name,
			});
			dispatch(setUserData({ name }));
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
