import React from 'react';
const Mcard = ({ id,name,email,message }) => {
  return (
    <div className="container">
    <div className="box green">
      <div className='name'>Message no. {id}</div>
      <div className='name'>Name{name}</div>
      <div className='name'>Email{email}</div>
      <div className='message'>Message{message}</div>
      <div className='time'>Time</div>
    </div>
  </div>
  );
}

export default Mcard;

