import React from 'react';
import './App.css';
// import Particles from 'react-particles-js';
// import particlesOptions from './Particle/Particle.js';
import Navigation from './components/Navigation/Navigation.js';
import Hello from './components/Hello/Hello.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import Contact from './components/Contact/Contact.js';
import MessageSection from './components/MessageSection/MessageSection.js';


class App extends React.Component {
  constructor(){
      super();
    this.state={
      route:'home',
      user:{
          id:'',
          name:'',
          email:'',
          message:'',
          joined: ''
      }
    }
}

// getData=()=>{
//     fetch('http://localhost:3000/').then(response=>{
//         return response.json();
//       }).then(data=>{
//         console.log(data)
//       })
//  }

loadUser = (data) => {
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        message: data.message,
        joined: data.joined
      }})
    }

onRouteChange = (route) =>{
    this.setState({route:route});
  }
    render(){
      return (
        <div className="App">
          {/*<Particles className="particles" 
              params={particlesOptions}
            />*/}

          <Navigation onRouteChange={this.onRouteChange}/>
            { 
              this.state.route ==='home'
              ? <div>
              <Hello/>
              
              <Contact loadUser={this.loadUser}/>
              </div>
              : (
                  this.state.route ==='projects'
                  ?<Projects/>
                  :(
                  this.state.route ==='experience'
                  ?<Experience/>
                  :(this.state.route ==='message'
                    ?<MessageSection
                    name={this.state.name}
                    email={this.state.email}
                    message={this.state.message}
                    id={this.state.id}
                    joined={this.state.joined}
                    />
                    :<Contact/>
                    )
                )
                )
            }
        </div>
      );
   }
}
export default App;

/*

 create table users(id serial not null,name varchar(100),email text not null,message varchar(600),joined timestamp not null);
*/