import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 25px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		max-width: 1000px;
		margin: auto;
		width: 100%;
	}
`;
