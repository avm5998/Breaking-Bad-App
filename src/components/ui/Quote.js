import React, { useEffect } from 'react';

const Quote = ({ data }) => {
	useEffect(() => {
		console.log(data);
	},[]);
	return (
		<div>
			<h1>{data.quote}</h1>
			<strong>{data.author}</strong>
		</div>
	);
};

export default Quote;
