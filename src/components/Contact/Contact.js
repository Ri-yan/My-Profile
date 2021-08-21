import React from 'react';
import './Contact.css';


class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			name:'',
			message:'',
		}
	}
	click=()=>{
		document.getElementById("click").innerHTML = "Success";
	}
	onNameChange= (event) => {
		this.setState({Name:event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({Email:event.target.value})
	}
	onMessageChange=(event)=>{
		this.setState({Message:event.target.value})
	}
	onSubmitMessage=()=>{
		fetch('https://mighty-savannah-87191.herokuapp.com/message',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				name:this.state.Name,
				email:this.state.Email,
				message:this.state.Message
			})
		})
			.then(response=>response.json())
			.then(user=>{
				if(user.id){
					this.props.loadUser(user);
			
		document.getElementById("click").innerHTML = "Success";
	
					console.log('success')
				}
			}) 
	}

	render(){

	return(
	<div className='contact'>
	<div className='btext'> Contact</div>
		<section>
		  <div class="container">
		    <div class="left">
			    <div className='des'>
			    	<div className='infoc'>Everything Here Folks!</div>
			    	<div className='info'>📞1234567890</div>
			    	<div className='info'>📭Abc@gmail.com</div>
			    	<div className='info'>🏠Utter Padesh,India</div>
				</div>
		    </div>
		   <div className="right">
		      <div className="content">
		        <h1>Say Somthing..</h1>
		        <p>				
			        <input 
			        className="input"  
			        type="text"  name="name"   
			        id="name"  
			        placeholder="Your name....." 
			        onChange={this.onNameChange}
			        />
					<input 
					className="input"  
					type="email"  
					name="email-address"   
					id="email-address" 
					placeholder="email"
					onChange={this.onEmailChange}
					/>
					<input 
					className="message" 
					type="text" 
					name="message"  
					id="message" 
					placeholder="message"
					onChange={this.onMessageChange}
					/>
					{/*<a href=" " className="btn">Send</a>*/}
					<div >
						<div className=" btn wrapper">
						  <button onClick={this.onSubmitMessage} id='click'>
						    Send 
						    <span></span>
						    <span></span>
						    <span></span>
						    <span></span>
						  </button>
						</div>
					</div>
				</p>
		      </div>
		    </div>
		  </div>
		</section>
</div>
		);
	}
}
export default Contact;
