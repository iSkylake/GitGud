import React from 'react';
import CreateReactClass from 'create-react-class';
import Message from 'Message';
import NameForm from 'NameForm';

const Main = CreateReactClass({
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
		let message = this.state.message;
		let imgURL = this.state.imgURL;
		return(
			<div>
				<Message message={message} imgURL={imgURL}/>
				<NameForm onHandleMessage={this.handleMessage}/>
			</div>
		);
	}
});

module.exports = Main;