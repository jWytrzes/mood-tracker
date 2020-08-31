import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import Button from '../components/atoms/Button';
import H1 from '../components/atoms/H2';
import MoodChart from '../components/organisms/MoodChart/MoodChart';
import leftArrowWhite from '../assets/leftArrowWhite.svg';

const StyledButton = styled(Button)`
	padding: 10px 12px;
	margin: auto 15px auto 0;
	height: fit-content;
`;

const StyledHeader = styled.div`
	display: flex;
`;

const Stats = () => {
	const history = useHistory();

	const handleBackClick = () => {
		history.goBack();
	};

	return (
		<MainTemplate>
			<StyledHeader>
				<StyledButton small={1} onClick={handleBackClick}>
					<img src={leftArrowWhite} alt="Go back" />
				</StyledButton>
				<H1> Your stats </H1>
			</StyledHeader>
			<MoodChart />
		</MainTemplate>
	);
};

export default Stats;
