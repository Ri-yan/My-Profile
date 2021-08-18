import React from 'react';
import './Contact.css';



const Contact=()=>{
	return(
	<div className='contact'>
{/*<div className='btext'>Contact</div>*/}
		<section>
		  <div class="container">
		    <div class="left">
			    <div className='des'>
			    	<div className='infoc'>Contact</div>
			    	<div className='info'>📞1234567890</div>
			    	<div className='info'>📭Abc@gmail.com</div>
			    	<div className='info'>🏠Utter Padesh,India</div>
				</div>
		    </div>
		    <div class="right">
		      <div class="content">
		        <h1>Say Somthing..</h1>
		        <p>				
			        <input className="input"  type="text"  name="name"   id="name"  placeholder="Your name....." />
					<input className="input"  type="email"  name="email-address"   id="email-address" placeholder="email"/>
					<input className="message" type="text" name="message"  id="message" placeholder="message"/>
					<a href=" " className="btn">Send</a>
				</p>
		      </div>
		    </div>
		  </div>
		</section>
</div>
	);
}
export default Contact;
