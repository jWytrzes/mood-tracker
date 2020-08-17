import React from 'react';
import { StyledWrapper, StyledButtonBig, StyledButtonSmall } from './styles';

const PhoneFrame = ({ children }) => {
	return (
		<StyledWrapper>
			<StyledButtonBig />
			<StyledButtonSmall />
			{children}
		</StyledWrapper>
	);
};

export default PhoneFrame;
