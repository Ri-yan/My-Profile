import React from 'react';
import './ProjectCover.css';
import projectCover from './projectCover.png'
const ProjectCover=()=>{
	return(
			<div className='Pcover' >
				<img className='coverimg' src={projectCover}  alt="programmer"/>
				<div className='title'>
					<div className='title-name'>
						My Projects;<div className='nav-links ch'  onClick={()=>{window.scroll({
  top: 700,
  left: 0,
  behavior: 'smooth'
});}}><a href='#' className='' style={{'textDecoration':'none',color:'black'}}>Click Here</a></div>
					</div>
				</div>			
			</div>
	);
}
export default ProjectCover;

