import styled from 'styled-components';

export const StyledWrapper = styled.label`
	background-color: ${({ color }) => color};
	color: ${({ theme }) => theme.base};
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	align-items: center;
	padding: 10px 12px;
	text-align: center;
	transition: background-color 0.2s ease-out, color 0.2s ease-out;
	will-change: background-color, color;
`;

export const StyledImg = styled.img`
	display: flex;
	width: 30px;
	height: 30px;
`;

export const StyledName = styled.span`
	font-size: 1.2rem;
	margin-top: 6px;
`;
