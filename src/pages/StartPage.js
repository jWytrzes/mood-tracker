import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { CURRENT_USER, routes } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H1';
import NameForm from '../components/molecules/NameForm/NameForm';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;
`;

const StartPage = () => {
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				localStorage.setItem(CURRENT_USER, user.uid);
			} else {
				localStorage.removeItem(CURRENT_USER);
				history.push(routes.login);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<MainTemplate>
			<StyledWrapper>
				<H1>
					<b> Hello! </b>
				</H1>
				<NameForm />
			</StyledWrapper>
		</MainTemplate>
	);
};

export default StartPage;
