import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData, updateStep } from '../../../utils/redux';
import { endpoints, steps } from '../../../utils/constants';
import { db, auth } from '../../../firebase';
import H2 from '../../atoms/H2';
import Button from '../../atoms/Button/Button';
import { StyledInput } from './NameForm-styles';

const NameForm = () => {
	const [name, setName] = useState('');
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
			dispatch(updateStep(steps.mood));
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
		</div>
	);
};

export default NameForm;
