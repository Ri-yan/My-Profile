import React from 'react';
import './Social.css';
import { SocialIcon } from 'react-social-icons';

const Social=()=>{
	return(
		
			<div class="social">
  				<a href=" " className="link " target="_parent">
  				<SocialIcon  network="twitter" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</a>
  				<a href=" " className="link " target="_parent">
  				<SocialIcon network="facebook" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</a>
  				<a href=" " className="link " target="_parent">
  				<SocialIcon network="instagram" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</a>
  				<a href=" " className="link " target="_parent">
  				<SocialIcon network="linkedin" style={{ height: 50, width: 50,position:'relative',top:2 }} />
  				</a>
  				
	
		</div>
		
	);
}
export default Social;