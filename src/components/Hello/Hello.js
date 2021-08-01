import React from 'react';
import './Hello.css';
import profile from './profile.png';
import { SocialIcon } from 'react-social-icons';
const Hello=()=>{

		return(
		<div className='hello clearfix' id='1'>
			<div className='hi'>Hi<span className='hand' role="img" aria-labelledby="wavinghand">👋</span> I'm Riyan</div>
			<img className='userimg' src={profile} alt='profile'/>
			<div className='hi'>I am into '#########'</div>
			<div className='social'>
				<div className='rotate'><SocialIcon  network="twitter" style={{ height: 50, width: 50 }} /></div>
				<div className='rotate'><SocialIcon network="facebook" style={{ height: 50, width: 50 }} /></div>
				<div className='rotate'><SocialIcon network="instagram" style={{ height: 50, width: 50 }} /></div>
				<div className='rotate'><SocialIcon network="github" style={{ height: 50, width: 50 }} /></div>
				<div className='rotate'><SocialIcon network="linkedin" style={{ height: 50, width: 50 }} /></div>
			</div>
		</div>
		
	);
		
	
}
export default Hello;