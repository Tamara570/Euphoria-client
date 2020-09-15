import React, { Component } from 'react';
import './LogInPage.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class LogInPage extends Component {
    render() {
        return (
            <div className="LogInPage">
                <Navbar />
                <h2>Welcome back!</h2>
                <form>
                    <div>
                        <label for="uname">Username:</label>
                        <input type="text" id="uname" name="uname" value="Enter username here" />
                        <label for="pword">Password:</label>
                        <input type="text" id="pword" name="pword" value="Enter password here" />
                        <input type="button" onClick="/home" value="Log in!" />
                    </div>
                </form>
                <Contact />
            </div>
        );
    }
}

export default LogInPage;