import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile/ProjectTile.js';
import ProjectCover from './ProjectCover/ProjectCover.js';
import Pro from './constant';

const Projects=()=>{
	return(
		<div className='projects' id='b'>
			<ProjectCover/>
			<div style={{'background-color': 'rgba(241,241,241,1)'}} id='l'>
				<div className='list' >
					{
		            Pro.map((project_name, i) => {
		              return (
		                <ProjectTile
		                  key={i}
		                  id={Pro[i].id}
		                  project_name={Pro[i].project_name}
		                  img_id={Pro[i].img_id}
		                  code_link={Pro[i].code_link}
		                  live_link={Pro[i].live_link}
		                  />
		              );
		            }).reverse()
		          }	
			    </div>		
			</div>
		</div>
	);
}
export default Projects;

