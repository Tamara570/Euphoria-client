import React, { Component } from 'react';
import { Input, Required } from '../../Utils/Utils'
import './RegisterPage.css';


class RegisterPage extends Component {
    static defaultProps = {
        onRegisterSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { fullname, username, password } = ev.target

        console.log('registration form submitted')
        console.log({fullname, username, password})

        fullname.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegisterSuccess()
    }


    render() {
        const { error } = this.state
        return (
            <div className="RegisterPage">
                <form 
                    className="RegisterPage_form"
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div className="Register_inputs">
                        <label for="fname"Full >Name: <Required /></label>
                        <Input type="text" required id="fname" name="fullname" placeholder="John Doe" />
                        <label for="uname">Username: <Required /></label>
                        <Input type="text" required id="uname" name="username" placeholder="JohnD@yoohoo.etc" />
                        <label for="pword">Create Password: <Required /></label>
                        <Input type="password" required id="pword" name="password" placeholder="qwerty12%" />
                        <Input type="submit" value="Register!" />
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;