import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 2.8rem;
	font-weight: ${({ theme }) => theme.font.weight.regular};
	margin: 0;

	b {
		font-weight: ${({ theme }) => theme.font.weight.semiBold};
	}

	@media (min-width: 768px) {
		font-size: 3.6rem;
	}
`;

export default H1;
