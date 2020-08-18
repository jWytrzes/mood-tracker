import styled from 'styled-components';

export const StyledWrapper = styled.header`
	padding: 25px;
	background-color: ${({ theme }) => theme.accentLight};
	border-radius: 0 0 25px 25px;
	display: flex;
	align-items: center;
`;

export const StyledCalendarCard = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 72px;
	flex-shrink: 0;
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.base};
	border-radius: 13px;
	margin-right: 20px;
	font-size: 1.3rem;
	padding: 10px;
	text-align: center;
	text-transform: uppercase;
`;

export const StyledDay = styled.span`
	font-weight: ${({ theme }) => theme.font.weight.bold};
	font-size: 3rem;
`;

export const StyledTitle = styled.div`
	font-size: 1.4rem;
	font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const StyledParagraph = styled.p`
	margin-bottom: 0;
	font-size: 1.2rem;
`;
