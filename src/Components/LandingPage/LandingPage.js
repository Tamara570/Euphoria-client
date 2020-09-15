import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './LandingPage.css';
import Contact from '../Contact/Contact';


class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <header className="banner">
                    <h1>Landing Page</h1>
                    <p>Here is where i will describe what the app does</p>
                </header>

                <section>
                    <Link to='/home'>
                        <button>Home</button>
                    </Link>
                </section>
                <Contact />
            </div>
        );
    }
}

export default LandingPage;