import React from 'react';
import './ProjectTile.css';
const ProjectTile = ({ project_name,code_link,live_link,img_id }) => {
  return (
<div className='list-items'> 
          <img className='Pimg' src={img_id} alt='Pimage'/>
          <div className='list-cover'>
            <div className='pname'>{project_name}</div>
              <div className='share'>
                <div className='m'><a href={code_link}>code</a></div>
                <div className='m'><a href={live_link}>live</a></div>
              </div>
          </div>
        </div>
  );
}

export default ProjectTile;
