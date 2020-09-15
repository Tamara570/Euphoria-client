import React, { Component } from 'react';
import './RegisterPage.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class RegisterPage extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <Navbar />
                <h2>Welcome to Our Community</h2>
                <form className="RegisterPage_form">
                    <div className="Register_inputs">
                        <label for="fname">Full name:</label>
                        <input type="text" id="fname" name="fname" value="John Doe" />
                        <label for="uname">Username:</label>
                        <input type="text" id="uname" name="uname" value="JohnD@yoohoo.etc" />
                        <label for="pword">Create Password:</label>
                        <input type="text" id="pword" name="pword" value="qwerty12%" />
                        <input type="submit" value="Register!" />
                    </div>
                </form>
                <Contact />
            </div>
        );
    }
}

export default RegisterPage;