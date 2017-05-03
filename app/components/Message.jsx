import React from 'react';
import CreateReactClass from 'create-react-class';

const Message = ({message, imgURL}) => {
	return(
		<div>
			<h1>{message}</h1>
			<img src={imgURL}></img>
		</div>
	);	
}

module.exports = Message;