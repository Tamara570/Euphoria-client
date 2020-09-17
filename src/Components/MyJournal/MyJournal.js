import React, { Component } from 'react';
import './MyJournal.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class MyJournal extends Component {
    render() {
        return (
            <div className="MyJournal">
                <Navbar />
                <div className="Journal_section">
                    <section>
                        <header className="Journal_title">
                            <h2>My Private Thoughts</h2>
                        </header>
                        <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat.</blockquote>
                        <p>8/8/2020 8:43 P.M.</p>
                        <button>Publish</button>
                    </section>
                    
                    <section>
                        <header className="Journal_title">
                            <h2>More Private Thoughts</h2>
                        </header>
                        <blockquote>Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis.</blockquote>
                        <p>8/6/2020 2:29 A.M.</p>
                        <button>Publish</button>
                    </section>

                    <section>
                        <header className="Journal_title">
                            <h2>Even More Private Thoughts</h2>
                        </header>
                        <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat.</blockquote>
                        <p>8/11/2020 3:13 P.M.</p>
                        <button>Publish</button>
                    </section>
                </div>
                <Contact />
            </div>
        );
    }
}

export default MyJournal;