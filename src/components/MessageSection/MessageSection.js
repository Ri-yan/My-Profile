import React from 'react';
import './MessageSection.css';
import Mcard from './Mcard';

class MessageSection extends React.Component{
    constructor(){
      super();
      this.state={
        list:[]
      };
    }
  componentDidMount(){
     fetch('https://mighty-savannah-87191.herokuapp.com/').then(response=>{
        return response.json();
      }).then(data=>{
        this.setState({
          list: data
    })
      })
 }
    render(){
    const m=this.state.list;
      return(
         <div className="grid-wrap  tc" >
          {
            m.map((name, i) => {
              return (
                <Mcard
                  key={i}
                  id={m[i].id}
                  name={m[i].name}
                  email={m[i].email}
                  message={m[i].message}
                  joined={m[i].joined}
                  />
              );
            })
          }
        </div>    
	);
}
}
export default MessageSection;

