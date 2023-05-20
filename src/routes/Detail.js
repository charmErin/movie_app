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
		const { title, year, poster, summary, genres, rating } = location.state;
		return (
			<div style={{ margin: '0 auto' }}>
				<img src={poster} alt={title} title={title}/>
				<div>
					<h3>{title}</h3>
					<h5>개봉연도: {year}</h5>
					<h5>평점: {rating}</h5>
					<p>장르</p>
					<ul>
						{genres.map((genre, index) => {
							return <li key={index} >{genre}</li>
						})}
					</ul>
					<p>{summary}</p>
				</div>
		</div>
		); 
	} else {
		console.log('state is null, go to main page');
		return null;
	}
}

export default Detail;