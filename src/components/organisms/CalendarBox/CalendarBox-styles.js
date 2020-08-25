import styled from 'styled-components';
import Calendar from 'react-calendar';

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 0 25px;
`;

export const StyledCalendar = styled(Calendar)`
	margin: auto;
	max-width: 400px;

	button {
		color: ${({ theme }) => theme.textPrimary};
	}

	.react-calendar__navigation {
		margin-bottom: 40px;
	}

	.react-calendar__navigation__label,
	.react-calendar__navigation__arrow,
	.react-calendar__tile {
		border: none;
		background: none;
	}

	.react-calendar__navigation__label {
		font-size: 3rem;
		font-weight: ${({ theme }) => theme.font.weight.semiBold};
		text-transform: capitalize;
	}

	.react-calendar__navigation__arrow {
		padding: 8px 16px;
	}

	.react-calendar__navigation__next-button {
		margin-right: -15px;
	}

	.react-calendar__navigation__prev-button {
		margin-left: -15px;
	}

	.react-calendar__month-view__weekdays {
		margin-bottom: 10px;
	}

	.react-calendar__month-view__weekdays__weekday {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2em;
		font-weight: ${({ theme }) => theme.font.weight.semiBold};

		abbr {
			text-decoration: none;
		}
	}

	.react-calendar__month-view__days__day {
		abbr {
			width: 35px;
			height: 35px;
			flex: 0 0 35px;
		}
	}

	.react-calendar__year-view__months__month abbr {
		padding: 4px;
	}

	.react-calendar__tile {
		padding: 0;
		font-size: 1.2rem;

		&--now {
			border-radius: 10px;

			abbr {
				background-color: ${({ theme }) => theme.accent};
				color: ${({ theme }) => theme.base};
			}

			&.happy abbr {
				background-color: #abd562;
			}

			&.inlove abbr {
				background-color: #ff84b7;
			}

			&.relaxed abbr {
				background-color: #75e2d7;
			}

			&.pleased abbr {
				background-color: #f9d629;
			}

			&.neutral abbr {
				background-color: #52d3fc;
			}

			&.sad abbr {
				background-color: #afafaf;
			}

			&.confused abbr {
				background-color: #8c5bff;
			}

			&.angry abbr {
				background-color: #f36d6d;
			}
		}

		abbr {
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 5px auto;
		}

		&.picked {
			abbr {
				position: relative;
				overflow: hidden;

				&::before {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 4px;
					border-radius: 5px;
				}
			}
		}

		&.happy abbr::before {
			background-color: #abd562;
		}

		&.inlove abbr::before {
			background-color: #ff84b7;
		}

		&.relaxed abbr::before {
			background-color: #75e2d7;
		}

		&.pleased abbr::before {
			background-color: #f9d629;
		}

		&.neutral abbr::before {
			background-color: #52d3fc;
		}

		&.sad abbr::before {
			background-color: #afafaf;
		}

		&.confused abbr::before {
			background-color: #8c5bff;
		}

		&.angry abbr::before {
			background-color: #f36d6d;
		}
	}

	.react-calendar__month-view__days__day--neighboringMonth {
		opacity: 0.5;
	}
`;
