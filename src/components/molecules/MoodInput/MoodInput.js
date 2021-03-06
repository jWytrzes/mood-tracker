import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'formik';
import { changeTheme } from '../../../utils/redux';
import { storage } from '../../../firebase';
import Loader from '../../atoms/Loader/Loader';
import {
	StyledLabel,
	StyledImg,
	StyledRadio,
	StyledName,
} from './MoodInput-styles';

const MoodInput = ({ icon, name, checked }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [link, setLink] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		let isMounted = false;

		storage
			.child(icon)
			.getDownloadURL()
			.then((url) => {
				if (!isMounted) {
					setLink(url);
				}
			})
			.catch((err) => console.log(err));

		return () => {
			isMounted = true;
		};
	}, [icon]);

	useEffect(() => {
		if (checked) {
			const themeName = name.replace(' ', '').toLowerCase();
			dispatch(changeTheme(themeName));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checked]);

	useEffect(() => {
		if (link.length) {
			setIsLoading(false);
		}
	}, [link]);

	return (
		<StyledLabel checked={checked}>
			{isLoading && <Loader />}
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
