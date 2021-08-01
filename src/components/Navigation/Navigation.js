import React from 'react';
import './Navigation.css';

const Navigation =({onRouteChange,open})=>{
		return(		
	<nav className='fixed-top'>
     <div id="logo" className='nav-profile' onClick={()=>onRouteChange('contact')}>Riyan</div>
        <label for="drop" className="toggle">&#9776;</label>
        <input type="checkbox" id="drop" />
            <ul className="menu ">
                <li onClick={()=>onRouteChange('home')} className='nav-links'><a href="">Home</a></li>
                <li onClick={()=>onRouteChange('projects')} className='nav-links'><a href="">Projects</a></li>
				<li onClick={()=>onRouteChange('experience')}className='nav-links'><a href="">Experience</a></li>
				<li onClick={()=>onRouteChange('contact')} className='nav-links'><a href="">Resume</a></li>
            </ul>
        </nav>
	);
   }
export default Navigation;
/*
	<div className='navi fixed-top'>
	<div onClick={()=>onRouteChange('contact')} className='nav-profile'>Riyan</div>
		<div className='nav-elements' id='panel'>
	  		<div onClick={()=>onRouteChange('home')} className='nav-links'>Home</div>
				 <div onClick={()=>onRouteChange('projects')} className='nav-links'>Projects</div>
				 <div onClick={()=>onRouteChange('experience')}className='nav-links'>Experience</div>
				 <div onClick={()=>onRouteChange('contact')} className='nav-links'>Resume</div>
		</div>
		<div className='nav-hidden' onClick=''>&#9776;</div>	
	</div>
*/