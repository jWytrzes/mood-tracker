import React, { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { StyledWrapper, StyledImg, StyledName } from './MoodLabel-styles';

const MoodLabel = ({ icon, name, color }) => {
	const [link, setLink] = useState('');

	useEffect(() => {
		storage
			.child(icon)
			.getDownloadURL()
			.then((url) => {
				setLink(url);
			})
			.catch((err) => console.log(err));
	}, [icon]);

	return (
		<StyledWrapper color={color}>
			<StyledImg src={link} alt="" />
			<StyledName>{name}</StyledName>
		</StyledWrapper>
	);
};

export default MoodLabel;
