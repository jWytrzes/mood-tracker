import React from 'react';
import { StyledWrapper } from './Loader-styles';

const Loader = () => {
	return (
		<StyledWrapper>
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</StyledWrapper>
	);
};

export default Loader;
