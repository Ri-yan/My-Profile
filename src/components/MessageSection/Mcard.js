import React from 'react';
const Mcard = ({ id,name,email,message,joined }) => {
  return (
    <div className="Mcontainer">
    <div className="Mbox">
      <div className='Mname'>Message no. {id}</div>
      <div className='Mname'>Name : {name}</div>
      <div className='Mname'>Email : {email}</div>
      <div className='Mmessage'>Message : {message}</div>
      <div className='Mtime'>Time : {joined}</div>
    </div>
  </div>
  );
}

export default Mcard;

