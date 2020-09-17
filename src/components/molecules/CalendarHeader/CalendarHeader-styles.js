import styled from 'styled-components';

export const StyledWrapper = styled.header`
	position: relative;
	padding: 25px;
	background-color: ${({ theme }) => theme.accentLight};
	border-radius: 0 0 25px 25px;
	display: flex;
	align-items: center;
	overflow-x: hidden;

	@media (min-width: 768px) {
		max-width: 500px;
		width: 100%;
		margin: 25px auto;
		border-radius: 25px;
	}
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
	max-height: 51px;
	overflow-y: auto;

	@media (min-width: 768px) {
		max-height: unset;
	}
`;

export const StyledMood = styled.div`
	font-size: 1rem;
	text-transform: uppercase;
	color: ${({ theme }) => theme.base};
	background-color: ${({ theme }) => theme.accent};
	font-weight: ${({ theme }) => theme.font.weight.semiBold};
	width: 120px;
	padding: 2px 10px;
	text-align: center;
	margin-bottom: 10px;
	position: absolute;
	top: 17px;
	right: -34px;
	transform: rotate(45deg);
`;
