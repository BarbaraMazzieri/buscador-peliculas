import React from 'react';

export function CardMovie({year, poster, name}) {
	return (
		<div>
			<img src={poster} alt="" />
			<h3>{name}</h3>
			<h5>{year}</h5>
		</div>
	);
}
