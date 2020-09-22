import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../utils/redux';
import { routes } from '../utils/constants';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H1';
import NameForm from '../components/molecules/NameForm/NameForm';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;

	@media (min-width: 768px) {
		max-width: 500px;
		margin: auto;
		width: 100%;
	}
`;

const StartPage = () => {
	const history = useHistory();
	const { user } = useSelector(userSelector);

	useEffect(() => {
		if (user.name.length) {
			history.push(routes.home);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

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
