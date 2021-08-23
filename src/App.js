import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import Contact from './components/Contact/Contact.js';
import MessageSection from './components/MessageSection/MessageSection.js';
import AdminLogin from './components/Admin/Admin.js';

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
          <Navigation onRouteChange={this.onRouteChange}/>
            { 
              this.state.route ==='home'
              ?<div>
                <Home/>
                <Contact loadUser={this.loadUser}/>
                </div>
              :(
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
                    :(this.state.route ==='admin'
                      ?<AdminLogin onRouteChange={this.onRouteChange}/>:<Contact/>)
                    )
                )
                )
            }
        </div>
      );
   }
}
export default App;
