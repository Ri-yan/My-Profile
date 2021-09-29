import React from 'react';
import './Navigation2.css';



const Navigation2=({onRouteChange,open,getData})=>{
function mobileMenu() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
}
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
}
		return(		
    <header className="header">
        <nav className="navbar fixed-top">
            <p className="nav-profile" onClick={()=>{onRouteChange('admin')}}>Riyan</p>
            <ul className="nav-menu">
                <li className="nav-item" onClick={()=>onRouteChange('home')}>
                    <p className="nav-link">Home</p>
                </li>
                <li className="nav-item" >
                    <p className="nav-link" onClick={()=>onRouteChange('projects')}>Project</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" onClick={()=>onRouteChange('experience')}>Experience</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" onClick={()=>onRouteChange('home')}>Resume</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" onClick={()=>onRouteChange('contact')}>Contact</p>
                </li>
            </ul>
            <div className="hamburger" onClick={()=>mobileMenu()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
</header>
	);
   
}
export default Navigation2;