import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../utils/redux';
import { routes } from '../utils/constants';
import H1 from '../components/atoms/H1';
import H2 from '../components/atoms/H2';
import MoodForm from '../components/organisms/MoodForm/MoodForm';

const StyledWrapper = styled.div`
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.base};
	padding: 25px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	@media (min-width: 768px) {
		max-height: 677px;
		min-height: unset;
		height: 100%;
	}
`;

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
		<StyledWrapper>
			<H1>Hello, {user && <b> {user.name} </b>}</H1>
			<H2> How are you today? </H2>
			<MoodForm />
		</StyledWrapper>
	);
};

export default Homepage;
