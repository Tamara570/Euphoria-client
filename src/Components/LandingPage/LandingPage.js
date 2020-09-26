import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './LandingPage.css';


class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <header className="banner">
                    <h1>Welcome to Euphoria</h1>
                    <p>This site was created to provide a safe space for all. </p>
                </header>

                <section>
                    <Link to='/home'>
                        <button > Home</button>
                    </Link>
                </section>
            </div>
        );
    }
}

export default LandingPage;