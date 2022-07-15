import React from 'react';
import './Admin.css';
// import 'tachyons';
class AdminLogin extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signInEmail:'',
			signInPassword:''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail:event.target.value})
	}
	onPasswordChange=(event)=>{
		this.setState({signInPassword:event.target.value})
	}
	onSubmitSignin=(e)=>{
				e.preventDefault();
				try {
					if(this.state.signInEmail==='admin@admin.com'&&this.state.signInPassword==='admin'){
						this.props.onRouteChange('message');
					   }
					   else alert("something went wrong");

				} catch (error) {
					alert(error)
				}
			}
render(){
	//const {onRouteChange}=this.props;
	return(
		<form onSubmit={this.onSubmitSignin} className='admin'>
			<div className='abox'>
			<div className='f4 a4'>Admin Login</div>
			<label className="db fw6 lh-copy f4 " htmlFor="email-address">Email</label>
 		        <input
 		         className="f4 pa2 input-reset ba bg-transparent-white hover-bg-black hover-white w-70 in" 
		         type="email" 
 		         name="email-address"  
 		         id="email-address"
 		         title="Admin Email" 
 		         onChange={this.onEmailChange}
 		         />
 		        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
 		        <input 
 		        className="f4 b pa2 input-reset ba bg-transparent-white hover-bg-black hover-white w-70 in"  		        type="password" 
 		        name="password"  
 		        id="password"
 		        title="Password" 
 		        onChange={this.onPasswordChange}/>
 		      <input className="f4 b ph3 pv2 input-reset ba b--black bg-transparent-red grow pointer f4 dib w-70 pa2" 
 		      type="submit" 
 		      title="Click To Submit" 
		      value="Sign in"/>
</div>
		</form>
		);
}
}
export default AdminLogin;