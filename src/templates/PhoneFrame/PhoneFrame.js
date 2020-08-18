import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../utils/redux';
import { auth, db } from '../../firebase';
import { endpoints } from '../../utils/constants';
import { StyledWrapper, StyledButtonBig, StyledButtonSmall } from './styles';

const PhoneFrame = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				db.ref(`${endpoints.users}${user.uid}`)
					.once('value')
					.then((snapshot) => {
						dispatch(setUserData(snapshot.val()));
					});
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
