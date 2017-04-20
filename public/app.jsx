var Message = React.createClass({
	render: function(){
		var message = this.props.message;
		return(
			<div>
				<h1>{message}</h1>
				<img></img>
			</div>
		);
	}
});

var NameForm = React.createClass({
	onClickSubmit: function(e){
		e.preventDefault();
		var name = this.refs.name.value;
		if(name.length > 0){
			this.refs.name.value = '';
			this.props.onHandleMessage(name);
		}
	},

	render: function(){
		return(
			<form onSubmit={this.onClickSubmit}>
				<input type="text" ref="name"/>
				<button>Submit</button>
			</form>
		);
	}
});

var Main = React.createClass({
	getDefaultProps: function(){
		return{
			message: 'Hey traveler!'
		};
	},

	getInitialState: function(){
		return{
			message: this.props.message
		};
	},

	handleMessage: function(name){
		this.setState({
			message: name + ' GITGUD!'
		});
	},

	render: function(){
		var message = this.state.message;
		return(
			<div>
				<Message message={message}/>
				<NameForm onHandleMessage={this.handleMessage}/>
			</div>
		);
	}
});

ReactDOM.render(
	<Main/>,
	document.getElementById('app')
);
