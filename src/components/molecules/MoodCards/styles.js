import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0px, 1fr));
	grid-gap: 10px;
	background-color: ${({ theme }) => theme.accent};
	margin: 30px 0;
`;
