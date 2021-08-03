import React from 'react';
import './ProjectCover.css';
const ProjectCover=()=>{
	return(
			<div className='Pcover' >
				<img className='coverimg' src="https://c.pxhere.com/images/95/69/e3a656b9fe407492d69728d865e9-1639627.jpg!d"  alt="programmer"/>
				<div className='title'>
					<div className='title-name'>
						My Projects;<div className='nav-links' style={{'font-size':'1.5vw'}} onClick='#l'><a href='#l' className='ch' style={{'text-decoration':'none',color:'black'}}>Here</a></div>
					</div>
				</div>			
			</div>
	);
}
export default ProjectCover;

