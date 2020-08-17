import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../utils/redux';
import { routes } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H1';
import H2 from '../components/atoms/H2';
import MoodCards from '../components/organisms/MoodCards/MoodCards';

const Homepage = () => {
	const history = useHistory();
	const { user } = useSelector(userSelector);

	useEffect(() => {
		if (!user) {
			history.push(routes.login);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<MainTemplate>
			<H1>Hello, {user && <b> {user.name} </b>}</H1>
			<H2> How are you today? </H2>
			<MoodCards />
		</MainTemplate>
	);
};

export default Homepage;
