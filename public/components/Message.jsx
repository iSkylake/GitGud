var React = require('react');

var Message = React.createClass({
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