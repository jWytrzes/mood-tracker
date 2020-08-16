import styled from 'styled-components';

const Button = styled.button`
	border: none;
	background-color: ${({ theme, secondary }) =>
		secondary ? theme.accentLight : theme.accent};
	color: ${({ theme, secondary }) => (secondary ? theme.accent : theme.base)};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 13px;
	width: calc(100% - 50px);
	padding: 16px;
	margin: auto;
`;

export default Button;
