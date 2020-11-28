import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from '../../routes/LogIn/LogIn'
import Register from '../../routes/Register/Register'
import LandingPage from '../../routes/LandingPage/LandingPage';
import HomePage from '../../routes/HomePage/HomePage';
import BlogPage from '../../routes/BlogPage/BlogPage';
import VideoPage from '../../routes/VideoPage/VideoPage';
import Resources from '../../routes/Resources/Resources';
import BlogContext from '../../context/BlogContext';
import config from '../../config'
import { withAppContext } from '../../context/app-context';


class App extends Component {
  static contextType = BlogContext;

  state = {
    blog: []
  }

  componentDidMount() {
    Promise.all (
      fetch(`${config.API_ENDPOINT}/blog`)
    )

    .then((blogRes) => {
      if(!blogRes.ok)
        return blogRes.json().then(e => Promise.reject(e));
      
      return Promise.all(blogRes.json());
    })
    .then((blog) => {
      this.setState(blog);
  })
  .catch(error => {
      console.error({error});
  });
  }

  render() {
    const value = {
      blog: this.state.blog,
    };
    return (
      <BlogContext.Provider value={value}>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={HomePage} />
            <Route path='/blog' component={BlogPage} />
            <Route path='/video' component={VideoPage} />
            <Route path='/resources' component={Resources} />
          </Switch>
        </div>
      </BlogContext.Provider>
    );
  }  
}

export default withAppContext(App);
