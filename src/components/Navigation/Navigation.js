import React from 'react';
import './Navigation.css';



// class Navigation extends React.Component {
// // 	constructor(){
// //       super();
// //     const panelOC=()=> {
// //   		document.getElementByClassName('nav-elements').style.display = "block";
// // 		}
// // }
//     render() {
    	const Navigation =({onRouteChange})=>{
		return(
		<div className='navi fixed-top'>
			<div onClick={()=>onRouteChange('contact')} className='nav-profile'>Riyan</div>
			<div className='nav-elements' id='panel'>
  				<div onClick={()=>onRouteChange('home')} className='nav-links'>Home</div>
			  	<div onClick={()=>onRouteChange('projects')} className='nav-links'>Projects</div>
			  	<div onClick={()=>onRouteChange('experience')}className='nav-links'>Experience</div>
			  	<div onClick={()=>onRouteChange('contact')} className='nav-links'>Resume</div>
			</div>
			<div className='nav-hidden'onclick='panelOC()'>☰</div>

		</div>
	);
   }
export default Navigation;


    