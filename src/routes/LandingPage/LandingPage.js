import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './LandingPage.css';


class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <header className="banner">
                    <h1>Welcome to Euphoria</h1>
                    <p>This page was created for those of us with extreme anxiety/depression 
                        that are struggling with coping during quarantine. This space was also
                        created for those of us that made it through our struggles, and want to give
                        a piece of encouragment to those still going through it.</p>

                    <p>
                        Please click the 'Home' button below to be taken to the home page, where you will
                        be able to create a Blog entry and post it to our community blog. If you don't have
                        anything to say at the moment, that is okay. Feel free to check out our blog section 
                        and like any posts that resonate with you. Please remember this is a 
                        safe space. And you are never alone. 
                    </p>

                    <p>
                        Be sure to check out our 
                        'Meditate' section to see some cool videos about meditation and light yoga. 
                        And for those of you who may need a little extra care today, please look into our resources.
                        There is always someone there, waiting to listen to you.
                    </p>
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