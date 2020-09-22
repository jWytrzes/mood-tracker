import styled from 'styled-components';

const H2 = styled.h2`
	font-size: 2.4rem;
	font-weight: ${({ theme }) => theme.font.weight.regular};
	margin: 0;

	b {
		font-weight: ${({ theme }) => theme.font.weight.semiBold};
	}

	@media (min-width: 768px) {
		font-size: 2.8rem;
	}
`;

export default H2;
