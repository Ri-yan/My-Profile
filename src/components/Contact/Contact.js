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
	
	
	onNameChange= (event) => {
		this.setState({Name:event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({Email:event.target.value})
	}
	onMessageChange=(event)=>{
		this.setState({Message:event.target.value})
	}
	onSubmitMessage=(e)=>{
		e.preventDefault();
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
					document.getElementById("email-address").value = '';
					document.getElementById("name").value = '';
					document.getElementById("message").value = '';
					// alert('message sent successfully');
					setTimeout(function(){
						window.location.reload();
					 }, 3000);
				}
				else{
					console.log('error');
				}
			}) 
	}
	//  click=()=>{
	// 	document.getElementById("click").innerHTML = "Success";
	// }
	render(){
		
	return(
	<div className='contact'>
	<div className='btext'> Contact</div>
		<section>
		  <div className="container">
		    <div className="left">
			    <div className='des'>
			    	<div className='infoc'>Everything Here Folks!</div>
			    	<div className='info'>📞1234567890</div>
			    	<div className='info email'>📭mohdriyan08011995@gmail.com</div>
			    	<div className='info'>🏠Utter Padesh,India</div>
				</div>
		    </div>
		   <div className="right">
		      <div className="content">
		        <h1>Say Somthing..</h1>
		        <form  onSubmit={(e)=>{e.preventDefault()}} className='form' id='myForm' >				
			        <input 
			        className="input"  
			        type="text" required 
					name="name"   
			        id="name"  
			        placeholder="Your name....." 
			        onChange={this.onNameChange}
			        />
					
					<input 
					className="input"  
					type="email" required 
					name="email-address"   
					id="email-address" 
					placeholder="email"
          			title="Please enter a valid email"
					onChange={this.onEmailChange}
					/>
					<textarea
						type="text" required 
						name="message" 
						id="message" 
						placeholder="message"
						onChange={this.onMessageChange}
						>	
					</textarea>
					{/* <input 
					className="message" 
					type="text" required 
					name="message"  
					id="message" 
					placeholder="message"
					onChange={this.onMessageChange}
					/> */}
					{/*<a href=" " className="btn">Send</a>*/}
						<div className="btn wrapper">
						  <button type='submit' onClick={this.onSubmitMessage} id='click'>
						    Send 
						    <span></span>
						    <span></span>
						    <span></span>
						    <span></span>
						  </button>
						</div>
				</form>
		      </div>
		    </div>
		  </div>
		</section>
</div>
		);
	}
}
export default Contact;
