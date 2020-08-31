import styled from 'styled-components';

export const StyledWrapper = styled.div`
	margin: 20px auto;
`;

export const InnerWrapper = styled.div`
	margin: 10px auto;
	max-width: 90%;
`;

export const StyledUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 40px 0 0 0;
	display: grid;
	grid-template-columns: repeat(4, minmax(0px, 1fr));
	grid-gap: 10px;
`;
