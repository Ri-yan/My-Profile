import React from 'react';
import './Hello.css';
import profile from './profile.png';
import Typewriter from 'typewriter-effect';
import Social from '../Social/Social.js';

<Typewriter
	onInit={(typewriter)=>{
		typewriter
			.typeString("Experience")
			.pauseFor(2000)
			.deleteAll()
			.typeString("Well I am an Instant Learner.")
			.start();
				}}
/>

const Hello=()=>{

		return(
		<div className='hello clearfix' id='1'>
			<div className='hi'>Hi<span className='hand' role="img" aria-labelledby="wavinghand">👋</span> I'm 
<span style={{ opacity:'0%' }}>_</span>
<Typewriter
								onInit={(typewriter)=>{
									typewriter
										.typeString("Riyan")
										.start();
									}}/>
			</div>
			<img className='userimg' src={profile} alt='profile'/>
			<div className='hi'>I am into <span style={{ opacity:'0%' }}>_</span><Typewriter
								options={{
    								autoStart: true,
    								loop: true,
  								}}
								onInit={(typewriter)=>{
									typewriter
										.typeString("Web Developement")
										.pauseFor(2000)
										.deleteAll()
										.typeString("Data Science")
										.pauseFor(2000)
										.deleteAll()
										.typeString("Code Hunting")
										.pauseFor(2000)
										.deleteAll()
										.start();
									}}
					/>
			</div>

			<Social/>
		</div>
		
	);
		
	
}
export default Hello;

