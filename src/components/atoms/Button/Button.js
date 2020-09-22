import React from 'react';
import { StyledWrapper, StyledText } from './Button-styles';

const Button = ({ children, ...props }) => {
	return (
		<StyledWrapper {...props}>
			<StyledText> {children}</StyledText>
		</StyledWrapper>
	);
};

export default Button;
