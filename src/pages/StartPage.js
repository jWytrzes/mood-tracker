import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import H1 from '../components/atoms/H1';
import NameForm from '../components/molecules/NameForm/NameForm';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;
`;

const StartPage = () => {
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
