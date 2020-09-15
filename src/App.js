import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import LogInPage from './Components/LogInPage/LogInPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import BlogPage from './Components/BlogPage/BlogPage';
import VideoPage from './Components/VideoPage/VideoPage';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={HomePage} />
          <Route path='/login' component={LogInPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/video' component={VideoPage} />
        </Switch>
        
      </div>
    );
  }  
}

export default App;
