import styled from 'styled-components';
import { Form } from 'formik';

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const StyledCard = styled.div`
	background-color: ${({ theme }) => theme.base};
	color: ${({ theme }) => theme.textPrimary};
	padding: 20px 25px;
	margin: auto -25px -25px;
	border-radius: 25px 25px 0 0;

	@media (min-width: 768px) {
		margin: 0px auto;
		width: 100%;
		border-radius: 25px;
	}
`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
`;

export const StyledTextarea = styled.textarea`
	width: 100%;
	margin: 10px 0;
	border: none;
	background-color: ${({ theme }) => theme.lightGrey};
	padding: 10px;
	border-radius: 10px;
	font-size: 1.4rem;
`;

export const StyledButtons = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;

		button:first-child {
			margin-left: 15px;
		}

		button:last-child {
			margin-right: 15px;
		}
	}
`;
