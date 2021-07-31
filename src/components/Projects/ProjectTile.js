import React from 'react';
import './Projects.css';

const ProjectTile = ({ project_name,code_link,live_link,img_id }) => {
  return (
<div className='list-items' 
style={{'background-image': 'url("https://i.stack.imgur.com/jGlzr.png")'}}

>
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
