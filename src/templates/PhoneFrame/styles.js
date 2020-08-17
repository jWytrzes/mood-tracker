import styled from 'styled-components';

export const StyledWrapper = styled.div`
	@media (min-width: 768px) {
		width: 395px;
		height: 707px;
		background-color: ${({ theme }) => theme.base};
		margin: auto;
		border-radius: 44px;
		border: 10px solid #333;
		padding: 30px 10px 10px;
		position: relative;

		&::before {
			content: '';
			border: 10px solid #111;
			position: absolute;
			top: 0px;
			left: 0px;
			width: 375px;
			height: 687px;
			border-radius: 33px;
		}

		&::after {
			content: '';
			position: absolute;
			top: 10px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #111;
			border-radius: 0 0 15px 15px;
			width: 40%;
			height: 20px;
		}
	}
`;

const button = `
  position: absolute;
  right: -15px;
  width: 5px;
  border-radius: 0 10px 10px 0;
  background-color: #222;
`;

export const StyledButtonBig = styled.div`
	@media (min-width: 768px) {
		${button}
		height: 100px;
		top: 100px;
	}
`;

export const StyledButtonSmall = styled.div`
	@media (min-width: 768px) {
		${button}
		height: 30px;
		top: 220px;
	}
`;
