import React from 'react';
import './Social.css';
import { SocialIcon } from 'react-social-icons';

const Social=()=>{
	return(
			<div className="social">
  				<div className="link " target="_parent">
  				<SocialIcon  url='https://www.twitter.com/mohdriyan08/'  network="twitter" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</div>
  				{/* <div className="link " target="_parent">
  				<SocialIcon network="facebook" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</div> */}
  				<div className="link " target="_parent">
  				<SocialIcon url='https://www.instagram.com/mohdriyan01/' network="instagram" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</div>
  				<div className="link " target="_parent">
  				<SocialIcon url='https://www.linkedin.com/in/mohd-riyan-0330b4225/' network="linkedin" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</div>
  				<div className="link " target="_parent">
  				<SocialIcon url='https://github.com/Ri-yan' network="github" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</div>
		</div>
		
	);
}
export default Social;