import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesOptions from './Particle/Particle.js';
import Navigation from './components/Navigation/Navigation.js';
import Hello from './components/Hello/Hello.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import Contact from './components/Contact/Contact.js';

class App extends React.Component {
  constructor(){
      super();
    this.state={
      route:'home'
    }
}

onRouteChange = (route) =>{
    this.setState({route:route});
  }


    render() {
      return (
        <div className="App">
          <Particles className="particles" 
              params={particlesOptions}
            />
          <Navigation onRouteChange={this.onRouteChange}/>
            { 
              this.state.route ==='home'
              ? <div>
              <Hello/>
              <Contact/>
              </div>
              : (
                  this.state.route ==='projects'
                  ?<Projects/>
                  :(
                  this.state.route ==='experience'
                  ?<Experience/>
                  :<Contact/>
                )
                  
                )
            }
        </div>
      );
   }
}
export default App;
