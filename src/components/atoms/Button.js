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
	width: ${({ tertiary, small }) =>
		tertiary ? '100%' : small ? 'fit-content' : 'calc(100% - 50px)'};
	padding: ${({ small }) => (small ? '10px 20px' : '16px')};
	margin: 5px auto;
	text-decoration: none;
	white-space: nowrap;
`;

export default Button;
