const React = require('react');
const CreateReactClass = require('create-react-class');

const Message = CreateReactClass({
	render: function(){
		let message = this.props.message;
		let dvaURL = this.props.imgURL;
		return(
			<div>
				<h1>{message}</h1>
				<img src={dvaURL}></img>
			</div>
		);
	}
});

module.exports = Message;