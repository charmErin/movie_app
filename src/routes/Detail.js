import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
	const location = useLocation();
	const navigate = useNavigate();
	
	useEffect(() => {
		if(location.state == null) {
			navigate('/');
		}
	});
	if(location.state) {
		console.log(typeof(location.state));
		console.log(location.state);
		return <span>{location.state.title}</span>
	} else {
		console.log('state is null, go to main page');
		return null;
	}
}

export default Detail;