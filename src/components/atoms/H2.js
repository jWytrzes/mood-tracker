import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 2.4rem;
	font-weight: ${({ theme }) => theme.font.weight.regular};
	margin: 0;

	b {
		font-weight: ${({ theme }) => theme.font.weight.semiBold};
	}
`;

export default H1;
