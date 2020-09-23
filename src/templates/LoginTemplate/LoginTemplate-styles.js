import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0;

	@media (min-width: 768px) {
		max-width: 500px;
		width: 500px;
		margin: auto;
	}
`;
