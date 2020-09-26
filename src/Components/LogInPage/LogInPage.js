import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import './LogInPage.css';
import { Input } from '../../Utils/Utils';


class LogInPage extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { username, password } = ev.target
    
        TokenService.saveAuthToken(
          TokenService.makeBasicAuthToken(username.value, password.value)
        )
    
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }
    

    render() {
        const { error } = this.state
        return (
            <div className="LogInPage">
                
                <form onSubmit={this.handleSubmitBasicAuth}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div>
                        <label for="uname">Username:</label>
                        <Input type="text" id="uname" required name="username" placeholder="Enter username here" />
                        <label for="pword">Password:</label>
                        <Input type="password" id="pword" required name="password" placeholder="Enter password here" />
                        <Input type="submit" value="Log in!" />
                    </div>
                </form>
            </div>
        );
    }
}

export default LogInPage;