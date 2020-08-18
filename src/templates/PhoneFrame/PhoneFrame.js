import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { StyledWrapper, StyledButtonBig, StyledButtonSmall } from './styles';
import { updateUserDataInStore } from '../../utils';

const PhoneFrame = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				updateUserDataInStore(user.uid);
			}
		});
	}, [dispatch]);

	return (
		<StyledWrapper>
			<StyledButtonBig />
			<StyledButtonSmall />
			{children}
		</StyledWrapper>
	);
};

export default PhoneFrame;
