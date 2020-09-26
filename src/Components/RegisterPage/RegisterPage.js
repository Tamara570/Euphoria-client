import React, { Component } from 'react';
import './RegisterPage.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class RegisterPage extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <Navbar />
                <h2>Welcome to Our Family</h2>
                <form className="RegisterPage_form">
                    <div className="Register_inputs">
                        <label for="fname">Full name:</label>
                        <input type="text" id="fname" name="fname" placeholder="John Doe" />
                        <label for="uname">Username:</label>
                        <input type="text" id="uname" name="uname" placeholder="JohnD@yoohoo.etc" />
                        <label for="pword">Create Password:</label>
                        <input type="text" id="pword" name="pword" placeholder="qwerty12%" />
                        <input type="submit" value="Register!" />
                    </div>
                </form>
                <Contact />
            </div>
        );
    }
}

export default RegisterPage;