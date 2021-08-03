import React from 'react';
import './Contact.css';

const Contact=()=>{
	return(
		<div>
		<div className='contact'>
			<div className='h'>Contact</div>
			<div className='box'>
				<div className='discription'>
					<div className='df'>Get in touch
						<div className=' '><p>quate section for some quotes</p></div>
						<div className=' '><p>abc@email.com</p>
						<p>Utter Pradesh,India</p></div>
					</div>	
			</div>
			<div className='Fsec'>
				<div className='form'>
					<div className=' '>Say Something</div>
					
					<input
				         className=" i" 
				         type="text" 
				         name="name"  
				         id="name" 
				         placeholder="Your name....."
				         />
		        <input
				     className="i" 
				     type="email" 
				     name="email-address"  
				     id="email-address" 
				      placeholder="email"
		        />
		        <input
				         className="im" 
				         type="text" 
				         name="message"  
				         id="message" 
				          placeholder="message"
		        />
				<div className='b i'>send</div>	</div>
				
				</div>
				<div className='c'>
					<div>Riyan</div>
					<div>fdsdfdsgfdgh</div>
					<div>
						a ab a
					</div>
				</div>
			</div>
		</div>
		<div className='footer'>Created By Mohd Riyan</div>
		</div>
		
	);
}
export default Contact;
