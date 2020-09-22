import styled from 'styled-components';

export const StyledWrapper = styled.button`
	position: relative;
	border: none;
	background-color: ${({ theme, secondary, tertiary }) =>
		secondary ? theme.accentLight : tertiary ? theme.base : theme.accent};
	color: ${({ theme, secondary, tertiary }) =>
		secondary ? theme.accent : tertiary ? theme.textPrimary : theme.base};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 13px;
	width: ${({ tertiary, small }) =>
		tertiary ? '100%' : small ? 'fit-content' : 'calc(100% - 50px)'};
	padding: ${({ small }) => (small ? '10px 20px' : '16px')};
	margin: 5px auto;
	text-decoration: none;
	white-space: nowrap;
	font-weight: ${({ theme, secondary }) =>
		secondary ? theme.font.weight.semiBold : theme.font.weight.normal};
	cursor: pointer;
	overflow: hidden;

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		background-color: rgba(0, 0, 0, 0.1);
		z-index: 0;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	&:hover {
		&::before {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		margin: 10px auto;
	}
`;

export const StyledText = styled.span`
	position: relative;
	z-index: 10;
`;
