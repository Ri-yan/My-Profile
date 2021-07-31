import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile';
import Pro from './constant';
const Projects=()=>{
	return(
		<div className='projects' id='b'>
			<div className='Pcover' >
				<img className='coverimg' src="https://c.pxhere.com/images/95/69/e3a656b9fe407492d69728d865e9-1639627.jpg!d"  alt="programmer"/>
				<div className='title'>
					<div className='title-name'>
						My Projects;<div className='nav-links' style={{'font-size':'1.5vw'}}>Here</div>
					</div>
				</div>			
			</div>
			<div style={{'background-color': 'rgba(241,241,241,1)'}}>
				<div className='list'>
					{
		            Pro.map((project_name, i) => {
		              return (
		                <ProjectTile
		                  key={i}
		                  id={Pro[i].id}
		                  project_name={Pro[i].project_name}
		                  code_link={Pro[i].code_link}
		                  live_link={Pro[i].live_link}
		                  />
		              );
		            })
		          }	
			    </div>		
			</div>
		</div>
	);
}
export default Projects;

