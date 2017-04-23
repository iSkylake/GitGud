var React = require('react'),
		CreateReactClass = require('create-react-class'),
		Message = require('Message'),
		NameForm = require('NameForm');

var Main = CreateReactClass({
	getDefaultProps: function(){
		return{
			message: 'Hey traveler!',
			imgURL: ''
		};
	},

	getInitialState: function(){
		return{
			message: this.props.message,
			imgURL: this.props.imgURL
		};
	},

	handleMessage: function(name, imgURL){
		this.setState({
			message: name + ' GITGUD!',
			imgURL: imgURL
		});
	},

	render: function(){
		var message = this.state.message;
		var imgURL = this.state.imgURL;
		return(
			<div>
				<Message message={message} imgURL={imgURL}/>
				<NameForm onHandleMessage={this.handleMessage}/>
			</div>
		);
	}
});

module.exports = Main;