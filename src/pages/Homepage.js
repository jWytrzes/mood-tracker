import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { db, auth } from '../firebase';
import { userSelector } from '../utils/redux';
import { routes, endpoints } from '../utils/constants';
import { getFormattedDate, updateUserDataInStore } from '../utils';
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
	transition: background-color 0.2s ease-out;
	will-change: background-color;

	@media (min-width: 768px) {
		min-height: 100vh;
		height: 100%;
	}
`;

const StyledInner = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	@media (min-width: 768px) {
		max-width: 1000px;
		width: 100%;
		margin: auto;
		flex: 0;
	}
`;

const StyledIconsInfo = styled.div`
	position: absolute;
	top: 4px;
	right: 5px;
	z-index: 999;
	font-size: 1rem;

	a {
		color: ${({ theme }) => theme.base};
		text-decoration: none;
		border-bottom: 1px solid ${({ theme }) => theme.base};
		transition: color 0.2s ease-in;
		will-change: color;

		&:hover {
			color: ${({ theme }) => theme.textPrimary};
		}
	}

	@media (min-width: 1200px) {
		transform: rotate(90deg);
		bottom: 0px;
		top: unset;
		right: 10px;
		transform-origin: top right;
		font-size: 1.4rem;
	}
`;

const Homepage = () => {
	const history = useHistory();
	const { user } = useSelector(userSelector);

	useEffect(() => {
		if (user) {
			const userId = auth.currentUser.uid;
			const today = getFormattedDate();
			db.ref(`${endpoints.users}${userId}${endpoints.moodData}/${today}`)
				.once('value')
				.then((snapshot) => {
					if (snapshot.val()) {
						updateUserDataInStore(userId);
						history.push(routes.calendar);
					}
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<StyledWrapper>
			<StyledInner>
				<H1>Hello, {user && <b> {user.name} </b>}</H1>
				<H2> How are you today? </H2>
				<MoodForm />
			</StyledInner>
			<StyledIconsInfo>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://icons8.com/icons/set/undefined"
				>
					In Love
				</a>
				,{' '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://icons8.com/icons/set/undefined"
				>
					Sleeping
				</a>{' '}
				and other icons by{' '}
				<a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
					Icons8
				</a>
			</StyledIconsInfo>
		</StyledWrapper>
	);
};

export default Homepage;
