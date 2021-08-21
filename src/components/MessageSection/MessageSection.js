import React from 'react';
import '.MessageSection/.css';
import M from './constant';
import Mcard from './Mcard';
const MessageSection=()=>{
return(
       <div className="grid-wrap  tc">
          {
            M.map((name, i) => {
              return (
                <Mcard
                  key={i}
                  id={M[i].id}
                  name={M[i].name}
                  email={M[i].email}
                  message={M[i].message}
                  />
              );
            })
          }
        </div>
       
	);
}
export default MessageSection;