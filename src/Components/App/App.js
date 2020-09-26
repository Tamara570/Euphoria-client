import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import LogIn from '../../routes/LogIn/LogIn';
import Register from '../../routes/Register/Register';
import MyJournal from '../MyJournal/MyJournal';
import BlogPage from '../BlogPage/BlogPage';
import VideoPage from '../VideoPage/VideoPage';
import Resources from '../Resources/Resources';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={HomePage} />
          <Route path='/login' component={LogIn} />
          <Route path='/register' component={Register} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/journal' component={MyJournal} />
          <Route path='/video' component={VideoPage} />
          <Route path='/resources' component={Resources} />
        </Switch>
        
      </div>
    );
  }  
}

export default App;
