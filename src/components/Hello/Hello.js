import React from 'react';
import './Hello.css';
import profile from './profile.jpg';
import { SocialIcon } from 'react-social-icons';
const Hello=()=>{

		return(
		<div className='hello clearfix' id='1'>
			<div className='hi'>Hi<div className='hand'>👋</div> I'm Riyan</div>
			<img className='userimg' src={profile} alt='profile'/>
			<div className='hi'>I am into '#########'</div>
			<div className='social'>
				<span className='grow'><SocialIcon  network="twitter" style={{ height: 50, width: 50 }} /></span>
				<span><SocialIcon network="facebook" style={{ height: 50, width: 50 }} /></span>
				<span><SocialIcon network="instagram" style={{ height: 50, width: 50 }} /></span>
				<span><SocialIcon network="github" style={{ height: 50, width: 50 }} /></span>
				<span><SocialIcon network="linkedin" style={{ height: 50, width: 50 }} /></span>
			</div>
		</div>
		
	);
		
	
}
export default Hello;