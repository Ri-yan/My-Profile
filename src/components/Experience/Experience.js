import React from 'react';
import './Experience.css';
import Typewriter from 'typewriter-effect';

const Experience=()=>{
	return(
		<div className='experience' >
			<div className='etitle'>
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
			</div >

		</div>		
	);
}
export default Experience;
