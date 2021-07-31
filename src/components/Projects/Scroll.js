import React from 'react';
const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '2px', height: '100vh',padding:'20px','min-height':'900px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;