var React = require('react'),
		CreateReactClass = require('create-react-class');

var Message = CreateReactClass({
	render: function(){
		var message = this.props.message;
		var dvaURL = this.props.imgURL;
		return(
			<div>
				<h1>{message}</h1>
				<img src={dvaURL}></img>
			</div>
		);
	}
});

module.exports = Message;