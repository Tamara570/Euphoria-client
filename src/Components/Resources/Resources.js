import React, { Component } from 'react';
import './Resources.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class Resources extends Component {
    render() {
        return (
            <div className="Resources">
                <Navbar />
                <div className="Blog_section">
                    <section>
                        <header className="Blog_title">
                            <h2>Helpful Resources</h2>
                        </header>
                        <blockquote>Here i will post links to helpful articles and resources relating to suicide, depression, anxiety, etc.</blockquote>
                        
                    </section>
                </div>
                <Contact />
            </div>
        );
    }
}

export default Resources;