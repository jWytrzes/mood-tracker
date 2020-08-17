import styled from 'styled-components';

export const StyledLabel = styled.label`
	background-color: ${({ checked, theme }) =>
		checked ? theme.accent : theme.base};
	color: ${({ checked, theme }) => (checked ? theme.base : theme.textPrimary)};
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	align-items: center;
	padding: 10px 12px;
	transition: background-color 0.2s ease-out, color 0.2s ease-out;
	will-change: background-color, color;
`;

export const StyledRadio = styled.input`
	position: absolute;
	z-index: -9999;
	width: 0;
	height: 0;
	opacity: 0;
`;

export const StyledImg = styled.img`
	display: flex;
	width: 50px;
	height: 50px;
`;

export const StyledName = styled.span`
	font-size: 1.3rem;
	margin-top: 10px;
`;
