import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import { storage } from '../../../firebase';
import { StyledLabel, StyledImg, StyledRadio, StyledName } from './styles';

const MoodInput = ({ icon, name, checked }) => {
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
		<StyledLabel checked={checked}>
			<StyledImg src={link} alt="" />
			<StyledRadio
				as={Field}
				type="radio"
				name="pickedMood"
				value={name.toLowerCase()}
			/>
			<StyledName>{name}</StyledName>
		</StyledLabel>
	);
};

export default MoodInput;
