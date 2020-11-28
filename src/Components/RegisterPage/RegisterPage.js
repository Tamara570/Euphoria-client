import React, { Component } from 'react';
import { Input, Required } from '../../Utils/Utils'
import './RegisterPage.css';
import AuthContext from '../../context/auth-context';
import AuthService from '../../services/auth-service';
import { withAppContext } from '../../context/app-context';


class RegisterPage extends Component {
    static contextType = AuthContext;

    state = {
        fullname: '', fullname_valid: false,
        username: '', usernameValid: false,
        password: '', passwordValid: false,
        formValid: false,
        error: null,
        validationError: {},
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({error: null})
        const {fullname, username, password} = this.state
        const newUser = {fullname, username, password}
        //const {setLoading} = this.props.appContext
        try {
         // setLoading(true)
          const savedUser = await AuthService.createUser(newUser)
          this.context.login(savedUser.authToken)
          delete savedUser.authToken
          this.context.setCurrentUser(savedUser)
          //setLoading(true)
          // this will load /workouts which will then re-direct to /new-cycle as there are no workouts
        } catch(err) {
          this.setState({error: err.message})
        }
      }
    
      componentWillUnmount() {
        this.setState({error: null})
      }
    
      handleChange = ({target: {name, value}}) => {
        this.setState({
          [name]: value
        }, name === 'password' ? this.validatePassword : null)
      }
    
      validateForm = () => {
        const {fullname_valid, usernameValid, passwordValid} = this.state
        this.setState({
          formValid: fullname_valid && usernameValid && passwordValid
        })
      }
    
      validateFullName = () => {
        let fullname_valid = true;
        const validationError = {...this.state.validationError}
        const {fullname} = this.state
    
        if (fullname.startsWith(' ') || fullname.endsWith(' ')) {
          fullname_valid = false
          validationError.fullname = 'cannot begin or end with spaces'
        } else if (fullname.length < 3 || fullname.length > 72) {
          fullname_valid = false
          validationError.fullname = 'must be between 3 and 72 characters'
        } else if (fullname.trim().indexOf(' ') === -1) {
          fullname_valid = false
          validationError.fullname = 'must contain a space separating first and last'
        }
    
        this.setState({fullname_valid, validationError}, this.validateForm)
      }
    
      validateUsername = () => {
        let usernameValid = true
        const validationError = {...this.state.validationError}
        const {username} = this.state
    
        if (username.startsWith(' ') || username.endsWith(' ')) {
          usernameValid = false
          validationError.username = 'cannot begin or end with spaces'
        } else if (!username.length) {
          usernameValid = false
          validationError.username = 'is required'
        } else if (!/\S+@\S+/.test(username)) {
            usernameValid = false
          validationError.username = 'invalid format'
        }
    
        this.setState({usernameValid, validationError}, this.validateForm)
      }
    
      validatePassword = () => {
        let passwordValid = true
        const validationError = {...this.state.validationError}
        const {password} = this.state
    
        if (password.startsWith(' ') || password.endsWith(' ')) {
          passwordValid = false
          validationError.password = 'cannot begin or end with spaces'
        } else if (password.length < 6 || password.length > 72) {
          passwordValid = false
          validationError.password = 'must be between 6 and 72 characters'
        }
    
        this.setState({passwordValid, validationError}, this.validateForm)
      }


    render() {
        // const {fullname_valid, usernameValid, passwordValid, formValid} = this.state
        return (
            <div className="RegisterPage">
                <form 
                    className="RegisterPage_form"
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>{this.state.error}</div>

                    <div className="Register_inputs">
                        <label htmlFor="fname"Full >Name: <Required /></label>
                        <Input type="text" required id="fname" name="fullname" placeholder="John Doe" />
                        <label htmlFor="uname">Username: <Required /></label>
                        <Input type="text" required id="uname" name="username" placeholder="JohnD@yoohoo.etc" />
                        <label htmlFor="pword">Create Password: <Required /></label>
                        <Input type="password" required id="pword" name="password" placeholder="qwerty12%" />
                        <Input type="submit" value="Register!" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withAppContext(RegisterPage);