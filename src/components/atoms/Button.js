import styled from 'styled-components';

const Button = styled.button`
	border: none;
	background-color: ${({ theme, secondary, tertiary }) =>
		secondary ? theme.accentLight : tertiary ? 'transparent' : theme.accent};
	color: ${({ theme, secondary, tertiary }) =>
		secondary ? theme.accent : tertiary ? theme.textPrimary : theme.base};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 13px;
	width: calc(100% - 50px);
	padding: 16px;
	margin: 5px auto;
	text-decoration: none;
`;

export default Button;
