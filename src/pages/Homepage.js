import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { routes } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H1';
import H2 from '../components/atoms/H2';
import MoodCards from '../components/organisms/MoodCards/MoodCards';

const Homepage = () => {
	const [name, setName] = useState('');
	const history = useHistory();

	useEffect(() => {
		auth.signOut();
		const user = auth.currentUser;
		if (user) {
			setName(user.displayName);
		} else {
			history.push(routes.login);
		}
	}, []);

	return (
		<MainTemplate>
			<H1>
				Hello, <b> {name} </b>
			</H1>
			<H2> How are you today? </H2>
			<MoodCards />
		</MainTemplate>
	);
};

export default Homepage;
