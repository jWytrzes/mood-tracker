import styled from 'styled-components';

const Input = styled.input`
	background-color: ${({ theme }) => theme.lightGrey};
	border: none;
	width: 100%;
	display: flex;
	border-radius: 14px;
	padding: 15px 20px;
	font-size: 1.6rem;

	&::placeholder {
		color: ${({ theme }) => theme.textSecondary};
	}
`;

export default Input;
