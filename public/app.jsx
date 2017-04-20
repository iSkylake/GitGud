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

	render: function(){
		var message = this.props.message;
		return(
			<div>
				<Message message={message}/>
				<NameForm/>
			</div>
		);
	}
});

ReactDOM.render(
	<Main/>,
	document.getElementById('app')
);
