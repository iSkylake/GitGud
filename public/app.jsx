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

var NameForm = React.createClass({
	onClickSubmit: function(e){
		e.preventDefault();
		var name = this.refs.name.value;
		var dva = ['https://media.tenor.co/images/24812a0372945ba14a476a892453937d/tenor.gif', 'https://media.tenor.co/images/4e7ac035e879b3ca07da4392952fd351/tenor.gif', 'https://68.media.tumblr.com/5665e3485b01a0dd5beed011b1a5533d/tumblr_ocvwbzK2VG1r85zuto1_500.gif', 'http://vignette4.wikia.nocookie.net/rise-of-the-guardians-fanfiction/images/7/7e/Dva_WATCH_OUT.gif/revision/latest?cb=20160621030804', 'https://media.tenor.co/images/5e79d94073d51a9166067e851ba92b54/tenor.gif', 'https://s-media-cache-ak0.pinimg.com/originals/a7/84/43/a784436287112693dd934060a6121b81.gif', 'https://68.media.tumblr.com/a687c2f9b850ba7359ef2984344ee5d1/tumblr_o98gnhEnSd1spa1n7o1_500.gif'];
		if(name.length > 0){
			this.refs.name.value = '';
			var i = Math.floor(Math.random()*dva.length);
			this.props.onHandleMessage(name, dva[i]);
		}
	},

	render: function(){
		return(
			<form onSubmit={this.onClickSubmit}>
				<input type="text" ref="name" placeholder="Enter name"/>
				<button>Submit</button>
			</form>
		);
	}
});

var Main = React.createClass({
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

ReactDOM.render(
	<Main/>,
	document.getElementById('app')
);
