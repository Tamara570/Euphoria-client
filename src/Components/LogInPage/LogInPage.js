import React, { Component } from 'react';
//import TokenService from '../../services/token-service';
import './LogInPage.css';
import { Input } from '../../Utils/Utils';
import AuthContext from '../../context/auth-context';
import AuthService from '../../services/auth-service';
import { withAppContext } from '../../context/app-context';


class LogInPage extends Component {
    static contextType = AuthContext

    state = {
      error: null,
      username: '',
      password: ''
    }
  
    handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({error: null})
      //const {setLoading} = this.props.appContext
      try {
      //  setLoading(true)
        const {username, password} = this.state;
        const response = await AuthService.login(username, password)
      //  setLoading(false)
  
        this.context.login(response.authToken)
        this.context.setCurrentUser(response.user)
      } catch(err) {
        this.setState({error: err.message})
      }
    }
  
    componentWillUnmount() {
      this.setState({error: null})
    }
  
    handleChange = ({ target: { name, value } }) => {
      this.setState({
        [name]: value
      })
    }
      
    render() {
        return (
            <div className="LogInPage">
                
                <form onSubmit={this.handleSubmitBasicAuth}>
                    <div role='alert'>{this.state.error}</div>
                    <div>
                        <label htmlFor="uname">Username:</label>
                        <Input type="text" id="uname" required name="username" placeholder="Enter username here" />
                        <label htmlFor="pword">Password:</label>
                        <Input type="password" id="pword" required name="password" placeholder="Enter password here" />
                        <Input type="submit" value="Log in!" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withAppContext(LogInPage);